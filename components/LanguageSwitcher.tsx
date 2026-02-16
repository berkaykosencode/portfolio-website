"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200">
            <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${locale === "en"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLocale("tr")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${locale === "tr"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                TR
            </button>
        </div>
    );
}
