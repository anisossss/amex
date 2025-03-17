// components/FeatureCards.jsx
import Image from 'next/image';

export default function FeatureCards() {
  return (
    <section className='bg-amex-dark py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Card 1 */}
          <div className='from-amex-dark-gray to-amex-dark-blue rounded-xl bg-gradient-to-br p-6 shadow-lg'>
            <div className='mb-4 flex justify-center'>
              <div className='bg-amex-blue/20 rounded-full p-4'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 8V12L14.5 14.5'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75H5.25V12Z'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <h3 className='mb-2 text-center text-xl font-bold text-white'>
              طلب سريع
            </h3>
            <p className='text-center text-gray-300'>
              إجراءات طلب سهلة وسريعة، مع توصيل البطاقة في غضون 5 أيام عمل فقط.
            </p>
          </div>

          {/* Card 2 */}
          <div className='from-amex-dark-gray to-amex-dark-blue rounded-xl bg-gradient-to-br p-6 shadow-lg'>
            <div className='mb-4 flex justify-center'>
              <div className='bg-amex-blue/20 rounded-full p-4'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 11L12 14L20 6'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.9473 4 13.864 4.18106 14.7071 4.51858'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <h3 className='mb-2 text-center text-xl font-bold text-white'>
              قبول عالمي
            </h3>
            <p className='text-center text-gray-300'>
              استخدم بطاقتك في أكثر من 40 مليون مكان حول العالم بدون رسوم
              إضافية.
            </p>
          </div>

          {/* Card 3 */}
          <div className='from-amex-dark-gray to-amex-dark-blue rounded-xl bg-gradient-to-br p-6 shadow-lg'>
            <div className='mb-4 flex justify-center'>
              <div className='bg-amex-blue/20 rounded-full p-4'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 12H12M15 12H12M12 12V9M12 12V15'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z'
                    stroke='#89B4FA'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <h3 className='mb-2 text-center text-xl font-bold text-white'>
              دعم متميز
            </h3>
            <p className='text-center text-gray-300'>
              خدمة عملاء شخصية متاحة 24/7 بعدة لغات لتلبية احتياجاتك الفورية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
