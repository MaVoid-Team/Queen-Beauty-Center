export interface Service {
  id: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  image: string
}

export const services: Service[] = [
  {
    id: 'bridal-makeup',
    nameAr: 'ميكاب عرايس',
    nameEn: 'Bridal Makeup',
    descriptionAr: 'ميكاب احترافي لإطلالة ساحرة في يومك المميز',
    descriptionEn: 'Professional makeup for a stunning look on your special day',
    image: '/images/services/bridal-makeup.jpg',
  },
  {
    id: 'hair-styling',
    nameAr: 'تسريحات شعر',
    nameEn: 'Hair Styling',
    descriptionAr: 'تسريحات عصرية وكلاسيكية تناسب جميع المناسبات',
    descriptionEn: 'Modern and classic hairstyles for all occasions',
    image: '/images/services/hair-styling.jpg',
  },
  {
    id: 'skincare',
    nameAr: 'عناية بالبشرة',
    nameEn: 'Skincare',
    descriptionAr: 'علاجات متخصصة لبشرة نضرة ومشرقة',
    descriptionEn: 'Specialized treatments for radiant and glowing skin',
    image: '/images/services/skincare.jpg',
  },
  {
    id: 'nails',
    nameAr: 'أظافر',
    nameEn: 'Nails',
    descriptionAr: 'مانيكير وبديكير مع أحدث صيحات طلاء الأظافر',
    descriptionEn: 'Manicure and pedicure with the latest nail polish trends',
    image: '/images/services/nails.jpg',
  },
  {
    id: 'lashes',
    nameAr: 'رموش',
    nameEn: 'Lashes',
    descriptionAr: 'تركيب رموش طبيعية وفاخرة لإطلالة جذابة',
    descriptionEn: 'Natural and luxurious lash extensions for an attractive look',
    image: '/images/services/lashes.jpg',
  },
  {
    id: 'eyebrows',
    nameAr: 'حواجب',
    nameEn: 'Eyebrows',
    descriptionAr: 'تشكيل وتنظيف وصبغ الحواجب باحترافية',
    descriptionEn: 'Professional eyebrow shaping, cleaning, and tinting',
    image: '/images/services/eyebrows.jpg',
  },
  {
    id: 'henna',
    nameAr: 'حناء',
    nameEn: 'Henna',
    descriptionAr: 'نقوش حناء فنية للأيدي والأقدام',
    descriptionEn: 'Artistic henna designs for hands and feet',
    image: '/images/services/henna.jpg',
  },
  {
    id: 'party-makeup',
    nameAr: 'ميكاب سهرات',
    nameEn: 'Party Makeup',
    descriptionAr: 'ميكاب أنيق للحفلات والمناسبات الخاصة',
    descriptionEn: 'Elegant makeup for parties and special occasions',
    image: '/images/services/party-makeup.jpg',
  },
]
