import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, TrendingUp, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About PureRank Strategies | Southern Utah Local Visibility Experts",
  description: "We help local brands turn search visibility into real growth. Learn our mission and values.",
  openGraph: {
    title: "About PureRank Strategies | Southern Utah Local Visibility Experts",
    description: "We help local brands turn search visibility into real growth. Learn our mission and values.",
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: MapPin,
      title: "Local-first strategy",
      description: "We know Southern Utah. Every campaign is rooted in local data and community understanding.",
    },
    {
      icon: TrendingUp,
      title: "Honest reporting",
      description: "No fluff, no vanity metrics. We show you what matters: visibility, leads, and revenue.",
    },
    {
      icon: Users,
      title: "Sustainable growth",
      description: "We build for the long term, not quick wins that disappear in 6 months.",
    },
    {
      icon: Heart,
      title: "Neighbors, not numbers",
      description: "You're part of our community. We treat your business like our own.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sandstone/20 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              We're PureRank Strategies — your local growth partner in Southern Utah
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                PureRank was founded with a simple mission: <strong>To help local businesses get found first.</strong>
              </p>
              <p>
                From the red rock trails of St. George to the vacation homes of Zion, we've helped tourism, rental, and
                real estate brands turn search visibility into real-world growth.
              </p>
              <p>
                We know Southern Utah. We live it, hike it, and help it grow. Every strategy we build is rooted in local
                data, community trust, and long-term results — not quick hacks or empty clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-2xl shadow-lg border-2 border-copper/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-2xl bg-sandstone/30 flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <blockquote className="text-xl md:text-2xl font-medium mb-4 text-slate italic">
                      "Visibility is the currency of local business success. When people find you first, everything else
                      gets easier."
                    </blockquote>
                    <p className="text-lg text-muted-foreground">— Founder, PureRank Strategies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-sandstone/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">What drives everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-copper" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to see how visible your business really is?"
        primaryText="Get Your Free Visibility Audit"
        primaryHref="/audit"
      />
    </main>
  )
}
