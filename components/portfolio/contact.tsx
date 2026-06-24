'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from './section-label'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div
      id="contact"
      className="flex h-full flex-col rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
    >
      <SectionLabel>Contact Me</SectionLabel>
      <p className="mt-3 text-sm text-muted-foreground">
        Let&apos;s work together on your next project
      </p>

      <form
        className="mt-5 flex flex-1 flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
            className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <textarea
          required
          rows={4}
          placeholder="Your Message"
          aria-label="Your Message"
          className="flex-1 resize-none rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
        <Button
          type="submit"
          className="rounded-lg bg-primary font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Send className="size-4" />
          {sent ? 'Message Sent!' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}
