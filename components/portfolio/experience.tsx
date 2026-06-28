'use client'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'
import { experience } from './data'
import { AnimatedItem } from '@/components/ui/animated-section'

export function Experience() {
  return (
    <div
      id="experience"
      className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
    >
      <SectionLabel>Experience</SectionLabel>

      <ol className="mt-6 space-y-7">
        {experience.map((job, i) => (
          <AnimatedItem key={`${job.company}-${job.role}-${i}`} delay={i * 0.1}>
            <li className="relative pl-7">
              <span className="absolute left-0 top-1.5 size-3 rounded-full bg-primary shadow-[0_0_10px] shadow-primary/60" />
              {i < experience.length - 1 && (
                <span className="absolute left-[5px] top-5 h-[calc(100%+0.75rem)] w-px bg-border" />
              )}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground">{job.role}</h3>
                <span className="text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">{job.company}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
            </li>
          </AnimatedItem>
        ))}
      </ol>

      {/* <div className="mt-6 flex justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
        >
          View Full Resume
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div> */}
    </div>
  )
}
