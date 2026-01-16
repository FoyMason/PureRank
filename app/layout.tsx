import type React from "react"
import type { Metadata } from "next"
import { League_Spartan, Quicksand } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactBar } from "@/components/contact-bar"
import Script from "next/script"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PureRank Strategies | Local SEO & Digital Marketing for Southern Utah Businesses",
  description:
    "St. George's #1 digital marketing agency for tourism, vacation rentals, and real estate. Get found first on Google with local SEO, Google Business optimization, and proven marketing strategies for Southern Utah.",
  keywords: [
    "Southern Utah marketing agency",
    "St. George SEO",
    "tourism marketing Southern Utah",
    "real estate marketing St. George",
    "vacation rental marketing Utah",
    "Google Business optimization St. George",
    "local SEO Southern Utah",
    "digital marketing Zion",
    "ATV rental marketing",
    "property management marketing Utah",
  ].join(", "),
  openGraph: {
    title: "PureRank Strategies | Southern Utah's Local Marketing Experts",
    description:
      "Help your Southern Utah tourism or real estate business dominate Google. Expert local SEO and digital marketing in St. George, Hurricane, Ivins, and Washington County.",
    url: "https://purerankstrategies.com",
    siteName: "PureRank Strategies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureRank Strategies | Southern Utah Marketing Agency",
    description: "Local SEO & Digital Marketing for Tourism and Real Estate in Southern Utah",
  },
  alternates: {
    canonical: "https://purerankstrategies.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKQ6T8L5');`,
          }}
        />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZEW2YQQ98W" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZEW2YQQ98W');
            `,
          }}
        />

        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17869094025');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "47",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://purerankstrategies.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://purerankstrategies.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Testimonials",
                  item: "https://purerankstrategies.com/testimonials",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${quicksand.variable} ${leagueSpartan.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKQ6T8L5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <ContactBar />

        {/* Lucky Orange Analytics */}
        <Script src="https://tools.luckyorange.com/core/lo.js?site-id=95e7cbdf" strategy="afterInteractive" />

        <Script id="hs-script-loader" src="//js-na2.hs-scripts.com/244684545.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
