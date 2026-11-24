import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export interface FooterProps {
  /**
   * Optional toggle to show or hide the "Products" link in the footer.
   * If omitted, defaults to `siteConfig.navigation.showProductsMenu`.
   */
  showProducts?: boolean
}

export function Footer({ showProducts }: FooterProps = {}) {
  const shouldShowProducts = showProducts ?? siteConfig.navigation.showProductsMenu

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Khushwinder. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          {shouldShowProducts && (
            <Link href="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
          )}
          <Link href="/" className="transition-colors hover:text-foreground">
            Links
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
