"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll Lock
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const navLinks = [
        { name: "Philosophy", path: "/demo/surgeon3/about" },
        { name: "Expertise", path: "/demo/surgeon3/expertise" },
        { name: "Journal", path: "/demo/surgeon3/journal" },
        { name: "Contact", path: "/demo/surgeon3/contact" },
    ];

    // Logic: 
    // - If Menu Open: White Text, Transparent BG (Overlay takes over).
    // - If Scrolled: White navbar, Black text (always readable).
    // - If Top:
    //   - Philosophy Page (/about) -> Black BG -> White Text.
    //   - Others -> White BG -> Black Text.
    const isPhilosophy = pathname === "/demo/surgeon3/about";

    // Determine text color based on state
    // Default to black
    let textColorClass = "text-black";
    let lineColorClass = "bg-black";
    let logoClass = "text-black mix-blend-normal";
    let navBgClass = scrolled ? "py-4 bg-white/90 backdrop-blur-sm" : "py-8 bg-transparent";

    // Override for Philosophy page (unscrolled) OR when Menu is Open
    if (menuOpen || (!scrolled && isPhilosophy)) {
        textColorClass = "text-white";
        lineColorClass = "bg-white";
        logoClass = "text-white mix-blend-normal";
    }

    // If menu is open, force transparent background so the black overlay (z-55) shows through
    if (menuOpen) {
        navBgClass = "py-8 bg-transparent";
    }

    return (
        <>
            <nav className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${navBgClass}`}>
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo area */}
                    <Link href="/demo/surgeon3" className={`font-serif text-2xl md:text-3xl font-bold tracking-tighter z-[70] transition-colors duration-300 ${logoClass}`}>
                        M.D. <span className="italic font-light">Noir</span>
                    </Link>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((item) => (
                            <Link key={item.name} href={item.path} className={`text-xs font-bold uppercase tracking-[0.2em] relative group transition-colors duration-300 ${textColorClass}`}>
                                {item.name}
                                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${lineColorClass}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Menu Trigger (Mobile & Desktop) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`group flex items-center gap-3 z-[70] transition-colors duration-300 ${textColorClass}`}
                    >
                        <span className="hidden md:block text-xs font-bold uppercase tracking-[0.2em]">Menu</span>
                        <div className={`w-8 h-8 flex items-center justify-center border border-current rounded-full transition-transform duration-500 ${menuOpen ? "rotate-45" : "rotate-0"}`}>
                            <FaPlus size={10} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* --- Full Screen Menu Overlay --- */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black z-[55] flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                >
                                    <Link
                                        href={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-4xl md:text-6xl font-serif text-white hover:text-gray-400 italic transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
