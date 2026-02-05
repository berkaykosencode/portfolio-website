"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaUniversity, FaCertificate } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            {/* --- Hero / Bio Section --- */}
            <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/generatedSurgeon1.png"
                            alt="Dr. Name Surname"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 border-[12px] border-[#c3a35a]/20 pointer-events-none" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h4 className="text-[#c3a35a] font-bold uppercase tracking-widest text-sm mb-4">The Surgeon</h4>
                    <h1 className="text-5xl font-serif text-[#0d3d3b] mb-8">Dr. Name Surname</h1>

                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                        <p>
                            With over 15 years of specialized experience in facial plastic surgery, Dr. Surname is renowned for his ability to synthesize medical precision with an artistic eye.
                        </p>
                        <p>
                            "My philosophy is simple: The best surgery is the one that no one notices. I strive to enhance your natural beauty, preserving the unique characteristics that make you, you."
                        </p>
                        <p>
                            Graduating top of his class from Istanbul University School of Medicine, Dr. Surname completed his residency in Otorhinolaryngology before pursuing advanced fellowships in Facial Plastic Surgery in London and New York.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 bg-white p-4 shadow-sm border-l-4 border-[#c3a35a]">
                            <FaAward className="text-3xl text-[#0d3d3b]" />
                            <div>
                                <div className="text-2xl font-bold text-[#0d3d3b]">15+</div>
                                <div className="text-xs uppercase tracking-wider">Years Exp.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-4 shadow-sm border-l-4 border-[#c3a35a]">
                            <FaUniversity className="text-3xl text-[#0d3d3b]" />
                            <div>
                                <div className="text-xl font-bold text-[#0d3d3b]">Board</div>
                                <div className="text-xs uppercase tracking-wider">Certified</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- Philosophy / Quote --- */}
            <section className="bg-[#0d3d3b] text-white py-24 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#c3a35a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <FaCertificate className="text-[#c3a35a] text-6xl mx-auto mb-8 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight italic">
                        "Perfection isn't about fitting a mold. It's about finding the perfect balance for your unique face."
                    </h2>
                </div>
            </section>

            {/* --- Education & Credentials --- */}
            <section className="max-w-4xl mx-auto px-6">
                <h3 className="text-3xl font-serif text-[#0d3d3b] mb-12 text-center">Education & Credentials</h3>

                <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                    {[
                        { year: "2010", title: "European Board Certification", sub: "Facial Plastic Surgery" },
                        { year: "2008", title: "Reviewer Fellow", sub: "New York Facial Plastic Surgery Center" },
                        { year: "2005", title: "Residency Completed", sub: "Istanbul Research Hospital" },
                        { year: "2000", title: "Medical Degree", sub: "Istanbul University Cerrahpasa" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-8 relative">
                            <div className="w-10 h-10 rounded-full bg-[#c3a35a] border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xs shrink-0 z-10">
                                {item.year}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex-1">
                                <h4 className="text-xl font-serif text-[#0d3d3b] font-bold">{item.title}</h4>
                                <p className="text-slate-500">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
