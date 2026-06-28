'use client'
import { useState, useRef, useEffect } from 'react'
import { Copy, Phone } from 'lucide-react'

const GMAIL_ID = 'Khushwinder.dev@gmail.com'
const PHONE_NUMBER = '+919780032334'

const GmailIcon = ({ className = "size-7" }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="52 42 88 66"
    fill="none"
  >
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/> 
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/> 
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/> 
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/> 
    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/> 
  </svg>
)

export function ContactButtons() {
  const [showGmailMenu, setShowGmailMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(GMAIL_ID)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      setShowGmailMenu(false)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ID}`, '_blank')
    setShowGmailMenu(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowGmailMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex size-14 items-center justify-center rounded-full bg-card border border-border shadow-lg shadow-card/20 transition-transform hover:scale-105"
        aria-label="Call now"
      >
        <Phone className="size-7 text-white" />
      </a>

      {/* Gmail Button */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowGmailMenu(!showGmailMenu)}
          className="flex size-14 items-center justify-center rounded-full bg-card border border-border shadow-lg shadow-card/20 transition-transform hover:scale-105"
          aria-label="Contact via Gmail"
        >
          <GmailIcon />
        </button>
        {showGmailMenu && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-2 rounded-xl border border-border bg-card p-2 shadow-lg min-w-[140px]">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary whitespace-nowrap"
            >
              <Copy className="size-4 shrink-0" />
              {copied ? 'Copied!' : 'Copy Email ID'}
            </button>
            <button
              onClick={openGmail}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary whitespace-nowrap"
            >
              <GmailIcon className="size-4" />
              Open Gmail
            </button>
          </div>
        )}
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919780032334"
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-14 items-center justify-center rounded-full bg-card border border-border shadow-lg shadow-card/20 transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7 fill-white bg-[#25d366] rounded-full"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  )
}
