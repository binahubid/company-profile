import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight, ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-36 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden"
    >
      <Image
        src="/bg-cta.png"
        alt="BinaHub CTA Background"
        fill
        className="object-cover object-center opacity-60"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 text-[#0B2C6B]">
          Mulai manusiakan<br />masa depan Anda.
        </h2>
        <p className="text-lg text-[#4A4C54]/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Hubungi kami untuk konsultasi strategis dan mulailah perjalanan transformasi organisasi
          Anda.
        </p>

        {/* 3 CTA Buttons: Single Row Layout, No Icons */}
        <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-3 w-full max-w-4xl mx-auto">
          
          {/* Button 1: Konsultasi Gratis (Secondary Accent) */}
          <Link
            href="#chatbot"
            className="flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 bg-[#D9A441] text-[#0B2C6B] text-[10px] sm:text-[11px] rounded-full hover:bg-[#0B2C6B] hover:text-white transition-all duration-300 tracking-[0.18em] font-bold shadow-md hover:shadow-lg shrink-0"
          >
            KONSULTASI GRATIS
          </Link>

          {/* Button 2: Diagnosa Performa (Largest, Primary Focus) */}
          <Link
            href="/insight"
            className="flex items-center justify-center px-6 sm:px-9 py-4.5 sm:py-5 bg-[#0B2C6B] text-white text-[12px] sm:text-[13px] rounded-full hover:bg-[#D9A441] hover:text-[#0B2C6B] transition-all duration-300 tracking-[0.22em] font-bold shadow-xl shadow-black/10 hover:scale-105 active:scale-95 shrink-0 border border-transparent hover:border-[#0B2C6B]"
          >
            DIAGNOSA PERFORMA
          </Link>

          {/* Button 3: Pelajari Lebih Lanjut (Outline Glass style) */}
          <Link
            href="/about"
            className="flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 bg-white/40 backdrop-blur-sm border border-[#0B2C6B]/20 text-[#0B2C6B] text-[10px] sm:text-[11px] rounded-full hover:bg-[#0B2C6B] hover:text-white transition-all duration-300 tracking-[0.18em] font-bold shrink-0 shadow-sm"
          >
            PELAJARI LEBIH LANJUT
          </Link>

        </div>
      </div>
    </section>
  );
}
