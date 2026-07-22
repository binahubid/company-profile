import { SITE_URL, SITE_NAME } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  description: "Mendorong transformasi manusia dan organisasi untuk memanusiawikan masa depan.",
  sameAs: [
    "https://www.instagram.com/binahubid/",
    "https://www.tiktok.com/@binahubid",
    "https://www.linkedin.com/company/binahubid/",
    "https://www.youtube.com/@binahubid",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "admin@binahub.id",
    contactType: "customer service",
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description: "Mitra transformasi manusia dan organisasi — Executive Coaching, Leadership Development, Talent Assessment, dan People Development.",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: [
    "Executive Coaching",
    "Leadership Development",
    "Talent Assessment",
    "People Development",
    "Organizational Transformation",
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
