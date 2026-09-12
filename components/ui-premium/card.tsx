import type React from "react"

export function Card({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  const toneClasses = tone === "dark" ? "card-dark" : "card-light"

  return <div className={`rounded-xl ${toneClasses} ${className}`}>{children}</div>
}
