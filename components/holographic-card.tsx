"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"

interface HolographicCardProps {
  children: ReactNode
  className?: string
  tone?: "light" | "dark"
}

export function HolographicCard({ children, className = "", tone = "light" }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        tone === "dark" ? "card-dark" : "card-light"
      } ${isHovered ? "-translate-y-1 shadow-premium-hover" : "shadow-premium"} ${className}`}
    >
      {/* Soft spotlight that follows the cursor — barely visible, no neon */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(220px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-soft), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
