import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allEducations } from '../../../../data/educations';
import WebinarClientSection from '../../../../components/WebinarClientSection';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return allEducations.map((edu) => ({
    slug: edu.slug,
  }));
}

export default async function EducationDetailPageEN({ params }: Props) {
  const { slug } = await params;
  const education = allEducations.find((item) => item.slug === slug);

  if (!education) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-8 sm:p-10 border border-gray-100 space-y-8">
        
        {/* Back Link (TR ile Birebir Aynı Hizada) */}
        <Link 
          href="/en/educations" 
          className="text-sm font-semibold text-gray-500 hover:text-[#0a246b] transition-colors inline-block"
        >
          ← Back to All Programmes
        </Link>

        {/* 1. POSTER BANNER (Full width & uncropped) */}
        {education.image && (
          <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-gray-50">
            <img
              src={education.image}
              alt={education.title.en}
              className="w-full h-auto object-contain"
            />
          </div>
        )}

        {/* 2. TITLE & INSTRUCTOR INFO */}
        <div className="space-y-4">
          <div>
            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Training Language: {education.language}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
              {education.title.en}
            </h1>
          </div>

          {/* Instructor Card */}
          {education.instructor && (
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3 w-full sm:w-fit">
              <div className="w-10 h-10 rounded-full bg-[#0a246b] text-white flex items-center justify-center font-bold text-sm shrink-0">
                DT
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Instructor / Speaker</p>
                <p className="text-base font-bold text-gray-900">{education.instructor.name}</p>
                <p className="text-xs text-blue-600 font-medium">{education.instructor.title.en}</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-lg text-gray-600 leading-relaxed border-b border-gray-100 pb-8">
          {education.description.en || education.shortDescription.en}
        </p>

        {/* Who is this for? */}
        {education.targetAudience?.en && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Who is this for?</h2>
            <p className="text-gray-600">{education.targetAudience.en}</p>
          </div>
        )}

        {/* Programme Outline & Topics */}
        {education.topics?.en && education.topics.en.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Programme Outline & Topics</h2>
            <ul className="space-y-3">
              {education.topics.en.map((topic, index) => (
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

        {/* Cohort List */}
        {education.cohorts && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Cohort Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.cohorts.map((cohort) => (
                <div key={cohort.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{cohort.name.en}</h3>
                    <p className="text-sm text-gray-600 mt-2">📅 {cohort.date.en}</p>
                    <p className="text-sm text-blue-600 font-medium">⏰ {cohort.time.en}</p>
                  </div>
                  <a
                    href={cohort.paytrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0a246b] hover:bg-blue-900 text-white text-center font-bold py-3 rounded-xl transition-all text-sm block"
                  >
                    Register for this Cohort ({education.price} TRY + VAT)
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Webinar / Open Client Section CTA */}
        {!education.cohorts && (
          <WebinarClientSection
            educationType={education.type}
            educationTitle={education.title.en}
            lang="en"
          />
        )}

      </div>
    </div>
  );
}