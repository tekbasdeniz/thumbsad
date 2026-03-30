// src/lib/content.ts

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface NavigationContent {
  tr: NavItem[];
  en: NavItem[];
}

export const navigation: NavigationContent = {
  tr: [
    { name: "Hakkımızda", href: "#about" },
    { name: "Çözümler", href: "#solutions" },
    { name: "Deneyimler", href: "#experiences" },
    { name: "İletişim", href: "#contact" },
    { name: "TruOpt.ai", href: "https://truopt.ai", external: true },
  ],
  en: [
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Experiences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
    { name: "TruOpt.ai", href: "https://truopt.ai", external: true },
  ],
};