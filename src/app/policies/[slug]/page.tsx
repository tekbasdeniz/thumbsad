import React from "react";

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const policies: Record<string, { title: string; content: React.ReactNode }> = {
    "cookie-policy": {
      title: "Çerez Politikası",
      content: (
        <>
          <p><strong>Son Güncelleme: 15 Ocak 2026</strong></p>
          <p>Web sitemizi ziyaret ettiğinizde, kullanıcı deneyiminizi geliştirmek, içeriği kişiselleştirmek ve yapay zeka destekli analiz ve pazarlama süreçlerimizi yürütmek için çerezler (cookies) kullanıyoruz.</p>
          <h3>1. Çerez Nedir?</h3>
          <p>Çerez, bir web sitesinin zaman içindeki tercihlerinizi ve eylemlerinizi hatırlaması için tarayıcınıza veya cihazınıza yerleştirdiği küçük bir veri dosyasıdır.</p>
          <h3>2. Kullandığımız Çerez Türleri</h3>
          <p><strong>Zorunlu Çerezler:</strong> Güvenlik protokolleri ve oturum yönetimi dahil olmak üzere web sitesinin çalışması için kesinlikle gereklidir.</p>
          <p><strong>Analitik ve Performans Çerezleri:</strong> Yapay zeka modellerimizi geliştirmek amacıyla site trafiğini ölçmek ve kullanıcı davranışlarını anlamak için Google Analytics 4 (GA4) gibi araçlar kullanıyoruz.</p>
          <p><strong>Pazarlama ve Hedefleme Çerezleri:</strong> İlgili reklamları sunmak ve kampanya performansını ölçmek için Meta Pixel ve LinkedIn Insight Tag gibi üçüncü taraf etiketlerini içerir.</p>
          <h3>3. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h3>
          <p>Çerez ayarlarınızı veya mevcut çerezleri istediğiniz zaman tarayıcı ayarlarınızdan değiştirebilir veya silebilirsiniz. Ancak, çerezleri devre dışı bırakmanın web sitemizdeki bazı özelliklerin işlevselliğini etkileyebileceğini lütfen unutmayın.</p>
          <h3>4. Üçüncü Taraf Verileri ve Gizlilik</h3>
          <p>Çerez verileriniz, yalnızca anonim analiz ve performans optimizasyonu için işlenir. Açık rızanız olmadan pazarlama amaçlı kişisel olarak tanımlanabilir bilgileri (PII) paylaşmayız.</p>
        </>
      )
    },
    "privacy-policy": {
      title: "Gizlilik Politikası",
      content: (
        <>
          <p><strong>Son Güncelleme: 15 Ocak 2026</strong></p>
          <p>ThumbsAd (&quot;biz&quot;, &quot;bize&quot;, &quot;bizim&quot;) olarak kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, web sitelerimiz aracılığıyla topladığımız bilgileri, bu bilgilerin nasıl işlendiğini ve nasıl güvence altına alındığını açıklar.</p>
          <h3>1. Hangi Verileri Topluyoruz?</h3>
          <p><strong>İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası.<br/>
          <strong>Teknik Veriler:</strong> IP adresi, tarayıcı bilgileri, cihaz tipi.<br/>
          <strong>Kullanım Verileri:</strong> Site içi davranış, ziyaret süresi ve sayfa görüntüleme bilgileri.</p>
          <h3>2. Verilerinizi Nasıl Kullanıyoruz?</h3>
          <ul>
            <li>Hizmetleri sağlamak ve müşteri desteği sunmak.</li>
            <li>Kampanyalar, bildirimler ve bültenler göndermek (sadece açık rızanız ile).</li>
            <li>Web sitesi deneyimini geliştirmek ve dijital hizmetlerimizi optimize etmek.</li>
          </ul>
          <h3>3. Paylaşım ve Üçüncü Taraflar</h3>
          <p>Verileriniz yalnızca barındırma hizmeti sağlayıcıları, e-posta hizmeti altyapısı ve yasalar gerektirdiğinde ilgili makamlarla paylaşılır. Verilerinizi üçüncü taraflara satmayız.</p>
          <h3>4. Haklarınız</h3>
          <p>Kişisel Verilerin Korunması Kanunu (KVKK) ve geçerli veri koruma yönetmelikleri uyarınca, kişisel verilerinize erişme, düzeltme, silme ve işlenmesine itiraz etme hakkına sahipsiniz. Taleplerinizi <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a> adresine iletebilirsiniz.</p>
          <p><strong>Veri Sorumlusu:</strong><br/>
          Deniz Tekbaş | ThumbsAd<br/>
          Vergi No: 8330788117 | Zincirlikuyu Vergi Dairesi<br/>
          Adres: Esentepe Mah. Büyükdere Cad. Loft Residence No:201/40 Şişli/İstanbul, Türkiye</p>
        </>
      )
    },
    "terms-of-use": {
      title: "Kullanım Şartları",
      content: (
        <>
          <p>Bu web sitesine erişerek ve kullanarak aşağıdaki Kullanım Şartlarına bağlı kalmayı kabul edersiniz.</p>
          <h3>1. Fikri Mülkiyet ve Marka Kullanımı</h3>
          <p>Bu sitede yer alan tüm içerik (metinler, görseller, yazılımlar, yapay zeka modelleri ve kodlar dahil) münhasıran ThumbsAd&apos;in mülkiyetindedir. Önceden yazılı izin alınmaksızın çoğaltılması, dağıtılması veya ticari kullanımı kesinlikle yasaktır.</p>
          <h3>2. Sorumluluk Reddi</h3>
          <p>Bu platformda sağlanan bilgiler yalnızca genel bilgilendirme amaçlıdır. Profesyonel yatırım, tıbbi veya yasal bir tavsiye teşkil etmez.</p>
          <h3>3. Yasaklanmış Kullanım</h3>
          <p>Web sitemizi spam, yasa dışı faaliyetler, teknik ihlaller veya izinsiz veri kazıma (scraping) işlemleri için kullandığı tespit edilen kullanıcıların erişimi kısıtlanabilir veya sonlandırılabilir.</p>
          <h3>4. Uyuşmazlık Çözümü</h3>
          <p>Bu şartlardan doğan her türlü uyuşmazlıkta İstanbul (Şişli) Mahkemeleri ve İcra Daireleri münhasır yetkiye sahip olacaktır.</p>
        </>
      )
    },
    "data-protection-privacy": {
      title: "Veri Koruma ve Gizlilik",
      content: (
        <>
          <p><strong>Veri Sorumlusu:</strong> ThumbsAd – Deniz Tekbaş</p>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve Genel Veri Koruma Yönetmeliği (“GDPR”) uyarınca kişisel verileriniz, veri sorumlusu olarak tarafımızca aşağıda açıklanan kapsamda işlenmektedir.</p>
          <h3>1. İşlenen Veri Kategorileri</h3>
          <p><strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası.<br/>
          <strong>İşlem Güvenliği:</strong> IP adresi, oturum günlükleri ve trafik verileri.</p>
          <h3>2. İşleme Amaçları</h3>
          <ul>
            <li>Web sitesi hizmetlerinin sağlanması ve yürütülmesi.</li>
            <li>Kampanya, bülten ve bilgilendirme mesajlarının gönderilmesi (açık rızaya dayalı olarak).</li>
            <li>Hizmet sonrası destek, faturalandırma ve yasal uyumluluk.</li>
          </ul>
          <h3>3. Veri Paylaşımı ve Aktarımı</h3>
          <p>Verileriniz, KVKK ve GDPR aktarım düzenlemelerine uygun olarak, kesinlikle sunucu/barındırma sağlayıcıları, e-posta hizmeti altyapıları ve yasalar gerektirdiğinde ilgili yasal mercilerle paylaşılır.</p>
          <h3>4. Haklarınız (KVKK ve GDPR)</h3>
          <ul>
            <li>Verilerinize erişme ve düzeltme hakkı.</li>
            <li>İşlemeyi kısıtlama veya itiraz etme hakkı.</li>
            <li>Silme hakkı (&quot;Unutulma Hakkı&quot;).</li>
            <li>Veri taşınabilirliği hakkı.</li>
          </ul>
          <p>Kişisel verileriniz ve KVKK/GDPR kapsamındaki haklarınızla ilgili tüm taleplerinizi <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a> adresine gönderebilirsiniz.</p>
        </>
      )
    },
    "disclaimer": {
      title: "Sorumluluk Reddi",
      content: (
        <>
          <p>Ajansımız ve ürünlerimiz ile ilgili web sitemizde sağlanan tüm içerikler yalnızca genel bilgilendirme amaçlıdır.</p>
          <h3>1. Garanti Yoktur</h3>
          <p>Tüm içerik &quot;olduğu gibi&quot; sunulur. ThumbsAd, içgörülerimizin kullanımından elde edilecek özel sonuçlar, başarı veya dönüşüm oranları ile ilgili hiçbir beyan veya garantide bulunmaz.</p>
          <h3>2. Üçüncü Taraf İçerikleri</h3>
          <p>ThumbsAd, burada bağlantı verilen veya atıfta bulunulan herhangi bir üçüncü taraf web sitesinin içeriği, doğruluğu veya uygulamalarından hiçbir sorumluluk kabul etmez.</p>
          <h3>3. Kullanıcı Sorumluluğu</h3>
          <p>Web sitemizi kullanarak bu şartları kabul etmiş olursunuz. Bu tür bilgilere güvenerek yapacağınız işlemlerin tüm riski size aittir.</p>
        </>
      )
    },
    "copyright-trademark-notice": {
      title: "Telif Hakkı ve Ticari Marka Bildirimi",
      content: (
        <>
          <p>Bu web sitesindeki içeriğe ilişkin tüm fikri mülkiyet hakları münhasıran <strong>ThumbsAd</strong>&apos;a aittir. <strong>TruOpt.ai</strong> markası, ThumbsAd ekosistemi bünyesinde geliştirilen tescilli bir dijital üründür.</p>
          <p>Herhangi bir içeriğin izinsiz paylaşılması, çoğaltılması veya ticari kullanımı durumunda yasal işlem başlatılacaktır.</p>
          <ul>
            <li>5846 sayılı Fikir ve Sanat Eserleri Kanunu ile geçerli uluslararası telif hakkı yasaları kapsamında korunmaktadır.</li>
            <li>Marka tescil başvuruları yapılmış olup, yasal süreçler aktif olarak takip edilmektedir.</li>
          </ul>
          <p><strong>© 2025 ThumbsAd – Tüm hakları saklıdır.</strong></p>
        </>
      )
    }
  };

  const policy = policies[slug];
  
  if (!policy) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center bg-white px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 border-b pb-4">
          Sayfa Bulunamadı
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
