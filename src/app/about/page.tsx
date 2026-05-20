"use client"

import { motion } from "framer-motion"
import { Compass, Target, Sparkles, ArrowRight, CheckCircle2, Quote, Zap, Shield, Heart, Globe, Cpu, UserCheck, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tag } from "@/components/ui/tag"
import { PixelIcon } from "@/components/pixel-icon"
import { Counter } from "@/components/ui/counter"
import { CoreValuesSection } from "@/components/core-values-section"

const CHALLENGES = [
  "Hilangnya banyak jenis pekerjaan",
  "Meningkatnya tekanan dan burnout",
  "Krisis kepemimpinan di era digital",
  "Menurunnya kualitas hubungan manusia",
  "Organisasi yang kehilangan makna & nilai"
];

const MISI_PILLARS = [
  {
    icon: <UserCheck size={20} />,
    title: "People Development",
    desc: "Membangun kapabilitas masa depan dengan memastikan manusia tetap menjadi inti dari setiap transformasi.",
    delay: 120,
  },
  {
    icon: <Target size={20} />,
    title: "Adaptive Leadership",
    desc: "Mengembangkan kepemimpinan yang dibangun dengan kecerdasan, integritas, kebijaksanaan, dan empati.",
    delay: 160,
  },
  {
    icon: <Leaf size={20} />,
    title: "Healthy Culture",
    desc: "Menciptakan budaya kerja yang sehat dan bertumbuh di tengah otomatisasi dan era digitalisasi AI.",
    delay: 200,
  },
  {
    icon: <Compass size={20} />,
    title: "Future Capability Partner",
    desc: "Membantu organisasi mendesain sistem yang adaptif, resilien, dan siap menyongsong perubahan era global.",
    delay: 240,
  },
  {
    icon: <Cpu size={20} />,
    title: "AI-Powered Insights",
    desc: "Memadukan AI dan data analitik modern sebagai pendorong utama dalam pengambilan keputusan strategis yang presisi.",
    delay: 280,
  },
];

const CAPABILITIES = [
  { title: "Pengembangan Manusia", icon: <Heart size={20} />, desc: "Menumbuhkan potensi utuh individu." },
  { title: "Transformasi Organisasi", icon: <Globe size={20} />, desc: "Membangun sistem yang adaptif & resilien." },
  { title: "Pembelajaran Strategis", icon: <Zap size={20} />, desc: "Edukasi yang relevan dengan masa depan." },
  { title: "Kepemimpinan", icon: <Shield size={20} />, desc: "Membentuk pemimpin berintegritas tinggi." },
  { title: "Kesiapan Era AI", icon: <Cpu size={20} />, desc: "Tetap relevan di tengah disrupsi teknologi." }
];

