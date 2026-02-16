"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20">

                {/* Info */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
                    >
                        Contact
                    </motion.h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-md leading-relaxed">
                        Begin your journey. Schedule a consultation to discuss your vision with M.D. Noir.
                    </p>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Location</h3>
                            <p className="font-serif text-2xl">Abdi İpekçi Cad. No: 42<br />Nişantaşı, Istanbul</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Direct</h3>
                            <p className="font-serif text-2xl">+90 (212) 555 0123</p>
                            <p className="font-serif text-2xl mt-2">info@mdnoir.com</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
                    <form className="space-y-8">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-black outline-none transition-colors" placeholder="Your full name" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-black outline-none transition-colors" placeholder="Your email address" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interests</label>
                            <select className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-black outline-none transition-colors appearance-none rounded-none">
                                <option>Rhinoplasty</option>
                                <option>Facelift</option>
                                <option>Body Contouring</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-4 focus:border-black outline-none transition-colors resize-none" placeholder="Tell us about your goals" />
                        </div>

                        <button className="w-full bg-black text-white py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
