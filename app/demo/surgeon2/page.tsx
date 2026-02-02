"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";
import { FaPhone, FaInstagram, FaWhatsapp, FaStar, FaQuoteRight } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdArrowForward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";

const REVIEWS = [
    {
        name: "Elif Demir",
        role: "RINOPLASTI HASTASI",
        text: "Dr. Name Surname sadece harika bir cerrah değil, aynı zamanda süreci başından sonuna kadar güvenle yöneten bir sanatçı. Sonuçlar beklentimin çok ötesinde.",
        initial: "E",
        stars: 5
    },
    {
        name: "Ayşe Yılmaz",
        role: "MEME ESTETİĞİ HASTASI",
        text: "Ameliyat öncesi çok gergindim ama Dr. Name Bey'in ilgisi ve detaylı açıklamaları beni çok rahatlattı. Sonuçtan inanılmaz memnunum, kendime güvenim geri geldi!",
        initial: "A",
        stars: 5
    },
    {
        name: "Zeynep Kaya",
        role: "FACELIFT HASTASI",
        text: "Yıllar sonra aynaya baktığımda kendimi tekrar genç hissetmek paha biçilemez. Doğal bir görünüm istediğimi belirtmiştim ve tam da hayal ettiğim gibi oldu.",
        initial: "Z",
        stars: 5
    }
];

// --- Theme Colors ---
// Primary (Medical Blue): #0047AB
// Accent (Champagne Gold): #D4AF37
// Background: #ffffff / #f8f9fa
// Dark: #0b1d35

