"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "./ui-premium/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#foodsystem", label: "FoodSystem" },
  { href: "/rubros", label: "Rubros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/planes", label: "Planes" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Only the home page opens on a dark, full-bleed hero — every other page
  // starts on a light section, so the header should read as "scrolled"
  // (light glass, dark text) from the very first frame there.
  const isHome = pathname === "/"
  const light = isScrolled || !isHome

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 pt-4">
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-2xl ${
            light ? "glass px-5 py-3 shadow-premium" : "px-2 py-3"
          }`}
        >
          <Link href="/" className="flex items-center group">
            <div
              className={`flex items-center rounded-lg transition-colors ${light ? "bg-[var(--ink)] px-2.5 py-1.5" : ""}`}
            >
              <Image
                src="/logo.png"
                alt="OpusWebs"
                width={4864}
                height={1620}
                priority
                className="h-10 w-auto"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  light
                    ? "text-[var(--text-muted)] hover:text-[var(--ink)] hover:bg-[var(--gray-100)]"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/faq" variant={light ? "primary" : "dark"} size="md">
              Quiero mi web
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full ${light ? "text-[var(--ink)]" : "text-white"}`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 rounded-2xl p-6 bg-white shadow-2xl border border-[var(--border-light)]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors py-2.5 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
              <Button href="/faq" variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Quiero mi web
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
