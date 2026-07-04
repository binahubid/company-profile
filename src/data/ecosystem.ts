import type { Locale } from "@/i18n/config";

export const ECOSYSTEM_DATA = {
  insight: {
    id: "insight",
    title: "BinaInsights",
    iconType: "insights",
    subtitle: "Self Awareness & Insights Discovery",
    tagline: "Kesadaran dan Wawasan",
    summary: "Know Yourself & Surroundings (Diagnosis)",
    challenges: "Perubahan yang terjadi, kurang dipahami. Organisasi sering mengobati gejala tanpa mengetahui akar persoalan. Program pengembangan menjadi tidak tepat sasaran.",
    description: "Membantu individu, tim, dan organisasi memahami kondisi aktual, pola perilaku, motivasi, budaya, serta akar masalah, sebelum menentukan solusi.",
    benefits: "Meningkatkan kesadaran diri, menambah wawasan, memahami kekuatan, blind spot, dinamika tim, serta penyebab masalah. Membantu keputusan pengembangan menjadi lebih akurat, meningkatkan kolaborasi, membantu intervensi lebih tepat sasaran, sehingga respon terhadap perubahan lebih baik.",
    results: "Keputusan pengembangan menjadi lebih akurat, kolaborasi meningkat, intervensi lebih tepat sasaran. Respon terhadap perubahan lebih baik.",
    color: "#D9A441"
  },
  lab: {
    id: "lab",
    title: "BinaLab",
    iconType: "lab",
    subtitle: "Experiential Workshops",
    tagline: "Lokakarya Berbasis Pengalaman",
    summary: "Experience Learning (Experiential Development)",
    challenges: "Pelatihan sering hanya menambah pengetahuan tanpa mengubah perilaku. Pelatihan kadang membosankan.",
    description: "Workshop berbasis pengalaman yang membuat peserta belajar melalui simulasi, praktek, refleksi, dan diskusi sehingga pembelajaran lebih melekat.",
    benefits: "Mengembangkan mindset, keterampilan, dan perilaku melalui pengalaman langsung. Memperkuat insight, merubah pola pikir, meningkatkan keterlibatan peserta, sehingga pembelajaran lebih 'mengena'.",
    results: "Insight yang kuat, perubahan pola pikir, meningkatnya keterlibatan peserta, pembelajaran yang lebih mengena.",
    color: "#E27B38"
  },
  coach: {
    id: "coach",
    title: "BinaCoach",
    iconType: "coach",
    subtitle: "Executive & Performance Coaching",
    tagline: "Coaching para Pemimpin, Tim, Individu, dan Kinerja",
    summary: "Grow Yourself (Behavior Change)",
    challenges: "Setelah pelatihan peserta kembali ke kebiasaan lama karena tidak ada pendampingan.",
    description: "Pendampingan individual maupun tim melalui coaching untuk mempercepat perubahan perilaku, kepemimpinan, dan performa kerja.",
    benefits: "Mengembangkan ownership, kemampuan berpikir kritis, kemampuan mengambil keputusan, dan akuntabilitas pribadi. Membantu perilaku agar lebih konsisten, meningkatkan performa individu, dan kepemimpinan yang lebih efektif.",
    results: "Membantu perilaku agar lebih konsisten, meningkatkan performa individu, dan pemimpin yang lebih efektif.",
    color: "#4A90E2"
  },
  journey: {
    id: "journey",
    title: "BinaJourney",
    iconType: "journey",
    subtitle: "Transformational Learning Journey",
    tagline: "Lebih dari sekedar jalan-jalan. Namun membantu transformasi diri, tim, atau organisasi.",
    summary: "Expand Your Perspective (Transformative Experience)",
    challenges: "Banyak jalan-jalan hanya sekedar berwisata, tanpa memberikan perubahan pola pikir, wawasan, perilaku secara optimal.",
    description: "Program pembelajaran berbasis petualangan (traveling) yang menggabungkan refleksi, pengalaman, benchmarking, maupun spiritual journey untuk menghasilkan transformasi yang mendalam.",
    benefits: "Mengembangkan perspektif baru, tujuan, refleksi diri, serta wawasan melalui pengalaman langsung sambil rekreasi, agar terjadi perubahan cara berpikir, meningkatnya motivasi, komitmen terhadap perubahan, penguatan nilai organisasi.",
    results: "Bertambahnya wawasan, perubahan cara berpikir, meningkatnya motivasi dan komitmen terhadap perubahan, penguatan nilai organisasi, dan refreshing.",
    color: "#50B83C"
  },
  play: {
    id: "play",
    title: "BinaPlay",
    iconType: "play",
    subtitle: "Gamified Learning & Team Engagement",
    tagline: "Pembelajaran melalui Permainan dan Keterlibatan Tim",
    summary: "Engage Your Team (Engagement)",
    challenges: "Pembelajaran sering dianggap membosankan sehingga partisipasi rendah.",
    description: "Pembelajaran menggunakan pendekatan game dan gamification untuk meningkatkan engagement, kolaborasi, serta antusiasme belajar.",
    benefits: "Mengembangkan dan meningkatkan kolaborasi, komunikasi, penyelesaian masalah, kreativitas dan semangat.",
    results: "Engagement tinggi, kerja sama meningkat, pembelajaran menjadi menyenangkan namun tetap bermakna.",
    color: "#D35400"
  },
  academy: {
    id: "academy",
    title: "BinaAcademy",
    iconType: "academy",
    subtitle: "Structured Learning Programs",
    tagline: "Program Pembelajaran Terstruktur",
    summary: "Build Capability (Capability Development)",
    challenges: "Pelatihan sering berdiri sendiri tanpa peta pengembangan yang jelas.",
    description: "Program pengembangan kompetensi yang dirancang secara sistematis dan berkelanjutan sesuai kebutuhan organisasi.",
    benefits: "Menyusun peta pengembangan SDM, mengembangkan strategi, metode, dan program peningkatan kompetensi teknis, kepemimpinan, bisnis, dan soft skills secara terstruktur dan terukur.",
    results: "Peta pengembangan lebih jelas, kompetensi meningkat secara terukur, budaya belajar lebih terbentuk, kesiapan talent lebih matang.",
    color: "#8E44AD"
  },
  impact: {
    id: "impact",
    title: "BinaImpact",
    iconType: "impact",
    subtitle: "Measurement & ROI",
    tagline: "Pengukuran Dampak & Investasi",
    summary: "Measure Success (Impact & Sustainability)",
    challenges: "Banyak organisasi tidak mengetahui apakah investasi pelatihan benar-benar memberikan dampak.",
    description: "Mengukur efektivitas seluruh intervensi pembelajaran dan transformasi menggunakan indikator bisnis maupun perilaku.",
    benefits: "Memahami indikator keberhasilan, evaluasi pembelajaran, serta hubungan antara pembelajaran dengan kinerja bisnis. Sehingga dampak program dapat diukur, ROI pengembangan SDM lebih jelas, keputusan berbasiskan data.",
    results: "Dampak program dapat diukur, ROI pengembangan SDM lebih jelas, keputusan berbasiskan data.",
    color: "#16A085"
  },
  works: {
    id: "works",
    title: "BinaWorks",
    iconType: "works",
    subtitle: "Execution & Performance Acceleration",
    tagline: "Akselerasi Eksekusi dan Kinerja",
    summary: "Deliver Performance (Execution)",
    challenges: "Banyak strategi berhenti sebagai dokumen tanpa implementasi yang efektif.",
    description: "Mendampingi organisasi menerjemahkan strategi menjadi implementasi nyata melalui proyek perubahan, peningkatan kinerja, dan pendampingan eksekusi.",
    benefits: "Mengembangkan kemampuan eksekusi, kolaborasi lintas fungsi, perbaikan terus menerus, dan pemecahan masalah agar strategi dapat dieksekusi, produktivitas meningkat, dan target organisasi tercapai.",
    results: "Strategi tereksekusi, produktivitas meningkat, target organisasi tercapai.",
    color: "#2C3E50"
  }
}

