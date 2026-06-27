import type { Locale } from "@/i18n/config";

export const ECOSYSTEM_DATA = {
  insight: {
    id: "insight",
    title: "BinaInsights",
    iconType: "insights",
    subtitle: "Self Awareness & Insights Discovery",
    tagline: "Kesadaran Diri dan Penggalian Makna",
    summary: "Know Yourself & Surroundings (Diagnosis)",
    challenges: "Perubahan yang terjadi, kurang dipahami. Organisasi sering mengobati gejala tanpa mengetahui akar persoalan. Program pengembangan menjadi tidak tepat sasaran.",
    description: "Membantu individu, tim, dan organisasi memahami kondisi aktual, pola perilaku, motivasi, budaya, serta akar masalah, sebelum menentukan solusi.",
    benefits: "Meningkatkan kesadaran diri, menambah wawasan, memahami kekuatan, blind spot, dinamika tim, serta penyebab masalah. Keputusan pengembangan menjadi lebih akurat, kolaborasi meningkat, intervensi lebih tepat sasaran. Respon terhadap perubahan lebih baik.",
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
    benefits: "Mengembangkan mindset, keterampilan, dan perilaku melalui pengalaman langsung. Insight yang kuat, perubahan pola pikir, meningkatnya keterlibatan peserta, pembelajaran lebih mudah diterapkan.",
    results: "Insight yang kuat, perubahan pola pikir, meningkatnya keterlibatan peserta, pembelajaran lebih mudah diterapkan.",
    color: "#E27B38"
  },
  coach: {
    id: "coach",
    title: "BinaCoach",
    iconType: "coach",
    subtitle: "Executive & Performance Coaching",
    tagline: "Coaching Kepemimpinan dan Kinerja",
    summary: "Grow Yourself (Behavior Change)",
    challenges: "Setelah pelatihan peserta kembali ke kebiasaan lama karena tidak ada pendampingan.",
    description: "Pendampingan individual maupun tim melalui coaching untuk mempercepat perubahan perilaku, kepemimpinan, dan performa kerja.",
    benefits: "Mengembangkan ownership, kemampuan berpikir kritis, kemampuan mengambil keputusan, dan akuntabilitas pribadi. Perubahan perilaku yang lebih konsisten, peningkatan performa individu, atau pemimpin yang lebih efektif.",
    results: "Perubahan perilaku yang lebih konsisten, peningkatan performa individu, atau pemimpin yang lebih efektif.",
    color: "#4A90E2"
  },
  journey: {
    id: "journey",
    title: "BinaJourney",
    iconType: "journey",
    subtitle: "Transformational Learning Journey",
    tagline: "Lebih dari Sekadar Perjalanan",
    summary: "Expand Your Perspective (Transformative Experience)",
    challenges: "Banyak perjalanan hanya menjadi wisata tanpa menghasilkan perubahan nyata.",
    description: "Program pembelajaran berbasis petualangan yang menggabungkan refleksi, pengalaman, benchmarking, maupun spiritual journey untuk menghasilkan transformasi yang mendalam.",
    benefits: "Mengembangkan perspektif baru, purpose, refleksi diri, serta wawasan strategis melalui pengalaman langsung. Perubahan cara berpikir, meningkatnya motivasi, komitmen terhadap perubahan, penguatan nilai organisasi.",
    results: "Perubahan cara berpikir, meningkatnya motivasi, komitmen terhadap perubahan, penguatan nilai organisasi.",
    color: "#50B83C"
  },
  play: {
    id: "play",
    title: "BinaPlay",
    iconType: "play",
    subtitle: "Gamified Learning & Team Engagement",
    tagline: "Pembelajaran Gamifikasi",
    summary: "Engage Your Team (Engagement)",
    challenges: "Pembelajaran sering dianggap membosankan sehingga partisipasi rendah.",
    description: "Pembelajaran menggunakan pendekatan game dan gamification untuk meningkatkan engagement, kolaborasi, serta antusiasme belajar.",
    benefits: "Mengembangkan kolaborasi, komunikasi, problem solving, kreativitas, dan semangat belajar. Engagement tinggi, kerja sama meningkat, pembelajaran menjadi menyenangkan namun tetap bermakna.",
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
    challenges: "Pelatihan sering berdiri sendiri tanpa roadmap pengembangan kompetensi.",
    description: "Program pengembangan kompetensi yang dirancang secara sistematis dan berkelanjutan sesuai kebutuhan organisasi.",
    benefits: "Mengembangkan kompetensi teknis, kepemimpinan, bisnis, dan soft skills secara bertahap. Kompetensi meningkat secara terukur, learning culture terbentuk, kesiapan talent meningkat.",
    results: "Kompetensi meningkat secara terukur, learning culture terbentuk, kesiapan talent meningkat.",
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
    benefits: "Memahami indikator keberhasilan, evaluasi pembelajaran, serta hubungan antara learning dan business performance. Dampak program dapat diukur, ROI pengembangan SDM lebih jelas, keputusan berbasis data.",
    results: "Dampak program dapat diukur, ROI pengembangan SDM lebih jelas, keputusan berbasis data.",
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
    description: "Mendampingi organisasi menerjemahkan strategi menjadi implementasi nyata melalui proyek perubahan, performance improvement, dan pendampingan eksekusi.",
    benefits: "Mengembangkan kemampuan eksekusi, kolaborasi lintas fungsi, continuous improvement, dan problem solving. Strategi terlaksana, produktivitas meningkat, target organisasi lebih cepat tercapai.",
    results: "Strategi terlaksana, produktivitas meningkat, target organisasi lebih cepat tercapai.",
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
    tagline: "Self-awareness and meaning discovery",
    summary: "Know Yourself & Surroundings (Diagnosis)",
    challenges: "Changes that occur are not well understood. Organizations often treat symptoms without knowing the root cause. Development programs become misaligned.",
    description: "Helping individuals, teams, and organizations understand actual conditions, behavioral patterns, motivations, culture, and root causes before determining solutions.",
    benefits: "Increased self-awareness, broader insights, understanding strengths, blind spots, team dynamics, and root causes. More accurate development decisions, improved collaboration, more targeted interventions. Better response to change.",
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
    benefits: "Developing mindset, skills, and behavior through direct experience. Strong insights, mindset shifts, increased participant engagement, learning easier to apply.",
    results: "Strong insights, mindset shifts, increased participant engagement, learning easier to apply.",
    color: "#E27B38"
  },
  coach: {
    id: "coach",
    title: "BinaCoach",
    iconType: "coach",
    subtitle: "Executive & Performance Coaching",
    tagline: "Leadership and performance coaching",
    summary: "Grow Yourself (Behavior Change)",
    challenges: "After training, participants return to old habits due to lack of coaching.",
    description: "Individual or team coaching to accelerate behavior change, leadership, and work performance.",
    benefits: "Developing ownership, critical thinking skills, decision-making ability, and personal accountability. More consistent behavior change, improved individual performance, or more effective leaders.",
    results: "More consistent behavior change, improved individual performance, or more effective leaders.",
    color: "#4A90E2"
  },
  journey: {
    id: "journey",
    title: "BinaJourney",
    iconType: "journey",
    subtitle: "Transformational Learning Journey",
    tagline: "More than a trip",
    summary: "Expand Your Perspective (Transformative Experience)",
    challenges: "Many journeys become mere tourism without producing real change.",
    description: "Adventure-based learning programs that combine reflection, experience, benchmarking, and spiritual journeys to produce deep transformation.",
    benefits: "Developing new perspectives, purpose, self-reflection, and strategic insights through direct experience. Changes in thinking, increased motivation, commitment to change, strengthening organizational values.",
    results: "Changes in thinking, increased motivation, commitment to change, strengthening organizational values.",
    color: "#50B83C"
  },
  play: {
    id: "play",
    title: "BinaPlay",
    iconType: "play",
    subtitle: "Gamified Learning & Team Engagement",
    tagline: "Gamified learning",
    summary: "Engage Your Team (Engagement)",
    challenges: "Learning is often considered boring, leading to low participation.",
    description: "Learning using game and gamification approaches to increase engagement, collaboration, and learning enthusiasm.",
    benefits: "Developing collaboration, communication, problem solving, creativity, and learning spirit. High engagement, improved teamwork, learning becomes enjoyable yet meaningful.",
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
    challenges: "Training often stands alone without a competency development roadmap.",
    description: "Competency development programs designed systematically and sustainably according to organizational needs.",
    benefits: "Developing technical, leadership, business, and soft skills progressively. Measurable competency improvement, learning culture established, improved talent readiness.",
    results: "Measurable competency improvement, learning culture established, improved talent readiness.",
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
    benefits: "Understanding success indicators, learning evaluation, and the relationship between learning and business performance. Program impact can be measured, clearer HR development ROI, data-based decisions.",
    results: "Program impact can be measured, clearer HR development ROI, data-based decisions.",
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
    benefits: "Developing execution capability, cross-functional collaboration, continuous improvement, and problem solving. Strategy implemented, productivity increased, organizational targets achieved faster.",
    results: "Strategy implemented, productivity increased, organizational targets achieved faster.",
    color: "#2C3E50"
  }
}

export function getEcosystemData(locale: Locale) {
  return locale === "en" ? ECOSYSTEM_DATA_EN : ECOSYSTEM_DATA;
}
