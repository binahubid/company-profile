import {useLocale} from '@/i18n/use-locale';
import styles from './program-hero-visual.module.css';

export function ProgramHeroVisual(){
 const en=useLocale()==='en';
 const layers=en?[
  ['Your needs','Team challenges and intended outcomes.'],
  ['Competencies','A relevant development focus.'],
  ['Your program','Options to explore with BinaHub.'],
 ]:[
  ['Kebutuhan','Tantangan dan tujuan tim Anda.'],
  ['Kompetensi','Fokus pengembangan yang relevan.'],
  ['Program','Pilihan untuk dibahas bersama.'],
 ];
 return <div className={styles.journey} data-program-hero-visual aria-hidden="true">
  <div className={styles.atmosphere}/>
  {layers.map(([title,description],index)=><div key={title} className={`${styles.layer} ${styles['layer'+index]}`}>
   <span className={styles.layerTitle}>{title}</span><span className={styles.layerText}>{description}</span>
   <span className={styles.rule}/>
  </div>)}
 </div>;
}
