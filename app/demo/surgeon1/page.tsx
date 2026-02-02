"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaWhatsapp, FaArrowRight, FaStar, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// --- Theme Colors ---
// Primary: #0d3d3b (Deep Teal)
// Accent: #c3a35a (Gold)
// Light: #f8f9fa
// Dark: #092726

const PROCEDURES = [
    { title: "Rhinoplasty", icon: "👃", desc: "Natural looking nose aesthetics personalized for your face." },
    { title: "Revision Rhinoplasty", icon: "✨", desc: "Corrective surgery for previous unsatisfactory results." },
    { title: "Facelift", icon: "👤", desc: "Rejuvenate your appearance with deep plane facelift techniques." },
    { title: "Otoplasty", icon: "👂", desc: "Ear correction surgery for a balanced facial profile." },
    { title: "Blepharoplasty", icon: "👁️", desc: "Eyelid aesthetics to remove tired look and bags." },
    { title: "Neck Lift", icon: "🧣", desc: "Define your jawline and remove sagging neck skin." }
];

const REVIEWS = [
    { name: "Sarah J.", text: "Dr. Surname changed my life. The results are so natural, nobody believes I had surgery!", stars: 5 },
    { name: "Michael B.", text: "Professional, caring, and an absolute artist. Highly recommend his clinic.", stars: 5 },
    { name: "Elif K.", text: "Sürecin başından sonuna kadar çok ilgiliydi. Sonuç tam istediğim gibi.", stars: 5 },
];

