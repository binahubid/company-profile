"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, ChevronRight, Clock3, Layers3, Loader2, Plus, Search, Users, X } from "lucide-react";
import { useLocale } from "@/i18n/use-locale";
import { localizePath } from "@/i18n/config";
import { appApiUrl } from "@/lib/public-api";
import { recordInboundJourneyEvent } from "@/lib/inbound-journey";
import styles from "./catalog-page-content.module.css";

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

type CatalogItem = { module: CatalogModule; product: CatalogProduct };

const COPY = {
  id: {
    eyebrow: "BINAHUB SOLUTIONS CATALOG",
    title: "Find the right solution for your team.",
    intro: "Jelajahi solusi berdasarkan kebutuhan, lihat rinciannya, lalu pilih yang ingin Anda diskusikan. Tanpa paket yang dipaksakan.",
    search: "Cari topik, kebutuhan, atau solusi…",
    searchLabel: "Cari solusi",
    all: "Semua",
    categories: "Jelajahi kategori",
    showing: "solusi tersedia",
    result: "hasil ditemukan",
    loading: "Menyiapkan katalog…",
    unavailable: "Katalog belum tersedia",
    unavailableBody: "Silakan hubungi tim BinaHub untuk mendiskusikan kebutuhan organisasi Anda.",
    noResults: "Belum ada solusi yang cocok.",
    noResultsBody: "Coba kata kunci lain atau lihat semua kategori.",
    reset: "Lihat semua solusi",
    view: "Lihat rincian",
    add: "Tambahkan ke pilihan",
    remove: "Hapus dari pilihan",
    selected: "Dipilih",
    selectedCount: "solusi dipilih",
    review: "Lihat pilihan",
    shortlistTitle: "Pilihan Anda",
    shortlistIntro: "Tinjau solusi yang ingin didiskusikan bersama tim BinaHub.",
    emptyShortlist: "Belum ada solusi yang dipilih.",
    discuss: "Diskusikan pilihan",
    contact: "Diskusikan kebutuhan Anda",
    assessment: "Mulai asesmen",
    detailTitle: "Rincian solusi",
    objectives: "Tujuan pembelajaran",
    content: "Cakupan konten",
    outputs: "Hasil yang diperoleh",
    bestFor: "Cocok untuk",
    format: "Format",
    duration: "Durasi",
    capacity: "Kapasitas",
    brand: "Layanan terkait",
    notes: "Catatan",
    close: "Tutup",
    footerTitle: "Belum menemukan yang tepat?",
    footerBody: "Ceritakan kebutuhan organisasi Anda. Kami bantu menyusun pendekatan yang relevan.",
    noPrice: "Ruang lingkup dan penawaran disusun sesuai kebutuhan organisasi.",
  },
  en: {
    eyebrow: "BINAHUB SOLUTIONS CATALOG",
    title: "Find the right solution for your team.",
    intro: "Browse by need, explore the details, and save what you would like to discuss. No forced bundles.",
    search: "Search a topic, need, or solution…",
    searchLabel: "Search solutions",
    all: "All",
    categories: "Explore categories",
    showing: "solutions available",
    result: "results found",
    loading: "Preparing the catalog…",
    unavailable: "Catalog unavailable",
    unavailableBody: "Contact BinaHub to discuss your organization's needs.",
    noResults: "No matching solutions yet.",
    noResultsBody: "Try another search or browse all categories.",
    reset: "View all solutions",
    view: "View details",
    add: "Add to selection",
    remove: "Remove from selection",
    selected: "Selected",
    selectedCount: "solutions selected",
    review: "Review selection",
    shortlistTitle: "Your selection",
    shortlistIntro: "Review the solutions you would like to discuss with BinaHub.",
    emptyShortlist: "No solutions selected yet.",
    discuss: "Discuss selection",
    contact: "Discuss your needs",
    assessment: "Start assessment",
    detailTitle: "Solution details",
    objectives: "Learning objectives",
    content: "Content overview",
    outputs: "Outputs and deliverables",
    bestFor: "Best for",
    format: "Format",
    duration: "Duration",
    capacity: "Capacity",
    brand: "Related service",
    notes: "Notes",
    close: "Close",
    footerTitle: "Not seeing the right fit?",
    footerBody: "Tell us what your organization needs. We'll help shape a relevant approach.",
    noPrice: "Scope and proposal are tailored to your organization.",
  },
} as const;

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return <section className="border-t border-[#E6EBF0] pt-6">
    <h4 className="text-sm font-semibold text-[#142B46]">{title}</h4>
    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52657A]">
      {items.map((item, index) => <li key={`${index}-${item}`} className="flex gap-3"><Check size={16} className="mt-1 shrink-0 text-[#C79535]" aria-hidden="true" /><span>{item}</span></li>)}
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
  const [detailItem, setDetailItem] = useState<CatalogItem | null>(null);
  const [showShortlist, setShowShortlist] = useState(false);
  const detailDialogRef = useRef<HTMLDialogElement>(null);
  const shortlistDialogRef = useRef<HTMLDialogElement>(null);

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

  useEffect(() => {
    const dialog = detailDialogRef.current;
    if (detailItem && dialog && !dialog.open) dialog.showModal();
  }, [detailItem]);

  useEffect(() => {
    const dialog = shortlistDialogRef.current;
    if (showShortlist && dialog && !dialog.open) dialog.showModal();
  }, [showShortlist]);

  const allItems = useMemo(() => products.flatMap((product) => product.modules.map((module) => ({ module, product }))), [products]);
  const visibleItems = useMemo(() => {
    const query = search.trim().toLocaleLowerCase(locale === "id" ? "id-ID" : "en-US");
    const matchesQuery = (value: string | null) => {
      if (!value) return false;
      const normalized = value.toLocaleLowerCase(locale === "id" ? "id-ID" : "en-US");
      return query.length <= 2
        ? normalized.split(/[^\p{L}\p{N}]+/u).includes(query)
        : normalized.includes(query);
    };
    return allItems.filter(({ module, product }) => {
      if (category !== "all" && category !== product.key) return false;
      if (!query) return true;
      return [product.name, module.code, module.name, module.description, module.tagline, module.bestFor,
        module.engagementFormat, module.serviceBrand, ...module.learningObjectives, ...module.contentOutline,
        ...module.outputs].some(matchesQuery);
    });
  }, [allItems, category, locale, search]);
  const selectedItems = useMemo(() => allItems.filter(({ module }) => selected.includes(module.code)), [allItems, selected]);
  const contactHref = `${localizePath("/contact", locale)}?modules=${encodeURIComponent(selected.join(","))}`;

  function toggleModule(code: string) {
    const wasSelected = selected.includes(code);
    const next = wasSelected ? selected.filter((item) => item !== code) : [...selected, code];
    setSelected(next);
    if (!wasSelected) void recordInboundJourneyEvent("catalog_module_selected", next).catch(() => undefined);
  }

  const activeModule = detailItem?.module;
  const isActiveSelected = activeModule ? selected.includes(activeModule.code) : false;
  const isAssessment = activeModule?.code === "BI-PUBLIC";

  return <main className="min-h-screen bg-[#F7F9FB] pb-32 pt-28 text-[#142B46] md:pt-36">
    <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
      <header className="max-w-3xl pb-9 pt-3 md:pb-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B5822A]">{copy.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2.15rem,4.1vw,3.8rem)] font-semibold leading-[1.11] tracking-[-0.055em]">{copy.title}</h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#62758A] md:text-base">{copy.intro}</p>
      </header>

      {loading ? <div className="flex min-h-72 items-center justify-center gap-3 text-sm text-[#62758A]" role="status"><Loader2 className="animate-spin" size={18} />{copy.loading}</div>
        : error || products.length === 0 ? <section className="rounded-2xl border border-[#E2E9F0] bg-white px-6 py-14 text-center">
          <Layers3 className="mx-auto text-[#B5822A]" size={26} aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold">{copy.unavailable}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#62758A]">{copy.unavailableBody}</p>
          <a href={localizePath("/contact", locale)} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#12356C] px-5 text-sm font-semibold text-white">{copy.contact}<ArrowRight size={16} /></a>
        </section> : <>
          <section className="rounded-2xl border border-[#E2E9F0] bg-white p-4 shadow-[0_8px_28px_-25px_rgba(20,43,70,0.3)] md:p-6" aria-label={copy.categories}>
            <label className="flex h-13 items-center gap-3 rounded-xl border border-[#DCE5EE] bg-[#FAFBFD] px-4 transition-colors focus-within:border-[#12356C] focus-within:bg-white">
              <Search size={19} className="shrink-0 text-[#74869B]" aria-hidden="true" />
              <span className="sr-only">{copy.searchLabel}</span>
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={copy.search} className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#142B46] outline-none placeholder:text-[#8A9AAD]" />
            </label>
            <div className="mt-5 flex items-center gap-3">
              <p className="hidden shrink-0 text-xs font-semibold text-[#74869B] md:block">{copy.categories}</p>
              <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1" aria-label={copy.categories}>
                {[{ key: "all", name: copy.all, count: allItems.length }, ...products.map((product) => ({ key: product.key, name: product.name, count: product.modules.length }))].map((option) =>
                  <button key={option.key} type="button" onClick={() => setCategory(option.key)} aria-pressed={category === option.key}
                    className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12356C] ${category === option.key ? "border-[#12356C] bg-[#12356C] text-white" : "border-[#DCE5EE] bg-white text-[#405773] hover:border-[#9DB0C5]"}`}>
                    {option.name}<span className={category === option.key ? "text-white/65" : "text-[#9AAABC]"}>{option.count}</span>
                  </button>
                )}
              </div>
            </div>
          </section>

          <div className="flex items-center justify-between gap-4 pb-5 pt-9">
            <p className="text-sm font-medium text-[#52657A]" aria-live="polite"><span className="font-semibold text-[#142B46]">{visibleItems.length}</span> {search || category !== "all" ? copy.result : copy.showing}</p>
            <span className="hidden text-xs text-[#8A9AAD] sm:block">{copy.noPrice}</span>
          </div>

          {visibleItems.length === 0 ? <section className="rounded-2xl border border-[#E2E9F0] bg-white px-5 py-14 text-center">
            <h2 className="text-lg font-semibold">{copy.noResults}</h2>
            <p className="mt-2 text-sm text-[#62758A]">{copy.noResultsBody}</p>
            <button type="button" onClick={() => { setCategory("all"); setSearch(""); }} className="mt-6 min-h-11 rounded-lg border border-[#DCE5EE] px-5 text-sm font-semibold text-[#12356C]">{copy.reset}</button>
          </section> : <div className="grid gap-4 pb-12 md:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => {
              const { module, product } = item;
              const isSelected = selected.includes(module.code);
              const isPublicAssessment = module.code === "BI-PUBLIC";
              return <article key={module.id} className="group flex min-h-[292px] flex-col rounded-2xl border border-[#E2E9F0] bg-white p-5 shadow-[0_12px_32px_-30px_rgba(20,43,70,0.55)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[#B9C8D9] hover:shadow-[0_20px_40px_-30px_rgba(20,43,70,0.35)] md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="min-w-0 truncate rounded-md bg-[#EFF4F9] px-2.5 py-1.5 text-[11px] font-semibold text-[#31557F]">{product.name}</span>
                  {isSelected && <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-[#A7731D]"><Check size={13} />{copy.selected}</span>}
                </div>
                <button type="button" onClick={() => setDetailItem(item)} className="mt-5 block w-full text-left focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12356C]" aria-label={`${copy.view}: ${module.name}`}>
                  <h2 className="text-lg font-semibold leading-snug tracking-[-0.025em] text-[#142B46] group-hover:text-[#12356C] md:text-xl">{module.name}</h2>
                  <p className={`mt-3 text-sm leading-6 text-[#62758A] ${styles.cardDescription}`}>{module.tagline || module.description || product.shortDescription}</p>
                </button>
                <div className="mt-auto pt-6">
                  {(module.duration || module.engagementFormat) && <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#EBEFF3] pt-4 text-xs text-[#74869B]">
                    {module.duration && <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{module.duration}</span>}
                    {module.engagementFormat && <span className="inline-flex items-center gap-1.5"><Users size={14} aria-hidden="true" />{module.engagementFormat}</span>}
                  </div>}
                  <div className="mt-5 flex items-center gap-2">
                    <button type="button" onClick={() => setDetailItem(item)} className="inline-flex min-h-11 flex-1 items-center justify-between rounded-lg border border-[#DCE5EE] px-4 text-xs font-semibold text-[#12356C] transition-colors hover:bg-[#F4F7FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12356C]">{copy.view}<ChevronRight size={16} aria-hidden="true" /></button>
                    {!isPublicAssessment && <button type="button" onClick={() => toggleModule(module.code)} aria-label={`${isSelected ? copy.remove : copy.add}: ${module.name}`} aria-pressed={isSelected} title={isSelected ? copy.remove : copy.add} className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12356C] ${isSelected ? "border-[#D8AC5A] bg-[#FFF6E5] text-[#9B6718]" : "border-[#DCE5EE] text-[#12356C] hover:bg-[#F4F7FA]"}`}>{isSelected ? <Check size={18} /> : <Plus size={18} />}</button>}
                  </div>
                </div>
              </article>;
            })}
          </div>}
        </>}

      <section className="mt-3 flex flex-col gap-5 rounded-2xl bg-[#12356C] px-6 py-7 text-white md:flex-row md:items-center md:justify-between md:px-9 md:py-9">
        <div><h2 className="text-xl font-semibold tracking-[-0.025em]">{copy.footerTitle}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{copy.footerBody}</p></div>
        <a href={localizePath("/contact", locale)} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#12356C]">{copy.contact}<ArrowRight size={16} aria-hidden="true" /></a>
      </section>
    </div>

    {selectedItems.length > 0 && <div className="fixed bottom-[84px] left-4 right-4 z-40 rounded-2xl border border-[#DCE5EE] bg-white/95 px-4 py-3 shadow-[0_12px_35px_-20px_rgba(20,43,70,0.4)] backdrop-blur-md md:bottom-5 md:left-6 md:right-auto md:w-[420px] md:p-3">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3">
        <button type="button" onClick={() => setShowShortlist(true)} className="min-w-0 flex-1 rounded-lg px-1 py-1 text-left focus-visible:outline-2 focus-visible:outline-[#12356C]">
          <span className="block text-sm font-semibold text-[#142B46]">{selectedItems.length} {copy.selectedCount}</span>
          <span className="mt-0.5 block text-xs text-[#62758A]">{copy.review} <ChevronRight size={12} className="inline" aria-hidden="true" /></span>
        </button>
        <a href={contactHref} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#12356C] px-4 text-xs font-semibold text-white md:text-sm">{copy.discuss}<ArrowRight size={15} aria-hidden="true" /></a>
      </div>
    </div>}

    <dialog ref={detailDialogRef} onClose={() => setDetailItem(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} className={styles.detailDialog} aria-label={activeModule ? `${copy.detailTitle}: ${activeModule.name}` : copy.detailTitle}>
      {activeModule && <div className="flex h-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-[#E6EBF0] px-5 py-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#74869B]">{copy.detailTitle}</span>
          <button type="button" onClick={() => detailDialogRef.current?.close()} aria-label={copy.close} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#52657A] hover:bg-[#F2F5F8] focus-visible:outline-2 focus-visible:outline-[#12356C]"><X size={20} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-7 md:px-8">
          <span className="rounded-md bg-[#EFF4F9] px-2.5 py-1.5 text-[11px] font-semibold text-[#31557F]">{detailItem?.product.name}</span>
          <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#142B46] md:text-3xl">{activeModule.name}</h2>
          {activeModule.tagline && <p className="mt-3 text-base leading-7 text-[#405773]">{activeModule.tagline}</p>}
          {activeModule.description && activeModule.description !== activeModule.tagline && <p className="mt-3 text-sm leading-7 text-[#62758A]">{activeModule.description}</p>}
          {activeModule.bestFor && <div className="mt-7 rounded-xl bg-[#F5F8FB] p-4"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#74869B]">{copy.bestFor}</p><p className="mt-2 text-sm leading-6 text-[#405773]">{activeModule.bestFor}</p></div>}
          <div className="mt-8 space-y-7">
            <DetailList title={copy.objectives} items={activeModule.learningObjectives.length ? activeModule.learningObjectives : activeModule.standardScope?.split("\n").filter(Boolean) || []} />
            <DetailList title={copy.content} items={activeModule.contentOutline} />
            <DetailList title={copy.outputs} items={activeModule.outputs.length ? activeModule.outputs : activeModule.deliverables?.split("\n").filter(Boolean) || []} />
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#E6EBF0] pt-6 text-sm">
              {([[copy.format, activeModule.engagementFormat], [copy.duration, activeModule.duration], [copy.capacity, activeModule.capacity], [copy.brand, activeModule.serviceBrand]] as const).filter(([, value]) => value).map(([label, value]) => <p key={label}><span className="block text-[11px] font-semibold text-[#8A9AAD]">{label}</span><span className="mt-1 block leading-5 text-[#405773]">{value}</span></p>)}
            </div>
            {activeModule.notes && <p className="border-t border-[#E6EBF0] pt-6 text-sm leading-6 text-[#62758A]"><strong className="text-[#405773]">{copy.notes}: </strong>{activeModule.notes}</p>}
          </div>
        </div>
        <div className="border-t border-[#E6EBF0] bg-white px-5 py-4 md:px-8">
          {isAssessment ? <a href={localizePath("/insight", locale)} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#12356C] px-5 text-sm font-semibold text-white">{copy.assessment}<ArrowRight size={16} /></a>
            : <button type="button" onClick={() => toggleModule(activeModule.code)} aria-pressed={isActiveSelected} className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold ${isActiveSelected ? "border border-[#D8AC5A] bg-[#FFF6E5] text-[#9B6718]" : "bg-[#12356C] text-white"}`}>{isActiveSelected ? <Check size={17} /> : <Plus size={17} />}{isActiveSelected ? copy.remove : copy.add}</button>}
        </div>
      </div>}
    </dialog>

    <dialog ref={shortlistDialogRef} onClose={() => setShowShortlist(false)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} className={styles.shortlistDialog} aria-label={copy.shortlistTitle}>
      <div className="flex h-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-[#E6EBF0] px-5 py-4 md:px-7">
          <h2 className="text-lg font-semibold text-[#142B46]">{copy.shortlistTitle}</h2>
          <button type="button" onClick={() => shortlistDialogRef.current?.close()} aria-label={copy.close} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#52657A] hover:bg-[#F2F5F8] focus-visible:outline-2 focus-visible:outline-[#12356C]"><X size={20} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-7">
          <p className="text-sm leading-6 text-[#62758A]">{copy.shortlistIntro}</p>
          {selectedItems.length === 0 ? <p className="py-10 text-center text-sm text-[#62758A]">{copy.emptyShortlist}</p>
            : <ul className="mt-5 divide-y divide-[#E6EBF0]">{selectedItems.map(({ module, product }) => <li key={module.id} className="flex items-start justify-between gap-4 py-4"><div className="min-w-0"><p className="text-xs font-medium text-[#74869B]">{product.name}</p><p className="mt-1 text-sm font-semibold leading-5 text-[#142B46]">{module.name}</p></div><button type="button" onClick={() => toggleModule(module.code)} aria-label={`${copy.remove}: ${module.name}`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#74869B] hover:bg-[#F2F5F8] hover:text-[#12356C]"><X size={16} /></button></li>)}</ul>}
        </div>
        {selectedItems.length > 0 && <div className="border-t border-[#E6EBF0] px-5 py-4 md:px-7"><a href={contactHref} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#12356C] px-5 text-sm font-semibold text-white">{copy.discuss}<ArrowRight size={16} /></a></div>}
      </div>
    </dialog>
  </main>;
}
