'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Search,
  X,
  Globe,
  Layers,
  ShoppingBag,
  Code2,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Lock,
} from 'lucide-react'
import { SectionLabel } from './section-label'
import { projects, Project, ProjectCategory } from './data'
import { AnimatedItem } from '@/components/ui/animated-section'

type FilterCategory = 'all' | ProjectCategory

interface CategoryTab {
  id: FilterCategory
  label: string
  count: number
  icon: typeof ShoppingBag
  color: string
}

function cleanDomain(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace(/^www\./, '')
  } catch {
    return url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]
  }
}

function ProjectThumbnail({ project }: { project: Project }) {
  const [sourceIndex, setSourceIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const domain = cleanDomain(project.url)

  // Multi-tier thumbnail sources:
  // 1. Local custom screenshot (if provided)
  // 2. High-speed 11ty CDN screenshot (CloudFront / Vercel backed)
  // 3. Microlink high-definition screenshot
  const sources = useMemo(() => {
    const list: string[] = []
    if (project.image) {
      list.push(project.image)
    }
    // High-performance 11ty CDN screenshot
    list.push(
      `https://v1.screenshot.11ty.dev/${encodeURIComponent(
        project.url
      )}/medium/`
    )
    // Microlink screenshot
    list.push(
      `https://api.microlink.io?url=${encodeURIComponent(
        project.url
      )}&screenshot=true&meta=false&embed=screenshot.url`
    )
    return list
  }, [project.image, project.url])

  const currentSrc = sources[sourceIndex]
  const isExhausted = sourceIndex >= sources.length

  const handleImgError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((prev) => prev + 1)
      setIsLoaded(false)
    } else {
      setSourceIndex(sources.length) // All sources exhausted, display branded UI mockup
    }
  }

  const faviconUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
    project.url
  )}&size=128`

  const getGradient = (category: ProjectCategory) => {
    switch (category) {
      case 'shopify':
        return 'from-emerald-950/60 via-card to-emerald-900/20'
      case 'wordpress':
        return 'from-sky-950/60 via-card to-sky-900/20'
      case 'laravel':
        return 'from-rose-950/60 via-card to-rose-900/20'
    }
  }

  const getAccentColor = (category: ProjectCategory) => {
    switch (category) {
      case 'shopify':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      case 'wordpress':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30'
      case 'laravel':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    }
  }

  return (
    <div className="relative size-full overflow-hidden bg-card">
      {/* ----------------- BASE LAYER: WEBSITE UI MOCKUP ----------------- */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-3.5 bg-gradient-to-br ${getGradient(
          project.category
        )}`}
      >
        {/* Mockup header */}
        <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-2">
          <div className="flex items-center gap-2">
            <div className="size-6 overflow-hidden rounded-full border border-border/60 bg-white/90 p-0.5 shadow-sm shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt=""
                className="size-full object-contain"
                onError={(e) => {
                  ;(e.target as HTMLElement).style.display = 'none'
                }}
              />
            </div>
            <span className="text-[11px] font-semibold text-foreground truncate max-w-[130px]">
              {project.title}
            </span>
          </div>

          <span
            className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${getAccentColor(
              project.category
            )}`}
          >
            {project.category}
          </span>
        </div>

        {/* Mockup visual body */}
        <div className="flex-1 flex flex-col justify-center py-2 space-y-1.5 opacity-80">
          <div className="h-2 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/30" />
          <div className="pt-2 flex items-center gap-2">
            <div className="h-5 w-16 rounded-md bg-primary/30 border border-primary/40" />
            <div className="h-5 w-12 rounded-md bg-secondary/50 border border-border/40" />
          </div>
        </div>

        {/* Mockup footer tag */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/30">
          <span className="truncate max-w-[180px]">{project.tag}</span>
          <span className="font-mono text-primary text-[9px]">live</span>
        </div>
      </div>

      {/* ----------------- TOP LAYER: LIVE SCREENSHOT IMAGE ----------------- */}
      {!isExhausted && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentSrc}
            alt={`${project.title} live preview`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={handleImgError}
            className={`absolute inset-0 size-full object-cover object-top transition-all duration-500 group-hover:scale-105 z-10 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      )}
    </div>
  )
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(24)

  // Compute category counts
  const categoryCounts = useMemo(() => {
    return {
      all: projects.length,
      shopify: projects.filter((p) => p.category === 'shopify').length,
      wordpress: projects.filter((p) => p.category === 'wordpress').length,
      laravel: projects.filter((p) => p.category === 'laravel').length,
    }
  }, [])

  const tabs: CategoryTab[] = [
    {
      id: 'all',
      label: 'All Projects',
      count: categoryCounts.all,
      icon: Layers,
      color: 'from-primary to-accent',
    },
    {
      id: 'shopify',
      label: 'Shopify Stores',
      count: categoryCounts.shopify,
      icon: ShoppingBag,
      color: 'from-emerald-500 to-green-600',
    },
    {
      id: 'wordpress',
      label: 'WordPress Sites',
      count: categoryCounts.wordpress,
      icon: Globe,
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 'laravel',
      label: 'Laravel Apps',
      count: categoryCounts.laravel,
      icon: Code2,
      color: 'from-rose-500 to-red-600',
    },
  ]

  // Filtered & sorted projects
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const list = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory

      if (!matchesCategory) return false

      if (!query) return true

      return (
        project.title.toLowerCase().includes(query) ||
        project.tag.toLowerCase().includes(query) ||
        project.url.toLowerCase().includes(query)
      )
    })

    // In 'All' view with no search query, prioritize featured projects so all 3 categories shine upfront
    if (selectedCategory === 'all' && !query) {
      return [...list].sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    }

    return list
  }, [selectedCategory, searchQuery])

  // Featured screenshot showcase (top projects with screenshot previews)
  const featuredWithImages = useMemo(() => {
    return projects.filter((p) => p.image)
  }, [])

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount)
  }, [filteredProjects, visibleCount])

  const hasMore = visibleCount < filteredProjects.length

  const handleCategoryChange = (cat: FilterCategory) => {
    setSelectedCategory(cat)
    setVisibleCount(24)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setVisibleCount(24)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setVisibleCount(24)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredProjects.length))
  }

  const handleShowAll = () => {
    setVisibleCount(filteredProjects.length)
  }

  const getCategoryBadge = (category: ProjectCategory) => {
    switch (category) {
      case 'shopify':
        return {
          label: 'Shopify',
          badgeClass:
            'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 group-hover:border-emerald-500/50',
          dotClass: 'bg-emerald-400',
        }
      case 'wordpress':
        return {
          label: 'WordPress',
          badgeClass:
            'bg-sky-500/10 text-sky-400 border-sky-500/25 group-hover:border-sky-500/50',
          dotClass: 'bg-sky-400',
        }
      case 'laravel':
        return {
          label: 'Laravel',
          badgeClass:
            'bg-rose-500/10 text-rose-400 border-rose-500/25 group-hover:border-rose-500/50',
          dotClass: 'bg-rose-400',
        }
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>Client Portfolio</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            115+ Real Client Projects Delivered
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A comprehensive track record of high-converting Shopify stores,
            enterprise WordPress sites, and custom full-stack Laravel platforms.
          </p>
        </div>

        {/* Total badge */}
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:self-auto">
          <Sparkles className="size-4 animate-pulse text-primary" />
          <span>117 Live Projects Documented</span>
        </div>
      </div>

      {/* Featured Showcase with High-Def Screenshots (When on 'all' and no search) */}
      {selectedCategory === 'all' && !searchQuery && (
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Featured Flagship Stores
            </h3>
            <span className="text-xs text-muted-foreground">
              4 Featured Showcases
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWithImages.map((project, i) => (
              <AnimatedItem key={project.title} delay={i * 0.08}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/40">
                    <Image
                      src={project.image!}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          Shopify
                        </span>
                        <span className="text-[11px] text-muted-foreground truncate">
                          {cleanDomain(project.url)}
                        </span>
                      </div>
                      <h4 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                        {project.tag}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary">
                      <span>Visit Live Store</span>
                      <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              </AnimatedItem>
            ))}
          </div>
        </div>
      )}

      {/* Filter Tabs & Search Controls */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-card/70 text-muted-foreground hover:bg-card hover:text-foreground border border-border/60'
                }`}
              >
                <Icon className="size-3.5" />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                    isActive
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search projects or domain..."
            className="w-full rounded-xl border border-border/80 bg-card/60 py-2 pl-9 pr-8 text-xs text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing <strong className="text-foreground">{displayedProjects.length}</strong> of{' '}
          <strong className="text-foreground">{filteredProjects.length}</strong> projects with live thumbnails
          {searchQuery && (
            <>
              {' '}
              matching &quot;
              <span className="text-primary font-medium">{searchQuery}</span>&quot;
            </>
          )}
        </span>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => handleCategoryChange('all')}
            className="text-primary hover:underline"
          >
            Clear category filter
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
          <Layers className="mx-auto size-10 text-muted-foreground/60" />
          <h3 className="mt-3 text-base font-semibold text-foreground">
            No projects found
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            No matching projects found for &quot;{searchQuery}&quot;. Try a different search term or category.
          </p>
          <button
            onClick={() => {
              handleClearSearch()
              setSelectedCategory('all')
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Projects Grid with Live Website Mockup & Screenshot Thumbnails */}
      {displayedProjects.length > 0 && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProjects.map((project, i) => {
            const badge = getCategoryBadge(project.category)
            const domain = cleanDomain(project.url)
            const faviconUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
              project.url
            )}&size=128`

            return (
              <AnimatedItem key={`${project.category}-${project.title}-${i}`} delay={Math.min(i * 0.03, 0.3)}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Browser Mockup Header & Thumbnail Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/40">
                    {/* Browser Address Bar with Favicon & Domain */}
                    <div className="absolute inset-x-0 top-0 z-20 flex h-7 items-center justify-between border-b border-border/40 bg-background/90 px-3 py-1 backdrop-blur-md">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-rose-500/80" />
                        <span className="size-2 rounded-full bg-amber-500/80" />
                        <span className="size-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1.5 truncate max-w-[150px] font-mono text-[10px] text-muted-foreground/90">
                        <Lock className="size-2.5 text-muted-foreground/60 shrink-0" />
                        <span className="truncate">{domain}</span>
                      </div>
                      <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Screenshot / Mockup Preview */}
                    <div className="absolute inset-x-0 top-7 bottom-0 overflow-hidden bg-card">
                      <ProjectThumbnail project={project} />
                    </div>

                    {/* Hover Visit Pill */}
                    <div className="absolute inset-0 z-20 flex items-end p-3 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-md transition-transform group-hover:scale-105">
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      {/* Top row: Category badge & Favicon */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-colors ${badge.badgeClass}`}
                        >
                          <span className={`size-1.5 rounded-full ${badge.dotClass}`} />
                          {badge.label}
                        </span>

                        <span className="flex size-6 items-center justify-center rounded-full text-muted-foreground transition-all group-hover:text-primary">
                          <ExternalLink className="size-3.5" />
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      {/* Tag / Category details */}
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                        {project.tag}
                      </p>
                    </div>

                    {/* Bottom row: Clean domain preview */}
                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1.5 truncate group-hover:text-foreground transition-colors">
                        <Globe className="size-3 text-muted-foreground/80 shrink-0" />
                        <span className="truncate">{domain}</span>
                      </span>

                      <span className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100 flex items-center gap-1 font-medium">
                        Live
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedItem>
            )
          })}
        </div>
      )}

      {/* Pagination & Load More Controls */}
      {hasMore && (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={handleLoadMore}
            className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/80 px-6 py-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary hover:bg-card hover:text-primary"
          >
            <span>Load More ({filteredProjects.length - visibleCount} remaining)</span>
            <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={handleShowAll}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            <span>View All ({filteredProjects.length})</span>
          </button>
        </div>
      )}

      {/* Footer Contact CTA banner */}
      <div className="mt-16 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-accent/10 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary">
              <Sparkles className="size-3" />
              Custom Web & Store Solutions
            </span>
            <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
              Have a Shopify, WordPress, or Laravel project in mind?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Let&apos;s build a high-performance website tailored to your brand goals.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
