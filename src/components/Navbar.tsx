"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  {
    label: "Tentang Kami",
    href: "/about",
    submenu: [
      { label: "Perjalanan kami", href: "/journey" },
      { label: "Siapa kami", href: "/about#siapa-kami" },
      { label: "Visi & Misi", href: "/about#visi" },
      { label: "Nilai-nilai", href: "/about#nilai" },
      { label: "Kontak", href: "/contact" },
    ]
  },
  {
    label: "Layanan",
    href: "/ecosystem",
    submenu: [
      { label: "Latar belakang", href: "/ecosystem#latar-belakang" },
      { label: "Solusi Pembelajaran dan Pengembangan Terintegrasi", href: "/ecosystem#solusi" },
    ]
  },
  {
    label: "Perspektif",
    href: "/perspektif",
    submenu: [
      { label: "Pendekatan", href: "/perspektif#pendekatan" },
      { label: "Alur kerja", href: "/perspektif#alur-kerja" },
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

  return (
    <div id="global-navbar" className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl pointer-events-auto"
      >
        <nav
          className={`relative flex items-center justify-between px-6 py-3 md:py-4 rounded-[24px] border transition-all duration-500 ${scrolled
              ? "bg-white/90 backdrop-blur-xl border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              : "bg-white/60 backdrop-blur-md border-white/40 shadow-none"
            }`}
        >
          <Link href="/" className="flex items-center group">
            <div className="relative h-8 md:h-10 w-32 md:w-40 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/full-logo.png"
                alt="BinaHub Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-[11px] font-bold text-[#0B2C6B]/70 hover:text-[#0B2C6B] transition-colors tracking-widest uppercase py-4"
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-[#D9A441] transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Desktop Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.05] shadow-xl overflow-hidden py-2"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-5 py-3 text-[11px] font-bold text-[#0B2C6B]/70 hover:text-[#0B2C6B] hover:bg-[#F5F7FA] transition-colors tracking-widest uppercase"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/insight"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#0B2C6B] text-[#D9A441] rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#4A4C54] hover:scale-105 transition-all shadow-lg shadow-black/10 active:scale-95"
            >
              Diagnosa Performa (Gratis)
              <ChevronRight size={14} />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-full bg-[#0B2C6B]/5 flex items-center justify-center text-[#0B2C6B] hover:bg-[#0B2C6B]/10 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="md:hidden absolute top-full left-4 right-4 mt-4 p-4 bg-white/95 backdrop-blur-2xl rounded-[32px] border border-black/[0.05] shadow-2xl overflow-y-auto max-h-[70vh]"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isExpanded = activeMobileDropdown === link.label;
                  return (
                    <div key={link.label} className="flex flex-col">
                      {link.submenu ? (
                        <button
                          onClick={() => setActiveMobileDropdown(isExpanded ? null : link.label)}
                          className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-[#0B2C6B]/5 text-[#0B2C6B] font-bold text-[12px] tracking-widest uppercase transition-all text-left w-full"
                        >
                          {link.label}
                          <ChevronDown size={16} className={`text-[#D9A441] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-[#0B2C6B]/5 text-[#0B2C6B] font-bold text-[12px] tracking-widest uppercase transition-all"
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
                              <div className="flex flex-col pl-6 pr-2 pb-2 pt-1 gap-1.5 border-l-2 border-[#D9A441]/30 ml-8 mb-2">
                                {/* Option to visit the main page */}
                                <Link
                                  href={link.href}
                                  onClick={() => setOpen(false)}
                                  className="px-4 py-2 text-[9px] font-bold text-[#D9A441] hover:text-white hover:bg-[#D9A441] rounded-xl transition-all tracking-widest uppercase border border-[#D9A441]/20 bg-[#D9A441]/5 text-center sm:text-left"
                                >
                                  Kunjungi Halaman Utama
                                </Link>
                                {link.submenu.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 text-[10px] font-bold text-[#0B2C6B]/60 hover:text-[#0B2C6B] hover:bg-[#F5F7FA] rounded-xl transition-colors tracking-widest uppercase"
                                  >
                                    {sub.label}
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
                  className="flex items-center justify-center gap-3 w-full py-5 bg-[#0B2C6B] text-[#D9A441] rounded-2xl font-bold text-[12px] tracking-widest uppercase shadow-xl"
                >
                  DIAGNOSA PERFORMA (GRATIS)
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
