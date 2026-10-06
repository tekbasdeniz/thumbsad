export interface Cohort {
  id: string;
  name: { tr: string; en: string };
  date: { tr: string; en: string };
  time: { tr: string; en: string };
  paytrUrl: string;
  capacity: number;
  minCapacity: number;
}

export interface Education {
  id: string;
  slug: string;
  type: 'webinar' | 'workshop' | 'open' | 'corporate';
  price: number | null;
  vatIncluded: boolean;
  currency: string;
  duration: { tr: string; en: string };
  language: string;
  status: 'active' | 'preorder' | 'quote';
  date?: { tr: string; en: string };
  time?: { tr: string; en: string };
  title: { tr: string; en: string };
  shortDescription: { tr: string; en: string };
  description: { tr: string; en: string };
  targetAudience: { tr: string; en: string };
  outcomes: { tr: string[]; en: string[] };
  topics: { tr: string[]; en: string[] };
  cohorts?: Cohort[];
}
  
// 1. ÜCRETSİZ WEBİNAR
export const freeWebinar: Education = {
  id: "webinar-1",
  slug: "is-hayatinda-ai-ile-neleri-kolaylastirabilirsiniz",
  type: "webinar",
  price: null,
  vatIncluded: false,
  currency: "TL",
  duration: { tr: "60 Dakika", en: "60 Minutes" },
  language: "Türkçe",
  status: "active",
  date: { tr: "17 Ekim 2026 Cumartesi", en: "Saturday, October 17, 2026" },
  time: { tr: "12:00 - 13:00 (TSİ)", en: "12:00 - 13:00 (TRT / UTC+3)" },
  title: {
    tr: "İş Hayatında AI ile Neleri Kolaylaştırabilirsiniz?",
    en: "What Can AI Make Easier in Your Working Day?"
  },
  shortDescription: {
    tr: "Tekrarlayan bir iş görevini yapay zekâ ile nasıl daha anlaşılır ve yönetilebilir hale getirebileceğinizi görün.",
    en: "See how AI can help you structure and manage a recurring work task."
  },
  description: {
    tr: "Bu ücretsiz canlı webinarda örnek bir iş problemi üzerinden ilerleyip kendi görevinizi seçmeniz için kısa bir uygulama yapacağız.",
    en: "This free live webinar follows a practical business example and includes a short exercise to help you identify a task of your own."
  },
  targetAudience: {
    tr: "Girişimciler, freelancerlar, KOBİ çalışanları, öğrenciler ve AI kullanmaya yeni başlayan profesyoneller.",
    en: "Entrepreneurs, freelancers, SME professionals, students and people new to using AI at work."
  },
  outcomes: {
    tr: [
      "AI için uygun bir görev seçme",
      "Görev ve bağlamı açık yazma",
      "Çıktıyı kontrol ederken hangi soruları soracağını bilme"
    ],
    en: [
      "Select a suitable task for AI",
      "Write clear instructions and context",
      "Ask the right review questions"
    ]
  },
  topics: {
    tr: [
      "İş ihtiyacı ve sınırlar",
      "Görev tasarımının temelleri",
      "Toplantı notundan aksiyon örneği",
      "Kısa mini uygulama",
      "Workshop bilgilendirmesi ve Soru-Cevap"
    ],
    en: [
      "Business needs and limitations",
      "Task design essentials",
      "Meeting notes into actions",
      "Short exercise",
      "Workshop details & Q&A"
    ]
  }
};

