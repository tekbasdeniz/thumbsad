"use client";

import { usePathname } from "next/navigation";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0a246b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export interface AboutDetailProps {
  lang?: "tr" | "en";
}

const contentTR = {
  section1: {
    title: "ThumbsAd Nedir?",
    paragraphs: [
      "ThumbsAd, yapay zeka, büyüme stratejisi ve teknoloji uygulamalarını bir araya getirerek kuruluşların dijital dönüşümünü hızlandıran bir Yapay Zeka Büyüme ve Dönüşüm Ortağıdır.",
      "Stratejiden uygulamaya uzanan bütüncül yaklaşımıyla şirketlerin sürdürülebilir büyümesine katkıda bulunur. Geleneksel ajans ve danışmanlık modellerinin ötesine geçerek, kuruluşların iç dinamikleriyle bütünleşen uçtan uca çözümler sunar."
    ]
  },
  section2: {
    title: "Neye İnanıyoruz",
    slogan: "Yapay zeka, ancak ölçülebilir bir iş etkisi yarattığında değerlidir.",
    body: "Teknolojiyi bir amaç olarak değil, doğru kullanıldığında büyümeyi hızlandıran stratejik bir araç olarak görüyoruz. Buna paralel olarak, geliştirdiğimiz her sistemin, ekiplere zaman kazandıran ve iş sonuçlarına doğrudan etki eden somut sonuçlar üretmesini sağlamaya öncelik veriyoruz."
  },
  section3: {
    title: "Neden ThumbsAd?",
    intro: "Yapay zeka stratejisinden uygulamaya kadar tüm süreci tek çatı altında yönetiyoruz. Parça parça çözümler yerine, strateji ve teknolojiyi aynı masada bir araya getiren entegre bir ortaklık sunuyoruz.",
    items: [
      {
        title: "Yapay Zeka Öncelikli Yaklaşım:",
        desc: "Yapay zekayı ve verileri tüm süreçlerin merkezine yerleştirerek, karar verme sürecini sezgisel tahminlerin ötesine taşıyoruz. Akıllı sistemlerle iç iş akışlarını güçlendirerek operasyonel verimliliği artırıyoruz."
      },
      {
        title: "Strateji + Uygulama:",
        desc: "Planlama aşamasında kalmıyoruz; uçtan uca uygulama yoluyla büyüme stratejilerini hayata geçiriyoruz. Yol haritasını belirlediğimiz projelerin teknik kurulumunu ve entegrasyonunu bizzat üstleniyoruz."
      },
      {
        title: "Çevik Teslimat:",
        desc: "İhtiyaçlara ve teknolojik gelişmelere hızla uyum sağlayan çevik bir çalışma modeli sunuyoruz. Değişen gereksinimlere hızlı bir şekilde yanıt vererek, projelerin gecikme olmadan hayata geçirilmesini sağlıyoruz."
      },
      {
        title: "Ölçülebilir Büyüme:",
        desc: "Şirketlerin temel hedefleriyle doğrudan uyumlu, somut ve ölçülebilir büyüme sonuçlarına odaklanıyoruz. Takip ettiğimiz metriklerin, kuruluşun gerçek başarı kriterleriyle tam olarak uyumlu olmasını sağlıyoruz."
      },
      {
        title: "Kurumsal Zihniyet:",
        desc: "Kurumsal dinamikler ve altyapıyla tam uyumlu, ölçeklenebilir ve sürdürülebilir sistemler kuruyoruz. Her aşamada güvenliği, veri gizliliğini ve departmanlar arası uyumu önceliklendiriyoruz."
      },
      {
        title: "İnovasyon:",
        desc: "En yeni yapay zeka ve otomasyon teknolojilerini kurumsal iş akışlarına entegre ediyoruz. Ekiplerinizi yeni nesil araçlarla donatarak, sektörünüzdeki rekabet avantajınızın sürdürülebilir olmasını sağlıyoruz."
      }
    ]
  }
};

