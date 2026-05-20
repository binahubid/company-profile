"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PixelIcon } from "./pixel-icon";
import { CORE_VALUES } from "@/data/core-values";

// Gorgeous brand photos mapped to each of the H.U.M.A.N values
const VALUE_IMAGES = [
  "/asset/Coach.png",
  "/asset/Design.png",
  "/asset/Impact.png",
  "/asset/Academy.png",
  "/asset/Works.png"
];

export function CoreValuesSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  function selectStep(i: number) {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => { setActive(i); setVisible(true); }, 180);
  }

  // Auto-advance every 5s
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % CORE_VALUES.length);
        setVisible(true);
      }, 180);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const value = CORE_VALUES[active];

  return (
    <section id="values" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <PixelIcon type="core" size={40} />
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04] uppercase">
            NILAI-NILAI UTAMA
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-[#0B2C6B]">
            H.U.M.A.N
          </h2>
          <p className="mt-4 text-sm text-black/40 tracking-widest uppercase">
            Prinsip-prinsip utama BinaHub
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
          
          {/* Clickable value cards */}
          <div className="flex flex-col gap-3 lg:col-span-2 justify-between">
            {CORE_VALUES.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className="flex-1 text-left rounded-2xl border transition-all duration-200 p-5 flex items-center"
                style={{
                  background: active === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",
                  borderColor: active === i ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.06)",
                  boxShadow: active === i ? "0 4px 12px rgba(0,0,0,0.03)" : "none",
                }}
              >
                <div className="flex gap-4 items-center min-w-0 w-full">
                  
                  {/* Left Icon (Replaces index numbers 01, 02, etc.) */}
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 shrink-0"
                    style={{
                      background: active === i ? "#0B2C6B" : "rgba(0,0,0,0.04)",
                      color: active === i ? "#D9A441" : "rgba(0,0,0,0.35)",
                    }}
                  >
                    {React.cloneElement(s.icon as any, { size: 18 })}
                  </div>

                  {/* Title with styled drop-cap for H.U.M.A.N */}
                  <div className="min-w-0">
                    <span 
                      className="text-2xl md:text-3xl font-extrabold tracking-tight"
                      style={{ color: active === i ? "#D9A441" : "rgba(217, 164, 65, 0.75)" }}
                    >
                      {s.title[0]}
                    </span>
                    <span 
                      className="text-base md:text-lg font-bold tracking-tight transition-colors duration-200"
                      style={{ color: active === i ? "#0B2C6B" : "rgba(11, 44, 107, 0.55)" }}
                    >
                      {s.title.slice(1)}
                    </span>
                  </div>

                </div>
              </button>
            ))}
          </div>

          {/* Detail panel (With luxury photo background) */}
          <div
            className="lg:col-span-3 rounded-2xl border border-black/[0.06] p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[420px]"
            style={{ boxShadow: "0 4px 25px rgba(0,0,0,0.03)" }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={VALUE_IMAGES[active]} 
                alt={value.title} 
                fill 
                className={`object-cover transition-all duration-700 ${visible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
              />
              {/* Premium cosmic overlay for maximum text contrast */}
              <div className="absolute inset-0 bg-[#0A1A3A]/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-[#0A1A3A]/60 to-transparent" />
            </div>

            {/* Content (Pure white contrast) */}
            <div
              className="relative z-10 max-w-lg transition-all duration-300 ease-out flex flex-col items-center text-white"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
            >
              {/* Floating Glowing Icon */}
              <div className="w-16 h-16 rounded-full bg-[#D9A441] text-[#0B2C6B] flex items-center justify-center mb-8 shadow-xl shadow-[#D9A441]/25">
                {React.cloneElement(value.icon as any, { size: 24 })}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-white flex items-center justify-center">
                <span className="text-[#D9A441] text-4xl">{value.title[0]}</span>
                <span>{value.title.slice(1)}</span>
              </h3>
              
              <p className="text-white/80 leading-relaxed text-base font-light">
                {value.fullText.split("(")[0].trim()}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
