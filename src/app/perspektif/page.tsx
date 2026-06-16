"use client";

import { MethodologySection } from "@/app/_sections/methodology-section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localizePath } from "@/i18n/config";
import { useLocale } from "@/i18n/use-locale";

const COPY = {
  id: {
    eyebrow: "Perspektif BinaHub",
    title: <>Transformasi gagal ketika <span className="italic font-normal text-[#D9A441]">manusia dilupakan.</span></>,
    desc: "AI, data, dan sistem hanya bermakna ketika memperkuat cara manusia berpikir, belajar, bekerja sama, dan mengambil keputusan.",
    principles: [
      ["Human before system", "Perubahan dimulai dari kesadaran, bukan dari tools."],
      ["Learning before automation", "Teknologi harus mempercepat pembelajaran, bukan menggantikannya."],
      ["Impact before activity", "Program bernilai ketika perilaku dan kinerja ikut berubah."],
    ],
    briefingTitle: "Transformation Signals 2026",
    cta: "Baca Briefing",
    painSectionTitle: "Apa yang sedang berubah?",
    painCards: [
      {
        title: "Economic Pressure",
        desc: "Global growth melambat, tekanan biaya meningkat.",
        image: "/asset/slide-5.png",
      },
      {
        title: "AI Transformation Gap",
        desc: "Adopsi AI meningkat lebih cepat dibanding kesiapan organisasi.",
        image: "/asset/slide-6.png",
      },
      {
        title: "Workforce Shift",
        desc: "Jalur karier, pembelajaran, dan ekspektasi kerja berubah.",
        image: "/asset/slide-7.png",
      },
    ],
  },
  en: {
    eyebrow: "BinaHub Perspective",
    title: <>Transformation fails when <span className="italic font-normal text-[#D9A441]">people are forgotten.</span></>,
    desc: "AI, data, and systems only matter when they strengthen how people think, learn, collaborate, and make decisions.",
    principles: [
      ["Human before system", "Change starts from awareness, not from tools."],
      ["Learning before automation", "Technology should accelerate learning, not replace it."],
      ["Impact before activity", "A program creates value when behavior and performance also change."],
    ],
    briefingTitle: "Transformation Signals 2026",
    cta: "Read Briefing",
    painSectionTitle: "What is changing?",
    painCards: [
      {
        title: "Economic Pressure",
        desc: "Global growth is slowing, cost pressure is rising.",
        image: "/asset/slide-5.png",
      },
      {
        title: "AI Transformation Gap",
        desc: "AI adoption is moving faster than organizational readiness.",
        image: "/asset/slide-6.png",
      },
      {
        title: "Workforce Shift",
        desc: "Career paths, learning, and work expectations are changing.",
        image: "/asset/slide-7.png",
      },
    ],
  },
};

export default function PerspektifPage() {
  const locale = useLocale();
  const copy = COPY[locale];
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] min-h-screen font-sans antialiased pt-24">
      {/* Page Header */}
      <section className="relative overflow-hidden py-16 md:py-28 px-6 md:px-12 lg:px-20 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[320px] w-[740px] -translate-x-1/2 bg-[#D9A441]/[0.055] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.026] bg-[linear-gradient(90deg,transparent_0,transparent_96%,rgba(11,44,107,0.72)_100%)] bg-[length:82px_100%]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 inline-flex rounded-full bg-black/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0B2C6B]/52">
            {copy.eyebrow}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.05] text-[#0B2C6B] mb-7">
            {copy.title}
        </h1>
          <p className="text-lg md:text-xl text-[#4A4C54]/72 font-light leading-[1.85] max-w-3xl mx-auto">
            {copy.desc}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {copy.principles.map(([title, desc]) => (
            <div key={title} className="rounded-[12px] border border-black/[0.06] bg-[#FCFCFB] p-6 shadow-[0_16px_48px_-42px_rgba(11,44,107,0.34)]">
              <span className="block h-px w-10 bg-[#D9A441]/60" />
              <h2 className="mt-5 text-xl font-medium tracking-tight text-[#0B2C6B]">{title}</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-black/56">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 md:min-h-[calc(100svh-96px)] md:px-8 md:py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1800px] flex-col justify-center gap-5 md:min-h-[calc(100svh-160px)] lg:gap-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-light leading-tight tracking-[-0.045em] text-[#0B2C6B] md:text-5xl">
              {copy.painSectionTitle}
            </h2>
          </div>

          <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-3">
            {copy.painCards.map((card) => (
              <article key={card.title} className="group min-w-0">
                <div className="relative h-52 overflow-hidden bg-[#071A33] md:h-[22vh] md:min-h-[150px] md:max-h-[220px]">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,0.02)_0%,rgba(7,26,51,0.08)_48%,rgba(7,26,51,0.24)_100%)]" />
                </div>
                <div className="pt-5 md:pt-4">
                  <h3 className="text-[1.35rem] font-light leading-tight tracking-[-0.035em] text-[#050913] md:text-[clamp(1.15rem,1.8vw,1.75rem)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-sm font-medium leading-relaxed text-black/72 md:text-[13px] lg:text-sm">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            className="relative mx-auto w-full max-w-6xl overflow-hidden bg-[#07101F] bg-cover bg-center px-5 py-6 text-white shadow-[0_22px_70px_-54px_rgba(11,44,107,0.72)] md:px-8 md:py-7 lg:px-10"
            style={{ backgroundImage: "url('/asset/transformation-texture-bg.png')" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[#07101F]/42" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,31,0.82)_0%,rgba(7,16,31,0.55)_56%,rgba(7,16,31,0.24)_100%)]" />
            <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-tight md:text-[clamp(2rem,3.8vw,3.8rem)]">
                  {copy.briefingTitle}
                </h2>
              </div>
              <Link
                href={localizePath("/perspektif/transformation-signals-2026", locale)}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#D9A441] px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B2C6B] transition-colors hover:bg-white md:h-11"
              >
                {copy.cta}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-hidden="true"
        className="h-8 bg-[#F5F7FA] md:h-10"
      >
      </section>

      <MethodologySection onMouseMove={handleMouse} />
    </div>
  );
}
