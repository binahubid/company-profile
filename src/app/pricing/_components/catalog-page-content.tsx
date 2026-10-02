"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronDown, Layers3, Loader2, Search } from "lucide-react";
import { useLocale } from "@/i18n/use-locale";
import { localizePath } from "@/i18n/config";
import { appApiUrl } from "@/lib/public-api";
import { recordInboundJourneyEvent } from "@/lib/inbound-journey";

type CatalogModule = {
  id: string;
  code: string;
  name: string;
  description: string | null;
  tagline: string | null;
  learningObjectives: string[];
  contentOutline: string[];
  outputs: string[];
  bestFor: string | null;
  engagementFormat: string | null;
  duration: string | null;
  capacity: string | null;
  serviceBrand: string | null;
  notes: string | null;
  standardScope: string | null;
  deliverables: string | null;
};

type CatalogProduct = {
  key: string;
  name: string;
  description: string | null;
  shortDescription: string | null;
  objective: string | null;
  modules: CatalogModule[];
};

const COPY = {
  id: {
    eyebrow: "BinaHub Signature Solutions",
    title: "Solusi yang mengikuti kebutuhan organisasi Anda.",
    intro: "Jelajahi tujuan, konten, hasil, format, dan sasaran peserta dari setiap solusi. Rancangan akhir disesuaikan dengan konteks dan tujuan organisasi.",
    all: "Semua solusi", search: "Cari solusi atau topik", loading: "Memuat katalog…",
    unavailable: "Katalog belum tersedia", unavailableBody: "Silakan hubungi tim BinaHub untuk mendiskusikan kebutuhan organisasi Anda.",
    noResults: "Tidak ada solusi yang cocok dengan pencarian Anda.",
    objectives: "Tujuan pembelajaran", content: "Cakupan konten", outputs: "Hasil yang diperoleh",
    bestFor: "Cocok untuk", format: "Format", duration: "Durasi", capacity: "Kapasitas",
    brand: "Layanan terkait", notes: "Catatan", details: "Lihat rincian solusi",
    select: "Pilih solusi", selected: "Dipilih", assessment: "Mulai asesmen",
    selectedCount: "solusi dipilih", discuss: "Diskusikan solusi terpilih",
    footer: "Kebutuhan, aktivitas, dan pelaksanaan akhir diselaraskan dalam diskusi bersama tim BinaHub.",
  },
  en: {
    eyebrow: "BinaHub Signature Solutions",
    title: "Solutions shaped around your organization.",
    intro: "Explore the objectives, content, outcomes, format, and audience for each solution. The final approach is configured to your context and goals.",
    all: "All solutions", search: "Search solutions or topics", loading: "Loading catalog…",
    unavailable: "Catalog unavailable", unavailableBody: "Contact BinaHub to discuss your organization's needs.",
    noResults: "No solutions match your search.",
    objectives: "Learning objectives", content: "Content overview", outputs: "Outputs and deliverables",
    bestFor: "Best for", format: "Format", duration: "Duration", capacity: "Capacity",
    brand: "Service brand", notes: "Notes", details: "View solution details",
    select: "Select solution", selected: "Selected", assessment: "Start assessment",
    selectedCount: "solutions selected", discuss: "Discuss selected solutions",
    footer: "Final scope, activities, and delivery are aligned with your organization in conversation with BinaHub.",
  },
} as const;

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return <section>
    <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9A441]">{title}</h4>
    <ul className="space-y-2.5 text-sm leading-6 text-[#405777]">
      {items.map((item, index) => <li key={`${index}-${item}`} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />{item}</li>)}
    </ul>
  </section>;
}