// 2. AÇIK SINIF EĞİTİMLERİ (ÖN TALEP)
export const openEducations: Education[] = [
  {
    id: "ws-1",
    slug: "ai-ile-isinizi-kolaylastirin",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "3 Saat", en: "3 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: {
      tr: "AI ile İşinizi Kolaylaştırın",
      en: "Make Your Work Easier with AI"
    },
    shortDescription: {
      tr: "Tekrarlayan bir işinizi seçin, yapay zekâ destekli bir görev akışı tasarlayın ve çıktıyı kontrol ederek geliştirin.",
      en: "Choose a recurring task, design an AI-assisted workflow and improve the result through structured review."
    },
    description: {
      tr: "Bu üç saatlik canlı workshopta e-posta, toplantı notu ve araştırma örneklerinden kendi işinize uygun bir uygulama planına ilerleyeceksiniz.",
      en: "This three-hour live workshop uses email, meeting notes and research examples to help you build a practical plan for your own work."
    },
    targetAudience: {
      tr: "Girişimciler, freelancerlar, KOBİ çalışanları ve AI araçlarını günlük işlerinde daha düzenli kullanmak isteyen profesyoneller.",
      en: "Entrepreneurs, freelancers, SME professionals and people starting to use AI in their daily work."
    },
    outcomes: {
      tr: [
        "AI kullanımına uygun bir iş görevi seçeceksiniz.",
        "Görev, bağlam, kaynak, çıktı biçimi ve kontrol ölçütünü tanımlayacaksınız.",
        "Toplantı, e-posta veya araştırma görevini örnek bir akışa dönüştüreceksiniz.",
        "Kendi işiniz için bir görev akışı ve 7 günlük deneme planı hazırlayacaksınız."
      ],
      en: [
        "Select a suitable task for AI use.",
        "Define instructions, context, source material and review criteria.",
        "Practise with a meeting, email or research workflow.",
        "Leave with one workflow and a seven-day trial plan."
      ]
    },
    topics: {
      tr: [
        "Görev seçimi ve AI sınırları",
        "Açık talimat ve bağlam oluşturma",
        "Toplantı ve e-posta uygulama örnekleri",
        "Kaynak ve çıktı kontrolü",
        "Kendi görevinde uygulama ve 7 günlük deneme planı"
      ],
      en: [
        "Task selection and AI limitations",
        "Clear instructions and context",
        "Meeting and email examples",
        "Source and output review",
        "Implementation plan and Q&A"
      ]
    }
  },
  {
    id: "op-1",
    slug: "prompt-ve-gorev-tasarimi",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "3 Saat", en: "3 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "Prompt ve Görev Tasarımı", en: "Prompt and Task Design" },
    shortDescription: {
      tr: "İş hedefini, kaynakları ve kabul ölçütlerini açık görev talimatlarına dönüştürün.",
      en: "Turn business goals, source material and acceptance criteria into clear task instructions."
    },
    description: {
      tr: "Aynı görevi farklı örneklerle test ederek beş kullanılabilir görev şablonu hazırlayın.",
      en: "Test variations and build five reusable task templates."
    },
    targetAudience: {
      tr: "Pazarlama, satış ve proje ekipleri; AI kullanmış ancak tutarlı çıktı alamayan profesyoneller.",
      en: "Marketing, sales and project professionals who use AI but need more consistent outputs."
    },
    outcomes: {
      tr: ["Beş kullanılabilir görev şablonu", "Bir test matrisi", "Kaynak ve bağlam sınırlandırma yetkinliği"],
      en: ["Five task templates", "A test matrix", "Source and context boundary management"]
    },
    topics: {
      tr: [
        "İş hedefi ve görev ayrıştırma",
        "Bağlam ve kaynak sınırları",
        "Örnek çıktı ve format",
        "Kabul ölçütü ve test",
        "Beş şablon geliştirme"
      ],
      en: [
        "Business goals and task decomposition",
        "Context and source boundaries",
        "Example outputs and formats",
        "Acceptance tests",
        "Five reusable templates"
      ]
    }
  },
  {
    id: "op-2",
    slug: "ai-ile-verimli-calisma",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 Saat", en: "6 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile Verimli Çalışma", en: "Work More Effectively with AI" },
    shortDescription: {
      tr: "Toplantı, rapor ve araştırma görevlerini tekrarlanabilir akışlara dönüştürün.",
      en: "Build repeatable workflows for meetings, reporting and research."
    },
    description: {
      tr: "İnsan kontrolünü koruyarak zaman ve çıktı kalitesini ölçebileceğiniz bir çalışma düzeni kurun.",
      en: "Retain human review and create a practical way to measure time and output quality."
    },
    targetAudience: {
      tr: "Beyaz yaka çalışanlar, ekip liderleri ve operasyon profesyonelleri.",
      en: "Knowledge workers, team leads and operations professionals."
    },
    outcomes: {
      tr: ["İki veya üç iş akışı", "Zaman ve kalite ölçüm tablosu", "İnsan onay noktaları rehberi"],
      en: ["Two or three workflows", "Time and quality tracker", "Human approval checklist"]
    },
    topics: {
      tr: [
        "Görev ve tekrar haritası",
        "Toplantıdan aksiyon üretimi",
        "Rapor özetleme ve kaynak kontrolü",
        "Araştırma sorusunu daraltma ve kaynak karşılaştırma",
        "İnsan onay noktaları ve ölçüm"
      ],
      en: [
        "Task mapping",
        "Meeting actions",
        "Reporting and source review",
        "Research and source comparison",
        "Human approval, measurement and rollout"
      ]
    }
  },
  {
    id: "op-3",
    slug: "ai-ile-pazarlama-ve-buyume",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 / 12 Saat", en: "6 / 12 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile Pazarlama ve Büyüme", en: "AI for Marketing and Growth" },
    shortDescription: {
      tr: "Müşteri içgörüsünden değer önerisine ve kampanya deneyine uzanan pazarlama planı oluşturun.",
      en: "Build a marketing plan from customer insights and value propositions to content briefs."
    },
    description: {
      tr: "Müşteri içgörüsünden değer önerisine, içerik briefinden kampanya deneyine uzanan bir pazarlama planı oluşturun.",
      en: "Build a marketing plan from customer insights and value propositions to content briefs and campaign experiments."
    },
    targetAudience: {
      tr: "Pazarlamacılar, marka yöneticileri ve KOBİ sahipleri.",
      en: "Marketers, brand managers and SME owners."
    },
    outcomes: {
      tr: ["Pazarlama briefi", "30 günlük deney planı", "Mesaj varyasyon matrisi"],
      en: ["Marketing brief", "30-day experiment plan", "Messaging matrix"]
    },
    topics: {
      tr: [
        "İş hedefi ve müşteri problemi",
        "İçgörü ve segment hipotezi",
        "Değer önerisi ve mesaj varyasyonları",
        "Kanal seçimi ve içerik planı",
        "Deney kurgusu, KPI ve 30 günlük plan"
      ],
      en: [
        "Business goals and customer problems",
        "Customer insights and segmentation",
        "Value propositions and messaging",
        "Channels and content planning",
        "Experimentation, KPIs and 30-day plan"
      ]
    }
  },
  {
    id: "op-4",
    slug: "ai-ile-performans-reklamciligi",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 / 12 Saat", en: "6 / 12 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile Performans Reklamcılığı", en: "AI for Performance Advertising" },
    shortDescription: {
      tr: "Kampanya verisini yorumlayın, kreatif hipotezler oluşturun ve optimizasyon kararlarını gerekçelendirin.",
      en: "Interpret campaign data, develop creative hypotheses and document optimisation decisions."
    },
    description: {
      tr: "AI önerilerini ölçüm, veri kalitesi ve insan onayıyla bir karar günlüğüne dönüştürün.",
      en: "Review AI suggestions using measurement, data quality and human approval."
    },
    targetAudience: {
      tr: "Performans pazarlama ekipleri, ajanslar ve Google Meta reklamlarına aşina uzmanlar.",
      en: "Performance marketing teams and agencies familiar with Google or Meta advertising."
    },
    outcomes: {
      tr: ["Kampanya analiz dosyası", "Optimizasyon karar günlüğü", "Kreatif test matrisi"],
      en: ["Campaign analysis worksheet", "Optimisation decision log", "Creative test matrix"]
    },
    topics: {
      tr: [
        "KPI ve veri kalitesi",
        "Kampanya karşılaştırma ve kreatif hipotezleri",
        "Bütçe senaryoları ve ilk kararlar",
        "Ölçüm ve atıf sınırları",
        "Kontrollü test planı ve karar günlüğü"
      ],
      en: [
        "KPIs and data quality",
        "Campaign comparison and creative tests",
        "Budget scenarios and human approval",
        "Measurement and attribution limits",
        "Controlled test plans and decision logs"
      ]
    }
  },
  {
    id: "op-5",
    slug: "ai-ile-icerik-ve-kreatif-uretimi",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 Saat", en: "6 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile İçerik ve Kreatif Üretimi", en: "AI for Content and Creative Development" },
    shortDescription: {
      tr: "Marka bağlamını netleştirin; mesaj, görsel ve video fikirlerini aynı brief üzerinden geliştirin.",
      en: "Define brand context and develop messaging, visual concepts and video ideas."
    },
    description: {
      tr: "Editoryal kontrol ve test matrisiyle kullanılabilir bir kreatif taslak paketi oluşturun.",
      en: "Build a creative draft package with editorial review and a test matrix."
    },
    targetAudience: {
      tr: "İçerik, kreatif, marka ve iletişim ekipleri.",
      en: "Content, creative, brand and communications teams."
    },
    outcomes: {
      tr: ["Kreatif brief", "Mesaj matrisi", "6 sahneli storyboard"],
      en: ["Creative brief", "Message matrix", "6-frame storyboard"]
    },
    topics: {
      tr: [
        "Marka ve hedef kitle bağlamı",
        "Kreatif brief ve mesaj varyasyonları",
        "Ton ve iddia kontrolü",
        "Görsel yön ve storyboard geliştirme",
        "Editoryal kontrol ve kreatif test planı"
      ],
      en: [
        "Brand context and target audience",
        "Creative briefs and messaging variations",
        "Tone and claim review",
        "Visual directions and storyboards",
        "Editorial review and creative tests"
      ]
    }
  },
  {
    id: "op-6",
    slug: "ai-ile-satis-ve-musteri-kazanimi",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 Saat", en: "6 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile Satış ve Müşteri Kazanımı", en: "AI for Sales and Customer Acquisition" },
    shortDescription: {
      tr: "Hedef müşteri hesabını anlamlandırın, keşif soruları hazırlayın ve teklif anlatısını geliştirin.",
      en: "Understand a target account, prepare discovery questions and strengthen your proposal narrative."
    },
    description: {
      tr: "Kişiselleştirilmiş ilk mesajdan takip akışına uzanan bir satış hazırlık paketi oluşturun.",
      en: "Build a sales preparation pack from a personalised first message to follow-up sequencing."
    },
    targetAudience: {
      tr: "Satış, iş geliştirme ekipleri ve kurucular.",
      en: "Sales and business development teams and founders."
    },
    outcomes: {
      tr: ["Hesap planı", "Keşif soruları kümesi", "İlk mesaj ve takip sıralaması"],
      en: ["Account plan", "Discovery questions set", "First message and follow-up sequence"]
    },
    topics: {
      tr: [
        "Hedef hesap ve uygunluk analizi",
        "Kanıt ve ihtiyaç hipotezi",
        "Kişiselleştirilmiş ilk mesaj ve keşif soruları",
        "Teklif, değer anlatısı ve itiraz senaryoları",
        "Takip sıralaması ve rol oyunu"
      ],
      en: [
        "Target account fit and analysis",
        "Evidence and needs hypotheses",
        "First messages and discovery questions",
        "Proposal narrative and objections",
        "Follow-up sequencing and role-play"
      ]
    }
  },
  {
    id: "op-7",
    slug: "girisimciler-icin-ai-ile-isini-buyutme",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 / 12 Saat", en: "6 / 12 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "Girişimciler için AI ile İşini Büyütme", en: "AI for Entrepreneurial Growth" },
    shortDescription: {
      tr: "Müşteri problemini netleştirin; ilk görüşmeler ve talep toplama için test planı hazırlayın.",
      en: "Clarify the customer problem and value proposition, then plan interviews and demand tests."
    },
    description: {
      tr: "AI ile ürettiğiniz varsayımları müşteri kanıtından ayırmayı öğrenin.",
      en: "Learn to distinguish AI-generated assumptions from customer evidence."
    },
    targetAudience: {
      tr: "Startup kurucuları ve küçük işletme sahipleri.",
      en: "Startup founders and small business owners."
    },
    outcomes: {
      tr: ["Müşteri görüşme planı", "İlk 10 müşteri hedef listesi", "30 günlük aksiyon planı"],
      en: ["Customer interview plan", "First-ten-customer target list", "30-day action plan"]
    },
    topics: {
      tr: [
        "Problem ve müşteri tanımı",
        "Değer önerisi ve varsayım/kanıt ayrımı",
        "Müşteri görüşme soruları ve planı",
        "İlk 10 müşteri yaklaşımı ve talep sayfası briefi",
        "Öncelik, KPI ve 30 günlük uygulama planı"
      ],
      en: [
        "Customer problems and definitions",
        "Value propositions and assumptions/evidence",
        "Interview questions and planning",
        "First customers and demand tests",
        "Prioritisation, KPIs and 30-day execution plan"
      ]
    }
  },
  {
    id: "op-8",
    slug: "ai-ile-gelecegin-yetkinlikleri",
    type: "open",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "3 Saat", en: "3 Hours" },
    language: "Türkçe",
    status: "preorder",
    title: { tr: "AI ile Geleceğin Yetkinlikleri", en: "Future Work Skills with AI" },
    shortDescription: {
      tr: "AI ile araştırma yaparken bilgiyi değerlendirin ve hedefinize uygun öğrenme planı hazırlayın.",
      en: "Evaluate information when researching with AI and create a learning plan."
    },
    description: {
      tr: "Hedeflediğiniz role uygun bir iş örneği üretin ve portföyünüzü geliştirecek bir öğrenme planı hazırlayın.",
      en: "Create a sample relevant to your target role and build a learning plan for your portfolio."
    },
    targetAudience: {
      tr: "Öğrenciler, yeni mezunlar ve kariyer değişikliği düşünenler.",
      en: "Students, recent graduates and career changers."
    },
    outcomes: {
      tr: ["Rol odaklı iş örneği (portföy tasarısı)", "30 günlük öğrenme planı", "Doğruluk kontrol kılavuzu"],
      en: ["One role-focused work sample", "30-day learning plan", "Accuracy verification guide"]
    },
    topics: {
      tr: [
        "Hedef rol ve görev tanımı",
        "Araştırma ve kaynak değerlendirme",
        "İş örneği tasarımı",
        "Doğruluk ve özgün katkı",
        "Portföy ve öğrenme planı"
      ],
      en: [
        "Target roles and tasks",
        "Research and source review",
        "Work sample design",
        "Accuracy and original contribution",
        "Portfolio and learning planning"
      ]
    }
  }
];

