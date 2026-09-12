import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ValueSection } from "@/components/value-section"
import { RubrosSection } from "@/components/rubros-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioTeaserSection } from "@/components/portfolio-teaser-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FoodSystemSection } from "@/components/foodsystem-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <HeroSection />
      <MarqueeSection />
      <ValueSection />
      <RubrosSection />
      <ServicesSection />
      <PortfolioTeaserSection />
      <TestimonialsSection />
      <ComparisonSection />
      <ContactSection />
      <FoodSystemSection />
      <Footer />
    </main>
  )
}
