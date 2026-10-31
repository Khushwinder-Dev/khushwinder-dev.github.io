'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  AppWindow,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Smartphone,
  Layers,
  Zap,
  ShoppingBag,
  Sliders,
  Search,
} from 'lucide-react'
import { appsProjects, AppItem } from '@/components/portfolio/apps-data'
import { Button } from '@/components/ui/button'

const appCategories = [
  'All',
  'Shopify Apps',
  'React & Next.js Apps',
  'Interactive & 3D',
  'E-Commerce Utility',
]

export function AppsView() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredApps = useMemo(() => {
    return appsProjects.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const matchesQuery =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, searchQuery])

  const getWhatsAppLink = (appTitle: string) => {
    const text = `Hi Khushwinder, I saw your "${appTitle}" app and would like to build a custom application for my brand.`
    return `https://wa.me/919780032334?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="w-full">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-24">
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[140px] -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-10 size-[320px] rounded-full bg-primary/15 blur-[130px] -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-muted-foreground">Products</span>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">Apps</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md mb-4">
              <AppWindow className="size-3.5" />
              <span>Web Applications &amp; Shopify Apps</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              Interactive Apps Built by{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-primary to-emerald-400 bg-clip-text text-transparent">
                Khushwinder
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              From real-time custom product engravers and fitness progression PWAs to 3D WebGL product viewers and dynamic multi-currency storefront engines.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                render={
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20have%20an%20app%20idea%20and%20would%20like%20to%20consult%20with%20you."
                  />
                }
                nativeButton={false}
                size="lg"
                className="group rounded-full bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Discuss an App Idea
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                render={<Link href="/software" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-secondary/40 px-6 font-medium hover:bg-secondary"
              >
                Explore Software
                <Sparkles className="size-4 text-primary" />
              </Button>
            </div>
          </div>

          {/* Key capability highlights strip */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <ShoppingBag className="size-4 shrink-0 text-emerald-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Shopify Apps</span>
                <span className="text-[11px] text-muted-foreground">App Bridge &amp; Blocks</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Smartphone className="size-4 shrink-0 text-primary" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Offline-Ready PWA</span>
                <span className="text-[11px] text-muted-foreground">iOS &amp; Android Friendly</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Layers className="size-4 shrink-0 text-amber-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">3D &amp; Canvas WebGL</span>
                <span className="text-[11px] text-muted-foreground">Three.js 60fps</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Zap className="size-4 shrink-0 text-cyan-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Micro-Bundle</span>
                <span className="text-[11px] text-muted-foreground">&lt;10KB Zero Lag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ FILTER & SEARCH BAR ------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {appCategories.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'border border-border/80 bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps or features..."
              className="w-full rounded-full border border-border/80 bg-card/60 pl-9 pr-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* ------------------ APPS SHOWCASE CARDS ------------------ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        {filteredApps.length === 0 ? (
          <div className="rounded-2xl border border-border/80 bg-card/40 p-12 text-center">
            <AppWindow className="mx-auto size-10 text-muted-foreground mb-3" />
            <p className="text-sm font-semibold text-foreground">No matching apps found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="mt-4 rounded-full bg-emerald-500/20 px-4 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-500/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredApps.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-card/90 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Header row */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                      {item.category}
                    </span>
                    {item.metrics && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-emerald-400/80">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Core Features list */}
                  <div className="mt-5 space-y-2 border-t border-border/50 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                      App Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {item.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border/70 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions row */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-4">
                  {item.clientName && (
                    <span className="text-xs text-muted-foreground">
                      Powering: <strong className="text-foreground">{item.clientName}</strong>
                    </span>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target={item.liveUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:border-emerald-500/50 hover:bg-secondary hover:text-emerald-400"
                      >
                        Live Demo
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                    <a
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-500"
                    >
                      <MessageCircle className="size-3.5" />
                      Discuss Custom App
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ------------------ APP DEVELOPMENT LIFECYCLE ------------------ */}
      <section className="border-t border-border/60 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              End-to-End Execution
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
              How I Build High-Impact Apps
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              From concept validation and UI wireframing to real-time integration and storefront deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <span className="text-xs font-mono font-bold text-emerald-400">01 / DISCOVERY</span>
              <h3 className="mt-2 text-sm font-bold text-foreground">UX &amp; State Scoping</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Mapping client workflows, state boundaries, mobile responsiveness requirements, and API constraints.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <span className="text-xs font-mono font-bold text-primary">02 / INTERACTION</span>
              <h3 className="mt-2 text-sm font-bold text-foreground">Fluid UI Engineering</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Building pixel-perfect components with Tailwind CSS, React, and Framer Motion for immediate touch responsiveness.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <span className="text-xs font-mono font-bold text-amber-400">03 / INTEGRATION</span>
              <h3 className="mt-2 text-sm font-bold text-foreground">Store &amp; Cloud Bridge</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Connecting Shopify App Bridge, WebGL models, payment gateways, and asynchronous backend worker queues.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <span className="text-xs font-mono font-bold text-cyan-400">04 / OPTIMIZATION</span>
              <h3 className="mt-2 text-sm font-bold text-foreground">Performance Auditing</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Tree-shaking scripts, minimizing bundle weight, lazy loading assets, and ensuring 95+ Google Lighthouse scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ BOTTOM CTA ------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/50 bg-gradient-to-r from-emerald-500/15 via-card to-primary/15 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            Ready to Build a Custom App or Shopify Tool?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Let&apos;s build an interactive app that delights your customers, streamlines operations, and dramatically lifts conversion rates.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              render={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20would%20like%20to%20build%20a%20custom%20app%20with%20you."
                />
              }
              nativeButton={false}
              size="lg"
              className="rounded-full bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20"
            >
              Consult on WhatsApp
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/portfolio#contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-secondary/40 px-6 font-semibold hover:bg-secondary"
            >
              Send App Requirements
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
