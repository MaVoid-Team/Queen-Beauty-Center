'use client'

import Image from 'next/image'
import { useLocale } from './locale-provider'
import type { Dress } from '@/data/dresses'

interface DressCardProps {
  dress: Dress
}

export function DressCard({ dress }: DressCardProps) {
  const { locale } = useLocale()

  const category = locale === 'ar' ? dress.categoryAr : dress.categoryEn

  return (
    <div className="group relative overflow-hidden rounded border border-border transition-all duration-300 hover:border-primary/50">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={dress.image || "/placeholder.svg"}
          alt={category}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Category Badge */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1.5 bg-primary/90 text-primary-foreground text-sm font-medium rounded">
          {category}
        </span>
      </div>
    </div>
  )
}
