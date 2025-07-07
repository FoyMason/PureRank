"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Globe, Code, Database, Mail, FileText, Phone } from "lucide-react"

function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

function EmbeddedForm() {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement("script")
    script.src = "https://purerank.activehosted.com/f/embed.php?id=5"
    script.charset = "utf-8"
    script.async = true

    // Append to head or body
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://purerank.activehosted.com/f/embed.php?id=5"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return <div className="_form_5"></div>
}

export default function PureRankLanding() {
  const services = [
    {
      icon: Target,
      title: "Brand Identity",
      description:
        "Partner with our consulting team to refine your brand strategy with a unique voice, values, and visual identity. We align your brand with your target audience and differentiate you in your industry.",
    },
    {
      icon: Globe,
      title: "Online Digital Presence",
      description:
        "We can help you establish and strengthen your online presence. Our consulting team provides customized strategies to optimize your website, social media, and online advertising to reach and engage with your target audience effectively.",
    },
    {
      icon: Code,
      title: "Website Development",
      description:
        "Build a website that drives traffic and enhances user experience, ultimately boosting your business's brand recognition and overall success. We focus on end-user experience and analytics that help maximize your website's effectiveness.",
    },
    {
      icon: Database,
      title: "CRM Systems",
      description:
        "Implement or optimize your customer relationship management systems (CRM) to better understand your customer needs, preferences, and behaviors, increase retention rates, and ultimately drive business growth.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Maximize your CRM investment with strategic email marketing. We'll help you develop an email marketing strategy that utilizes your CRM system to create personalized campaigns, nurture leads, and drive customer conversions.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Develop a comprehensive content marketing strategy that effectively engages your target audience and drives business growth through consistent and authentic messaging across the right platforms for your brand.",
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-black" style={{ fontFamily: "League Spartan, sans-serif" }}>
              purerank
            </div>
            <div className="text-2xl font-light text-black" style={{ fontFamily: "League Spartan, sans-serif" }}>
              strategies
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
            <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1efe7]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#cb6ce6]/10 text-[#cb6ce6] border-[#cb6ce6]/20 hover:bg-[#cb6ce6]/20">
              Strategic Digital Growth
            </Badge>
            <h1
              className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight"
              style={{ fontFamily: "League Spartan, sans-serif" }}
            >
              Authentic Brands.
              <br />
              <span className="text-[#cb6ce6]">Unmatched Presence</span>
            </h1>
            <p
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              PureRank Strategies empowers businesses to dominate and maximize digital visibility through data-driven
              SEO, precise content strategies, and automation powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 bg-[#f1efe7]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold text-black mb-12"
              style={{ fontFamily: "League Spartan, sans-serif" }}
            >
              Built on Strategic Principles
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#cb6ce6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Strategic
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Every action is deliberate, backed by data and insight
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff914d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Authentic
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Real, lasting brand equity built on trust and transparency
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Confident
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Bold positioning with clarity, expertise, and authority
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#cb6ce6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Sustainable
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Long-term growth that establishes lasting credibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-black mb-6"
              style={{ fontFamily: "League Spartan, sans-serif" }}
            >
              Strategic Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "Quicksand, sans-serif" }}>
              We deliver sustainable growth by aligning search intent with strategic execution, ensuring brands outrank
              competitors and capture high-value audiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-[#cb6ce6]/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[#cb6ce6]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#cb6ce6]" />
                  </div>
                  <CardTitle
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "League Spartan, sans-serif" }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Quicksand, sans-serif" }}
                  >
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#f1efe7]/40 to-[#cb6ce6]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl lg:text-5xl font-bold text-black mb-6"
                style={{ fontFamily: "League Spartan, sans-serif" }}
              >
                Why Choose PureRank Strategies?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Brand-First Approach to SEO
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  We don't just chase rankings—we build trusted, long-term brand authority. Our strategies focus on
                  establishing brand credibility and longevity, ensuring continued visibility and audience trust.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#cb6ce6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      Data-driven strategies tailored to your unique brand identity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff914d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      Transparent approach with no black-box tactics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#cb6ce6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      Focus on sustainable, scalable growth over quick fixes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div
                    className="text-4xl font-bold text-[#cb6ce6] mb-2"
                    style={{ fontFamily: "League Spartan, sans-serif" }}
                  >
                    Mid to Large
                  </div>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
                    Sized businesses that prioritize brand integrity
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500 italic" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      "Success isn't just about rankings—it's about positioning brands for sustained visibility and
                      authority in their industry."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl lg:text-5xl font-bold text-black mb-6"
                style={{ fontFamily: "League Spartan, sans-serif" }}
              >
                Ready to Dominate Your Market?
              </h2>
              <p className="text-xl text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Let's discuss how we can build your brand's digital authority and drive sustainable growth.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#cb6ce6]/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-[#cb6ce6]" />
                    </div>
                    <div>
                      <p className="font-semibold text-black" style={{ fontFamily: "League Spartan, sans-serif" }}>
                        Phone
                      </p>
                      <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                        (435) 225-5490
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#ff914d]/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-[#ff914d]" />
                    </div>
                    <div>
                      <p className="font-semibold text-black" style={{ fontFamily: "League Spartan, sans-serif" }}>
                        Email
                      </p>
                      <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                        info@purerankstrategies.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-black" style={{ fontFamily: "League Spartan, sans-serif" }}>
                        Website
                      </p>
                      <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
                        purerankstrategies.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f1efe7]/30 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "League Spartan, sans-serif" }}>
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Contact us today to begin your digital transformation journey.
                </p>
                <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={() => setIsModalOpen(true)}>
                  Start Your Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "League Spartan, sans-serif" }}>
                purerank
              </div>
              <div className="text-2xl font-light text-white" style={{ fontFamily: "League Spartan, sans-serif" }}>
                strategies
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2" style={{ fontFamily: "Quicksand, sans-serif" }}>
                © 2025 PureRank Strategies. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Authentic Brands. Unmatched Presence.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "League Spartan, sans-serif" }}>
            Start Your Strategy Session
          </h3>
          <p className="text-gray-600" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Let's discuss how we can build your brand's digital authority and drive sustainable growth.
          </p>
        </div>
        <EmbeddedForm />
      </Modal>
    </div>
  )
}
