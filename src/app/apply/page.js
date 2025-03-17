// app/apply/page.jsx
import ApplicationForm from '../../components/ApplicationForm';

export default function ApplyPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto mb-10 max-w-3xl text-center'>
        <h1 className='mb-4 text-3xl font-bold'>
          تقديم طلب{' '}
          <span className='text-amex-blue'>بطاقة أمريكان إكسبريس</span>
        </h1>
        <p className='text-gray-300'>
          املأ النموذج أدناه للتقدم بطلب للحصول على بطاقة أمريكان إكسبريس
          البلاتينية. سنقوم بمراجعة طلبك والرد عليك في أقرب وقت ممكن.
        </p>
      </div>

      <ApplicationForm />
    </div>
  );
}
