import type { Metadata } from 'next'
import IdeasClient from './IdeasClient'

export const metadata: Metadata = {
  title: "Today's Hand — Stock Screener",
  description:
    "Five stocks the Bridge Boys would sit down with right now. Screened across Buffett, Lynch, Greenblatt, and Taleb criteria with live financial data.",
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/ideas' },
  openGraph: {
    title: "Today's Hand — Omaha Bridge Group",
    description:
      "Five stocks screened across Buffett, Lynch, Greenblatt, and Taleb criteria with real financial data. Updated every 4 hours.",
    type: 'website',
  },
}

export default function IdeasPage() {
  return <IdeasClient />
}
