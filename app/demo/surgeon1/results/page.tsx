"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function ResultsPage() {
    return (
        <div className="pt-32 pb-24">
            <header className="text-center max-w-4xl mx-auto px-6 mb-20">
                <h1 className="text-5xl md:text-6xl font-serif text-[#0d3d3b] mb-6">Patient Gallery</h1>
                <div className="w-24 h-1 bg-[#c3a35a] mx-auto mb-8" />
                <p className="text-xl text-slate-600 leading-relaxed">
                    Explore our gallery of real patient transformations. We pride ourselves on achieving natural, balanced results.
                </p>
            </header>

            <div className="max-w-7xl mx-auto px-6 space-y-32">

                {/* Case 1 - Main Feature */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#c3a35a] font-bold tracking-widest uppercase text-sm mb-2 block">Case Study 01</span>
                        <h2 className="text-3xl font-serif text-[#0d3d3b] mb-6">Primary Rhinoplasty</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            This patient desired a reduction in the dorsal hump and refinement of the tip while maintaining a natural masculine profile.
                            The procedure involved an open rhinoplasty technique with structural grafting.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm font-medium text-slate-500">
                            <li>• Dorsal Hump Reduction</li>
                            <li>• Tip Refinement</li>
                            <li>• Septoplasty for Breathing</li>
                        </ul>
                    </div>
                    <div className="shadow-2xl rounded-sm border-8 border-white bg-white">
                        <BeforeAfterSlider
                            beforeImage="/images/beforerhino.png"
                            afterImage="/images/afterrhino.png"
                            beforeLabel="Pre-Op"
                            afterLabel="1 Year Post-Op"
                        />
                    </div>
                </div>

                {/* Case 2 Placeholder (Reusing same images for demo purposes but styled differently) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                    <div className="order-2 lg:order-1 shadow-2xl rounded-sm border-8 border-white bg-white">
                        <BeforeAfterSlider
                            beforeImage="/images/beforerhino.png"
                            afterImage="/images/afterrhino.png"
                            beforeLabel="Before"
                            afterLabel="After"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-[#c3a35a] font-bold tracking-widest uppercase text-sm mb-2 block">Case Study 02</span>
                        <h2 className="text-3xl font-serif text-[#0d3d3b] mb-6">Revision Rhinoplasty</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Correction of a previous surgery to improve symmetry and breathing function.
                            Reconstruction required rib cartilage grafting to restore structural support.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
