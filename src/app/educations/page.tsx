import Link from 'next/link';
import { freeWebinar, openEducations, corporateEducations } from '../../data/educations';

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

        {/* 1. ÜCRETSİZ WEBİNAR KARTI (Tıklanabilir) */}
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

        {/* 2. GELECEK PROGRAMLAR (ÖN TALEP) */}
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

        {/* 3. KURUMSAL PROGRAMLAR */}
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