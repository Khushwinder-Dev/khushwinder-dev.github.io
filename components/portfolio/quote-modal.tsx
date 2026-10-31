'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageSquare,
  AlertCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { submitLead, LeadData } from '@/lib/lead-service'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

const SERVICES = [
  'Shopify E-Commerce',
  'WordPress / WooCommerce',
  'Laravel / React Web App',
  'Speed & Performance',
  'Custom Development',
]

const BUDGET_RANGES = [
  '< $500',
  '$500 - $1,500',
  '$1,500 - $3,000',
  '$3,000+',
]

export function QuoteModal({
  isOpen,
  onClose,
  initialService = 'Shopify E-Commerce',
}: QuoteModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(initialService)
  const [budget, setBudget] = useState('$500 - $1,500')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Sync initial service when changed
  useEffect(() => {
    if (initialService) setService(initialService)
  }, [initialService])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    const payload: LeadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      budget,
      message: message.trim(),
      source: 'Hero "Get a quote" Modal',
    }

    try {
      const res = await submitLead(payload)
      if (res.success) {
        setIsSuccess(true)
      } else {
        setErrorMessage('Failed to send quote request. Please try again.')
      }
    } catch (err: any) {
      console.error('Submission error:', err)
      setErrorMessage('Something went wrong. Please check your connection or contact via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const handleResetAndClose = () => {
    setIsSuccess(false)
    setErrorMessage(null)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md -z-10"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border/80 bg-card/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Close dialog"
            >
              <X className="size-5" />
            </button>

            {isSuccess ? (
              /* Success View */
              <div className="py-6 text-center space-y-5">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="size-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-foreground">{name}</span>! Your project details have been logged into the spreadsheet and sent to my inbox. I will review your requirements and respond within 24 hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-secondary/30 p-4 text-xs text-left space-y-1.5 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Selected Service:</span>
                    <span className="font-semibold text-foreground">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget Range:</span>
                    <span className="font-semibold text-emerald-400">{budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Confirmation Sent To:</span>
                    <span className="font-semibold text-foreground">{email}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919780032334?text=Hi%20Khushwinder,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(
                      service
                    )}%20(Name:%20${encodeURIComponent(name)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#22c35e] transition-colors shadow-md"
                  >
                    <MessageSquare className="size-4" />
                    Instant Chat on WhatsApp
                  </a>
                  <button
                    onClick={handleResetAndClose}
                    className="rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Quote Form View */
              <div className="space-y-6">
                {/* Header Badge & Title */}
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
                    <Sparkles className="size-3.5" />
                    <span>Free Estimate &bull; Fixed-Price Guarantee</span>
                  </div>
                  <h2
                    id="quote-modal-title"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                  >
                    Get a Project Quote
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Tell me about your e-commerce store, web application, or custom development. I&apos;ll respond with a clear scope and quote within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/90 mb-1">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/90 mb-1">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-1">
                      Phone / WhatsApp Number <span className="text-muted-foreground text-[10px] font-normal">(Optional for faster reply)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 97800 32334 / +1 (555) 000-0000"
                      className="w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background"
                    />
                  </div>

                  {/* Service Type Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-1.5">
                      Service / Project Type
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setService(s)}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                            service === s
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'border border-border/80 bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-1.5">
                      Estimated Budget (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`rounded-xl border px-3 py-2 text-center text-xs font-semibold transition-all ${
                            budget === b
                              ? 'border-primary bg-primary/10 text-primary shadow-sm'
                              : 'border-border/70 bg-secondary/20 text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-semibold text-foreground/90 mb-1">
                      Project Details / Requirements <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you need (e.g. store design, custom Shopify theme features, API integration, deadline, reference websites)..."
                      className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
                      <AlertCircle className="size-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-2.5 rounded-full bg-primary py-3.5 px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-70 active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Logging Inquiry &amp; Sending Notification...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Footer Security & Alternative */}
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground/80 pt-2 border-t border-border/40">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="size-3.5 text-emerald-400" />
                      100% Privacy &bull; No Spam
                    </span>
                    <a
                      href="https://wa.me/919780032334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Phone className="size-3" />
                      Or WhatsApp directly
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
