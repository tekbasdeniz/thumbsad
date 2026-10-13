import Link from 'next/link';
import { freeWebinar, activeWorkshop, openEducations, corporateEducations } from '../../data/educations';

export default function EducationsPageTR() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold uppercase tracking-wider">
            Eğitim Dili: Türkçe
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            AI ile İşinizi ve Ekibinizi Geliştirin
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed">
            Günlük iş akışlarından pazarlama ve satışa uzanan canlı eğitimlerle yapay zekâyı işinizde stratejiden uygulamaya dönüştürün.
          </p>
        </div>

        {/* 1. ÜCRETSİZ WEBİNAR KARTI */}
        <Link 
          href={`/educations/${freeWebinar.slug}`}
          className="block bg-[#0a246b] text-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 border border-white/20 text-xs font-bold rounded-md uppercase tracking-wider">
                  Ücretsiz Canlı Webinar
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 border border-white/20 text-xs font-bold rounded-md uppercase tracking-wider">
                  Eğitim Dili: {freeWebinar.language}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-200 transition-colors">
                {freeWebinar.title.tr}
              </h2>
              <p className="text-blue-100/90 max-w-2xl text-base leading-relaxed">
                {freeWebinar.shortDescription.tr}
              </p>
              <div className="flex flex-wrap gap-6 pt-2 text-sm text-blue-200 font-medium">
                <span>📅 {freeWebinar.date?.tr}</span>
                <span>⏰ {freeWebinar.time?.tr}</span>
              </div>
            </div>
            <span className="w-full lg:w-auto text-center bg-white text-[#0a246b] group-hover:bg-blue-50 font-bold px-8 py-3.5 rounded-2xl transition-all shadow-md whitespace-nowrap">
              Detaylı İncele ve Kaydol →
            </span>
          </div>
        </Link>

        {/* 2. AKTİF İLK EĞİTİM (WORKSHOP & COHORTS) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Aktif Programlar
            </h2>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
              İlk Eğitime Özel Fiyat
            </span>
          </div>

          <div className="bg-white border-2 border-blue-600/20 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-blue-600/40 transition-all">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {activeWorkshop.duration.tr}
                  </span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    Canlı Workshop
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Dili: {activeWorkshop.language}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                  {activeWorkshop.title.tr}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeWorkshop.shortDescription.tr}
                </p>

                {/* Eğitmen Etiketi */}
                {activeWorkshop.instructor && (
                  <div className="flex items-center gap-2 pt-1 text-sm text-gray-700">
                    <span className="text-gray-500 font-medium">Eğitmen:</span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">
                      {activeWorkshop.instructor.name}
                    </span>
                    <span className="text-xs text-blue-600 font-semibold hidden sm:inline">
                      ({activeWorkshop.instructor.title.tr})
                    </span>
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-2xl font-black text-[#0a246b]">
                    {activeWorkshop.price} TL <span className="text-xs font-semibold text-gray-500">+ KDV</span>
                  </span>
                </div>
              </div>

              {/* Cohort Seçim & Detay Butonları */}
              <div className="w-full lg:w-80 flex flex-col justify-between space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Grup (Cohort) Seçeneğinizi Belirleyin:
                </span>
                
                <div className="space-y-2">
                  {activeWorkshop.cohorts?.map((cohort) => (
                    <div key={cohort.id} className="p-3 bg-white rounded-xl border border-gray-200 text-xs space-y-1">
                      <div className="font-bold text-gray-900 flex justify-between">
                        <span>{cohort.name.tr}</span>
                        <span className="text-blue-700 font-extrabold">20 Kişilik Kontenjan</span>
                      </div>
                      <div className="text-gray-600">📅 {cohort.date.tr}</div>
                      <div className="text-gray-500">⏰ {cohort.time.tr}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/educations/${activeWorkshop.slug}`}
                  className="w-full text-center bg-[#0a246b] hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-md block"
                >
                  Gruba Katıl & Detayları Gör →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. GELECEK PROGRAMLAR (ÖN TALEP) */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Gelecek Programlar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openEducations.map((item) => (
              <Link 
                key={item.id} 
                href={`/educations/${item.slug}`}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {item.duration.tr}
                    </span>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      Ön Talep
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Dili: {item.language}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#0a246b] transition-colors">{item.title.tr}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.shortDescription.tr}</p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-end">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
                    Açıldığında Haber Ver →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. KURUMSAL PROGRAMLAR */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Kurumsal Eğitim Programları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateEducations.map((item) => (
              <Link 
                key={item.id} 
                href={`/educations/${item.slug}`}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1 rounded-full inline-block">
                      Kurumsal • {item.duration.tr}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                      Dili: {item.language}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#0a246b] transition-colors">{item.title.tr}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.shortDescription.tr}</p>
                </div>
                
                <span className="w-full text-center border border-gray-200 group-hover:bg-[#0a246b] group-hover:text-white group-hover:border-[#0a246b] text-gray-800 font-semibold py-2.5 rounded-2xl transition-all text-sm mt-6 block">
                  Kurumsal Teklif Al
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}