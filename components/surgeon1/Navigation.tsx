"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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

    const links = [
        { name: "Home", href: "/demo/surgeon1" },
        { name: "About", href: "/demo/surgeon1/about" },
        { name: "Procedures", href: "/demo/surgeon1/procedures" },
        { name: "Results", href: "/demo/surgeon1/results" },
        { name: "Contact", href: "/demo/surgeon1/contact" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0d3d3b] shadow-xl py-3" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/demo/surgeon1" className={`text-2xl font-serif font-bold tracking-wide ${scrolled ? "text-white" : "text-[#0d3d3b]"}`}>
                    Dr. Name <span className="text-[#c3a35a]">Surname</span>
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium uppercase tracking-widest hover:text-[#c3a35a] transition-colors ${pathname === item.href ? "text-[#c3a35a]" : (scrolled ? "text-gray-200" : "text-[#0d3d3b]")
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-[#c3a35a] z-50 relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes className="text-white" /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-[#0d3d3b] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {links.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-serif text-white uppercase tracking-widest hover:text-[#c3a35a] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
