"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, Layers3, Loader2 } from "lucide-react";
import { useLocale } from "@/i18n/use-locale";
import { localizePath } from "@/i18n/config";
import { appApiUrl } from "@/lib/public-api";

type CatalogModule = {
  id: string;
  code: string;
  name: string;
  description: string | null;
  standardScope: string | null;
  pricingUnit: string;
  basePrice: number;
  currency: string;
  catalogVersion: string;
};

type CatalogProduct = {
  key: string;
  name: string;
  objective: string | null;
  modules: CatalogModule[];
};

const COPY = {
  id: {
    eyebrow: "Katalog Modul BinaHub",
    title: "Pilih berdasarkan kebutuhan, bukan paket yang dipaksakan.",
    intro: "Setiap produk adalah payung solusi. Scope dan biaya ditetapkan pada modul yang benar-benar dibutuhkan organisasi Anda.",
    loading: "Memuat katalog yang tersedia…",
    unavailable: "Katalog publik sedang disiapkan.",
    unavailableBody: "Modul yang belum memiliki scope dan harga resmi tidak akan ditampilkan. Anda tetap dapat mendiskusikan kebutuhan bersama tim kami.",
    free: "Gratis",
    priceNote: "Harga belum termasuk pajak dan dapat berubah bila scope menjadi custom.",
    scope: "Scope standar",
    select: "Pilih modul",
    selected: "Dipilih",
    ask: "Diskusikan modul terpilih",
    consultation: "Jadwalkan konsultasi",
    assessment: "Mulai assessment",
    selectedCount: "modul dipilih",
    guardrail: "Hanya modul non-mock dan berstatus siap yang ditampilkan di sini.",
  },
  en: {
    eyebrow: "BinaHub Module Catalog",
    title: "Choose by need, not by a forced package.",
    intro: "Each product is a solution umbrella. Scope and pricing are defined at the module level based on what your organization actually needs.",
    loading: "Loading available catalog…",
    unavailable: "The public catalog is being prepared.",
    unavailableBody: "Modules without an approved scope and price are not displayed. You can still discuss your needs with our team.",
    free: "Free",
    priceNote: "Prices exclude tax and may change when the scope becomes custom.",
    scope: "Standard scope",
    select: "Select module",
    selected: "Selected",
    ask: "Discuss selected modules",
    consultation: "Schedule a consultation",
    assessment: "Start assessment",
    selectedCount: "modules selected",
    guardrail: "Only non-mock modules marked ready are published here.",
  },
} as const;

function formatPrice(module: CatalogModule, freeLabel: string) {
  if (module.basePrice === 0) return freeLabel;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: module.currency,
    maximumFractionDigits: 0,
  }).format(module.basePrice);
}

