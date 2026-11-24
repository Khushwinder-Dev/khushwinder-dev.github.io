'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import heroProfileImage from '@/public/images/hero-portrait.png'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-medium text-primary">Hello, I'm</p>
          <h1 className="mt-2 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Khushwinder
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Web Developer & Digital Marketer
            </span>
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I build professional websites, e-commerce stores (WordPress/Shopify), custom web apps (React/Laravel), and help brands grow with digital marketing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="/payment" />}
              nativeButton={false}
              size="lg"
              className="group rounded-full bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Make Payment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <span className="text-muted-foreground">Available for:</span>
            <span className="flex items-center gap-2">
              Freelance
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70" />
            </span>
            <span className="flex items-center gap-2">
              Full-time
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70" />
            </span>
          </div>
        </motion.div>

        {/* Right portrait: Compact Authentic Studio Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto flex items-center justify-center w-full"
          style={{ maxWidth: '280px' }}
        >
          {/* Soft ambient glow behind the portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/20 blur-2xl -z-10"
          />

          {/* Clean Glassmorphic Frame for the Studio Portrait */}
          <div
            className="group relative w-full aspect-square overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card/40 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20"
            style={{ width: '100%', maxWidth: '280px', maxHeight: '280px' }}
          >
            <Image
              src={heroProfileImage}
              alt="Khushwinder — Web Developer & Digital Marketer"
              priority
              placeholder="blur"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
