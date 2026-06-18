"use client"

import { usePathname } from "next/navigation"
import { getLocaleFromPathname } from "./config"

export function useLocale() {
  const pathname = usePathname()
  return getLocaleFromPathname(pathname)
}
