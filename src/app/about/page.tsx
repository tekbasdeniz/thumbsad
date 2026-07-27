import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | ThumbsAd - AI Growth Partner',
  description: 'ThumbsAd, kurumsal şirketlerin büyümesini hızlandırmak için yapay zekâ, pazarlama, otomasyon ve dijital dönüşümü tek çatı altında tasarlayan, uygulayan ve hayata geçiren bir AI Growth Partner’dır.',
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPageTr() {
  const pillars = [
    {
      title: "Growth Consulting",
      desc: "Sadece yüzeysel metriklere odaklanmıyor, markanızın ticari geleceğini inşa ediyoruz. GTM pazar giriş stratejinizden dijital mimarinizin optimizasyonuna kadar tüm süreçleri uçtan uca tasarlıyoruz. Veriye dayalı büyüme stratejileri ve optimize edilmiş funnel yapıları kurarak, en üst düzey KPI hedeflerinizle doğrudan eşleşen, somut ve sürdürülebilir bir yürütme süreci sunuyoruz."
    },
    {
      title: "İhtiyaca Özel Entegre Çözümler",
      desc: "Genel geçer araçlara veya tek tipleştirilmiş eğitimlere inanmıyoruz. Markanızın benzersiz teknik gereksinimlerine ve pazar dinamiklerine özel büyüme sistemleri inşa ediyoruz. Bu sistemlerin sürdürülebilirliği için; yönetim kadrosu başta olmak üzere Pazarlama, Satış, Medikal ve İK gibi kritik departmanlarınızı üst düzey yönetim dinamikleriyle donatıyor, organizasyonel gelişimi bütünsel olarak destekliyoruz."
    },
    {
      title: "Yapay Zeka Destekli Yapısal Dönüşüm",
      desc: "Altyapınıza ileri düzey karar alma katmanları entegre ediyor, şirketleri uçtan uca geleceğe hazırlıyoruz. AI Workshop süreçlerimizle başlayan yolculukta, markanıza özel AI Roadmap ve kullanım senaryolarını belirliyoruz. Süreci sadece teoride bırakmıyor; Pazarlama, Satış, Medikal ve İK gibi departman bazlı AI dönüşüm projelerini hayata geçirerek, karmaşık değişkenleri gerçek zamanlı analiz eden ve insan kaynaklı önyargıyı minimize eden yüksek performanslı sistemler kuruyoruz."
    },
    {
      title: "Akıllı Otomasyon ve Eğitim Odaklı Sonuçlar",
      desc: "Bizim için Google Ads, Meta, SEO veya CRO gibi araçlar tek başına ana işi temsil etmez; bunlar bütünsel bir ekosistemin parçalarıdır. Odağımıza şeffaflığı, akıllı otomasyonları ve iç ekiplerinize hız ile verimlilik kazandıran stratejik AI eğitimlerini alıyoruz. Eğitim süreçlerimizi sadece teoride bırakmıyor; sonunda ekip bazlı detaylı bir ihtiyaç analizi gerçekleştiriyoruz. Ortaya çıkan ihtiyaçların iş hacmini belirleyerek, bunları özel bir önceliklendirme matrisine göre sıralıyoruz. En yüksek katma değerli AI projesinin kapsamını netleştirip, şirket içi dinamiklerinizle tam uyumlu bir biçimde hayata geçiriyoruz. Böylece büyümeyi, kararların veriye ve sistemlere dayandığı, ölçülebilir bir başarıya dönüştürüyoruz."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="space-y-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            ThumbsAd Nedir?
          </h1>
        </div>

        {/* Intro Detailed Overview */}
        <div className="space-y-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-16 border-b border-gray-200 pb-12 text-center">
          <p>
            <strong className="font-semibold text-gray-900">ThumbsAd</strong>, kurumsal şirketlerin büyümesini hızlandırmak için yapay zekâ, pazarlama, otomasyon ve dijital dönüşümü tek çatı altında tasarlayan, uygulayan ve hayata geçiren bir <span className="font-medium text-[#0a246b]">AI Growth Partner’dır</span>.
          </p>
          <p>
            Pazarlamayı sezgisel tahminlerin ötesine taşıyarak veriye, sistemlere ve teknolojiye dayalı disiplinli bir bilime dönüştürüyoruz. Geleneksel ajans kalıplarını yıkarak; sadece kampanya yönetmekle kalmıyor, şirketlerin büyümesini sağlayacak yapay zekâ, dijital pazarlama, otomasyon ve teknoloji projelerini uçtan uca tasarlıyor, uyguluyor ve ölçekliyoruz.
          </p>
          <p>
            Stratejik pazar giriş modellerinden (GTM) esnek dijital mimarilere, yönetim kadrolarına yönelik üst düzey eğitimlerden departman bazlı AI dönüşüm projelerine kadar tüm süreçleri bütünsel bir ekosistem olarak kurguluyoruz.
          </p>
          <p className="text-gray-800 font-normal">
            İstanbul merkezli global bir teknoloji partneri olarak, iç ekiplerinize hız ve verimlilik kazandıran akıllı otomasyonları altyapınıza entegre ediyor; büyümeyi matematiksel olarak kanıtlanmış, sürdürülebilir bir kurumsal başarıya dönüştürüyoruz.
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
