'use client'

import { useState, useRef } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from './section-label'
import { submitLead } from '@/lib/lead-service'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setError(null)

    const formData = new FormData(formRef.current)
    const name = (formData.get('name') as string)?.trim() || ''
    const email = (formData.get('email') as string)?.trim() || ''
    const phone = (formData.get('phone') as string)?.trim() || ''
    const message = (formData.get('message') as string)?.trim() || ''

    try {
      const res = await submitLead({
        name,
        email,
        phone,
        message,
        source: 'Homepage Contact Section',
      })

      if (res.success) {
        setSent(true)
        formRef.current.reset()
      } else {
        setError('Something went wrong. Please try again later.')
      }
    } catch (err) {
      console.error('Failed to submit contact form:', err)
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

      {sent ? (
        <div className="mt-6 flex flex-1 flex-col items-center justify-center p-6 text-center space-y-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <CheckCircle2 className="size-10 text-emerald-400" />
          <h4 className="text-lg font-bold text-foreground">Message Sent!</h4>
          <p className="text-xs text-muted-foreground max-w-xs">
            Your inquiry has been logged into the spreadsheet and sent to Khushwinder. You will receive a response within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-xs text-primary underline hover:text-primary/80 pt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          className="mt-5 flex flex-1 flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name *"
              aria-label="Your Name"
              className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email *"
              aria-label="Your Email"
              className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp Number (Optional)"
            aria-label="Phone Number"
            className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Your Message *"
            aria-label="Your Message"
            className="flex-1 resize-none rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />

          <Button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-primary font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
          >
            <Send className="size-4" />
            {loading ? 'Sending & Logging...' : 'Send Message'}
          </Button>

          {error && (
            <div className="flex items-center gap-2 text-xs text-red-400 mt-1">
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