export default function CatalogPageContent() {
  const locale = useLocale();
  const copy = COPY[locale];
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCatalog() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(appApiUrl(`/api/catalog/modules?locale=${locale}`), { signal: controller.signal });
        const payload = await response.json();
        if (!response.ok || payload.success !== true || !Array.isArray(payload.products)) throw new Error("Catalog response unavailable");
        setProducts((payload.products as CatalogProduct[]).map((product) => ({
          ...product,
          modules: product.modules.map((module) => ({
            ...module,
            learningObjectives: Array.isArray(module.learningObjectives) ? module.learningObjectives : [],
            contentOutline: Array.isArray(module.contentOutline) ? module.contentOutline : [],
            outputs: Array.isArray(module.outputs) ? module.outputs : [],
          })),
        })));
      } catch (loadError) {
        if (controller.signal.aborted) return;
        console.warn("[Public Catalog] Catalog could not be loaded:", loadError);
        setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void loadCatalog();
    return () => controller.abort();
  }, [locale]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase(locale === "id" ? "id-ID" : "en-US");
    return products
      .filter((product) => category === "all" || product.key === category)
      .map((product) => ({
        ...product,
        modules: product.modules.filter((module) => !query || [
          module.code, module.name, module.description, module.tagline, module.bestFor,
          ...module.learningObjectives, ...module.contentOutline,
        ].some((value) => value?.toLocaleLowerCase(locale === "id" ? "id-ID" : "en-US").includes(query))),
      }))
      .filter((product) => product.modules.length > 0);
  }, [category, locale, products, search]);

  const selectedModules = useMemo(
    () => products.flatMap((product) => product.modules).filter((module) => selected.includes(module.code)),
    [products, selected],
  );
  const contactHref = `${localizePath("/contact", locale)}?modules=${encodeURIComponent(selected.join(","))}`;

  function toggleModule(code: string) {
    setSelected((current) => {
      const next = current.includes(code) ? current.filter((item) => item !== code) : [...current, code];
      if (!current.includes(code)) void recordInboundJourneyEvent("catalog_module_selected", next).catch(() => undefined);
      return next;
    });
  }

  return <main className="min-h-screen bg-[#F5F7FA] px-5 pb-24 pt-32 text-[#0B2C6B] md:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <header className="grid gap-8 border-b border-[#0B2C6B]/12 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-[1.08] tracking-[-0.045em] md:text-6xl">{copy.title}</h1>
        </div>
        <p className="max-w-xl text-sm font-light leading-7 text-[#0B2C6B]/68 md:text-base">{copy.intro}</p>
      </header>

      {loading ? <div className="flex min-h-72 items-center justify-center gap-3 text-sm text-[#0B2C6B]/58"><Loader2 className="animate-spin" size={18} />{copy.loading}</div>
        : error || products.length === 0 ? <section className="my-14 rounded-[18px] border border-[#0B2C6B]/10 bg-white p-9 text-center">
          <Layers3 className="mx-auto text-[#D9A441]" size={28} />
          <h2 className="mt-4 text-xl font-semibold">{copy.unavailable}</h2>
          <p className="mt-3 text-sm text-[#0B2C6B]/60">{copy.unavailableBody}</p>
        </section> : <>
          <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" aria-label={locale === "id" ? "Kategori solusi" : "Solution categories"}>
              {[{ key: "all", name: copy.all }, ...products.map((product) => ({ key: product.key, name: product.name }))].map((option) =>
                <button key={option.key} type="button" onClick={() => setCategory(option.key)} aria-pressed={category === option.key}
                  className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${category === option.key ? "border-[#0B2C6B] bg-[#0B2C6B] text-white" : "border-[#0B2C6B]/12 bg-white text-[#0B2C6B]/70 hover:border-[#0B2C6B]/40"}`}>{option.name}</button>
              )}
            </div>
            <label className="flex min-w-64 items-center gap-2 rounded-xl border border-[#0B2C6B]/12 bg-white px-4 py-3 text-[#0B2C6B]/45">
              <Search size={16} /><span className="sr-only">{copy.search}</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={copy.search} className="w-full bg-transparent text-sm text-[#0B2C6B] outline-none placeholder:text-[#0B2C6B]/40" />
            </label>
          </div>

          {visibleProducts.length === 0 ? <p className="py-20 text-center text-sm text-[#0B2C6B]/55">{copy.noResults}</p> :
            <div className="space-y-16 pb-16">
              {visibleProducts.map((product) => <section key={product.key} id={product.key}>
                <div className="mb-7 grid gap-3 border-t border-[#0B2C6B]/12 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9A441]">{String(product.modules.length).padStart(2, "0")} Signature Solutions</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">{product.name}</h2></div>
                  <p className="max-w-xl text-sm leading-7 text-[#0B2C6B]/62">{product.description || product.shortDescription || product.objective}</p>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  {product.modules.map((module) => {
                    const isSelected = selected.includes(module.code);
                    const isAssessment = module.code === "BI-PUBLIC";
                    const objectives = module.learningObjectives.length ? module.learningObjectives : (module.standardScope ? module.standardScope.split("\n") : []);
                    const outputs = module.outputs.length ? module.outputs : (module.deliverables ? module.deliverables.split("\n") : []);
                    return <article key={module.id} className={`flex flex-col rounded-[18px] border bg-white p-6 shadow-[0_20px_50px_-46px_rgba(11,44,107,0.3)] md:p-8 ${isSelected ? "border-[#D9A441]" : "border-[#0B2C6B]/8"}`}>
                      <div className="flex items-center justify-between gap-3"><span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9A441]">{module.code}</span><BookOpen className="text-[#0B2C6B]/20" size={18} /></div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">{module.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#0B2C6B]/60">{module.tagline || module.description}</p>
                      {(module.engagementFormat || module.duration) && <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-[#0B2C6B]/66">
                        {module.engagementFormat && <span className="rounded-full bg-[#F5F7FA] px-3 py-2">{module.engagementFormat}</span>}
                        {module.duration && <span className="rounded-full bg-[#F5F7FA] px-3 py-2">{module.duration}</span>}
                      </div>}
                      {module.bestFor && <p className="mt-6 border-l-2 border-[#D9A441] pl-4 text-sm leading-6 text-[#405777]"><strong className="block text-[10px] uppercase tracking-[0.14em] text-[#0B2C6B]/45">{copy.bestFor}</strong>{module.bestFor}</p>}
                      <details className="group mt-7 border-t border-[#0B2C6B]/10 pt-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">{copy.details}<ChevronDown size={18} className="transition-transform group-open:rotate-180" /></summary>
                        <div className="mt-7 space-y-8 border-t border-[#0B2C6B]/8 pt-7">
                          <DetailList title={copy.objectives} items={objectives} />
                          <DetailList title={copy.content} items={module.contentOutline} />
                          <DetailList title={copy.outputs} items={outputs} />
                          <div className="grid gap-4 border-t border-[#0B2C6B]/8 pt-5 text-sm sm:grid-cols-2">
                            {([[copy.format, module.engagementFormat], [copy.duration, module.duration], [copy.capacity, module.capacity], [copy.brand, module.serviceBrand]] as const).filter(([, value]) => value).map(([label, value]) => <p key={label}><span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B2C6B]/45">{label}</span><span className="mt-1 block text-[#405777]">{value}</span></p>)}
                          </div>
                          {module.notes && <p className="border-t border-[#0B2C6B]/8 pt-5 text-xs leading-6 text-[#0B2C6B]/55"><strong>{copy.notes}: </strong>{module.notes}</p>}
                        </div>
                      </details>
                      <div className="mt-auto pt-7">{isAssessment ? <a href={localizePath("/insight", locale)} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2C6B] px-5 py-3 text-sm font-semibold text-white">{copy.assessment}<ArrowRight size={15} /></a>
                        : <button type="button" onClick={() => toggleModule(module.code)} aria-pressed={isSelected} className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${isSelected ? "bg-[#D9A441]" : "border border-[#0B2C6B]/16"}`}>{isSelected && <Check size={15} />}{isSelected ? copy.selected : copy.select}</button>}</div>
                    </article>;
                  })}
                </div>
              </section>)}
            </div>}
        </>}

      <footer className="rounded-[18px] bg-[#0B2C6B] p-7 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-9">
        <div><p className="text-sm font-semibold">{selectedModules.length} {copy.selectedCount}</p><p className="mt-2 max-w-2xl text-xs leading-5 text-white/60">{copy.footer}</p></div>
        <a href={selectedModules.length ? contactHref : localizePath("/contact", locale)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A441] px-5 py-3 text-sm font-bold text-[#0B2C6B] md:mt-0">{copy.discuss}<ArrowRight size={15} /></a>
      </footer>
    </div>
  </main>;
}
