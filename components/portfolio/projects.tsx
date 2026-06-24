import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './section-label'
import { projects } from './data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex items-center justify-between">
        <SectionLabel>My Projects</SectionLabel>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
        >
          View All Projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <div>
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground">{project.tag}</p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
