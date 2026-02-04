'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { MessageCircle, Phone } from 'lucide-react'

export function CTASection() {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-primary text-2xl">&#10022;</span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10">
            {t.cta.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded transition-all duration-300 hover:bg-primary/90 hover:scale-105"
            >
              {t.cta.bookNow}
            </Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded transition-all duration-300 hover:bg-primary/10 hover:scale-105 bg-transparent"
            >
              <MessageCircle size={20} />
              {t.cta.whatsapp}
            </a>
            <a
              href="tel:+966500000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded transition-all duration-300 hover:border-primary/50 hover:scale-105 bg-transparent"
            >
              <Phone size={20} />
              {t.cta.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
