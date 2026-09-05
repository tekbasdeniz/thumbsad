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
    { name: "Uzmanlıklarımız", href: "#capabilities" },
    { name: "Deneyimler", href: "#experiences" },
    { name: "İletişim", href: "#contact" },
    { name: "TruOpt.ai", href: "https://truopt.ai", external: true },
  ],
  en: [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Experiences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
    { name: "TruOpt.ai", href: "https://truopt.ai", external: true },
  ],
};