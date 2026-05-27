import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery | BinaHub",
  description: "Dokumentasi kegiatan, ruang belajar, dan perjalanan transformasi BinaHub.",
};

const FEATURED_STORIES = [
  {
    image: GALLERY_IMAGES[4],
    label: "Hero Moment",
    title: "Ruang belajar yang bergerak bersama.",
    meta: "Facilitation • Team Engagement • Reflection",
  },
  {
    image: GALLERY_IMAGES[7],
    label: "Collaboration",
    title: "Interaksi yang membentuk cara kerja baru.",
    meta: "Workshop • Leadership • Culture",
  },
  {
    image: GALLERY_IMAGES[10],
    label: "Field Energy",
    title: "Simulasi dan pengalaman sebagai medium transformasi.",
    meta: "Experiential Learning • Team Dynamics",
  },
];

const GALLERY_STORY_COPY: Record<number, { title: string; meta: string; weight: "primary" | "secondary" | "support" }> = {
  0: { title: "Strategic learning session", meta: "Workshop • Jakarta", weight: "primary" },
  2: { title: "Team alignment in motion", meta: "Collaboration • Reflection", weight: "secondary" },
  4: { title: "Facilitated transformation", meta: "Leadership • Capability", weight: "primary" },
  7: { title: "Shared problem solving", meta: "People • Learning", weight: "primary" },
  10: { title: "Experiential team energy", meta: "Simulation • Outdoor", weight: "secondary" },
  11: { title: "Learning ecosystem", meta: "Program • Culture", weight: "secondary" },
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54]">
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44 lg:px-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-20 h-[420px] w-[680px] bg-[#0B2C6B]/[0.04] blur-[140px]" />
          <div className="absolute right-0 top-32 h-[360px] w-[640px] bg-[#D9A441]/[0.075] blur-[135px]" />
          <div className="absolute left-[40%] bottom-20 h-[220px] w-[500px] bg-[#D9A441]/[0.035] blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.026] bg-[linear-gradient(90deg,transparent_0,transparent_96%,rgba(11,44,107,0.7)_100%)] bg-[length:84px_100%]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-black/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0B2C6B]/52">
                Gallery
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-[#0B2C6B]">
                Dokumentasi perjalanan BinaHub.
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-[1.9] text-[#4A4C54]/70 md:text-lg">
              Kumpulan momen dari aktivitas pembelajaran, kolaborasi, dan pengembangan kapabilitas
              yang menjadi bagian dari ekosistem transformasi BinaHub.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <figure className="group relative min-h-[520px] overflow-hidden rounded-[14px] border border-white/70 bg-white shadow-[0_30px_90px_-52px_rgba(11,44,107,0.72)]">
              <Image
                src={FEATURED_STORIES[0].image.src}
                alt={FEATURED_STORIES[0].image.alt}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover saturate-[0.9] contrast-[1.02] brightness-[1.03] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A3B]/72 via-[#061A3B]/16 to-white/5" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">{FEATURED_STORIES[0].label}</p>
                <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">
                  {FEATURED_STORIES[0].title}
                </h2>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/48">{FEATURED_STORIES[0].meta}</p>
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {FEATURED_STORIES.slice(1).map((story) => (
                <figure key={story.title} className="group relative min-h-[252px] overflow-hidden rounded-[14px] border border-white/70 bg-white shadow-[0_22px_80px_-56px_rgba(11,44,107,0.65)]">
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover saturate-[0.78] contrast-[0.98] brightness-[0.98] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A3B]/68 via-[#061A3B]/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#D9A441]">{story.label}</p>
                    <h3 className="text-xl font-light leading-tight text-white">{story.title}</h3>
                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/44">{story.meta}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-5 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_IMAGES.map((image, index) => {
              const story = GALLERY_STORY_COPY[index];
              const isAnchor = story?.weight === "primary";
              const isSecondary = story?.weight === "secondary";

              return (
                <figure
                  key={image.src}
                  className={`group relative overflow-hidden rounded-[12px] border border-white/70 bg-white shadow-[0_20px_70px_-50px_rgba(11,44,107,0.62)] ${
                    isAnchor ? "sm:col-span-2 sm:row-span-2" : ""
                  } ${index === 4 || index === 11 ? "lg:col-span-2" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] ${
                      isAnchor
                        ? "saturate-[0.88] contrast-[1.02] brightness-[1.03] group-hover:saturate-[0.96] group-hover:brightness-[1.07]"
                        : "saturate-[0.72] contrast-[0.96] brightness-[0.95] group-hover:saturate-[0.82] group-hover:brightness-[1.01]"
                    }`}
                  />
                  <div className={`absolute inset-0 mix-blend-multiply ${isAnchor ? "bg-[#0B2C6B]/[0.035]" : "bg-[#0B2C6B]/[0.105]"}`} />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isAnchor
                      ? "bg-[linear-gradient(135deg,rgba(217,164,65,0.16)_0%,rgba(11,44,107,0.05)_48%,rgba(255,255,255,0.03)_100%)] opacity-72 group-hover:opacity-58"
                      : "bg-[linear-gradient(135deg,rgba(11,44,107,0.25)_0%,rgba(11,44,107,0.10)_42%,rgba(217,164,65,0.10)_100%)] opacity-82 group-hover:opacity-56"
                  }`} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#061A3B]/42 via-transparent to-white/5 transition-opacity duration-500 ${
                    isAnchor ? "opacity-52 group-hover:opacity-38" : "opacity-78 group-hover:opacity-54"
                  }`} />
                  {story && (
                    <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                        {isAnchor ? "Key Story" : isSecondary ? "Supporting Moment" : "Moment"}
                      </p>
                      <h3 className="text-lg font-light leading-tight text-white">{story.title}</h3>
                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/42">{story.meta}</p>
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
