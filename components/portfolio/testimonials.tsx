'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'
import { SectionLabel } from './section-label'

const reviews = [
  {
    quote:
      'Khushwinder did an amazing job on our Shopify store. The speed, design and functionality are top-notch. Highly recommended!',
    name: 'John Smith',
    role: 'Entrepreneur',
    avatar: '/images/avatar-john.png',
  },
  {
    quote:
      'Working with Khushwinder was seamless. He delivered a high-converting store ahead of schedule and the animations are beautiful.',
    name: 'Sarah Lee',
    role: 'Founder, En-Place',
    avatar: '/images/avatar-john.png',
  },
  {
    quote:
      'Our store speed and conversions improved dramatically. Clean code, clear communication, and great attention to detail.',
    name: 'Mark Davis',
    role: 'Store Owner',
    avatar: '/images/avatar-john.png',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const review = reviews[active]

  return (
    <div
      id="testimonials"
      className="flex h-full flex-col rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <SectionLabel>Testimonials</SectionLabel>
        {/* <a
          href="#"
          className="group inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-accent"
        >
          View All Reviews
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a> */}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <Quote className="size-8 text-primary/50" />
        <p className="mt-3 text-pretty leading-relaxed text-foreground">
          {review.quote}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Image
            src={review.avatar}
            alt={review.name}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {review.name}
            </p>
            <p className="text-xs text-muted-foreground">{review.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show review ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
