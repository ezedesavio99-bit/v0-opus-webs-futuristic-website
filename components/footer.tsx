"use client"

import Link from "next/link"
import Image from "next/image"
import { DarkShaderBackground } from "./dark-shader-background"

const footerNav = [
  { href: "/", label: "Inicio" },
  { href: "/rubros", label: "Rubros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/portfolio", label: "Portfolio" },
]

const footerLegal = [
  { href: "/planes", label: "Planes" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
]

const socialLinks = [
  {
    href: "https://www.instagram.com/ezequielmkt__?igsh=MWdsdGRydTV5eDdxbA==",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/5EVB6PHIGC2WD1",
    label: "WhatsApp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background: "var(--ink)" }}>
      <DarkShaderBackground scrimOpacity={0.82} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-12 border-b border-[var(--border-dark)]">
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <Image src="/logo.png" alt="OpusWebs" width={2172} height={724} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-[var(--text-on-dark-muted)] max-w-xs leading-relaxed">
              Diseño y desarrollo de sitios web, tiendas online y software a medida para negocios que quieren
              destacar.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Navegación</h3>
            <nav className="flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-on-dark-muted)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Empresa</h3>
            <nav className="flex flex-col gap-2.5">
              {footerLegal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-on-dark-muted)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} OpusWebs. Todos los derechos reservados.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
