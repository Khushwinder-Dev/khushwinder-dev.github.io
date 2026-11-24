'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export interface HeaderProps {
  /**
   * Optional toggle to show or hide the "Products" menu item.
   * If omitted, defaults to `siteConfig.navigation.showProductsMenu`.
   */
  showProducts?: boolean
}

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/portfolio#home' },
  { name: 'Projects', href: '/portfolio#projects' },
  { name: 'Products', href: '/products' },
  { name: 'Skills', href: '/portfolio#skills' },
  { name: 'Experience', href: '/portfolio#experience' },
  { name: 'Approach', href: '/portfolio#approach' },
  { name: 'Testimonials', href: '/portfolio#testimonials' },
  { name: 'Contact', href: '/portfolio#contact' },
]

export function Header({ showProducts }: HeaderProps = {}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const shouldShowProducts = showProducts ?? siteConfig.navigation.showProductsMenu

  const activeNavItems = navItems.filter((item) => {
    if (item.href === '/products' && !shouldShowProducts) {
      return false
    }
    return true
  })

  // Close mobile drawer when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/portfolio#home" className="flex items-center" aria-label="Go to Home">
          <span className="text-sm font-bold tracking-wide">KHUSHWINDER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {activeNavItems.map((item) => {
            const isCurrent =
              pathname === item.href ||
              (item.href === '/products' &&
                (pathname === '/products' || pathname === '/software' || pathname === '/apps'))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  isCurrent ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground"
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

            {activeNavItems.map((item) => {
              const isCurrent =
                pathname === item.href ||
                (item.href === '/products' &&
                  (pathname === '/products' || pathname === '/software' || pathname === '/apps'))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                    isCurrent
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
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
