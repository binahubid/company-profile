import Link from 'next/link';
import {ArrowRight,Check,ChevronDown} from 'lucide-react';
import {localizePath,type Locale} from '@/i18n/config';
import {ProgramJourneyLink} from './program-journey-link';
import styles from './program-recommendation.module.css';
const app=(process.env.NEXT_PUBLIC_BINAHUB_APP_URL||'https://app.binahub.id').replace(/\/$/,'');
export function ProgramRecommendationLanding({locale}:{locale:Locale}){
 const en=locale==='en';
 const steps=en?[
  ['Describe your needs','Tell us about your organization, its challenges, the impact and your intended outcomes.'],
  ['Review the recommendation','Read the needs summary, relevant program options and why they may fit.'],
  ['Discuss the next step','Align the scope and delivery approach with the BinaHub team.'],
 ]:[
  ['Ceritakan kebutuhan Anda','Isi konteks organisasi, tantangan, dampak, dan hasil yang ingin dicapai.'],
  ['Pelajari rekomendasinya','Lihat ringkasan kebutuhan, pilihan program, dan alasan kesesuaiannya.'],
  ['Tentukan langkah berikutnya','Bahas ruang lingkup dan pendekatan program bersama tim BinaHub.'],
 ];
 const paths=en?[
  ['Team / organization diagnosis','Map your team’s development needs.',`${app}/en/insight`],
  ['Individual Self Diagnostic','Explore your own development needs.',`${app}/insight/individual/packages`],
  ['Program catalog','Explore BinaHub’s development solutions.',localizePath('/pricing',locale)],
  ['Inquiry / consultation','Ask the BinaHub team about your needs.',localizePath('/contact',locale)],
 ]:[
  ['Diagnosis tim / organisasi','Petakan kondisi dan kebutuhan pengembangan tim.',`${app}/insight`],
  ['Self Diagnostic individu','Kenali kebutuhan pengembangan diri Anda.',`${app}/insight/individual/packages`],
  ['Katalog program','Jelajahi solusi pengembangan BinaHub.',localizePath('/pricing',locale)],
  ['Inquiry / konsultasi','Sampaikan pertanyaan kepada tim BinaHub.',localizePath('/contact',locale)],
 ];
 const start=en?'Get program recommendations':'Dapatkan rekomendasi program';
 const startLink=<ProgramJourneyLink href={`${app}/discovery`} className={styles.primary}>{start}<ArrowRight size={18} aria-hidden="true"/></ProgramJourneyLink>;
 return <div className={styles.page}>
  <section className={styles.hero} aria-labelledby="recommendation-heading"><div className={styles.container+' '+styles.heroGrid}>
   <div><h1 id="recommendation-heading">{en?'Development programs for your organization’s needs.':'Program pengembangan yang tepat untuk organisasi Anda.'}</h1>
    <p className={styles.lead}>{en?'Connect your team’s challenges and intended outcomes with relevant BinaHub programs.':'Hubungkan tantangan tim dan hasil yang ingin dicapai dengan program BinaHub yang relevan.'}</p>
    <div className={styles.actions}>{startLink}<Link href={localizePath('/pricing',locale)} className={styles.textLink}>{en?'Explore programs':'Jelajahi program'}</Link></div>
    <p className={styles.note}>{en?'For teams and organizations. No account required.':'Untuk tim dan organisasi. Tanpa membuat akun.'}</p>
   </div>
   <aside className={styles.preview} aria-labelledby="report-preview-heading">
    <h2 id="report-preview-heading">{en?'From needs to a development direction':'Dari kebutuhan menuju arah pengembangan'}</h2>
    <p className={styles.previewNote}>{en?'Illustrative report outline, not an actual recommendation.':'Ilustrasi isi laporan, bukan hasil rekomendasi nyata.'}</p>
    <dl>{(en?[
     ['Your needs','Coordination between teams is inconsistent.'],['Intended outcomes','Clearer roles, decisions and follow-through.'],['Relevant programs','Program options, development focus and reasons for fit.'],
    ]:[['Kebutuhan Anda','Koordinasi antartim belum berjalan konsisten.'],['Hasil yang dituju','Pembagian peran, keputusan, dan tindak lanjut lebih jelas.'],['Program yang relevan','Pilihan program, fokus pengembangan, dan alasan kesesuaiannya.']]).map(([title,text])=><div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
    <p className={styles.previewFoot}>{en?'The final scope and investment are discussed with BinaHub.':'Ruang lingkup dan investasi akhir dibahas bersama BinaHub.'}</p>
   </aside>
  </div></section>
  <section className={styles.container+' '+styles.process} aria-labelledby="process-heading">
   <div><h2 id="process-heading">{en?'A clear starting point for your team.':'Langkah awal yang jelas untuk tim Anda.'}</h2><p>{en?'Use the recommendation to start a focused conversation about the right program.':'Gunakan rekomendasi sebagai bahan awal untuk membahas program yang sesuai.'}</p></div>
   <ol>{steps.map(([title,text],i)=><li key={title}><span aria-hidden="true">{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
  </section>
  <section className={styles.deliverables} aria-labelledby="receive-heading"><div className={styles.container+' '+styles.deliverableGrid}>
   <h2 id="receive-heading">{en?'What you receive':'Apa yang Anda dapatkan'}</h2>
   <ul>{(en?['A readable summary of needs and intended outcomes.','Relevant program options with reasons for fit.','A starting point to discuss the scope and next steps.']:['Ringkasan kebutuhan dan sasaran yang mudah dipahami.','Pilihan program yang relevan beserta alasan kesesuaiannya.','Bahan diskusi untuk menyelaraskan ruang lingkup dan langkah berikutnya.']).map(text=><li key={text}><Check size={18} aria-hidden="true"/>{text}</li>)}</ul>
  </div></section>
  <section className={styles.container+' '+styles.questions} aria-labelledby="questions-heading"><h2 id="questions-heading">{en?'Before you begin':'Sebelum memulai'}</h2>
   <details><summary>{en?'How does this differ from team diagnosis?':'Apa bedanya dengan diagnosis tim?'}<ChevronDown size={18} aria-hidden="true"/></summary><p>{en?'Program recommendation starts from the challenges and outcomes you describe to identify relevant program options. Team diagnosis is a separate path to map team conditions and development needs.':'Rekomendasi program berangkat dari tantangan dan sasaran yang Anda sampaikan untuk menemukan pilihan program. Diagnosis tim adalah jalur terpisah untuk memetakan kondisi dan kebutuhan pengembangan tim.'}</p></details>
   <details><summary>{en?'Is the recommendation a final proposal?':'Apakah rekomendasi ini merupakan penawaran final?'}<ChevronDown size={18} aria-hidden="true"/></summary><p>{en?'It is an initial recommendation. BinaHub discusses the final scope, delivery requirements and investment with you.':'Rekomendasi ini merupakan arahan awal. Ruang lingkup, kebutuhan pelaksanaan, dan investasi akhir dibahas bersama BinaHub.'}</p></details>
   <div className={styles.closing}><h2>{en?'Tell us what your organization needs.':'Ceritakan kebutuhan organisasi Anda.'}</h2>{startLink}</div>
  </section>
  <section className={styles.otherPaths} aria-labelledby="other-paths-heading"><div className={styles.container}>
   <h2 id="other-paths-heading">{en?'Looking for a different starting point?':'Ingin memulai dari jalur lain?'}</h2>
   <div className={styles.paths}>{paths.map(([title,text,href])=><ProgramJourneyLink key={title} href={href} className={styles.path}><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={18} aria-hidden="true"/></ProgramJourneyLink>)}</div>
  </div></section>
 </div>;
}
