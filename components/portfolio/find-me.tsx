import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const socials = [
  { platform: 'LinkedIn', handle: '/khushwinder', logo: '/logos/linkedin.svg' },
  { platform: 'GitHub', handle: '/khushwinder', logo: '/logos/github.svg' },
  { platform: 'Upwork', handle: '/khushwinder', logo: '/logos/upwork.svg' },
  { platform: 'Fiverr', handle: '/khushwinder', logo: '/logos/fiverr.svg' },
  { platform: 'Twitter', handle: '/khushwinder', logo: '/logos/x.svg' },
  { platform: 'Instagram', handle: '/khushwinder', logo: '/logos/instagram.svg' },
]

export function FindMe() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
      <SectionLabel>Find Me On</SectionLabel>

      <ul className="mt-5 flex flex-1 flex-col gap-2">
        {socials.map((social) => (
          <li key={social.platform}>
            <a
              href="#"
              className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-secondary/60"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={social.logo || '/placeholder.svg'}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
              </span>
              <span className="text-sm font-medium text-foreground">
                {social.platform}
              </span>
              <span className="text-sm text-muted-foreground">
                {social.handle}
              </span>
              <ArrowRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
