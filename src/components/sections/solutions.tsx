import React from 'react';
import Link from 'next/link';

const Solutions = () => {
    const solutionItems = [
        "Yapay Zeka Büyüme Projeleri",
        "Performans Pazarlama",
        "Kreatif & İçerik Operasyonları",
        "Kampanya Yapıları",
        "Otomasyon",
        "Stratejik Uygulama"
    ];

    return (
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
                        {solutionItems.map((item) => (
                            <div
                                key={item}
                                className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-center font-medium text-gray-800 hover:shadow-md transition-all text-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;