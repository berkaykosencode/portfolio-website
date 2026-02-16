"use client";

import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const PROCEDURES = [
    {
        id: "01",
        title: "Rhinoplasty",
        tag: "Facial Harmony",
        desc: "Refining the nose to harmonize with facial features.",
        longDesc: "Rhinoplasty is more than just reshaping the nose; it is about creating balance and harmony within the face. We employ advanced open and closed techniques, including Piezo ultrasonic surgery, to ensure precise bone sculpting with minimal trauma. Whether correcting a deviation, refining the tip, or smoothing a dorsal hump, the goal is always a natural, unoperated look that functions perfectly."
    },
    {
        id: "02",
        title: "Face Lift",
        tag: "Rejuvenation",
        desc: "Restoring youthful contours with deep plane techniques.",
        longDesc: "Our Deep Plane Facelift technique addresses the underlying muscular structure of the face, not just the skin. This allows for a significant lift without the 'pulled' look often associated with traditional facelifts. By repositioning the deep tissues and releasing the ligaments, we restore the natural volume of the cheeks and define the jawline, turning back the clock by 10-15 years."
    },
    {
        id: "03",
        title: "Blepharoplasty",
        tag: "Eye Aesthetics",
        desc: "Revitalizing the eyes for a refreshed look.",
        longDesc: "The eyes are the focal point of the face. Upper blepharoplasty removes excess skin that creates a tired and heavy appearance, while lower blepharoplasty addresses puffiness and bags. We focus on preserving volume to avoid a hollowed look, ensuring the result is bright, rested, and completely natural."
    },
    {
        id: "04",
        title: "Body Contour",
        tag: "Sculpting",
        desc: "Liposuction and body sculpting for ideal proportions.",
        longDesc: "Body contouring is the art of sculpting the human form. Using VASER and High-Definition Liposuction, we don't just remove fat; we etch out the underlying musculature to create athletic, defined curves. From 360 Lipo to Mommy Makeovers, every procedure is tailored to enhance your natural silhouette."
    },
    {
        id: "05",
        title: "Breast Augmentation",
        tag: "Silhouette",
        desc: "Enhancing volume and shape with natural results.",
        longDesc: "We believe in breast aesthetics that complement your body frame. Whether using the latest generation implants or fat transfer (composite augmentation), we prioritize safety and long-term stability. Our techniques ensure a natural slope and feel, avoiding the 'bolted-on' appearance for a seamless integration with your physique."
    },
];

export default function ExpertisePage() {
    const [selectedProcedure, setSelectedProcedure] = useState<typeof PROCEDURES[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProcedure) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProcedure]);

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black pb-8">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-serif tracking-tight"
                >
                    Expertise
                </motion.h1>
                <div className="mb-2">
                    <span className="block text-right text-xs font-bold uppercase tracking-[0.2em] mb-1">Curated</span>
                    <span className="block text-right text-xs text-gray-500">Procedures</span>
                </div>
            </div>

            <div className="grid grid-cols-1">
                {PROCEDURES.map((proc, idx) => (
                    <motion.div
                        key={proc.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedProcedure(proc)}
                        className="group flex flex-col md:flex-row items-baseline justify-between border-b border-gray-200 py-12 hover:pl-8 transition-all duration-500 cursor-pointer hover:bg-gray-50"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                            <span className="text-xs font-bold font-mono text-gray-400 group-hover:text-black transition-colors">/{proc.id}</span>
                            <div>
                                <h3 className="text-4xl md:text-6xl font-serif text-gray-300 group-hover:text-black transition-colors duration-300">{proc.title}</h3>
                                <p className="mt-4 text-gray-500 max-w-md hidden group-hover:block transition-all duration-300 transform origin-top">{proc.desc}</p>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-xs font-bold uppercase tracking-widest">{proc.tag}</span>
                            <MdArrowOutward className="text-xl" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProcedure && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedProcedure(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProcedure(null)}
                                className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left: Image / Tag */}
                                <div className="md:w-1/3 bg-gray-100 p-12 flex flex-col justify-between">
                                    <div>
                                        <span className="text-6xl font-serif font-bold opacity-10 leading-none">
                                            {selectedProcedure.id}
                                        </span>
                                        <h3 className="text-3xl font-serif mt-8 mb-4">{selectedProcedure.title}</h3>
                                        <div className="inline-block border border-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                            {selectedProcedure.tag}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="md:w-2/3 p-12 lg:p-16 flex flex-col justify-center">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">About the Procedure</h4>
                                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-12">
                                        {selectedProcedure.longDesc}
                                    </p>

                                    <div className="flex gap-8">
                                        <button
                                            onClick={() => window.location.href = '/demo/surgeon3/contact'}
                                            className="border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
                                        >
                                            Book Consultation
                                        </button>
                                        <button
                                            onClick={() => window.location.href = '/demo/surgeon3/journal'}
                                            className="border-b border-gray-300 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black hover:border-black transition-colors"
                                        >
                                            View Results
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
