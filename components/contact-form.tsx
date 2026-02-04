'use client'

import { useActionState } from 'react'
import { useLocale } from './locale-provider'
import { submitContactForm } from '@/app/actions/contact'
import { services } from '@/data/services'
import { CheckCircle, AlertCircle, MessageCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
  const { locale, t } = useLocale()

  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: null,
  })

  return (
    <form action={formAction} className="space-y-6">
      {/* Success Message */}
      {state.success && !state.error && (
        <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded">
          <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-green-500 font-medium">
              {t.contactPage.form.success}
            </p>
            {state.whatsappLink && (
              <a
                href={state.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
              >
                <MessageCircle size={16} />
                {t.contactPage.form.whatsappRedirect}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded">
          <AlertCircle className="text-destructive shrink-0" size={20} />
          <p className="text-destructive">{state.error}</p>
        </div>
      )}

      {/* Honeypot field - hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contactPage.form.name} <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contactPage.form.phone} <span className="text-destructive">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          dir="ltr"
          className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contactPage.form.service} <span className="text-destructive">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 bg-input border border-border rounded text-foreground focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">{t.contactPage.form.selectService}</option>
          {services.map((service) => (
            <option key={service.id} value={locale === 'ar' ? service.nameAr : service.nameEn}>
              {locale === 'ar' ? service.nameAr : service.nameEn}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred Date */}
      <div>
        <label
          htmlFor="preferredDate"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contactPage.form.date}
        </label>
        <input
          type="datetime-local"
          id="preferredDate"
          name="preferredDate"
          className="w-full px-4 py-3 bg-input border border-border rounded text-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contactPage.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.contactPage.form.messagePlaceholder}
          className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded transition-all duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            {t.contactPage.form.submitting}
          </>
        ) : (
          t.contactPage.form.submit
        )}
      </button>
    </form>
  )
}
