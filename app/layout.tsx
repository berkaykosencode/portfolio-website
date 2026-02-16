import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berkay Kösen - Estetik Klinikler için Web Geliştirici",
  description: "Türkiye'nin en iyi plastik cerrahları için dijital klinikler tasarlıyorum. Modern, mobil uyumlu ve KVKK uyumlu web siteleri.",
  keywords: "plastik cerrahi web sitesi, estetik klinik web tasarımı, medikal web geliştirme, KVKK uyumlu, mobil uyumlu",
  authors: [{ name: "Berkay Kösen" }],
  openGraph: {
    title: "Berkay Kösen - Estetik Klinikler için Web Geliştirici",
    description: "Türkiye'nin en iyi plastik cerrahları için dijital klinikler tasarlıyorum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
