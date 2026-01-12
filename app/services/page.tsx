import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Services | Local SEO & Inbound Growth Systems",
  description:
    "Plans that help your Southern Utah business get found, trusted, and booked. See Tourist Spark, Destination Pro, and Market Dominator.",
  alternates: {
    canonical: "https://purerankstrategies.com/services",
  },
  openGraph: {
    title: "Services | Local SEO & Inbound Growth Systems",
    description:
      "Plans that help your Southern Utah business get found, trusted, and booked. See Tourist Spark, Destination Pro, and Market Dominator.",
    url: "https://purerankstrategies.com/services",
  },
}

export default function ServicesPage() {
  const serviceTiers = [
    {
      name: "Tourist Spark",
      description: "Get Found",
      features: [
        "Google Business Profile optimization",
        "Local SEO setup & content plan",
        "1 optimized service page per month",
        "Review strategy setup",
        "Visibility dashboard",
      ],
      goal: "Be discovered on Google, Maps, and travel searches.",
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Destination Pro",
      description: "Get Found + Get Trusted",
      features: [
        "Everything in Tourist Spark",
        "4 custom SEO content pieces monthly",
        "Review & proof system setup",
        "Retargeting ad campaigns",
        "Email & nurture funnel",
        "Podcast/YouTube content repurposing",
      ],
      goal: "Build authority and dominate your local category.",
      cta: "Talk to Us",
      featured: true,
    },
    {
      name: "Market Dominator",
      description: "Get Found + Get Trusted + Get Booked",
      features: [
        "Everything in Destination Pro",
        "CRM automation & chat funnels",
        "Conversion-optimized website updates",
        "Referral & loyalty systems",
        "Quarterly strategy workshops",
      ],
      goal: "Predictable leads and bookings — every single month.",
      cta: "Talk to Us",
      featured: false,
    },
  ]

  const faqs = [
    {
      question: "How fast will we see results?",
      answer:
        "Most clients see initial visibility improvements within 30-60 days. Significant ranking improvements and lead generation typically occur within 90-120 days. SEO is a long-term strategy that compounds over time.",
    },
    {
      question: "What makes PureRank different from generic SEO?",
      answer:
        "We specialize exclusively in Southern Utah's tourism, vacation rental, and real estate industries. We understand the local market, seasonal trends, and specific search behaviors that drive bookings and sales in our region.",
    },
    {
      question: "Do you work outside Southern Utah?",
      answer:
        "Our core expertise is in the Southern Utah market, but we occasionally work with businesses in similar tourism-heavy regions. Contact us to discuss your specific location and needs.",
    },
    {
      question: "What do you need from us to start?",
      answer:
        "We'll need access to your Google Business Profile, website analytics (if available), and about 30 minutes for an onboarding call. From there, we handle the heavy lifting while keeping you updated on progress.",
    },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: serviceTiers.map((tier, index) => ({
              "@type": "Service",
              position: index + 1,
              name: tier.name,
              description: tier.goal,
              provider: {
                "@type": "Organization",
                name: "PureRank Strategies",
              },
              areaServed: {
                "@type": "State",
                name: "Utah",
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-600">
              SEO, visibility, and growth systems built for Southern Utah brands that want to own their market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceTiers.map((tier, index) => (
              <Card
                key={index}
                className={`rounded-2xl ${tier.featured ? "border-coral border-2 shadow-xl relative" : "shadow-lg"}`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-coral text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-gray-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-gray-900 mb-1">Goal:</p>
                    <p className="text-sm text-gray-600">{tier.goal}</p>
                  </div>
                  <Link href="/audit">
                    <Button className={`w-full mt-4 ${tier.featured ? "bg-coral hover:bg-coral/90" : ""}`}>
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Southern Utah Businesses</h2>
            <p className="text-lg text-gray-600">
              See how we've helped local businesses dominate Google and grow their revenue
            </p>
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button size="lg" className="bg-coral hover:bg-coral/90">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Not sure which plan fits?"
        primaryText="Book a Strategy Call"
        primaryHref="/audit"
        variant="sandstone"
      />
    </main>
  )
}