// 3. KURUMSAL PROGRAMLAR (Teklif Talebi)
export const corporateEducations: Education[] = [
  {
    id: "corp-1",
    slug: "girisimcilik-masterclass",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "3 Saat", en: "3 Hours" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "Girişimcilik Masterclass", en: "Entrepreneurship Masterclass" },
    shortDescription: {
      tr: "Günlük iş görevlerinizi AI destekli uygulamalara dönüştürün. Ortak görev akışı geliştirin.",
      en: "Turn daily work tasks into AI-assisted workflows. Build a shared approach."
    },
    description: {
      tr: "Araştırma, toplantı veya teklif hazırlığından başlayarak ekibinizin kullanabileceği ortak bir görev akışı geliştirelim.",
      en: "Start with research, meeting notes or proposal preparation and build a shared approach your team can use."
    },
    targetAudience: {
      tr: "Startup ve KOBİ ekipleri.",
      en: "Startup and SME teams."
    },
    outcomes: {
      tr: ["Ortak görev şablonu", "7 günlük ekip deneme planı", "Ekip içi AI kullanım ilkesi"],
      en: ["Shared task template", "Seven-day team trial plan", "Internal AI guidelines"]
    },
    topics: {
      tr: [
        "Görev seçimi ve iş bağlamı",
        "Araştırma ve toplantı uygulaması",
        "Teklif hazırlığı otomasyonu",
        "İnsan kontrol mekanizması",
        "Ekip uygulama planı"
      ],
      en: [
        "Task selection and business context",
        "Research and meeting notes practice",
        "Proposal preparation",
        "Human review mechanisms",
        "Team implementation planning"
      ]
    }
  },
  {
    id: "corp-2",
    slug: "kurumsal-ai-verimlilik",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 / 12 Saat", en: "6 / 12 Hours" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "Kurumsal AI Verimlilik", en: "Corporate AI Productivity" },
    shortDescription: {
      tr: "Tekrarlayan işleri haritalayın; AI ile desteklenebilecek görevleri seçip kontrol noktaları oluşturun.",
      en: "Map recurring work, select suitable AI tasks and define review points."
    },
    description: {
      tr: "Kurumunuzun onaylı araçları ve görev örnekleriyle uygulanabilir ekip akışları geliştirelim.",
      en: "Build practical team workflows using your approved tools and business examples."
    },
    targetAudience: {
      tr: "Orta ölçekli firmalar, beyaz yaka ve operasyon ekipleri.",
      en: "Mid-sized companies, knowledge workers and operations teams."
    },
    outcomes: {
      tr: ["İki öncelikli iş akışı", "Ekip ölçüm tablosu", "Kalite ve veri kontrol rehberi"],
      en: ["Two prioritised workflows", "Team measurement worksheet", "Quality & data review guide"]
    },
    topics: {
      tr: [
        "Görev haritası ve darboğaz tespiti",
        "Toplantı, rapor ve araştırma akışları",
        "Kontrol ve sorumlular matrisi",
        "Zaman ve kalite ölçümleme",
        "Ekip yayılımı ve yönetim sunumu"
      ],
      en: [
        "Task mapping and bottleneck identification",
        "Meeting, reporting and research workflows",
        "Controls and owners matrix",
        "Time and quality tracking",
        "Team rollout and leadership presentation"
      ]
    }
  },
  {
    id: "corp-3",
    slug: "yonetim-icin-ai-stratejisi",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "3 / 6 Saat", en: "3 / 6 Hours" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "Yönetim için AI Stratejisi", en: "AI Strategy for Leaders" },
    shortDescription: {
      tr: "AI kullanım senaryolarını önceliklendirin. İnsan onayı ve ölçüm çerçevesiyle 90 günlük pilot plan hazırlayın.",
      en: "Prioritise AI use cases by business value and feasibility. Build a 90-day pilot plan."
    },
    description: {
      tr: "AI kullanım senaryolarını iş değeri ve uygulanabilirlikle önceliklendirin. İnsan onayı, sahiplik ve ölçüm çerçevesiyle 90 günlük pilot planı hazırlayın.",
      en: "Prioritise AI use cases by business value and feasibility. Build a 90-day pilot plan with ownership, human approval and measurement criteria."
    },
    targetAudience: {
      tr: "Kurucular, yöneticiler ve bölüm liderleri.",
      en: "Founders, executives and department leaders."
    },
    outcomes: {
      tr: ["Öncelik matrisi", "90 günlük pilot planı", "Risk ve onay kararları belgesi"],
      en: ["Prioritisation matrix", "90-day pilot plan", "Risk and approval framework"]
    },
    topics: {
      tr: [
        "Hedef ve mevcut durum analizi",
        "Kullanım senaryosu havuzu oluşturma",
        "Değer - uygulanabilirlik matrisi",
        "Kaynak, insan onayı ve risk yönetimi",
        "90 günlük pilot ve KPI planlaması"
      ],
      en: [
        "Goals and current state analysis",
        "Use-case pool generation",
        "Value vs feasibility matrix",
        "Resource allocation and risk management",
        "90-day pilot and KPI setup"
      ]
    }
  },
  {
    id: "corp-4",
    slug: "telekom-satis-ve-pazarlama",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "12 Saat / 2 Gün", en: "12 Hours / 2 Days" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "Telekom Satış ve Pazarlama", en: "AI for Telecom Sales and Marketing" },
    shortDescription: {
      tr: "Müşteri kazanımı, churn, upsell ve kampanya kararlarını mevcut AI araçlarınızla destekleyin.",
      en: "Use your existing AI tools to support acquisition, churn prevention, upsell and campaign decisions."
    },
    description: {
      tr: "ARPU ve müşteri davranışı gibi iş ölçütlerini merkeze alan iki günlük uygulama programı tasarlayalım.",
      en: "Build a two-day programme around business measures such as ARPU and customer behaviour."
    },
    targetAudience: {
      tr: "Telekom CRM, satış, ürün ve pazarlama ekipleri.",
      en: "Telecom CRM, sales, product and marketing teams."
    },
    outcomes: {
      tr: ["Segment teklif matrisi", "Churn ve upsell hipotez seti", "Pilot ölçüm planı"],
      en: ["Segment and offer matrix", "Churn & upsell hypotheses set", "Pilot measurement plan"]
    },
    topics: {
      tr: [
        "Müşteri kazanımı ve segmentasyon",
        "Churn sinyalleri ve neden hipotezleri",
        "Upsell ve cross-sell teklif mimarisi",
        "Kişiselleştirme ve kanal yönetimi",
        "Pilot KPI'ları ve test senaryoları"
      ],
      en: [
        "Customer acquisition and segmentation",
        "Churn signals and root-cause hypotheses",
        "Upsell and cross-sell offer architecture",
        "Personalisation and channel execution",
        "Pilot KPIs and testing scenarios"
      ]
    }
  },
  {
    id: "corp-5",
    slug: "bankacilik-ve-odemeler",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "6 / 12 Saat", en: "6 / 12 Hours" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "Bankacılık ve Ödemeler", en: "AI for Banking and Payments" },
    shortDescription: {
      tr: "İş senaryosu tasarımı, güvenli görev oluşturma ve dijital müşteri deneyimini bir araya getirin.",
      en: "Combine business use-case design, controlled task instructions and digital customer experience."
    },
    description: {
      tr: "Kurumunuzun onaylı araçlarıyla kampanya ve hizmet süreçleri için kontrollü uygulamalar geliştirelim.",
      en: "Develop practical applications for campaign and service workflows using your approved tools."
    },
    targetAudience: {
      tr: "Banka ve ödeme kuruluşlarının iş birimleri.",
      en: "Business teams in banks and payment institutions."
    },
    outcomes: {
      tr: ["İş senaryosu kartı", "Güvenli görev şablonu", "CX pilot kurgusu"],
      en: ["Business use-case card", "Controlled task template", "CX pilot design"]
    },
    topics: {
      tr: [
        "İş senaryosu ve değer tasarımı",
        "Onaylı kaynaklar ve veri sınırları",
        "Güvenli görev ve prompt tasarımı",
        "Müşteri deneyimi ve kampanya entegrasyonu",
        "Kontrol mekanizmaları ve KPI ölçümü"
      ],
      en: [
        "Business use cases and value design",
        "Approved sources and data boundaries",
        "Safe task and prompt design",
        "Customer experience and campaign integration",
        "Control frameworks and KPI tracking"
      ]
    }
  },
  {
    id: "corp-6",
    slug: "ilac-ve-saglik-ticari-uygulama",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "12 Saat", en: "12 Hours" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "İlaç ve Sağlık Ticari Uygulama", en: "AI for Pharma and Healthcare Commercial Teams" },
    shortDescription: {
      tr: "Onaylı içeriklerden saha hazırlığı, mesaj ve MCM görevleri üretin.",
      en: "Create field preparation, messaging and multichannel workflows from approved content."
    },
    description: {
      tr: "Kurumsal onay süreçlerine uygun kontrol noktalarıyla ticari iş akışlarını birlikte tasarlayalım.",
      en: "Design commercial applications with review points aligned to your organisation's approval processes."
    },
    targetAudience: {
      tr: "İlaç pazarlama, medikal iletişim ve saha ekipleri.",
      en: "Pharma marketing, medical communications and field teams."
    },
    outcomes: {
      tr: ["Saha hazırlık dosyası", "İtiraz/mesaj matrisi", "Kontrollü MCM içerik iş akışı"],
      en: ["Field preparation pack", "Objections & messaging matrix", "Controlled MCM content workflow"]
    },
    topics: {
      tr: [
        "Onaylı kaynak kullanımı ve ticari hedefler",
        "Saha görüşme hazırlığı ve doktor senaryoları",
        "İtiraz yönetimi ve mesaj kurguları",
        "Çoklu kanal (MCM) içerik görevleri",
        "Medikal/uyum onay ve uygulama planı"
      ],
      en: [
        "Approved source usage and commercial goals",
        "Field prep and HCP interaction scenarios",
        "Objection handling and messaging",
        "Multichannel (MCM) content tasks",
        "Medical/compliance review and rollout"
      ]
    }
  },
  {
    id: "corp-7",
    slug: "ai-donusum-akademisi",
    type: "corporate",
    price: null,
    vatIncluded: false,
    currency: "TL",
    duration: { tr: "18 Saat / 6 Hafta", en: "18 Hours / 6 Weeks" },
    language: "Türkçe",
    status: "quote",
    title: { tr: "AI Dönüşüm Akademisi", en: "AI Transformation Academy" },
    shortDescription: {
      tr: "Altı haftalık uygulama programında bir kullanım senaryosunu pilot tasarımına taşıyın.",
      en: "Develop a use case into a pilot through six weeks of guided practice."
    },
    description: {
      tr: "Haftalık çıktı değerlendirmeleri ve 90 günlük yayılım planıyla kurum içinde ortak bir uygulama ritmi oluşturun.",
      en: "Build a shared delivery rhythm with weekly output reviews and a 90-day rollout plan."
    },
    targetAudience: {
      tr: "Dönüşüm ve departman liderleri.",
      en: "Transformation and department leaders."
    },
    outcomes: {
      tr: ["Eksiksiz pilot dosyası", "90 günlük yayılım planı", "Haftalık iyileştirme kaydı"],
      en: ["Comprehensive pilot file", "90-day rollout plan", "Weekly iteration log"]
    },
    topics: {
      tr: [
        "Senaryo seçimi ve değer matrisi",
        "İş akışı haritalama ve görev talimatları",
        "Pilot hipotezi ve başlangıç ölçümü",
        "Haftalık çıktı inceleme ve insan onayı",
        "Ölçüm verisi yorumlama ve kapasite hesabı",
        "Pilot sunumu ve 90 günlük yol haritası"
      ],
      en: [
        "Use-case selection and value matrix",
        "Workflow mapping and task instructions",
        "Pilot hypotheses and baseline tracking",
        "Weekly output review and human sign-off",
        "Measurement interpretation and ROI modeling",
        "Pilot presentation and 90-day roadmap"
      ]
    }
  }
];

// Detay sayfalarında arama yapılabilmesi için tüm eğitimlerin toplandığı ana dizi
export const allEducations: Education[] = [
  freeWebinar,
  ...openEducations,
  ...corporateEducations
];