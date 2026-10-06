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
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link 
          href="/en/educations" 
          className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back to All Programmes
        </Link>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Training Language: Turkish
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {education.title.en}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {education.shortDescription.en}
            </p>
          </div>

          {/* Details / Description */}
          <div className="space-y-6 pt-4 border-t border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Who is this for?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{education.targetAudience.en}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Programme Outline & Topics</h2>
              <ul className="space-y-2">
                {education.topics.en.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
    </div>
  );
}