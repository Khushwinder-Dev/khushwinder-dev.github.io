'use client'

import { useState, useRef } from 'react'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { SectionLabel } from './section-label'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setError(null)

    try {
      await emailjs.sendForm(
        'service_a0xx08d',
        'template_kvs2rnk',
        formRef.current,
        '1gCpsI8lSnCEiOO3S'
      )
      setSent(true)
      formRef.current.reset()
    } catch (err) {
      console.error('Failed to send email:', err)
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

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
        ref={formRef}
        className="mt-5 flex flex-1 flex-col gap-3"
        onSubmit={sendEmail}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Your Message"
          aria-label="Your Message"
          className="flex-1 resize-none rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
        <Button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
        >
          <Send className="size-4" />
          {loading ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
        </Button>
        {error && (
          <p className="text-sm text-red-400 mt-2">{error}</p>
        )}
      </form>
    </div>
  )
}
