import React from "react";

export default async function PolicyPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const policies: Record<string, { title: string; content: React.ReactNode }> = {
    "cookie-policy": {
      title: "Cookie Policy",
      content: (
        <>
          <p><strong>Last Updated: January 15, 2026</strong></p>
          <p>When you visit our website, we utilize cookies to enhance your user experience, personalize content, and execute our AI-driven analytics and marketing processes.</p>
          <h3>1. What is a Cookie?</h3>
          <p>A cookie is a small data file that a website places on your browser or device to remember your preferences and actions over time.</p>
          <h3>2. Types of Cookies We Use</h3>
          <p><strong>Essential Cookies:</strong> These are strictly necessary for the operation of the website, including security protocols and session management.</p>
          <p><strong>Analytics & Performance Cookies:</strong> We use tools like Google Analytics 4 (GA4) to measure site traffic and understand user behavior to improve our AI models.</p>
          <p><strong>Marketing & Targeting Cookies:</strong> These include third-party tags such as the Meta Pixel and LinkedIn Insight Tag to deliver relevant ads and measure campaign performance.</p>
          <h3>3. How Can You Manage Cookie Preferences?</h3>
          <p>You can change your cookie settings or delete existing cookies through your browser settings at any time. However, please note that disabling cookies may affect the functionality of certain features on our website.</p>
          <h3>4. Third-Party Data & Privacy</h3>
          <p>Your cookie data is processed solely for anonymous analysis and performance optimization. We do not share personally identifiable information (PII) for marketing purposes without your explicit consent.</p>
        </>
      )
    },
    "privacy-policy": {
      title: "Privacy Policy",
      content: (
        <>
          <p><strong>Last Updated: January 15, 2026</strong></p>
          <p>At ThumbsAd (“we,” “us,” “our”), we are committed to protecting the privacy of our users. This Privacy Policy explains the information we collect through our websites, how this information is processed, and how it is secured.</p>
          <h3>1. What Data Do We Collect?</h3>
          <p><strong>Contact Information:</strong> Name, surname, email address, phone number.<br/>
          <strong>Technical Data:</strong> IP address, browser information, device type.<br/>
          <strong>Usage Data:</strong> On-site behavior, visit duration, and page view information.</p>
          <h3>2. How Do We Use Your Data?</h3>
          <ul>
            <li>To provide services and deliver customer support.</li>
            <li>To send campaigns, notifications, and newsletters (only with your explicit consent).</li>
            <li>To improve the website experience and optimize our digital services.</li>
          </ul>
          <h3>3. Sharing and Third Parties</h3>
          <p>Your data is shared only with hosting service providers, email service infrastructure, and relevant authorities when required by law. We do not sell your data to third parties.</p>
          <h3>4. Your Rights</h3>
          <p>Under the Personal Data Protection Law (KVKK) and applicable data protection regulations, you have the right to access, correct, delete, and object to the processing of your personal data. You can submit your requests to <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a>.</p>
          <p><strong>Data Controller:</strong><br/>
          Deniz Tekbaş | ThumbsAd<br/>
          Tax ID: 8330788117 | Zincirlikuyu Tax Office<br/>
          Address: Esentepe Mah. Büyükdere Cad. Loft Residence No:201/40 Şişli/İstanbul, Turkey</p>
        </>
      )
    },
    "terms-of-use": {
      title: "Terms of Use",
      content: (
        <>
          <p>By accessing and using this website, you agree to be bound by the following Terms of Use.</p>
          <h3>1. Intellectual Property & Brand Usage</h3>
          <p>All content contained on this site (including text, visuals, software, AI models, and code) is the exclusive property of ThumbsAd. Any reproduction, distribution, or commercial use without prior written permission is strictly prohibited.</p>
          <h3>2. Disclaimer</h3>
          <p>The information provided on this platform is for general informational purposes only. It does not constitute professional investment, medical, or legal advice.</p>
          <h3>3. Prohibited Use</h3>
          <p>Access may be restricted or terminated for users found using our website for spam, illegal activities, technical violations, or unauthorized data scraping.</p>
          <h3>4. Dispute Resolution</h3>
          <p>For any disputes arising from these terms, the Courts and Enforcement Offices of Istanbul (Şişli) shall have exclusive jurisdiction.</p>
        </>
      )
    },
    "data-protection-privacy": {
      title: "Data Protection & Privacy",
      content: (
        <>
          <p><strong>Data Controller:</strong> ThumbsAd – Deniz Tekbaş</p>
          <p>Pursuant to the Law on the Protection of Personal Data No. 6698 (“KVKK”) and the General Data Protection Regulation (“GDPR”), your personal data is processed by us as the data controller within the scope explained below.</p>
          <h3>1. Processed Data Categories</h3>
          <p><strong>Identity & Contact Info:</strong> Name, surname, email address, phone number.<br/>
          <strong>Transaction Security:</strong> IP address, session logs, and traffic data.</p>
          <h3>2. Purposes of Processing</h3>
          <ul>
            <li>Provision and execution of website services.</li>
            <li>Sending campaign, newsletter, and informational messages (based on explicit consent).</li>
            <li>Post-service support, invoicing, and legal compliance.</li>
          </ul>
          <h3>3. Data Sharing & Transfer</h3>
          <p>Your data is shared strictly with server/hosting providers, email service infrastructures, and relevant legal authorities when required by law, in accordance with KVKK and GDPR transfer regulations.</p>
          <h3>4. Your Rights (KVKK & GDPR)</h3>
          <ul>
            <li>Right to access and rectification of your data.</li>
            <li>Right to restrict or object to processing.</li>
            <li>Right to erasure (“Right to be forgotten”).</li>
            <li>Right to data portability.</li>
          </ul>
          <p>You can submit all your requests regarding your personal data and rights under KVKK/GDPR to <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a>.</p>
        </>
      )
    },
    "disclaimer": {
      title: "Disclaimer",
      content: (
        <>
          <p>All content provided on our website, regarding our agency and products, is for general informational purposes only.</p>
          <h3>1. No Warranties or Guarantees</h3>
          <p>All content is provided on an “as is” basis. ThumbsAd makes no representations or warranties regarding specific results, success, or conversion rates derived from the use of our insights.</p>
          <h3>2. Third-Party Content</h3>
          <p>ThumbsAd assumes no responsibility for the content, accuracy, or practices of any third-party websites linked to or referenced herein.</p>
          <h3>3. User Responsibility</h3>
          <p>By using our website, you acknowledge and agree to these terms. Any reliance you place on such information is strictly at your own risk.</p>
        </>
      )
    },
    "copyright-trademark-notice": {
      title: "Copyright & Trademark Notice",
      content: (
        <>
          <p>All intellectual property rights regarding the content on this website belong exclusively to <strong>ThumbsAd</strong>. The <strong>TruOpt.ai</strong> brand is a proprietary digital product developed within the ThumbsAd ecosystem.</p>
          <p>Legal action will be initiated against unauthorized sharing, reproduction, or commercial use of any content.</p>
          <ul>
            <li>Protected under the Law on Intellectual and Artistic Works No. 5846 and applicable international copyright laws.</li>
            <li>Trademark registration applications have been filed, and legal enforcement processes are actively monitored.</li>
          </ul>
          <p><strong>© 2025 ThumbsAd – All rights reserved.</strong></p>
        </>
      )
    }
  };

  const policy = policies[slug];
  
  if (!policy) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 border-b pb-4">
          Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 py-32">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-12 border-b pb-6">
          {policy.title}
        </h1>
        <div className="prose prose-lg text-gray-700 space-y-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2">
          {policy.content}
        </div>
      </div>
    </div>
  );
}
