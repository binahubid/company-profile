"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check, ChevronRight, Clock3, Layers3, LayoutGrid, List, Loader2, Plus, RefreshCw, Search, SlidersHorizontal, X } from "lucide-react";
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
type CatalogView = "cards" | "list";

const COPY = {
  id: {
    title: "Katalog solusi BinaHub",
    intro: "Temukan solusi pengembangan yang sesuai untuk tim dan organisasi Anda.",
    category: "Kategori",
    allCategories: "Semua kategori",
    savedOnly: "Pilihan saya",
    retry: "Coba lagi",
    clear: "Hapus filter",
    clearSearch: "Hapus pencarian",
    search: "Cari topik, kebutuhan, atau solusi…",
    searchLabel: "Cari solusi",
    all: "Semua",
    categories: "Jelajahi kategori",
    showing: "solusi tersedia",
    result: "hasil ditemukan",
    display: "Tampilan katalog",
    cards: "Kartu",
    list: "Daftar",
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
    title: "Find the right solution for your team.",
    intro: "Explore development solutions for your team and organization.",
    category: "Category",
    allCategories: "All categories",
    savedOnly: "My selection",
    retry: "Try again",
    clear: "Clear filters",
    clearSearch: "Clear search",
    search: "Search a topic, need, or solution…",
    searchLabel: "Search solutions",
    all: "All",
    categories: "Explore categories",
    showing: "solutions available",
    result: "results found",
    display: "Catalog view",
    cards: "Cards",
    list: "List",
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
  return <section className="border-t border-[#E6EBF0] pt-5">
    <h3 className="text-sm font-semibold text-[#142B46]">{title}</h3>
    <ul className="mt-3 space-y-2 text-sm leading-6 text-[#52657A]">
      {items.map((item, index) => <li key={`${index}-${item}`} className="flex gap-3"><Check size={16} className="mt-1 shrink-0 text-[#C79535]" aria-hidden="true" /><span>{item}</span></li>)}
    </ul>
  </section>;
}

function keepDialogFocus(event: KeyboardEvent<HTMLDialogElement>) {
  if (event.key !== "Tab") return;
  const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
    'button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
  )).filter(element => element.getClientRects().length > 0);
  const first = controls[0], last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
}

