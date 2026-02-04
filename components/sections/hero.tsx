'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { MessageCircle } from 'lucide-react'

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Al-Malika Beauty Center"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm tracking-widest uppercase">Beauty & Elegance</span>
          <span className="h-px w-12 bg-primary" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in text-balance">
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-primary font-medium mb-6 animate-fade-in">
          {t.hero.subheadline}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in text-pretty">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded transition-all duration-300 hover:bg-primary/90 hover:scale-105"
          >
            {t.hero.bookNow}
          </Link>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded transition-all duration-300 hover:bg-primary/10 hover:scale-105 bg-transparent"
          >
            <MessageCircle size={20} />
            {t.hero.whatsapp}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
