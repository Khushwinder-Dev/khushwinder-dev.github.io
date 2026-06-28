'use client'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const floatingIcons = [
  { logo: '/logos/wordpress.svg', name: 'WordPress', className: 'left-0 top-8', delay: 0 },
  { logo: '/logos/shopify.svg', name: 'Shopify', className: 'left-2 top-1/2 -translate-y-1/2', delay: 0.1 },
  { logo: '/logos/react.svg', name: 'React', className: 'left-6 bottom-10', delay: 0.2 },
  { logo: '/logos/laravel.svg', name: 'Laravel', className: 'right-0 top-8', delay: 0.3 },
  { logo: '/logos/javascript.svg', name: 'JavaScript', className: 'right-2 top-1/2 -translate-y-1/2', delay: 0.4 },
  { logo: '/logos/tailwindcss.svg', name: 'Tailwind', className: 'right-6 bottom-10', delay: 0.5 },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* ambient glow */}
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
              render={<a href="#projects" />}
              nativeButton={false}
              size="lg"
              className="group rounded-full bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              render={<a target='_blank' href="/resume/webDeveloper/Khushwinder.pdf" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-secondary/40 px-6 font-medium hover:bg-secondary"
            >
              Download CV
              <Download className="size-4" />
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

        {/* Right portrait with floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square">
            {/* glowing ring */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 shadow-[0_0_60px] shadow-primary/40"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
            />
            <Image
              src="/images/hero-portrait.png"
              alt="Portrait of Khushwinder, Web Developer and Digital Marketer"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain"
            />

            {floatingIcons.map((icon) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.4 + icon.delay,
                }}
                className={`absolute flex size-14 items-center justify-center rounded-2xl border border-border bg-card/80 p-3 shadow-lg backdrop-blur-md ${icon.className}`}
              >
                <Image
                  src={icon.logo}
                  alt={icon.name}
                  width={32}
                  height={32}
                  className="size-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
