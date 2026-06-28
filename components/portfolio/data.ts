export type Tech = { name: string; logo: string }

export const techStack: Tech[] = [
  { name: 'WordPress', logo: '/logos/wordpress.svg' },
  { name: 'Shopify Liquid', logo: '/logos/shopify.svg' },
  { name: 'React.js', logo: '/logos/react.svg' },
  { name: 'Laravel', logo: '/logos/laravel.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'HTML5', logo: '/logos/html5.svg' },
  { name: 'CSS3', logo: '/logos/css3.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
  { name: 'GSAP', logo: '/logos/greensock.svg' },
  { name: 'Three.js', logo: '/logos/threejs.svg' },
]

export const experience = [
  {
    role: 'Web Developer',
    company: 'Cybertronix Technologies',
    period: '2025 - Present',
    description:
      'Built responsive websites, e-commerce stores, and custom web applications using React, Laravel, WordPress, and Shopify.',
  },
  {
    role: 'Web Developer',
    company: 'Vezire Technologies',
    period: '2024 - 2025',
    description:
      'Developed custom websites and e-commerce solutions, improved UI/UX, and optimized performance for better conversions.',
  },
  {
    role: 'Web Developer',
    company: 'Protolabz Eservices',
    period: '2021 - 2024',
    description:
      'Developed Shopify themes, custom features, WordPress websites, and optimized store speed and conversions.',
  },
]

export const projects = [
  {
    title: 'Qbands',
    tag: 'Shopify Store',
    image: '/images/project-fitness.png',
  },
  {
    title: 'En-Place',
    tag: 'Shopify Development',
    image: '/images/project-furniture.png',
  },
  {
    title: 'G1 Paintball',
    tag: 'Shopify Store',
    image: '/images/project-paintball.png',
  },
  {
    title: 'Nazareth Store',
    tag: 'Shopify Development',
    image: '/images/project-jewelry.png',
  },
]

export const plans = [
  {
    name: 'Basic',
    blurb: 'Perfect for small businesses and basic website/store setup',
    price: '₹ 3,000',
    features: [
      'Website/Store Setup',
      'Theme Customization',
      'Basic Page Design',
      '7 Days Support',
    ],
    popular: false,
  },
  {
    name: 'Silver',
    blurb: 'Great for growing brands & custom requirements',
    price: '₹ 15,000',
    features: [
      'Everything in Basic',
      'Custom Sections/Features',
      'App/Plugin Integrations',
      'Performance Optimization',
      'Basic Digital Marketing Setup',
      '15 Days Support',
    ],
    popular: false,
  },
  {
    name: 'Gold',
    blurb: 'Complete solution for scaling businesses',
    price: '₹ 40,000',
    features: [
      'Everything in Silver',
      'Advanced Features',
      'Custom Functionality',
      'Speed Optimization',
      'Full Digital Marketing Strategy',
      'Priority Support (30 Days)',
    ],
    popular: true,
  },
]

export const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export const socials = [
  { platform: 'LinkedIn', handle: '/khushwinder', icon: 'linkedin' },
  { platform: 'GitHub', handle: '/khushwinder', icon: 'github' },
  { platform: 'Upwork', handle: '/khushwinder', icon: 'upwork' },
  { platform: 'Fiverr', handle: '/khushwinder', icon: 'fiverr' },
  { platform: 'Twitter', handle: '/khushwinder', icon: 'twitter' },
  { platform: 'Instagram', handle: '/khushwinder', icon: 'instagram' },
]