const HERO_STATS = [
  { value: 15, label: "Tahun Kiprah", suffix: "+" },
  { value: 10, label: "Ribu Peserta", suffix: "k+" },
  { value: 80, label: "Organisasi Mitra", suffix: "+" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] font-sans antialiased overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 pt-28 mb-16">
        <div className="relative w-full h-[70vh] md:h-[80vh] rounded-[32px] md:rounded-[48px] overflow-hidden flex items-center border border-black/[0.03] shadow-2xl shadow-black/10">
          <div className="absolute inset-0 z-0">
            <img 
              src="/bg-about.png" 
              alt="About BinaHub" 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-[#0B2C6B]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C6B] via-[#0B2C6B]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <Tag>TENTANG BINAHUB</Tag>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] text-white mb-10">
                Memanusiawikan <br />
                <span className="text-[#D9A441] font-normal">Masa Depan.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl border-l-2 border-[#D9A441] pl-8">
                BinaHub hadir sebagai mitra transformasi dan kapabilitas masa depan di era perubahan yang belum pernah terjadi sebelumnya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perjalanan Kami */}
      <section id="perjalanan" className="py-16 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Tag>PERJALANAN KAMI</Tag>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-[#0B2C6B] mt-6 mb-8">
                Berakar pada <span className="font-medium italic text-[#D9A441]">Pengembangan Manusia.</span>
              </h2>
              <div className="space-y-6 text-base text-black/70 font-light leading-relaxed">
                <p>
                  BinaHub lahir sebagai <i>sister company</i> dari <strong>BDN (Bina Daya Nusantara)</strong> — spesialis pelatihan berbasis pengalaman yang telah berkiprah sejak tahun 2010 dan menjangkau lebih dari 10.000+ peserta dari 80+ organisasi nasional.
                </p>
                <p>
                  Sebagai kelanjutan strategis, BinaHub melangkah lebih jauh untuk mendampingi organisasi menghadapi era otomatisasi dan disrupsi kecerdasan buatan (AI). Kami memadukan pengembangan SDM, stimulasi keputusan global bersama <strong>BSKSims</strong> asal Amerika Serikat, kepemimpinan adaptif, dan teknologi canggih dalam satu ekosistem transformasi yang utuh.
                </p>
              </div>

              {/* Stats & Link Side-by-Side */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12 pt-12 border-t border-black/5">
                <div className="flex flex-wrap gap-6 sm:gap-12">
                  {HERO_STATS.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl sm:text-4xl text-[#0B2C6B] font-light tracking-tight">
                        <Counter end={stat.value} suffix={stat.suffix} trigger={true} />
                      </div>
                      <div className="text-[10px] text-black/40 tracking-widest uppercase mt-1 font-bold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/journey" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D9A441] hover:text-[#0B2C6B] tracking-widest uppercase transition-colors group shrink-0"
                >
                  Baca Kisah Lengkap
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl shadow-black/10"
            >
              <Image 
                src="/asset/bsksims.jpeg" 
                alt="Perjalanan Kami BinaHub" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Siapa Kami (The Context Section) */}
      <section id="siapa-kami" className="py-16 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-[#0B2C6B]">
                Era Transformasi <br />
                <span className="font-medium italic">Tanpa Batas.</span>
              </h2>
              <div className="mt-10 space-y-6 text-lg text-black/70 font-light">
                <p>
                  Perkembangan AI, otomatisasi, dan digitalisasi membuka peluang inovasi yang besar, namun sekaligus membawa tantangan nyata bagi kemanusiaan.
                </p>
                <p className="text-black/90 font-medium">
                  Kami percaya bahwa masa depan tidak hanya membutuhkan organisasi yang lebih cerdas secara teknologi, tetapi juga lebih <span className="text-[#D9A441]">matang secara manusiawi.</span>
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
              {CHALLENGES.map((challenge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-black/[0.03] flex items-start gap-4 hover:border-[#D9A441]/40 transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                  <span className="text-sm font-bold text-black/80 uppercase tracking-wide">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning & Capabilities Grid */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-24">
            <div>
              <Tag>OUR POSITIONING</Tag>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mt-6 md:mt-8 leading-[1.1] text-[#0B2C6B]">
                Mitra transformasi & <br />
                <span className="font-medium">kapabilitas masa depan.</span>
              </h2>
            </div>
            <p className="text-lg text-black/70 font-light leading-relaxed max-w-lg">
              Kami memadukan lima pilar utama untuk memastikan organisasi Anda tidak hanya bertahan, tetapi bertumbuh secara utuh di tengah perubahan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#F5F7FA] p-10 rounded-md border border-black/[0.03] hover:bg-[#0B2C6B] hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#0B2C6B]/20"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#D9A441] group-hover:text-[#0B2C6B] transition-colors">
                  {cap.icon}
                </div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-4">{cap.title}</h4>
                <p className="text-xs font-light leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Bento Style */}
      <section id="visi" className="py-16 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Tag>VISI & MISI</Tag>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Vision - Large Card (Spans col-8, row-2) */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="col-span-12 md:col-span-8 md:row-span-2 bg-[#0B2C6B] rounded-xl text-white relative overflow-hidden group shadow-2xl shadow-[#0B2C6B]/20 min-h-[500px] flex flex-col justify-between"
            >
              {/* Background photo */}
              <div className="absolute inset-0 z-0">
                <img src="/bg-about.png" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0B2C6B]/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B]/90 via-[#0B2C6B]/50 to-transparent" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full p-12 md:p-16 justify-between flex-1">
                <div>
                  <Target size={40} className="text-[#D9A441] mb-10" />
                  <h3 className="text-[11px] font-bold tracking-[0.4em] text-white/50 uppercase mb-5">Visi Kami</h3>
                  <h4 className="text-4xl md:text-5xl font-light leading-[1.15] tracking-tight mb-6">
                    Masa depan di mana <span className="italic font-normal">kemanusiaan</span> dan kemajuan berjalan beriringan.
                  </h4>
                  <p className="text-white/60 font-light italic">A future where humanity and progress grow in harmony.</p>
                </div>
                
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-2xl bg-white/5 backdrop-blur-sm p-4 rounded-md border border-white/10">
                    BinaHub percaya bahwa kemajuan dan kemanusiaan bukanlah dua hal yang saling bertentangan. Teknologi, AI, dan transformasi organisasi seharusnya menjadi sarana untuk <span className="text-[#D9A441] font-semibold">meningkatkan kualitas kehidupan manusia.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side Mission Bento Cards (2 cards on the right) */}
            {MISI_PILLARS.slice(0, 2).map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay * 0.001 }}
                className="col-span-12 md:col-span-4 bg-white p-8 min-h-[240px] rounded-xl border border-black/[0.04] shadow-sm hover:shadow-md hover:border-[#D9A441]/30 transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center mb-4 text-[#0B2C6B]">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-light mb-1.5 text-[#0B2C6B]">{pillar.title}</h3>
                <p className="text-xs text-black/45 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}

            {/* Bottom Mission Bento Cards (3 cards at the bottom) */}
            {MISI_PILLARS.slice(2, 5).map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay * 0.001 }}
                className="col-span-12 md:col-span-4 bg-white p-8 min-h-[220px] rounded-xl border border-black/[0.04] shadow-sm hover:shadow-md hover:border-[#D9A441]/30 transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center mb-4 text-[#0B2C6B]">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-light mb-1.5 text-[#0B2C6B]">{pillar.title}</h3>
                <p className="text-xs text-black/45 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Utama (H.U.M.A.N) */}
      <div id="nilai">
        <CoreValuesSection />
      </div>

    </div>
  )
}


