"use client";

import { useState, useEffect, useCallback } from "react";
import { PixelIcon } from "@/components/pixel-icon";
import { Tag } from "@/components/ui/tag";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Target, Leaf, Compass, Lightbulb } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    lines: ["Mitra", "Transformasi &", "Kapabilitas Masa Depan."],
    type: "hero",
    bgImage: "/bg-about.png",
  },
  {
    id: 2,
    lines: [
      "Masa depan di mana",
      "kemanusiaan dan kemajuan",
      "berjalan beriringan.",
    ],
    type: "vision",
    bgImage: "/bg-cta.png",
  },
  {
    id: 3,
    title: "Layanan Kami",
    type: "pillars",
    bgImage: "/asset/service.jpeg",
    points: [
      { icon: <UserCheck size={22} />, title: "People Development" },
      { icon: <Target size={22} />, title: "Adaptive Leadership & Kemampuan Beradaptasi" },
      { icon: <Leaf size={22} />, title: "Healthy Culture" },
      { icon: <Compass size={22} />, title: "Future Capability Partner" },
      { icon: <Lightbulb size={22} />, title: "AI-Powered Insights" },
    ],
  },
];

// Pixel grid wipe transition overlay
const COLS = 18;
const ROWS = 9;
const TOTAL = COLS * ROWS;
const blocks = Array.from({ length: TOTAL }, (_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
  delay: ((i % COLS) + Math.floor(i / COLS)) * 0.018,
}));

function PixelWipeOverlay({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          className="bg-[#0B2C6B]"
          initial={false}
          animate={{ scale: visible ? 1 : 0 }}
          transition={{
            duration: 0.12,
            delay: visible ? b.delay : (TOTAL - i) * 0.008,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

export function AboutCarouselSection() {
  const [displaySlide, setDisplaySlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (next: number) => {
      if (next === displaySlide || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setDisplaySlide(next);
        setTimeout(() => setIsTransitioning(false), 80);
      }, 420);
    },
    [displaySlide, isTransitioning]
  );

  useEffect(() => {
    const duration = displaySlide === 2 ? 5000 : 6000;
    const timer = setTimeout(() => {
      goToSlide((displaySlide + 1) % SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [displaySlide, goToSlide]);

  const slide = SLIDES[displaySlide];

  return (
    <section id="platform" className="px-0 pb-0 bg-[#F5F7FA] relative z-10 w-full">
      <div className="relative overflow-hidden bg-[#0A1A3A] rounded-none min-h-[600px] py-24 md:py-36 flex items-center justify-center border-b-[6px] border-[#D9A441]">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            key={slide.id}
            src={slide.bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1A3A]/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3A]/10 via-[#0A1A3A]/40 to-[#0A1A3A]/80" />
        </div>

        {/* Pixel wipe transition overlay */}
        <PixelWipeOverlay visible={isTransitioning} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-16 flex flex-col items-start text-left">

          <div className="mb-12 flex flex-col items-start">
            <PixelIcon type="about" size={48} />
            <div className="mt-6">
              <Tag className="bg-white/10 text-[#D9A441] border border-[#D9A441]/30">TENTANG KAMI</Tag>
            </div>
          </div>

          <div className="w-full min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">

              {/* Slide 1 & 2: Multi-line left-aligned heading */}
              {(slide.type === "hero" || slide.type === "vision") && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-start gap-0"
                >
                  {(slide as any).lines.map((line: string, i: number) => (
                    <h2
                      key={i}
                      className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.15] text-white"
                    >
                      {line}
                    </h2>
                  ))}
                </motion.div>
              )}

              {/* Slide 3: Diamond-scattered grid */}
              {slide.type === "pillars" && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  {/* Diamond layout: row of 2, row of 1 (center), row of 2 */}
                  <div className="flex flex-col items-center gap-3.5 w-full">
                    {/* Row 1: 2 items (Pops 1st and 2nd) */}
                    <div className="flex gap-3.5 justify-center w-full">
                      {(slide as any).points.slice(0, 2).map((point: any, pIdx: number) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, scale: 0.5, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: pIdx === 0 ? 0.6 : 1.2,
                            type: "spring",
                            stiffness: 120,
                            damping: 11
                          }}
                          className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex items-center gap-3.5 text-white hover:bg-white/20 transition-all duration-300 flex-1 max-w-xs"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#D9A441] text-[#0A1A3A] flex items-center justify-center shrink-0">
                            {point.icon}
                          </div>
                          <span className="font-semibold text-white/95 text-sm leading-snug">{point.title}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 2: 1 item centered - Diamond Apex (Pops 3rd) */}
                    <div className="flex justify-center w-full px-12">
                      {(slide as any).points.slice(2, 3).map((point: any, pIdx: number) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, scale: 0.5, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: 1.8,
                            type: "spring",
                            stiffness: 110,
                            damping: 9
                          }}
                          className="bg-[#D9A441]/20 backdrop-blur-md px-6 py-5 rounded-2xl border border-[#D9A441]/40 flex items-center gap-3.5 text-white hover:bg-[#D9A441]/30 transition-all duration-300 w-full max-w-sm"
                        >
                          <div className="w-11 h-11 rounded-xl bg-[#D9A441] text-[#0A1A3A] flex items-center justify-center shrink-0 shadow-lg shadow-[#D9A441]/10">
                            {point.icon}
                          </div>
                          <span className="font-bold text-white text-sm leading-snug">{point.title}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Row 3: 2 items (Pops 4th and 5th) */}
                    <div className="flex gap-3.5 justify-center w-full">
                      {(slide as any).points.slice(3, 5).map((point: any, pIdx: number) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, scale: 0.5, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: pIdx === 0 ? 2.4 : 3.0,
                            type: "spring",
                            stiffness: 120,
                            damping: 11
                          }}
                          className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex items-center gap-3.5 text-white hover:bg-white/20 transition-all duration-300 flex-1 max-w-xs"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#D9A441] text-[#0A1A3A] flex items-center justify-center shrink-0">
                            {point.icon}
                          </div>
                          <span className="font-semibold text-white/95 text-sm leading-snug">{point.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="mt-14 flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  displaySlide === i ? "w-12 bg-[#D9A441]" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
