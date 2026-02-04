'use client'

import Link from 'next/link'
import { useLocale } from './locale-provider'
import { Phone, MapPin, Facebook } from 'lucide-react'

export function Footer() {
  const { locale, t } = useLocale()

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/dresses', label: t.nav.dresses },
    { href: '/contact', label: t.nav.contact },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              {locale === 'ar' ? 'أتيليه وبيوتي سنتر الملڰة' : 'Al-Malika Atelier & Beauty Center'}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t.footer.quickLinks}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+966500000000"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={18} className="text-primary shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {locale === 'ar' 
                    ? 'المملكة العربية السعودية' 
                    : 'Saudi Arabia'}
                </span>
              </div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Facebook size={18} className="text-primary shrink-0" />
                <span>{t.footer.followUs}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear}{' '}
            {locale === 'ar' ? 'أتيليه وبيوتي سنتر الملڰة' : 'Al-Malika Atelier & Beauty Center'}.{' '}
            {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