export type EcosystemData = typeof ECOSYSTEM_DATA;

export const ECOSYSTEM_DATA_EN: EcosystemData = {
  insight: {
    id: "insight",
    title: "BinaInsights",
    iconType: "insights",
    subtitle: "Self Awareness & Insights Discovery",
    tagline: "Awareness and Insight",
    summary: "Know Yourself & Surroundings (Diagnosis)",
    challenges: "Changes that occur are not well understood. Organizations often treat symptoms without knowing the root cause. Development programs become misaligned.",
    description: "Helping individuals, teams, and organizations understand actual conditions, behavioral patterns, motivations, culture, and root causes before determining solutions.",
    benefits: "Increased self-awareness, broader insights, understanding strengths, blind spots, team dynamics, and root causes. Helping development decisions become more accurate, improving collaboration, helping more targeted interventions, so response to change is better.",
    results: "More accurate development decisions, improved collaboration, more targeted interventions. Better response to change.",
    color: "#D9A441"
  },
  lab: {
    id: "lab",
    title: "BinaLab",
    iconType: "lab",
    subtitle: "Experiential Workshops",
    tagline: "Experience-based workshops",
    summary: "Experience Learning (Experiential Development)",
    challenges: "Training often only adds knowledge without changing behavior. Training can be boring.",
    description: "Experience-based workshops that make participants learn through simulations, practice, reflection, and discussion so learning sticks better.",
    benefits: "Developing mindset, skills, and behavior through direct experience. Strengthening insight, changing mindsets, increasing participant engagement, so learning is more 'impactful'.",
    results: "Strong insights, mindset shifts, increased participant engagement, more impactful learning.",
    color: "#E27B38"
  },
  coach: {
    id: "coach",
    title: "BinaCoach",
    iconType: "coach",
    subtitle: "Executive & Performance Coaching",
    tagline: "Coaching for Leaders, Teams, Individuals, and Performance",
    summary: "Grow Yourself (Behavior Change)",
    challenges: "After training, participants return to old habits due to lack of coaching.",
    description: "Individual or team coaching to accelerate behavior change, leadership, and work performance.",
    benefits: "Developing ownership, critical thinking skills, decision-making ability, and personal accountability. Helping behavior become more consistent, improving individual performance, and more effective leadership.",
    results: "Helping behavior become more consistent, improving individual performance, and more effective leaders.",
    color: "#4A90E2"
  },
  journey: {
    id: "journey",
    title: "BinaJourney",
    iconType: "journey",
    subtitle: "Transformational Learning Journey",
    tagline: "More than just traveling. But helping personal, team, or organizational transformation.",
    summary: "Expand Your Perspective (Transformative Experience)",
    challenges: "Many trips are just tourism, without providing optimal changes in mindset, insights, or behavior.",
    description: "Adventure-based learning programs (traveling) that combine reflection, experience, benchmarking, and spiritual journeys to produce deep transformation.",
    benefits: "Developing new perspectives, purpose, self-reflection, and insights through direct experience while recreating, so changes in thinking occur, increased motivation, commitment to change, strengthening organizational values.",
    results: "Increased insights, changes in thinking, increased motivation and commitment to change, strengthening organizational values, and refreshing.",
    color: "#50B83C"
  },
  play: {
    id: "play",
    title: "BinaPlay",
    iconType: "play",
    subtitle: "Gamified Learning & Team Engagement",
    tagline: "Learning through Games and Team Engagement",
    summary: "Engage Your Team (Engagement)",
    challenges: "Learning is often considered boring, leading to low participation.",
    description: "Learning using game and gamification approaches to increase engagement, collaboration, and learning enthusiasm.",
    benefits: "Learning through games and team engagement. Developing and improving collaboration, communication, problem solving, creativity and spirit.",
    results: "High engagement, improved teamwork, learning becomes enjoyable yet meaningful.",
    color: "#D35400"
  },
  academy: {
    id: "academy",
    title: "BinaAcademy",
    iconType: "academy",
    subtitle: "Structured Learning Programs",
    tagline: "Structured learning programs",
    summary: "Build Capability (Capability Development)",
    challenges: "Training often stands alone without a clear competency development roadmap.",
    description: "Competency development programs designed systematically and sustainably according to organizational needs.",
    benefits: "Designing HR development roadmaps, developing strategies, methods, and programs for technical, leadership, business, and soft skills competency improvement in a structured and measurable way.",
    results: "Clearer development roadmap, measurable competency improvement, learning culture better established, talent readiness more mature.",
    color: "#8E44AD"
  },
  impact: {
    id: "impact",
    title: "BinaImpact",
    iconType: "impact",
    subtitle: "Measurement & ROI",
    tagline: "Impact and investment measurement",
    summary: "Measure Success (Impact & Sustainability)",
    challenges: "Many organizations do not know if training investment truly delivers impact.",
    description: "Measuring the effectiveness of all learning and transformation interventions using business and behavioral indicators.",
    benefits: "Understanding success indicators, learning evaluation, and the relationship between learning and business performance. So program impact can be measured, HR development ROI is clearer, and decisions are data-based.",
    results: "Program impact can be measured, HR development ROI is clearer, decisions are data-based.",
    color: "#16A085"
  },
  works: {
    id: "works",
    title: "BinaWorks",
    iconType: "works",
    subtitle: "Execution & Performance Acceleration",
    tagline: "Execution and performance acceleration",
    summary: "Deliver Performance (Execution)",
    challenges: "Many strategies stop as documents without effective implementation.",
    description: "Accompanying organizations to translate strategy into real implementation through change projects, performance improvement, and execution coaching.",
    benefits: "Developing execution capability, cross-functional collaboration, continuous improvement, and problem solving so strategies can be executed, productivity increases, and organizational targets are achieved.",
    results: "Strategies executed, productivity increased, organizational targets achieved.",
    color: "#2C3E50"
  }
}

export function getEcosystemData(locale: Locale) {
  return locale === "en" ? ECOSYSTEM_DATA_EN : ECOSYSTEM_DATA;
}
