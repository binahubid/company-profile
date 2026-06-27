"use client"

import type { MouseEvent } from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { getEcosystemData, type EcosystemData } from "@/data/ecosystem"
import { PixelIcon, type IconType } from "@/components/pixel-icon"
import { Tag } from "@/components/ui/tag"
import BinaHubClickable from "@/components/BinaHubClickable"
import { WorkflowSection } from "@/app/_sections/workflow-section"
import { useLocale } from "@/i18n/use-locale"

type EcosystemProduct = EcosystemData[keyof EcosystemData] & {
  iconType: IconType
}

const AMBIENT_PIXELS = [
  { x: "12%", y: "18%", duration: 4.2 },
  { x: "28%", y: "66%", duration: 5.4 },
  { x: "44%", y: "26%", duration: 6.1 },
  { x: "63%", y: "74%", duration: 4.9 },
  { x: "82%", y: "32%", duration: 6.6 },
  { x: "18%", y: "82%", duration: 5.7 },
  { x: "37%", y: "48%", duration: 4.6 },
  { x: "52%", y: "58%", duration: 6.3 },
  { x: "71%", y: "18%", duration: 5.2 },
  { x: "89%", y: "78%", duration: 6.8 },
  { x: "8%", y: "54%", duration: 4.8 },
  { x: "24%", y: "36%", duration: 5.9 },
  { x: "59%", y: "39%", duration: 4.4 },
  { x: "76%", y: "63%", duration: 6.5 },
  { x: "93%", y: "49%", duration: 5.1 },
]

const SERVICE_CATEGORIES: Record<string, string> = {
  insight: "Diagnose",
  academy: "Develop",
  lab: "Develop",
  coach: "Develop",
  play: "Develop",
  journey: "Develop",
  works: "Execute",
  impact: "Measure",
}

const COPY = {
  id: {
    heroTag: "THE INTEGRATED HUB",
    heroDesc: <>Menyatukan <span className="text-white">Potensi Manusia</span> dan <span className="text-white">Teknologi</span> dalam satu layanan terpadu untuk transformasi nyata.</>,
    failureTitle: <>Mengapa inisiatif pengembangan <br /><span className="font-bold text-[#C85A2A] underline decoration-[#C85A2A]/30 underline-offset-8">sering kurang efektif bahkan gagal?</span></>,
    failureItems: [
      "Diagnosis awal berhenti di gejala, bukan akar masalah",
      "Desain program tidak terhubung dengan prioritas bisnis",
      "Momentum perubahan melemah setelah sesi selesai",
      "Perubahan perilaku tidak diikuti mekanisme eksekusi",
      "Dampak tidak diukur dengan indikator yang jelas"
    ],
    synergyTitle: <>Jawaban di Dalam <br /><span className="text-[#D9A441] font-bold italic">Satu Layanan Terintegrasi.</span></>,
    synergyDesc: "Setiap layanan BinaHub dirancang untuk saling melengkapi, memastikan transformasi yang berkesinambungan dari penggalian akar masalah hingga akselerasi kinerja nyata.",
    exploreTag: "EXPLORE THE HUB",
    exploreTitle: <>Solusi Pembelajaran & <br />Pengembangan Terintegrasi.</>,
    detailBadge: "Pilih Layanan Berdasarkan Kebutuhan",
    learnDetail: "PELAJARI DETAIL",
    focus: "Focus",
    closeDetail: "TUTUP DETAIL",
    tabs: { overview: "Overview", challenges: "Tantangan", outcome: "Tujuan", output: "Hasil" },
    overviewTitle: "Filosofi & Pendekatan",
    challengesTitle: "Tantangan yang Dijawab",
    outcomeTitle: "Tujuan & Manfaat",
    outputTitle: "Hasil & Dampak Nyata",
    outputDesc: "Artifact yang membantu pengambilan keputusan dan eksekusi.",
  },
  en: {
    heroTag: "THE INTEGRATED HUB",
    heroDesc: <>Uniting <span className="text-white">Human Potential</span> and <span className="text-white">Technology</span> in one integrated service ecosystem for real transformation.</>,
    failureTitle: <>Ineffective <br /><span className="font-bold text-[#C85A2A] underline decoration-[#C85A2A]/30 underline-offset-8">or even failing?</span></>,
    failureItems: [
      "Initial diagnosis stops at symptoms, not root causes",
      "Program design is disconnected from business priorities",
      "Change momentum weakens after the session ends",
      "Behavior change is not followed by execution mechanisms",
      "Impact is not measured with clear indicators"
    ],
    synergyTitle: <>The answer sits inside <br /><span className="text-[#D9A441] font-bold italic">one integrated service.</span></>,
    synergyDesc: "Every BinaHub service is designed to complement the others, ensuring continuous transformation from root-cause discovery to real performance acceleration.",
    exploreTag: "EXPLORE THE HUB",
    exploreTitle: <>Integrated Learning & <br />Development Solutions.</>,
    detailBadge: "Choose a Service Based on Your Need",
    learnDetail: "LEARN MORE",
    focus: "Focus",
    closeDetail: "CLOSE DETAIL",
    tabs: { overview: "Overview", challenges: "Challenges", outcome: "Goals", output: "Results" },
    overviewTitle: "Philosophy & Approach",
    challengesTitle: "Challenges Addressed",
    outcomeTitle: "Goals & Benefits",
    outputTitle: "Real Outcomes & Outputs",
    outputDesc: "Artifacts that support decision making and execution.",
  },
}

