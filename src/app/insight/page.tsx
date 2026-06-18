import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck, Timer } from "lucide-react";

const APP_INSIGHT_URL = "https://app.binahub.id/insight";

export default function InsightBridgePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] px-6 pb-20 pt-32 text-[#0B2C6B] md:px-12 md:pb-28 md:pt-40 lg:px-20">
      <section className="mx-auto grid max-w-7xl items-center gap-10 rounded-[18px] border border-black/[0.045] bg-white p-6 shadow-[0_26px_90px_-70px_rgba(11,44,107,0.62)] md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D9A441]/28 bg-[#D9A441]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A620F]">
            <BarChart3 size={15} />
            BinaInsight Diagnostic
          </div>
          <h1 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#071A33] md:text-6xl lg:text-7xl">
            Diagnosa performa berbasis data.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.75] text-[#30405C] md:text-lg">
            Formulir diagnostik kini berjalan di aplikasi BinaHub agar proses pengisian, penyimpanan, dan laporan hasil tetap aman serta terpisah dari company profile.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={APP_INSIGHT_URL}
              className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#0B2C6B] px-8 text-[12px] font-extrabold uppercase tracking-[0.15em] text-white shadow-[0_24px_60px_-36px_rgba(11,44,107,0.9)] transition hover:-translate-y-0.5 hover:bg-[#071A33]"
            >
              Mulai Diagnostik
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/perspektif"
              className="inline-flex h-13 items-center justify-center rounded-full border border-[#0B2C6B]/14 bg-white px-8 text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#0B2C6B] transition hover:-translate-y-0.5 hover:border-[#D9A441]/45"
            >
              Lihat Perspektif
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { title: "5-7 menit", body: "Estimasi pengisian awal", Icon: Timer },
            { title: "49 indikator", body: "Membaca 7 dimensi performa", Icon: CheckCircle2 },
            { title: "Privat", body: "Proses berjalan di app.binahub.id", Icon: ShieldCheck },
          ].map(({ title, body, Icon }) => (
            <div key={title} className="rounded-[16px] border border-[#0B2C6B]/8 bg-[#F8FAFC] p-6">
              <Icon className="mb-5 text-[#D9A441]" size={26} strokeWidth={1.8} />
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#071A33]">{title}</h2>
              <p className="mt-2 text-sm leading-[1.7] text-[#30405C]/78">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
