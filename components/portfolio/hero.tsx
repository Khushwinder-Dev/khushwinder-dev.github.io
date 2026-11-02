'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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

        {/* Right portrait seamlessly mixed with futuristic HUD elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px]"
        >
          <div className="relative aspect-square w-full">
            {/* Multi-layered ambient cyber neon glow - mixes smoothly into hero background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[95%] rounded-full bg-gradient-to-tr from-cyan-500/20 via-primary/20 to-purple-600/25 blur-3xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[75%] rounded-full bg-primary/20 blur-2xl -z-10"
            />

            {/* Glowing Cyber HUD Rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 sm:inset-6 rounded-full border border-primary/35 shadow-[0_0_50px_rgba(var(--primary-rgb,99,102,241),0.3)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-8 sm:inset-10 rounded-full border border-dashed border-cyan-400/25 animate-[spin_80s_linear_infinite]"
            />

            {/* Subtle HUD technical marks */}
            <div className="pointer-events-none absolute top-2 left-6 z-10 flex items-center gap-1.5 font-mono text-[9px] text-cyan-400/75">
              <span>+ COR: 03.14</span>
              <span className="size-1 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="pointer-events-none absolute bottom-4 right-8 z-10 font-mono text-[9px] text-purple-400/75 flex items-center gap-1">
              <span>&lt;R1B</span>
              <span className="text-purple-300 font-bold">+</span>
            </div>

            {/* Floating Cyber Particle Dots */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-2 right-20 size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse z-20" />
            <div aria-hidden="true" className="pointer-events-none absolute top-16 -right-3 size-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-ping z-20" />
            <div aria-hidden="true" className="pointer-events-none absolute -top-4 -right-1 size-1.5 rounded-full bg-indigo-300 shadow-[0_0_8px_#a5b4fc] z-20" />
            <div aria-hidden="true" className="pointer-events-none absolute top-32 -right-2 size-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] z-20" />

            {/* Khushwinder's Real Portrait with bottom fade for seamless background mixing */}
            <div className="relative size-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
              <Image
                src="/images/hero-portrait.png"
                alt="Portrait of Khushwinder, Web Developer and Digital Marketer"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 500px"
                className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
              />
            </div>

            {/* Bottom gradient overlay to guarantee 100% seamless mixing into section */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent z-10"
            />

            {/* Top-Right HUD Card: 99+ PageSpeed & 100% Performance (Marked Element) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="group/gauge absolute -top-3 sm:-top-6 -right-1 sm:-right-4 z-30 w-[140px] sm:w-[160px] rounded-2xl border border-white/15 bg-card/80 p-3 text-center shadow-[0_20px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]"
            >
              {/* Corner HUD Brackets */}
              <span className="pointer-events-none absolute top-1.5 left-1.5 size-1.5 border-t border-l border-cyan-400/70" />
              <span className="pointer-events-none absolute top-1.5 right-1.5 size-1.5 border-t border-r border-cyan-400/70" />
              <span className="pointer-events-none absolute bottom-1.5 left-1.5 size-1.5 border-b border-l border-cyan-400/70" />
              <span className="pointer-events-none absolute bottom-1.5 right-1.5 size-1.5 border-b border-r border-cyan-400/70" />

              {/* SVG Speedometer Gauge */}
              <div className="relative mx-auto size-22 sm:size-26">
                <svg viewBox="0 0 130 110" className="size-full overflow-visible">
                  <defs>
                    <linearGradient id="speedoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="55%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                  {/* Outer subtle tech tick ring */}
                  <path
                    d="M 25.17 93.42 A 52 52 0 1 1 104.83 93.42"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.35)"
                    strokeWidth="2"
                    strokeDasharray="2 5"
                  />
                  {/* Background Track */}
                  <path
                    d="M 29.76 89.57 A 46 46 0 1 1 100.24 89.57"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Active Glowing Progress Arc (99% score) */}
                  <path
                    d="M 29.76 89.57 A 46 46 0 1 1 100.24 89.57"
                    fill="none"
                    stroke="url(#speedoGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray="208.7"
                    strokeDashoffset="3"
                    className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  />
                  {/* Center 99+ Value */}
                  <text
                    x="65"
                    y="58"
                    textAnchor="middle"
                    className="fill-white font-black text-[22px] tracking-tight drop-shadow-[0_2px_12px_rgba(34,197,94,0.4)]"
                  >
                    99+
                  </text>
                  {/* Subtitle */}
                  <text
                    x="65"
                    y="73"
                    textAnchor="middle"
                    className="fill-slate-300 font-semibold text-[8.5px] tracking-wider uppercase"
                  >
                    PageSpeed
                  </text>
                </svg>
              </div>

              {/* Pill Badge: 100% Performance */}
              <div className="mt-1 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[10.5px] font-semibold text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                  </span>
                  100% Performance
                </span>
              </div>
            </motion.div>

            {/* Bottom-Left HUD Card: Frosted Glass Code Editor (Marked Element A) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
              }}
              className="group/code absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-5 z-30 w-[220px] sm:w-[250px] md:w-[270px] rounded-2xl border border-white/15 bg-card/85 p-3 sm:p-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]"
            >
              {/* Top Specular Hairline Reflection */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              {/* Header with macOS 3 Traffic Light Dots */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 sm:size-2.5 rounded-full bg-[#ef4444] shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-[#eab308] shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                </div>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-muted-foreground/80 tracking-wide">
                  developer.ts
                </span>
                <div className="size-1 rounded-full bg-cyan-400/80 animate-ping" />
              </div>

              {/* Code Snippet with Syntax Highlighting */}
              <div className="mt-2.5 space-y-0.5 font-mono text-[10.5px] sm:text-[11.5px] leading-relaxed">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300 font-semibold">Khushwinder</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-amber-300">&#123;</span>
                </p>
                <p className="pl-3 sm:pl-3.5">
                  <span className="text-sky-300">stack</span>:{' '}
                  <span className="text-emerald-300">['Shopify', 'WP', 'React']</span>,
                </p>
                <p className="pl-3 sm:pl-3.5">
                  <span className="text-sky-300">speed</span>:{' '}
                  <span className="text-amber-300">99.8</span>,
                </p>
                <p className="pl-3 sm:pl-3.5">
                  <span className="text-sky-300">status</span>:{' '}
                  <span className="text-emerald-300">'Production-Ready'</span>,
                </p>
                <p>
                  <span className="text-amber-300">&#125;</span>;
                </p>
                <p className="pt-0.5">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-emerald-300 font-semibold">'100%_fast'</span>;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
