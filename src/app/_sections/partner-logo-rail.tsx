"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { PARTNER_LOGOS } from "@/lib/partner-logos";
import { useLocale } from "@/i18n/use-locale";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import styles from "./partner-logo-rail.module.css";

export function PartnerLogoRail() {
  const en = useLocale() === "en";
  const reducedMotion = useReducedMotionPreference();
  const [paused, setPaused] = useState(false);
  return (
    <section className={styles.rail} aria-labelledby="partner-logo-heading" data-paused={paused}>
      <div className={styles.top}>
        <h2 id="partner-logo-heading">
          {en ? "Organizations that have worked with Bina Daya Nugraha" : "Organisasi yang telah bekerja sama dengan Bina Daya Nugraha"}
        </h2>
        {!reducedMotion && (
          <button type="button" className={styles.toggle} onClick={() => setPaused(value => !value)}
            aria-label={paused ? (en ? "Play client logos" : "Jalankan logo klien") : (en ? "Pause client logos" : "Jeda logo klien")}>
            {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
          </button>
        )}
      </div>
      <div className={styles.viewport} role="group" aria-labelledby="partner-logo-heading" tabIndex={0}>
        <div className={styles.track}>
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} className={styles.items} aria-hidden={duplicate || undefined}>
              {PARTNER_LOGOS.map(logo => (
                <li key={logo.name} className={styles.item}>
                  <Image src={logo.src} alt={duplicate ? "" : logo.name} width={110} height={36}
                    className={`${styles.logo} ${logo.className ?? ""}`} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
