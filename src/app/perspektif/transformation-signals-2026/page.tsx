import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transformation Signals 2026 | BinaHub Perspektif",
  description:
    "Sepuluh sinyal perubahan dunia kerja Indonesia 2026 dan implikasinya bagi strategi transformasi manusia, organisasi, dan AI.",
};

const SIGNALS = [
  {
    group: "Economic Pressure",
    title: "Daya beli melemah",
    status: "Terbukti",
    signal:
      "Konsumen semakin berhati-hati menjaga keamanan finansial ketika upah riil dan penghasilan terasa tertahan.",
    evidence:
      "Analisis NEXT Indonesia Center menyebut upah Agustus 2025 naik 1,94% yoy, sementara inflasi 2,31% yoy, sehingga upah riil terkontraksi 0,37%. IPSI BPS juga sempat turun dari 120,2 pada Juni 2025 ke 112,9 pada September 2025.",
    implication:
      "Organisasi tidak bisa lagi mengandalkan asumsi daya beli yang stabil. Strategi people development perlu semakin dekat dengan produktivitas, prioritas bisnis, dan kemampuan tim merespons tekanan pasar.",
    sources: ["NEXT Indonesia Center", "BPS - Indeks Penghasilan Saat Ini"],
  },
  {
    group: "Economic Pressure",
    title: "Tekanan efisiensi dan margin",
    status: "Terbukti",
    signal:
      "Banyak perusahaan mulai menahan ekspansi, merapikan struktur, dan mencari cara bekerja yang lebih hemat tanpa kehilangan kinerja.",
    evidence:
      "PMI manufaktur Indonesia April 2026 tercatat kontraksi di 49,1. Pelemahan rupiah, tekanan pasar modal, dan konfirmasi pelaku HR tentang efisiensi memperkuat sinyal ini.",
    implication:
      "Dalam fase defensif, pelatihan yang terlalu generik makin sulit dibenarkan. Program perlu langsung terkait dengan prioritas kapabilitas, perubahan perilaku, dan ukuran dampak.",
    sources: ["S&P Global PMI", "PMSM Indonesia", "Data pasar keuangan"],
  },
  {
    group: "Transformation Gap",
    title: "Skill gap dan talent mismatch",
    status: "Terbukti",
    signal:
      "Kebutuhan kerja bergerak ke problem solving, analisis, digital skills, dan kemampuan praktis, sementara suplai talenta belum selalu siap.",
    evidence:
      "Survei PwC 2025 menyebut 57% perusahaan di Indonesia melihat kurangnya digital skills sebagai hambatan ekspansi. PMSM Indonesia juga menyoroti lulusan baru yang masih terlalu teoretis.",
    implication:
      "Learning strategy perlu berpindah dari transfer materi ke pembentukan kapabilitas. Simulasi, coaching, project-based learning, dan assessment menjadi semakin penting.",
    sources: ["PwC Hopes and Fears 2025 Indonesia", "PMSM Indonesia", "World Bank"],
  },
  {
    group: "Transformation Gap",
    title: "Bingung transformasi AI",
    status: "Terbukti dengan nuansa",
    signal:
      "Tekanan adopsi AI meningkat, tetapi banyak organisasi masih berhenti di eksperimen, workshop, dan pilot yang belum mengubah proses inti.",
    evidence:
      "Survei regional menempatkan Indonesia sebagai first mover AI di ASEAN, namun data adopsi menunjukkan integrasi mendalam ke proses bisnis masih terbatas. Sebagian besar inisiatif masih berada pada tahap eksplorasi.",
    implication:
      "AI transformation tidak cukup dimulai dari tools. Organisasi perlu kesiapan manusia, use case yang jelas, tata kelola, dan cara mengukur dampak kerja setelah AI masuk.",
    sources: ["The Business Times - Kantar", "IDC", "McKinsey", "Gartner"],
  },
  {
    group: "Economic Pressure",
    title: "Ketidakpastian ekonomi global",
    status: "Terbukti",
    signal:
      "Volatilitas kurs, energi, dan geopolitik membuat pengambilan keputusan bisnis semakin penuh skenario.",
    evidence:
      "Pelemahan rupiah, fluktuasi harga minyak Brent, ketegangan geopolitik, dan cadangan devisa yang tetap perlu dijaga menunjukkan tekanan eksternal yang terus memengaruhi perusahaan.",
    implication:
      "Pemimpin membutuhkan cara berpikir adaptif: membaca sinyal, membuat prioritas, dan menjaga tim tetap bergerak ketika kepastian makin mahal.",
    sources: ["Bank Indonesia", "Data komoditas energi", "Laporan pasar"],
  },
  {
    group: "Workforce Shift",
    title: "Ketidakpastian masa depan kerja",
    status: "Terbukti",
    signal:
      "Sebagian pekerja merasa lebih aman karena mampu memakai AI, sementara kelompok lain melihat masa depan kerja makin sulit ditebak.",
    evidence:
      "PwC 2025 menunjukkan pengguna GenAI harian di Indonesia merasa lebih aman terhadap pekerjaannya dibanding pengguna tidak rutin. CSIS juga melaporkan lebih dari 1,01 juta lulusan universitas menganggur pada awal 2025.",
    implication:
      "Kesenjangan rasa aman akan menjadi isu budaya. Organisasi perlu membantu pekerja memahami peran baru, bukan hanya meminta mereka beradaptasi sendiri.",
    sources: ["PwC Hopes and Fears 2025 Indonesia", "CSIS", "Data ketenagakerjaan"],
  },
  {
    group: "Workforce Shift",
    title: "Burnout dan mental fatigue",
    status: "Terbukti",
    signal:
      "Produktivitas tidak hanya ditentukan oleh skill, tetapi juga energi mental yang tersisa untuk berpikir, berkolaborasi, dan mengambil keputusan.",
    evidence:
      "Laporan SHRM 2025 menyebut 52% karyawan mengalami burnout. Workplace Wellbeing Score Indonesia 2025 menunjukkan kesejahteraan mental pekerja Indonesia berada di bawah rata-rata global.",
    implication:
      "Wellbeing perlu diperlakukan sebagai isu performa, bukan sekadar benefit. Desain kerja, kepemimpinan, dan ritme belajar perlu ikut dibenahi.",
    sources: ["SHRM 2025", "Workplace Wellbeing Score Indonesia 2025"],
  },
  {
    group: "Workforce Shift",
    title: "Tekanan biaya hidup",
    status: "Terbukti",
    signal:
      "Ketika pendapatan terasa tertinggal dari kenaikan harga, pekerja membawa tekanan finansial itu ke dalam energi dan fokus kerja.",
    evidence:
      "Upah buruh Februari 2026 disebut naik 3,09% yoy ke Rp3,29 juta per bulan, sementara inflasi Februari 2026 mencapai 4,76% yoy, sehingga upah riil tertekan.",
    implication:
      "Employee experience tidak bisa dilepaskan dari konteks ekonomi. Program engagement perlu lebih peka terhadap beban nyata pekerja.",
    sources: ["BPS", "Data inflasi dan upah buruh"],
  },
  {
    group: "Workforce Shift",
    title: "Entry-level makin sulit",
    status: "Terbukti",
    signal:
      "Posisi awal karier semakin tertekan oleh efisiensi, otomasi, AI, dan ekspektasi skill yang lebih tinggi sejak hari pertama.",
    evidence:
      "PMSM Indonesia mengonfirmasi fresh graduate semakin sulit mendapat pekerjaan. LPEM UI menambahkan pengangguran terdidik cenderung meningkat tajam saat ekonomi melemah.",
    implication:
      "Organisasi perlu memikirkan ulang pipeline talenta: onboarding, apprenticeship, learning sprint, dan akses pengalaman praktis menjadi lebih penting.",
    sources: ["PMSM Indonesia", "LPEM UI"],
  },
  {
    group: "Transformation Gap",
    title: "Anxiety adaptasi teknologi",
    status: "Plausible dan didukung",
    signal:
      "Pekerja diminta terus belajar teknologi baru, tetapi akses, waktu, dan dukungan belajar tidak selalu merata.",
    evidence:
      "Survei Graphie 2026 menyoroti kekurangan digital skills sebagai hambatan. PwC juga menunjukkan upskilling divide antara non-manajer dan eksekutif senior.",
    implication:
      "Upskilling perlu demokratis. Jika akses belajar hanya kuat di level atas, transformasi akan menciptakan jarak baru di dalam organisasi.",
    sources: ["Graphie 2026", "PwC Hopes and Fears 2025 Indonesia"],
  },
];

