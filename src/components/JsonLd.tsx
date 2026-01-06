export default function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BeautyBusiness",
    name: "Beauty Center Rosario",
    image: "https://aesthetic-center-front.vercel.app/og-image.jpg",
    "@id": "https://aesthetic-center-front.vercel.app",
    url: "https://aesthetic-center-front.vercel.app",
    telephone: "+5493413304892",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Castellanos 1556", // COMPLETAR con la real
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      postalCode: "2000",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.9468, // Aproximado Rosario
      longitude: -60.6393,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "90:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/cosmetologa.sonia",
      "https://wa.me/5493413304892",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
