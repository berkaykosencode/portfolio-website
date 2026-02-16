"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Berkay Kösen</h3>
            <p className="text-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#demo" className="hover:text-accent transition-colors">
                  {t.footer.quickLinks.demo}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition-colors">
                  {t.footer.quickLinks.pricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t.footer.quickLinks.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  {t.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-accent transition-colors">
                  {t.footer.legal.kvkk}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            {t.footer.copyright}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {t.footer.subCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
