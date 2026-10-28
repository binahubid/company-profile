import Image from 'next/image';
import {Layers3,Route,Target} from 'lucide-react';
import {useLocale} from '@/i18n/use-locale';
import styles from './program-hero-visual.module.css';

export function ProgramHeroVisual({motionPlaying=false}:{motionPlaying?:boolean}){
 const en=useLocale()==='en';
 const layers=[
  {name:'needs',title:en?'Your needs':'Kebutuhan',description:en?'Team challenges and intended outcomes.':'Tantangan dan tujuan tim Anda.',Icon:Target},
  {name:'competencies',title:en?'Competencies':'Kompetensi',description:en?'A relevant development focus.':'Fokus pengembangan yang relevan.',Icon:Layers3},
  {name:'program',title:en?'Your program':'Program',description:en?'Options to explore with BinaHub.':'Pilihan untuk dibahas bersama.',Icon:Route},
 ];
 return <div className={styles.journey} data-program-hero-visual data-orbit-running={motionPlaying} aria-hidden="true">
  <div className={styles.atmosphere}/>
  <div className={styles.orbit}><div className={styles.orbitSpin} data-program-orbit><svg viewBox="0 0 640 640" fill="none">
    <ellipse cx="320" cy="320" rx="302" ry="232" transform="rotate(-29 320 320)" stroke="currentColor"/>
    <ellipse cx="320" cy="320" rx="271" ry="306" transform="rotate(24 320 320)" stroke="currentColor" opacity=".45"/>
    <circle cx="63" cy="193" r="4.5" fill="currentColor"/>
    <circle cx="582" cy="411" r="5" fill="currentColor"/>
  </svg></div></div>
  {layers.map(({name,title,description,Icon},index)=><div key={name} className={`${styles.layer} ${styles['layer'+index]}`} data-journey-layer={index} data-hero-tone={name}>
   <div className={styles.cardCopy} data-card-copy>
    <span className={styles.badge}><Icon size={19} strokeWidth={1.5}/></span>
    <span className={styles.layerTitle}>{title}</span>
    <span className={styles.layerText}>{description}</span>
   </div>
   <div className={styles.artwork}><Image src={`/program-recommendation/hero-${name}.webp`} alt="" fill priority={index===0} sizes="(min-width:1280px) 320px, (min-width:768px) 230px, 190px" className={styles.illustration}/></div>
  </div>)}
 </div>;
}
