'use client'

import { useLocale } from '@/components/locale-provider'
import { ContactForm } from '@/components/contact-form'
import { Phone, MessageCircle, MapPin, Clock, Facebook } from 'lucide-react'

export default function ContactPage() {
  const { locale, t } = useLocale()

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
              {t.contactPage.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              {t.contactPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:ps-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t.contactPage.info.title}
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+966500000000"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t.footer.phone}
                    </h3>
                    <p className="text-muted-foreground text-sm" dir="ltr">
                      +966 50 000 0000
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
                    </h3>
                    <p className="text-muted-foreground text-sm" dir="ltr">
                      +966 50 000 0000
                    </p>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t.contactPage.info.hours}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t.contactPage.info.hoursValue}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t.footer.address}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {locale === 'ar' 
                        ? 'المملكة العربية السعودية' 
                        : 'Saudi Arabia'}
                    </p>
                  </div>
                </div>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Facebook size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Facebook
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t.footer.followUs}
                    </p>
                  </div>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-card border border-border rounded overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <MapPin size={32} className="opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
