import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  Check,
  Crown,
  Send,
  Star,
  Sparkles,
  MessageCircle,
  Clock,
  ShieldCheck,
  Zap,
  HelpCircle,
  Code,
  Layers,
} from 'lucide-react'
import { plans } from '@/components/portfolio/data'
import { Particles } from '@/components/ui/particles'
import { ContactButtons } from '@/components/portfolio/contact-buttons'

export const metadata: Metadata = {
  title: 'Freelance Plans & Pricing | Khushwinder',
  description:
    'Transparent freelance web development pricing for Shopify stores, WordPress websites, React and Laravel solutions by Khushwinder.',
  robots: {
    index: false,
    follow: false,
  },
}

const planIcons = [Send, Star, Crown]

const planDetails = [
  {
    delivery: '3 - 5 Days',
    idealFor: 'Small businesses, personal portfolios & starter store setup',
    features: [
      'Website/Store Setup & Configuration',
      'Premium Theme Customization',
      'Responsive Mobile & Tablet Design',
      'Basic On-Page SEO & Meta Tags',
      'Contact Forms & Social Links',
      '7 Days Post-Launch Support',
    ],
  },
  {
    delivery: '7 - 12 Days',
    idealFor: 'Growing brands, e-commerce stores & custom features',
    features: [
      'Everything in Basic Plan',
      'Custom Sections & Liquid/PHP Coding',
      'App, Plugin & Payment Gateway Integration',
      'Speed & Performance Optimization',
      'Analytics & Pixel Setup (GA4, Meta, TikTok)',
      'Product/Content Upload Assistance',
      '15 Days Dedicated Support',
    ],
  },
  {
    delivery: '14 - 21 Days',
    idealFor: 'Scaling businesses, high-volume stores & bespoke portals',
    features: [
      'Everything in Silver Plan',
      'Advanced Custom Functionality & APIs',
      'Full E-Commerce / Web App Architecture',
      'High-Speed Optimization (90+ PageSpeed target)',
      'Full Digital Marketing & Conversion Strategy',
      'Cross-Browser & Multi-Device QA Testing',
      'Priority Support (30 Days with SLA)',
    ],
  },
]

const faqs = [
  {
    q: 'How do payments work?',
    a: 'Work is typically split into milestones (usually 50% upfront to initiate development and 50% upon final review and satisfaction before going live). Safe and secure payment options are supported.',
  },
  {
    q: 'What if I need custom functionality not listed in a plan?',
    a: 'Every project is unique! If your requirements do not neatly fit into one of the packages, feel free to reach out directly on WhatsApp or Email for a tailored quote based on your exact specifications.',
  },
  {
    q: 'Do you help with domain, hosting, or Shopify setup?',
    a: 'Yes, full guidance and setup assistance for domain registration, DNS records, hosting servers, or Shopify/WordPress accounts is included with every plan.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'I specialize in Shopify (Liquid, Storefront API, custom themes), WordPress (Elementor, WooCommerce, custom themes/plugins), Next.js/React, Tailwind CSS, and Laravel PHP.',
  },
]

export default function PlansPage() {
  const getWhatsAppLink = (planName: string, price: string) => {
    const message = `Hi Khushwinder, I'm interested in your ${planName} plan (${price}). Can you please share more details?`
    return `https://wa.me/919780032334?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      <Particles />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Portfolio</span>
            </Link>

            <Link href="/portfolio" className="hidden sm:flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-xs font-bold text-primary-foreground">
                K
              </span>
              <span className="text-xs font-bold tracking-wide">KHUSHWINDER</span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50"
            >
              <Sparkles className="size-3.5 text-primary" />
              <span>Links</span>
            </Link>
            <a
              href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-emerald-500 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Hero Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span>Freelance Development Plans &amp; Pricing</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Transparent Pricing for High-Impact Websites
          </h1>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Direct, no-surprise packages for Shopify stores, WordPress portals, React apps, and custom development.
            Choose a package below or message me directly for a custom tailored scope.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              100% Satisfaction Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="size-4 text-amber-400" />
              Fast Turnaround &amp; Direct Communication
            </span>
            <span className="flex items-center gap-1.5">
              <Code className="size-4 text-sky-400" />
              Clean, Documented Code
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = planIcons[i]
            const details = planDetails[i]
            const isPopular = plan.popular

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 backdrop-blur-xl ${
                  isPopular
                    ? 'border-primary bg-card/90 shadow-2xl shadow-primary/15 ring-1 ring-primary/50'
                    : 'border-border/80 bg-card/50 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-md shadow-primary/30">
                    <Crown className="size-3" />
                    Most Popular Choice
                  </span>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Clock className="size-3 text-primary" />
                          <span>Est. {details.delivery}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                    {details.idealFor}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-y border-border/50 py-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        / project
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      One-time milestone billing • No hidden fees
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      What&apos;s Included:
                    </h3>
                    <ul className="space-y-2.5">
                      {details.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs">
                          <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-4 border-t border-border/40">
                  <a
                    href={getWhatsAppLink(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all ${
                      isPopular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hover:scale-[1.02]'
                        : 'border border-border/80 bg-card/80 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    <MessageCircle className="size-4" />
                    <span>Choose {plan.name} Plan</span>
                  </a>
                  <p className="mt-2 text-center text-[10px] text-muted-foreground">
                    Connects directly on WhatsApp with pre-filled scope
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Scope / Monthly Retainer Banner */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-gradient-to-r from-card/80 via-primary/5 to-card/80 p-8 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                <Layers className="size-3" />
                Custom Project or Monthly Retainer
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
                Need Ongoing Maintenance or a Bespoke Web App?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you need dedicated monthly developer support for your Shopify/WordPress store, full-stack Laravel development, or a custom API integration, I offer flexible hourly and monthly retainers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20need%20a%20custom%20quote%20or%20monthly%20retainer%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <MessageCircle className="size-4" />
                <span>Discuss Custom Scope</span>
              </a>
              <Link
                href="/portfolio#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-xs font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all"
              >
                <span>Send Project Brief</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <HelpCircle className="size-3.5 text-primary" />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/60 mt-20 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Khushwinder. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Links
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>

      <ContactButtons />
    </div>
  )
}

