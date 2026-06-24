import {
  ArrowRight,
  Briefcase,
  Clock,
  Code2,
  PencilRuler,
  Search,
  Send,
  Star,
  Users,
} from 'lucide-react'
import { SectionLabel } from './section-label'
import { stats } from './data'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Understanding your goals and requirements.',
  },
  {
    icon: PencilRuler,
    title: 'Plan',
    desc: 'Planning the best solution and structure.',
  },
  {
    icon: Code2,
    title: 'Develop',
    desc: 'Building clean, fast and scalable code.',
  },
  {
    icon: Send,
    title: 'Deliver',
    desc: 'Testing, optimizing and delivering with support.',
  },
]

const statIcons = [Briefcase, Users, Clock, Star]

export function Approach() {
  return (
    <section
      id="approach"
      className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2"
    >
      {/* Approach */}
      <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
        <SectionLabel>My Approach</SectionLabel>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4 sm:flex-col">
              <div className="flex items-center gap-3 sm:flex-col sm:gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <step.icon className="size-6" />
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden size-4 text-muted-foreground sm:absolute sm:hidden" />
                )}
              </div>
              <div className="sm:mt-3">
                <h3 className="text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
        <SectionLabel>Stats</SectionLabel>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-5 text-center"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs leading-tight text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
