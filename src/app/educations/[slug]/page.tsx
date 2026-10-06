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

        <div>
          <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Eğitim Dili: {education.language}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {education.title.tr}
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed border-b border-gray-100 pb-8">
          {education.description.tr || education.shortDescription.tr}
        </p>

        {/* Hedef Kitle */}
        {education.targetAudience.tr && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Kimler İçin?</h2>
            <p className="text-gray-600">{education.targetAudience.tr}</p>
          </div>
        )}

        {/* Program Konuları */}
        {education.topics.tr.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Program Akışı ve Konular</h2>
            <ul className="space-y-3">
              {education.topics.tr.map((topic, index) => (
                <li key={index} className="flex items-start bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0a246b] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-800 font-medium">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cohortlar (Varsa) */}
        {education.cohorts && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Tarih Seçenekleri (Cohortlar)</h2>
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
                    className="w-full bg-[#0a246b] hover:bg-blue-900 text-white text-center font-bold py-3 rounded-xl transition-all text-sm block"
                  >
                    Bu Gruba Kaydol ({education.price} TL + KDV)
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form / İletişim / Webinar Kayıt Yönlendirmesi */}
        {!education.cohorts && (
          <WebinarClientSection
            educationType={education.type}
            educationTitle={education.title.tr}
          />
        )}
      </div>
    </div>
  );
}