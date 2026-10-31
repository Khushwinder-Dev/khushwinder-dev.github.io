export interface SoftwareItem {
  id: string
  title: string
  subtitle: string
  category: 'B2B & Wholesale' | 'Custom CRM & ERP' | 'Education & Events' | 'Automation & Integration' | 'Non-Profit & Community'
  summary: string
  features: string[]
  techStack: string[]
  metrics?: string
  clientName?: string
  liveUrl?: string
  featured?: boolean
}

export const softwareProjects: SoftwareItem[] = [
  {
    id: 'b2b-wholesale-portal',
    title: 'OmniChannel B2B Wholesale & Distribution Portal',
    subtitle: 'High-Volume B2B E-Commerce & Dealer Portal',
    category: 'B2B & Wholesale',
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
    metrics: 'Automates 100+ daily wholesale orders',
    clientName: 'Stratus Smoke & Krave Glass USA',
    liveUrl: 'https://stratussmoke.com',
    featured: true,
  },
  {
    id: 'protech-av-crm',
    title: 'ProTech Commercial AV Project Configurator & CRM',
    subtitle: 'Business Management & Engineering Proposal Software',
    category: 'Custom CRM & ERP',
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
    metrics: 'Cuts proposal turnaround from hours to minutes',
    clientName: 'Protech AV Solutions',
    liveUrl: 'https://protechavsolutions.com',
    featured: true,
  },
  {
    id: 'gc-recital-academy',
    title: 'Academy Orchestrator & Recital Management Platform',
    subtitle: 'Education, Scheduling & Event Ticketing Software',
    category: 'Education & Events',
    summary:
      'Full-lifecycle management software powering student onboarding, automated monthly tuition payments, recital performance scheduling, instructor availability calendar, and QR code digital ticketing.',
    features: [
      'Automated recurring tuition billing engine via Stripe',
      'Interactive recital performance program & stage scheduler',
      'Instant QR code event ticket generator & validator',
      'Dedicated parent and student progress dashboard',
      'Automated SMS/Email class reminders & recital announcements',
    ],
    techStack: ['Laravel', 'React.js', 'Stripe Subscriptions', 'Tailwind CSS', 'QR Code SDK'],
    metrics: 'Manages 500+ active students & annual recitals',
    clientName: 'GC Recital Academy',
    liveUrl: 'https://www.gcrecital.com',
    featured: true,
  },
  {
    id: 'lead-management-crm',
    title: 'Automated Lead Management & Notification Engine',
    subtitle: 'Serverless Real-Time Inbound Lead Capture',
    category: 'Automation & Integration',
    summary:
      'High-concurrency serverless software capturing leads from web forms, validating payloads, deduplicating records, syncing to cloud spreadsheets, and broadcasting multi-channel alerts (Email & WhatsApp).',
    features: [
      'Sub-100ms webhook data ingestion & payload validation',
      'Automated Google Sheets & Excel cloud sync with zero API limits',
      'Instant automated customer confirmation emails',
      'WhatsApp click-to-lead direct dispatcher with pre-filled scope',
      'Spam protection, honeypots, and IP throttling',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Google Sheets API', 'Resend API', 'Webhooks'],
    metrics: '100% zero-drop lead capture guarantee',
    clientName: 'Khushwinder Freelance Lead Hub',
    liveUrl: '/portfolio#contact',
    featured: false,
  },
  {
    id: 'charity-donor-erp',
    title: 'Community & Non-Profit Donor Management ERP',
    subtitle: 'Recurring Donations, Member Records & Tax Receipts',
    category: 'Non-Profit & Community',
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
    metrics: 'Processed $250k+ in global charitable contributions',
    clientName: 'Guru Nanak Mission Society & Atam Ras',
    liveUrl: 'https://gurunanakmissionsociety.org',
    featured: false,
  },
  {
    id: 'warehouse-inventory-sync',
    title: 'E-Commerce Warehouse & Inventory Webhook Sync Engine',
    subtitle: 'Multi-Store Inventory & Fulfillment Middleware',
    category: 'Automation & Integration',
    summary:
      'Middleware cloud service syncing live SKU inventory counts, tracking numbers, and fulfillment status in real-time across Shopify storefronts, WooCommerce stores, and warehouse ERPs.',
    features: [
      'Bidirectional real-time webhook sync across multiple channels',
      'Dead-letter queue automatic error recovery and reconciliation',
      'Sub-second inventory race-condition locking during flash sales',
      'Centralized tracking number and shipping status updater',
      'Web-based error dashboard and manual retry controls',
    ],
    techStack: ['Node.js', 'Express', 'Shopify Webhook API', 'MySQL', 'WebSockets'],
    metrics: 'Zero overselling across 20,000+ SKUs',
    clientName: 'Multi-Brand E-Commerce Network',
    liveUrl: 'https://www.en-place.co',
    featured: false,
  },
]
