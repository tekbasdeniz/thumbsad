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
          Address: Esentepe Mah. Büyükdere Cad. NO:193/2 , 34394 , Şişli/İSTANBUL</p>
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
          <h3>1. Data Controller and Scope</h3>
          <p>Under the Law on the Protection of Personal Data No. 6698 (“KVKK”), your personal data is processed by Deniz Tekbaş | ThumbsAd (“ThumbsAd”) in its capacity as the data controller. TruOpt.ai is a product/service developed and provided by ThumbsAd; it is not a separate data controller.</p>
          <p>
            <strong>Tax Information:</strong> Tax ID: 8330788117 | Zincirlikuyu Tax Office<br/>
            <strong>Address:</strong> Esentepe Mah. Büyükdere Cad. No: 193/2, 34394 Şişli/Istanbul<br/>
            <strong>Email:</strong> <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a><br/>
            <strong>Phone:</strong> +90 212 955 00 63<br/>
            <strong>Websites:</strong> <a href="https://thumbsad.com" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://thumbsad.com</a> and <a href="https://truopt.ai" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://truopt.ai</a>
          </p>
          <p>This Privacy Notice covers personal data collected through the ThumbsAd and TruOpt.ai websites, ThumbsAd Insights community membership, newsletter and event registrations, TruOpt.ai product research, early access, demos, and similar contact forms.</p>

          <h3>2. Personal Data Processed</h3>
          <p>Depending on the relevant form and the information shared by the user, the following personal data may be processed:</p>
          <ul>
            <li><strong>Identification information:</strong> first and last name.</li>
            <li><strong>Contact information:</strong> email address and, if additionally shared by the user, phone number.</li>
            <li><strong>Request and product research information:</strong> organization/company type, advertising budget range, advertising platforms used, needs, issues, feature requests, and preferences regarding demos or early access.</li>
            <li><strong>Marketing and consent information:</strong> communication preference, consent status, date and time of consent, consent text version, and opt-out/unsubscribe records.</li>
            <li><strong>Transaction and source information:</strong> registration date and time, registration source, source page URL, and UTM source/medium/campaign information.</li>
            <li><strong>Communication records:</strong> requests, opinions, feedback, and correspondence sent to us.</li>
          </ul>

          <h3>3. Purposes of Processing Personal Data</h3>
          <ul>
            <li>Creating and managing ThumbsAd Insights community membership.</li>
            <li>Delivering AI, marketing, growth, and MarTech content; as well as announcements regarding events, live streams, and newsletters.</li>
            <li>Sending product/service information, special offers, early access, and demo invitations regarding ThumbsAd and its product, TruOpt.ai.</li>
            <li>Conducting TruOpt.ai product research; analyzing user needs, issues, and feature requests.</li>
            <li>Categorizing applications into groups such as “community,” “warm leads,” or “hot leads,” and determining the appropriate communication workflow.</li>
            <li>Preventing duplicate registrations, ensuring form and system security, resolving technical issues, and measuring process performance.</li>
            <li>Maintaining records of consents, opt-outs, and communication preferences; fulfilling legal obligations and protecting rights in the event of potential disputes.</li>
          </ul>

          <h3>4. Legal Grounds for the Processing of Personal Data</h3>
          <p>Your personal data may be processed based on the legal grounds set forth in Article 5 of the Personal Data Protection Law (KVKK), depending on the nature of the data processing activity, including explicit consent, the data controller’s fulfillment of its legal obligations, the establishment, exercise, or protection of a right, and the data controller’s legitimate interest, provided that such processing does not infringe upon your fundamental rights and freedoms. Marketing and commercial electronic communications are sent to the extent necessary, in accordance with the consent and explicit consent you have provided for commercial electronic communications.</p>

          <h3>5. Method of Collecting Personal Data</h3>
          <p>Your personal data is collected electronically through website forms, Google Forms or similar survey forms, email, event and live stream recordings, demo/early access applications, and automatic technical logs from these channels.</p>

          <h3>6. Transfer of Personal Data</h3>
          <p>Your personal data may be transferred, to the extent necessary and limited to the purposes stated above, to suppliers from whom we receive hosting, cloud storage, email delivery, form processing, analytics, customer relations, and technical support services; to legal, financial, and information technology consultants; and to public institutions and organizations authorized by law.</p>
          <p>In cases where service providers located abroad or storing data abroad are used, transfers are carried out in accordance with the conditions for cross-border transfers set forth in Article 9 of the Personal Data Protection Law (KVKK) and within the framework of appropriate safeguards.</p>

          <h3>7. Retention Period</h3>
          <p>Your personal data will be retained for as long as necessary to fulfill the purpose for which it was processed and within the legal retention periods stipulated by applicable legislation. If you withdraw your consent for communications or cancel your membership, marketing communications will cease; however, records of consent, opt-outs, and transactions may be retained on a limited basis for as long as necessary to fulfill legal obligations and to establish, exercise, or defend legal rights. At the end of these periods, the data will be deleted, destroyed, or anonymized.</p>

          <h3>8. Commercial Electronic Communication Preferences</h3>
          <p>You may withdraw your consent to receive commercial electronic communications at any time by using the unsubscribe link in the emails sent to you, by contacting <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a>, or, to the extent applicable, through the Message Management System (İYS). Withdrawal of consent does not affect the lawfulness of data processing activities carried out prior to the withdrawal.</p>

          <h3>9. Your Rights Under the KVKK</h3>
          <p>Under Article 11 of the KVKK, you have the following rights:</p>
          <ul>
            <li>To learn whether your personal data has been processed and, if so, to request information regarding such processing.</li>
            <li>To learn the purpose of the processing and whether the data is being used in accordance with that purpose.</li>
            <li>To learn the identities of third parties, both domestic and international, to whom your personal data has been transferred.</li>
            <li>To request the correction of incomplete or incorrectly processed data.</li>
            <li>To request the erasure or destruction of your data in accordance with the conditions set forth in the KVKK.</li>
            <li>To request that third parties to whom your data has been transferred be notified of any corrections, erasures, or destruction of your data.</li>
            <li>Objecting to a decision made solely through automated systems that results in a negative outcome for you.</li>
            <li>Request compensation for damages incurred due to unlawful processing.</li>
          </ul>

          <h3>10. Application Method</h3>
          <p>You may submit your requests under the KVKK, along with a written application that identifies you and explains your request, to the address Esentepe Mah. Büyükdere Cad. No: 193/2, 34394 Şişli/İstanbul, or via the email address you previously provided to the data controller and which is registered in our system, at <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a>. Requests will be processed as soon as possible, depending on the nature of the request, and no later than the timeframe stipulated by law.</p>

          <h3>11. Updates to This Policy</h3>
          <p>This Data Protection and Privacy Policy may be updated in response to changes in our personal data processing procedures or in applicable legislation. The current version is published at <a href="https://www.thumbsad.com/policies/data-protection-privacy" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://www.thumbsad.com/policies/data-protection-privacy</a>.</p>
          <p className="text-sm text-gray-500 font-medium mt-4">Version: 1.0 | Publication Date: August 14, 2026</p>
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
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 border-b pb-4">
          Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 md:mb-12 border-b pb-6">
          {policy.title}
        </h1>
        <div className="prose prose-lg text-gray-700 space-y-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2">
          {policy.content}
        </div>
      </div>
    </div>
  );
}
