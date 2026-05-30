"use client";

import { useCallback, useState } from "react";
import { IntroAnimation } from "@/components/intro-animation";
import { HeroSection } from "./hero-section";

export function HomeHero() {
  const [heroReady, setHeroReady] = useState(false);

  const handleIntroDone = useCallback(() => {
    setHeroReady(true);
  }, []);

  return (
    <>
      <IntroAnimation onDone={handleIntroDone} />
      <HeroSection heroReady={heroReady} />
    </>
  );
}
