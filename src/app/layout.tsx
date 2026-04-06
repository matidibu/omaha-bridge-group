import type { Metadata } from "next"
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Omaha Bridge Group — Five Legends. One Table. Your Edge.",
  description:
    "Warren Buffett sharpened his mind at the bridge table. We bring that same discipline to your portfolio — five legendary investors analyze any stock and deliver one unbiased verdict.",
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
      <body className="min-h-full flex flex-col text-[#E8EDF5]">{children}</body>
    </html>
  )
}
