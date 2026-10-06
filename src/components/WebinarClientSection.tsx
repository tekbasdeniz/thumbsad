'use client';

import React, { useState } from 'react';
import WebinarRegisterModal from './WebinarRegisterModal';

interface WebinarClientSectionProps {
  educationType: string;
  educationTitle: string;
  lang?: 'tr' | 'en';
}

export default function WebinarClientSection({
  educationType,
  educationTitle,
  lang = 'tr',
}: WebinarClientSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFormType = educationType === 'webinar' || educationType === 'open';

  return (
    <>
      <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
        <div>
          <span className="font-bold text-gray-900 block text-lg">
            {lang === 'en' ? (
              educationType === 'webinar'
                ? 'Complete Your Free Registration'
                : educationType === 'corporate'
                ? 'Get a Corporate Quote'
                : 'Get Notified When Open'
            ) : (
              educationType === 'webinar'
                ? 'Ücretsiz Kaydınızı Tamamlayın'
                : educationType === 'corporate'
                ? 'Kurumsal Teklif Alın'
                : 'Açıldığında Haber Verelim'
            )}
          </span>
          <span className="text-sm text-gray-600">
            {lang === 'en' ? (
              educationType === 'webinar'
                ? 'Webinar access link for Saturday, October 17 (12:00-13:00) will be sent to your email.'
                : educationType === 'corporate'
                ? 'Contact us for tailored content and pricing for your team.'
                : 'We will reach out as soon as new dates are announced.'
            ) : (
              educationType === 'webinar'
                ? '17 Ekim Cumartesi 12:00-13:00 webinar katılım bağlantısı e-posta adresinize iletilecektir.'
                : educationType === 'corporate'
                ? 'Ekibinizin ihtiyaçlarına özel içerik ve fiyatlandırma için iletişime geçin.'
                : 'Yeni tarih açıldığında ilk sizinle iletişime geçelim.'
            )}
          </span>
        </div>

        {isFormType ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0a246b] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap"
          >
            {lang === 'en'
              ? educationType === 'webinar'
                ? 'Register for Free'
                : 'Notify Me'
              : educationType === 'webinar'
              ? 'Ücretsiz Kaydol'
              : 'Ön Talep Bırak'}
          </button>
        ) : (
          <a
            href={lang === 'en' ? '/en/contact' : '/contact'}
            className="bg-[#0a246b] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap"
          >
            {lang === 'en' ? 'Contact Us' : 'İletişime Geç'}
          </a>
        )}
      </div>

      <WebinarRegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programTitle={educationTitle}
        lang={lang}
      />
    </>
  );
}