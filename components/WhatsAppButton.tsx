"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "905442151282", // Replace with your actual number
  message = "Merhaba Berkay! Web siteniz hakkında bilgi almak istiyorum.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Debug: Log to console
  console.log("WhatsApp Button Props:", { phoneNumber, message });
  console.log("Generated WhatsApp URL:", whatsappUrl);

  return (
    <>
      {/* Floating Button - Mobile/Desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group flex items-center justify-center"
        aria-label="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp ile mesaj gönder
        </span>
      </a>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        a::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.5);
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>
    </>
  );
}
