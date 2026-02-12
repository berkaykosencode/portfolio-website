"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="relative pt-40 pb-20 bg-[#0b1d35] text-white overflow-hidden mb-20">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-6"
                    >
                        İletişim
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Sorularınız için bizimle iletişime geçin veya randevu oluşturun.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-serif text-[#0b1d35] mb-6">İletişim Bilgileri</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Aşağıdaki iletişim kanallarından bize ulaşabilir veya formu doldurarak size ulaşmamızı sağlayabilirsiniz.
                            Asistanlarımız en kısa sürede dönüş yapacaktır.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#0047AB]/30 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#0047AB]/10 flex items-center justify-center shrink-0">
                                    <MdLocationOn className="text-2xl text-[#0047AB]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0b1d35] mb-1">Klinik Adresi</h3>
                                    <p className="text-gray-600">Nişantaşı, Valikonağı Caddesi<br />No: 123, Şişli / İstanbul</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#0047AB]/30 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#0047AB]/10 flex items-center justify-center shrink-0">
                                    <FaPhone className="text-2xl text-[#0047AB]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0b1d35] mb-1">Telefon</h3>
                                    <p className="text-gray-600">+90 (212) 555 0123</p>
                                    <p className="text-gray-600">+90 (555) 555 0123 (WhatsApp)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#0047AB]/30 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#0047AB]/10 flex items-center justify-center shrink-0">
                                    <MdEmail className="text-2xl text-[#0047AB]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0b1d35] mb-1">E-Posta</h3>
                                    <p className="text-gray-600">info@drahmet.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif text-[#0b1d35] mb-4">Sosyal Medya</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-[#0047AB] text-white flex items-center justify-center text-xl hover:bg-[#0b1d35] transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl hover:bg-[#1da851] transition-colors">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-serif text-[#0b1d35] mb-8">Randevu Formu</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Adınız</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0047AB] focus:ring-0 outline-none transition-colors" placeholder="Adınız" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Soyadınız</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0047AB] focus:ring-0 outline-none transition-colors" placeholder="Soyadınız" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Telefon</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0047AB] focus:ring-0 outline-none transition-colors" placeholder="05XX XXX XX XX" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">İlgilendiğiniz İşlem</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0047AB] focus:ring-0 outline-none transition-colors">
                                <option>Seçiniz...</option>
                                <option>Rinoplasti (Burun Estetiği)</option>
                                <option>Meme Estetiği</option>
                                <option>Yüz Germe</option>
                                <option>Vücut Estetiği</option>
                                <option>Ameliyatsız İşlemler</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Mesajınız</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0047AB] focus:ring-0 outline-none transition-colors" placeholder="Sorularınız veya notlarınız..." />
                        </div>

                        <button type="button" className="w-full bg-[#0047AB] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#0b1d35] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
