"use client";

import Image from "next/image";
import {ArrowDown} from 'lucide-react';
import {useLocale} from '@/i18n/use-locale';
import { useState } from 'react';
import { HeroMessageCarousel } from '@/components/hero-message-carousel';
import { ProgramHeroVisual } from '@/components/program-hero-visual';
import heroStyles from '@/components/program-hero-visual.module.css';

interface HeroSectionProps {
  heroReady: boolean;
}

const ORBIT_ICONS = [
  { src: "/icon/iconinsight.png", label: "BinaInsight", angle: 0 },
  { src: "/icon/iconacademy.png", label: "BinaAcademy", angle: 45 },
  { src: "/icon/iconcoach.png", label: "BinaCoach", angle: 90 },
  { src: "/icon/iconlab.png", label: "BinaLab", angle: 135 },
  { src: "/icon/iconplay.png", label: "BinaPlay", angle: 180 },
  { src: "/icon/iconimpact.png", label: "BinaImpact", angle: 225 },
  { src: "/icon/iconjourney.png", label: "BinaJourney", angle: 270 },
  { src: "/icon/iconworks.png", label: "BinaWorks", angle: 315 },
] as const;

function HeroContourLines() {
  const paths = Array.from({ length: 18 }, (_, index) => {
    const y = 710 + index * 14;
    const x = -20 + index * 4;
    return `M${x} ${y} C120 ${y - 86} 216 ${y - 96} 328 ${y - 26} C430 ${y + 36} 548 ${y + 30} 670 ${y - 18}`;
  });

  return (
    <svg
      className="hero-contour-lines absolute bottom-0 left-0 h-[34%] w-[52%] opacity-70 md:h-[42%] md:w-[44%]"
      viewBox="0 0 720 900"
      preserveAspectRatio="xMinYMax meet"
    >
      {paths.map((path, index) => (
        <path
          key={path}
          className="hero-contour-line"
          d={path}
          fill="none"
          stroke="#D9A441"
          strokeDasharray="1 9"
          strokeLinecap="round"
          strokeOpacity={0.18 + index * 0.018}
          strokeWidth="1.35"
        />
      ))}
    </svg>
  );
}

const LITE_FLOW_PATHS = Array.from({ length: 20 }, (_, index) => {
  const y = 575 + index * 18;
  const wave = index % 2 === 0 ? 1 : -1;
  const startX = -240 + (index % 5) * 22;
  const midX = 570 + index * 9;
  const endX = 1620 - (index % 4) * 16;

  return `M${startX} ${y} C125 ${y - 26 + wave * 8} 330 ${y - 10 + wave * 6} ${midX} ${y + 26} C825 ${y + 70} 1065 ${y + 108 - wave * 5} ${endX} ${y + 154}`;
});

function HeroLiteLines() {
  return (
    <svg
      className="hero-lite-lines absolute inset-0 h-full w-full mix-blend-multiply"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroLiteLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8E6B2" stopOpacity="0.24" />
          <stop offset="42%" stopColor="#D9A441" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#8A560A" stopOpacity="0.82" />
        </linearGradient>
      </defs>
      <g className="hero-lite-line-drift">
        {LITE_FLOW_PATHS.map((path, index) => (
          <path
            key={path}
            className={`hero-lite-line hero-lite-line-${(index % 5) + 1}`}
            d={path}
            fill="none"
            pathLength="1"
            stroke="url(#heroLiteLine)"
            strokeLinecap="round"
            strokeOpacity={0.36 + index * 0.012}
            strokeWidth={0.85 + index * 0.035}
          />
        ))}
      </g>
    </svg>
  );
}

function HeroImageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(217,164,65,0.08),transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_58%,#FAFBFC_100%)]" />
      <HeroContourLines />
      <HeroLiteLines />
    </div>
  );
}

