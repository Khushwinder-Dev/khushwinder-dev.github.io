'use client'
import { useState } from 'react'
import { Check, Copy, Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const paymentMethods = {
  upiNumber: '+919780032334',
  upiId: 'khushwinder.dev-2@oksbi',
  accountNumber: '45026582393',
  ifsc: 'SBIN0001431',
}

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const downloadQRCode = () => {
    // Placeholder - user needs to add their QR code image to public/images/
    // For now, we'll create a temporary download link (or user should replace with actual QR path)
    const link = document.createElement('a')
    link.href = '/images/payment-qr.png' // User needs to add this file
    link.download = 'khushwinder-payment-qr.png'
    link.click()
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Payment</h1>
          <p className="text-muted-foreground">Choose your preferred payment method</p>
        </div>

        <div className="space-y-6">
          {/* UPI Number */}
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                ₹
              </span>
              UPI Number
            </h2>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="font-medium">{paymentMethods.upiNumber}</span>
              <button
                onClick={() => copyToClipboard(paymentMethods.upiNumber, 'upiNumber')}
                className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {copiedField === 'upiNumber' ? (
                  <>
                    <Check className="size-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* UPI ID */}
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                ₹
              </span>
              UPI ID
            </h2>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="font-medium">{paymentMethods.upiId}</span>
              <button
                onClick={() => copyToClipboard(paymentMethods.upiId, 'upiId')}
                className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {copiedField === 'upiId' ? (
                  <>
                    <Check className="size-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* QR Code */}
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                QR
              </span>
              QR Code
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="aspect-square w-full max-w-xs rounded-2xl border border-border bg-white p-4 flex items-center justify-center">
                {/* Placeholder for QR code - user needs to add /images/payment-qr.png */}
                <div className="text-center text-muted-foreground">
                  <p className="text-sm">Add your QR code to</p>
                  <p className="text-sm font-medium">/images/payment-qr.png</p>
                </div>
              </div>
              <button
                onClick={downloadQRCode}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="size-4" />
                Download QR Code
              </button>
            </div>
          </div>

          {/* Bank Details */}
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                🏦
              </span>
              Bank Details
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-muted-foreground">Account Number</span>
                  <span className="font-medium">{paymentMethods.accountNumber}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(paymentMethods.accountNumber, 'accountNumber')}
                  className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  {copiedField === 'accountNumber' ? (
                    <>
                      <Check className="size-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-muted-foreground">IFSC Code</span>
                  <span className="font-medium">{paymentMethods.ifsc}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(paymentMethods.ifsc, 'ifsc')}
                  className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  {copiedField === 'ifsc' ? (
                    <>
                      <Check className="size-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
