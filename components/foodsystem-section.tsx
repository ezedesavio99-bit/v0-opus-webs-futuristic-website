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
      <FoodSystemHero />
      <FoodSystemProblem />
    </section>
  )
}
