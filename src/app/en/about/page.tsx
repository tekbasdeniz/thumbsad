import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | What is ThumbsAd',
  description: 'ThumbsAd is a technology-driven growth partner building AI-powered systems for enterprise brands. We transform marketing into a data-driven science.',
};

export default function AboutPageEn() {
  return (
    <main className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-24">
      <section className="max-w-4xl mx-auto rounded-3xl bg-gray-50 p-10 md:p-16 text-center flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
          About Us
        </h1>
        
        {/* What is ThumbsAd Section */}
        <div className="w-full mt-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is ThumbsAd?</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            ThumbsAd is a technology-driven growth partner building AI-powered systems for enterprise brands. We transform marketing from intuitive guesswork into a rigorous, data-driven science. Based in Istanbul and operating globally, we specialize in blending advanced AI technologies with strategic intelligence to build the future of digital expansion. Unlike traditional agencies, we don&apos;t just manage campaigns; we engineer self-learning systems that constantly elevate your ROI through machine learning algorithms and scalable architectures.
          </p>
        </div>

        {/* Why ThumbsAd Section */}
        <div className="w-full mt-10 border-t border-gray-200 pt-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why ThumbsAd?</h2>
          
          <div className="space-y-8 max-w-3xl text-left w-full">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[#0a246b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">KPI-Driven Execution</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Every technical framework we develop is mapped directly to your core business goals. We replace vanity metrics with concrete execution driven by your high-level KPIs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[#0a246b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">AI-Powered Decision Systems</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  We integrate advanced decision-making layers into your infrastructure. Our AI models analyze complex variables in real-time, minimizing human bias and ensuring peak operational performance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[#0a246b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Tailor-Made Solutions</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  We don&apos;t believe in generic tools. We engineer growth systems that are specifically designed to fit your brand&apos;s unique technical requirements and market dynamics.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[#0a246b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Measurable Results</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Transparency is the foundation of our engineering. Every optimization is backed by rigorous data, turning growth into a mathematically validated and repeatable success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
