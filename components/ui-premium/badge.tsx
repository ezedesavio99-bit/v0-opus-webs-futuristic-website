import type React from "react"

export function Badge({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-white/8 text-white border-white/15"
      : "bg-[var(--accent-soft)] text-[var(--accent-hover)] border-[var(--accent)]/15"

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${toneClasses} ${className}`}
    >
      {children}
    </span>
  )
}
