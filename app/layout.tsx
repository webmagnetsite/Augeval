import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
// import localFont from "next/font/local"
import "./globals.css"
import "./custom-colors.css"

// Suppression des polices locales Passions Conflict et Story Script

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Villa Augeval | Hôtel 4 étoiles & Spa à Deauville",
  description:
    "Découvrez la Villa Augeval, boutique hôtel de charme Belle Époque avec spa privatif à Deauville. 41 chambres rénovées, piscine chauffée et services premium.",
  generator: "v0.app",
  openGraph: {
    title: "Villa Augeval | Hôtel de Charme & Spa à Deauville",
    description: "Séjour d'exception en Normandie : chambres raffinées, spa privatif, piscine chauffée.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Augeval | Hôtel 4★ & Spa Deauville",
  },
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#6B5B4F" />
      </head>
      <body
          className={`${playfair.variable} ${inter.variable} antialiased`}
          style={{
            backgroundColor: "var(--neutral-cream)",
            color: "var(--text-dark)",
            fontFamily: "'Playfair Display', 'Inter', 'Geist', 'sans-serif'"
          }}
      >
        {children}
      </body>
    </html>
  )
}