export default function CatalogPageContent() {
  const locale = useLocale();
  const copy = COPY[locale];
  const categoryName = useCallback((product: CatalogProduct) => locale === "id" ? ({
    "signature-self": "Pengembangan individu", "signature-team": "Pengembangan tim",
    "signature-organization": "Pengembangan organisasi", "signature-specialized": "Solusi khusus",
  } as Record<string, string>)[product.key] || product.name : product.name, [locale]);
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [category, setCategory] = useState("all");
  const [catalogView, setCatalogView] = useState<CatalogView>("cards");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detailItem, setDetailItem] = useState<CatalogItem | null>(null);
  const [showShortlist, setShowShortlist] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);
  const [retry, setRetry] = useState(0);
  const [selectionReady, setSelectionReady] = useState(false);
  const detailDialogRef = useRef<HTMLDialogElement>(null);
  const shortlistDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    void Promise.resolve().then(() => {
      try {
        const codes: unknown = JSON.parse(sessionStorage.getItem("binahub.catalog.selection.v1") || "[]");
        if (Array.isArray(codes)) setSelected([...new Set(codes.filter((code): code is string => typeof code === "string" && /^[A-Za-z0-9_-]{1,64}$/.test(code)))].slice(0, 200));
      } catch { /* Storage may be unavailable; selection still works in memory. */ }
      try {
        const view = sessionStorage.getItem("binahub.catalog.view.v1");
        if (view === "cards" || view === "list") setCatalogView(view);
      } catch { /* View switching also works without browser storage. */ }
      setSelectionReady(true);
    });
  }, []);
  useEffect(() => {
    if (selectionReady) {
      try { sessionStorage.setItem("binahub.catalog.selection.v1", JSON.stringify(selected)); } catch { /* No persistence promise when storage is blocked. */ }
    }
  }, [selected, selectionReady]);
  useEffect(() => {
    if (!detailItem && !showShortlist) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [detailItem, showShortlist]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCatalog() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(appApiUrl(`/api/catalog/modules?locale=${locale}`), { signal: controller.signal });
        const payload = await response.json();
        if (!response.ok || payload.success !== true || !Array.isArray(payload.products)) throw new Error("Catalog response unavailable");
        const loadedProducts=(payload.products as CatalogProduct[]).map((product) => ({
          ...product,
          modules: (Array.isArray(product.modules) ? product.modules : []).map((module) => ({
            ...module,
            learningObjectives: Array.isArray(module.learningObjectives) ? module.learningObjectives : [],
            contentOutline: Array.isArray(module.contentOutline) ? module.contentOutline : [],
            outputs: Array.isArray(module.outputs) ? module.outputs : [],
          })),
        }));
        setProducts(loadedProducts);
        const requested=new URLSearchParams(window.location.search).get('solution');
        if(requested){const product=loadedProducts.find(product=>product.modules.some(module=>module.code===requested));
          const requestedModule=product?.modules.find(module=>module.code===requested);
          if(product&&requestedModule)setDetailItem({product,module:requestedModule});}
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
  }, [locale, retry]);

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
      return normalized.includes(query);
    };
    return allItems.filter(({ module, product }) => {
      if (savedOnly && !selected.includes(module.code)) return false;
      if (category !== "all" && category !== product.key) return false;
      if (!query) return true;
      return [product.name, categoryName(product), module.code, module.name, module.description, module.tagline, module.bestFor,
        module.engagementFormat, module.serviceBrand, ...module.learningObjectives, ...module.contentOutline,
        ...module.outputs].some(matchesQuery);
    });
  }, [allItems, category, categoryName, locale, search, savedOnly, selected]);
  const selectedItems = useMemo(() => allItems.filter(({ module }) => module.code !== "BI-PUBLIC" && selected.includes(module.code)), [allItems, selected]);
  const visibleGroups = useMemo(() => products.map(product => ({
    product, items: visibleItems.filter(item => item.product.key === product.key),
  })).filter(group => group.items.length > 0), [products, visibleItems]);
  const contactHref = `${localizePath("/contact", locale)}?modules=${encodeURIComponent(selectedItems.map(item => item.module.code).join(","))}`;

  function changeView(view: CatalogView) {
    setCatalogView(view);
    try { sessionStorage.setItem("binahub.catalog.view.v1", view); } catch { /* Keep the current view in memory. */ }
  }

  function toggleModule(code: string) {
    const wasSelected = selected.includes(code);
    const next = wasSelected ? selected.filter((item) => item !== code) : [...selected, code];
    setSelected(current => current.includes(code) ? current.filter(item => item !== code) : [...current, code]);
    if (!wasSelected) void recordInboundJourneyEvent("catalog_module_selected", next).catch(() => undefined);
  }

  const activeModule = detailItem?.module;
  const isActiveSelected = activeModule ? selected.includes(activeModule.code) : false;
  const isAssessment = activeModule?.code === "BI-PUBLIC";

  return <div className={styles.catalog} data-has-selection={selectedItems.length > 0} data-view={catalogView}>
    <div className={styles.container}>
      <header className={styles.heading}>
        <div><h1>{copy.title}</h1><p>{copy.intro}</p></div>
        <button type="button" onClick={() => setShowShortlist(true)} className={styles.selectionButton}>
          <Layers3 size={17} aria-hidden="true" />{copy.shortlistTitle}<span>{selectedItems.length}</span>
        </button>
      </header>

      {loading ? <div className={styles.loading} role="status"><Loader2 className="motion-safe:animate-spin" size={18} aria-hidden="true" />{copy.loading}</div>
        : error || products.length === 0 ? <section className="rounded-2xl border border-[#E2E9F0] bg-white px-6 py-14 text-center">
          <Layers3 className="mx-auto text-[#B5822A]" size={26} aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold">{copy.unavailable}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#62758A]">{copy.unavailableBody}</p>
          {error && <button type="button" onClick={() => setRetry(value => value + 1)} className={styles.retry}><RefreshCw size={16} aria-hidden="true" />{copy.retry}</button>}
          <a href={localizePath("/contact", locale)} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#12356C] px-5 text-sm font-semibold text-white">{copy.contact}<ArrowRight size={16} /></a>
        </section> : <>
          <section className={styles.filters} aria-label={copy.categories}>
            <div className={styles.search}>
              <Search size={19} className="shrink-0 text-[#74869B]" aria-hidden="true" />
              <label htmlFor="catalog-search" className="sr-only">{copy.searchLabel}</label>
              <input id="catalog-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={copy.search} />
              {search && <button type="button" aria-label={copy.clearSearch} onClick={() => setSearch("")} className="inline-flex min-h-11 min-w-8 items-center justify-center"><X size={16} aria-hidden="true" /></button>}
            </div>
            <label className={styles.category}><SlidersHorizontal size={16} aria-hidden="true" /><span className="sr-only">{copy.category}</span>
              <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value="all">{copy.allCategories} ({allItems.length})</option>
                {products.map(product => <option key={product.key} value={product.key}>{categoryName(product)} ({product.modules.length})</option>)}
              </select>
            </label>
            <button type="button" className={styles.savedFilter} onClick={() => setSavedOnly(value => !value)} aria-pressed={savedOnly}>{copy.savedOnly} ({selectedItems.length})</button>
          </section>

          <div className={styles.resultsHeader}>
            <p className="text-sm font-medium text-[#52657A]" aria-live="polite"><span className="font-semibold text-[#142B46]">{visibleItems.length}</span> {search || category !== "all" || savedOnly ? copy.result : copy.showing}</p>
            <div className={styles.resultActions}>
              {(search || category !== "all" || savedOnly) && <button type="button" className={styles.clearFilters} onClick={() => { setCategory("all"); setSearch(""); setSavedOnly(false); }}><X size={14} aria-hidden="true" />{copy.clear}</button>}
              <div className={styles.viewSwitch} role="group" aria-label={copy.display}>
                <button type="button" onClick={() => changeView("cards")} aria-pressed={catalogView === "cards"}><LayoutGrid size={16} aria-hidden="true" />{copy.cards}</button>
                <button type="button" onClick={() => changeView("list")} aria-pressed={catalogView === "list"}><List size={16} aria-hidden="true" />{copy.list}</button>
              </div>
            </div>
          </div>

          {visibleItems.length === 0 ? <section className="rounded-2xl border border-[#E2E9F0] bg-white px-5 py-14 text-center">
            <h2 className="text-lg font-semibold">{copy.noResults}</h2>
            <p className="mt-2 text-sm text-[#62758A]">{copy.noResultsBody}</p>
            <button type="button" onClick={() => { setCategory("all"); setSearch(""); setSavedOnly(false); }} className="mt-6 min-h-11 rounded-lg border border-[#DCE5EE] px-5 text-sm font-semibold text-[#12356C]">{copy.reset}</button>
          </section> : catalogView === "list" ? <div className={styles.listGroups}>
            {visibleGroups.map(({ product, items }) => <section key={product.key} aria-labelledby={`catalog-category-${product.key}`} className={styles.listGroup}>
              <div className={styles.listHeading}>
                <h2 id={`catalog-category-${product.key}`}>{categoryName(product)}</h2>
                <span>{items.length} {copy.showing}</span>
              </div>
              <ul>
                {items.map(item => {
                  const { module } = item;
                  const isSelected = selected.includes(module.code);
                  return <li key={module.id} className={styles.listRow} data-selected={isSelected}>
                    <h3><button type="button" onClick={() => setDetailItem(item)} aria-label={`${copy.view}: ${module.name}`}>
                      <span>{module.name}</span><ChevronRight size={17} aria-hidden="true" />
                    </button></h3>
                    {module.code !== "BI-PUBLIC" && <button type="button" onClick={() => toggleModule(module.code)} className={styles.listSelection} aria-label={`${isSelected ? copy.remove : copy.add}: ${module.name}`} aria-pressed={isSelected} title={isSelected ? copy.remove : copy.add}>
                      {isSelected ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                    </button>}
                  </li>;
                })}
              </ul>
            </section>)}
          </div> : <div className={styles.grid}>
            {visibleItems.map((item) => {
              const { module, product } = item;
              const isSelected = selected.includes(module.code);
              const isPublicAssessment = module.code === "BI-PUBLIC";
              return <article key={module.id} className={styles.card} data-selected={isSelected}>
                <div className={styles.cardCategory}>
                  <span>{categoryName(product)}</span>
                  {isSelected && <span className={styles.selected}><Check size={13} aria-hidden="true" />{copy.selected}</span>}
                </div>
                <h2><button type="button" onClick={() => setDetailItem(item)}>{module.name}</button></h2>
                <p className={styles.cardDescription}>{module.tagline || module.description || product.shortDescription}</p>
                <div className={styles.cardBottom}>
                  {(module.duration || module.engagementFormat) && <div className={styles.cardMeta}>
                    {module.duration && <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{module.duration}</span>}
                    {module.engagementFormat && <span>{module.engagementFormat}</span>}
                  </div>}
                  <div className={styles.cardActions}>
                    <button type="button" onClick={() => setDetailItem(item)} className={styles.viewButton} aria-label={`${copy.view}: ${module.name}`}>{copy.view}<ChevronRight size={16} aria-hidden="true" /></button>
                    {!isPublicAssessment && <button type="button" onClick={() => toggleModule(module.code)} aria-label={`${isSelected ? copy.remove : copy.add}: ${module.name}`} aria-pressed={isSelected} title={isSelected ? copy.remove : copy.add} className={styles.addButton}>{isSelected ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}</button>}
                  </div>
                </div>
              </article>;
            })}
          </div>}
        </>}

      <section className={styles.help}>
        <div><h2>{copy.footerTitle}</h2><p>{copy.footerBody}</p></div>
        <a href={localizePath("/contact", locale)}>{copy.contact}<ArrowRight size={16} aria-hidden="true" /></a>
      </section>
    </div>

    {selectedItems.length > 0 && <div className={styles.selectionTray}>
      <div className="mx-auto flex max-w-[1320px] items-center gap-3">
        <button type="button" onClick={() => setShowShortlist(true)} className="min-w-0 flex-1 rounded-lg px-1 py-1 text-left focus-visible:outline-2 focus-visible:outline-[#12356C]">
          <span className="block text-sm font-semibold text-[#142B46]" role="status">{selectedItems.length} {copy.selectedCount}</span>
          <span className="mt-0.5 block text-xs text-[#62758A]">{copy.review} <ChevronRight size={12} className="inline" aria-hidden="true" /></span>
        </button>
        <a href={contactHref} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#12356C] px-4 text-xs font-semibold text-white md:text-sm">{copy.discuss}<ArrowRight size={15} aria-hidden="true" /></a>
      </div>
    </div>}

    <dialog ref={detailDialogRef} onKeyDown={keepDialogFocus} onClose={() => setDetailItem(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} className={styles.detailDialog} aria-label={activeModule ? `${copy.detailTitle}: ${activeModule.name}` : copy.detailTitle}>
      {activeModule && <div className="flex h-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-[#E6EBF0] px-5 py-4 md:px-8">
          <span className="text-xs font-semibold text-[#52657A]">{copy.detailTitle}</span>
          <button type="button" onClick={() => detailDialogRef.current?.close()} aria-label={copy.close} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#52657A] hover:bg-[#F2F5F8] focus-visible:outline-2 focus-visible:outline-[#12356C]"><X size={20} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-7 md:px-8">
          <span className="rounded-md bg-[#EFF4F9] px-2.5 py-1.5 text-[11px] font-semibold text-[#31557F]">{detailItem ? categoryName(detailItem.product) : ''}</span>
          <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#142B46] md:text-3xl">{activeModule.name}</h2>
          {activeModule.tagline && <p className="mt-3 text-base leading-7 text-[#405773]">{activeModule.tagline}</p>}
          {activeModule.description && activeModule.description !== activeModule.tagline && <p className="mt-3 text-sm leading-7 text-[#62758A]">{activeModule.description}</p>}
          {activeModule.bestFor && <div className="mt-5 rounded-lg bg-[#F5F8FB] p-4"><p className="text-xs font-semibold text-[#52657A]">{copy.bestFor}</p><p className="mt-2 text-sm leading-6 text-[#405773]">{activeModule.bestFor}</p></div>}
          <div className="mt-8 space-y-7">
            <DetailList title={copy.objectives} items={activeModule.learningObjectives.length ? activeModule.learningObjectives : activeModule.standardScope?.split("\n").filter(Boolean) || []} />
            <DetailList title={copy.content} items={activeModule.contentOutline} />
            <DetailList title={copy.outputs} items={activeModule.outputs.length ? activeModule.outputs : activeModule.deliverables?.split("\n").filter(Boolean) || []} />
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#E6EBF0] pt-6 text-sm">
              {([[copy.format, activeModule.engagementFormat], [copy.duration, activeModule.duration], [copy.capacity, activeModule.capacity], [copy.brand, activeModule.serviceBrand]] as const).filter(([, value]) => value).map(([label, value]) => <p key={label}><span className="block text-xs font-semibold text-[#52657A]">{label}</span><span className="mt-1 block leading-5 text-[#405773]">{value}</span></p>)}
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

    <dialog ref={shortlistDialogRef} onKeyDown={keepDialogFocus} onClose={() => setShowShortlist(false)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} className={styles.shortlistDialog} aria-label={copy.shortlistTitle}>
      <div className="flex h-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-[#E6EBF0] px-5 py-4 md:px-7">
          <h2 className="text-lg font-semibold text-[#142B46]">{copy.shortlistTitle}</h2>
          <button type="button" onClick={() => shortlistDialogRef.current?.close()} aria-label={copy.close} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#52657A] hover:bg-[#F2F5F8] focus-visible:outline-2 focus-visible:outline-[#12356C]"><X size={20} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-7">
          <p className="text-sm leading-6 text-[#62758A]">{copy.shortlistIntro}</p>
          {selectedItems.length === 0 ? <p className="py-10 text-center text-sm text-[#62758A]">{copy.emptyShortlist}</p>
            : <ul className="mt-5 divide-y divide-[#E6EBF0]">{selectedItems.map(({ module, product }) => <li key={module.id} className="flex items-start justify-between gap-4 py-4"><div className="min-w-0"><p className="text-xs font-medium text-[#52657A]">{categoryName(product)}</p><p className="mt-1 text-sm font-semibold leading-5 text-[#142B46]">{module.name}</p></div><button type="button" onClick={() => toggleModule(module.code)} aria-label={`${copy.remove}: ${module.name}`} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#52657A] hover:bg-[#F2F5F8] hover:text-[#12356C]"><X size={16} aria-hidden="true" /></button></li>)}</ul>}
        </div>
        {selectedItems.length > 0 && <div className="border-t border-[#E6EBF0] px-5 py-4 md:px-7"><a href={contactHref} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#12356C] px-5 text-sm font-semibold text-white">{copy.discuss}<ArrowRight size={16} /></a></div>}
      </div>
    </dialog>
  </div>;
}
