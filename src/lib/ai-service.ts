import OpenAI from 'openai';
import { AssessmentData, DIMENSIONS } from './validations';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'arcee-ai/trinity-large-thinking:free';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'PT BinaHub';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': APP_URL,
    'X-Title': COMPANY_NAME,
  },
});

async function callAI(messages: any[], jsonMode: boolean = false) {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is missing');
  }

  try {
    const response = await openai.chat.completions.create({
      model: OPENROUTER_MODEL,
      messages: messages,
      // Beberapa model gratis tidak mendukung JSON mode, kita matikan agar lebih kompatibel
      // response_format: jsonMode ? { type: 'json_object' } : undefined,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('Empty response from AI model');
    }
    return content;
  } catch (error: any) {
    console.error(`[AI Error] OpenRouter call failed:`, error.message);
    throw error;
  }
}

export async function analyzeAssessment(data: AssessmentData) {
  // Group answers by dimension for cleaner analysis
  const dimensionScores: Record<string, number> = {};
  const dimensionDetails: Record<string, number[]> = {};

  DIMENSIONS.forEach((dim, index) => {
    const start = index * 7 + 1;
    const end = start + 6;
    const scores: number[] = [];
    for (let i = start; i <= end; i++) {
      scores.push(data.answers[i.toString()] || 0);
    }
    const sum = scores.reduce((a, b) => a + b, 0);
    dimensionScores[dim] = Math.round((sum / 35) * 100);
    dimensionDetails[dim] = scores;
  });

  const totalSum = Object.values(data.answers).reduce((a, b) => a + b, 0);
  const overallScore = Math.round((totalSum / 245) * 100);
  const sortedDimensions = [...DIMENSIONS].sort((a, b) => dimensionScores[b] - dimensionScores[a]);
  const topDimension = sortedDimensions[0];
  const lowestDimension = sortedDimensions[sortedDimensions.length - 1];
  const secondLowestDimension = sortedDimensions[sortedDimensions.length - 2];

  const prompt = `
Kamu adalah Tim Konsultan Senior dari PT BinaHub - Human Synergy Partner.
Analisis data diagnostic assessment berikut dan berikan penilaian profesional, tajam, dan terasa spesifik untuk organisasi responden. JANGAN PERNAH menyebutkan bahwa kamu adalah AI atau sistem otomatis. Berperanlah sebagai konsultan manusia senior.

Gaya analisis wajib:
- Semua output wajib menggunakan Bahasa Indonesia. Jangan gunakan label, istilah profil, atau archetype berbahasa Inggris.
- Diagnosis dulu, solusi kedua.
- Hindari bahasa generik seperti "meningkatkan sinergi", "mengoptimalkan SDM", atau "mendorong transformasi" tanpa konteks.
- Gunakan cross-dimensional reasoning: hubungkan minimal dua skor dimensi untuk menjelaskan pola.
- Jelaskan implikasi bisnis atau risiko eksekusi, bukan hanya daftar rekomendasi.
- Rekomendasi harus terasa lahir dari skor, tantangan, goal, jabatan, dan skala organisasi.
- Jangan memberikan benchmark palsu atau klaim industri yang tidak ada datanya.

DATA RESPONDEN:
Nama: ${data.name}
Perusahaan: ${data.company}
Skala (Karyawan): ${data.employees || '-'}
Jabatan: ${data.role || '-'}
Tantangan Utama: ${data.challenge || '-'}
Goal yang Ingin Dicapai: ${data.target || '-'}

DATA SKOR DIMENSI (0-100%):
${DIMENSIONS.map(dim => `- ${dim}: ${dimensionScores[dim]}%`).join('\n')}

SKOR KESELURUHAN: ${overallScore}%
DIMENSI TERTINGGI: ${topDimension} (${dimensionScores[topDimension]}%)
DIMENSI TERENDAH: ${lowestDimension} (${dimensionScores[lowestDimension]}%)
DIMENSI TERENDAH KEDUA: ${secondLowestDimension} (${dimensionScores[secondLowestDimension]}%)

Berikan output dalam format JSON PERSIS seperti ini (tanpa markdown, langsung JSON):
{
  "category": "<Pemula|Berkembang|Profesional|Unggulan>",
  "archetype": "<label 2-4 kata Bahasa Indonesia yang menggambarkan profil organisasi, contoh: Pembangun Strategis, Operator Eksekusi, Eksplorator Analitik, Transformer Pertumbuhan>",
  "scoreInterpretation": "<2 kalimat yang menjelaskan arti skor keseluruhan secara kontekstual untuk perusahaan ini. Jelaskan apakah ini fondasi kuat, fase berkembang, atau area risiko.>",
  "analysis": "<paragraf analisis eksekutif 4-5 kalimat. Harus menyebut pola lintas dimensi, kekuatan utama, bottleneck utama, dan implikasi bisnis.>",
  "crossDimensionalInsights": [
    "<insight 1 yang menghubungkan dua atau lebih dimensi dan menjelaskan maknanya>",
    "<insight 2 yang menghubungkan dua atau lebih dimensi dan menjelaskan maknanya>"
  ],
  "riskProjection": "<proyeksi risiko 12-18 bulan jika gap utama tidak ditangani. Spesifik, tidak menakut-nakuti berlebihan.>",
  "strategicKey": "<paragraf kunci strategis 90 hari ke depan. Fokus pada prioritas dan konsekuensi bisnis.>",
  "recommendations": [
    {
      "title": "<judul rekomendasi>",
      "diagnosis": "<1 kalimat diagnosis yang menjelaskan mengapa rekomendasi ini relevan berdasarkan data>",
      "description": "<deskripsi aksi konkret yang personal untuk konteks organisasi>",
      "priority": "<high|medium|low>",
      "service": "<nama layanan PT BinaHub yang relevan (Insights, Lab, Coach, Play, Academy, Works, atau Impact)>"
    }
  ]
}

Buat 5 rekomendasi yang spesifik dan actionable. Setiap rekomendasi harus diawali diagnosis, lalu aksi. Kategori ditentukan oleh skor keseluruhan:
- Pemula: < 40%
- Berkembang: 40-60%
- Profesional: 61-80%
- Unggulan: > 80%
`;

  const text = await callAI([
    { role: 'system', content: 'Anda adalah konsultan bisnis senior manusia dari PT BinaHub. Seluruh output harus berbahasa Indonesia dan berbentuk JSON saja.' },
    { role: 'user', content: prompt }
  ], true);

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Invalid AI response format');

  const aiResult = JSON.parse(jsonMatch[0]);
  const fallbackArchetype = overallScore >= 80 ? 'Transformer Pertumbuhan' : overallScore >= 61 ? 'Pembangun Strategis' : overallScore >= 40 ? 'Operator Berkembang' : 'Pembangun Awal';

  return {
    ...aiResult,
    archetype: aiResult.archetype || fallbackArchetype,
    scoreInterpretation: aiResult.scoreInterpretation || `Skor ${overallScore}% menempatkan ${data.company} pada kategori ${aiResult.category}. Ini menunjukkan adanya fondasi yang dapat dikembangkan lebih lanjut melalui prioritas yang lebih tajam pada dimensi ${lowestDimension}.`,
    crossDimensionalInsights: Array.isArray(aiResult.crossDimensionalInsights) ? aiResult.crossDimensionalInsights : [
      `Dimensi ${topDimension} menjadi kekuatan relatif, sementara ${lowestDimension} menjadi area yang paling perlu diprioritaskan.`,
      `Kombinasi skor ini menunjukkan perlunya menghubungkan kapasitas manusia dengan ritme eksekusi yang lebih konsisten.`,
    ],
    riskProjection: aiResult.riskProjection || `Jika dimensi ${lowestDimension} tidak diperkuat, organisasi berisiko mengalami perlambatan eksekusi saat tuntutan pertumbuhan meningkat.`,
    strategicKey: aiResult.strategicKey || `Dalam 90 hari ke depan, fokus utama ${data.company} adalah memperkuat dimensi ${lowestDimension} dan menghubungkannya dengan prioritas operasional yang paling berdampak.`,
    recommendations: Array.isArray(aiResult.recommendations)
      ? aiResult.recommendations.map((rec: any) => ({
          ...rec,
          diagnosis: rec.diagnosis || `Rekomendasi ini relevan karena dimensi ${rec.service || lowestDimension} menjadi sinyal penting dalam hasil diagnostik.`,
        }))
      : [],
    scores: {
      ...dimensionScores,
      overall: overallScore
    }
  };
}

