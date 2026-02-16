"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-12 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-20">
                <div className="md:col-span-2">
                    <Link href="/demo/surgeon3" className="font-serif text-4xl block mb-8">M.D. Noir</Link>
                    <p className="text-gray-500 max-w-sm">
                        Excellence is not an act, but a habit. <br />
                        Serving international patients in the heart of Istanbul.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Contact</h4>
                    <p className="font-serif text-xl">+90 (212) 555 0123</p>
                    <p className="font-serif text-xl">info@mdnoir.com</p>
                    <p className="font-serif text-xl">Nisantasi, Istanbul</p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Social</h4>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto pt-8 flex flex-col md:flex-row justify-between text-[10px] text-gray-600 uppercase tracking-widest">
                <span>© 2024 M.D. Noir. All Rights Reserved.</span>
                <span className="md:mt-0 mt-4">Design by You</span>
            </div>
        </footer>
    );
}
