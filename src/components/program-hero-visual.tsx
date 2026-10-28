import {useLocale} from '@/i18n/use-locale';
import styles from './program-hero-visual.module.css';

export function ProgramHeroVisual(){
 const en=useLocale()==='en';
 return <div className={styles.journey} data-program-hero-visual aria-hidden="true">
  <div className={styles.atmosphere}/>
  <div className={`${styles.layer} ${styles.needs}`} data-example-card="needs">
   <span className={styles.cardLabel}>{en?'Your needs':'Kebutuhan'}</span>
   <p className={styles.needQuote}>{en?'Cross-team coordination is inconsistent.':'Koordinasi lintas tim belum konsisten.'}</p>
  </div>
  <div className={`${styles.layer} ${styles.competencies}`} data-example-card="competencies">
   <span className={styles.cardLabel}>{en?'Development focus':'Fokus kompetensi'}</span>
   <div className={styles.competencyTags}><span>Communication</span><span>Collaboration</span></div>
  </div>
  <div className={`${styles.layer} ${styles.program}`} data-example-card="program">
   <span className={styles.cardLabel}>{en?'Relevant program':'Program yang relevan'}</span>
   <span className={styles.programName}>Team Synergy</span>
   <p className={styles.programReason}>{en?'Shared goals, cross-functional contributions and clear team commitments.':'Tujuan bersama, kontribusi lintas fungsi, dan komitmen tim.'}</p>
  </div>
  <span className={styles.disclosure}>{en?'Illustrative recommendation':'Ilustrasi rekomendasi'}</span>
 </div>;
}
