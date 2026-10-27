import { allEducations } from '../../../data/educations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import WebinarClientSection from '../../../components/WebinarClientSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EducationDetailPageTR({ params }: Props) {
  const { slug } = await params;
  
  const education = allEducations.find((e) => e.slug === slug);

  if (!education) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-8 sm:p-10 border border-gray-100 space-y-8">
        <Link
          href="/educations"
          className="text-sm font-semibold text-gray-500 hover:text-[#0a246b] transition-colors inline-block"
        >
          ← Tüm Eğitimlere Dön
        </Link>

        {/* 1. AFİŞ GÖRSELİ */}
        {education.image && (
          <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-gray-50">
            <img
              src={education.image}
              alt={education.title.tr}
              className="w-full h-auto object-contain"
            />
          </div>
        )}

        {/* 2. BAŞLIK, ALT BAŞLIK & EĞİTMEN BİLGİSİ */}
        <div className="space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Eğitim Dili: {education.language}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
              {education.title.tr}
            </h1>
            {education.shortDescription?.tr && (
              <p className="text-lg font-medium text-gray-700 mt-2">
                {education.shortDescription.tr}
              </p>
            )}
          </div>

          {/* Eğitmen Kartı */}
          {education.instructor && (
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3 w-full sm:w-fit">
              <div className="w-10 h-10 rounded-full bg-[#0a246b] text-white flex items-center justify-center font-bold text-sm shrink-0">
                DT
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Eğitmen / Konuşmacı</p>
                <p className="text-base font-bold text-gray-900">{education.instructor.name}</p>
                <p className="text-xs text-blue-600 font-medium">{education.instructor.title.tr}</p>
              </div>
            </div>
          )}
        </div>

        {/* Eğitim Açıklaması */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed border-b border-gray-100 pb-8">
          {education.description.tr || education.shortDescription.tr}
        </p>

        {/* Kimler Katılmalı? */}
        {education.targetAudience?.tr && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Kimler Katılmalı?</h2>
            <p className="text-gray-600 leading-relaxed">{education.targetAudience.tr}</p>
          </div>
        )}

        {/* Program Akışı ve Konular */}
        {education.topics?.tr && education.topics.tr.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Eğitim Programı</h2>
            <ul className="space-y-3">
              {education.topics.tr.map((topic, index) => {
                const isBreakOrQA = topic.startsWith('Ara') || topic.startsWith('Değerlendirme');
                return (
                  <li
                    key={index}
                    className={`flex items-start p-4 rounded-2xl border ${
                      isBreakOrQA
                        ? 'bg-blue-50/50 border-blue-100 text-blue-900 font-semibold'
                        : 'bg-gray-50 border-gray-100 text-gray-800 font-medium'
                    }`}
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0a246b] mt-2 mr-3" />
                    <span className="leading-relaxed">{topic}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Eğitim Sonunda Neler Kazanacaksınız? */}
        {education.outcomes?.tr && education.outcomes.tr.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Eğitim Sonunda Neler Kazanacaksınız?</h2>
            <ul className="grid grid-cols-1 gap-3">
              {education.outcomes.tr.map((outcome, index) => {
                const isBonus = outcome.startsWith('Bonus:');
                return (
                  <li
                    key={index}
                    className={`flex items-start p-4 rounded-2xl border ${
                      isBonus
                        ? 'bg-amber-50/60 border-amber-200 text-amber-950 font-semibold'
                        : 'bg-gray-50 border-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-emerald-600 font-bold mr-3 shrink-0">✓</span>
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Cohortlar / Tarih ve Ücret */}
        {education.cohorts && (
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Tarih ve Ücret</h2>
              <p className="text-sm text-gray-600 mt-1">
                Her iki tarih aynı eğitimin alternatif oturumlarıdır. Yalnızca bir tarih seçilmesi yeterlidir.
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">
                Süre: {education.duration.tr} | Ücret: {education.price} TL + KDV
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.cohorts.map((cohort) => (
                <div key={cohort.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{cohort.name.tr}</h3>
                    <p className="text-sm text-gray-600 mt-2">📅 {cohort.date.tr}</p>
                    <p className="text-sm text-blue-600 font-medium">⏰ {cohort.time.tr}</p>
                  </div>
                  <a
                    href={cohort.paytrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0a246b] hover:bg-blue-900 text-white text-center font-bold py-3 rounded-xl transition-all text-sm block shadow-sm"
                  >
                    Bu Gruba Kaydol ({education.price} TL + KDV)
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Webinar Tamamlandı Bilgilendirmesi / Kayıt Formu */}
        {education.status === 'completed' ? (
          <div className="pt-6 border-t border-gray-100">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center sm:text-left">
              <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                Bu Etkinlik Tamamlandı
              </span>
              <p className="text-gray-900 font-semibold text-base sm:text-lg">
                Bu webinar 24 Ekim 2026 tarihinde tamamlanmıştır.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Gelecek canlı yayın ve etkinlik duyuruları için web sitemizi takip edebilir ve topluluğumuza kaydolabilirsiniz.
              </p>
            </div>
          </div>
        ) : (
          !education.cohorts && (
            <WebinarClientSection
              educationType={education.type}
              educationTitle={education.title.tr}
            />
          )
        )}
      </div>
    </div>
  );
}