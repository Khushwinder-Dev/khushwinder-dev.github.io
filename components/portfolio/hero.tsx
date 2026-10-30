'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Download,
  Sparkles,
  Star,
  CheckCircle2,
  Code2,
  Layers,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  const quickStats = [
    { label: 'Projects Completed', value: '115+', icon: TrendingUp },
    { label: 'Happy Global Clients', value: '70+', icon: Star },
    { label: 'Years Experience', value: '4+', icon: Code2 },
    { label: 'Satisfaction Rate', value: '99%', icon: ShieldCheck },
  ]

  const techBadges = [
    { name: 'Shopify', icon: '/logos/shopify.svg', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
    { name: 'WordPress', icon: '/logos/wordpress.svg', color: 'border-sky-500/30 bg-sky-500/10 text-sky-300' },
    { name: 'React / Next.js', icon: '/logos/react.svg', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
    { name: 'Laravel', icon: '/logos/laravel.svg', color: 'border-rose-500/30 bg-rose-500/10 text-rose-300' },
    { name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg', color: 'border-teal-500/30 bg-teal-500/10 text-teal-300' },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
      aria-label="Introduction"
    >
      {/* ----------------- VIBRANT MULTI-LAYER AMBIENT LIGHTING ----------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/25 via-cyan-500/20 to-purple-500/25 blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-20 size-[420px] rounded-full bg-cyan-500/15 blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-20 size-[400px] rounded-full bg-rose-500/15 blur-[130px] -z-10"
      />
      {/* Subtle modern cyber-grid background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* ----------------- LEFT HERO CONTENT (7 COLS) ----------------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status & Role Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-6 w-fit shadow-lg shadow-emerald-500/5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
              Available for Projects
            </span>
            <span className="text-emerald-500/40">•</span>
            <span className="text-foreground/90 font-medium">Full-Stack &amp; E-Commerce</span>
          </div>

          {/* Dynamic Bold Headline */}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Crafting High-Converting{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Digital Stores
            </span>{' '}
            &amp; Scalable{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-primary to-purple-400 bg-clip-text text-transparent">
              Web Applications
            </span>
          </h1>

          {/* Bio Subtitle */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Hi, I&apos;m <strong className="text-foreground font-semibold">Khushwinder</strong>. I help founders, brands, and businesses launch fast, secure, and revenue-driven websites using <span className="text-emerald-400 font-medium">Shopify</span>, <span className="text-sky-400 font-medium">WordPress</span>, <span className="text-cyan-400 font-medium">React.js</span>, and <span className="text-rose-400 font-medium">Laravel</span>.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              render={<a target='_blank' href="https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." />}
              nativeButton={false}
              size="lg"
              className="group relative overflow-hidden rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="size-4" />
              <span>Discuss Your Project</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:scale-[1.02] active:scale-[0.98]"
            >
              <Layers className="size-4 text-primary" />
              <span>Explore 117+ Projects</span>
            </a>

            <Button
              render={<a target='_blank' href="/resume/webDeveloper/Khushwinder.pdf" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border/80 bg-secondary/40 px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-all"
            >
              <span>CV</span>
              <Download className="size-4 text-muted-foreground" />
            </Button>
          </div>

          {/* Tech Stack Strip */}
          <div className="mt-10 pt-6 border-t border-border/50">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
              <Sparkles className="size-3 text-primary" />
              <span>Core Technologies &amp; Platforms</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium backdrop-blur-md transition-all hover:scale-105 ${tech.color}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tech.icon} alt={tech.name} className="size-3.5 object-contain" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {quickStats.map((st) => {
              const Icon = st.icon
              return (
                <div
                  key={st.label}
                  className="flex flex-col p-3 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-foreground">
                      {st.value}
                    </span>
                    <Icon className="size-4 text-primary/70" />
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                    {st.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* ----------------- RIGHT VISUAL SHOWCASE (5 COLS) ----------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] lg:col-span-5 flex items-center justify-center pt-4 sm:pt-0"
        >
          {/* Dual Holographic Backdrop Rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/30 via-cyan-500/25 to-purple-500/30 blur-3xl opacity-80"
          />

          {/* Outer Dashed Orbit */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute size-[106%] rounded-full border border-primary/20 border-dashed animate-[spin_80s_linear_infinite]"
          />

          {/* Inner Glowing Rim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute size-[92%] rounded-full border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          />

          {/* Pedestal Circular Glow Card */}
          <div className="relative size-[340px] sm:size-[400px] rounded-full bg-gradient-to-b from-card/90 via-card/50 to-background/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden flex items-end justify-center">
            {/* Ambient inner radial light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(147,51,234,0.2),transparent_70%)]" />

            {/* Glowing Cyber Grid base */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent pointer-events-none" />

            {/* High-Resolution Portrait Cutout */}
            <div className="relative size-full flex items-end justify-center">
              <Image
                src="/images/hero-portrait.png"
                alt="Khushwinder - Web Developer & E-Commerce Specialist"
                width={420}
                height={420}
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
                className="relative z-10 size-[92%] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-105"
              />
            </div>

            {/* Bottom Glass Tag */}
            <div className="absolute bottom-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-1.5 shadow-xl backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold text-foreground">Khushwinder</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">Verified Pro</span>
            </div>
          </div>

          {/* ----------------- FLOATING GLASS BADGES ----------------- */}

          {/* Top-Right: 115+ Projects & Rating */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 sm:-right-6 top-6 z-30 flex items-center gap-3 rounded-2xl border border-white/15 bg-card/90 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-md">
              <Star className="size-5 fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-foreground">115+ Delivered</span>
              </div>
              <p className="text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="size-3" />
                5.0 Rating • Global
              </p>
            </div>
          </motion.div>

          {/* Top-Left: Live Terminal Code Pill */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute -left-3 sm:-left-8 top-12 z-30 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-card/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl font-mono text-[11px]"
          >
            <div className="flex gap-1">
              <span className="size-2 rounded-full bg-rose-500/80" />
              <span className="size-2 rounded-full bg-amber-500/80" />
              <span className="size-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-muted-foreground">$</span>
            <span className="text-cyan-400">status</span>
            <span className="text-foreground">=</span>
            <span className="text-emerald-400 font-semibold">&apos;Available&apos;</span>
          </motion.div>

          {/* Bottom-Left: E-Commerce Storefronts */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -left-4 sm:-left-8 bottom-12 z-30 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-card/90 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex -space-x-1.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/shopify.svg" alt="Shopify" className="size-full object-contain" />
              </div>
              <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/wordpress.svg" alt="WordPress" className="size-full object-contain" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-foreground leading-tight">E-Commerce</p>
              <p className="text-[10px] text-emerald-400 font-medium">57+ Shopify Stores</p>
            </div>
          </motion.div>

          {/* Bottom-Right: Full-Stack Web Apps */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="absolute -right-3 sm:-right-8 bottom-8 z-30 flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-card/90 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex -space-x-1.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/react.svg" alt="React" className="size-full object-contain" />
              </div>
              <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/laravel.svg" alt="Laravel" className="size-full object-contain" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-foreground leading-tight">Full-Stack</p>
              <p className="text-[10px] text-cyan-400 font-medium">React &amp; Laravel</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
