"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PROCEDURES = [
    { title: "Rhinoplasty", icon: "👃", desc: "Aesthetic and functional nose shaping tailored to your facial proportions. We focus on natural results that breathe well." },
    { title: "Revision Rhinoplasty", icon: "✨", desc: "Complex corrective surgery for patients unhappy with previous results. Restoring both function and aesthetics." },
    { title: "Deep Plane Facelift", icon: "👤", desc: "The gold standard in facial rejuvenation. Repositioning muscle and skin for a youthful, non-pulled look." },
    { title: "Otoplasty", icon: "👂", desc: "Ear pinning and reshaping to improve facial balance. Often performed with minimal downtime." },
    { title: "Blepharoplasty", icon: "👁️", desc: "Eyelid surgery to remove excess skin and bags, restoring a rested and alert appearance to the eyes." },
    { title: "Neck Lift", icon: "🧣", desc: "Defining the jawline and removing sagging skin from the neck area for a sleek, elegant profile." },
    { title: "Brow Lift", icon: "🤨", desc: "Elevating the brow position to open up the eyes and reduce forehead wrinkles." },
    { title: "Chin Implant", icon: "🗿", desc: "Enhancing weak chins to improve profile balance, often performed alongside rhinoplasty." }
];

export default function ProceduresPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Header */}
            <header className="text-center max-w-4xl mx-auto px-6 mb-20">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-6xl font-serif text-[#0d3d3b] mb-6"
                >
                    Surgical Procedures
                </motion.h1>
                <div className="w-24 h-1 bg-[#c3a35a] mx-auto mb-8" />
                <p className="text-xl text-slate-600 leading-relaxed">
                    We specialize in facial aesthetics, offering a comprehensive range of surgical solutions designed to enhance your natural beauty with precision and care.
                </p>
            </header>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROCEDURES.map((proc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white p-10 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#c3a35a]"
                    >
                        <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{proc.icon}</div>
                        <h3 className="text-2xl font-serif font-bold text-[#0d3d3b] mb-4">{proc.title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {proc.desc}
                        </p>
                        <button className="flex items-center text-[#c3a35a] font-bold uppercase text-xs tracking-widest gap-2 group-hover:gap-4 transition-all">
                            Learn More <FaArrowRight />
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <section className="mt-32 bg-[#0d3d3b] text-white py-20 text-center px-6">
                <h2 className="text-3xl font-serif mb-6">Not sure which procedure is right for you?</h2>
                <p className="mb-8 opacity-80 max-w-2xl mx-auto">
                    Every face is unique. Book a consultation to discuss your aesthetic goals and receive a personalized treatment plan.
                </p>
                <a href="/demo/surgeon1/contact" className="inline-block bg-[#c3a35a] text-[#0d3d3b] px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Contact Us
                </a>
            </section>
        </div>
    );
}
