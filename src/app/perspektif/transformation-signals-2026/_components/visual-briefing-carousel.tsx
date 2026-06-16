"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  FileText,
  Lightbulb,
  Radio,
  ExternalLink,
} from "lucide-react";
import { useMemo, useState } from "react";

type Locale = "id" | "en";

type BriefingSignal = {
  group: string;
  title: string;
  signal: string;
  evidence: string;
  implication: string;
  sources: string[];
};

type EvidenceClip = {
  source: string;
  date: string;
  image: string;
  objectPosition: string;
  url: string;
  signalNumbers: readonly number[];
  headline: Record<Locale, string>;
  theme: Record<Locale, string>;
  notice: Record<Locale, string>;
};

type Copy = {
  evidence: string;
  leadershipImplication: string;
  mediaSignal: string;
  notice: string;
  previous: string;
  next: string;
  relatedSignals: string;
  sourceLinks: string;
};

function splitEvidence(text: string) {
  return text
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function EvidenceCard({
  clip,
  locale,
  copy,
}: {
  clip: EvidenceClip;
  locale: Locale;
  copy: Copy;
}) {
  return (
    <Link
      href={clip.url}
      target="_blank"
      rel="noreferrer"
      className="group grid overflow-hidden rounded-[14px] border border-black/[0.07] bg-white shadow-[0_22px_70px_-64px_rgba(11,44,107,0.52)] transition hover:-translate-y-0.5 hover:border-[#D9A441]/40 hover:shadow-[0_28px_80px_-58px_rgba(11,44,107,0.62)] md:grid-cols-[0.94fr_1fr]"
    >
      <div className="relative min-h-[170px] overflow-hidden bg-[#071A33] md:min-h-full">
        <Image
          src={clip.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
          style={{ objectPosition: clip.objectPosition }}
        />
        <div className="absolute inset-0 bg-[#071A33]/24 mix-blend-multiply" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#0B2C6B]">
            {clip.source}
          </span>
          <span className="h-1 w-1 rounded-full bg-black/22" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/34">
            {clip.date}
          </span>
          <ExternalLink size={12} className="ml-auto text-[#0B2C6B]/34" />
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.02em] text-[#0B2C6B]">
          {clip.headline[locale]}
        </h3>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2C6B]/42">
          {copy.notice}
        </p>
        <p className="mt-2 text-sm leading-[1.62] text-black/62">
          {clip.notice[locale]}
        </p>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B2C6B]/42">
          {copy.relatedSignals}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {clip.signalNumbers.map((signalNumber) => (
            <span
              key={signalNumber}
              className="rounded-full border border-[#0B2C6B]/10 bg-[#0B2C6B]/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B2C6B]/56"
            >
              #{String(signalNumber).padStart(2, "0")}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function VisualBriefingCarousel({
  signals,
  evidenceClips,
  locale,
  copy,
}: {
  signals: BriefingSignal[];
  evidenceClips: readonly EvidenceClip[];
  locale: Locale;
  copy: Copy;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSignal = signals[activeIndex];
  const signalNumber = activeIndex + 1;
  const relatedEvidence = useMemo(
    () =>
      evidenceClips.filter((clip) =>
        clip.signalNumbers.some((item) => item === signalNumber),
      ),
    [evidenceClips, signalNumber],
  );
  const evidenceItems = splitEvidence(activeSignal.evidence);

  const goTo = (direction: -1 | 1) => {
    setActiveIndex((current) =>
      (current + direction + signals.length) % signals.length,
    );
  };

  return (
    <div className="overflow-hidden rounded-[22px] border border-black/[0.06] bg-white/76 shadow-[0_28px_90px_-70px_rgba(11,44,107,0.45)] backdrop-blur">
      <div className="grid gap-0 lg:grid-cols-[1.03fr_1fr]">
        <article className="p-6 md:p-8 lg:p-10 xl:p-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B8841F]">
            The Complete Briefing
          </p>
          <h3 className="mt-5 flex max-w-3xl flex-col gap-1 text-4xl font-light leading-[1.06] tracking-[-0.055em] text-[#0B2C6B] md:text-6xl">
            <span>#{String(signalNumber).padStart(2, "0")}</span>
            <span>{activeSignal.title}</span>
          </h3>
          <span className="mt-5 inline-flex rounded-full bg-[#0B2C6B]/[0.065] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B2C6B]">
            {activeSignal.group}
          </span>
          <p className="mt-7 max-w-2xl text-base leading-[1.8] text-black/62">
            {activeSignal.signal}
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-[14px] border border-black/[0.06] bg-white p-5 shadow-[0_18px_60px_-58px_rgba(11,44,107,0.38)]">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B]/[0.06] text-[#0B2C6B]">
                  <FileText size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B2C6B]">
                    Description
                  </p>
                  <p className="mt-3 text-sm leading-[1.68] text-black/62">
                    {activeSignal.signal}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[14px] border border-black/[0.06] bg-white p-5 shadow-[0_18px_60px_-58px_rgba(11,44,107,0.38)]">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B]/[0.06] text-[#0B2C6B]">
                  <BarChart3 size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B2C6B]">
                    {copy.evidence}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-[1.62] text-black/62">
                    {evidenceItems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B2C6B]/42" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[14px] border border-[#D9A441]/22 bg-[#FFF8EA] p-5 shadow-[0_18px_60px_-58px_rgba(217,164,65,0.45)]">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441]/12 text-[#B8841F]">
                  <Lightbulb size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#B8841F]">
                    {copy.leadershipImplication}
                  </p>
                  <p className="mt-3 text-sm leading-[1.68] text-black/68">
                    {activeSignal.implication}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="border-t border-black/[0.08] bg-[#F8FAFC]/84 p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B]/[0.06] text-[#0B2C6B]">
              <Radio size={20} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0B2C6B]">
                External signals in the wild
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/52">
                {copy.mediaSignal}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {relatedEvidence.length > 0 ? (
              relatedEvidence.map((clip) => (
                <EvidenceCard
                  key={`${clip.source}-${clip.url}`}
                  clip={clip}
                  locale={locale}
                  copy={copy}
                />
              ))
            ) : (
              <div className="rounded-[14px] border border-dashed border-black/[0.12] bg-white/70 p-5">
                <p className="text-sm font-semibold text-[#0B2C6B]">
                  {copy.sourceLinks}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeSignal.sources.map((source) => (
                    <span
                      key={source}
                      className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-xs text-[#5F646D]"
                    >
                      <ExternalLink size={12} />
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      <div className="flex flex-col gap-4 border-t border-black/[0.06] bg-white/66 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {signals.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                "h-2.5 shrink-0 rounded-full transition-all",
                index === activeIndex
                  ? "w-10 bg-[#D9A441]"
                  : "w-2.5 bg-[#0B2C6B]/18 hover:bg-[#0B2C6B]/34",
              ].join(" ")}
              aria-label={`Signal ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => goTo(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0B2C6B] transition hover:bg-[#0B2C6B] hover:text-white"
            aria-label={copy.previous}
          >
            <ArrowLeft size={16} />
          </button>
          <span className="min-w-20 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2C6B]/42">
            {String(signalNumber).padStart(2, "0")} / {String(signals.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0B2C6B] transition hover:bg-[#0B2C6B] hover:text-white"
            aria-label={copy.next}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
