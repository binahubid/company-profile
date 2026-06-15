"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Compass, Leaf, Lightbulb, Target, UserCheck } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { useLocale } from "@/i18n/use-locale";
import type { Locale } from "@/i18n/config";

type PillarPoint = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type TextSlide = {
  id: number;
  title: string;
  lines: string[];
  type: "hero" | "vision";
  bgImage: string;
};

type PillarSlide = {
  id: number;
  title: string;
  type: "pillars";
  bgImage: string;
  points: PillarPoint[];
};

type CarouselSlide = TextSlide | PillarSlide;

const COPY = {
  id: {
    slides: [
      {
        id: 1,
        title: "Posisi Kami",
        lines: ["Mitra", "Transformasi &", "Kapabilitas Masa Depan."],
        type: "hero" as const,
        bgImage: "/asset/slide1.png",
      },
      {
        id: 2,
        title: "Visi Kami",
        lines: ["Masa depan di mana", "kemanusiaan dan kemajuan", "berjalan beriringan."],
        type: "vision" as const,
        bgImage: "/asset/slide2.png",
      },
      {
        id: 3,
        title: "Misi Kami",
        type: "pillars" as const,
        bgImage: "/asset/slide3.png",
        points: [
          { icon: <UserCheck size={22} />, title: "People Development", desc: "Membangun kapabilitas masa depan dengan memastikan manusia tetap menjadi inti dari setiap transformasi." },
          { icon: <Target size={22} />, title: "Adaptive Leadership & Kemampuan Beradaptasi", desc: "Mengembangkan kepemimpinan yang dibangun dengan kecerdasan, integritas, kebijaksanaan, dan empati." },
          { icon: <Leaf size={22} />, title: "Healthy Culture", desc: "Menciptakan budaya kerja yang sehat dan bertumbuh di tengah otomatisasi dan era digitalisasi AI." },
          { icon: <Compass size={22} />, title: "Future Capability Partner", desc: "Membantu organisasi mendesain sistem yang adaptif, resilien, dan siap menyongsong perubahan era global." },
          { icon: <Lightbulb size={22} />, title: "AI-Powered Insights", desc: "Memadukan AI dan data analitik modern sebagai pendorong utama dalam pengambilan keputusan strategis yang presisi." },
        ],
      },
    ] satisfies CarouselSlide[],
    heroDesc: "BinaHub membantu organisasi menata arah pengembangan manusia agar lebih relevan dengan perubahan bisnis, teknologi, dan budaya kerja.",
    visionDesc: "Kemajuan teknologi perlu berjalan bersama kualitas manusia: kesadaran, kepemimpinan, empati, dan keberanian belajar.",
    missionTitle: "Misi Kami",
    missionDesc: "Lima prinsip yang menjaga transformasi tetap manusiawi, adaptif, dan dapat diterjemahkan ke dalam cara kerja organisasi.",
    openSlide: "Buka slide",
  },
  en: {
    slides: [
      {
        id: 1,
        title: "Our Position",
        lines: ["Transformation", "Partner & Future", "Capability Builder."],
        type: "hero" as const,
        bgImage: "/asset/slide1.png",
      },
      {
        id: 2,
        title: "Our Vision",
        lines: ["A future where", "humanity and progress", "move together."],
        type: "vision" as const,
        bgImage: "/asset/slide2.png",
      },
      {
        id: 3,
        title: "Our Mission",
        type: "pillars" as const,
        bgImage: "/asset/slide3.png",
        points: [
          { icon: <UserCheck size={22} />, title: "People Development", desc: "Build future capability by ensuring people remain at the center of every transformation." },
          { icon: <Target size={22} />, title: "Adaptive Leadership & Adaptability", desc: "Develop leadership built on intelligence, integrity, wisdom, and empathy." },
          { icon: <Leaf size={22} />, title: "Healthy Culture", desc: "Create a healthy work culture that grows amid automation and the AI digital era." },
          { icon: <Compass size={22} />, title: "Future Capability Partner", desc: "Help organizations design adaptive, resilient systems ready for global change." },
          { icon: <Lightbulb size={22} />, title: "AI-Powered Insights", desc: "Combine AI and modern data analytics as key drivers for precise strategic decisions." },
        ],
      },
    ] satisfies CarouselSlide[],
    heroDesc: "BinaHub helps organizations shape human development direction so it stays relevant to business change, technology, and work culture.",
    visionDesc: "Technological progress needs to grow with human quality: awareness, leadership, empathy, and the courage to keep learning.",
    missionTitle: "Our Mission",
    missionDesc: "Five principles that keep transformation human, adaptive, and translatable into how organizations work.",
    openSlide: "Open slide",
  },
} satisfies Record<Locale, {
  slides: CarouselSlide[];
  heroDesc: string;
  visionDesc: string;
  missionTitle: string;
  missionDesc: string;
  openSlide: string;
}>;

