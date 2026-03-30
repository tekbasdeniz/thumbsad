import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ContactSection from "@/components/sections/ContactSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThumbsAd | İleri Düzey Dijital Projeler İçin AI Growth Partner",
  description: "Büyüme stratejisi, yapay zeka sistemleri ve uygulamayı bir araya getiren proje odaklı yapı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
