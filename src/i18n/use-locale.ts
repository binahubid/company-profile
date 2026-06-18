"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { defaultLocale, getLocaleFromPathname, hasLocale, localeStorageKey, type Locale } from "./config"

export function useLocale() {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(() => getLocaleFromPathname(pathname))

  useEffect(() => {
    const pathLocale = getLocaleFromPathname(pathname)
    const storedLocale = typeof window !== "undefined" ? window.localStorage.getItem(localeStorageKey) : null
    setLocale(hasLocale(storedLocale) ? storedLocale : pathLocale || defaultLocale)

    function handleLocaleChange(event: Event) {
      const customEvent = event as CustomEvent<Locale>
      setLocale(hasLocale(customEvent.detail) ? customEvent.detail : defaultLocale)
    }

    window.addEventListener("binahub-locale-change", handleLocaleChange)
    return () => window.removeEventListener("binahub-locale-change", handleLocaleChange)
  }, [pathname])

  return locale
}
