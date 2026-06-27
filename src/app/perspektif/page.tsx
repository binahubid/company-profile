"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MethodologySection } from "@/app/_sections/methodology-section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localizePath } from "@/i18n/config";
import { useLocale } from "@/i18n/use-locale";

const COPY = {
  id: {
    eyebrow: "Perspektif BinaHub",
    title: <>Transformasi gagal<br />ketika <span className="italic font-normal text-[#D9A441]">manusianya dilupakan.</span></>,
    principlesIntro: "Kami percaya bahwa transformasi organisasi harus berangkat dari hal-hal yang paling mendasar:",
    principles: [
      {
        title: "Human before system",
        subtitle: "manusia adalah inti, sistem hanyalah alat pendukung.",
        details: [
          "Sistem, prosedur, dan teknologi tidak boleh mengabaikan manusia.",
          "Organisasi harus memastikan bahwa setiap perubahan berangkat dari kebutuhan, nilai, dan kesejahteraan manusia.",
        ],
      },
      {
        title: "Learning before automation",
        subtitle: "pembelajaran dan pemahaman mendahului otomatisasi agar teknologi benar-benar memberdayakan.",
        details: [
          "Sebelum otomatisasi dilakukan, manusia harus memahami prosesnya.",
          "Tujuannya agar SDM tidak sekadar 'digantikan mesin', tetapi mampu belajar, beradaptasi, dan mengendalikan teknologi.",
          "Otomasi tanpa pembelajaran hanya menghasilkan ketergantungan, bukan kapabilitas.",
        ],
      },
      {
        title: "Impact before activity",
        subtitle: "setiap aktivitas harus berorientasi pada hasil nyata, bukan sekadar kesibukan.",
        details: [
          "Aktivitas banyak tidak selalu berarti berdampak.",
          "Fokus harus pada hasil nyata yang memberi nilai tambah bagi organisasi dan masyarakat.",
          "Lebih penting kualitas dampak daripada sekadar kuantitas/jumlah kegiatan.",
        ],
      },
    ],
    desc: "Dengan perspektif ini, BinaHub memastikan bahwa setiap solusi yang kami hadirkan tetap humanis, relevan, dan berdampak nyata bagi individu, tim, dan organisasi.",
    briefingTitle: "The Brief: Today's Challenges",
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
    architectureTitle: "Transformation Architecture by BinaHub",
  },
  en: {
    eyebrow: "BinaHub Perspective",
    title: <>Transformation fails<br />when <span className="italic font-normal text-[#D9A441]">people are forgotten.</span></>,
    principlesIntro: "We believe organizational transformation must start from the most fundamental aspects:",
    principles: [
      {
        title: "Human before system",
        subtitle: "people are the core, systems are only supporting tools.",
        details: [
          "Systems, procedures, and technology must not ignore people.",
          "Organizations must ensure that every change starts from the needs, values, and well-being of people.",
        ],
      },
      {
        title: "Learning before automation",
        subtitle: "learning and understanding must precede automation so technology truly empowers.",
        details: [
          "Before automation is implemented, people must understand the process.",
          "The goal is for HR not to be merely 'replaced by machines', but to be able to learn, adapt, and control technology.",
          "Automation without learning only produces dependency, not capability.",
        ],
      },
      {
        title: "Impact before activity",
        subtitle: "every activity must be oriented toward real results, not just busyness.",
        details: [
          "Many activities do not always mean impact.",
          "Focus must be on real results that add value for organizations and society.",
          "Quality of impact matters more than quantity of activities.",
        ],
      },
    ],
    desc: "With this perspective, BinaHub ensures that every solution we deliver remains human-centered, relevant, and creates real impact for individuals, teams, and organizations.",
    briefingTitle: "The Brief: Today's Challenges",
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
    architectureTitle: "Transformation Architecture by BinaHub",
  },
};

export default function PerspektifPage() {
  const locale = useLocale();
  const copy = COPY[locale];
  const [activePrinciple, setActivePrinciple] = useState(0);
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] min-h-screen font-sans antialiased">
      {/* Hero Section - Dark Navy with Interactive Principles */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/persfektif-bg.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-[#071A33]/60" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* Left Side - Headline */}
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">
                {copy.eyebrow}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-light tracking-tight leading-[1.1] text-white">
                {copy.title}
              </h1>
            </div>

            {/* Right Side - Principles */}
            <div>
              {/* Intro text */}
              <p className="text-sm md:text-base text-white/50 font-light leading-[1.8] mb-8">
                {copy.principlesIntro}
              </p>

              {/* Principles List */}
              <div className="relative pl-12">
                {/* Vertical line - positioned to go through center of circles */}
                <div className="absolute left-[19px] top-3 bottom-3 w-px bg-white/10" />
                
                <div className="space-y-0">
                  {copy.principles.map((principle, index) => {
                    const isActive = activePrinciple === index;
                    return (
                      <button
                        key={principle.title}
                        onClick={() => setActivePrinciple(index)}
                        className={`relative w-full text-left py-5 pl-4 pr-6 transition-all duration-300 group ${
                          isActive ? "bg-white/[0.03] rounded-lg" : "hover:bg-white/[0.02] rounded-lg"
                        }`}
                      >
                        {/* Number circle - positioned to overlap the line */}
                        <span className={`absolute -left-12 top-5 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 z-10 ${
                          isActive
                            ? "border-[#D9A441] bg-[#D9A441] text-[#071A33]"
                            : "border-white/20 bg-[#071A33] text-white/40 group-hover:border-white/40"
                        }`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Content */}
                        <h3 className={`text-base font-medium transition-colors duration-300 ${
                          isActive ? "text-[#D9A441]" : "text-white/70 group-hover:text-white"
                        }`}>
                          {principle.title}
                        </h3>
                        <p className={`text-sm mt-1 transition-colors duration-300 ${
                          isActive ? "text-white/60" : "text-white/40"
                        }`}>
                          {principle.subtitle}
                        </p>
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-3 space-y-2">
                                {principle.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-white/45 font-light leading-relaxed">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#D9A441]/60" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Closing statement */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm md:text-base text-white/50 font-light leading-[1.8]">
                  {copy.desc}
                </p>
              </div>
            </div>
          </div>
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

      <MethodologySection onMouseMove={handleMouse} />
    </div>
  );
}
