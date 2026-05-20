"use client";

import { MethodologySection } from "@/app/_sections/methodology-section";
import { WorkflowSection } from "@/app/_sections/workflow-section";

export default function PerspektifPage() {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] min-h-screen font-sans antialiased pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter leading-[1.0] text-[#0B2C6B] mb-6">
          Perspektif <span className="italic font-normal text-[#D9A441]">BinaHub.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#4A4C54]/70 font-light leading-relaxed max-w-2xl mx-auto">
          Bagaimana kami merancang dan memberikan solusi pembelajaran dan transformasi dengan memadukan teknologi dan sisi kemanusiaan.
        </p>
      </section>

      <MethodologySection onMouseMove={handleMouse} />
      <WorkflowSection onMouseMove={handleMouse} />
    </div>
  );
}
