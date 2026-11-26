import { BUSINESS } from "@/lib/business";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const organizationId = `${SITE_URL}/#organization`;
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      legalName: BUSINESS.legalName,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.webp`,
      description: SITE_DESCRIPTION,
      email: BUSINESS.email,
      telephone: BUSINESS.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${BUSINESS.streetAddress}, ${BUSINESS.district}`,
        addressLocality: BUSINESS.locality,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      sameAs: Object.values(BUSINESS.social),
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#transformation-services`,
      name: "Layanan Transformasi Individu, Tim, dan Organisasi",
      serviceType: "Konsultasi transformasi dan pengembangan kapabilitas",
      url: `${SITE_URL}/id/ecosystem/`,
      provider: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { "@id": organizationId },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
