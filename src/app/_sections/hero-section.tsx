"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { localizePath } from "@/i18n/config";
import { useLocale } from "@/i18n/use-locale";

const COPY = {
  id: {
    title: "Membantu Organisasi Bertumbuh",
    desc: "BinaHub membantu perusahaan membangun pemimpin yang efektif, tim yang unggul, dan budaya kerja yang adaptif melalui pendekatan terintegrasi yang didukung AI.",
    journey: "Perjalanan Anda Dimulai dari sini",
    cta: "Mulai",
    secondaryCta: "Lihat Perspektif",
  },
  en: {
    title: "Helping Organizations Grow",
    desc: "BinaHub helps companies build effective leaders, high-performing teams, and adaptive work cultures through an integrated, AI-supported approach.",
    journey: "Your journey starts here",
    cta: "Start",
    secondaryCta: "View Perspective",
  },
};

interface HeroSectionProps {
  heroReady: boolean;
}

function AnimatedHeading({ text, ready }: { text: string; ready: boolean }) {
  const words = text.split(" ");
  const accentWord = words.at(-1) ?? "";
  const firstLine = words.slice(0, -1).join(" ");
  const lines = [firstLine, accentWord];

  const charDelay = 30;
  let charOffset = 0;

  return (
    <h1 className="max-w-[780px] text-left text-[clamp(2rem,9.2vw,3rem)] font-normal leading-[1.04] tracking-[-0.025em] text-[#071A33] md:text-[clamp(3.25rem,4.75vw,4.85rem)] md:tracking-[-0.035em]">
      {lines.map((line, lineIndex) => {
        const currentOffset = charOffset;
        charOffset += line.length;

        return (
          <span
            key={lineIndex}
            className={lineIndex === 1 ? "mt-1 block font-light italic text-[#D9A441] md:mt-2" : "block"}
          >
            {line.split(" ").map((word, wordIndex) => (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0"
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${lineIndex}-${wordIndex}-${charIndex}`}
                    className="inline-block transition-[opacity,transform] duration-500 ease-out"
                    style={{
                      opacity: ready ? 1 : 0,
                      transform: ready ? "translateX(0)" : "translateX(-18px)",
                      transitionDelay: `${200 + (currentOffset + wordIndex + charIndex) * charDelay}ms`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}

const LITE_FLOW_PATHS = Array.from({ length: 20 }, (_, index) => {
  const y = 575 + index * 18;
  const wave = index % 2 === 0 ? 1 : -1;
  const startX = -240 + (index % 5) * 22;
  const midX = 570 + index * 9;
  const endX = 1620 - (index % 4) * 16;

  return `M${startX} ${y} C125 ${y - 26 + wave * 8} 330 ${y - 10 + wave * 6} ${midX} ${y + 26} C825 ${y + 70} 1065 ${y + 108 - wave * 5} ${endX} ${y + 154}`;
});

function HeroLiteLines() {
  return (
    <svg
      className="hero-lite-lines absolute inset-0 h-full w-full mix-blend-multiply"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroLiteLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8E6B2" stopOpacity="0.28" />
          <stop offset="42%" stopColor="#D9A441" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8A560A" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g className="hero-lite-line-drift">
        {LITE_FLOW_PATHS.map((path, index) => (
          <path
            key={path}
            className={`hero-lite-line hero-lite-line-${(index % 5) + 1}`}
            d={path}
            fill="none"
            pathLength="1"
            stroke="url(#heroLiteLine)"
            strokeLinecap="round"
            strokeOpacity={0.48 + index * 0.02}
            strokeWidth={1 + index * 0.04}
          />
        ))}
      </g>
    </svg>
  );
}

function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full scale-[1.16] object-cover object-center opacity-[0.56] md:scale-[1.2]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/bg-hero-nodes-h264.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/58 via-white/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/68 via-white/22 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-white/56 to-transparent" />
      <HeroLiteLines />
    </div>
  );
}

function FadeIn({
  children,
  delay,
  ready,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  ready: boolean;
  className?: string;
}) {
  return (
    <div
      className={`transition-[opacity,transform,filter] duration-1000 ease-out ${className ?? ""}`}
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? "translateY(0)" : "translateY(18px)",
        filter: ready ? "blur(0)" : "blur(12px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function HeroSection({ heroReady }: HeroSectionProps) {
  const locale = useLocale();
  const copy = COPY[locale];

  return (
    <section id="home-hero" className="relative z-0 -mt-24 w-full overflow-x-hidden bg-white md:-mt-28">
      <div className="relative min-h-[76svh] overflow-hidden bg-white text-[#071A33] md:min-h-[112svh]">
        <HeroVideoBackground />

        <div className="relative z-10 flex min-h-[76svh] flex-col items-start justify-end px-6 pb-9 pt-32 text-left md:min-h-[112svh] md:justify-center md:px-12 md:pb-6 md:pt-64 lg:px-20 xl:px-28">
          <div className="flex w-full max-w-[780px] flex-col items-start">
              <AnimatedHeading text={copy.title} ready={heroReady} />

              <FadeIn ready={heroReady} delay={850}>
                <p className="mt-5 max-w-[690px] text-balance text-[14px] font-normal leading-[1.65] tracking-[-0.005em] text-[#30405C] md:mt-6 md:text-lg lg:text-[19px]">
                  {copy.desc}
                </p>
              </FadeIn>

              <FadeIn ready={heroReady} delay={1150}>
                <div className="mt-6 flex w-full flex-wrap items-center justify-start gap-2.5 md:mt-8 md:gap-4">
                  <Link
                    href={localizePath("/insight", locale)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-[9px] bg-[#0B2C6B] px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_22px_56px_-30px_rgba(11,44,107,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#071A33] hover:shadow-[0_28px_64px_-34px_rgba(11,44,107,0.9)] md:h-12 md:gap-3 md:px-8 md:text-[12px] md:tracking-[0.14em]"
                  >
                    {copy.cta}
                    <ChevronRight size={14} strokeWidth={2.2} className="md:h-4 md:w-4" />
                  </Link>
                  <Link
                    href={localizePath("/perspektif", locale)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-[9px] border border-[#0B2C6B]/20 bg-white/58 px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#071A33] shadow-[0_18px_54px_-38px_rgba(11,44,107,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B2C6B]/40 hover:bg-white md:h-12 md:gap-3 md:px-8 md:text-[12px] md:tracking-[0.14em]"
                  >
                    {copy.secondaryCta}
                    <ArrowRight size={14} strokeWidth={2.1} className="md:h-4 md:w-4" />
                  </Link>
                </div>
              </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
