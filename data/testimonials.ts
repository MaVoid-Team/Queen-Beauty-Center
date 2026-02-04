export interface Testimonial {
  id: string
  nameAr: string
  nameEn: string
  textAr: string
  textEn: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    nameAr: 'سارة أحمد',
    nameEn: 'Sarah Ahmed',
    textAr: 'تجربة رائعة! الميكاب كان مثالياً في يوم زفافي. أنصح الجميع بزيارتهم.',
    textEn: 'Wonderful experience! The makeup was perfect on my wedding day. I recommend everyone to visit them.',
  },
  {
    id: '2',
    nameAr: 'نورة محمد',
    nameEn: 'Noura Mohammed',
    textAr: 'خدمة ممتازة وفريق محترف. أشعر دائماً بالراحة والثقة عند زيارتي لهم.',
    textEn: 'Excellent service and professional team. I always feel comfortable and confident when visiting them.',
  },
  {
    id: '3',
    nameAr: 'فاطمة علي',
    nameEn: 'Fatima Ali',
    textAr: 'الفساتين راقية جداً والاختيارات متنوعة. وجدت فستان أحلامي هنا.',
    textEn: 'The dresses are very elegant and the choices are diverse. I found my dream dress here.',
  },
  {
    id: '4',
    nameAr: 'مريم خالد',
    nameEn: 'Mariam Khalid',
    textAr: 'أفضل بيوتي سنتر زرته. الاهتمام بالتفاصيل والنظافة على أعلى مستوى.',
    textEn: 'Best beauty center I have visited. Attention to detail and cleanliness are at the highest level.',
  },
]
