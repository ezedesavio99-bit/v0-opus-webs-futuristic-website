import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://opuswebs.vercel.app"),
  title: {
    default: "OpusWebs — Diseño y desarrollo web premium",
    template: "%s | OpusWebs",
  },
  description:
    "Diseñamos y desarrollamos sitios web, tiendas online y software a medida que transmiten autoridad y convierten visitantes en clientes.",
  keywords: ["diseño web", "desarrollo web", "landing pages", "tiendas online", "SEO", "presencia digital", "software a medida"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "OpusWebs — Diseño y desarrollo web premium",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online y software a medida que transmiten autoridad y convierten visitantes en clientes.",
    type: "website",
    locale: "es_AR",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
