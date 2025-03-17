// components/CtaSection.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className='bg-amex-dark-blue relative overflow-hidden py-16'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='/images/card-pattern.png'
          alt='Pattern'
          fill
          className='object-cover'
        />
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-3xl font-bold md:text-4xl'>
            استمتع بحياة أكثر تميزاً مع بطاقة أمريكان إكسبريس
          </h2>

          <p className='mb-8 text-xl text-gray-300'>
            احصل على بطاقتك اليوم واستمتع بمزايا حصرية تجعل حياتك أكثر راحة
            وتميزاً.
          </p>

          <div className='bg-amex-dark/60 mb-10 rounded-xl p-6 shadow-lg'>
            <div className='grid grid-cols-1 gap-6 text-left md:grid-cols-3'>
              <div className='flex items-center'>
                <div className='bg-amex-blue/20 mr-3 rounded-full p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 12L11 14L15 10'
                      stroke='#89B4FA'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle
                      cx='12'
                      cy='12'
                      r='9'
                      stroke='#89B4FA'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium'>بدون رسوم سنوية للسنة الأولى</p>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='bg-amex-blue/20 mr-3 rounded-full p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 12L11 14L15 10'
                      stroke='#89B4FA'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle
                      cx='12'
                      cy='12'
                      r='9'
                      stroke='#89B4FA'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium'>10,000 نقطة ترحيبية</p>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='bg-amex-blue/20 mr-3 rounded-full p-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 12L11 14L15 10'
                      stroke='#89B4FA'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle
                      cx='12'
                      cy='12'
                      r='9'
                      stroke='#89B4FA'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium'>حد ائتماني يصل إلى 100,000 ريال</p>
                </div>
              </div>
            </div>
          </div>

          <Link href='/apply' className='btn-amex-lg inline-block'>
            احصل على البطاقة الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