function PositionSlide({
  slide,
  description,
}: {
  slide: TextSlide;
  description: string;
}) {
  const headline = slide.lines.length > 2
    ? [`${slide.lines[0]} ${slide.lines[1]}`, slide.lines.slice(2).join(" ")]
    : slide.lines;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={slide.bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#041427]/34 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,28,0.16)_0%,rgba(3,12,28,0.5)_58%,rgba(3,12,28,0.82)_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-10 text-center md:px-12">
        <Tag className="border border-white/18 bg-white/10 text-white">
          {slide.title}
        </Tag>
        <h2 className="mt-5 max-w-5xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
          {headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="font-secondary mt-5 max-w-2xl text-sm font-normal leading-[1.6] text-white/72 md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function MissionCard({
  slide,
  title,
  description,
  activeIndex,
  onPrevious,
  onNext,
}: {
  slide: PillarSlide;
  title: string;
  description: string;
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const getPosition = (index: number) => {
    const total = slide.points.length;
    const diff = (index - activeIndex + total) % total;
    return diff > total / 2 ? diff - total : diff;
  };

  return (
    <motion.div
      className="relative min-h-[500px] w-full overflow-hidden bg-white text-[#0B2C6B] sm:min-h-[520px] md:h-[44svh] md:min-h-[320px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/bg-hero-nodes-poster-crop.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-white/62" />

      <div className="relative z-10 mx-auto grid h-full max-w-6xl items-center gap-6 px-5 pb-8 pt-12 sm:px-6 sm:pb-9 sm:pt-14 md:max-w-[1304px] md:grid-cols-[0.4fr_0.6fr] md:gap-8 md:px-8 md:py-7 lg:gap-10">
        <div className="mx-auto max-w-md text-center md:mx-0 md:text-left">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#071A33]">
              {title}
            </h2>
            <p className="font-secondary mt-4 max-w-md text-sm font-normal leading-[1.6] text-[#0B2C6B]/68 md:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="relative min-w-0">
          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-[#0B2C6B]/12 bg-white/80 text-[#0B2C6B] shadow-[0_18px_46px_-36px_rgba(11,44,107,0.5)] transition-colors hover:bg-white md:left-2"
            aria-label="Previous mission"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-[#0B2C6B]/12 bg-white/80 text-[#0B2C6B] shadow-[0_18px_46px_-36px_rgba(11,44,107,0.5)] transition-colors hover:bg-white md:right-2"
            aria-label="Next mission"
          >
            <ChevronRight size={18} />
          </button>

          <div className="relative mx-auto h-[250px] max-w-[680px] overflow-hidden [perspective:1300px] md:h-[270px]">
            {slide.points.map((point, index) => {
              const position = getPosition(index);
              const hidden = Math.abs(position) > 2;
              const absPosition = Math.abs(position);

                return (
                  <motion.div
                    key={point.title}
                    className="absolute left-1/2 top-1/2 flex min-h-[168px] w-[min(68vw,350px)] flex-col justify-center gap-3 border border-[#0B2C6B]/10 bg-[#F5F7FA] px-5 py-5 text-[#0B2C6B] shadow-[0_30px_82px_-52px_rgba(11,44,107,0.5)] md:w-[380px]"
                    animate={{
                      opacity: hidden ? 0 : 1 - absPosition * 0.2,
                    x: `calc(-50% + ${position * 122}px)`,
                    y: "-50%",
                    z: -absPosition * 90,
                    rotateY: position * 20,
                    scale: 1 - absPosition * 0.08,
                  }}
                  transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    zIndex: 10 - absPosition,
                    transformStyle: "preserve-3d",
                    pointerEvents: position === 0 ? "auto" : "none",
                  }}
                >
                    <div className="flex items-center gap-3">
                      <span className={position === 0 ? "text-[#D9A441]" : "text-[#0B2C6B]/30"}>
                        {point.icon}
                      </span>
                      <span className={`text-[clamp(1.05rem,1.85vw,1.45rem)] font-semibold leading-[1.2] tracking-[-0.01em] ${
                        position === 0 ? "text-[#071A33]" : "text-[#0B2C6B]/44"
                      }`}>
                        {point.title}
                      </span>
                    </div>
                    <p className={`font-secondary text-sm font-normal leading-[1.6] transition-colors ${
                      position === 0 ? "text-[#0B2C6B]/68" : "text-[#0B2C6B]/0"
                    }`}>
                      {point.desc}
                    </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AboutCarouselSection() {
  const locale = useLocale();
  const copy = COPY[locale];
  const positionSlide = copy.slides[0] as TextSlide;
  const visionSlide = copy.slides[1] as TextSlide;
  const missionSlide = copy.slides[2] as PillarSlide;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMission, setActiveMission] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, 6800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="platform"
      className="relative z-10 w-full overflow-hidden bg-[#F5F7FA]"
      style={{ fontFamily: "Poppins, 'Segoe UI', sans-serif" }}
    >
      <div className="relative h-[50svh] min-h-[380px] w-full overflow-hidden bg-[#071A33]">
        <AnimatePresence mode="wait">
          {activeSlide === 0 ? (
            <PositionSlide
              key="position"
              slide={positionSlide}
              description={copy.heroDesc}
            />
          ) : (
            <PositionSlide
              key="vision"
              slide={visionSlide}
              description={copy.visionDesc}
            />
          )}
        </AnimatePresence>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {[positionSlide.title, visionSlide.title].map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 w-10 transition-colors duration-300 ${
                activeSlide === index ? "bg-[#D9A441]" : "bg-white/28"
              }`}
              aria-label={`${copy.openSlide} ${index + 1}: ${label}`}
            />
          ))}
        </div>
      </div>

      <div>
        <MissionCard
          slide={missionSlide}
          title={copy.missionTitle}
          description={copy.missionDesc}
          activeIndex={activeMission}
          onPrevious={() => {
            const total = missionSlide.points.length;
            setActiveMission((current) => (current - 1 + total) % total);
          }}
          onNext={() => {
            const total = missionSlide.points.length;
            setActiveMission((current) => (current + 1) % total);
          }}
        />
      </div>
    </section>
  );
}
