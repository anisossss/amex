// components/BenefitsSection.jsx
import {
  FaGift,
  FaPlaneDeparture,
  FaShieldAlt,
  FaHeadset,
  FaTags,
  FaShoppingBag
} from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'مكافآت سخية',
    description:
      'اكسب نقاط مكافآت على كل عملية شراء، وتمتع بإمكانية استبدالها بتذاكر طيران ورحلات فندقية.',
    icon: FaGift
  },
  {
    id: 2,
    title: 'دخول مجاني لصالات المطارات',
    description:
      'استمتع بالدخول إلى أكثر من 1,200 صالة مطار حول العالم بغض النظر عن درجة السفر.',
    icon: FaPlaneDeparture
  },
  {
    id: 3,
    title: 'تأمين سفر شامل',
    description:
      'احصل على تغطية تأمينية شاملة للسفر، بما في ذلك التأمين الطبي والتأمين ضد فقدان الأمتعة.',
    icon: FaShieldAlt
  },
  {
    id: 4,
    title: 'خدمة العملاء على مدار الساعة',
    description:
      'استمتع بخدمة عملاء متميزة على مدار الساعة طوال أيام الأسبوع لتلبية احتياجاتك.',
    icon: FaHeadset
  },
  {
    id: 5,
    title: 'عروض وخصومات حصرية',
    description:
      'احصل على عروض وخصومات حصرية لدى مجموعة واسعة من المتاجر والمطاعم والفنادق في قطر والخارج.',
    icon: FaTags
  },
  {
    id: 6,
    title: 'حماية المشتريات',
    description:
      'استمتع بحماية المشتريات ضد السرقة أو التلف لمدة تصل إلى 90 يومًا من تاريخ الشراء.',
    icon: FaShoppingBag
  }
];

export default function BenefitsSection() {
  return (
    <section id='benefits' className='bg-amex-dark-gray py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            مزايا <span className='text-amex-blue'>حصرية</span>
          </h2>
          <p className='mx-auto max-w-2xl text-gray-300'>
            استمتع بمجموعة من المزايا الحصرية مع بطاقة أمريكان إكسبريس
            البلاتينية في قطر
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className='bg-amex-dark hover:shadow-amex-glow rounded-xl p-6 shadow-lg transition-shadow duration-300'
              >
                <div className='flex items-start'>
                  <div className='bg-amex-blue/10 text-amex-blue mr-4 rounded-lg p-3'>
                    <IconComponent size={30} />
                  </div>

                  <div>
                    <h3 className='mb-2 text-xl font-bold'>{benefit.title}</h3>
                    <p className='text-gray-400'>{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