export default function LayananPage() {
  const locale = useLocale()
  const copy = COPY[locale]
  const [selectedProduct, setSelectedProduct] = useState<EcosystemProduct | null>(null)
  const [openAccordion, setOpenAccordion] = useState<string | null>("overview")
  const products = Object.values(getEcosystemData(locale)) as EcosystemProduct[]
  const primaryProductIds = new Set(["insight", "academy", "works"])

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const openProduct = (product: EcosystemProduct) => {
    setSelectedProduct(product)
    setOpenAccordion("overview")
  }

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#4A4C54] font-sans overflow-x-hidden">

      {/* Immersive Hero Section - Reconstructed for High Visibility */}
      <section className="w-full px-4 pt-20 md:px-8 md:pt-28 md:mb-16">
        <div className="relative flex min-h-[76svh] w-full items-center justify-center overflow-hidden rounded-[16px] border border-white/5 bg-[#030712] shadow-lg md:h-[85vh] md:min-h-[500px] md:max-h-[900px]">

          {/* 1. Technical Grid Lines (High Visibility) */}
          <div className="absolute inset-0 z-[1] opacity-20"
            style={{
              backgroundImage: `
                   linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                 `,
              backgroundSize: '100px 100px'
            }}
          />

          {/* 2. Agitated Intersections (Visible Ornaments) */}
          <div className="absolute inset-0 z-[2] pointer-events-none opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle, #D9A441 1.5px, transparent 1.5px)`,
              backgroundSize: '100px 100px',
              backgroundPosition: '-0.75px -0.75px'
            }} />
          </div>

          {/* 3. Heartbeat Ecosystem Icons - Hidden on mobile, visible md+ */}
          <div className="hidden md:flex absolute inset-0 z-[6] pointer-events-none overflow-hidden items-center justify-center">
            {[
              { type: 'insights' as const, angle: -175, r: 520, s: 44 },
              { type: 'lab' as const, angle: -145, r: 560, s: 40 },
              { type: 'coach' as const, angle: -125, r: 530, s: 52 },
              { type: 'journey' as const, angle: -100, r: 580, s: 42 },
              { type: 'play' as const, angle: -75, r: 540, s: 48 },
              { type: 'academy' as const, angle: -50, r: 500, s: 40 },
              { type: 'impact' as const, angle: -25, r: 560, s: 46 },
              { type: 'works' as const, angle: 5, r: 580, s: 42 },
            ].map((icon, i) => {
              const rad = (icon.angle * Math.PI) / 180;
              const responsiveR = icon.r;

              const x = Math.cos(rad) * responsiveR;
              const y = Math.sin(rad) * (responsiveR * 0.75);

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ x, y: y + 120, opacity: 0 }}
                  animate={{
                    opacity: 0.35,
                    scale: [1, 1.15, 1],
                    y: [y + 120, y + 110, y + 120]
                  }}
                  transition={{
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                    y: { duration: 4 + i % 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 1.5 }
                  }}
                  style={{
                    width: icon.s,
                    height: icon.s,
                    marginLeft: -icon.s / 2,
                    marginTop: -icon.s / 2,
                  }}
                >
                  <PixelIcon type={icon.type} size={icon.s} />
                </motion.div>
              );
            })}

            {/* Agitated Small Pixels */}
            {AMBIENT_PIXELS.map((pixel, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#D9A441]/40 rounded-sm"
                initial={{
                  x: pixel.x,
                  y: pixel.y,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 10, -10, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: pixel.duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* 4. BinaHub Large Background Text */}
          <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-[4] select-none pointer-events-none">
            <h2 className="text-[20vw] font-black text-white/[0.045] tracking-tighter leading-none whitespace-nowrap">
              BinaHub
            </h2>
          </div>

          {/* 5. The Curved Horizon Arc - Flat, clean navy gradient */}
          <div className="absolute -bottom-[58%] left-1/2 -translate-x-1/2 w-[160%] aspect-[4/1] rounded-[100%] bg-gradient-to-t from-[#0B2C6B] to-transparent border-t border-[#D9A441]/25 z-[5]" />

          {/* 6. Hero Content (Highest Layer) */}
          <div className="relative z-[10] max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8 flex justify-center md:mb-12">
                <PixelIcon type="ecosystem" size={48} />
              </div>


              <div className="mb-5 md:mb-6">
                <Tag className="border border-white/10 bg-white/5 px-5 py-2 text-white/40 uppercase tracking-[0.24em] md:px-6 md:tracking-[0.3em]">{copy.heroTag}</Tag>
              </div>

              <h1 className="mb-5 text-center text-[clamp(2rem,9.2vw,3rem)] font-light leading-[1.04] tracking-[-0.025em] text-white md:mb-8 md:text-[clamp(3.25rem,4.75vw,4.85rem)] md:tracking-[-0.035em]">
                People{" "}
                <span className="text-white/24 font-light">-</span>
                {" "}Learning{" "}
                <span className="text-white/24 font-light">-</span>
                {" "}<span className="text-[#D9A441] font-normal italic">Elevated</span>
              </h1>

              <p className="mx-auto max-w-3xl text-sm font-light leading-[1.65] text-white/62 md:text-lg md:leading-[1.75] lg:text-xl">
                {copy.heroDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The "Cycle Breaker" Section */}
      <section id="latar-belakang" className="py-16 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* The Failure Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[14px] border border-black/[0.08] bg-[#F5F7FA] p-6 md:p-16"
            >
              <h3 className="text-3xl font-light mb-10 text-[#0B2C6B]">{copy.failureTitle}</h3>
              <div className="space-y-6">
                {copy.failureItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#C85A2A]/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B9471D]" />
                    </div>
                    <p className="text-black/80 font-light text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The BinaHub Synergy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center overflow-hidden rounded-[14px] border border-[#D9A441]/20 bg-[#0B2C6B] p-6 text-white md:p-16"
            >
              {/* Background Ornaments (Subtle Grid) */}
              <div className="absolute inset-0 z-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Decorative Corner '+' */}
              <div className="absolute top-10 left-10 w-6 h-6 opacity-40">
                <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#D9A441]" />
                <div className="absolute top-0 left-1/2 w-[1.5px] h-full bg-[#D9A441]" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-light mb-10 text-white">{copy.synergyTitle}</h3>
                <p className="text-white/90 font-light leading-relaxed mb-10 text-lg">
                  {copy.synergyDesc}
                </p>
                {/* Stats removed as requested */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WorkflowSection onMouseMove={handleMouse} />

      {/* Interactive Service Map */}
      <section id="solusi" className="px-6 pb-14 pt-16 md:px-12 md:pb-20 md:pt-32 lg:px-20 lg:pb-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <Tag>{copy.exploreTag}</Tag>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight mt-6 md:mt-10 text-[#0B2C6B]">
              {copy.exploreTitle}
            </h2>
          </div>

          {/* Interactive ecosystem map */}
          <div className="hidden md:block mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative mx-auto w-full max-w-[95vw] overflow-hidden rounded-[14px] border border-black/5 bg-white shadow-md xl:max-w-7xl 2xl:max-w-[1440px]"
            >
              <BinaHubClickable
                onProductClick={(productId) => {
                  const product = products.find(p => p.id === productId);
                  if (product) openProduct(product);
                }}
              />
            </motion.div>
          </div>
          {/* Visual Divider / Section Separator - Mobile only */}
          <div id="detail" className="relative flex items-center justify-center my-10 md:hidden scroll-mt-28">
            {/* Left line */}
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-[#0B2C6B]/20" />

            {/* Center icon / detail badge */}
            <div className="mx-6 px-6 py-2.5 bg-white border border-[#0B2C6B]/10 rounded-full shadow-sm flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] animate-ping" />
              <span className="text-[10px] font-bold text-[#0B2C6B]/60 tracking-[0.25em] uppercase">
                {copy.detailBadge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
            </div>

            {/* Right line */}
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-black/10 to-[#0B2C6B]/20" />
          </div>

          <div className="md:hidden grid grid-cols-1 gap-6">
            {products.map((product, i) => {
              const isPrimary = primaryProductIds.has(product.id)

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  layoutId={product.id}
                  onClick={() => openProduct(product)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[12px] border border-black/[0.08] bg-white transition-all duration-300 hover:border-black/15 hover:shadow-md ${isPrimary
                      ? "p-7 md:p-10 lg:col-span-2 min-h-[300px]"
                      : "p-6 md:p-8"
                    }`}
                >
                  {isPrimary && (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(217,164,65,0.13),transparent_34%),linear-gradient(135deg,rgba(11,44,107,0.045),transparent_42%)]" />
                  )}
                  <div className="relative z-10">
                    <div className="mb-10 transition-transform duration-300 group-hover:-translate-y-1">
                      <PixelIcon type={product.iconType} size={isPrimary ? 58 : 48} />
                    </div>
                    <span className="mb-4 inline-flex rounded-full bg-[#D9A441]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#B9851F]">
                      {SERVICE_CATEGORIES[product.id] || "Develop"}
                    </span>
                    <h3 className={`${isPrimary ? "text-3xl md:text-4xl" : "text-2xl"} font-bold mb-2 text-[#0B2C6B] group-hover:text-[#D9A441] transition-colors`}>{product.title}</h3>
                    <p className="text-[10px] text-black/40 uppercase tracking-[0.2em] font-bold mb-8">{product.subtitle}</p>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-black/40 group-hover:text-black transition-colors">
                      {copy.learnDetail} <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>


        </div>
      </section>

      {/* Product Detail Modal - Modern Accordion Style */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-12"
          >
            <div
              className="absolute inset-0 bg-[#0B2C6B]/88 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />

            <motion.div
              layoutId={selectedProduct.id}
              className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl md:max-h-[85vh] md:flex-row"
            >
              {/* Close Button - Top Right */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black/40 hover:bg-black/10 hover:text-black/70 transition-all group"
              >
                <X size={18} className="group-hover:rotate-90 transition-transform" />
              </button>

              {/* Left Side - Product Info */}
              <div className="w-full md:w-[35%] p-6 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shrink-0 bg-gradient-to-b from-[#0B2C6B] to-[#0A2455]">
                <div className="absolute right-0 top-0 h-40 w-60 translate-x-8 -translate-y-8 bg-white/5 blur-[60px]" />
                <div className="absolute left-0 bottom-0 h-32 w-48 -translate-x-8 translate-y-8 bg-[#D9A441]/10 blur-[50px]" />
                <div className="relative z-10">
                  <div className="bg-white/10 p-4 rounded-2xl inline-block mb-5 border border-white/10">
                    <PixelIcon type={selectedProduct.iconType} size={48} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 leading-tight text-white">{selectedProduct.title}</h2>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D9A441] mb-5">{selectedProduct.subtitle}</p>
                  <div className="w-8 h-[2px] bg-[#D9A441]/60 mb-5" />
                  {selectedProduct.tagline && (
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 mb-2">{copy.focus}</p>
                      <p className="text-xs font-light leading-relaxed text-white/75">{selectedProduct.tagline}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#FAFBFC]">
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Overview - Always Visible, Not Accordion */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#0B2C6B] mb-4">{copy.tabs.overview}</h3>
                    <p className="text-sm md:text-base text-black/60 font-light leading-[1.8]">
                      {selectedProduct.description}
                    </p>
                    {selectedProduct.summary && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B2C6B]/8 px-4 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                        <p className="text-xs font-medium text-[#0B2C6B]">{selectedProduct.summary}</p>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/5 mb-6" />

                  {/* Accordion Items */}
                  <div className="space-y-3">
                    {[
                      { id: "challenges", title: copy.tabs.challenges, content: selectedProduct.challenges },
                      { id: "outcome", title: copy.tabs.outcome, content: selectedProduct.benefits },
                      { id: "output", title: copy.tabs.output, content: selectedProduct.results },
                    ].map((item) => {
                      const isOpen = openAccordion === item.id
                      return (
                        <div key={item.id} className="rounded-xl border border-black/[0.06] overflow-hidden bg-white">
                          <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors"
                          >
                            <span className="text-sm font-semibold text-[#0B2C6B]">{item.title}</span>
                            <ChevronDown
                              size={16}
                              className={`text-black/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-4 pt-0">
                                  <div className="h-px bg-black/5 mb-3" />
                                  <p className="text-sm text-black/55 font-light leading-[1.8]">
                                    {item.content}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

