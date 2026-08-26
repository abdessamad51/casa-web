export function LocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://casa-web.ma";

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Casa Web",
    description:
      "Agence digitale basée à Casablanca, Maroc. Développement web & mobile, SEO, hébergement VPS.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    telephone: "+212-600-000000",
    email: "contact@casa-web.ma",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "MAD 1,500 – 50,000+",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Digitaux",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement Web" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Application Mobile" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Référencement SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hébergement VPS" } },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/casa-web-ma",
      "https://www.instagram.com/casaweb.ma",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
