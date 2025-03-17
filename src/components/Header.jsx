'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-amex-dark sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/amex.png'
            alt='American Express'
            width={300}
            height={80}
            className='h-20 w-auto'
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-6 md:flex'>
          <Link
            href='/'
            className='hover:text-amex-blue ml-6 text-white transition-colors'
          >
            الرئيسية
          </Link>
          <Link
            href='/#benefits'
            className='hover:text-amex-blue text-white transition-colors'
          >
            المميزات
          </Link>
          <Link href='/apply' className='btn-amex'>
            احصل على البطاقة
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='p-2 text-white md:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='bg-amex-dark-gray absolute z-50 w-full shadow-lg md:hidden'>
          <div className='container mx-auto px-4 py-4'>
            <nav className='flex flex-col space-y-4'>
              <Link
                href='/'
                className='hover:text-amex-blue text-white transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href='/#benefits'
                className='hover:text-amex-blue text-white transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                المميزات
              </Link>
              <Link
                href='/apply'
                className='btn-amex inline-block text-center'
                onClick={() => setMobileMenuOpen(false)}
              >
                احصل على البطاقة
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
