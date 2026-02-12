"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === "/demo/surgeon2";
    // Subpages have dark blue headers, so we need light text when not scrolled
    const isDarkHeader = !isHomePage;

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Hakkımda", path: "/demo/surgeon2/about" },
        { name: "Prosedürler", path: "/demo/surgeon2/procedures" },
        { name: "Galeri", path: "/demo/surgeon2/results" },
        { name: "İletişim", path: "/demo/surgeon2/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    // Determine styles based on state
    // If mobile menu is open -> Dark text (on white menu bg) because button is part of nav which is on top
    // If Scrolled -> Dark text (on white nav bg)
    // If Unscrolled & DarkHeader Page -> White text
    // If Unscrolled & Home Page -> Dark text (default)
    const shouldUseWhiteText = !mobileMenuOpen && !scrolled && isDarkHeader;

    return (
        <>
            <nav
                className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${mobileMenuOpen
                    ? "bg-transparent py-6" // Blend with menu overlay
                    : scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-4 rounded-b-2xl"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/demo/surgeon2" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${shouldUseWhiteText ? "text-white" : "text-[#0b1d35]"}`}>
                        Dr. Name <span className={shouldUseWhiteText ? "text-[#D4AF37]" : "text-[#0047AB]"}>Surname</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-sm font-medium transition-colors uppercase tracking-widest ${isActive(item.path)
                                    ? (shouldUseWhiteText ? "text-[#D4AF37]" : "text-[#0047AB]")
                                    : (shouldUseWhiteText ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-[#0047AB]")
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/demo/surgeon2/contact"
                        className={`hidden md:flex px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg hover:shadow-xl ${shouldUseWhiteText
                            ? "bg-white text-[#0b1d35] hover:bg-gray-100"
                            : "bg-[#0047AB] hover:bg-[#003380] text-white hover:shadow-[#0047AB]/20"
                            }`}
                    >
                        Randevu Al
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden text-2xl transition-colors ${shouldUseWhiteText ? "text-white" : "text-[#0b1d35]"}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden h-[100dvh]"
                    >
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isActive(item.path) ? "text-[#0047AB]" : "text-[#0b1d35] hover:text-[#0047AB]"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/demo/surgeon2/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-[#0047AB] text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest shadow-xl"
                        >
                            Randevu Al
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
