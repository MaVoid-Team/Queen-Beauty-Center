'use client'

import Image from 'next/image'
import { useLocale } from './locale-provider'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  showCta?: boolean
}

export function ServiceCard({ service, showCta = true }: ServiceCardProps) {
  const { locale, t } = useLocale()

  const name = locale === 'ar' ? service.nameAr : service.nameEn
  const description = locale === 'ar' ? service.descriptionAr : service.descriptionEn

  return (
    <div className="group relative bg-card rounded overflow-hidden border border-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {showCta && (
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary font-medium hover:underline transition-all"
          >
            {t.services.contactUs}
            <span className="ms-1 rtl:rotate-180">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  )
}
