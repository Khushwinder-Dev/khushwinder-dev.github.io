'use client'
import { Check, Crown, Send, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from './section-label'
import { plans } from './data'
import { AnimatedItem } from '@/components/ui/animated-section'

const icons = [Send, Star, Crown]

export function Plans() {
  return (
    <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionLabel>Freelance Plans</SectionLabel>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const Icon = icons[i]
          const isGold = plan.popular
          return (
            <AnimatedItem key={plan.name} delay={i * 0.15}>
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-7 ${
                  isGold
                    ? 'border-gold/60 bg-gold/5 shadow-[0_0_50px] shadow-gold/10'
                    : 'border-border bg-card/50'
                }`}
              >
                {isGold && (
                  <span className="absolute right-0 top-6 rounded-l-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-background">
                    Popular
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span
                    className={`flex size-12 items-center justify-center rounded-xl ${
                      isGold
                        ? 'bg-gold/15 text-gold'
                        : 'bg-primary/15 text-primary'
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        isGold ? 'text-gold' : 'text-foreground'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {plan.blurb}
                    </p>
                  </div>
                </div>

                <p
                  className={`mt-6 text-4xl font-bold ${
                    isGold ? 'text-gold' : 'text-primary'
                  }`}
                >
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check
                        className={`size-4 shrink-0 ${
                          isGold ? 'text-gold' : 'text-primary'
                        }`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  render={<a href="#contact" />}
                  nativeButton={false}
                  className={`mt-8 w-full rounded-xl font-medium ${
                    isGold
                      ? 'bg-gold text-background hover:bg-gold/90'
                      : 'bg-secondary text-foreground hover:bg-secondary/70'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </AnimatedItem>
          )
        })}
      </div>
    </section>
  )
}
