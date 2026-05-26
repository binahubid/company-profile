import { motion } from "framer-motion";
import { DIMENSIONS, QUESTIONS } from "../questions";
import { LIKERT_OPTIONS } from "../_types";

const DIMENSION_GUIDANCE: Record<string, string> = {
  Insights: "Kami membaca bagaimana data, indikator, dan akar masalah digunakan dalam keputusan tim.",
  Lab: "Dimensi ini melihat kecocokan kompetensi, kualitas komunikasi, dan kemampuan problem solving.",
  Coach: "Bagian ini menilai kualitas arahan, feedback, tanggung jawab, dan growth mindset.",
  Play: "Kami mengukur energi kerja, engagement, rasa dihargai, dan koneksi antaranggota tim.",
  Academy: "Dimensi ini memetakan struktur pembelajaran, kurikulum, dan budaya belajar berkelanjutan.",
  Works: "Bagian ini melihat kejelasan KPI, dokumentasi proses, peran, dan ritme monitoring pekerjaan.",
  Impact: "Kami membaca sejauh mana program pengembangan punya indikator, bukti dampak, dan ROI.",
};

const REINFORCEMENT = [
  "Jawaban yang jujur lebih berguna daripada jawaban yang terlihat ideal.",
  "Banyak organisasi menemukan blind spot saat membandingkan praktik harian dengan ekspektasi strategis.",
  "Pola kecil yang konsisten sering menjadi sinyal terbesar dalam performa tim.",
];

interface QuestionsStepProps {
  step: number;
  answers: Record<number, number>;
  onAnswer: (qId: number, val: number) => void;
}

export function QuestionsStep({ step, answers, onAnswer }: QuestionsStepProps) {
  const pageIndex = step - 2;
  const pageQuestions = QUESTIONS.slice(pageIndex * 7, pageIndex * 7 + 7);
  const dimension = DIMENSIONS[pageIndex];

  return (
    <motion.div
      key={`page-${step}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full max-w-4xl px-4 py-6 flex flex-col items-center"
    >
      <div className="mb-8 max-w-3xl text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">
          Dimensi {dimension}
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-[#0B2C6B] leading-tight">
          Sejauh mana Anda setuju dengan pernyataan berikut?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-black/48">
          {DIMENSION_GUIDANCE[dimension]}
        </p>
      </div>

      <div className="space-y-4 w-full max-w-3xl">
        {pageQuestions.map((q, idx) => {
          const globalIdx = pageIndex * 7 + idx + 1;
          const displayIdx = globalIdx < 10 ? `0${globalIdx}` : globalIdx;
          
          return (
            <div
              key={q.id}
              className="relative bg-white p-4 md:p-8 rounded-[24px] md:rounded-[40px] border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden"
            >
              {/* Scaled Background Number - Reduced by 30% */}
              <div className="absolute top-[-5px] left-[-2px] text-[70px] font-black text-black/[0.015] leading-none pointer-events-none select-none">
                {displayIdx}
              </div>

              <div className="relative z-10">
                <h3 className="text-sm md:text-lg font-light text-[#0B2C6B] mb-5 text-left leading-relaxed px-2">
                  {q.text}
                </h3>

                {idx === 3 && (
                  <div className="mb-5 rounded-2xl border border-[#D9A441]/18 bg-[#D9A441]/[0.055] px-5 py-4">
                    <p className="text-xs font-medium leading-relaxed text-[#0B2C6B]/62">
                      {REINFORCEMENT[pageIndex % REINFORCEMENT.length]}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-5 gap-1.5 md:gap-4">
                  {LIKERT_OPTIONS.map((opt) => {
                    const isSelected = answers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => onAnswer(q.id, opt.value)}
                        className={`flex flex-col items-center justify-center py-2.5 md:py-5 rounded-xl md:rounded-2xl border transition-all duration-300 ${isSelected
                            ? "bg-[#0B2C6B] border-[#0B2C6B] text-white shadow-[0_15px_30px_rgba(10,26,58,0.25)] scale-[1.03]"
                            : "bg-[#F5F7F9] border-black/[0.03] text-black/60 hover:bg-black/[0.05] hover:border-black/10"
                          }`}
                      >
                        <span className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${isSelected ? "text-[#D9A441]" : "text-[#0B2C6B]"}`}>
                          {opt.value}
                        </span>
                        <span className={`text-[7px] md:text-[9px] text-center leading-tight uppercase tracking-[0.08em] font-bold transition-colors ${isSelected ? "text-white" : "text-black/40"}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
