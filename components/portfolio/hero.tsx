'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import heroProfileImage from '@/public/images/neon-developer-profile.png'

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

        {/* Right portrait: Neon Full Stack Developer HUD Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[500px]"
        >
          {/* Ambient Cyber Neon Glow Blooms matching the image's cyan & purple lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-12 size-72 sm:size-96 rounded-full bg-cyan-500/25 blur-3xl -z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-12 size-72 sm:size-96 rounded-full bg-purple-600/25 blur-3xl -z-10"
          />

          {/* Floating Cyber Particle Dots */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-4 right-16 size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse z-20" />
          <div aria-hidden="true" className="pointer-events-none absolute top-14 -right-6 size-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-ping z-20" />
          <div aria-hidden="true" className="pointer-events-none absolute -top-6 -right-2 size-1.5 rounded-full bg-indigo-300 shadow-[0_0_8px_#a5b4fc] z-20" />
          <div aria-hidden="true" className="pointer-events-none absolute top-28 -right-4 size-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] z-20" />

          {/* High-Tech Glass Container for the Neon Profile Image */}
          <div
            style={{ aspectRatio: '1106 / 1422' }}
            className="group relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] border border-cyan-400/30 bg-slate-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(6,182,212,0.18)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_60px_rgba(6,182,212,0.28)]"
          >
            <Image
              src={heroProfileImage}
              alt="Khushwinder - Full Stack Developer & Digital Marketer"
              priority
              placeholder="blur"
              className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Inset Hairline Corner Reticles */}
            <span className="pointer-events-none absolute top-2.5 left-2.5 size-2 border-t border-l border-cyan-400/70" />
            <span className="pointer-events-none absolute top-2.5 right-2.5 size-2 border-t border-r border-cyan-400/70" />
            <span className="pointer-events-none absolute bottom-2.5 left-2.5 size-2 border-b border-l border-purple-400/70" />
            <span className="pointer-events-none absolute bottom-2.5 right-2.5 size-2 border-b border-r border-purple-400/70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
