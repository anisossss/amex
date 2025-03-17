import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='bg-amex-dark relative overflow-hidden text-white'>
      {/* Background gradient */}
      <div className='from-amex-dark via-amex-dark-blue to-amex-dark absolute inset-0 bg-gradient-to-br'></div>

      <div className='container relative z-10 mx-auto px-4 py-16 md:py-20'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='mb-10 md:mb-0 md:w-1/2'>
            <div className='max-w-lg'>
              <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                بطاقة أمريكان إكسبريس البلاتينية
                <span className='text-amex-blue mt-2 block'>
                  متوفرة الآن في قطر
                </span>
              </h1>

              <p className='mb-8 text-xl text-gray-300'>
                استمتع بمزايا حصرية وخدمات متميزة مع بطاقة أمريكان إكسبريس
                البلاتينية. تقدم الآن واحصل على البطاقة خلال 5 أيام عمل.
              </p>

              <div className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 rtl:space-x-reverse'>
                <Link href='/apply' className='btn-amex text-center'>
                  تقدم بطلبك الآن
                </Link>
                <Link
                  href='/#benefits'
                  className='btn-amex-outline text-center'
                >
                  تعرف على المزايا
                </Link>
              </div>

              <div className='mt-8 flex items-center'>
                <div className='flex -space-x-2 rtl:space-x-reverse'>
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className='border-amex-dark flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 bg-gray-200'
                    >
                      <Image
                        src={`/images/avatar-${num}.jpg`}
                        alt='Customer'
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div className='ms-3'>
                  <div className='mb-1 flex items-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className='h-5 w-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-sm text-gray-300'>
                    أكثر من 5000 عميل سعيد
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center md:w-1/3 md:justify-end'>
            <div className='relative'>
              {/* Card glow effect */}
              <div className='bg-amex-blue absolute -inset-4 rounded-xl opacity-30 blur-xl'></div>

              {/* Card image */}
              <div className='relative rotate-6 transform transition-transform duration-500 hover:rotate-0'>
                <Image
                  src='/images/amex.avif'
                  alt='American Express Platinum Card'
                  width={500}
                  height={253}
                  className='rounded-xl shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
