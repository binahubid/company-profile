import { BUSINESS } from "@/lib/business";
import { ECOSYSTEM_DATA } from "@/data/ecosystem";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import { SERVER_CARD_PATH } from "@/lib/agent-discovery";

const overview = "BinaHub membantu individu, tim, dan organisasi menyelaraskan strategi, mengembangkan manusia, memperkuat budaya kerja, dan memanfaatkan teknologi agar transformasi berjalan lebih efektif dan memberikan hasil nyata.";

const pages = [
  ["Tentang BinaHub", "/id/about/", "Profil, visi, misi, nilai, dan pendekatan BinaHub."],
  ["Ekosistem BinaHub", "/id/ecosystem/", "Delapan layanan utama untuk kebutuhan transformasi."],
  ["Rekomendasi program", "/id/rekomendasi-program/", "Temukan program yang sesuai dengan kebutuhan pengembangan."],
  ["BinaInsights", "/id/insight/", "Diagnosis mandiri untuk mengenali kondisi sebelum memulai transformasi."],
  ["Company Profile (PDF)", "/company-profile-binahub.pdf", "Unduh profil resmi perusahaan."],
  ["Kontak", "/id/contact/", "Kontak, lokasi kantor, dan formulir pertanyaan."],
  ["Syarat & Ketentuan", "/id/terms/", "Ketentuan penggunaan situs."],
  ["Kebijakan Privasi", "/id/privacy/", "Informasi mengenai pengelolaan data pribadi."],
  ["BinaHub in English", "/en/", "English homepage."],
] as const;

export const agentIndex = [
  `# ${SITE_NAME}`,
  `> ${overview}`,
  "## Laman utama",
  `- [Beranda dalam Markdown](${SITE_URL}/index.md): Ringkasan perusahaan, layanan, dan kontak.`,
  ...pages.map(([label, path, description]) => `- [${label}](${SITE_URL}${path}): ${description}`),
  "## Integrasi agen",
  `- [MCP Server Card](${SITE_URL}${SERVER_CARD_PATH}): Penemuan layanan MCP publik BinaHub.`,
].join("\n\n") + "\n";

const serviceList = Object.values(ECOSYSTEM_DATA).map(
  ({ title, description }) => `- **${title}**: ${description}`,
).join("\n");

const contact = [
  BUSINESS.legalName,
  `Email: ${BUSINESS.email}`,
  `Telepon: ${BUSINESS.telephone}`,
  `Alamat: ${BUSINESS.streetAddress}, ${BUSINESS.district}, ${BUSINESS.locality} ${BUSINESS.postalCode}, Indonesia`,
  `Laman kontak: ${SITE_URL}/id/contact/`,
];

export const homepageMarkdown = [
  `# ${SITE_NAME}`,
  SITE_TAGLINE,
  overview,
  `## Delapan layanan utama\n\n${serviceList}`,
  `## Kontak\n\n${contact.map((line) => `- ${line}`).join("\n")}`,
  `## Tautan\n\n${pages.map(([label, path]) => `- [${label}](${SITE_URL}${path})`).join("\n")}`,
].join("\n\n") + "\n";

export const publicAgentTools = [
  {
    name: "get_binahub_overview",
    description: "Read the official BinaHub overview, eight services, and links to public pages.",
    text: homepageMarkdown,
  },
  {
    name: "get_binahub_contact",
    description: "Read BinaHub's public office address, email, phone number, and contact page URL.",
    text: contact.join("\n"),
  },
] as const;

export type PublicAgentTool = (typeof publicAgentTools)[number];
