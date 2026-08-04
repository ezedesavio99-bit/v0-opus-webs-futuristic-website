"use client"

import { FoodSystemHero } from "./foodsystem/foodsystem-hero"
import { FoodSystemProblem } from "./foodsystem/foodsystem-problem"
import { FoodSystemFeatures } from "./foodsystem/foodsystem-features"
import { FoodSystemVideo } from "./foodsystem/foodsystem-video"
import { FoodSystemBenefits } from "./foodsystem/foodsystem-benefits"
import { FoodSystemComparison } from "./foodsystem/foodsystem-comparison"
import { FoodSystemScalable } from "./foodsystem/foodsystem-scalable"
import { FoodSystemCTA } from "./foodsystem/foodsystem-cta"

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
      <FoodSystemFeatures />
      <FoodSystemVideo />
      <FoodSystemBenefits />
      <FoodSystemComparison />
      <FoodSystemScalable />
      <FoodSystemCTA />
    </section>
  )
}
