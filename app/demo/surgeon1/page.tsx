"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Link from "next/link";

const PROCEDURES_TEASER = [
    { title: "Rhinoplasty", icon: "👃", desc: "Natural looking nose aesthetics personalized for your face." },
    { title: "Facelift", icon: "👤", desc: "Rejuvenate your appearance with deep plane facelift techniques." },
    { title: "Blepharoplasty", icon: "👁️", desc: "Eyelid aesthetics to remove tired look and bags." },
];

const REVIEWS = [
    { name: "Sarah J.", text: "Dr. Surname changed my life. The results are so natural, nobody believes I had surgery!", stars: 5 },
    { name: "Michael B.", text: "Professional, caring, and an absolute artist. Highly recommend his clinic.", stars: 5 },
    { name: "Elif K.", text: "Sürecin başından sonuna kadar çok ilgiliydi. Sonuç tam istediğim gibi.", stars: 5 },
];

export default function Surgeon1Home() {
    return (
        <>
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
                            <Link href="/demo/surgeon1/procedures" className="bg-[#0d3d3b] text-white px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#092726] transition-colors text-center">
                                View Procedures
                            </Link>
                            <Link href="/demo/surgeon1/results" className="border border-[#0d3d3b] text-[#0d3d3b] px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#0d3d3b] hover:text-white transition-colors text-center">
                                Before & After
                            </Link>
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

            {/* --- Procedures Teaser --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif text-[#0d3d3b] mb-12">Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {PROCEDURES_TEASER.map((proc, idx) => (
                            <div key={idx} className="p-8 border border-slate-100 hover:border-[#c3a35a] transition-colors">
                                <div className="text-4xl mb-4">{proc.icon}</div>
                                <h3 className="text-xl font-bold text-[#0d3d3b] mb-2">{proc.title}</h3>
                                <p className="text-slate-500 mb-4">{proc.desc}</p>
                                <Link href="/demo/surgeon1/procedures" className="text-[#c3a35a] font-bold text-sm uppercase tracking-widest hover:underline">Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Testimonials --- */}
            <section className="py-24 bg-[#f4f6f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-[#0d3d3b]">Patient Stories</h2>
                        <div className="w-24 h-1 bg-[#c3a35a] mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {REVIEWS.map((review, idx) => (
                            <div key={idx} className="bg-white p-8 shadow-sm">
                                <div className="flex text-[#c3a35a] mb-4 gap-1">
                                    {[...Array(review.stars)].map((_, i) => <FaStar key={i} size={14} />)}
                                </div>
                                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                                <h4 className="font-bold text-[#0d3d3b] text-sm">{review.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
