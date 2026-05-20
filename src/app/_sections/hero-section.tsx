"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PixelBackground from "@/components/pixel-background";

interface HeroSectionProps {
  heroReady: boolean;
}

export function HeroSection({ heroReady }: HeroSectionProps) {
  return (
    <section className="sticky top-0 z-0 px-4 pt-[110px] pb-4 bg-[#F5F7FA] w-full">
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{ minHeight: "calc(100vh - 108px)" }}
      >
        {/* Background Image */}
        <Image
          src="/bg-hero.png"
          alt="BinaHub Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark scrim */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: "rgba(10,8,6,0.35)" }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 50% 40%, transparent 35%, rgba(8,6,4,0.60) 100%)",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-[3]"
          style={{
            height: "60%",
            background:
              "linear-gradient(to top, rgba(10,8,6,0.94) 0%, rgba(10,8,6,0.50) 45%, transparent 100%)",
          }}
        />

        {/* Pixel entity canvas */}
        <PixelBackground ready={heroReady} />

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-16 pb-10 md:pb-24 max-w-5xl">
          <h1
            className="text-4xl sm:text-7xl md:text-8xl font-light text-white leading-[1.0] tracking-tight mb-6"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 0ms, filter 1s cubic-bezier(0.16,1,0.3,1) 0ms, transform 1s cubic-bezier(0.16,1,0.3,1) 0ms",
            }}
          >
            AI Powered <br />
            <span className="italic font-sans" style={{ color: "#D9A441" }}>
              Human Synergy
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-white/70 max-w-xl mb-12 leading-relaxed"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(16px)",
              transform: heroReady ? "translateY(0px)" : "translateY(24px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 100ms, filter 1s cubic-bezier(0.16,1,0.3,1) 100ms, transform 1s cubic-bezier(0.16,1,0.3,1) 100ms",
            }}
          >
            Menciptakan masa depan organisasi yang adaptif terhadap teknologi dan bertumbuh secara manusiawi.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex items-center gap-6 mb-8"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0px)" : "translateY(20px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 300ms, transform 1s cubic-bezier(0.16,1,0.3,1) 300ms",
            }}
          >
            <div className="flex items-center gap-2.5">
              {/* Helper Text First (Left side of button) */}
              <span className="text-white/60 text-sm italic hidden md:flex items-center tracking-wide shrink-0">
                Perjalanan Anda Dimulai dari sini <ArrowRight className="inline ml-2.5" size={16}/>
              </span>

              {/* Button Second (Right side, right next to the arrow) */}
              <Link
                href="/insight"
                className="relative inline-flex items-center justify-center select-none transition-all duration-300 active:scale-95 group shrink-0"
                style={{
                  width: "180px",
                  height: "56px",
                }}
              >
                {/* Background Button Image */}
                <div className="absolute inset-0 z-0 w-full h-full">
                  <Image 
                    src="/asset/button-hero.png" 
                    alt="Mulai" 
                    fill 
                    priority
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                {/* Centered Text - Gorgeous Pixel-Art Font Style in All-Caps */}
                <span 
                  className="relative z-10 font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] translate-y-[-4px] transition-colors duration-300 group-hover:text-[#D9A441]"
                  style={{
                    fontFamily: "'Press Start 2P', 'Silkscreen', monospace",
                    fontSize: "9px",
                  }}
                >
                  MULAI
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hidden md:flex absolute bottom-10 right-10 z-30 flex-col items-center gap-2"
          style={{
            opacity: heroReady ? 1 : 0,
            transition: "opacity 1.5s ease 1s",
          }}
        >
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/55 animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
