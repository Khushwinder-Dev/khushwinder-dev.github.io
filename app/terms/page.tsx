import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Agreement to Terms</h2>
            <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Use License</h2>
            <p>Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on this website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Disclaimer</h2>
            <p>The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Limitations</h2>
            <p>In no event shall I be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I have been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Revisions and Errata</h2>
            <p>The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete or current. I may make changes to the materials contained on this website at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws applicable in the region where I reside, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact me via the contact form on this website.</p>
          </section>
        </div>
      </main>
    </div>
  )
}