export async function scoreLeadWithAI(leadData: {
  source: string;
  assessmentCompleted: boolean;
  name: string;
  company: string;
  challenge?: string;
}) {
  const prompt = `
Berikan skor lead (0-100) berdasarkan data berikut:
Nama: ${leadData.name}
Perusahaan: ${leadData.company}
Source: ${leadData.source}
Assessment Completed: ${leadData.assessmentCompleted}
Challenge: ${leadData.challenge || 'None'}

Output JSON:
{
  "score": <0-100>,
  "status": "<hot|warm|cold>",
  "reasoning": "<alasan singkat 1 kalimat>"
}
`;

  const text = await callAI([
    { role: 'system', content: 'You are a lead scoring AI.' },
    { role: 'user', content: prompt }
  ], true);

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return { score: 30, status: 'cold', reasoning: 'Insufficient data' };
  return JSON.parse(jsonMatch[0]);
}

export async function chatWithAI(
  message: string, 
  history: { role: string, content: string }[], 
  context?: { currentPath?: string, pageTitle?: string }
) {
  const systemPrompt = `
Kamu adalah Nara, "The Executive Concierge" dari PT BinaHub - AI Powered Human Synergy. 

SOUL & PERSONALITY:
- Karakter utama: Sangat ramah, sabar, pendengar yang baik, solutif, proaktif, dan sangat suka membantu orang lain dengan tulus.
- Gaya bicaramu: Profesional (Executive Style) namun sangat hangat, empatik, menyambut dengan ramah, dan solutif.
- Jadilah pendengar yang baik sebelum memberikan rekomendasi, dan proaktif menawarkan bantuan yang relevan.
- Anda adalah partner strategis dan sahabat terpercaya bagi user dalam menemukan solusi bisnis.

SKILLS & EXPERTISE:
- Pakar dalam Ekosistem BinaHub: Insights, Lab, Coach, Play, Academy, Works, Impact.
- Ahli dalam mengarahkan user untuk mengambil asesmen (Diagnostic Assessment).
- Selalu tahu cara mengkonversi percakapan menjadi solusi bisnis secara halus dan bersahabat.

ATURAN KOMUNIKASI:
1. RAMAH & EMPATIK: Selalu mulai dengan sapaan hangat. Dengarkan dengan sabar dan berikan respon yang menenangkan serta profesional.
2. RESPON TERUKUR: Jaga respon agar berkisar antara 2-4 kalimat agar nyaman dibaca namun tetap padat solusi.
3. SELALU ACTION-ORIENTED & PROAKTIF: Arahkan user ke halaman asesmen (/insight) atau kontak WhatsApp jika mereka butuh bantuan mendalam.

KEMAMPUAN SYSTEM (TOOLS):
Jika user menyebutkan nama dan email atau kontak mereka di chat, kamu HARUS merespon dengan format JSON ini agar sistem kami menyimpannya (jangan sertakan teks lain di luar JSON jika menggunakan tool ini):
{"tool": "save_chat_lead", "args": {"name": "nama user", "email": "email user"}}

CURRENT SITE CONTEXT:
- Path: ${context?.currentPath || '/'}
- Page Title: ${context?.pageTitle || 'BinaHub'}
`;

  // Filter history to last 10 messages to save context
  const recentHistory = history.slice(-10).map(m => ({
    role: m.role as 'user' | 'assistant' | 'system',
    content: m.content
  }));

  const messages = [
    { role: 'system', content: systemPrompt },
    ...recentHistory,
    { role: 'user', content: message }
  ];

  const text = await callAI(messages, false);
  return text;
}
