import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description?: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  variant?: "default" | "sandstone"
}

export function CTASection({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  return (
    <section className={`py-20 ${variant === "sandstone" ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref}>
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8">
                {primaryText}
              </Button>
            </Link>
            {secondaryText && secondaryHref && (
              <Link href={secondaryHref}>
                <Button size="lg" variant="outline" className="px-8 border-gray-300 hover:bg-gray-50 bg-transparent">
                  {secondaryText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
