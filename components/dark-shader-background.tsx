"use client"

import { useEffect, useState } from "react"
import { ShaderBackground } from "@/components/ui/shader-67130b9a"

/**
 * Animated background for OpusWebs' dark ("ink") sections — Hero, FoodSystem,
 * the closing CTA, Footer. Light sections stay plain; this never renders there.
 * A dark scrim sits between the shader and the content so text keeps reading
 * against the shader's brighter (cyan/near-white) passes.
 */
export function DarkShaderBackground({
  className = "",
  scrimOpacity = 0.6,
}: {
  className?: string
  scrimOpacity?: number
}) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {!reducedMotion && <ShaderBackground className="absolute inset-0 h-full w-full" />}
      <div className="absolute inset-0 bg-[var(--ink)]" style={{ opacity: reducedMotion ? 1 : scrimOpacity }} />
    </div>
  )
}
