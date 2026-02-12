"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaHospital } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="relative pt-40 pb-20 bg-[#0b1d35] text-white overflow-hidden mb-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047AB]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        Hakkımda
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Bilim ve sanatın kesiştiği noktada, doğal güzelliğinizi ortaya çıkarmak için çalışıyorum.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-serif text-[#0b1d35]">
                        <span className="text-[#0047AB]">Dr. Name Surname</span> Kimdir?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Estetik ve Plastik Cerrahi alanında 15 yılı aşkın deneyimiyle Dr. Name Surname, modern cerrahi tekniklerini sanatsal bir vizyonla birleştiriyor.
                        İstanbul Üniversitesi Tıp Fakültesi'nden dereceyle mezun olduktan sonra, uzmanlığını estetik cerrahi üzerine tamamlamıştır.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Avrupa ve Amerika'da katıldığı sayısız eğitim ve konferansla, en güncel teknikleri hastalarına sunmayı ilke edinmiştir. Özellikle burun estetiği (Rinoplasti) ve yüz gençleştirme cerrahisinde uluslararası bir üne sahiptir.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                        <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                            <FaGraduationCap className="text-3xl text-[#0047AB] mb-4" />
                            <h4 className="font-bold text-[#0b1d35] mb-2">Eğitim</h4>
                            <p className="text-sm text-gray-500">İstanbul Üniversitesi Tıp Fakültesi</p>
                        </div>
                        <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                            <FaAward className="text-3xl text-[#0047AB] mb-4" />
                            <h4 className="font-bold text-[#0b1d35] mb-2">Sertifikalar</h4>
                            <p className="text-sm text-gray-500">European Board Certified (EBOPRAS)</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/generatedSurgeon2.png')"
                        }}
                    />
                </motion.div>
            </div>

            {/* Philosophy */}
            <section className="bg-[#f8f9fa] py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif text-[#0b1d35] mb-16">Felsefemiz</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Doğallık", desc: "Abartıdan uzak, yüz hatlarınızla uyumlu, doğal sonuçlar önceliğimizdir." },
                            { title: "Güven", desc: "Hasta-doktor ilişkisinde şeffaflık ve dürüstlük temel ilkemizdir." },
                            { title: "Mükemmellik", desc: "Her operasyonda en ince detaya kadar mükemmelliği hedefleriz." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-serif text-[#0047AB] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
