import Link from "next/link";
import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";


export default function HomePageTr() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full min-h-[85vh] flex items-center justify-center bg-white px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight">
            AI Growth Partner
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light">
            Yapay zeka destekli büyüme projeleri, dijital sistemler ve ölçeklenebilir pazarlama yapıları tasarlar ve uygular.
          </p>
          <div className="flex flex-col gap-4 mt-8 w-full max-w-md mx-auto">
            <a
              href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-full bg-[#0a246b] text-white font-semibold hover:bg-[#0a246b]/90 hover:shadow-lg transition-all flex items-center justify-center gap-3 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              AI Büyüme Analizi Talep Et
            </a>
            <p className="text-xs text-gray-400 mt-2">
              *Doğrudan takvimimizden randevu alın. Toplantı bağlantısını içeren anında bir onay alacaksınız.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="w-full py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-black">Yapımız</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Büyüme stratejisi, yapay zeka sistemleri ve uygulamayı bir araya getiren proje odaklı yapı.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Daha fazlasını keşfedin &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="w-full py-24 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-black">
                Çözümler
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Büyüme, dijital uygulama ve dönüşüm için yapay zeka destekli çözümler.
              </p>
              <div className="pt-4">
                <Link
                  href="/solutions"
                  className="px-6 py-3 rounded-full bg-[#0a246b] text-white font-medium hover:bg-[#0a246b]/90 transition-all inline-flex"
                >
                  Tüm Çözümler
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Yapay Zeka Büyüme Projeleri",
                "Performans Pazarlama",
                "Kreatif & İçerik Operasyonları",
                "Kampanya Yapıları",
                "Otomasyon",
                "Stratejik Uygulama"
              ].map((item) => (
                <div key={item} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-center font-medium text-gray-800 hover:shadow-md transition-all text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Preview */}
      <ExperiencesMarquee />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
