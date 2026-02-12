import Navigation from "@/components/surgeon2/Navigation";
import Footer from "@/components/surgeon2/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Surgeon2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#D4AF37] selection:text-white">
            <Navigation />

            <main>
                {children}
            </main>

            {/* --- Floating WhatsApp Button (Global) --- */}
            <a
                href="https://wa.me/905442151282"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center group"
            >
                <FaWhatsapp className="text-3xl" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold pl-0 group-hover:pl-2">
                    Book Appointment
                </span>
            </a>

            <Footer />
        </div>
    );
}