export default function Surgeon2Page() {
    const [scrolled, setScrolled] = useState(false);
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#D4AF37] selection:text-white">

            {/* --- Navigation (Floating Glass) --- */}
            <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 rounded-b-2xl ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="font-serif text-2xl font-bold tracking-tight text-[#0b1d35]">
                        Dr. Name <span className="text-[#0047AB]">Surname</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-12">
                        {["Hakkımda", "Prosedürler", "Galeri", "İletişim"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-600 hover:text-[#0047AB] transition-colors uppercase tracking-widest"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <a href="#contact" className="hidden md:flex bg-[#0047AB] hover:bg-[#003380] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg hover:shadow-[#0047AB]/20">
                        Randevu Al
                    </a>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/generatedSurgeon2.png')"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-[#0047AB]/5 rounded-full border border-[#0047AB]/10">
                            <span className="text-[#0047AB] text-xs font-bold tracking-[0.2em] uppercase">
                                Estetik & Plastik Cerrahi
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-serif text-[#0b1d35] leading-[1.1]">
                            Precision in <br />
                            <span className="text-[#D4AF37] italic">Aesthetics</span>
                        </h1>

                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg border-l-2 border-[#D4AF37] pl-6">
                            Bilimsel mükemmellik ve sanatsal bakış açısının birleşimi.
                            Doğal güzelliğinizi güvenle ortaya çıkarın.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <button className="bg-[#0b1d35] text-white px-10 py-4 rounded-full font-medium shadow-xl hover:bg-[#152c4a] transition-all transform hover:-translate-y-1">
                                Detaylı Bilgi
                            </button>
                            <button className="group flex items-center justify-center gap-3 bg-white border border-gray-200 text-[#0b1d35] px-10 py-4 rounded-full font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                                Galeriyi İncele
                                <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { number: "15+", label: "Yıl Deneyim" },
                        { number: "5k+", label: "Mutlu Hasta" },
                        { number: "40+", label: "Ülke" },
                        { number: "100%", label: "Memnuniyet" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center md:text-left md:border-r border-gray-100 last:border-0 md:pl-8 first:pl-0">
                            <div className="text-4xl font-serif text-[#0b1d35] font-bold mb-1">{stat.number}</div>
                            <div className="text-sm text-[#D4AF37] font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Procedures (Glassmorphism) --- */}
            <section className="py-32 px-6 bg-[#f8f9fa] relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047AB]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-[#0047AB] font-bold tracking-widest uppercase text-sm mb-4 block">Uzmanlık Alanları</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#0b1d35]">Exclusive Procedures</h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-[#0047AB] font-medium hover:text-[#D4AF37] transition-colors pb-2 border-b border-[#0047AB]/20 hover:border-[#D4AF37]">
                            Tüm Operasyonlar <MdArrowForward />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Rhinoplasty",
                                desc: "Yüz harmonisi için kişiselleştirilmiş burun estetiği.",
                                img: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2894&auto=format&fit=crop"
                            },
                            {
                                title: "Facelift",
                                desc: "Zamanın izlerini silen, doğal gençleştirme teknikleri.",
                                img: "https://images.unsplash.com/photo-1571772996211-2a02c97b76a5?q=80&w=2940&auto=format&fit=crop"
                            },
                            {
                                title: "Body Contour",
                                desc: "Hayalinizdeki vücut hatlarına profesyonel dokunuş.",
                                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
                            }
                        ].map((proc, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="group bg-white/60 backdrop-blur-lg border border-white/50 p-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${proc.img}')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="px-4 pb-6">
                                    <h3 className="text-2xl font-serif text-[#0b1d35] mb-3 group-hover:text-[#0047AB] transition-colors">{proc.title}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6">{proc.desc}</p>
                                    <span className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                                        İncele <MdArrowForward />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Before / After Section --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-[1px] bg-[#D4AF37]" />
                            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Gerçek Sonuçlar</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0b1d35] mb-8 leading-tight">
                            Güven Veren <br />
                            <span className="text-[#0047AB]">Değişimler</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                            Her operasyon, hastamızın doğal güzelliğini en iyi şekilde ortaya çıkarmak için titizlikle planlanır.
                            Şeffaflık ilkesiyle paylaştığımız sonuçlar, sanatımızın en büyük kanıtıdır.
                        </p>

                        <div className="space-y-6">
                            {["Doğal Görünüm", "1 Yıl Sonraki Kararlı Sonuçlar", "Minimal İyileşme Süreci"].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#0047AB]" />
                                    <span className="text-[#0b1d35] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 border border-[#0047AB]/10 rounded-3xl -z-10 translate-x-4 translate-y-4" />
                        <div className="shadow-2xl rounded-2xl overflow-hidden border-8 border-white">
                            <BeforeAfterSlider
                                beforeImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                                afterImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                                beforeLabel="Önce"
                                afterLabel="Sonra"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reviews Section --- */}
            <section className="py-32 px-6 bg-[#0b1d35] relative overflow-hidden text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center">
                        <FaQuoteRight className="text-[#D4AF37] text-6xl mx-auto mb-10 opacity-50" />

                        <div className="relative px-12">
                            {/* Left Arrow */}
                            <button
                                onClick={prevReview}
                                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                                aria-label="Previous review"
                            >
                                <MdChevronLeft className="text-4xl" />
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={nextReview}
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                                aria-label="Next review"
                            >
                                <MdChevronRight className="text-4xl" />
                            </button>

                            <motion.div
                                key={currentReview}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed mb-12 text-white/90 italic min-h-[150px] flex items-center justify-center">
                                    "{REVIEWS[currentReview].text}"
                                </h3>

                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#0047AB] font-serif font-bold text-2xl">
                                        {REVIEWS[currentReview].initial}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg tracking-wide uppercase">{REVIEWS[currentReview].name}</div>
                                        <div className="text-[#D4AF37] text-sm font-bold tracking-widest mt-1">{REVIEWS[currentReview].role}</div>
                                    </div>
                                    <div className="flex text-[#D4AF37] gap-1 mt-2">
                                        {[...Array(REVIEWS[currentReview].stars)].map((_, i) => <FaStar key={i} />)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer (Minimalist Dark Blue) --- */}
            <footer className="bg-[#081526] text-white/60 py-20 px-6 border-t border-[#ffffff]/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="font-serif text-3xl font-bold text-white block mb-6">
                            Dr. Name <span className="text-[#0047AB]">Surname</span>
                        </a>
                        <p className="max-w-sm font-light leading-relaxed mb-8">
                            Uluslararası standartlarda estetik cerrahi hizmeti.
                            İstanbul'un kalbinde, modern tıp teknolojisi ile doğal güzelliğiniz için çalışıyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0047AB] hover:text-white transition-colors"><FaInstagram /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0047AB] hover:text-white transition-colors"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">İletişim</h4>
                        <ul className="space-y-4 font-light">
                            <li className="flex gap-3 items-start hover:text-white transition-colors">
                                <MdLocationOn className="text-[#D4AF37] text-xl shrink-0" />
                                <span>Nişantaşı, Valikonağı Cad.<br />No: 123 İstanbul</span>
                            </li>
                            <li className="flex gap-3 items-center hover:text-white transition-colors">
                                <FaPhone className="text-[#D4AF37] text-xl shrink-0" />
                                <span>+90 (212) 555 0123</span>
                            </li>
                            <li className="flex gap-3 items-center hover:text-white transition-colors">
                                <MdEmail className="text-[#D4AF37] text-xl shrink-0" />
                                <span>info@drahmet.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Linkler</h4>
                        <ul className="space-y-3 font-light">
                            {['Hakkımda', 'Rinoplasti', 'Meme Estetiği', 'Vücut Estetiği', 'Blog', 'İletişim'].map(link => (
                                <li key={link}><a href="#" className="hover:text-[#D4AF37] transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-[#ffffff]/5 text-center text-sm font-light">
                    © {new Date().getFullYear()} Dr. Name Surname. Tüm hakları saklıdır.
                </div>
            </footer>
        </div>
    );
}
