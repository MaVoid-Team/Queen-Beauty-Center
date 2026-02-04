'use client'

import { useLocale } from '@/components/locale-provider'

export function AboutSection() {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-8 bg-primary/50" />
            <span className="w-2 h-2 bg-primary rotate-45" />
            <span className="h-px w-8 bg-primary/50" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
            {t.about.description}
          </p>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="h-px w-16 bg-primary/30" />
            <span className="text-primary text-2xl">&#10022;</span>
            <span className="h-px w-16 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