const contentEN = {
  section1: {
    title: "What Is ThumbsAd?",
    paragraphs: [
      "ThumbsAd is an AI Growth & Transformation Partner that accelerates organizations’ digital transformation by combining artificial intelligence, growth strategy, and technology applications.",
      "With its holistic approach—spanning from strategy to implementation—it contributes to companies’ sustainable growth. Going beyond traditional agency and consulting models, it delivers end-to-end solutions that integrate with organizations’ internal dynamics."
    ]
  },
  section2: {
    title: "What We Believe",
    slogan: "Artificial intelligence is valuable only when it creates a measurable business impact.",
    body: "We view technology not as an end in itself, but as a strategic tool that accelerates growth when used correctly. In line with this, we prioritize ensuring that every system we develop produces tangible outcomes that save teams time and directly impact business results."
  },
  section3: {
    title: "Why ThumbsAd?",
    intro: "We manage the entire process—from AI strategy to implementation—under one roof. Instead of piecemeal solutions, we offer an integrated partnership that brings strategy and technology together at the same table.",
    items: [
      {
        title: "AI-First Approach:",
        desc: "By placing artificial intelligence and data at the center of all processes, we take decision-making beyond intuitive guesswork. We enhance operational efficiency by empowering internal workflows with intelligent systems."
      },
      {
        title: "Strategy + Execution:",
        desc: "We don’t stop at the planning stage—we bring growth strategies to life through end-to-end implementation. We personally handle the technical setup and integration of the projects for which we’ve mapped out the roadmap."
      },
      {
        title: "Agile Delivery:",
        desc: "We offer an agile working model that quickly adapts to needs and technological advancements. By taking swift action in response to changing requirements, we ensure projects are brought to life without delay."
      },
      {
        title: "Measurable Growth:",
        desc: "We focus on concrete and measurable growth outcomes that directly align with companies’ core objectives. We ensure that the metrics we track are fully aligned with the organization’s true success criteria."
      },
      {
        title: "Enterprise Mindset:",
        desc: "We build scalable and sustainable systems that are fully compatible with corporate dynamics and infrastructure. We prioritize security, data privacy, and cross-departmental alignment at every stage."
      },
      {
        title: "Innovation:",
        desc: "We integrate the latest artificial intelligence and automation technologies into corporate workflows. By equipping your teams with next-generation tools, we ensure your competitive edge in your industry remains sustainable."
      }
    ]
  }
};

const AboutDetail = ({ lang }: AboutDetailProps = {}) => {
  const pathname = usePathname() || "";
  const activeLang = lang || (pathname.startsWith("/en") ? "en" : "tr");
  const isEn = activeLang === "en";
  const c = isEn ? contentEN : contentTR;

  return (
    <section className="w-full pt-2 pb-10 md:pt-4 md:pb-16 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8 md:space-y-12">
        
        {/* 1. BÖLÜM: WHAT IS THUMBSAD? / THUMBSAD NEDİR? */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {c.section1.title}
          </h1>
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
            {c.section1.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 2. BÖLÜM: WHAT WE BELIEVE / İNANÇLARIMIZ */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#0a246b]" />
          <div className="max-w-4xl mx-auto space-y-5 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              {c.section2.title}
            </h2>
            <blockquote className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#0a246b] italic leading-snug">
              “{c.section2.slogan}”
            </blockquote>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {c.section2.body}
            </p>
          </div>
        </div>

        {/* 3. BÖLÜM: WHY THUMBSAD? / NEDEN THUMBSAD? */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {c.section3.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
              {c.section3.intro}
            </p>
          </div>

          <ul className="space-y-6 md:space-y-8 pt-4 max-w-4xl mx-auto">
            {c.section3.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3.5 sm:gap-4 text-left"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 mt-0.5 text-[#0a246b]">
                  <CheckIcon />
                </div>
                <div className="flex-1 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                  <strong className="font-bold text-gray-900 mr-1.5">{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutDetail;
