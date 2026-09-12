import type React from "react"
import Link from "next/link"

type Variant = "primary" | "secondary" | "ghost" | "dark"
type Size = "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-premium hover:shadow-premium-hover",
  secondary:
    "bg-white text-[var(--text-primary)] border border-[var(--border-light-strong)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)]",
  dark: "bg-white text-[var(--ink)] hover:bg-white/90",
  ghost:
    "bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/5",
}

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<"button">, "onClick"> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  onClick?: React.MouseEventHandler
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
