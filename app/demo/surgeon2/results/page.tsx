"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

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

export default function ResultsPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="relative pt-40 pb-20 bg-[#0b1d35] text-white overflow-hidden mb-20">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        Sonuçlar
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Gerçek hastalar, gerçek hikayeler ve değişen hayatlar.
                    </p>
                </div>
            </section>

            {/* Before After Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex flex-col gap-20">
                    {[1, 2].map((item, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-6">
                                <span className="text-[#0047AB] font-bold tracking-widest uppercase text-sm">Vaka #{idx + 1}</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-[#0b1d35]">Rinoplasti Sonuçları</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Hastamızın burun kemeri düzeltildi ve burun ucu kaldırıldı.
                                    Doğal görünüm korunarak yüz hatlarıyla uyumlu bir profil elde edildi.
                                    Operasyon sonrası 1. yıl kontrolü.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">Açık Teknik</div>
                                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">Piezo Cerrahisi</div>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
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
                    ))}
                </div>
            </div>

            {/* Reviews List */}
            <section className="bg-[#f8f9fa] py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <FaQuoteRight className="text-4xl text-[#0047AB] mx-auto mb-6 opacity-30" />
                        <h2 className="text-4xl font-serif text-[#0b1d35]">Hasta Yorumları</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {REVIEWS.map((review, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="flex text-[#D4AF37] gap-1 mb-6">
                                    {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] font-serif font-bold text-xl">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0b1d35]">{review.name}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
