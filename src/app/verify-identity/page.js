// app/verify-identity/page.jsx
import BankSelection from '../../components/BankSelection';

export default function VerifyIdentityPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto mb-10 max-w-3xl text-center'>
        <h1 className='mb-4 text-3xl font-bold'>
          تحقق من <span className='text-amex-blue'>هويتك</span>
        </h1>
        <p className='text-gray-300'>
          للمتابعة في طلبك، نحتاج إلى التحقق من هويتك. يرجى اختيار البنك الذي
          تتعامل معه للمتابعة في عملية التحقق الآمنة.
        </p>
      </div>

      <BankSelection />
    </div>
  );
}
