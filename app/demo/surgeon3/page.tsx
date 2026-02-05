"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlus, FaTimes, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Surgeon3Page() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll Lock
    useEffect(() => {
        if (menuOpen) {
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
    }, [menuOpen]);

    const PROCEDURES = [
        { id: "01", title: "Rhinoplasty", tag: "Facial Harmony" },
        { id: "02", title: "Face Lift", tag: "Rejuvenation" },
        { id: "03", title: "Blepharoplasty", tag: "Eye Aesthetics" },
        { id: "04", title: "Body Contour", tag: "Sculpting" },
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* --- Navigation --- */}
            <nav className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${scrolled ? "py-4 bg-white/90 backdrop-blur-sm" : "py-8 bg-transparent"}`}>
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo area */}
                    <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter z-[70] mix-blend-difference text-white md:text-black md:mix-blend-normal">
                        M.D. <span className="italic font-light">Noir</span>
                    </a>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        {["Philosophy", "Expertise", "Journal", "Contact"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.2em] relative group">
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Menu Trigger (Mobile & Desktop) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group flex items-center gap-3 z-[70] mix-blend-difference text-white md:text-black md:mix-blend-normal"
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
                            {["Philosophy", "Expertise", "Journal", "Contact"].map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-4xl md:text-6xl font-serif text-white hover:text-gray-400 italic transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Hero Section --- */}
            <section className="relative min-h-[100vh] pt-32 pb-12 px-6 md:px-12 flex flex-col justify-center">
                <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Big Typography */}
                    <div className="lg:col-span-7 relative z-10 order-2 lg:order-1">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[12vw] lg:text-[10vw] leading-[0.8] font-serif font-medium tracking-tighter"
                        >
                            Aesthetic <br />
                            <span className="italic pl-12 md:pl-24">Mastery</span>
                        </motion.h1>

                        <div className="mt-12 md:mt-24 ml-2 md:ml-24 max-w-md">
                            <p className="text-sm md:text-base font-medium leading-relaxed mb-8">
                                Redefining the standards of beauty through precision,
                                science, and an uncompromising artistic vision.
                            </p>
                            <a href="#contact" className="inline-block border border-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
                                Book Consultation
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="lg:col-span-5 relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2">
                        <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                            <motion.div
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full bg-cover bg-center grayscale contrast-125"
                                style={{ backgroundImage: "url('/images/surgeon3_hero.png')" }}
                            />
                        </div>
                        {/* Floating Tag */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 hidden md:block border border-gray-100 shadow-xl">
                            <span className="block text-xl font-serif font-bold">15+</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Years Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Philosophy Section (Parallax) --- */}
            <section id="philosophy" className="py-32 lg:py-48 px-6 md:px-12 bg-black text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/surgeon3_abstract.png')" }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="block text-xs font-bold uppercase tracking-[0.3em] mb-8 text-gray-400">The Philosophy</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-12">
                        "True beauty lies in the <span className="italic text-gray-400">balance</span> of nature and refinement."
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                        We believe that aesthetic surgery is not about changing who you are, but revealing the version of yourself that has been waiting to emerge. Minimalism is our method; perfection is our pursuit.
                    </p>
                </div>
            </section>

            {/* --- Selected Works (List) --- */}
            <section id="expertise" className="py-32 lg:py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black pb-8">
                    <h2 className="text-5xl md:text-7xl font-serif tracking-tight">Expertise</h2>
                    <div className="mb-2">
                        <span className="block text-right text-xs font-bold uppercase tracking-[0.2em] mb-1">Curated</span>
                        <span className="block text-right text-xs text-gray-500">Procedures</span>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    {PROCEDURES.map((proc) => (
                        <div
                            key={proc.id}
                            className="group flex flex-col md:flex-row items-baseline justify-between border-b border-gray-200 py-12 hover:pl-8 transition-all duration-500 cursor-pointer hover:bg-gray-50"
                        >
                            <div className="flex items-baseline gap-8 md:gap-16">
                                <span className="text-xs font-bold font-mono text-gray-400 group-hover:text-black transition-colors">/{proc.id}</span>
                                <h3 className="text-4xl md:text-6xl font-serif text-gray-300 group-hover:text-black transition-colors duration-300">{proc.title}</h3>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-xs font-bold uppercase tracking-widest">{proc.tag}</span>
                                <MdArrowOutward className="text-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Results Section (Framed Slider) --- */}
            <section id="journal" className="py-32 px-6 md:px-12 bg-gray-50">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="border-[1em] border-black shadow-2xl p-1 bg-white">
                            <BeforeAfterSlider
                                beforeImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                                afterImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                                beforeLabel="PRE"
                                afterLabel="POST"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="inline-block border border-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Case Study 2024</span>
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                            The Art of <br />
                            <span className="italic text-gray-500">Subtlety</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Observe the refinement in contour and profile. Our goal is always invisibility—results that look so natural, they defy detection.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
                            View Full Gallery <MdArrowOutward />
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Minimal Footer --- */}
            <footer id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-20">
                    <div className="md:col-span-2">
                        <a href="#" className="font-serif text-4xl block mb-8">M.D. Noir</a>
                        <p className="text-gray-500 max-w-sm">
                            Excellence is not an act, but a habit. <br />
                            Serving international patients in the heart of Istanbul.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Contact</h4>
                        <p className="font-serif text-xl">+90 (212) 555 0123</p>
                        <p className="font-serif text-xl">info@mdnoir.com</p>
                        <p className="font-serif text-xl">Nisantasi, Istanbul</p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Social</h4>
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                            <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-gray-400 transition-colors">WhatsApp</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1800px] mx-auto pt-8 flex flex-col md:flex-row justify-between text-[10px] text-gray-600 uppercase tracking-widest">
                    <span>© 2024 M.D. Noir. All Rights Reserved.</span>
                    <span className="md:mt-0 mt-4">Design by You</span>
                </div>
            </footer>
        </div>
    );
}
