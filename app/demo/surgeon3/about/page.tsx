"use client";

import { motion } from "framer-motion";

export default function PhilosophyPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <section className="py-32 lg:py-48 px-6 md:px-12 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/surgeon3_abstract.png')" }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="block text-xs font-bold uppercase tracking-[0.3em] mb-8 text-gray-400"
                    >
                        The Philosophy
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-12"
                    >
                        "True beauty lies in the <span className="italic text-gray-400">balance</span> of nature and refinement."
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        We believe that aesthetic surgery is not about changing who you are, but revealing the version of yourself that has been waiting to emerge. Minimalism is our method; perfection is our pursuit.
                    </motion.p>
                </div>
            </section>
        </div>
    );
}
