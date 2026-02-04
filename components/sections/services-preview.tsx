'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/data/services'

export function ServicesPreviewSection() {
  const { t } = useLocale()

  // Show first 4 services for preview
  const previewServices = services.slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded transition-all duration-300 hover:bg-primary/10 bg-transparent"
          >
            {t.services.viewAll}
            <span className="rtl:rotate-180">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
