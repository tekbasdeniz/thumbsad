'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface WebinarRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
  lang?: 'tr' | 'en';
}

export default function WebinarRegisterModal({
  isOpen,
  onClose,
  programTitle,
  lang = 'tr',
}: WebinarRegisterModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Başlıkta "webinar" geçiyor mu VEYA webinar başlığı mı kontrolü
  const titleLower = programTitle.toLowerCase();
  const isWebinar =
    titleLower.includes('webinar') ||
    titleLower.includes('neleri kolaylaştırabilirsiniz') ||
    titleLower.includes('what can ai make easier');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_WEBINAR_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error('Script URL is not defined');
      }

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          marketingConsent,
          program: programTitle,
          language: lang,
        }),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        lang === 'en'
          ? 'An error occurred while registering. Please try again.'
          : 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setMarketingConsent(false);
    onClose();
  };

  const privacyUrl = lang === 'en' 
    ? '/en/policies/data-protection-privacy' 
    : '/policies/data-protection-privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                {isWebinar
                  ? lang === 'en' ? 'Free Webinar' : 'Ücretsiz Webinar'
                  : lang === 'en' ? 'Pre-Order Form' : 'Ön Talep Formu'}
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                {isWebinar
                  ? lang === 'en' ? 'Register for Free Webinar' : 'Ücretsiz Webinara Kaydol'
                  : lang === 'en' ? 'Leave Pre-Order Request' : 'Ön Talep Bırak'}
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-medium">{programTitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Full Name *' : 'Ad Soyad *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'en' ? 'e.g. John Doe' : 'Örn: Ahmet Yılmaz'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a246b] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Email Address *' : 'E-posta Adresi *'}
                </label>
                <input
                  type="email"
                  required
                  placeholder={lang === 'en' ? 'john@example.com' : 'ahmet@ornek.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a246b] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0a246b] focus:ring-[#0a246b]"
                />
                <label htmlFor="marketingConsent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                  {lang === 'en' ? (
                    <>
                      I have read the{' '}
                      <Link
                        href={privacyUrl}
                        target="_blank"
                        className="font-bold underline hover:text-[#0a246b]"
                      >
                        Privacy Notice
                      </Link>{' '}
                      regarding the processing of my personal data; I agree to receive emails from ThumbsAd regarding AI, marketing, and growth updates.
                    </>
                  ) : (
                    <>
                      Kişisel verilerimin işlenmesine ilişkin{' '}
                      <Link
                        href={privacyUrl}
                        target="_blank"
                        className="font-bold underline hover:text-[#0a246b]"
                      >
                        Aydınlatma Metni
                      </Link>
                      'ni okudum; ThumbsAd tarafından AI, pazarlama ve growth içerikleri hakkında tarafıma e-posta gönderilmesini kabul ediyorum.
                    </>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a246b] hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl transition-all text-sm mt-2 shadow-md disabled:opacity-50"
              >
                {isSubmitting
                  ? lang === 'en' ? 'Submitting...' : 'Kaydediliyor...'
                  : isWebinar
                  ? lang === 'en' ? 'Register for Free' : 'Ücretsiz Kaydol'
                  : lang === 'en' ? 'Submit Pre-Order' : 'Ön Talep Gönder'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              {lang === 'en' ? 'Registration Received!' : 'Kaydınız Alındı!'}
            </h3>

            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              {isWebinar
                ? lang === 'en'
                  ? 'We will send the access details for the Saturday, Oct 17 (12:00-13:00) webinar to your email address.'
                  : '17 Ekim 12.00-13.00 webinarının katılım bilgilerini e-posta adresinize göndereceğiz.'
                : lang === 'en'
                ? 'We will notify you via email as soon as new schedule dates are announced.'
                : 'Yeni tarih açıldığında e-posta adresinize bilgilendirme göndereceğiz.'}
            </p>

            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              {lang === 'en' ? 'Training Language is Turkish.' : 'Eğitim dili Türkçe\'dir.'}
            </span>

            <button
              onClick={handleClose}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-all text-sm mt-4 block"
            >
              {lang === 'en' ? 'Close' : 'Kapat'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}