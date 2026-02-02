"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";
import { FaPhone, FaInstagram, FaWhatsapp, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function SurgeonDemoPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/40 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop')"
                    }}
                />

                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg md:text-xl font-light tracking-[0.2em] mb-4 uppercase"
                    >
                        Estetik ve Plastik Cerrahi
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
                    >
                        Doğal Güzelliğinizi<br />
                        <span className="italic font-light">Ortaya Çıkarın</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
                            Randevu Alın
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
                            Hizmetlerimiz
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop')"
                            }}
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                            Op. Dr. Ahmet Yılmaz
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            15 yılı aşkın tecrübesiyle, estetik cerrahide doğallığı ve hasta memnuniyetini ön planda tutan yaklaşım. Her hasta özeldir ve kişiye özel tedavi planı gerektirir.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-2">5000+</span>
                                <span className="text-gray-500 uppercase tracking-wider text-sm">Başarılı Operasyon</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 mb-2">15+</span>
                                <span className="text-gray-500 uppercase tracking-wider text-sm">Yıllık Tecrübe</span>
                            </div>
                        </div>
                        <div className="pt-8">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                                alt="Signature"
                                className="h-16 opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Uzmanlık Alanları</h2>
                        <div className="w-24 h-1 bg-gray-200 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Rinoplasti",
                                desc: "Yüzünüzle uyumlu, doğal görünümlü burun estetiği.",
                                img: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2894&auto=format&fit=crop"
                            },
                            {
                                title: "Meme Estetiği",
                                desc: "Kişiye özel planlanan meme büyütme, küçültme ve dikleştirme.",
                                img: "https://images.unsplash.com/photo-1571772996211-2a02c97b76a5?q=80&w=2940&auto=format&fit=crop"
                            },
                            {
                                title: "Vücut Şekillendirme",
                                desc: "Liposuction ve germe ameliyatları ile ideal vücut hatları.",
                                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${service.img}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Section */}
            <section className="py-24 px-4 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">Değişim Hikayeleri</h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                Her hastamızın hikayesi benzersizdir. Gerçekleştirdiğimiz operasyonların sonuçlarını inceleyerek, hayalinizdeki görünüme nasıl kavuşabileceğiniz hakkında fikir edinebilirsiniz.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Doğal Sonuçlar', 'Hızlı İyileşme Süreci', 'Kişiye Özel Planlama'].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-300">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-white border-b-2 border-white/30 pb-1 hover:border-white transition-colors">
                                Tüm Galeriye Git →
                            </button>
                        </div>

                        <div className="relative">
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

            {/* Contact Info Bar */}
            <div className="bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-8 text-center">
                        <FaPhone className="w-6 h-6 mx-auto mb-4 text-gray-400" />
                        <h4 className="font-semibold mb-2">Telefon</h4>
                        <p className="text-gray-600">+90 (212) 555 0123</p>
                        <p className="text-gray-600">+90 (532) 555 0123</p>
                    </div>
                    <div className="p-8 text-center">
                        <FaClock className="w-6 h-6 mx-auto mb-4 text-gray-400" />
                        <h4 className="font-semibold mb-2">Çalışma Saatleri</h4>
                        <p className="text-gray-600">Pzt - Cuma: 09:00 - 18:00</p>
                        <p className="text-gray-600">Cmt: 09:00 - 14:00</p>
                    </div>
                    <div className="p-8 text-center">
                        <FaMapMarkerAlt className="w-6 h-6 mx-auto mb-4 text-gray-400" />
                        <h4 className="font-semibold mb-2">Adres</h4>
                        <p className="text-gray-600">Nişantaşı, Valikonağı Cad.</p>
                        <p className="text-gray-600">Şişli / İstanbul</p>
                    </div>
                </div>
            </div>

            {/* Footer Simple */}
            <footer className="bg-white py-12 px-4 border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-serif font-bold text-gray-900">Dr. Ahmet Yılmaz</div>
                    <div className="flex gap-6">
                        <FaInstagram className="w-6 h-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
                        <FaWhatsapp className="w-6 h-6 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
                    </div>
                    <p className="text-sm text-gray-500">
                        © 2024 Dr. Ahmet Yılmaz. Tüm hakları saklıdır.
                    </p>
                </div>
            </footer>
        </div>
    );
}
