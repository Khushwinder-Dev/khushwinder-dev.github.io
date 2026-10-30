'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const stats = [
  { label: 'Completed', value: '115+ Projects' },
  { label: 'Experience', value: '4+ Years' },
  { label: 'Rating', value: '100% Satisfaction' },
]
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  Share2,
  Check,
  Copy,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Download,
} from 'lucide-react'

// Tech stack badges
const techStack = [
  'Shopify',
  'WordPress',
  'React.js',
  'Next.js',
  'Laravel',
  'Tailwind CSS',
  'JavaScript',
  'Three.js',
]

// Stats

// Social icons at top
const topSocials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Khushwinder-Dev',
    logo: '/logos/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khushwinder-dev',
    logo: '/logos/linkedin.svg',
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01067ea901a45a6c1f?mp_source=share',
    logo: '/logos/upwork.svg',
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/khushwinder_',
    logo: '/logos/fiverr.svg',
  },
  {
    name: 'X',
    url: 'https://x.com/Er_Khushwinder',
    logo: '/logos/x.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/khushwinder.dev',
    logo: '/logos/instagram.svg',
  },
]

// Freelance Platforms
const freelanceLinks = [
  {
    title: 'Hire on Upwork',
    subtitle: 'Top Rated Freelancer • 100% Job Success',
    url: 'https://www.upwork.com/freelancers/~01067ea901a45a6c1f?mp_source=share',
    logo: '/logos/upwork.svg',
    tag: 'Top Rated',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  {
    title: 'Fiverr Services & Gigs',
    subtitle: 'WordPress, Shopify & Custom Web Development',
    url: 'https://www.fiverr.com/khushwinder_',
    logo: '/logos/fiverr.svg',
    tag: 'Freelance',
    tagColor: 'bg-green-500/15 text-green-400 border-green-500/30',
  },
]

// Social & Community Links
const socialLinks = [
  {
    title: 'GitHub Repositories',
    subtitle: '@Khushwinder-Dev • Open source projects & code',
    url: 'https://github.com/Khushwinder-Dev',
    logo: '/logos/github.svg',
    handle: '@Khushwinder-Dev',
  },
  {
    title: 'LinkedIn Network',
    subtitle: '/in/khushwinder-dev • Experience & endorsements',
    url: 'https://www.linkedin.com/in/khushwinder-dev',
    logo: '/logos/linkedin.svg',
    handle: '/khushwinder-dev',
  },
  {
    title: 'X (Formerly Twitter)',
    subtitle: '@Er_Khushwinder • Web tech thoughts & updates',
    url: 'https://x.com/Er_Khushwinder',
    logo: '/logos/x.svg',
    handle: '@Er_Khushwinder',
  },
  {
    title: 'Instagram',
    subtitle: '@khushwinder.dev • Work updates & behind the scenes',
    url: 'https://www.instagram.com/khushwinder.dev',
    logo: '/logos/instagram.svg',
    handle: '@khushwinder.dev',
  },
]

export function LinktreeView() {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2500)
  }

  const handleShare = async () => {
    if (typeof window === 'undefined') return
    const shareData = {
      title: 'Khushwinder — Web Developer & Digital Marketer',
      text: "Check out Khushwinder's official portfolio and links",
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // Fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      showToast('Link copied to clipboard!')
    } catch {
      showToast('Unable to copy link')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('Khushwinder.dev@gmail.com')
      showToast('Email ID copied to clipboard!')
    } catch {
      showToast('Failed to copy email')
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-between px-4 py-8 sm:py-12 selection:bg-primary/30">
      {/* Background ambient glowing gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/20 blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 right-1/4 size-[400px] rounded-full bg-accent/15 blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-20 left-1/3 size-[500px] rounded-full bg-primary/10 blur-[140px] -z-10"
      />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 z-50 flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-5 py-2.5 text-sm font-medium text-foreground shadow-xl shadow-primary/20 backdrop-blur-md"
          >
            <Check className="size-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Top Header Actions (Status & Share) */}
        <div className="w-full flex items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for Projects
          </div>

          <button
            onClick={handleShare}
            aria-label="Share profile"
            className="group flex size-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-md text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-foreground hover:scale-105 active:scale-95"
            title="Share Profile"
          >
            <Share2 className="size-4 transition-transform group-hover:rotate-12" />
          </button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Avatar with glowing ring */}
          <div className="relative mb-4 group">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-md group-hover:opacity-100 transition-opacity"
            />
            <div className="relative size-24 sm:size-28 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-purple-400">
              <div className="relative size-full overflow-hidden rounded-full bg-card">
                <Image
                  src="/images/hero-portrait.png"
                  alt="Khushwinder"
                  width={112}
                  height={112}
                  priority
                  className="size-full object-cover object-center"
                />
              </div>
            </div>
            {/* Verified icon badge */}
            <div
              className="absolute bottom-0 right-0 rounded-full bg-background p-0.5 shadow-md"
              title="Verified Developer"
            >
              <CheckCircle2 className="size-6 text-primary fill-primary/20" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-1.5">
            Khushwinder
          </h1>
          <p className="mt-1 text-sm sm:text-base font-medium bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Web Developer & Digital Marketer
          </p>

          <p className="mt-2.5 max-w-sm text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Building high-performing Shopify stores, WordPress websites & modern web apps (React / Next.js / Laravel).
          </p>

          {/* Quick Stats Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {stats.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">{s.value}</span>
              </span>
            ))}
          </div>

          {/* Quick Top Social Icons Bar */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {topSocials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-card/60 p-2 backdrop-blur-md transition-all hover:scale-110 hover:border-primary/50 hover:bg-secondary hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={social.logo}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="size-4 object-contain brightness-90 group-hover:brightness-100"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ----------------- FEATURED SPOTLIGHT: PORTFOLIO ----------------- */}
        <div className="w-full mt-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/portfolio"
              className="group relative block w-full overflow-hidden rounded-2xl border-2 border-primary/60 bg-gradient-to-r from-primary/15 via-card to-accent/15 p-4 sm:p-5 shadow-lg shadow-primary/10 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-2xl hover:shadow-primary/25 active:scale-[0.99]"
            >
              {/* Shimmer / ambient ray */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-full top-0 block -rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Glowing icon badge */}
                <div className="relative flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/30">
                  <Globe className="size-6 text-primary-foreground" />
                  <span className="absolute -top-1 -right-1 flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-accent" />
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      <Sparkles className="size-3" />
                      Featured
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">/portfolio</span>
                  </div>
                  <h2 className="mt-1 text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                    Explore Full Portfolio
                  </h2>
                  <p className="text-xs text-muted-foreground line-clamp-1 sm:line-clamp-none">
                    117+ Client Projects &amp; 3D interactive showcase
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* ----------------- PRIMARY ACTION CARDS ----------------- */}
        <div className="w-full mt-3.5 space-y-2.5">
          {/* WhatsApp Direct Chat */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20found%20your%20linktree%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-200 hover:scale-[1.015] hover:border-emerald-500/50 hover:bg-card/90 active:scale-[0.99]"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/15 text-[#25d366]">
              <svg viewBox="0 0 24 24" className="size-6 fill-[#25d366]" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground group-hover:text-[#25d366] transition-colors">
                  Chat on WhatsApp
                </span>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  Fastest Reply
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                Direct project inquiries &amp; instant consultation
              </p>
            </div>
            <ExternalLink className="size-4 text-muted-foreground group-hover:text-[#25d366] transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          {/* Download Resume / CV */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/resume/webDeveloper/Khushwinder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-200 hover:scale-[1.015] hover:border-primary/50 hover:bg-card/90 active:scale-[0.99]"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <FileText className="size-6" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Download Resume / CV
                </span>
                <span className="rounded-full bg-primary/15 border border-primary/30 px-2 py-0.5 text-[10px] font-medium text-primary">
                  PDF
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                Web developer qualifications, past roles &amp; tech skills
              </p>
            </div>
            <Download className="size-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-y-0.5" />
          </motion.a>
        </div>

        {/* ----------------- FREELANCE PLATFORMS ----------------- */}
        <div className="w-full mt-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Freelance &amp; Hire
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <div className="space-y-2.5">
            {freelanceLinks.map((item, idx) => (
              <motion.a
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/60 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-200 hover:scale-[1.015] hover:border-primary/50 hover:bg-card/90 active:scale-[0.99]"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                </div>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ----------------- SOCIAL & CODE PROFILES ----------------- */}
        <div className="w-full mt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Social &amp; Developer Profiles
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-card/60 p-3 backdrop-blur-xl transition-all duration-200 hover:scale-[1.02] hover:border-primary/50 hover:bg-card/90 active:scale-[0.99]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <span className="block text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-muted-foreground truncate">
                    {item.handle}
                  </span>
                </div>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ----------------- QUICK CONTACT BAR ----------------- */}
        <div className="w-full mt-6 rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Get In Touch Directly
            </span>
            <span className="text-[11px] text-primary">Fast response within 2 hours</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href="mailto:Khushwinder.dev@gmail.com"
              className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-3 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50 hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-primary" />
              <span>Khushwinder.dev@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="tel:+919780032334"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-3 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50 hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+91 97800 32334</span>
              </a>

              <button
                onClick={copyEmail}
                title="Copy Email"
                aria-label="Copy Email address"
                className="flex size-9 items-center justify-center rounded-xl border border-border/80 bg-secondary/50 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
              >
                <Copy className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- TECH STACK BADGES ----------------- */}
        <div className="w-full mt-7 flex flex-wrap items-center justify-center gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/60 bg-card/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-lg mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Khushwinder</p>
        <div className="flex items-center gap-4">
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  )
}