function HeroOrbitVisual() {
  function handleLogoMove(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty("--logo-tilt-x", `${(-y * 28).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--logo-tilt-y", `${(x * 32).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--logo-lift-x", `${(x * 18).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--logo-lift-y", `${(y * 18).toFixed(2)}px`);
  }

  function handleLogoLeave(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--logo-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--logo-tilt-y", "0deg");
    event.currentTarget.style.setProperty("--logo-lift-x", "0px");
    event.currentTarget.style.setProperty("--logo-lift-y", "0px");
  }

  return (
    <div className="hero-orbit-stage relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[410px] md:max-w-[320px] lg:max-w-[580px] xl:max-w-[670px]">
      {/* Rings - hidden on mobile (<768px) */}
      <svg className="hidden md:block hero-orbit-rings absolute inset-0 h-full w-full" viewBox="0 0 640 640" aria-hidden="true">
        <defs>
          <linearGradient id="heroOrbitGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8E6B2" stopOpacity="0.08" />
            <stop offset="42%" stopColor="#D9A441" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8A560A" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <g className="hero-orbit-ring-spin">
          <circle cx="320" cy="320" r="254" fill="none" stroke="url(#heroOrbitGold)" strokeDasharray="160 80 28 48" strokeWidth="2.4" />
          <circle cx="320" cy="320" r="224" fill="none" stroke="url(#heroOrbitGold)" strokeDasharray="18 12" strokeOpacity="0.55" strokeWidth="2" />
        </g>
        <g className="hero-orbit-ring-spin hero-orbit-ring-spin-reverse">
          <circle cx="320" cy="320" r="278" fill="none" stroke="url(#heroOrbitGold)" strokeDasharray="220 72 12 34" strokeOpacity="0.6" strokeWidth="1.7" />
          <circle cx="320" cy="320" r="196" fill="none" stroke="url(#heroOrbitGold)" strokeDasharray="80 52" strokeOpacity="0.42" strokeWidth="1.6" />
        </g>
        {[0, 60, 126, 188, 244, 306].map((angle) => {
          const radians = (angle * Math.PI) / 180;
          const x = 320 + Math.cos(radians) * 254;
          const y = 320 + Math.sin(radians) * 254;
          return <circle key={angle} cx={x} cy={y} r="8" fill="#F7D982" opacity="0.8" />;
        })}
      </svg>

      {/* Icons - hidden on mobile (<768px) */}
      <div className="hidden md:block hero-orbit-icons absolute inset-0">
        {ORBIT_ICONS.map((icon, index) => (
          <div
            key={icon.label}
            className="hero-orbit-icon-slot absolute left-1/2 top-1/2 -ml-5 -mt-5 lg:-ml-9 lg:-mt-9"
            style={{
              ["--orbit-angle" as string]: `${icon.angle}deg`,
              ["--orbit-delay" as string]: `${index * -1.4}s`,
            }}
          >
            <div className="hero-orbit-icon-counter">
              <div className="group/icon flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/88 shadow-[0_18px_42px_-28px_rgba(11,44,107,0.4)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#D9A441]/60 hover:bg-white hover:shadow-[0_0_34px_rgba(217,164,65,0.5)] md:h-10 md:w-10 lg:h-[72px] lg:w-[72px]">
                <Image
                  src={icon.src}
                  alt=""
                  width={36}
                  height={36}
                  className="h-5 w-5 object-contain opacity-90 transition duration-300 group-hover/icon:scale-110 group-hover/icon:opacity-100 md:h-5 md:w-5 lg:h-9 lg:w-9"
                  loading="eager"
                />
                <span className="sr-only">{icon.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3D Logo - always present, responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="hero-tilt-logo relative h-[70%] w-[70%] min-w-[180px] max-w-[280px] md:h-[52%] md:w-[52%] md:min-w-[135px] md:max-w-[165px] lg:min-w-[225px] lg:max-w-[490px]"
          onPointerMove={handleLogoMove}
          onPointerLeave={handleLogoLeave}
        >
          <Image
            src="/3D-logo-2.webp"
            alt="Logo 3D BinaHub"
            fill
            sizes="(min-width: 1024px) 490px, (min-width: 768px) 165px, 280px"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_44px_34px_rgba(7,26,51,0.28)]"
            priority
          />
          <span className="absolute inset-x-[12%] bottom-[4%] h-12 rounded-full bg-[#071A33]/24 blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function FadeIn({
  children,
  delay,
  ready,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  ready: boolean;
  className?: string;
}) {
  return (
    <div
      data-hero-reveal
      className={`transition-[opacity,transform,filter] duration-1000 ease-out ${className ?? ""}`}
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? "translateY(0)" : "translateY(18px)",
        filter: ready ? "blur(0)" : "blur(12px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function HeroSection({ heroReady }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [motionPlaying,setMotionPlaying]=useState(false);
  const en=useLocale()==='en';
  return (
    <section id="home-hero" data-hero-slide={activeSlide===0?'recommendation':'brand'} className="relative z-0 -mt-24 w-full overflow-x-hidden bg-white">
      <div className={`${heroStyles.heroFrame} relative min-h-[calc(100svh+6rem)] overflow-hidden bg-white text-[#071A33]`}>
        <HeroImageBackground />
        <div className={heroStyles.recommendationBackdrop} data-active={activeSlide===0} aria-hidden="true"/>

        <div className={`${heroStyles.heroContent} relative z-10 flex min-h-[calc(100svh+6rem)] flex-col items-center justify-start px-6 pb-20 pt-[8.25rem] text-center md:pt-[14.75rem] lg:items-start lg:px-20 lg:text-left xl:px-28`}>
          <div className={`${heroStyles.heroComposition} grid w-full max-w-[1580px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10 xl:gap-12`}>
            <div className={`${heroStyles.heroCopyColumn} order-1 z-10 flex min-w-0 w-full max-w-[780px] flex-col items-center lg:items-start`}>
              <HeroMessageCarousel ready={heroReady} active={activeSlide} onActiveChange={setActiveSlide} onMotionStateChange={setMotionPlaying}/>
            </div>

            <div className={`${heroStyles.heroVisualColumn} order-2 pointer-events-auto mx-auto w-full max-w-[340px] px-1 sm:max-w-[410px] md:max-w-[380px] md:px-0 lg:max-w-none orbit-shift-right`}>
              <FadeIn ready={heroReady} delay={650} className="w-full">
                <div className={heroStyles.visuals}>
                  <div className={heroStyles.visual} data-active={activeSlide===0} aria-hidden="true"><ProgramHeroVisual motionPlaying={motionPlaying&&activeSlide===0}/></div>
                  <div className={heroStyles.visual} data-active={activeSlide===1} aria-hidden={activeSlide!==1} inert={activeSlide!==1}><HeroOrbitVisual/></div>
                </div>
              </FadeIn>
            </div>
          </div>
          <a className={heroStyles.scrollCue} href="#platform" aria-label={en?'Scroll to the next section':'Scroll ke bagian berikutnya'}><ArrowDown size={16} aria-hidden="true"/><span>Scroll</span></a>
        </div>
      </div>
    </section>
  );
}
