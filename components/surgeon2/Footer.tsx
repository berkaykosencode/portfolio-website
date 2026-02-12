"use client";

import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#081526] text-white/60 py-20 px-6 border-t border-[#ffffff]/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/demo/surgeon2" className="font-serif text-3xl font-bold text-white block mb-6">
                        Dr. Name <span className="text-[#0047AB]">Surname</span>
                    </Link>
                    <p className="max-w-sm font-light leading-relaxed mb-8">
                        Uluslararası standartlarda estetik cerrahi hizmeti.
                        İstanbul'un kalbinde, modern tıp teknolojisi ile doğal güzelliğiniz için çalışıyoruz.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0047AB] hover:text-white transition-colors"><FaInstagram /></a>
                        <a href="https://wa.me/905442151282" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0047AB] hover:text-white transition-colors"><FaWhatsapp /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">İletişim</h4>
                    <ul className="space-y-4 font-light">
                        <li className="flex gap-3 items-start hover:text-white transition-colors">
                            <MdLocationOn className="text-[#D4AF37] text-xl shrink-0" />
                            <span>Nişantaşı, Valikonağı Cad.<br />No: 123 İstanbul</span>
                        </li>
                        <li className="flex gap-3 items-center hover:text-white transition-colors">
                            <FaPhone className="text-[#D4AF37] text-xl shrink-0" />
                            <span>+90 (212) 555 0123</span>
                        </li>
                        <li className="flex gap-3 items-center hover:text-white transition-colors">
                            <MdEmail className="text-[#D4AF37] text-xl shrink-0" />
                            <span>info@drahmet.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Linkler</h4>
                    <ul className="space-y-3 font-light">
                        <li><Link href="/demo/surgeon2/about" className="hover:text-[#D4AF37] transition-colors">Hakkımda</Link></li>
                        <li><Link href="/demo/surgeon2/procedures" className="hover:text-[#D4AF37] transition-colors">Prosedürler</Link></li>
                        <li><Link href="/demo/surgeon2/results" className="hover:text-[#D4AF37] transition-colors">Galeri</Link></li>
                        <li><Link href="/demo/surgeon2/contact" className="hover:text-[#D4AF37] transition-colors">İletişim</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-[#ffffff]/5 text-center text-sm font-light">
                © {new Date().getFullYear()} Dr. Name Surname. Tüm hakları saklıdır.
            </div>
        </footer>
    );
}
