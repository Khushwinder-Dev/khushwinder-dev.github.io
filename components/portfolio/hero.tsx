'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { QuoteModal } from './quote-modal'

export function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-label="Introduction"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 size-[320px] rounded-full bg-cyan-500/10 blur-[120px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-10 size-[320px] rounded-full bg-rose-500/10 blur-[120px] -z-10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Left copy (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md mb-4">
            <Sparkles className="size-3.5" />
            <span>Full-Stack Web Developer &amp; E-Commerce Specialist</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Khushwinder
            </span>
          </h1>

          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
            Building high-converting digital storefronts &amp; scalable web applications.
          </p>

          <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
            Specializing in Shopify Liquid, custom WordPress theme/plugin development, and modern full-stack web applications using React.js and Laravel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* High-contrast Pill Button matching user reference image */}
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="group relative inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-950 shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
            >
              <span className="tracking-wide uppercase font-extrabold text-xs sm:text-sm text-gray-900">
                Get a quote
              </span>
              <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-primary/90">
                <ArrowRight className="size-4" />
              </span>
            </button>

            <Button
              render={<a target="_blank" href="/resume/webDeveloper/Khushwinder.pdf" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-secondary/40 px-6 font-medium hover:bg-secondary"
            >
              Download CV
              <Download className="size-4" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm border-t border-border/40 pt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Availability:
            </span>
            <span className="flex items-center gap-2 font-medium text-foreground">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70" />
              Freelance Projects
            </span>
            <span className="flex items-center gap-2 font-medium text-foreground">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70" />
              Full-time Roles
            </span>
          </div>
        </motion.div>

        {/* Right portrait showcase with creative floating badges (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 flex justify-center"
        >
          {/* Dual ambient rim glows matching the portrait's magenta & cyan rim lights */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 top-1/4 size-44 rounded-full bg-rose-500/20 blur-3xl -z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 bottom-1/4 size-44 rounded-full bg-cyan-500/20 blur-3xl -z-10"
          />

          {/* Main Portrait Card */}
          <div className="relative w-full aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-b from-card/80 via-card/40 to-background/90 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <div className="relative size-full overflow-hidden rounded-[1.6rem] bg-card">
              <Image
                src="/images/khushwinder-portrait-full.jpg"
                alt="Portrait of Khushwinder, Web Developer and Digital Marketer"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 35vw"
                className="size-full object-cover object-top"
              />

              {/* Subtle bottom vignette for seamless blending */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Bottom tag inside portrait */}
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-background/70 px-3 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">Open to Projects</span>
                </div>
                <span className="text-[11px] font-mono text-primary font-medium">Khushwinder</span>
              </div>
            </div>

            {/* Creative Floating Glass Badge 1: E-Commerce & CMS (Top-Left) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 sm:-left-6 top-8 z-20 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-card/85 p-2.5 pr-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex -space-x-1.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/shopify.svg"
                    alt="Shopify"
                    width={20}
                    height={20}
                    className="size-full object-contain"
                  />
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/wordpress.svg"
                    alt="WordPress"
                    width={20}
                    height={20}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-foreground leading-tight">E-Commerce</p>
                <p className="text-[10px] text-muted-foreground">Shopify &amp; WordPress</p>
              </div>
            </motion.div>

            {/* Creative Floating Glass Badge 2: Full-Stack Apps (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute -right-3 sm:-right-6 bottom-16 z-20 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-card/85 p-2.5 pr-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex -space-x-1.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/react.svg"
                    alt="React"
                    width={20}
                    height={20}
                    className="size-full object-contain"
                  />
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/laravel.svg"
                    alt="Laravel"
                    width={20}
                    height={20}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-foreground leading-tight">Full-Stack</p>
                <p className="text-[10px] text-muted-foreground">React &amp; Laravel</p>
              </div>
            </motion.div>

            {/* Creative Floating Orb 1: Tailwind CSS (Top-Right) */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-8 z-20 flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-card/90 p-2 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
              title="Tailwind CSS"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/tailwindcss.svg"
                alt="Tailwind"
                width={20}
                height={20}
                className="size-full object-contain"
              />
            </motion.div>

            {/* Creative Floating Orb 2: JavaScript (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -left-2 bottom-16 z-20 flex size-10 items-center justify-center rounded-xl border border-amber-500/30 bg-card/90 p-2 shadow-lg shadow-amber-500/10 backdrop-blur-xl"
              title="JavaScript"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/javascript.svg"
                alt="JavaScript"
                width={20}
                height={20}
                className="size-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Quote Modal Dialog */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  )
}
