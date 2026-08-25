"use client"

import { FoodSystemHero } from "./foodsystem/foodsystem-hero"
import { FoodSystemProblem } from "./foodsystem/foodsystem-problem"

/**
 * FoodSystem — flagship product showcase.
 * A self-contained "product inside the product" zone: same OpusWebs visual
 * system (glass, glow, holographic text, magnetic buttons) but with its own
 * rhythm to read as a SaaS presentation rather than another marketing block.
 */
export function FoodSystemSection() {
  return (
    <section id="foodsystem" className="relative">
      {/* Divider that separates FoodSystem from the rest of the page */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--glow-violet)]/30 to-transparent" />
      </div>

      <FoodSystemHero />
      <FoodSystemProblem />
    </section>
  )
}
