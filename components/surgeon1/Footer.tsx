import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0d3d3b] text-white pt-20 pb-10 border-t-4 border-[#c3a35a]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">

                {/* Brand */}
                <div>
                    <div className="text-3xl font-serif font-bold mb-6">
                        Dr. Name <span className="text-[#c3a35a]">Surname</span>
                    </div>
                    <p className="text-white/70 leading-relaxed mb-6">
                        Dedicated to providing the highest standard of care in facial plastic surgery.
                        Istanbul, Turkey.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white/10 p-3 hover:bg-[#c3a35a] transition-colors text-white"><FaInstagram /></a>
                        <a href="#" className="bg-white/10 p-3 hover:bg-[#c3a35a] transition-colors text-white"><FaWhatsapp /></a>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-widest border-l-4 border-[#c3a35a] pl-4">Contact Info</h4>
                    <ul className="space-y-4 text-white/80">
                        <li className="flex items-start gap-4">
                            <MdLocationOn className="text-[#c3a35a] text-xl mt-1" />
                            <span>Nisantasi, Istanbul<br />Turkey</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaPhone className="text-[#c3a35a] text-xl" />
                            <span>+90 555 123 45 67</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <MdEmail className="text-[#c3a35a] text-xl" />
                            <span>info@drname.com</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-widest border-l-4 border-[#c3a35a] pl-4">Quick Links</h4>
                    <ul className="space-y-2 text-white/80">
                        <li><Link href="/demo/surgeon1/procedures" className="hover:text-[#c3a35a] transition-colors">› Rhinoplasty</Link></li>
                        <li><Link href="/demo/surgeon1/procedures" className="hover:text-[#c3a35a] transition-colors">› Facelift</Link></li>
                        <li><Link href="/demo/surgeon1/about" className="hover:text-[#c3a35a] transition-colors">› About Dr. Name</Link></li>
                        <li><Link href="/demo/surgeon1/contact" className="hover:text-[#c3a35a] transition-colors">› Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-white/40 text-sm border-t border-white/10 pt-8">
                © {new Date().getFullYear()} Dr. Name Surname. All Rights Reserved. Designed by You.
            </div>
        </footer>
    );
}
