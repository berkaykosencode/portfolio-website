"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-[#c3a35a] font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h4>
                    <h1 className="text-5xl font-serif text-[#0d3d3b] mb-8">Contact Us</h1>
                    <p className="text-slate-600 text-lg mb-12 max-w-md">
                        Our team is here to answer your questions and help you start your journey.
                        Fill out the form or reach us directly.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-[#0d3d3b] text-[#c3a35a] flex items-center justify-center text-xl shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0d3d3b] mb-1">Clinic Address</h3>
                                <p className="text-slate-600">
                                    Valikonagi Caddesi No: 123<br />
                                    Nisantasi, Istanbul, Turkey
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-[#0d3d3b] text-[#c3a35a] flex items-center justify-center text-xl shrink-0">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0d3d3b] mb-1">Phone</h3>
                                <p className="text-slate-600">+90 (212) 555 0123</p>
                                <p className="text-slate-400 text-sm">Mon-Fri: 09:00 - 18:00</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-[#0d3d3b] text-[#c3a35a] flex items-center justify-center text-xl shrink-0">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0d3d3b] mb-1">Email</h3>
                                <p className="text-slate-600">info@drnamesurname.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-10 shadow-2xl border-t-4 border-[#c3a35a]"
                >
                    <h3 className="text-2xl font-serif text-[#0d3d3b] mb-8">Send a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                <input type="text" className="w-full bg-[#f8f9fa] border border-slate-200 p-3 focus:outline-none focus:border-[#c3a35a]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                <input type="text" className="w-full bg-[#f8f9fa] border border-slate-200 p-3 focus:outline-none focus:border-[#c3a35a]" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                            <input type="email" className="w-full bg-[#f8f9fa] border border-slate-200 p-3 focus:outline-none focus:border-[#c3a35a]" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone (Optional)</label>
                            <input type="tel" className="w-full bg-[#f8f9fa] border border-slate-200 p-3 focus:outline-none focus:border-[#c3a35a]" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                            <textarea rows={4} className="w-full bg-[#f8f9fa] border border-slate-200 p-3 focus:outline-none focus:border-[#c3a35a]"></textarea>
                        </div>

                        <button type="button" className="w-full bg-[#0d3d3b] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#1a5c59] transition-colors">
                            Send Request
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-24 h-[400px] bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest">Google Map Integration</span>
            </div>
        </div>
    );
}
