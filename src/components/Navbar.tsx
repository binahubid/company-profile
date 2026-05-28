"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tentang Kami",
    href: "/about",
    submenu: [
      { label: "Siapa Kami", href: "/about#siapa-kami", desc: "Posisi, arah, dan nilai utama BinaHub." },
      { label: "Dari BDN ke BinaHub", href: "/from-bdn-to-binahub", desc: "Jembatan legacy 16 tahun menuju ekosistem baru." },
      { label: "Perjalanan Kami", href: "/journey", desc: "Akar pengalaman, momentum, dan evolusi brand." },
      { label: "Visi & Misi", href: "/about#visi", desc: "Masa depan yang kami bangun bersama organisasi." },
      { label: "Nilai-Nilai", href: "/about#nilai", desc: "Prinsip H.U.M.A.N yang menjaga cara kami bekerja." },
      { label: "Gallery", href: "/gallery", desc: "Dokumentasi program, interaksi, dan aktivitas nyata." },
    ]
  },
  {
    label: "Layanan",
    href: "/ecosystem",
    submenu: [
      { label: "Delapan Layanan Kami", href: "/ecosystem#solusi", desc: "Rangkaian layanan yang saling terhubung." },
      { label: "Mengapa Program Gagal", href: "/ecosystem#latar-belakang", desc: "Masalah umum di balik intervensi yang tidak berdampak." },
      { label: "Solusi Terintegrasi", href: "/ecosystem#solusi", desc: "Cara BinaHub menghubungkan diagnosa, desain, dan dampak." },
      { label: "Detail Eksplorasi", href: "/ecosystem#detail", desc: "Telusuri karakter setiap layanan dalam ekosistem." },
    ]
  },
  {
    label: "Perspektif",
    href: "/perspektif",
    submenu: [
      { label: "Cara Pandang", href: "/perspektif", desc: "Keyakinan kami tentang manusia, AI, dan transformasi." },
      { label: "Transformation Signals", href: "/perspektif/transformation-signals-2026", desc: "Sinyal perubahan dunia kerja Indonesia 2026." },
      { label: "Pendekatan", href: "/perspektif#pendekatan", desc: "Kerangka berpikir untuk membaca kebutuhan organisasi." },
      { label: "Alur Kerja", href: "/perspektif#alur-kerja", desc: "Proses strategis dari pemetaan hingga implementasi." },
    ]
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        if (hash === "#chatbot") return
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 350) // Tiny delay to ensure DOM is fully ready
        }
      }
    }

    scrollToHash()

    // Also listen to hashchange events for same-page transitions
    window.addEventListener("hashchange", scrollToHash)
    return () => window.removeEventListener("hashchange", scrollToHash)
  }, [pathname])

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <div
      id="global-navbar"
      className={`fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pointer-events-none transition-all duration-500 md:px-8 ${
        scrolled ? "py-0" : "py-4 md:py-6"
      }`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: scrolled ? 0.99 : 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full pointer-events-auto transition-all duration-500 ${scrolled ? "max-w-4xl" : "max-w-[1720px]"}`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <nav
          className={`relative grid items-center gap-4 transition-all duration-500 ${
            scrolled ? "grid-cols-1 justify-items-center" : "grid-cols-[auto_1fr_auto]"
          }`}
        >
          <Link href="/" className={`group relative z-10 flex items-center transition-all duration-500 ${scrolled ? "pointer-events-none -translate-y-4 opacity-0 md:hidden" : "opacity-100"}`}>
            <div className="relative h-12 w-40 transition-transform duration-500 group-hover:-translate-y-0.5 md:h-14 md:w-48">
              <Image
                src="/full-logo.png"
                alt="BinaHub Logo"
                fill
                priority
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden justify-center md:flex">
            <div className={`flex items-center bg-white/96 px-3 py-2 shadow-[0_22px_58px_-34px_rgba(11,44,107,0.34)] backdrop-blur-xl transition-all duration-500 ${
              scrolled ? "rounded-b-[22px] rounded-t-none border-x border-b border-white/70 pt-2" : "rounded-full border border-white/70"
            }`}>
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group flex"
                onMouseEnter={() => setActiveDropdown(link.label)}
              >
                <Link
                  href={link.href}
                  className={`relative flex min-w-[104px] items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                    activeDropdown === link.label
                      ? "bg-[#0B2C6B] text-white shadow-[0_16px_34px_-24px_rgba(11,44,107,0.7)]"
                      : "text-[#0B2C6B]/66 hover:bg-[#0B2C6B]/6 hover:text-[#0B2C6B]"
                  }`}
                >
                  <span className={`absolute inset-x-6 bottom-1 h-[2px] rounded-full bg-[#D9A441] transition-opacity duration-300 ${activeDropdown === link.label ? "opacity-100" : "opacity-0"}`} />
                  {link.label}
                  {link.submenu && (
                    <ChevronDown size={12} strokeWidth={1.8} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-[#D9A441]' : 'text-[#0B2C6B]/42'}`} />
                  )}
                </Link>
              </div>
            ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className={`relative z-10 flex items-center justify-end gap-4 transition-all duration-500 ${scrolled ? "pointer-events-none -translate-y-4 opacity-0 md:hidden" : "opacity-100"}`}>
            <Link
              href="/insight"
              className="hidden h-12 items-center gap-2 rounded-full bg-[#0B2C6B] px-5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#D9A441] shadow-[0_16px_38px_-24px_rgba(11,44,107,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9A441] hover:text-[#0B2C6B] hover:shadow-[0_20px_48px_-26px_rgba(217,164,65,0.72)] active:scale-95 md:flex"
            >
              Diagnosa Performa
              <ChevronRight size={12} strokeWidth={2} />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/52 bg-white/90 text-[#0B2C6B] shadow-[0_16px_38px_-28px_rgba(11,44,107,0.5)] backdrop-blur-md transition-colors hover:bg-white md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Desktop Mega Dropdown */}
        <AnimatePresence>
          {activeDropdown && NAV_LINKS.find((item) => item.label === activeDropdown)?.submenu && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] hidden overflow-hidden rounded-[14px] border border-white/10 bg-[#070A10]/96 shadow-[0_28px_76px_-44px_rgba(0,0,0,0.68)] md:block"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(217,164,65,0.12),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_42%)]" />
              <div className="relative grid grid-cols-2 gap-px lg:grid-cols-4">
                {NAV_LINKS.find((item) => item.label === activeDropdown)?.submenu?.map((sub, index) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setActiveDropdown(null)}
                    className="group relative min-h-[118px] overflow-hidden px-6 py-5 transition-colors hover:bg-white/[0.045]"
                  >
                    <div className={`absolute inset-x-0 top-0 h-[3px] bg-[#D9A441] transition-opacity duration-300 ${index === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    <div className="absolute bottom-0 right-0 h-[72px] w-32 translate-x-8 translate-y-8 bg-[#0B2C6B]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#0B2C6B]/34" />
                    <p className="relative mb-3 text-[13px] font-medium uppercase tracking-[0.28em] text-white">
                      {sub.label}
                    </p>
                    <p className="relative max-w-[260px] text-sm leading-relaxed text-white/48 transition-colors group-hover:text-white/68">
                      {sub.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute left-3 right-3 top-full mt-3 max-h-[76vh] overflow-y-auto rounded-[18px] border border-white/35 bg-[#F8FAFC]/96 p-3 shadow-[0_24px_72px_-48px_rgba(11,44,107,0.42)] backdrop-blur-md sm:left-4 sm:right-4 sm:p-4 md:hidden"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_80%_0%,rgba(217,164,65,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,255,255,0.34))]" />
              <div className="relative z-10 mb-3 flex items-center justify-between border-b border-[#0B2C6B]/8 px-3 pb-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#D9A441]">Navigasi</p>
                  <p className="mt-1 text-xs text-[#0B2C6B]/52">Pilih bagian yang ingin Anda jelajahi.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2C6B]/7 text-[#0B2C6B] transition-colors hover:bg-[#0B2C6B]/12"
                  aria-label="Tutup menu"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isExpanded = activeMobileDropdown === link.label;
                  return (
                    <div key={link.label} className="flex flex-col overflow-hidden rounded-[14px] border border-[#0B2C6B]/7 bg-white/86 shadow-[0_14px_42px_-38px_rgba(11,44,107,0.36)]">
                      {link.submenu ? (
                        <button
                          onClick={() => setActiveMobileDropdown(isExpanded ? null : link.label)}
                          className={`flex w-full items-center justify-between px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                            isExpanded ? "bg-[#0B2C6B] text-white" : "text-[#0B2C6B] hover:bg-[#0B2C6B]/5"
                          }`}
                        >
                          {link.label}
                          <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#D9A441]" : "text-[#D9A441]"}`} />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B2C6B] transition-all hover:bg-[#0B2C6B]/5"
                        >
                          {link.label}
                          <ChevronRight size={16} className="text-[#D9A441]" />
                        </Link>
                      )}
                      
                      {link.submenu && (
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-2 bg-white/55 px-3 py-3">
                                {/* Option to visit the main page */}
                                <Link
                                  href={link.href}
                                  onClick={() => setOpen(false)}
                                  className="rounded-[10px] border border-[#D9A441]/25 bg-[#D9A441]/8 px-4 py-3 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#B7831E] transition-all hover:bg-[#D9A441] hover:text-white sm:text-left"
                                >
                                  Kunjungi Halaman Utama
                                </Link>
                                {link.submenu.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="group rounded-[10px] border border-transparent bg-white/66 px-4 py-3 transition-all hover:border-[#D9A441]/20 hover:bg-[#F5F7FA] hover:shadow-[0_12px_34px_-28px_rgba(11,44,107,0.42)]"
                                  >
                                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2C6B]/76 group-hover:text-[#0B2C6B]">
                                      {sub.label}
                                    </span>
                                    <span className="mt-1.5 block text-[11px] leading-relaxed text-[#0B2C6B]/46">
                                      {sub.desc}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
                <div className="h-px bg-black/[0.05] my-2 mx-4" />
                <Link
                  href="/insight"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-3 rounded-[14px] bg-[#0B2C6B] py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D9A441] shadow-[0_18px_46px_-28px_rgba(11,44,107,0.9)]"
                >
                  DIAGNOSA PERFORMA
                  <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
