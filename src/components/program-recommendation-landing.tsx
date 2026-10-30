import Link from 'next/link';
import Image from 'next/image';
import {ArrowDown, ArrowRight, Check, ChevronDown, FileText, MessagesSquare} from 'lucide-react';
import {localizePath, type Locale} from '@/i18n/config';
import {ProgramJourneyLink} from './program-journey-link';
import {ProgramRecommendationDemo} from './program-recommendation-demo';
import palette from '@/styles/program-palette.module.css';
import styles from './program-recommendation.module.css';

const app = (process.env.NEXT_PUBLIC_BINAHUB_APP_URL || 'https://app.binahub.id').replace(/\/$/, '');

export function ProgramRecommendationLanding({locale}: {locale: Locale}) {
  const en = locale === 'en';
  const start = en ? 'Get program recommendations' : 'Dapatkan rekomendasi program';
  const startLink = <ProgramJourneyLink href={app + '/discovery'} className={styles.primary}>
    {start}<ArrowRight size={17} aria-hidden="true"/>
  </ProgramJourneyLink>;
  const steps = en ? [
    ['Tell us about your team', 'Share your context, challenges, their impact and the outcomes you want to achieve.'],
    ['Explore your recommendation', 'Review the needs summary, development focus and relevant program options.'],
    ['Plan the next step together', 'Discuss scope, delivery requirements and investment with the BinaHub team.'],
  ] : [
    ['Ceritakan kebutuhan tim', 'Sampaikan konteks, tantangan, dampak, dan hasil yang ingin dicapai organisasi Anda.'],
    ['Pelajari rekomendasinya', 'Tinjau ringkasan kebutuhan, fokus pengembangan, dan pilihan program yang relevan.'],
    ['Bahas langkah berikutnya', 'Selaraskan ruang lingkup, kebutuhan pelaksanaan, dan investasi bersama tim BinaHub.'],
  ];
  const paths = en ? [
    ['Team / organization diagnosis', 'Map your team’s current conditions and development needs.', app + '/en/insight'],
    ['Individual Self Diagnostic', 'Explore your own development needs.', app + '/insight/individual/packages'],
    ['Program catalog', 'Browse BinaHub’s development solutions.', localizePath('/pricing', locale)],
    ['Inquiry / consultation', 'Discuss your questions with the BinaHub team.', localizePath('/contact', locale)],
  ] : [
    ['Diagnosis tim / organisasi', 'Petakan kondisi dan kebutuhan pengembangan tim.', app + '/insight'],
    ['Self Diagnostic individu', 'Kenali kebutuhan pengembangan diri Anda.', app + '/insight/individual/packages'],
    ['Katalog program', 'Jelajahi solusi pengembangan BinaHub.', localizePath('/pricing', locale)],
    ['Inquiry / konsultasi', 'Diskusikan pertanyaan Anda bersama tim BinaHub.', localizePath('/contact', locale)],
  ];
  const benefits = en ? [
    ['A shared understanding', 'Your challenges and intended outcomes, brought together in a readable summary.'],
    ['A clear development focus', 'Competencies connected to the needs you describe, with context for your team.'],
    ['Relevant program options', 'BinaHub catalog programs and the reasons to consider them.'],
  ] : [
    ['Pemahaman yang selaras', 'Tantangan dan sasaran organisasi dirangkum agar mudah dipahami bersama.'],
    ['Fokus pengembangan yang jelas', 'Kompetensi dihubungkan dengan kebutuhan yang Anda sampaikan dan konteks tim.'],
    ['Pilihan program yang relevan', 'Program dari katalog BinaHub beserta alasan untuk mempertimbangkannya.'],
  ];

  return <div className={palette.theme + ' ' + styles.page}>
    <section className={styles.hero} data-program-opening aria-labelledby="recommendation-heading">
      <div className={styles.container}>
          <div className={styles.heroIntro}>
            <h1 id="recommendation-heading">{en ? 'Find the right program for your team.' : 'Temukan program yang tepat untuk tim Anda.'}</h1>
            <p className={styles.lead}>{en
              ? 'Connect your organization’s challenges with a clear development focus and relevant BinaHub programs.'
              : 'Hubungkan tantangan organisasi Anda dengan fokus pengembangan dan program BinaHub yang relevan.'}</p>
            <div className={styles.actions}>
              {startLink}
              <a href="#recommendation-preview" className={styles.secondary}>
                {en ? 'See how it works' : 'Lihat contoh alurnya'}<ArrowDown size={16} aria-hidden="true"/>
              </a>
            </div>
            <p className={styles.note}>{en ? 'For teams and organizations. No account required.' : 'Untuk tim dan organisasi. Tanpa membuat akun.'}</p>
          </div>
        <ProgramRecommendationDemo locale={locale}/>
        <div className={styles.stageCaption}>
          <p>{en ? 'Your needs. A development focus. A direction to discuss.' : 'Kebutuhan Anda. Fokus pengembangan. Arah yang bisa dibahas bersama.'}</p>
          <Link href={localizePath('/pricing', locale)} className={styles.textLink}>{en ? 'Explore the catalog' : 'Jelajahi katalog'}<ArrowRight size={16} aria-hidden="true"/></Link>
        </div>
      </div>
    </section>

    <section className={styles.process} id="program-process" aria-labelledby="process-heading">
     <div className={styles.container}>
      <div className={styles.sectionIntro}>
        <h2 id="process-heading">{en ? 'A few steps. A clearer direction.' : 'Langkah sederhana. Arah yang lebih jelas.'}</h2>
        <p>{en ? 'Start with the situation your team faces. Use the recommendation to begin a focused conversation.' : 'Mulai dari kondisi yang dihadapi tim. Jadikan rekomendasi sebagai bahan awal untuk diskusi yang lebih terarah.'}</p>
      </div>
      <ol className={styles.steps} tabIndex={0} aria-label={en ? 'Three steps to a program recommendation' : 'Tiga langkah rekomendasi program'}>
        {steps.map(([title, text], index) => <li key={title} data-process-card>
          <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
          <h3>{title}</h3><p>{text}</p>
        </li>)}
      </ol>
     </div>
    </section>

    <section className={styles.reportSection} aria-labelledby="receive-heading">
      <div className={styles.container + ' ' + styles.reportGrid}>
        <div className={styles.reportCopy}>
          <h2 id="receive-heading">{en ? 'A recommendation you can bring to the table.' : 'Rekomendasi yang bisa dibawa ke meja diskusi.'}</h2>
          <p>{en ? 'Understand the connection between your needs, the competencies to develop and the programs to consider. Then decide the next step together.' : 'Pahami hubungan antara kebutuhan, kompetensi yang perlu dikembangkan, dan program yang dapat dipertimbangkan. Lalu tentukan langkah berikutnya bersama.'}</p>
          <ul className={styles.benefits}>
            {benefits.map(([title, text]) => <li key={title}><Check size={18} aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ul>
        </div>
        <div className={styles.reportVisual}>
          <div className={styles.reportDocument}>
            <FileText size={24} strokeWidth={1.5} aria-hidden="true"/>
            <h3>{en ? 'Your development direction' : 'Arah pengembangan organisasi'}</h3>
            <p className={styles.documentNote}>{en ? 'Illustrative report outline' : 'Ilustrasi susunan laporan'}</p>
            <dl>
              <div><dt>{en ? 'Needs and intended outcomes' : 'Kebutuhan dan hasil yang dituju'}</dt><dd>{en ? 'The context that shapes your recommendation.' : 'Konteks yang menjadi dasar rekomendasi Anda.'}</dd></div>
              <div><dt>{en ? 'Development focus' : 'Fokus pengembangan'}</dt><dd>{en ? 'Competencies connected to your challenges.' : 'Kompetensi yang terkait dengan tantangan tim.'}</dd></div>
              <div><dt>{en ? 'Relevant programs' : 'Program yang relevan'}</dt><dd>{en ? 'Options and reasons for considering them.' : 'Pilihan program dan alasan kesesuaiannya.'}</dd></div>
            </dl>
            <div className={styles.documentEnd}><MessagesSquare size={17} aria-hidden="true"/>{en ? 'Ready to discuss with your team' : 'Siap dibahas bersama tim Anda'}</div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.container + ' ' + styles.questions} aria-labelledby="questions-heading">
      <h2 id="questions-heading">{en ? 'Before you begin.' : 'Sebelum Anda memulai.'}</h2>
      <div className={styles.faqList}>
        <details><summary>{en ? 'How does this differ from team diagnosis?' : 'Apa bedanya dengan diagnosis tim?'}<ChevronDown size={18} aria-hidden="true"/></summary><p>{en ? 'Program recommendations start with the challenges and outcomes you describe to identify relevant program options. Team diagnosis is a separate path to map current team conditions and development needs.' : 'Rekomendasi program berangkat dari tantangan dan sasaran yang Anda sampaikan untuk menemukan pilihan program. Diagnosis tim adalah jalur terpisah untuk memetakan kondisi dan kebutuhan pengembangan tim.'}</p></details>
        <details><summary>{en ? 'Is the recommendation a final proposal?' : 'Apakah rekomendasi ini merupakan penawaran final?'}<ChevronDown size={18} aria-hidden="true"/></summary><p>{en ? 'It is an initial recommendation. The final scope, delivery requirements and investment are discussed with BinaHub.' : 'Rekomendasi ini merupakan arahan awal. Ruang lingkup, kebutuhan pelaksanaan, dan investasi akhir dibahas bersama BinaHub.'}</p></details>
        <details><summary>{en ? 'Do I need to create an account?' : 'Apakah saya perlu membuat akun?'}<ChevronDown size={18} aria-hidden="true"/></summary><p>{en ? 'No. You can begin the needs form directly. The form explains the information needed and how it is used before you submit.' : 'Tidak. Anda dapat langsung memulai pengisian kebutuhan. Informasi yang diperlukan dan penggunaannya dijelaskan di formulir sebelum Anda mengirim.'}</p></details>
      </div>
    </section>

    <section className={styles.container} aria-labelledby="start-heading">
      <div className={styles.closing} id="program-closing">
        <Image src="/program-recommendation/cta-glass-path.webp" alt="" fill sizes="(max-width: 767px) 100vw, 1200px" className={styles.closingArt} aria-hidden="true"/>
        <div><h2 id="start-heading">{en ? 'What does your team need next?' : 'Apa yang tim Anda butuhkan selanjutnya?'}</h2><p>{en ? 'Tell us where you are. Let’s find a direction to move forward.' : 'Ceritakan kebutuhan Anda. Temukan arah pengembangan yang bisa dimulai bersama.'}</p></div>
        {startLink}
      </div>
    </section>

    <section className={styles.container + ' ' + styles.otherPaths} aria-labelledby="other-paths-heading">
      <h2 id="other-paths-heading">{en ? 'A different starting point?' : 'Ingin memulai dari jalur lain?'}</h2>
      <div className={styles.paths}>{paths.map(([title, text, href]) => <ProgramJourneyLink key={title} href={href} className={styles.path}>
        <div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={18} aria-hidden="true"/>
      </ProgramJourneyLink>)}</div>
    </section>
  </div>;
}
