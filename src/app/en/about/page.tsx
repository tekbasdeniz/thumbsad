import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ThumbsAd - AI Growth Partner',
  description: 'ThumbsAd is an AI Growth Partner that designs, implements, and scales artificial intelligence, marketing, automation, and digital transformation solutions under one unified ecosystem to accelerate the growth of enterprise companies.',
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPageEn() {
  const pillars = [
    {
      title: "Growth Consulting",
      desc: "We don't focus solely on surface-level metrics—we build the commercial future of your business. From your Go-to-Market (GTM) strategy to optimizing your digital architecture, we design every stage of your growth journey from end to end. By building data-driven growth strategies and optimized conversion funnels, we deliver an execution framework that directly aligns with your highest-priority business KPIs, ensuring measurable and sustainable growth."
    },
    {
      title: "Tailored Integrated Solutions",
      desc: "We don't believe in one-size-fits-all tools or standardized training programs. Instead, we build customized growth systems tailored to your organization's unique technical requirements and market dynamics. To ensure long-term sustainability, we equip your executive leadership as well as critical departments—including Marketing, Sales, Medical Affairs, and Human Resources—with advanced management capabilities, enabling organization-wide transformation and continuous growth."
    },
    {
      title: "AI-Powered Organizational Transformation",
      desc: "We integrate advanced decision-making capabilities into your infrastructure, preparing your organization for the future through end-to-end AI transformation. The journey begins with our AI Workshops, where we define a customized AI roadmap and identify the most valuable AI use cases for your business. But we don't stop at strategy. We implement department-specific AI transformation initiatives across Marketing, Sales, Medical Affairs, and Human Resources, building high-performance systems capable of analyzing complex variables in real time while minimizing human bias in decision-making."
    },
    {
      title: "Intelligent Automation & Education-Driven Outcomes",
      desc: "For us, platforms such as Google Ads, Meta, SEO, or CRO are not the core business—they are simply components of a much larger growth ecosystem. Our true focus lies in transparency, intelligent automation, and strategic AI education that empowers your internal teams with greater speed, efficiency, and long-term capability. Our training programs extend far beyond theory. At the end of each engagement, we conduct a comprehensive team-based needs assessment to identify organizational opportunities. We evaluate the resulting requirements based on their business impact and prioritize them using a proprietary prioritization framework. Finally, we define the scope of the highest-value AI initiative and implement it in full alignment with your company's internal structure and operational dynamics. This approach transforms growth into a measurable, sustainable success driven by data, intelligent systems, and informed decision-making."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            What is ThumbsAd?
          </h1>
        </div>

        {/* Intro Detailed Overview */}
        <div className="space-y-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-16 border-b border-gray-200 pb-12 text-center">
          <p>
            <strong className="font-semibold text-gray-900">ThumbsAd</strong> is an <span className="font-medium text-[#0a246b]">AI Growth Partner</span> that designs, implements, and scales artificial intelligence, marketing, automation, and digital transformation solutions under one unified ecosystem to accelerate the growth of enterprise companies.
          </p>
          <p>
            We move marketing beyond intuition and guesswork, transforming it into a disciplined, data-driven science powered by technology and intelligent systems. Rather than operating as a traditional marketing agency, we go beyond campaign management by designing, implementing, and scaling end-to-end AI, digital marketing, automation, and technology initiatives that drive measurable business growth.
          </p>
          <p>
            From strategic Go-to-Market (GTM) models and flexible digital architectures to executive-level training programs and department-specific AI transformation initiatives, we build every process as part of an integrated growth ecosystem.
          </p>
          <p className="text-gray-800 font-normal">
            Headquartered in Istanbul and serving companies globally, we integrate intelligent automation into your existing infrastructure, empowering your internal teams with greater speed, efficiency, and operational excellence while turning growth into a measurable, sustainable business outcome.
          </p>
        </div>

        {/* Why ThumbsAd Section */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 pb-4 border-b border-gray-200 text-center">
            Why ThumbsAd
          </h2>

          <ul className="space-y-10">
            {pillars.map((pillar, idx) => (
              <li key={idx} className="flex items-start space-x-4 sm:space-x-5 text-left">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 text-[#0a246b] flex items-center justify-center border border-blue-100 mt-1">
                  <CheckIcon />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}