export default function CatalogPageContent() {
  const locale = useLocale();
  const copy = COPY[locale];
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const bookingUrl = process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL || "";

  useEffect(() => {
    const controller = new AbortController();
    async function loadCatalog() {
      try {
        const response = await fetch(appApiUrl("/api/catalog/modules"), { signal: controller.signal });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload.success) throw new Error(payload.error || copy.unavailable);
        setProducts(payload.products || []);
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") return;
        console.warn("[Public Catalog] Catalog could not be loaded:", loadError);
        setError(copy.unavailable);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void loadCatalog();
    return () => controller.abort();
  }, [copy.unavailable]);

  const selectedModules = useMemo(
    () => products.flatMap((product) => product.modules).filter((module) => selected.includes(module.code)),
    [products, selected],
  );
  const contactHref = `${localizePath("/contact", locale)}?modules=${encodeURIComponent(selected.join(","))}`;

  const toggleModule = (code: string) => {
    setSelected((current) => current.includes(code)
      ? current.filter((item) => item !== code)
      : [...current, code]);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] px-6 pb-24 pt-32 text-[#0B2C6B] md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-8 border-b border-[#0B2C6B]/12 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-light leading-[1.05] tracking-[-0.045em] md:text-6xl">{copy.title}</h1>
          </div>
          <p className="max-w-xl text-sm font-light leading-7 text-[#0B2C6B]/68 md:text-base">{copy.intro}</p>
        </header>

        {loading ? (
          <div className="flex min-h-72 items-center justify-center gap-3 text-sm text-[#0B2C6B]/58">
            <Loader2 className="animate-spin" size={18} /> {copy.loading}
          </div>
        ) : error || products.length === 0 ? (
          <section className="my-14 grid gap-8 rounded-[18px] border border-[#0B2C6B]/10 bg-white p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D9A441]/12 text-[#D9A441]"><Layers3 size={22} /></div>
            <div>
              <h2 className="text-xl font-semibold">{copy.unavailable}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#0B2C6B]/60">{copy.unavailableBody}</p>
            </div>
            <a href={localizePath("/contact", locale)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B2C6B] px-5 py-3 text-sm font-bold text-white">{copy.ask}<ArrowRight size={15} /></a>
          </section>
        ) : (
          <div className="space-y-14 py-14">
            {products.map((product) => (
              <section key={product.key}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{product.name}</h2>
                    {product.objective && <p className="mt-2 max-w-2xl text-sm leading-6 text-[#0B2C6B]/58">{product.objective}</p>}
                  </div>
                  <span className="text-xs font-semibold text-[#0B2C6B]/45">{product.modules.length} modul</span>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {product.modules.map((module) => {
                    const isSelected = selected.includes(module.code);
                    const isAssessment = module.code === "BI-PUBLIC";
                    return (
                      <article key={module.id} className={`flex min-h-[330px] flex-col rounded-[18px] border bg-white p-6 transition-colors ${isSelected ? "border-[#D9A441]" : "border-black/[0.06]"}`}>
                        <div className="flex items-start justify-between gap-4">
                          <span className="rounded-full bg-[#0B2C6B]/6 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">{module.code}</span>
                          <span className="text-xs text-[#0B2C6B]/38">{module.catalogVersion}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-snug">{module.name}</h3>
                        <p className="mt-3 text-sm font-light leading-6 text-[#0B2C6B]/60">{module.description}</p>
                        {module.standardScope && (
                          <div className="mt-5 border-l-2 border-[#D9A441] pl-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2C6B]/42">{copy.scope}</p>
                            <p className="mt-1 text-xs leading-5 text-[#0B2C6B]/68">{module.standardScope}</p>
                          </div>
                        )}
                        <div className="mt-auto pt-7">
                          <p className="text-2xl font-semibold">{formatPrice(module, copy.free)}</p>
                          <p className="mt-1 text-xs text-[#0B2C6B]/45">{module.basePrice > 0 ? `/ ${module.pricingUnit}` : module.pricingUnit}</p>
                          {isAssessment ? (
                            <a href={localizePath("/insight", locale)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2C6B] px-4 py-3 text-sm font-bold text-white">{copy.assessment}<ArrowRight size={15} /></a>
                          ) : (
                            <button type="button" onClick={() => toggleModule(module.code)} className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${isSelected ? "bg-[#D9A441] text-[#0B2C6B]" : "border border-[#0B2C6B]/16 text-[#0B2C6B]"}`}>
                              {isSelected && <Check size={15} />}{isSelected ? copy.selected : copy.select}
                            </button>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        <footer className="rounded-[18px] bg-[#0B2C6B] p-7 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-9">
          <div>
            <p className="text-sm font-semibold">{selectedModules.length} {copy.selectedCount}</p>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-white/55">{copy.guardrail} {copy.priceNote}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
            {bookingUrl && <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/22 px-5 py-3 text-sm font-bold"><CalendarDays size={15} />{copy.consultation}</a>}
            <a href={selectedModules.length > 0 ? contactHref : localizePath("/contact", locale)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A441] px-5 py-3 text-sm font-bold text-[#0B2C6B]">{copy.ask}<ArrowRight size={15} /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
