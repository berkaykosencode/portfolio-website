"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function JournalPage() {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 bg-gray-50 min-h-screen">
            <div className="max-w-[1600px] mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
                >
                    Journal
                </motion.h1>
                <p className="max-w-xl text-gray-600 leading-relaxed">
                    A collection of our finest work. Each case study represents a journey of transformation, handled with privacy and precision.
                </p>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                <div className="order-2 lg:order-1">
                    <div className="border-[1em] border-black shadow-2xl p-1 bg-white">
                        <BeforeAfterSlider
                            beforeImage="/images/beforerhino.png"
                            afterImage="/images/afterrhino.png"
                            beforeLabel="PRE"
                            afterLabel="POST"
                        />
                    </div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                    <span className="inline-block border border-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Case Study 2024</span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        The Art of <br />
                        <span className="italic text-gray-500">Subtlety</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                        Observe the refinement in contour and profile. Our goal is always invisibility—results that look so natural, they defy detection.
                    </p>
                </div>
            </div>

            {/* Second Case (Placeholder for demonstration) */}
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <span className="inline-block border border-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Case Study 2023</span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Restoring <br />
                        <span className="italic text-gray-500">Confidence</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                        Facial rejuvenation that respects your unique anatomy. Turning back the clock without altering the essence.
                    </p>
                </div>

                <div>
                    <div className="border-[1em] border-black shadow-2xl p-1 bg-white">
                        <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-500 font-serif italic">
                            <BeforeAfterSlider
                                beforeImage="/images/beforeFacelift.png"
                                afterImage="/images/afterFacelift.png"
                                beforeLabel="PRE"
                                afterLabel="POST"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
