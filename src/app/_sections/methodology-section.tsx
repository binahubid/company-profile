"use client";

import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { PixelIcon } from "@/components/pixel-icon";

interface MethodologySectionProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function MethodologySection({ onMouseMove }: MethodologySectionProps) {
  const glassStyle = {
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    background: "rgba(255,255,255,0.75)",
  };

  return (
    <section
      id="pendekatan"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <PixelIcon type="methodology" size={40} />
            <div className="mt-4">
              <Tag>PERSPEKTIF</Tag>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-[#0B2C6B]">
              Berdayakan tim Anda.<br />Transformasikan budaya Anda.
            </h2>
          </div>
          <p className="text-sm text-black/60 leading-relaxed max-w-xs font-light">
            Pendekatan kami menggabungkan wawasan psikologi, teknologi, dan interaksi manusia untuk
            menciptakan ekosistem pembelajaran yang relevan dan berdampak nyata.
          </p>
        </div>

        <div
          className="rounded-3xl overflow-hidden border border-black/[0.07] flex flex-col md:block md:relative shadow-2xl shadow-black/5"
          onMouseMove={onMouseMove}
        >
          <div className="relative w-full h-[280px] md:h-[500px] shrink-0">
            <Image
              src="/asset/Metodologi.png"
              alt="BinaHub Perspektif"
              fill
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-4 p-4 md:absolute md:bottom-6 md:right-6 md:p-0 md:w-80">
            <div className="rounded-2xl border border-white/50 p-6 shadow-lg shadow-black/10" style={glassStyle}>
              <Tag>PENDEKATAN</Tag>
              <h3 className="mt-3 text-lg font-bold text-[#0B2C6B] mb-2">Pengembangan Holistik</h3>
              <p className="text-sm text-[#4A4C54] leading-relaxed">
                Membangun dari dalam. Fokus pada kesadaran diri (self-awareness) sebagai fondasi
                dari kepemimpinan yang tangguh di era digital.
              </p>
            </div>

            <div className="rounded-2xl border border-white/50 p-6 shadow-lg shadow-black/10" style={glassStyle}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#D9A441] animate-pulse" />
                <span className="text-xs text-[#4A4C54]/70 tracking-widest uppercase font-bold">TERUKUR</span>
              </div>
              <p className="text-sm text-[#4A4C54] leading-relaxed">
                Setiap program dirancang dengan indikator keberhasilan yang jelas untuk memastikan
                ROI yang optimal bagi organisasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
