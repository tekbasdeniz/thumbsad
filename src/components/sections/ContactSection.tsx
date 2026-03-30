"use client";

import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  const text = isEn
    ? {
        title: "Unlock Your Brand's AI Potential",
        description:
          "For projects, partnerships, and growth initiatives, get in touch.",
        btn: "Get in Touch",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressText: "Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, İstanbul, Türkiye",
      }
    : {
        title: "Markanızın İleri Seviye AI Potansiyelini Ortaya Çıkarın",
        description:
          "Projeler ve iş birlikleri için iletişime geçebilirsiniz.",
        btn: "Randevu Oluştur",
        email: "E-Posta",
        phone: "Telefon",
        address: "Adres",
        addressText: "Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, İstanbul, Türkiye",
      };

  if (pathname === "/contact" || pathname === "/en/contact") {
    return null;
  }

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30 -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-center relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {text.title}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            {text.description}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">{text.email}</div>
              <a href="mailto:info@thumbsad.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">info@thumbsad.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">{text.phone}</div>
              <a href="tel:+902129550063" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">+90 212 955 00 63</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">{text.address}</div>
              <span className="text-gray-900 font-medium">{text.addressText}</span>
            </div>
          </div>

          <a
            href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 px-6 py-4 rounded-xl bg-[#0a246b] text-white text-center font-bold hover:bg-[#0a246b]/90 transition-colors"
          >
            {text.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
