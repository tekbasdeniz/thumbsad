"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinksTr = [
  { name: "Hakkımızda", href: "/about" },
  { name: "Çözümler", href: "/solutions" },
  { name: "İçgörüler", href: "/insights" },
  { name: "Deneyimler", href: "/experiences" },
  { name: "İletişim", href: "/contact" },
];

const navLinksEn = [
  { name: "About", href: "/en/about" },
  { name: "Solutions", href: "/en/solutions" },
  { name: "Insights", href: "/en/insights" },
  { name: "Experiences", href: "/en/experiences" },
  { name: "Contact", href: "/en/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const links = isEn ? navLinksEn : navLinksTr;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLangUrl = isEn
    ? pathname.replace("/en", "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled
          ? "bg-[#0a246b] border-white/10 shadow-md py-2 md:py-3"
          : "bg-[#0a246b] border-transparent py-3 md:py-5"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={isEn ? "/en" : "/"}
          onClick={() => window.scrollTo(0, 0)}
          className={`transition-all duration-300 hover:opacity-80 block relative mix-blend-lighten ${isScrolled
              ? "w-[150px] h-[50px] md:w-[280px] md:h-[75px]"
              : "w-[180px] h-[60px] md:w-[380px] md:h-[105px]"
            }`}
        >
          <Image
            src="/images/thumbsad-logo.webp"
            alt="ThumbsAd Logo"
            fill
            sizes="(max-width: 768px) 150px, 400px"
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${pathname === link.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-4">
            <Link
              href="https://truopt.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              TruOpt.ai
            </Link>
            <div className="flex items-center flex-row gap-2 text-xs font-semibold tracking-wider">
              <Link
                href={isEn ? toggleLangUrl : pathname}
                className={`${!isEn ? "text-white" : "text-gray-400 hover:text-gray-200"
                  } transition-colors`}
              >
                TR
              </Link>
              <span className="text-gray-500">/</span>
              <Link
                href={!isEn ? toggleLangUrl : pathname}
                className={`${isEn ? "text-white" : "text-gray-400 hover:text-gray-200"
                  } transition-colors`}
              >
                EN
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a246b] border-b border-white/10 py-4 px-6 shadow-lg flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-200 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-full bg-white/10 my-2" />
          <Link
            href="https://truopt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-blue-400"
          >
            TruOpt.ai
          </Link>
          <div className="flex gap-4 text-sm font-semibold tracking-wider pt-2">
            <Link
              href={isEn ? toggleLangUrl : pathname}
              onClick={() => setMobileMenuOpen(false)}
              className={!isEn ? "text-white" : "text-gray-400"}
            >
              TR
            </Link>
            <Link
              href={!isEn ? toggleLangUrl : pathname}
              onClick={() => setMobileMenuOpen(false)}
              className={isEn ? "text-white" : "text-gray-400"}
            >
              EN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
