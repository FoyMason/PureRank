import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, TrendingUp, Star, MapPin, Users, DollarSign, Award, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "PureRank Strategies | #1 Marketing Agency for Southern Utah",
  description:
    "St. George's premier digital marketing agency. We help Southern Utah tourism companies, vacation rentals, and real estate businesses dominate Google, attract more customers, and grow revenue with proven local SEO strategies.",
  alternates: {
    canonical: "https://purerankstrategies.com",
  },
  openGraph: {
    title: "Southern Utah's Leading Marketing Agency | Tourism & Real Estate SEO Experts",
    description:
      "Get found first on Google. Expert local SEO and digital marketing for St. George, Hurricane, Ivins, and Washington County businesses.",
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url('/southern-utah-red-rock-desert-landscape-zion-canyo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-coral/10 text-coral border-coral/20 hover:bg-coral/20">
              St. George, Utah • Serving Southern Utah
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Southern Utah's #1 Marketing Agency for Tourism & Real Estate Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              <strong>Get Found First on Google.</strong> We help Southern Utah tourism companies, vacation rentals, and
              real estate businesses dominate local search and attract more customers.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert local SEO, Google Business optimization, and digital marketing for St. George, Hurricane, Ivins,
              Washington, and all of Washington County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white text-base px-8">
                  Get Free Marketing Audit
                </Button>
              </Link>
              <Link href="/#system">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="h-5 w-5 text-coral fill-coral" />
              <span className="text-sm font-medium">Southern Utah Expert</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="h-5 w-5 text-coral fill-coral" />
              <span className="text-sm font-medium">Tourism Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Target className="h-5 w-5 text-coral fill-coral" />
              <span className="text-sm font-medium">Real Estate Focused</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-coral fill-coral" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Helping Southern Utah businesses get found on Google since day one
          </p>
        </div>
      </section>

      {/* Local SEO Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Southern Utah Businesses Choose PureRank Strategies
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique marketing challenges of tourism and real estate in Southern Utah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">Local Market Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We know St. George, Zion, Sand Hollow, and the entire Southern Utah tourism market. Your competition
                  doesn't stand a chance.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">Google Maps Domination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Show up first when tourists search for "ATV rentals near Zion" or "vacation homes St. George" on
                  Google Maps.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">More Bookings & Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Turn your website into a 24/7 lead generation machine. Get more direct bookings and qualified real
                  estate leads.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The System */}
      <section id="system" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The PureRank Destination Growth System™</h2>
            <p className="text-xl text-gray-600">
              Our proven 3-step process for dominating local search in Southern Utah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">Step 1: Get Found</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Local SEO & Google Business Optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your Southern Utah business shows up first when people search for your services in St. George, near
                  Zion, or anywhere in Washington County.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Google Business Profile optimization</li>
                  <li>✓ Local keyword targeting (St. George, Hurricane, etc.)</li>
                  <li>✓ Google Maps ranking improvements</li>
                  <li>✓ Local citation building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">Step 2: Get Trusted</CardTitle>
                <CardDescription className="text-base text-gray-600">Authority & Reputation Building</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Become the most trusted name in your category. Reviews, content, and social proof that converts
                  visitors into customers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 5-star review generation system</li>
                  <li>✓ Expert content marketing</li>
                  <li>✓ Social media management</li>
                  <li>✓ Brand authority building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl">Step 3: Get Booked</CardTitle>
                <CardDescription className="text-base text-gray-600">Conversion & Lead Generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Turn website visitors into paying customers. Automated booking systems and lead funnels that work
                  24/7.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ High-converting website optimization</li>
                  <li>✓ Direct booking systems</li>
                  <li>✓ Automated email & SMS follow-up</li>
                  <li>✓ CRM integration & tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Marketing for Southern Utah's Top Industries
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in marketing for tourism, vacation rentals, and real estate in Washington County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-coral" />
                </div>
                <CardTitle className="text-xl">Tourism & Adventure Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dominate search results for ATV rentals, guided tours, adventure experiences near Zion, Sand Hollow,
                  and Snow Canyon.
                </p>
                <p className="text-sm text-gray-500">
                  Perfect for: ATV rentals, jeep tours, hiking guides, outdoor gear shops, adventure companies
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-coral" />
                </div>
                <CardTitle className="text-xl">Vacation Rental Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get more direct bookings from Airbnb, VRBO, and Google. Reduce commissions and increase profit margins
                  on your Southern Utah properties.
                </p>
                <p className="text-sm text-gray-500">
                  Perfect for: Airbnb hosts, VRBO owners, property managers, boutique hotels, vacation home rentals
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-7 w-7 text-coral" />
                </div>
                <CardTitle className="text-xl">Real Estate Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Generate qualified leads for St. George real estate agents, luxury home builders, and property
                  managers in Washington County.
                </p>
                <p className="text-sm text-gray-500">
                  Perfect for: Real estate agents, brokers, luxury builders, property managers, home builders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Keywords Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving All of Southern Utah</h2>
            <p className="text-lg text-gray-600 mb-8">
              We help businesses rank on Google in St. George, Hurricane, Ivins, Washington, Santa Clara, and throughout
              Washington County
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "St. George SEO",
                "Hurricane Marketing",
                "Ivins Digital Marketing",
                "Washington County SEO",
                "Zion Area Marketing",
                "Sand Hollow SEO",
                "Snow Canyon Marketing",
                "Santa Clara SEO",
                "Leeds Marketing",
                "LaVerkin SEO",
              ].map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-sm">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-coral/20 bg-gradient-to-br from-coral/5 to-white shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="mb-4">
                  <Badge className="bg-coral/10 text-coral">Tourism Success Story</Badge>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-gray-900 leading-relaxed">
                  "We went from invisible on Google Maps to fully booked every weekend. PureRank helped us dominate 'ATV
                  rentals near Zion' and our revenue tripled."
                </blockquote>
                <p className="text-lg text-gray-600 mb-6">— Sand Hollow ATV Rentals, St. George, UT</p>
                <Link href="/services#case-studies">
                  <Button variant="outline" className="border-coral text-coral hover:bg-coral/10 bg-transparent">
                    View More Success Stories
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTASection
        title="Ready to dominate Google in Southern Utah?"
        description="Get a free marketing audit and discover exactly how to get found first by customers searching for your services in St. George, Hurricane, Ivins, and Washington County."
        primaryText="Get Free Marketing Audit"
        primaryHref="/audit"
        variant="sandstone"
      />
    </main>
  )
}
