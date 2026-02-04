import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesPreviewSection } from '@/components/sections/services-preview'
import { FeaturesSection } from '@/components/sections/features'
import { GalleryPreviewSection } from '@/components/sections/gallery-preview'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreviewSection />
      <FeaturesSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
