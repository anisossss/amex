// app/success/page.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='bg-amex-dark-gray mx-auto max-w-2xl rounded-lg p-8 text-center shadow-lg'>
        <div className='mb-6'>
          <div className='bg-amex-blue/20 mx-auto flex h-20 w-20 items-center justify-center rounded-full'>
            <svg
              className='text-amex-blue h-12 w-12'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
          </div>
        </div>

        <h1 className='mb-4 text-3xl font-bold'>تم استلام طلبك بنجاح!</h1>

        <p className='mb-6 text-gray-300'>
          شكراً لتقديم طلب الحصول على بطاقة أمريكان إكسبريس البلاتينية. تمت
          مراجعة طلبك بنجاح وتمت الموافقة عليه مبدئياً.
        </p>

        <div className='bg-amex-dark/50 mb-8 rounded-lg p-6'>
          <h3 className='text-amex-blue mb-4 text-xl font-bold'>
            الخطوات التالية
          </h3>

          <div className='space-y-4 text-left'>
            <div className='flex'>
              <div className='mr-4 flex-shrink-0'>
                <div className='bg-amex-blue flex h-8 w-8 items-center justify-center rounded-full text-white'>
                  1
                </div>
              </div>
              <div>
                <p className='text-white'>
                  سيتواصل معك فريقنا خلال 24-48 ساعة للتأكيد على التفاصيل.
                </p>
              </div>
            </div>

            <div className='flex'>
              <div className='mr-4 flex-shrink-0'>
                <div className='bg-amex-blue flex h-8 w-8 items-center justify-center rounded-full text-white'>
                  2
                </div>
              </div>
              <div>
                <p className='text-white'>
                  سيتم توصيل البطاقة إلى العنوان المحدد خلال 5 أيام عمل.
                </p>
              </div>
            </div>

            <div className='flex'>
              <div className='mr-4 flex-shrink-0'>
                <div className='bg-amex-blue flex h-8 w-8 items-center justify-center rounded-full text-white'>
                  3
                </div>
              </div>
              <div>
                <p className='text-white'>
                  بعد استلام البطاقة، قم بتفعيلها عبر الاتصال بالرقم المرفق
                  معها.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 rtl:space-x-reverse'>
          <Link href='/' className='btn-amex'>
            العودة للصفحة الرئيسية
          </Link>

          <button className='btn-amex-outline'>تنزيل ملخص الطلب (PDF)</button>
        </div>
      </div>
    </div>
  );
}
