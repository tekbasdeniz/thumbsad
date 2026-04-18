import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | ThumbsAd Nedir?',
  description: 'ThumbsAd, kurumsal markalar için yapay zeka destekli büyüme sistemleri geliştiren teknoloji odaklı bir partnerdir. Pazarlamayı veriye dayalı bir bilime dönüştürüyoruz.',
};

export default function AboutPageTr() {
  return (
    <main className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 py-24">
      <section className="max-w-4xl mx-auto rounded-3xl bg-gray-50 p-10 md:p-16 text-center flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
          Hakkımızda
        </h1>
        
        {/* What is ThumbsAd Section */}
        <div className="w-full mt-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ThumbsAd Nedir?</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            ThumbsAd, kurumsal markalar için yapay zeka destekli büyüme sistemleri geliştiren teknoloji odaklı bir partnerdir. Pazarlamayı sezgisel tahminlerden kurtarıp, veriye dayalı disiplinli bir bilime dönüştürüyoruz. İstanbul merkezli global bir teknoloji partneri olarak, ileri düzey yapay zeka teknolojilerini stratejik zekayla birleştirerek dijital büyümenin geleceğini inşa ediyoruz. Geleneksel ajansların aksine, biz sadece kampanya yönetmiyoruz; makine öğrenmesi algoritmaları ve ölçeklenebilir altyapılarla yatırım getirinizi (ROI) sürekli yukarı taşıyan kendi kendine öğrenen sistemler kuruyoruz.
          </p>
        </div>

        {/* Why ThumbsAd Section */}
        <div className="w-full mt-10 border-t border-gray-200 pt-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Neden ThumbsAd?</h2>
          
          <div className="space-y-8 max-w-3xl text-left w-full">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[#0a246b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">KPI Odaklı Yürütme</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Geliştirdiğimiz her teknik çerçeve, doğrudan temel iş hedeflerinizle eşleşir. Yüzeysel metrikleri bir kenara bırakıyor, en üst düzey KPI&apos;larınız tarafından yönetilen somut bir yürütme süreci sunuyoruz.
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
                <h3 className="text-2xl font-bold text-gray-800">Yapay Zeka Destekli Karar Sistemleri</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Altyapınıza ileri düzey karar alma katmanları entegre ediyoruz. Yapay zeka modellerimiz karmaşık değişkenleri gerçek zamanlı analiz ederek insan kaynaklı önyargıyı minimize eder ve maksimum operasyonel performans sağlar.
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
                <h3 className="text-2xl font-bold text-gray-800">İhtiyaca Özel Entegre Çözümler</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Genel geçer araçlara inanmıyoruz. Markanızın benzersiz teknik gereksinimlerine ve pazar dinamiklerine özel olarak tasarlanmış büyüme sistemleri inşa ediyoruz.
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
                <h3 className="text-2xl font-bold text-gray-800">Ölçülebilir Sonuçlar</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mt-2">
                  Mühendisliğimizin temelinde şeffaflık yatar. Yapılan her optimizasyon titiz verilerle desteklenir; böylece büyümeyi teorik bir kavramdan matematiksel olarak kanıtlanmış, tekrarlanabilir bir başarıya dönüştürüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
