"use client";

import { useState, useTransition, FormEvent, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface InsightsFormProps {
  lang?: "tr" | "en";
}

function InsightsFormContent({ lang }: InsightsFormProps) {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  
  const isEn = lang ? lang === "en" : pathname.startsWith("/en");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!consent) {
      setErrorMessage(
        isEn
          ? "Please accept the Privacy Notice to continue."
          : "Devam etmek için lütfen Aydınlatma Metni'ni onaylayın."
      );
      return;
    }

    const currentLang = isEn ? "EN" : "TR";

    const payload = {
      language: currentLang.toUpperCase(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      timestamp: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      utmSource: searchParams?.get("utm_source") || "direct",
      utmMedium: searchParams?.get("utm_medium") || "",
      utmCampaign: searchParams?.get("utm_campaign") || "",
      consentDate: new Date().toISOString(),
      consentVersion: isEn ? "v1.0-2026-EN" : "v1.0-2026-TR",
      channel: isEn ? "Email" : "E-posta",
      consentStatus: isEn ? "Approved" : "Onaylandı",
    };

    startTransition(async () => {
      try {
        const endpoint = process.env.NEXT_PUBLIC_INSIGHTS_SHEET_URL;

        if (!endpoint) {
          throw new Error("Endpoint URL is not defined");
        }

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        const resData = await response.json();
        console.log("InsightsForm response:", resData);

        setIsSubmitted(true);
      } catch (err) {
        console.error("InsightsForm submission error:", err);
        setErrorMessage(
          isEn
            ? "Submission failed. Please try again later."
            : "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
        );
      }
    });
  };

  const privacyPolicyUrl = isEn ? "/en/policies/data-protection-privacy" : "/policies/data-protection-privacy";

  return (
    <div
      id="topluluga-katil"
      className="scroll-mt-24 w-full max-w-4xl mx-auto px-6 py-10 my-8 bg-gradient-to-br from-blue-50/70 via-white to-gray-50 rounded-3xl border border-blue-100/80 shadow-xl shadow-blue-900/5 transition-all"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-6 px-4 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shadow-inner">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {isEn ? "Welcome to ThumbsAd Insights!" : "ThumbsAd Insights'a Hoş Geldiniz!"}
          </h3>
          <p className="text-gray-600 max-w-lg text-lg font-light leading-relaxed">
            {isEn
              ? "Your registration was successful. Welcome to ThumbsAd Insights!"
              : "Kaydınız başarıyla alındı. ThumbsAd Insights topluluğuna hoş geldiniz."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a246b] tracking-tight">
              {isEn ? "Join the ThumbsAd Insights Community" : "ThumbsAd Insights Topluluğuna Katılın"}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-light">
              {isEn
                ? "Get exclusive AI, growth strategies, and enterprise digital updates straight to your inbox."
                : "Yapay zeka, büyüme stratejileri ve kurumsal dijital dönüşüm içeriklerini e-postanızda alın."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ad Soyad */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="fullName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {isEn ? "Full Name *" : "Ad Soyad *"}
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={isEn ? "John Doe" : "Adınız Soyadınız"}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[#0a246b] focus:ring-2 focus:ring-[#0a246b]/20 outline-none transition text-gray-900 text-sm placeholder:text-gray-400"
              />
            </div>

            {/* E-posta */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {isEn ? "Email Address *" : "E-posta Adresi *"}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isEn ? "john@company.com" : "eposta@sirket.com"}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[#0a246b] focus:ring-2 focus:ring-[#0a246b]/20 outline-none transition text-gray-900 text-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Single Opt-in Checkbox */}
          <div className="flex flex-col space-y-2 pt-1">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0a246b] focus:ring-[#0a246b] transition cursor-pointer"
              />
              <span className="text-xs md:text-sm text-gray-600 leading-relaxed select-none">
                {isEn ? (
                  <>
                    I have read the{" "}
                    <Link
                      href={privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a246b] font-semibold underline hover:text-blue-800 transition"
                    >
                      Privacy Notice
                    </Link>{" "}
                    regarding the processing of my personal data; I agree to receive emails from ThumbsAd regarding AI, marketing, and growth updates.
                  </>
                ) : (
                  <>
                    Kişisel verilerimin işlenmesine ilişkin{" "}
                    <Link
                      href={privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a246b] font-semibold underline hover:text-blue-800 transition"
                    >
                      Aydınlatma Metni
                    </Link>
                    ’ni okudum; ThumbsAd tarafından AI, pazarlama ve growth içerikleri hakkında tarafıma e-posta gönderilmesini kabul ediyorum.
                  </>
                )}
              </span>
            </label>
            {errorMessage && (
              <p className="text-xs text-red-600 font-medium pl-7">{errorMessage}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              disabled={isPending}
              className="w-full md:w-auto px-8 py-3.5 bg-[#0a246b] hover:bg-[#081c54] text-white font-semibold text-sm md:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 flex items-center justify-center space-x-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{isEn ? "Sending..." : "Gönderiliyor..."}</span>
                </>
              ) : (
                <span>{isEn ? "Join the Community" : "Topluluğa Katıl"}</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function InsightsForm({ lang }: InsightsFormProps) {
  return (
    <Suspense
      fallback={
        <div
          id="topluluga-katil"
          className="scroll-mt-24 w-full max-w-4xl mx-auto px-6 py-10 my-8 bg-gray-50 rounded-3xl border border-gray-100 min-h-[220px] flex items-center justify-center"
        >
          <div className="animate-pulse text-sm text-gray-400">Loading form...</div>
        </div>
      }
    >
      <InsightsFormContent lang={lang} />
    </Suspense>
  );
}
