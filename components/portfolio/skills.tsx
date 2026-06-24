import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'
import { techStack } from './data'

export function Skills() {
  return (
    <div
      id="skills"
      className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
    >
      <SectionLabel>My Skills</SectionLabel>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-5 text-center transition-colors hover:border-primary/50 hover:bg-secondary/60"
          >
            <div className="flex size-12 items-center justify-center transition-transform group-hover:scale-110">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                className="size-10 object-contain"
              />
            </div>
            <span className="text-xs font-medium text-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
        >
          View All Skills
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
