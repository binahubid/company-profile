"use client"

import { Languages } from "lucide-react"
import { locales, localeStorageKey, type Locale } from "@/i18n/config"
import { useLocale } from "@/i18n/use-locale"

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile"
  onNavigate?: () => void
}

const LANGUAGE_LABELS: Record<Locale, string> = {
  id: "ID",
  en: "EN",
}

export function LanguageSwitcher({ variant = "desktop", onNavigate }: LanguageSwitcherProps) {
  const activeLocale = useLocale()
  const isMobile = variant === "mobile"

  function changeLocale(locale: Locale) {
    window.localStorage.setItem(localeStorageKey, locale)
    window.dispatchEvent(new CustomEvent("binahub-locale-change", { detail: locale }))
    onNavigate?.()
  }

  return (
    <div
      className={
        isMobile
          ? "flex w-full items-center justify-between gap-3 rounded-[14px] border border-[#0B2C6B]/8 bg-[#0B2C6B] px-3 py-3"
          : "hidden h-12 items-center gap-1 rounded-full border border-white/24 bg-[#0B2C6B] px-1 shadow-[0_16px_38px_-28px_rgba(11,44,107,0.42)] backdrop-blur-xl lg:flex"
      }
      aria-label="Language selector"
    >
      {isMobile && (
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/72">
          <Languages size={15} className="text-[#D9A441]" />
          Bahasa
        </div>
      )}
      <div className={isMobile ? "grid grid-cols-2 gap-1" : "flex items-center gap-1"}>
        {locales.map((locale) => {
          const isActive = locale === activeLocale

          return (
            <button
              type="button"
              key={locale}
              onClick={() => changeLocale(locale)}
              aria-current={isActive ? "page" : undefined}
              title={locale === "id" ? "Tampilkan dalam Bahasa Indonesia" : "Show in English"}
              className={`inline-flex h-9 min-w-10 items-center justify-center rounded-full px-3 text-[10px] font-black uppercase tracking-[0.12em] transition-all ${
                isActive
                  ? "bg-white/16 text-white shadow-[0_12px_26px_-20px_rgba(11,44,107,0.9)]"
                  : "text-white/68 hover:bg-white/10 hover:text-white"
              }`}
            >
              {LANGUAGE_LABELS[locale]}
            </button>
          )
        })}
      </div>
    </div>
  )
}
