'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Laptop,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Database,
  ShieldCheck,
  Zap,
  Server,
  Layers,
  Search,
} from 'lucide-react'
import { softwareProjects, SoftwareItem } from '@/components/portfolio/software-data'
import { Button } from '@/components/ui/button'

const categories = [
  'All',
  'B2B & Wholesale',
  'Custom CRM & ERP',
  'Education & Events',
  'Automation & Integration',
  'Non-Profit & Community',
]

export function SoftwareView() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return softwareProjects.filter((item) => {
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

  const getWhatsAppLink = (softwareTitle: string) => {
    const text = `Hi Khushwinder, I saw your "${softwareTitle}" software and would like to discuss building a similar custom solution.`
    return `https://wa.me/919780032334?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="w-full">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-24">
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-10 size-[320px] rounded-full bg-cyan-500/10 blur-[130px] -z-10"
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
            <span className="text-primary font-semibold">Software</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md mb-4">
              <Laptop className="size-3.5" />
              <span>Custom Web Software &amp; SaaS Platforms</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              Software Engineered &amp; Built by{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Khushwinder
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              From high-volume B2B wholesale platforms and commercial audiovisual CRMs to automated event booking engines and real-time cloud data pipelines.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                render={
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20have%20a%20software%20project%20and%20would%20like%20to%20consult%20with%20you."
                  />
                }
                nativeButton={false}
                size="lg"
                className="group rounded-full bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Discuss a Software Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                render={<Link href="/apps" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-secondary/40 px-6 font-medium hover:bg-secondary"
              >
                Explore Apps
                <Sparkles className="size-4 text-emerald-400" />
              </Button>
            </div>
          </div>

          {/* Key capability highlights strip */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Database className="size-4 shrink-0 text-primary" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Relational SQL</span>
                <span className="text-[11px] text-muted-foreground">MySQL &amp; Redis</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Role Permissions</span>
                <span className="text-[11px] text-muted-foreground">RBAC &amp; JWT/Sanctum</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Zap className="size-4 shrink-0 text-amber-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">Async Webhooks</span>
                <span className="text-[11px] text-muted-foreground">Sub-second relays</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 p-3 backdrop-blur-sm">
              <Server className="size-4 shrink-0 text-cyan-400" />
              <div className="text-xs">
                <span className="block font-semibold text-foreground">DevOps &amp; Linux</span>
                <span className="text-[11px] text-muted-foreground">VPS &amp; Cloud Setup</span>
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
            {categories.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
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
              placeholder="Search software or tech..."
              className="w-full rounded-full border border-border/80 bg-card/60 pl-9 pr-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* ------------------ SOFTWARE SHOWCASE CARDS ------------------ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-border/80 bg-card/40 p-12 text-center">
            <Laptop className="mx-auto size-10 text-muted-foreground mb-3" />
            <p className="text-sm font-semibold text-foreground">No matching software found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="mt-4 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Header row */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    {item.metrics && (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-primary/80">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Core Features list */}
                  <div className="mt-5 space-y-2 border-t border-border/50 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                      Key Software Features:
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
                      Deployed for: <strong className="text-foreground">{item.clientName}</strong>
                    </span>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target={item.liveUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary hover:text-primary"
                      >
                        Live Reference
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                    <a
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                    >
                      <MessageCircle className="size-3.5" />
                      Discuss Solution
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ------------------ ARCHITECTURE CAPABILITIES ------------------ */}
      <section className="border-t border-border/60 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Full-Stack Architecture
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
              Engineered with Enterprise Standards
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Every software platform I architect is tailored for performance, security, and long-term scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <Database className="size-6 text-primary mb-3" />
              <h3 className="text-sm font-bold text-foreground">Database Architecture</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Normalized SQL schemas, multi-table relationship design, query indexing, and Redis in-memory caching.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <ShieldCheck className="size-6 text-emerald-400 mb-3" />
              <h3 className="text-sm font-bold text-foreground">Granular Access Control</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Role-based access (SuperAdmin, Staff, Customer, Guest), Sanctum/JWT token authentication, and brute-force defenses.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <Zap className="size-6 text-amber-400 mb-3" />
              <h3 className="text-sm font-bold text-foreground">API &amp; Webhooks</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Robust RESTful endpoints, asynchronous queue workers, dead-letter recovery, and third-party SaaS integrations.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl">
              <Layers className="size-6 text-cyan-400 mb-3" />
              <h3 className="text-sm font-bold text-foreground">Cloud &amp; DevOps</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Nginx web servers, PHP-FPM tuning, automated SSL certification, and Linux VPS optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ BOTTOM CTA ------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/50 bg-gradient-to-r from-primary/15 via-card to-accent/15 p-8 sm:p-12 text-center backdrop-blur-xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            Have a Custom Software Project in Mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Whether you need a bespoke B2B portal, a customized CRM, or a high-performance web platform, let&apos;s build an architecture that scales your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              render={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20would%20like%20to%20discuss%20a%20software%20project%20with%20you."
                />
              }
              nativeButton={false}
              size="lg"
              className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
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
              Send Project Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
