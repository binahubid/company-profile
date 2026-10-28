'use client';

import {useId, useRef, useState, type KeyboardEvent} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight, Check} from 'lucide-react';
import {localizePath, type Locale} from '@/i18n/config';
import styles from './program-recommendation.module.css';

/** Synthetic editorial demonstration only; never calls the recommendation API. */
export function ProgramRecommendationDemo({locale}: {locale: Locale}) {
  const en = locale === 'en';
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const labels = en ? ['Needs', 'Competencies', 'Program'] : ['Kebutuhan', 'Kompetensi', 'Program'];
  const scenes = [
    {tone: 'needs', image: 'direction-ribbon.webp', lines: en ? ['From challenges,', 'to a direction.'] : ['Dari tantangan,', 'menuju arah.']},
    {tone: 'competencies', image: 'competency-lenses.webp', lines: en ? ['Find your focus.', 'Build capability.'] : ['Temukan fokus.', 'Bangun kemampuan.']},
    {tone: 'program', image: 'program-layers.webp', lines: en ? ['The right program.', 'A clear next step.'] : ['Program yang tepat.', 'Langkah yang jelas.']},
  ];
  const scene = scenes[active];
  const disclosure = <p className={styles.exampleLabel}>{en ? 'Illustrative example · not your result' : 'Contoh ilustratif · bukan hasil Anda'}</p>;
  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % labels.length;
    else if (event.key === 'ArrowLeft') next = (index + labels.length - 1) % labels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = labels.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return <div id="recommendation-preview" className={styles.showcase}>
    <div role="tablist" aria-label={en ? 'Illustrative recommendation journey' : 'Ilustrasi alur rekomendasi'} className={styles.demoTabs}>
      {labels.map((label, index) => {
        return <button type="button" key={label} ref={node => {tabs.current[index] = node;}}
          role="tab" id={id + '-tab-' + index} aria-selected={active === index}
          aria-controls={id + '-panel-' + index} tabIndex={active === index ? 0 : -1}
          onClick={() => setActive(index)} onKeyDown={event => selectWithKeyboard(event, index)}>
          {label}
        </button>;
      })}
    </div>
    <div className={styles.demoBody}>
      <div className={styles.demoArt} data-tone={scene.tone} aria-hidden="true">
        {scenes.map((item, index) => <Image key={item.image} src={'/program-recommendation/' + item.image}
          alt="" width={1536} height={1024} data-active={active === index}
          sizes="(max-width: 767px) 100vw, 50vw" loading="eager" fetchPriority={index === 0 ? 'high' : 'low'}/>)}
        <p>{scene.lines[0]}<br/>{scene.lines[1]}</p>
        <span className={styles.artCaption}>BinaHub · People. Learning. Elevated.</span>
      </div>
      <div className={styles.demoContent}>
        <div className={styles.demoPanels}>
          <div role="tabpanel" id={id + '-panel-0'} aria-labelledby={id + '-tab-0'} tabIndex={active === 0 ? 0 : -1} aria-hidden={active !== 0} inert={active !== 0}>
            <h2>{en ? 'Understand what your team is facing.' : 'Pahami apa yang dihadapi tim Anda.'}</h2>
            {disclosure}
            <p>{en ? 'A cross-functional team wants to improve coordination and follow-through.' : 'Sebuah tim lintas fungsi ingin memperbaiki koordinasi dan tindak lanjut pekerjaan.'}</p>
            <dl className={styles.needsList}>
              <div><dt>{en ? 'The challenge' : 'Tantangan utama'}</dt><dd>{en ? 'Responsibilities and handoffs between teams are unclear.' : 'Pembagian tanggung jawab dan serah terima pekerjaan belum jelas.'}</dd></div>
              <div><dt>{en ? 'The intended outcome' : 'Hasil yang dituju'}</dt><dd>{en ? 'Clearer roles, shared commitments and consistent follow-through.' : 'Peran lebih jelas, komitmen bersama, dan tindak lanjut yang konsisten.'}</dd></div>
            </dl>
          </div>
          <div role="tabpanel" id={id + '-panel-1'} aria-labelledby={id + '-tab-1'} tabIndex={active === 1 ? 0 : -1} aria-hidden={active !== 1} inert={active !== 1}>
            <h2>{en ? 'Connect the need to a development focus.' : 'Hubungkan kebutuhan dengan fokus pengembangan.'}</h2>
            {disclosure}
            <p>{en ? 'In this example, these competencies provide a starting point for a program discussion.' : 'Dalam contoh ini, kompetensi berikut menjadi titik awal untuk membahas pilihan program.'}</p>
            <ul className={styles.competencyList}>
              {[
                ['Collaboration', en ? 'Align contributions across team boundaries.' : 'Menyelaraskan kontribusi lintas tim.'],
                ['Communication', en ? 'Clarify information and shared understanding.' : 'Memperjelas informasi dan pemahaman bersama.'],
                ['Follow-Through', en ? 'Turn decisions into consistent next steps.' : 'Menindaklanjuti keputusan secara konsisten.'],
              ].map(([title, text]) => <li key={title}><Check size={16} aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></li>)}
            </ul>
          </div>
          <div role="tabpanel" id={id + '-panel-2'} aria-labelledby={id + '-tab-2'} tabIndex={active === 2 ? 0 : -1} aria-hidden={active !== 2} inert={active !== 2}>
            <h2>{en ? 'Explore a program, with a reason to consider it.' : 'Lihat pilihan program dan alasan kesesuaiannya.'}</h2>
            {disclosure}
            <p>{en ? 'An illustrative catalog match for this coordination scenario:' : 'Contoh pilihan dari katalog untuk kebutuhan koordinasi di atas:'}</p>
            <div className={styles.programExample}>
              <h3>Team Synergy</h3>
              <p>{en ? 'Focuses on shared goals, cross-functional contributions and clear team commitments.' : 'Berfokus pada tujuan bersama, kontribusi lintas fungsi, dan komitmen tim yang jelas.'}</p>
              <Link href={localizePath('/pricing', locale) + '?solution=SS-13'} className={styles.textLink}>
                {en ? 'View this program in the catalog' : 'Lihat program ini di katalog'}<ArrowRight size={16} aria-hidden="true"/>
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.demoFoot}>{en ? 'Your actual recommendation follows the needs you share. Final scope and investment are discussed with BinaHub.' : 'Rekomendasi Anda mengikuti kebutuhan yang disampaikan. Ruang lingkup dan investasi akhir dibahas bersama BinaHub.'}</p>
      </div>
    </div>
  </div>;
}
