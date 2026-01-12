import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Why PureRank | Built for Southern Utah Growth",
  description: "Local-first strategy, authority content, and full visibility systems designed for regional dominance.",
  openGraph: {
    title: "Why PureRank | Built for Southern Utah Growth",
    description:
      "Local-first strategy, authority content, and full visibility systems designed for regional dominance.",
  },
}

export default function WhyPage() {
  const comparisons = [
    {
      focus: "Local-first strategy",
      benefit: "You rank in your city, not lost in national noise.",
    },
    {
      focus: "Authority content",
      benefit: "Locals see you as the trusted expert.",
    },
    {
      focus: "Full visibility systems",
      benefit: "Google, Maps, YouTube work together.",
    },
    {
      focus: "Data + automation",
      benefit: "Your leads don't slip through the cracks.",
    },
    {
      focus: "Human partnership",
      benefit: "You're never just a client — you're a neighbor.",
    },
  ]

  const testimonials = [
    {
      quote: "PureRank helped us dominate Google for our niche in 90 days.",
      business: "Adventure Tours Company",
    },
    {
      quote: "We're now booking direct through our website instead of paying Airbnb fees.",
      business: "Vacation Rental Manager",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sandstone/20 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why PureRank? <span className="text-copper">Because local visibility isn't one-size-fits-all.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Most agencies sell templates. We build systems. The PureRank Destination Growth System™ is built
              specifically for Southern Utah's tourism, real estate, and hospitality industries — using data, local
              search trends, and proven frameworks to grow real-world results.
            </p>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Focus On → What It Means for You
            </h2>

            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <Card key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="h-5 w-5 text-copper" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.focus}</h3>
                        <p className="text-muted-foreground">{item.benefit}</p>
                      </div>
                      <Check className="h-6 w-6 text-sage flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Block */}
      <section className="py-20 bg-sandstone/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="rounded-2xl shadow-lg bg-white">
                  <CardContent className="p-8">
                    <blockquote className="text-xl font-medium mb-4 text-slate italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-muted-foreground">— {testimonial.business}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="bg-copper hover:bg-copper/90">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="You're not just buying marketing. You're investing in becoming the most trusted local brand in your market."
        primaryText="Start Your Visibility Audit"
        primaryHref="/audit"
      />
    </main>
  )
}
