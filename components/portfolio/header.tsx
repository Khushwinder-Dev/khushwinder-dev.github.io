'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Laptop,
  AppWindow,
  Package,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SubItem {
  name: string
  href: string
  subtitle: string
  icon: typeof Laptop
  badge: string
  badgeColor: string
}

interface NavItem {
  name: string
  href: string
  isDropdown?: boolean
  children?: SubItem[]
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/portfolio#home' },
  { name: 'Projects', href: '/portfolio#projects' },
  {
    name: 'Products',
    href: '/software',
    isDropdown: true,
    children: [
      {
        name: 'Software',
        href: '/software',
        subtitle: 'Custom SaaS, CRMs & enterprise web platforms',
        icon: Laptop,
        badge: 'Enterprise',
        badgeColor: 'bg-primary/10 text-primary border-primary/30',
      },
      {
        name: 'Apps',
        href: '/apps',
        subtitle: 'Web applications, interactive tools & Shopify apps',
        icon: AppWindow,
        badge: 'Interactive',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      },
    ],
  },
  { name: 'Skills', href: '/portfolio#skills' },
  { name: 'Experience', href: '/portfolio#experience' },
  { name: 'Approach', href: '/portfolio#approach' },
  { name: 'Testimonials', href: '/portfolio#testimonials' },
  { name: 'Contact', href: '/portfolio#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menus when route changes
  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/portfolio#home" className="flex items-center gap-2" aria-label="Go to Home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-primary-foreground">
            K
          </span>
          <span className="text-sm font-bold tracking-wide">KHUSHWINDER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            if (item.isDropdown && item.children) {
              const isProductsActive = pathname === '/software' || pathname === '/apps'
              return (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                    className={`inline-flex items-center gap-1.5 py-1 text-sm font-medium transition-colors hover:text-foreground ${
                      isProductsActive || dropdownOpen
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-72">
                      <div className="rounded-2xl border border-border/80 bg-card/95 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Products &amp; Builds
                        </div>
                        <div className="space-y-1">
                          {item.children.map((sub) => {
                            const Icon = sub.icon
                            const isCurrent = pathname === sub.href
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setDropdownOpen(false)}
                                className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                                  isCurrent
                                    ? 'bg-primary/15 border border-primary/30'
                                    : 'hover:bg-secondary/70 border border-transparent'
                                }`}
                              >
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                  <Icon className="size-4" />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {sub.name}
                                    </span>
                                    <span
                                      className={`rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase ${sub.badgeColor}`}
                                    >
                                      {sub.badge}
                                    </span>
                                  </div>
                                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug line-clamp-2">
                                    {sub.subtitle}
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50"
          >
            <Sparkles className="size-3.5 text-primary" />
            Links
          </Link>
          <Button
            render={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              />
            }
            nativeButton={false}
            className="hidden rounded-full bg-primary px-5 font-medium text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            Discuss Your Project
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              <Sparkles className="size-4" />
              All Links &amp; Profiles
            </Link>

            {navItems.map((item) => {
              if (item.isDropdown && item.children) {
                return (
                  <div key={item.name} className="my-1 rounded-xl border border-border/60 bg-secondary/30 p-2">
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-2 py-1.5 text-sm font-semibold text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Package className="size-4 text-primary" />
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${
                          mobileDropdownOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="mt-1 flex flex-col gap-1 pl-2">
                        {item.children.map((sub) => {
                          const Icon = sub.icon
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2.5 rounded-lg p-2 text-sm text-foreground hover:bg-secondary transition-colors"
                            >
                              <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <Icon className="size-3.5" />
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-semibold text-xs text-foreground">{sub.name}</div>
                                <div className="text-[11px] text-muted-foreground">{sub.subtitle}</div>
                              </div>
                              <span
                                className={`rounded-full border px-1.5 py-0.2 text-[9px] font-semibold ${sub.badgeColor}`}
                              >
                                {sub.badge}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.name}
                </a>
              )
            })}

            <Button
              render={<a href="/portfolio#contact" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 rounded-full bg-primary font-medium text-primary-foreground"
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
