"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tag } from "./ui/tag";
import { PixelIcon } from "./pixel-icon";

const HUMAN_VALUES = [
  { letter: "H", rest: "umanity" },
  { letter: "U", rest: "ncompromising Integrity" },
  { letter: "M", rest: "eaningful Impact" },
  { letter: "A", rest: "daptive Growth" },
  { letter: "N", rest: "oble Excellence" },
];

export function HumanCoreValuesSection() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Trigger sequence when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  // Handle the automatic looping sequence
  useEffect(() => {
    if (!hasStarted) return;

    let active = true;
    
    const runSequence = async () => {
      while (active) {
        // Step 1: Reset to beginning
        setIsGlowing(false);
        setRevealedCount(0);
        await new Promise((r) => setTimeout(r, 600));
        if (!active) break;

        // Step 2: Reveal letters one by one (H, U, M, A, N)
        for (let i = 1; i <= 5; i++) {
          setRevealedCount(i);
          await new Promise((r) => setTimeout(r, 1000));
          if (!active) break;
        }
        if (!active) break;

        // Step 3: All revealed, trigger golden glow in navy background
        await new Promise((r) => setTimeout(r, 400));
        if (!active) break;
        setIsGlowing(true);

        // Step 4: Stay in glowing state for 6.5 seconds, then repeat
        await new Promise((r) => setTimeout(r, 6500));
      }
    };

    runSequence();

    return () => {
      active = false;
    };
  }, [hasStarted]);

  return (
    <section
      id="values"
      ref={sectionRef}
      className={`relative py-24 md:py-32 px-6 md:px-16 lg:px-24 transition-all duration-1000 border-t border-black/[0.06] overflow-hidden ${
        isGlowing ? "bg-[#050E21] text-white" : "bg-[#F5F7FA] text-[#4A4C54]"
      }`}
    >
      {/* High-intensity Glow ambient lights */}
      {isGlowing && (
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none transition-opacity duration-1000">
          {/* Big Golden aura on top-left */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#D9A441]/15 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: "8s" }} />
          {/* Vibrant blue/cyan orb on bottom-right */}
          <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[#3B82F6]/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "12s" }} />
          {/* Central golden neon horizontal strip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[30%] bg-[#D9A441]/5 rounded-full blur-[100px]" />
          {/* Sparkles of stardust */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
        
        {/* Header Tags (Aligned to Left) */}
        <div className="text-left mb-16 flex flex-col items-start">
          <PixelIcon type="core" size={40} />
          <div className="mt-5">
            <Tag className={isGlowing ? "bg-white/10 text-white border border-white/20 shadow-sm" : "bg-black/[0.04] text-black/40"}>
              NILAI-NILAI UTAMA
            </Tag>
          </div>
          <h2 className={`mt-4 text-sm tracking-[0.3em] uppercase transition-colors duration-1000 ${
            isGlowing ? "text-white/80" : "text-black/40"
          }`}>
            Prinsip Fondasi BinaHub
          </h2>
        </div>

        {/* Acronym Stack Container (Left Aligned, clean words) */}
        <div className="flex flex-col gap-6 md:gap-8 w-full items-start pl-0">
          {HUMAN_VALUES.map((val, idx) => {
            const isRevealed = revealedCount > idx;

            return (
              <div key={val.letter} className="h-auto py-2 md:py-0 md:h-20 flex items-center w-full">
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, x: -35, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                      className="flex flex-col md:flex-row md:items-center justify-between w-full gap-6"
                    >
                      <div className="flex items-baseline text-3.5xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                        {/* Big capital letter with golden neon glow when active */}
                        <span
                          className={`font-extrabold font-sans transition-all duration-1000 shrink-0 select-none ${
                            isGlowing
                              ? "text-[#D9A441] scale-105"
                              : "text-[#0B2C6B]"
                          }`}
                          style={{
                            textShadow: isGlowing
                              ? "0 0 15px rgba(217,164,65,0.85), 0 0 30px rgba(217,164,65,0.4)"
                              : "none",
                          }}
                        >
                          {val.letter}
                        </span>

                        {/* The rest of the word seamlessly attached */}
                        <span className={`font-light transition-colors duration-1000 ${
                          isGlowing ? "text-white" : "text-[#0B2C6B]/80"
                        }`}>
                          {val.rest}
                        </span>
                      </div>

                      {/* If it's Noble Excellence, place the button to the right! */}
                      {idx === 4 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="shrink-0"
                        >
                          <Link
                            href="/about#nilai"
                            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer shadow-lg ${
                              isGlowing
                                ? "bg-[#D9A441] text-[#0A1A3A] hover:bg-white hover:text-[#0A1A3A] shadow-[#D9A441]/10"
                                : "bg-[#0B2C6B] text-white hover:bg-[#D9A441] hover:text-[#0B2C6B] shadow-black/5"
                            }`}
                          >
                            Lihat Selengkapnya
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
