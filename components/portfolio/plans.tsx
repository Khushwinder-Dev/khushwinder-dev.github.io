'use client'
import { Check, Crown, Send, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from './section-label'
import { plans } from './data'
import { AnimatedItem } from '@/components/ui/animated-section'

const icons = [Send, Star, Crown]

export function Plans() {
  const getWhatsAppLink = (planName: string, price: string) => {
    const message = `Hi! I'm interested in your ${planName} plan (${price}). Can you please share more details?`
    return `https://wa.me/+919780032334?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="plans" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionLabel>Freelance Plans</SectionLabel>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const Icon = icons[i]
          const isPopular = plan.popular
          return (
            <AnimatedItem key={plan.name} delay={i * 0.15}>
              <div
                className="relative flex flex-col rounded-3xl border border-border bg-card/50 p-7 transition-all duration-300 hover:border-primary/60 hover:bg-card hover:shadow-[0_0_50px] hover:shadow-primary/10"
              >
                {isPopular && (
                  <span className="absolute right-0 top-6 rounded-l-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    Popular
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors hover:bg-primary/20">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {plan.blurb}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-4xl font-bold text-primary">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  render={<a href={getWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  className="mt-8 w-full rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90"
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
