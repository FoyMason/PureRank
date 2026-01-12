import type { DefaultSeoProps } from "next-seo"

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: "PureRank Strategies | Local SEO & Digital Marketing for Southern Utah",
  titleTemplate: "%s | PureRank Strategies",
  description:
    "St. George's #1 digital marketing agency for tourism, vacation rentals, and real estate. Get found first on Google with local SEO, Google Business optimization, and proven marketing strategies for Southern Utah.",
  canonical: "https://purerankstrategies.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purerankstrategies.com",
    siteName: "PureRank Strategies",
    title: "PureRank Strategies | Southern Utah Marketing Experts",
    description:
      "Help your Southern Utah tourism or real estate business dominate Google. Expert local SEO and digital marketing in St. George, Hurricane, Ivins, and Washington County.",
    images: [
      {
        url: "https://purerankstrategies.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PureRank Strategies - Southern Utah Marketing Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@purerankstrategies",
    site: "@purerankstrategies",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Southern Utah marketing agency, St. George SEO, tourism marketing Southern Utah, real estate marketing St. George, vacation rental marketing Utah, Google Business optimization St. George, local SEO Southern Utah, digital marketing Zion, ATV rental marketing, property management marketing Utah",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=5",
    },
    {
      name: "theme-color",
      content: "#FF6B4A",
    },
    {
      name: "geo.region",
      content: "US-UT",
    },
    {
      name: "geo.placename",
      content: "St. George",
    },
    {
      name: "geo.position",
      content: "37.0965;-113.5684",
    },
    {
      name: "ICBM",
      content: "37.0965, -113.5684",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/icon.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/icon.png",
      sizes: "180x180",
    },
  ],
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PureRank Strategies",
  image: "https://purerankstrategies.com/icon.png",
  "@id": "https://purerankstrategies.com",
  url: "https://purerankstrategies.com",
  telephone: "(435) 225-5490",
  email: "info@purerankstrategies.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "St. George",
    addressRegion: "UT",
    postalCode: "84770",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.0965,
    longitude: -113.5684,
  },
  areaServed: [
    {
      "@type": "City",
      name: "St. George",
      "@id": "https://en.wikipedia.org/wiki/St._George,_Utah",
    },
    {
      "@type": "City",
      name: "Hurricane",
    },
    {
      "@type": "City",
      name: "Ivins",
    },
    {
      "@type": "City",
      name: "Washington",
    },
    {
      "@type": "City",
      name: "Santa Clara",
    },
  ],
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: ["https://facebook.com/purerankstrategies", "https://linkedin.com/company/purerankstrategies"],
  description:
    "Leading digital marketing agency in Southern Utah specializing in local SEO, Google Business optimization, and growth strategies for tourism, vacation rental, and real estate businesses.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO Services",
          description:
            "Complete local search optimization for Southern Utah businesses including Google Business Profile, local citations, and Maps ranking.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tourism Marketing",
          description:
            "Specialized marketing for ATV rentals, guided tours, adventure companies, and outdoor recreation businesses in Southern Utah.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Marketing",
          description:
            "Digital marketing and lead generation for real estate agents, brokers, and property management companies in Washington County.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vacation Rental Marketing",
          description:
            "Marketing strategies for Airbnb hosts, VRBO properties, and vacation rental managers near Zion National Park.",
        },
      },
    ],
  },
}
