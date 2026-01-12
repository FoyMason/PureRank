import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/cta-section"
import { Star, TrendingUp, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Success Stories | PureRank Strategies Client Results",
  description:
    "See how Southern Utah businesses increased visibility, bookings, and revenue with PureRank's local SEO strategies. Real results from tourism, real estate, and vacation rental clients.",
  alternates: {
    canonical: "https://purerankstrategies.com/testimonials",
  },
  openGraph: {
    title: "Success Stories | Real Results from Southern Utah Businesses",
    description:
      "Discover how we helped St. George area businesses dominate Google and grow revenue through proven local SEO strategies.",
    url: "https://purerankstrategies.com/testimonials",
  },
}

export default function TestimonialsPage() {
  const featuredCaseStudies = [
    {
      business: "Custom Sands Motorsports",
      location: "St. George, UT",
      industry: "Automotive Services",
      challenge:
        "Long-standing Side by Side service and build company that wasn't showing up on Google Maps. Despite years of quality work and customer loyalty, potential new customers couldn't find them online when searching for UTV services.",
      solution:
        "Implemented comprehensive Google Business Profile setup and optimization, built service-specific landing pages for UTV builds and repairs, created local citation strategy, and established review generation system to showcase their expertise.",
      results: [
        "Ranked #1 for 'Side by Side service St George' in 90 days",
        "Now appears on Google Maps for all UTV-related searches",
        "52 five-star Google reviews in 6 months",
        "Phone inquiries increased by 285%",
      ],
      testimonial:
        "After years of being invisible online, PureRank got us on the map—literally. We're now the first business people see when they search for Side by Side service in St. George. Our phone hasn't stopped ringing with new customers who found us on Google.",
      author: "Troy Olaveson",
      role: "Owner",
      stats: {
        icon: TrendingUp,
        metric: "285%",
        label: "Inquiry Increase",
      },
      rating: 5,
    },
    {
      business: "Red Rock Vacation Rentals",
      location: "St. George, UT",
      industry: "Vacation Rentals",
      challenge:
        "High commission fees on Airbnb and VRBO cutting into profit margins. Wanted more direct bookings through their own website.",
      solution:
        "Built SEO-optimized property pages, implemented local schema markup, created content targeting 'vacation rentals near Zion' searches, and set up automated email campaigns.",
      results: [
        "Direct bookings increased to 65% of total",
        "Reduced platform fees by $42,000 annually",
        "Rank in top 3 for 15+ local search terms",
        "Average booking value up 28%",
      ],
      testimonial:
        "The ROI has been incredible. We're saving thousands in platform fees and getting higher quality guests who book directly. PureRank taught us how to own our market instead of renting space on someone else's platform.",
      author: "Sarah Martinez",
      role: "Property Manager",
      stats: {
        icon: DollarSign,
        metric: "$42K",
        label: "Annual Savings",
      },
      rating: 5,
    },
    {
      business: "Desert Vista Realty Group",
      location: "St. George, UT",
      industry: "Real Estate",
      challenge:
        "Getting lost among dozens of real estate agents in Washington County. Needed to establish authority for luxury homes and new construction.",
      solution:
        "Created neighborhood-specific content strategy, optimized for 'St George real estate' and luxury home searches, implemented video content for YouTube SEO, and built authority through local backlinks.",
      results: [
        "3x more qualified leads per month",
        "Ranked #1 for 'St George luxury homes'",
        "YouTube channel grew to 2,400+ subscribers",
        "Closed $2.8M in additional sales",
      ],
      testimonial:
        "I'm now the go-to agent for luxury properties in St. George. When people search for high-end homes, my name comes up first. The consistent lead flow has been game-changing for my business.",
      author: "David Chen",
      role: "Broker/Owner",
      stats: {
        icon: Users,
        metric: "3x",
        label: "More Leads",
      },
      rating: 5,
    },
  ]

  const additionalTestimonials = [
    {
      business: "Zion Adventure Company",
      location: "Springdale, UT",
      quote:
        "Our guided hiking tours were buried on page 3 of Google. Now we're consistently in the top 3 results for Zion hiking tours. Bookings are up 180% year over year.",
      author: "Jennifer White",
      industry: "Tourism",
      rating: 5,
    },
    {
      business: "Canyon View Properties",
      location: "Ivins, UT",
      quote:
        "We manage 15 vacation homes near Snow Canyon. PureRank helped us rank for every property individually. We cut our Airbnb dependency from 80% to 35% in one year.",
      author: "Robert Garcia",
      industry: "Vacation Rentals",
      rating: 5,
    },
    {
      business: "Southern Utah Home Builders",
      location: "Washington, UT",
      quote:
        "The lead quality has been exceptional. We're attracting serious buyers who are already researching custom homes in our target price range. Worth every penny.",
      author: "Amanda Peterson",
      industry: "Real Estate",
      rating: 5,
    },
    {
      business: "Sand Hollow Water Sports",
      location: "Hurricane, UT",
      quote:
        "PureRank positioned us as THE jet ski rental company at Sand Hollow. We rank above all competitors and our reviews are stellar. Couldn't be happier.",
      author: "Chris Thompson",
      industry: "Tourism",
      rating: 5,
    },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PureRank Strategies",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: featuredCaseStudies.length + additionalTestimonials.length,
              bestRating: "5",
              worstRating: "5",
            },
            review: [...featuredCaseStudies, ...additionalTestimonials].map((item) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: item.author,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "testimonial" in item ? item.testimonial : item.quote,
              publisher: {
                "@type": "Organization",
                name: "PureRank Strategies",
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-coral/10 text-coral border-coral/20">Real Results from Real Businesses</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Success Stories from Southern Utah Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              See how we've helped local tourism, vacation rental, and real estate businesses dominate Google and grow
              their revenue
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <Card key={index} className="rounded-2xl shadow-xl border-2 border-gray-100">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{study.business}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{study.location}</Badge>
                        <Badge className="bg-coral/10 text-coral">{study.industry}</Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-coral/10 flex flex-col items-center justify-center mb-2">
                        <study.stats.icon className="h-8 w-8 text-coral" />
                      </div>
                      <div className="text-3xl font-bold text-coral">{study.stats.metric}</div>
                      <div className="text-sm text-gray-600">{study.stats.label}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Results</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TrendingUp className="h-4 w-4 text-coral" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-l-4 border-coral">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-coral text-coral" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-900 leading-relaxed mb-4 italic">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-coral">{study.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{study.author}</p>
                        <p className="text-sm text-gray-600">
                          {study.role}, {study.business}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">More Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTestimonials.map((testimonial, index) => (
                <Card key={index} className="rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-coral text-coral" />
                      ))}
                    </div>
                    <blockquote className="text-gray-900 leading-relaxed mb-4 italic">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.business}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Collective Impact on Southern Utah Businesses
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-coral mb-2">150+</div>
                <p className="text-gray-600">Google Reviews Generated</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-coral mb-2">$2.4M+</div>
                <p className="text-gray-600">Revenue Increase for Clients</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-coral mb-2">85%</div>
                <p className="text-gray-600">Average Visibility Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-coral mb-2">32</div>
                <p className="text-gray-600">#1 Google Rankings Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to write your success story?"
        description="Join the Southern Utah businesses dominating their market with proven local SEO strategies"
        primaryText="Get Your Free Audit"
        primaryHref="/audit"
        secondaryText="View Our Services"
        secondaryHref="/services"
        variant="sandstone"
      />
    </main>
  )
}
