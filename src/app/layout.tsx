import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Omaha Bridge Group — Five Legends. One Table. Your Edge.",
  description:
    "Warren Buffett sharpened his mind at the bridge table. We bring that same discipline to your portfolio — six legendary investors analyze any stock and deliver one unbiased verdict.",
  icons: {
    icon: "/obg-logo-new.png",
    apple: "/obg-logo-new.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6133557054306983"
          crossOrigin="anonymous"
        />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZL175YKVP9" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZL175YKVP9');
      `}</Script>
      <body className="min-h-full flex flex-col text-[#E8EDF5]">{children}</body>
    </html>
  )
}
