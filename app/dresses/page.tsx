'use client'

import { useLocale } from '@/components/locale-provider'
import { DressCard } from '@/components/dress-card'
import { dresses } from '@/data/dresses'
import { Eye } from 'lucide-react'

export default function DressesPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-8 bg-primary/50" />
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="h-px w-8 bg-primary/50" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.dressesPage.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {t.dressesPage.subtitle}
            </p>

            {/* View Only Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary text-sm">
              <Eye size={18} />
              <span>{t.dressesPage.viewOnly}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dresses Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {dresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.cta.title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded transition-all duration-300 hover:bg-primary/90"
              >
                {t.cta.bookNow}
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded transition-all duration-300 hover:bg-primary/10 bg-transparent"
              >
                {t.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
