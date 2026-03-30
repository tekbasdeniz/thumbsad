"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const About = () => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    return (
        <section className="w-full py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-black">
                        {isEn ? "Our Structure" : "Yapımız"}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        {isEn
                            ? "A project-driven structure combining growth strategy, AI systems, and execution."
                            : "Büyüme stratejisi, yapay zeka sistemleri ve uygulamayı bir araya getiren proje odaklı yapı."
                        }
                    </p>
                    <Link
                        href={isEn ? "/en/about" : "/about"}
                        className="inline-flex items-center justify-center mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                        {isEn ? "Discover more" : "Daha fazlasını keşfedin"} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;