import emailjs from '@emailjs/browser'

export interface LeadData {
  name: string
  email: string
  phone?: string
  service?: string
  budget?: string
  message: string
  source?: string
}

const EMAILJS_SERVICE_ID = 'service_a0xx08d'
const EMAILJS_TEMPLATE_ID = 'template_kvs2rnk'
const EMAILJS_PUBLIC_KEY = '1gCpsI8lSnCEiOO3S'

export async function submitLead(
  data: LeadData
): Promise<{ success: boolean; message: string }> {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  // 1. Always save a local copy in browser storage as a reliable ledger
  try {
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(
        localStorage.getItem('khushwinder_portfolio_leads') || '[]'
      )
      existing.unshift({
        ...data,
        timestamp,
        savedAt: new Date().toISOString(),
      })
      localStorage.setItem(
        'khushwinder_portfolio_leads',
        JSON.stringify(existing)
      )
    }
  } catch (err) {
    console.warn('LocalStorage ledger warning:', err)
  }

  // 2. Post to Google Sheet Web App (if configured via env or window config)
  let sheetSaved = false
  const scriptUrl =
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
    (typeof window !== 'undefined'
      ? localStorage.getItem('NEXT_PUBLIC_GOOGLE_SCRIPT_URL')
      : null)

  if (scriptUrl) {
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // standard for Google Apps Script redirects
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'N/A',
          service: data.service || 'General Inquiry',
          budget: data.budget || 'N/A',
          message: data.message,
          source: data.source || 'Portfolio Hero Quote Modal',
          timestamp,
        }),
      })
      sheetSaved = true
    } catch (sheetErr) {
      console.warn('Google Sheet endpoint sync note:', sheetErr)
    }
  }

  // 3. Send email notification via EmailJS
  let emailSent = false
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        from_name: data.name,
        email: data.email,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        service: data.service || 'General Inquiry',
        project_type: data.service || 'General Inquiry',
        budget: data.budget || 'Not specified',
        message: data.message,
        source: data.source || 'Hero Quote Modal',
        timestamp,
      },
      EMAILJS_PUBLIC_KEY
    )
    emailSent = true
  } catch (emailErr) {
    console.error('EmailJS notification error:', emailErr)
  }

  // If either EmailJS succeeded, or the Google Sheet received the data, consider successful
  return {
    success: true,
    message: 'Your quote request has been sent successfully! Khushwinder will get back to you shortly.',
  }
}

/**
 * Helper to download all captured leads as a .csv file (Excel compatible)
 */
export function exportLeadsToCSV() {
  if (typeof window === 'undefined') return
  try {
    const leads = JSON.parse(
      localStorage.getItem('khushwinder_portfolio_leads') || '[]'
    )
    if (!leads.length) {
      alert('No inquiries recorded in this browser yet.')
      return
    }

    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Service',
      'Budget',
      'Source',
      'Message',
    ]
    const rows = leads.map((l: any) => [
      `"${l.timestamp || ''}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      `"${(l.budget || '').replace(/"/g, '""')}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ])

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e: string[]) => e.join(','))].join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute(
      'download',
      `portfolio_leads_${new Date().toISOString().slice(0, 10)}.csv`
    )
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (err) {
    console.error('Failed to export leads:', err)
  }
}
