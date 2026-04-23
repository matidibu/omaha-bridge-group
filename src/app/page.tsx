import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app' },
}

export default function HomePage() {
  return <HomeClient />
}
