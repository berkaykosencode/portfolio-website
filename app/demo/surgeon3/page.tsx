"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Surgeon3Page() {
    return (
        <>
            {/* --- Hero Section --- */}
            <section className="relative min-h-[90vh] pt-32 pb-12 px-6 md:px-12 flex flex-col justify-center">
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
                            <Link href="/demo/surgeon3/contact" className="inline-block border border-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
                                Book Consultation
                            </Link>
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

            {/* --- Intro / Teaser --- */}
            <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-gray-100">
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Philosophy</h3>
                        <p className="text-xl font-serif mb-4">Minimalism is our method; perfection is our pursuit.</p>
                        <Link href="/demo/surgeon3/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline">Read More <MdArrowOutward /></Link>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Expertise</h3>
                        <p className="text-xl font-serif mb-4">Curated procedures tailored to your unique anatomical harmony.</p>
                        <Link href="/demo/surgeon3/expertise" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline">View Procedures <MdArrowOutward /></Link>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Journal</h3>
                        <p className="text-xl font-serif mb-4">Real stories of transformation and regained confidence.</p>
                        <Link href="/demo/surgeon3/journal" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline">View Gallery <MdArrowOutward /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}
