/**
 * Global Site Configuration & Feature Flags
 *
 * Easily decide whether specific features and navigation menus are active.
 */
export const siteConfig = {
  navigation: {
    /**
     * Toggle to display or hide the "Products" menu item across the app (Header & Footer).
     *
     * - `true`: "Products" menu item is visible in desktop nav, mobile drawer, and footer.
     * - `false`: "Products" menu item is completely hidden.
     *
     * Can also be controlled via the `NEXT_PUBLIC_SHOW_PRODUCTS_MENU` environment variable:
     * e.g. NEXT_PUBLIC_SHOW_PRODUCTS_MENU=false
     *
     * Or pass `showProducts={true | false}` directly as a prop to `<Header />` or `<Footer />`.
     */
    showProductsMenu:
      process.env.NEXT_PUBLIC_SHOW_PRODUCTS_MENU !== undefined
        ? process.env.NEXT_PUBLIC_SHOW_PRODUCTS_MENU === 'true'
        : true,
  },
}

export type SiteConfig = typeof siteConfig
