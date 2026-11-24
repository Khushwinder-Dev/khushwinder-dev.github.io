export interface ProductItem {
  id: string
  title: string
  subtitle: string
  category: 'Software' | 'Apps'
  tagline: string
  summary: string
  features: string[]
  techStack: string[]
  badge: string
  badgeColor: string
  metrics?: string
  clientName?: string
  liveUrl: string
  featured?: boolean
  iconType: 'terminal' | 'server' | 'database' | 'app' | 'cube' | 'globe' | 'shield' | 'calculator'
}

export const productCategories = ['All', 'Software', 'Apps'] as const
export type ProductCategory = (typeof productCategories)[number]

export const allProducts: ProductItem[] = [
  // ------------------ SOFTWARE ------------------
  {
    id: 'servelocally',
    title: 'ServeLocally',
    subtitle: 'Zero-Config Local Development Server & Reverse Proxy',
    category: 'Software',
    tagline: 'Lightweight local web server software for instant offline preview & development',
    summary:
      'Fast, lightweight local development server and reverse proxy tool built for developers to instantly serve static sites, test web apps, and handle local routing with zero configuration.',
    features: [
      'Instant zero-configuration static file and directory serving',
      'Built-in reverse proxy routing for local API development',
      'High-speed local asset streaming with instant file updates',
      'Ultra-lightweight memory footprint with cross-platform CLI support',
      'Direct one-click access and developer-friendly documentation',
    ],
    techStack: ['Node.js', 'TypeScript', 'CLI', 'HTTP/2', 'WebSockets', 'Reverse Proxy'],
    badge: 'Open Source Software',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    metrics: 'Zero-config instant local server',
    clientName: 'ServeLocally Project',
    liveUrl: 'https://servelocally.github.io/',
    featured: true,
    iconType: 'terminal',
  },
  {
    id: 'b2b-wholesale-portal',
    title: 'OmniChannel B2B Wholesale Portal',
    subtitle: 'High-Volume B2B E-Commerce & Dealer Portal',
    category: 'Software',
    tagline: 'Enterprise B2B wholesale platform with tiered pricing, margins & auto invoices',
    summary:
      'Enterprise B2B wholesale platform featuring tier-based wholesale pricing, dynamic customer margins, automated multi-currency PDF invoices, bulk CSV order intake, and multi-location inventory allocation.',
    features: [
      'Multi-tier wholesale margin pricing per account group',
      'Automated PDF invoice generation and tax statements',
      'Bulk CSV/Excel quick-order and cart upload engine',
      'Multi-warehouse inventory allocation with low-stock alerts',
      'B2B credit limit verification & custom payment terms',
    ],
    techStack: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Redis', 'Tailwind CSS', 'Stripe B2B'],
    badge: 'Enterprise Software',
    badgeColor: 'bg-primary/10 text-primary border-primary/30',
    metrics: 'Automates 100+ daily wholesale orders',
    clientName: 'Stratus Smoke & Krave Glass USA',
    liveUrl: 'https://stratussmoke.com',
    featured: true,
    iconType: 'database',
  },
  {
    id: 'protech-av-crm',
    title: 'ProTech Commercial AV Project Configurator & CRM',
    subtitle: 'Business Management & Proposal Software',
    category: 'Software',
    tagline: 'Full-cycle commercial AV proposal, BOM, technician dispatching & CRM software',
    summary:
      'Comprehensive enterprise software engineered for commercial audiovisual engineering firms. Generates interactive bills of materials, automated client quotes, technician work orders, and digital sign-offs.',
    features: [
      'Dynamic interactive Bill of Materials (BOM) builder',
      'One-click PDF proposal generator with branded pricing sheets',
      'Client digital sign-off and contract approval capture',
      'Technician assignment, dispatching, and work-order tracker',
      'Equipment inventory and vendor pricing database',
    ],
    techStack: ['Laravel', 'React.js', 'MySQL', 'Alpine.js', 'Tailwind CSS', 'DomPDF'],
    badge: 'Custom CRM Software',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    metrics: 'Cuts proposal turnaround from hours to minutes',
    clientName: 'Protech AV Solutions',
    liveUrl: 'https://protechavsolutions.com',
    featured: true,
    iconType: 'server',
  },
  {
    id: 'gc-recital-academy',
    title: 'Academy Orchestrator & Recital Management Platform',
    subtitle: 'Education, Scheduling & Event Ticketing Software',
    category: 'Software',
    tagline: 'All-in-one software for recurring tuition, event recitals, and QR ticketing',
    summary:
      'Full-lifecycle management software powering student onboarding, automated monthly tuition payments, recital performance scheduling, instructor availability calendar, and QR code digital ticketing.',
    features: [
      'Automated recurring tuition billing engine via Stripe',
      'Interactive recital performance program & stage scheduler',
      'Instant QR code event ticket generator & validator',
      'Dedicated parent and student progress dashboard',
      'Automated SMS/Email class reminders & announcements',
    ],
    techStack: ['Laravel', 'React.js', 'Stripe Subscriptions', 'Tailwind CSS', 'QR Code SDK'],
    badge: 'Cloud Platform',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    metrics: 'Manages 500+ active students & annual recitals',
    clientName: 'GC Recital Academy',
    liveUrl: 'https://www.gcrecital.com',
    featured: true,
    iconType: 'globe',
  },
  {
    id: 'charity-donor-erp',
    title: 'Community & Non-Profit Donor Management ERP',
    subtitle: 'Recurring Donations, Member Records & Tax Receipts',
    category: 'Software',
    tagline: 'Donor registry, recurring pledge automation, and tax receipt generation software',
    summary:
      'Scalable community management and donation software supporting international recurring contributions, automated tax exemption receipts, volunteer rosters, and event broadcasting.',
    features: [
      'Multi-currency global recurring donation engine',
      'Automated 80G tax exemption certificate generation & dispatch',
      'Member registry with family records and contribution history',
      'Volunteer registration, skill matching, and shift coordination',
      'Broadcast announcement center for community programs',
    ],
    techStack: ['Laravel', 'MySQL', 'PayPal / Stripe SDK', 'Tailwind CSS', 'Mailgun'],
    badge: 'Non-Profit Software',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    metrics: 'Processed $250k+ in charitable contributions',
    clientName: 'Guru Nanak Mission Society & Atam Ras',
    liveUrl: 'https://gurunanakmissionsociety.org',
    featured: false,
    iconType: 'shield',
  },

  // ------------------ APPS ------------------
  {
    id: 'product-customizer-app',
    title: 'Interactive Live Product Customizer App',
    subtitle: 'Real-Time Preview, Engraving & Custom Line Items',
    category: 'Apps',
    tagline: 'Shopify app for interactive live previews, custom engravings & cart sync',
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
    badge: 'Shopify App',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    metrics: '+34% boost in customized order conversions',
    clientName: 'Nazareth Store & Custom Jewelry Boutiques',
    liveUrl: 'https://nazarethstore.com',
    featured: true,
    iconType: 'app',
  },
  {
    id: 'qbands-fitness-app',
    title: 'Qbands Fitness Routine & Band Resistance Calculator App',
    subtitle: 'Interactive Exercise & Band Resistance Calculator',
    category: 'Apps',
    tagline: 'Interactive fitness app for band resistance calculations, routines & timers',
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
    badge: 'PWA Web App',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    metrics: 'Active mobile companion app for 10k+ band users',
    clientName: 'Qbands (qbands.co)',
    liveUrl: 'https://www.qbands.co',
    featured: true,
    iconType: 'calculator',
  },
  {
    id: 'threejs-3d-showcase',
    title: '3D Interactive Showcase & Product Viewer App',
    subtitle: 'WebGL 3D Product Inspector & Model Showcase',
    category: 'Apps',
    tagline: 'Browser-based 3D product visualizer with 360 rotation, materials & hotspots',
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
    badge: 'WebGL 3D App',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    metrics: 'Reduces product returns by over 28%',
    clientName: 'En-Place Furniture & Luxury Showcases',
    liveUrl: 'https://www.en-place.co',
    featured: true,
    iconType: 'cube',
  },
  {
    id: 'multi-currency-geo-app',
    title: 'Multi-Currency Dynamic Geo-Pricing App',
    subtitle: 'Automatic Geo-Detection & Currency Converter',
    category: 'Apps',
    tagline: 'Zero-lag IP geolocation app auto-switching currencies and regional taxes',
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
    badge: 'Storefront Utility',
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    metrics: 'Over 40% increase in international checkout completion',
    clientName: 'Shop Aleena, G1 Paintball & Global Stores',
    liveUrl: 'https://g1paintball.com',
    featured: false,
    iconType: 'globe',
  },
  {
    id: 'instant-quote-estimator-app',
    title: 'Quick Lead & Instant Cost Estimator App',
    subtitle: 'Interactive Project Scope & Budget Calculator',
    category: 'Apps',
    tagline: 'Interactive client budget & milestone cost estimator with live WhatsApp export',
    summary:
      'Interactive customer-facing quote calculator application allowing potential clients to toggle project requirements and view instant budget estimates with direct WhatsApp transfer.',
    features: [
      'Dynamic real-time budget estimator across multiple service tiers',
      'Interactive feature checkbox toggles with immediate price updates',
      'Automated pre-filled WhatsApp transfer with selected project scope',
      'Mobile-responsive layout optimized for high conversion rates',
      'Integrated with direct payment and deposit checkout portal',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    badge: 'Interactive Web Tool',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    metrics: 'Boosts qualified inbound inquiries by 45%',
    clientName: 'Khushwinder Portfolio Suite',
    liveUrl: '/plans',
    featured: false,
    iconType: 'calculator',
  },
]
