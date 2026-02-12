"use client";

import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

const PROCEDURES = [
    {
        title: "Rhinoplasty",
        desc: "Yüz harmonisi için kişiselleştirilmiş burun estetiği. Hem estetik hem de fonksiyonel iyileştirme.",
        img: "/images/afterrhino.png"
    },
    {
        title: "Facelift",
        desc: "Zamanın izlerini silen, doğal gençleştirme teknikleri. Deep plane ve mini facelift seçenekleri.",
        img: "/images/afterFacelift.png"
    },
    {
        title: "Body Contour",
        desc: "Hayalinizdeki vücut hatlarına profesyonel dokunuş. Liposuction ve karın germe.",
        img: "/images/afterBodyContour.png"
    },
];

export default function ProceduresPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="relative pt-40 pb-20 bg-[#0b1d35] text-white overflow-hidden mb-20">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        Prosedürler
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Modern tıp teknolojisi ve uzman ellerde güvenli estetik çözümler.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROCEDURES.map((proc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${proc.img}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-serif text-[#0b1d35] mb-3 group-hover:text-[#0047AB] transition-colors">{proc.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6 text-sm">{proc.desc}</p>
                            <span className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-widest cursor-pointer hover:underline">
                                Detaylı Bilgi <MdArrowForward />
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
