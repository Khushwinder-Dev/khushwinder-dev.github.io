export interface AppItem {
  id: string
  title: string
  subtitle: string
  category: 'Shopify Apps' | 'React & Next.js Apps' | 'Interactive & 3D' | 'E-Commerce Utility'
  summary: string
  features: string[]
  techStack: string[]
  metrics?: string
  clientName?: string
  liveUrl?: string
  featured?: boolean
}

export const appsProjects: AppItem[] = [
  {
    id: 'product-customizer-app',
    title: 'Interactive Live Product Customizer App',
    subtitle: 'Real-Time Preview, Engraving & Custom Line Items',
    category: 'Shopify Apps',
    summary:
      'Embedded Shopify application allowing shoppers to customize colors, upload bespoke engravings/graphics, preview the exact product in real-time, and automatically attach customization metadata to the checkout cart.',
    features: [
      'Real-time 2D/3D Canvas live preview rendering',
      'Custom text, font selection, and engraving vector generator',
      'File upload support with auto-dimension and DPI validation',
      'Cart line-item properties seamlessly passed to Shopify admin',
      'Fully compatible with Shopify Online Store 2.0 app blocks',
    ],
    techStack: ['React.js', 'Shopify App Bridge', 'Canvas API', 'Node.js', 'Tailwind CSS'],
    metrics: '+34% boost in customized order conversions',
    clientName: 'Nazareth Store & Custom Jewelry Boutiques',
    liveUrl: 'https://nazarethstore.com',
    featured: true,
  },
  {
    id: 'qbands-fitness-app',
    title: 'Qbands Fitness Routine & Band Resistance Calculator App',
    subtitle: 'Interactive Exercise & Band Resistance Calculator',
    category: 'React & Next.js Apps',
    summary:
      'Interactive workout web application calculating exact resistance poundage based on band combinations, providing guided exercise routines with interactive countdown timers and workout logs.',
    features: [
      'Real-time resistance load calculation based on band tension & height',
      'Built-in interval timer with audio alerts for high-intensity training',
      'Categorized workout library with exercise demonstration cards',
      'Progressive Web App (PWA) installable on iOS and Android homescreens',
      'Offline-capable workout guide with local persistence',
    ],
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'Web Audio API', 'PWA'],
    metrics: 'Active mobile companion app for 10k+ band users',
    clientName: 'Qbands (qbands.co)',
    liveUrl: 'https://www.qbands.co',
    featured: true,
  },
  {
    id: 'threejs-3d-showcase',
    title: '3D Interactive Showcase & Product Viewer App',
    subtitle: 'WebGL 3D Product Inspector & Model Showcase',
    category: 'Interactive & 3D',
    summary:
      'Immersive 3D web application allowing customers to inspect physical products from any angle with realistic lighting, material swaps, and dimension callouts directly in modern mobile and desktop browsers.',
    features: [
      '60 FPS smooth WebGL rendering powered by Three.js',
      'Orbit controls with pinch-to-zoom and rotational inertia',
      'Instant material, leather, and fabric color swapping',
      'Hotspot annotations highlighting key craftsmanship details',
      'Ultra-compressed GLTF models with progressive streaming',
    ],
    techStack: ['Three.js', 'React Three Fiber', 'GLTF/GLB Loaders', 'Tailwind CSS'],
    metrics: 'Reduces product returns by over 28%',
    clientName: 'En-Place Furniture & Luxury Showcases',
    liveUrl: 'https://www.en-place.co',
    featured: true,
  },
  {
    id: 'multi-currency-geo-app',
    title: 'Multi-Currency Dynamic Geo-Pricing App',
    subtitle: 'Automatic Geo-Detection & Currency Converter',
    category: 'Shopify Apps',
    summary:
      'Ultra-lightweight storefront app that detects client country via IP geolocation, auto-switches store currency and regional tax rates without page reload, and remembers preferences in local storage.',
    features: [
      'Sub-50ms serverless IP geolocation lookup',
      'Zero cumulative layout shift (CLS) for optimal SEO score',
      'Automatic integration with Shopify Multi-Currency Checkout',
      '160+ world currencies with hourly exchange rate sync',
      'Discreet floating switcher widget with country flag icons',
    ],
    techStack: ['JavaScript', 'Shopify Ajax API', 'IP Geolocation API', 'Web Storage'],
    metrics: 'Over 40% increase in international checkout completion',
    clientName: 'Shop Aleena, G1 Paintball & Global Stores',
    liveUrl: 'https://g1paintball.com',
    featured: false,
  },
  {
    id: 'instant-quote-estimator-app',
    title: 'Quick Lead & Instant Cost Estimator App',
    subtitle: 'Interactive Project Scope & Budget Calculator',
    category: 'React & Next.js Apps',
    summary:
      'Multi-step interactive estimation app where potential clients answer 3 quick questions about their project, get an instant cost range, and submit their contact details with automated WhatsApp notifications.',
    features: [
      'Step-by-step interactive question wizard UI',
      'Real-time budget estimation calculator based on selected features',
      'Instant project brief generation & WhatsApp click-to-chat link',
      'Form state persistence preventing data loss on accidental refresh',
      'Integration with Google Sheets API and Email notifications',
    ],
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: 'Generates qualified client leads 24/7',
    clientName: 'Khushwinder Client Intake Portal',
    liveUrl: '/portfolio#contact',
    featured: false,
  },
  {
    id: 'flash-sale-scarcity-app',
    title: 'Flash Sale Countdown & Scarcity Urgency Banner App',
    subtitle: 'Dynamic High-Conversion Sales Motivator',
    category: 'E-Commerce Utility',
    summary:
      'High-converting conversion banner app featuring synchronized countdown timers, simulated low-stock alert badges, and sticky notification bars that increase urgency and store conversion rates.',
    features: [
      'Synchronized server-time countdown prevents client timer bypass',
      'Dynamic inventory threshold badges ("Only 3 left in stock!")',
      'Responsive sticky top and bottom announcement bars',
      'Micro-bundle footprint (<5KB) ensuring lightning fast page loads',
      'Full Shopify Liquid theme block customization',
    ],
    techStack: ['Vanilla JavaScript', 'CSS3 Animations', 'Shopify Theme App Extensions'],
    metrics: '+18% average uplift during promotional campaigns',
    clientName: 'Fashion & Apparel E-Commerce Clients',
    liveUrl: 'https://www.en-place.co',
    featured: false,
  },
]

