'use client'

import Link from 'next/link'
import {
  Package,
  Laptop,
  AppWindow,
  Terminal,
  Server,
  Database,
  Globe,
  Shield,
  Calculator,
  Box,
  ExternalLink,
} from 'lucide-react'
import { allProducts, ProductItem } from '@/components/portfolio/products-data'

function getProductIcon(iconType: ProductItem['iconType']) {
  switch (iconType) {
    case 'terminal':
      return Terminal
    case 'server':
      return Server
    case 'database':
      return Database
    case 'app':
      return AppWindow
    case 'cube':
      return Box
    case 'globe':
      return Globe
    case 'shield':
      return Shield
    case 'calculator':
      return Calculator
    default:
      return Package
  }
}

export function ProductsView() {
  const softwareList = allProducts.filter((p) => p.category === 'Software')
  const appsList = allProducts.filter((p) => p.category === 'Apps')

  const renderProductCard = (item: ProductItem) => {
    const Icon = getProductIcon(item.iconType)
    const isExternal = item.liveUrl.startsWith('http')
    const domain = item.liveUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '')

    return (
      <a
        key={item.id}
        href={item.liveUrl}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card/90 via-card/60 to-secondary/30 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 cursor-pointer"
      >
        {/* Top hairline light reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />

        <div>
          {/* Top Row: Icon + Badge + Arrow */}
          <div className="flex items-center justify-between gap-1.5 mb-2.5">
            <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25">
              <Icon className="size-4" />
            </div>

            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/60 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
              <ExternalLink className="size-3" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xs sm:text-sm font-bold text-foreground transition-colors group-hover:text-primary line-clamp-1">
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2 leading-snug">
            {item.subtitle}
          </p>
        </div>

        {/* Bottom Bar: Domain + Badge */}
        <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between gap-1 text-[10px] font-mono text-muted-foreground/80">
          <span className="truncate flex-1 min-w-0">{domain}</span>
          <span
            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold tracking-wider font-sans shrink-0 ${item.badgeColor}`}
          >
            {item.badge.replace(' Software', '').replace(' App', '').replace(' Platform', '')}
          </span>
        </div>
      </a>
    )
  }

  return (
    <div className="w-full py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Simple Page Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">Products</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {allProducts.length} Total Builds
          </span>
        </div>

        {/* ------------------ SECTION 1: SOFTWARE (5 IN ONE ROW) ------------------ */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Laptop className="size-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Software
              </h2>
              <span className="text-xs font-mono text-muted-foreground">
                ({softwareList.length})
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground hidden sm:inline">
              Click any card to launch landing page
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-3.5 xl:gap-4">
            {softwareList.map(renderProductCard)}
          </div>
        </section>

        {/* ------------------ SECTION 2: APPS (5 IN ONE ROW) ------------------ */}
        <section className="space-y-4 pt-4 border-t border-border/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <AppWindow className="size-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Apps
              </h2>
              <span className="text-xs font-mono text-muted-foreground">
                ({appsList.length})
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground hidden sm:inline">
              Click any card to launch landing page
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-3.5 xl:gap-4">
            {appsList.map(renderProductCard)}
          </div>
        </section>
      </div>
    </div>
  )
}
