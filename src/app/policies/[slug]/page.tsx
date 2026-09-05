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
          Adres: Esentepe Mah. Büyükdere Cad. NO:193/2 , 34394 , Şişli/İSTANBUL</p>
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
          <h3>1. Veri Sorumlusu ve Kapsam</h3>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verileriniz, Deniz Tekbaş | ThumbsAd (“ThumbsAd”) tarafından veri sorumlusu sıfatıyla işlenmektedir. TruOpt.ai, ThumbsAd tarafından geliştirilen ve sunulan bir ürün/hizmettir; ayrı bir veri sorumlusu değildir.</p>
          <p>
            <strong>Vergi Bilgileri:</strong> Vergi No: 8330788117 | Zincirlikuyu Vergi Dairesi<br/>
            <strong>Adres:</strong> Esentepe Mah. Büyükdere Cad. No: 193/2, 34394 Şişli/İstanbul<br/>
            <strong>E-posta:</strong> <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a><br/>
            <strong>Telefon:</strong> +90 212 955 00 63<br/>
            <strong>Web siteleri:</strong> <a href="https://thumbsad.com" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://thumbsad.com</a> ve <a href="https://truopt.ai" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://truopt.ai</a>
          </p>
          <p>Bu Aydınlatma Metni; ThumbsAd ve TruOpt.ai web siteleri, ThumbsAd Insights topluluk üyeliği, bülten ve etkinlik kayıtları, TruOpt.ai ürün araştırması, erken erişim, demo ve benzeri iletişim formları üzerinden elde edilen kişisel verileri kapsar.</p>

          <h3>2. İşlenen Kişisel Veriler</h3>
          <p>İlgili forma ve kullanıcı tarafından paylaşılan bilgilere göre aşağıdaki kişisel veriler işlenebilir:</p>
          <ul>
            <li><strong>Kimlik bilgileri:</strong> ad ve soyad.</li>
            <li><strong>İletişim bilgileri:</strong> e-posta adresi ve kullanıcı tarafından ayrıca paylaşılması hâlinde telefon numarası.</li>
            <li><strong>Talep ve ürün araştırması bilgileri:</strong> kurum/şirket türü, reklam bütçesi aralığı, kullanılan reklam platformları, ihtiyaçlar, sorunlar, özellik talepleri, demo veya erken erişim tercihleri.</li>
            <li><strong>Pazarlama ve izin bilgileri:</strong> iletişim tercihi, izin/onay durumu, izin tarihi ve saati, izin metni versiyonu ve ret/abonelikten çıkma kayıtları.</li>
            <li><strong>İşlem ve kaynak bilgileri:</strong> kayıt tarihi ve saati, kayıt kaynağı, kaynak sayfa adresi ve UTM source/medium/campaign bilgileri.</li>
            <li><strong>İletişim kayıtları:</strong> tarafımıza iletilen talep, görüş, geri bildirim ve yazışmalar.</li>
          </ul>

          <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
          <ul>
            <li>ThumbsAd Insights topluluk üyeliğinin oluşturulması ve yönetilmesi.</li>
            <li>AI, pazarlama, growth ve MarTech içeriklerinin; etkinlik, canlı yayın ve bülten duyurularının iletilmesi.</li>
            <li>ThumbsAd ve ThumbsAd’in ürünü TruOpt.ai hakkında ürün/hizmet bilgilendirmeleri, özel fırsatlar, erken erişim ve demo davetlerinin gönderilmesi.</li>
            <li>TruOpt.ai ürün araştırmasının yürütülmesi; kullanıcı ihtiyaçlarının, sorunlarının ve özellik taleplerinin analiz edilmesi.</li>
            <li>Başvuruların community, warm lead veya hot lead gibi gruplara ayrılması ve uygun iletişim akışının belirlenmesi.</li>
            <li>Mükerrer kayıtların önlenmesi, form ve sistem güvenliğinin sağlanması, teknik sorunların giderilmesi ve süreç performansının ölçülmesi.</li>
            <li>İzin, ret ve iletişim tercihleri kayıtlarının tutulması; hukuki yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda hakların korunması.</li>
          </ul>

          <h3>4. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h3>
          <p>Kişisel verileriniz, veri işleme faaliyetinin niteliğine göre KVKK’nın 5’inci maddesinde yer alan açık rıza, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi/kullanılması/korunması ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenebilir. Pazarlama ve ticari elektronik ileti gönderimleri, gerekli olduğu ölçüde verdiğiniz ticari elektronik ileti onayı ve açık rıza kapsamında gerçekleştirilir.</p>

          <h3>5. Kişisel Verilerin Toplanma Yöntemi</h3>
          <p>Kişisel verileriniz; web sitesi formları, Google Forms veya benzeri araştırma formları, e-posta, etkinlik ve canlı yayın kayıtları, demo/erken erişim başvuruları ve bu kanallardaki otomatik teknik kayıtlar aracılığıyla elektronik ortamda toplanır.</p>

          <h3>6. Kişisel Verilerin Aktarılması</h3>
          <p>Kişisel verileriniz, yukarıdaki amaçlarla sınırlı ve gerekli olduğu ölçüde; barındırma, bulut depolama, e-posta gönderimi, form, analiz, müşteri ilişkileri ve teknik destek hizmeti aldığımız tedarikçilere; hukuk, mali müşavirlik ve bilgi teknolojileri danışmanlarına; ayrıca kanunen yetkili kamu kurum ve kuruluşlarına aktarılabilir.</p>
          <p>Yurt dışında bulunan veya verileri yurt dışında saklayan hizmet sağlayıcıların kullanılması hâlinde aktarımlar, KVKK’nın 9’uncu maddesinde düzenlenen yurt dışına aktarım şartları ve uygun güvenceler çerçevesinde gerçekleştirilir.</p>

          <h3>7. Saklama Süresi</h3>
          <p>Kişisel verileriniz, işlendikleri amaç için gerekli süre boyunca ve ilgili mevzuatta öngörülen yasal saklama süreleri çerçevesinde muhafaza edilir. İletişim izninizi geri çekmeniz veya üyelikten ayrılmanız hâlinde pazarlama iletişimi durdurulur; izin, ret ve işlem kayıtları hukuki yükümlülükler ile hakların tesisi, kullanılması veya korunması için gerekli süre boyunca sınırlı olarak saklanabilir. Sürelerin sonunda veriler silinir, yok edilir veya anonim hâle getirilir.</p>

          <h3>8. Ticari Elektronik İleti Tercihleri</h3>
          <p>Ticari elektronik ileti onayınızı dilediğiniz zaman gönderilen e-postalardaki abonelikten çıkma bağlantısını kullanarak, <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a> adresine başvurarak veya uygulanabilir olduğu ölçüde İleti Yönetim Sistemi (İYS) üzerinden geri çekebilirsiniz. İznin geri çekilmesi, geri çekme işleminden önce gerçekleştirilen veri işleme faaliyetlerinin hukuka uygunluğunu etkilemez.</p>

          <h3>9. KVKK Kapsamındaki Haklarınız</h3>
          <p>KVKK’nın 11’inci maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme.</li>
            <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.</li>
            <li>Kişisel verilerin aktarıldığı yurt içindeki veya yurt dışındaki üçüncü kişileri öğrenme.</li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.</li>
            <li>KVKK’da öngörülen şartlar çerçevesinde verilerin silinmesini veya yok edilmesini isteme.</li>
            <li>Düzeltme, silme veya yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.</li>
            <li>Münhasıran otomatik sistemler aracılığıyla analiz sonucunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
            <li>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
          </ul>

          <h3>10. Başvuru Yöntemi</h3>
          <p>KVKK kapsamındaki taleplerinizi, kimliğinizi ve talebinizi açıklayan başvurunuzla birlikte Esentepe Mah. Büyükdere Cad. No: 193/2, 34394 Şişli/İstanbul adresine yazılı olarak veya veri sorumlusuna daha önce bildirdiğiniz ve sistemimizde kayıtlı bulunan e-posta adresiniz aracılığıyla <a href="mailto:info@thumbsad.com" className="text-[#0a246b] font-semibold hover:underline">info@thumbsad.com</a> adresine iletebilirsiniz. Başvurular, talebin niteliğine göre mümkün olan en kısa sürede ve en geç mevzuatta öngörülen süre içinde sonuçlandırılır.</p>

          <h3>11. Metnin Güncellenmesi</h3>
          <p>Bu Veri Koruma ve Gizlilik Metni, kişisel veri işleme süreçlerimizde veya ilgili mevzuatta meydana gelebilecek değişikliklere bağlı olarak güncellenebilir. Güncel metin <a href="https://www.thumbsad.com/policies/data-protection-privacy" target="_blank" rel="noopener noreferrer" className="text-[#0a246b] font-semibold hover:underline">https://www.thumbsad.com/policies/data-protection-privacy</a> adresinde yayımlanır.</p>
          <p className="text-sm text-gray-500 font-medium mt-4">Versiyon: 1.0 | Yayın tarihi: 14.08.2026</p>
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
      <div className="w-full min-h-[70vh] flex flex-col items-center bg-white px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 border-b pb-4">
          Sayfa Bulunamadı
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-white px-6 pt-16 md:pt-20 pb-12 md:pb-16">
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
