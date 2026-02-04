export type Locale = 'ar' | 'en'

export const defaultLocale: Locale = 'ar'
export const locales: Locale[] = ['ar', 'en']

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      dresses: 'معرض الفساتين',
      contact: 'تواصلي معنا',
    },
    // Hero
    hero: {
      headline: 'أتيليه وبيوتي سنتر الملڰة',
      subheadline: 'وجهتك المثالية للجمال والأناقة',
      description: 'نقدّم لكِ تجربة فاخرة في عالم التجميل والأزياء، بأيدي خبيرات متخصصات وأجواء راقية تليق بك.',
      bookNow: 'احجزي الآن',
      whatsapp: 'واتساب',
    },
    // About
    about: {
      title: 'من نحن',
      description: 'في أتيليه وبيوتي سنتر الملڰة، نؤمن بأن كل امرأة تستحق أن تشعر بالجمال والتميّز. نوفّر لكِ خدمات تجميل شاملة وفساتين راقية بإشراف فريق محترف يهتم بأدق التفاصيل.',
    },
    // Services
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدّم لكِ مجموعة متكاملة من خدمات التجميل والعناية',
      viewAll: 'عرض جميع الخدمات',
      contactUs: 'تواصلي معنا',
    },
    // Features
    features: {
      title: 'لماذا تختارينا',
      experience: {
        title: 'خبرة واسعة',
        description: 'سنوات من الخبرة في مجال التجميل والأزياء',
      },
      quality: {
        title: 'جودة عالية',
        description: 'نستخدم أفضل المنتجات والمستحضرات العالمية',
      },
      team: {
        title: 'فريق متخصص',
        description: 'خبيرات محترفات في جميع مجالات التجميل',
      },
      atmosphere: {
        title: 'أجواء راقية',
        description: 'بيئة مريحة وفاخرة تليق بك',
      },
    },
    // Gallery
    gallery: {
      title: 'من أعمالنا',
      subtitle: 'لمحة من إبداعاتنا في التجميل والأزياء',
      viewMore: 'عرض المزيد',
    },
    // Testimonials
    testimonials: {
      title: 'آراء عملائنا',
      subtitle: 'ثقتكم تسعدنا',
    },
    // CTA
    cta: {
      title: 'هل أنتِ مستعدة لتجربة فريدة؟',
      subtitle: 'احجزي موعدك الآن واستمتعي بأفضل خدمات التجميل',
      bookNow: 'احجزي الآن',
      whatsapp: 'تواصلي عبر واتساب',
      call: 'اتصلي بنا',
    },
    // Footer
    footer: {
      description: 'وجهتك المثالية للجمال والأناقة في عالم التجميل والأزياء',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات التواصل',
      followUs: 'تابعينا',
      rights: 'جميع الحقوق محفوظة',
      phone: 'الهاتف',
      address: 'العنوان',
    },
    // Services Page
    servicesPage: {
      title: 'خدماتنا',
      subtitle: 'اكتشفي مجموعتنا الكاملة من خدمات التجميل والعناية',
    },
    // Dresses Page
    dressesPage: {
      title: 'معرض الفساتين',
      subtitle: 'تشكيلة راقية من الفساتين والأزياء',
      viewOnly: 'للعرض فقط',
    },
    // Contact Page
    contactPage: {
      title: 'تواصلي معنا',
      subtitle: 'نسعد بخدمتك والرد على استفساراتك',
      form: {
        name: 'الاسم الكامل',
        phone: 'رقم الهاتف / واتساب',
        service: 'الخدمة المطلوبة',
        selectService: 'اختاري الخدمة',
        date: 'التاريخ والوقت المفضل',
        message: 'رسالتك',
        messagePlaceholder: 'اكتبي رسالتك هنا...',
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        success: 'تم إرسال طلبك بنجاح! سنتواصل معكِ قريباً.',
        error: 'حدث خطأ، يرجى المحاولة مرة أخرى.',
        whatsappRedirect: 'أو تواصلي عبر واتساب مباشرة',
      },
      info: {
        title: 'معلومات التواصل',
        hours: 'ساعات العمل',
        hoursValue: 'يومياً من 10 صباحاً - 10 مساءً',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      dresses: 'Dresses Gallery',
      contact: 'Contact Us',
    },
    // Hero
    hero: {
      headline: 'Al-Malika Atelier & Beauty Center',
      subheadline: 'Your Perfect Destination for Beauty & Elegance',
      description: 'We offer you a luxurious experience in the world of beauty and fashion, with expert specialists and an elegant atmosphere worthy of you.',
      bookNow: 'Book Now',
      whatsapp: 'WhatsApp',
    },
    // About
    about: {
      title: 'About Us',
      description: 'At Al-Malika Atelier & Beauty Center, we believe every woman deserves to feel beautiful and special. We provide comprehensive beauty services and elegant dresses supervised by a professional team that cares about every detail.',
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'We offer a complete range of beauty and care services',
      viewAll: 'View All Services',
      contactUs: 'Contact Us',
    },
    // Features
    features: {
      title: 'Why Choose Us',
      experience: {
        title: 'Extensive Experience',
        description: 'Years of experience in beauty and fashion',
      },
      quality: {
        title: 'Premium Quality',
        description: 'We use the finest international products',
      },
      team: {
        title: 'Expert Team',
        description: 'Professional specialists in all beauty fields',
      },
      atmosphere: {
        title: 'Luxurious Atmosphere',
        description: 'A comfortable and elegant environment worthy of you',
      },
    },
    // Gallery
    gallery: {
      title: 'Our Work',
      subtitle: 'A glimpse of our creations in beauty and fashion',
      viewMore: 'View More',
    },
    // Testimonials
    testimonials: {
      title: 'Client Reviews',
      subtitle: 'Your trust makes us happy',
    },
    // CTA
    cta: {
      title: 'Ready for a Unique Experience?',
      subtitle: 'Book your appointment now and enjoy the finest beauty services',
      bookNow: 'Book Now',
      whatsapp: 'Contact via WhatsApp',
      call: 'Call Us',
    },
    // Footer
    footer: {
      description: 'Your perfect destination for beauty and elegance in the world of cosmetics and fashion',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All Rights Reserved',
      phone: 'Phone',
      address: 'Address',
    },
    // Services Page
    servicesPage: {
      title: 'Our Services',
      subtitle: 'Discover our complete range of beauty and care services',
    },
    // Dresses Page
    dressesPage: {
      title: 'Dresses Gallery',
      subtitle: 'An elegant collection of dresses and fashion',
      viewOnly: 'View Only',
    },
    // Contact Page
    contactPage: {
      title: 'Contact Us',
      subtitle: 'We are happy to serve you and answer your inquiries',
      form: {
        name: 'Full Name',
        phone: 'Phone / WhatsApp',
        service: 'Required Service',
        selectService: 'Select a service',
        date: 'Preferred Date & Time',
        message: 'Your Message',
        messagePlaceholder: 'Write your message here...',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        success: 'Your request has been sent successfully! We will contact you soon.',
        error: 'An error occurred, please try again.',
        whatsappRedirect: 'Or contact us directly via WhatsApp',
      },
      info: {
        title: 'Contact Information',
        hours: 'Working Hours',
        hoursValue: 'Daily from 10 AM - 10 PM',
      },
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
