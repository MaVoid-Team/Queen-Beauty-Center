'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'

const galleryImages = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'Bridal Makeup' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'Party Makeup' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'Hair Styling' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'Nail Art' },
]

export function GalleryPreviewSection() {
  const { t } = useLocale()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded border border-border"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-10">
          <Link
            href="/dresses"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded transition-all duration-300 hover:bg-primary/10 bg-transparent"
          >
            {t.gallery.viewMore}
            <span className="rtl:rotate-180">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
