'use server'

// In-memory storage for booking requests (would be replaced with a real DB in production)
const bookingRequests: BookingRequest[] = []

// Simple rate limiting map
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>()

interface BookingRequest {
  id: string
  name: string
  phone: string
  service: string
  preferredDate: string
  message: string
  createdAt: Date
}

interface ContactFormState {
  success: boolean
  error: string | null
  whatsappLink?: string
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check - if filled, it's likely a bot
  const honeypot = formData.get('website')
  if (honeypot) {
    // Silently reject spam
    return { success: true, error: null }
  }

  // Simple rate limiting simulation (by IP would be better in production)
  const clientId = 'client' // In production, use IP or session
  const now = Date.now()
  const rateLimit = rateLimitMap.get(clientId)

  if (rateLimit) {
    const timePassed = now - rateLimit.lastRequest
    if (timePassed < 60000 && rateLimit.count >= 5) {
      return {
        success: false,
        error: 'Too many requests. Please try again later.',
      }
    }
    if (timePassed < 60000) {
      rateLimit.count++
      rateLimit.lastRequest = now
    } else {
      rateLimit.count = 1
      rateLimit.lastRequest = now
    }
  } else {
    rateLimitMap.set(clientId, { count: 1, lastRequest: now })
  }

  // Get form data
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const preferredDate = formData.get('preferredDate') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || name.trim().length < 2) {
    return { success: false, error: 'الرجاء إدخال اسم صحيح' }
  }

  if (!phone || phone.trim().length < 8) {
    return { success: false, error: 'الرجاء إدخال رقم هاتف صحيح' }
  }

  if (!service) {
    return { success: false, error: 'الرجاء اختيار الخدمة' }
  }

  // Create booking request
  const bookingRequest: BookingRequest = {
    id: `booking-${Date.now()}`,
    name: name.trim(),
    phone: phone.trim(),
    service,
    preferredDate: preferredDate || '',
    message: message?.trim() || '',
    createdAt: new Date(),
  }

  // Store in memory (in production, save to database)
  bookingRequests.push(bookingRequest)

  // Generate WhatsApp deep link with prefilled message
  const whatsappMessage = encodeURIComponent(
    `مرحباً، أود حجز موعد\n` +
    `الاسم: ${name}\n` +
    `الهاتف: ${phone}\n` +
    `الخدمة: ${service}\n` +
    (preferredDate ? `التاريخ المفضل: ${preferredDate}\n` : '') +
    (message ? `ملاحظات: ${message}` : '')
  )
  const whatsappLink = `https://wa.me/966500000000?text=${whatsappMessage}`

  return {
    success: true,
    error: null,
    whatsappLink,
  }
}
