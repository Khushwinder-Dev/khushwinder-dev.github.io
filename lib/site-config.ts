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
     * - `false`: "Products" menu item is completely hidden from navbar, mobile menu & footer.
     * - `true`:  "Products" menu item is visible.
     */
    showProductsMenu: false,
  },
}

/**
 * Direct boolean shortcut:
 * Change to `true` whenever you want to display the Products menu.
 */
export const SHOW_PRODUCTS_MENU = siteConfig.navigation.showProductsMenu

export type SiteConfig = typeof siteConfig
