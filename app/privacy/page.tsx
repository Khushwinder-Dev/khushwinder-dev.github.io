import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>Welcome to my portfolio website. I respect your privacy and am committed to protecting your personal data. This Privacy Policy will inform you about how I look after your personal data when you visit my website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Information We Collect</h2>
            <p>I may collect, use, store and transfer different kinds of personal data about you which I have grouped together as follows:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address and telephone numbers.</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. How We Use Your Information</h2>
            <p>I will only use your personal data when the law allows me to. Most commonly, I will use your personal data in the following circumstances:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>To respond to your inquiries and communicate with you.</li>
              <li>To improve my website and services.</li>
              <li>To send you updates about my work (only if you have opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Data Security</h2>
            <p>I have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Cookies</h2>
            <p>This website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Changes to This Policy</h2>
            <p>I may update this privacy policy from time to time. I will notify you of any changes by posting the new privacy policy on this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Contact</h2>
            <p>If you have any questions about this Privacy Policy or my privacy practices, please contact me via the contact form on this website.</p>
          </section>
        </div>
      </main>
    </div>
  )
}