export default function TransformationSignalsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 font-sans text-[#1F2328] antialiased">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-5 pb-24 md:px-8 lg:grid-cols-[260px_minmax(0,820px)_240px] lg:gap-10">
        <aside className="hidden border-r border-[#E7E7E5] pr-6 lg:block">
          <div className="sticky top-28">
            <Link
              href="/perspektif"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#6B6F76] transition-colors hover:text-[#0B2C6B]"
            >
              <ArrowLeft size={14} />
              Perspektif
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A8F98]">
              Documentation
            </p>
            <nav className="mt-4 space-y-1 text-sm">
              <a href="#overview" className="block rounded-[6px] px-3 py-2 text-[#4A4C54] hover:bg-[#F7F8FA] hover:text-[#0B2C6B]">
                Overview
              </a>
              <a href="#signals" className="block rounded-[6px] px-3 py-2 text-[#4A4C54] hover:bg-[#F7F8FA] hover:text-[#0B2C6B]">
                The 10 Signals
              </a>
              <a href="#response" className="block rounded-[6px] px-3 py-2 text-[#4A4C54] hover:bg-[#F7F8FA] hover:text-[#0B2C6B]">
                Response
              </a>
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          <header id="overview" className="scroll-mt-28 border-b border-[#E7E7E5] pb-10 pt-8">
            <div className="inline-flex rounded-[6px] border border-[#E7E7E5] bg-[#F7F8FA] px-2.5 py-1 text-xs font-medium text-[#5F646D]">
              BinaHub Intelligence / 2026
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#1F2328] md:text-6xl">
              Transformation Signals
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-[1.75] text-[#4A4C54]">
              A structured reference for reading changes in work, capability, and organizational pressure in Indonesia.
            </p>
          </header>

          <section className="mt-8 rounded-[8px] border border-[#D8E0EA] bg-[#F7FAFF] p-5">
            <p className="text-sm font-semibold text-[#0B2C6B]">How to read this document</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4A4C54]">
              Each signal is organized as a documentation block: current pattern, evidence fragment,
              organizational implication, and source notes. The goal is clarity, not news reporting.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#1F2328]">
              System Map
            </h2>
            <div className="mt-4 overflow-hidden rounded-[8px] border border-[#E7E7E5]">
              {[
                ["Economic Pressure", "Daya beli, margin, efisiensi, volatilitas global"],
                ["Workforce Shift", "Burnout, biaya hidup, karier awal, job security"],
                ["Transformation Gap", "AI adoption, skill mismatch, upskilling divide"],
              ].map(([area, desc]) => (
                <div key={area} className="grid gap-2 border-b border-[#E7E7E5] px-4 py-3 last:border-b-0 md:grid-cols-[180px_1fr]">
                  <p className="text-sm font-semibold text-[#1F2328]">{area}</p>
                  <p className="text-sm leading-relaxed text-[#5F646D]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="signals" className="mt-12 scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#1F2328]">
              The 10 Signals
            </h2>
            <p className="mt-3 text-base leading-[1.8] text-[#4A4C54]">
              Use these as reference points for strategic diagnosis, not as isolated facts.
            </p>

            <div className="mt-8 space-y-10">
              {SIGNALS.map((item, index) => (
                <section
                  id={`signal-${index + 1}`}
                  key={item.title}
                  className="scroll-mt-28 border-t border-[#E7E7E5] pt-7"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#787C82]">
                    <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.group}</span>
                    <span className="rounded-[6px] bg-[#F1F3F5] px-2 py-0.5">{item.status}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#1F2328]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.8] text-[#37352F]">{item.signal}</p>

                  <div className="mt-5 overflow-hidden rounded-[8px] border border-[#E7E7E5]">
                    <div className="grid border-b border-[#E7E7E5] md:grid-cols-[180px_1fr]">
                      <div className="bg-[#F7F8FA] px-4 py-3 text-sm font-semibold text-[#1F2328]">
                        Evidence
                      </div>
                      <div className="px-4 py-3 text-sm leading-[1.75] text-[#4A4C54]">{item.evidence}</div>
                    </div>
                    <div className="grid md:grid-cols-[180px_1fr]">
                      <div className="bg-[#F7F8FA] px-4 py-3 text-sm font-semibold text-[#1F2328]">
                        Implication
                      </div>
                      <div className="px-4 py-3 text-sm leading-[1.75] text-[#4A4C54]">{item.implication}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.sources.map((source) => (
                      <span
                        key={source}
                        className="inline-flex items-center gap-2 rounded-[6px] bg-[#F7F8FA] px-2.5 py-1.5 text-xs text-[#5F646D]"
                      >
                        <ExternalLink size={12} />
                        {source}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="response" className="mt-14 scroll-mt-28 border-t border-[#E7E7E5] pt-8">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#1F2328]">Response</h2>
            <p className="mt-4 text-base leading-[1.8] text-[#4A4C54]">
              When signals change, human development needs a stronger operating system: diagnosis,
              intervention design, learning experience, and impact measurement connected in one flow.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/insight"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] bg-[#0B2C6B] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#08245A]"
              >
                Mulai Diagnosa
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/ecosystem"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] border border-[#D8DADf] bg-white px-4 text-sm font-semibold text-[#2F3437] transition-colors hover:bg-[#F7F8FA]"
              >
                Lihat Ekosistem
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-28 border-l border-[#E7E7E5] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A8F98]">
              On this page
            </p>
            <nav className="mt-4 max-h-[70vh] space-y-1 overflow-y-auto pr-2 text-sm">
              {SIGNALS.map((item, index) => (
                <a
                  key={item.title}
                  href={`#signal-${index + 1}`}
                  className="block rounded-[6px] px-3 py-2 text-[#6B6F76] hover:bg-[#F7F8FA] hover:text-[#0B2C6B]"
                >
                  {String(index + 1).padStart(2, "0")} {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
