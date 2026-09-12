import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio",
  description:
    "Sitios web, tiendas online y software a medida que desarrollamos para negocios de distintos rubros.",
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <div className="pt-32">
        <PortfolioSection />
        <TestimonialsSection />
        <ComparisonSection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