export default function Surgeon1Page() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-slate-800">

            {/* --- Navigation --- */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0d3d3b] shadow-xl py-3" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className={`text-2xl font-serif font-bold tracking-wide ${scrolled ? "text-white" : "text-[#0d3d3b]"}`}>
                        Dr. Name <span className="text-[#c3a35a]">Surname</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {["Home", "Procedures", "Results", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm font-medium uppercase tracking-widest hover:text-[#c3a35a] transition-colors ${scrolled ? "text-gray-200" : "text-[#0d3d3b]"}`}
                            >
                                {item}
                            </a>
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
                            {["Home", "Procedures", "Results", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-2xl font-serif text-white uppercase tracking-widest hover:text-[#c3a35a] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* --- Floating WhatsApp Button --- */}
            <a
                href="https://wa.me/905442151282"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center group"
            >
                <FaWhatsapp className="text-3xl" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
                    Book Appointment
                </span>
            </a>

            {/* --- Hero Section --- */}
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8ecec] -z-10 hidden lg:block" />

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#c3a35a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                                European Board Certified
                            </h2>
                            <h1 className="text-5xl lg:text-7xl font-serif text-[#0d3d3b] leading-tight mb-6">
                                Artistry in <br />
                                <span className="italic">Facial Aesthetics</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-md border-l-4 border-[#c3a35a] pl-6">
                                Combining medical precision with artistic vision to reveal your natural beauty. Specializing in Rhinoplasty and Facial Rejuvenation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="bg-[#0d3d3b] text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#092726] transition-colors">
                                View Procedures
                            </button>
                            <button className="border border-[#0d3d3b] text-[#0d3d3b] px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#0d3d3b] hover:text-white transition-colors">
                                Before & After
                            </button>
                        </motion.div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex text-[#c3a35a]">
                                {[1, 2, 3, 4, 5].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <span className="text-sm font-semibold text-slate-500">4.9/5 based on 200+ reviews</span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[600px] w-full"
                    >
                        {/* Main Surgeon Image */}
                        <div className="relative h-full w-full z-10">
                            <Image
                                src="/images/generatedSurgeon1.png"
                                alt="Dr. Surgeon"
                                fill
                                className="object-cover object-top shadow-2xl"
                            />
                            {/* Frame Border Effect */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#c3a35a] -z-10 hidden md:block" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="bg-[#0d3d3b] py-16 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {[
                        { label: "Years Experience", value: "15+" },
                        { label: "Successful Surgeries", value: "5k+" },
                        { label: "International Patients", value: "50+" },
                        { label: "Patient Satisfaction", value: "99%" },
                    ].map((stat, idx) => (
                        <div key={idx} className="p-4">
                            <div className="text-4xl lg:text-5xl font-serif text-[#c3a35a] mb-2">{stat.value}</div>
                            <div className="text-sm uppercase tracking-widest text-white/80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Procedures Section --- */}
            <section id="procedures" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-[#c3a35a] uppercase tracking-widest font-bold text-sm mb-3">Expertise</h3>
                        <h2 className="text-4xl font-serif text-[#0d3d3b]">Surgical Procedures</h2>
                        <div className="w-24 h-1 bg-[#c3a35a] mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROCEDURES.map((proc, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="group p-10 bg-[#f8f9fa] hover:bg-[#0d3d3b] transition-all duration-300 border border-slate-100"
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{proc.icon}</div>
                                <h3 className="text-xl font-serif font-bold text-[#0d3d3b] mb-4 group-hover:text-white">{proc.title}</h3>
                                <p className="text-slate-600 mb-6 group-hover:text-white/80 leading-relaxed">
                                    {proc.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-[#c3a35a] font-bold uppercase text-xs tracking-widest group-hover:text-[#c3a35a]">
                                    Learn More <FaArrowRight className="ml-2" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Before & After Section --- */}
            <section id="results" className="py-24 bg-[#f4f6f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-[#c3a35a] uppercase tracking-widest font-bold text-sm mb-3">Real Results</h3>
                            <h2 className="text-4xl font-serif text-[#0d3d3b] mb-6">Natural Transformations</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We believe in results that enhance your natural features rather than changing who you are.
                                Our patients enjoy a balanced, harmonious look that breathes confidence.
                            </p>
                            <a href="#" className="bg-[#0d3d3b] text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#092726] transition-colors inline-block">
                                View Full Gallery
                            </a>
                        </div>

                        {/* Custom Wrapper for the slider component */}
                        <div className="shadow-2xl rounded-sm border-8 border-white">
                            <BeforeAfterSlider
                                beforeImage="/images/beforerhino.png"
                                afterImage="/images/afterrhino.png"
                                beforeLabel="Before"
                                afterLabel="After"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reviews Section --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#c3a35a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0d3d3b]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <h3 className="text-[#c3a35a] uppercase tracking-widest font-bold text-sm mb-3">Testimonials</h3>
                        <h2 className="text-4xl font-serif text-[#0d3d3b]">Patient Stories</h2>
                        <div className="w-24 h-1 bg-[#c3a35a] mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {REVIEWS.map((review, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#c3a35a]"
                            >
                                <div className="flex text-[#c3a35a] mb-4 gap-1">
                                    {[...Array(review.stars)].map((_, i) => <FaStar key={i} size={14} />)}
                                </div>
                                <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#f4f6f6] flex items-center justify-center text-[#0d3d3b] font-serif font-bold">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0d3d3b] text-sm">{review.name}</h4>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider">Verified Patient</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer id="contact" className="bg-[#0d3d3b] text-white pt-20 pb-10 border-t-4 border-[#c3a35a]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <div className="text-3xl font-serif font-bold mb-6">
                            Dr. Name <span className="text-[#c3a35a]">Surname</span>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Dedicated to providing the highest standard of care in facial plastic surgery.
                            Istanbul, Turkey.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-3 hover:bg-[#c3a35a] transition-colors text-white"><FaInstagram /></a>
                            <a href="#" className="bg-white/10 p-3 hover:bg-[#c3a35a] transition-colors text-white"><FaWhatsapp /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest border-l-4 border-[#c3a35a] pl-4">Contact Info</h4>
                        <ul className="space-y-4 text-white/80">
                            <li className="flex items-start gap-4">
                                <MdLocationOn className="text-[#c3a35a] text-xl mt-1" />
                                <span>Nisantasi, Istanbul<br />Turkey</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhone className="text-[#c3a35a] text-xl" />
                                <span>+90 555 123 45 67</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <MdEmail className="text-[#c3a35a] text-xl" />
                                <span>info@drname.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest border-l-4 border-[#c3a35a] pl-4">Quick Links</h4>
                        <ul className="space-y-2 text-white/80">
                            {['Rhinoplasty', 'Facelift', 'About Dr. Name', 'Patient Guide', 'Contact'].map(link => (
                                <li key={link}><a href="#" className="hover:text-[#c3a35a] transition-colors">› {link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center text-white/40 text-sm border-t border-white/10 pt-8">
                    © {new Date().getFullYear()} Dr. Name Surname. All Rights Reserved. Designed by You.
                </div>
            </footer>
        </div>
    );
}
