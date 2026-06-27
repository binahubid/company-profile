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
import { motion, AnimatePresence } from "framer-motion";

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
      className="group grid overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/40 hover:shadow-xl md:grid-cols-[0.94fr_1fr]"
    >
      <div className="relative min-h-[170px] overflow-hidden bg-[#071A33] md:min-h-full">
        <Image
          src={clip.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover transition-all duration-500 group-hover:scale-105"
          style={{ objectPosition: clip.objectPosition }}
        />
        <div className="absolute inset-0 bg-[#071A33]/20 mix-blend-multiply" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#0B2C6B]">
            {clip.source}
          </span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
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
              className="rounded-full border border-[#0B2C6B]/10 bg-[#0B2C6B]/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B2C6B]/56 transition-colors group-hover:bg-[#D9A441]/10 group-hover:text-[#B8841F]"
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
  const [direction, setDirection] = useState(0);
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

  const goTo = (dir: -1 | 1) => {
    setDirection(dir);
    setActiveIndex((current) =>
      (current + dir + signals.length) % signals.length,
    );
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 shadow-xl backdrop-blur">
      {/* Progress Bar - Top of container */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#0B2C6B]/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D9A441] to-[#B8841F]"
          initial={false}
          animate={{ width: `${((activeIndex + 1) / signals.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.03fr_1fr]">
        <article className="p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Signal Number and Navigation - Inside content area */}
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-sm font-medium text-[#0B2C6B]">
              #{String(signalNumber).padStart(2, "0")} / {String(signals.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(-1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0B2C6B] transition-all duration-200 hover:bg-[#0B2C6B] hover:text-white hover:shadow-md active:scale-95"
                aria-label={copy.previous}
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0B2C6B] transition-all duration-200 hover:bg-[#0B2C6B] hover:text-white hover:shadow-md active:scale-95"
                aria-label={copy.next}
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h3 className="flex max-w-3xl flex-col gap-1 text-4xl font-light leading-[1.06] tracking-[-0.055em] text-[#0B2C6B] md:text-6xl">
                <span>{activeSignal.title}</span>
              </h3>
              <span className="mt-5 inline-flex rounded-full bg-[#0B2C6B]/[0.065] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B2C6B]">
                {activeSignal.group}
              </span>
              <p className="mt-7 max-w-2xl text-base leading-[1.8] text-black/62">
                {activeSignal.signal}
              </p>

              <div className="mt-10 grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg"
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B]/[0.06] text-[#0B2C6B]">
                      <BarChart3 size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0B2C6B]">
                        {copy.evidence}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {evidenceItems.map((item, i) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#0B2C6B]/10 bg-[#F8FAFC] px-3 py-1.5 text-xs leading-snug text-black/62 transition-colors hover:bg-[#0B2C6B]/[0.06]"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-2xl border border-[#0B2C6B]/20 bg-[#F0F4F8] p-5 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2C6B]/[0.08] text-[#0B2C6B]">
                      <Lightbulb size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0B2C6B]">
                        {copy.leadershipImplication}
                      </p>
                      <p className="mt-3 text-sm leading-[1.68] text-black/68">
                        {activeSignal.implication}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
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
              <div className="rounded-2xl border border-dashed border-black/[0.12] bg-white/70 p-5">
                <p className="text-sm font-semibold text-[#0B2C6B]">
                  {copy.sourceLinks}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeSignal.sources.map((source) => (
                    <span
                      key={source}
                      className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-xs text-[#5F646D] transition-colors hover:bg-[#0B2C6B]/[0.04]"
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
    </div>
  );
}
