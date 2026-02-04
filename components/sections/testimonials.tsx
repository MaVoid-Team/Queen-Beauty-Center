'use client'

import { useLocale } from '@/components/locale-provider'
import { testimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const { locale, t } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 rounded border border-border transition-all duration-300 hover:border-primary/50"
            >
              <Quote size={24} className="text-primary/50 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {locale === 'ar' ? testimonial.textAr : testimonial.textEn}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {(locale === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                  </span>
                </div>
                <span className="text-foreground font-medium text-sm">
                  {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
