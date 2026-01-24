"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              İstanbul merkezli ✨
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Türkiye'nin en iyi cerrahları için{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical to-accent">
              dijital klinikler
            </span>{" "}
            tasarlıyorum
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Daha fazla hasta çekmek ve onlara güven vermek için tasarlanmış, 
            modern ve mobil uyumlu web siteleri. KVKK uyumlu, hızlı ve 
            profesyonel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-medical hover:bg-medical/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Örnek Çalışmayı Gör
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 text-center"
            >
              İletişime Geç
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-bold text-medical">%100</p>
              <p className="text-sm text-gray-600">Mobil Uyumlu</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-medical">24/7</p>
              <p className="text-sm text-gray-600">Destek</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-medical">KVKK</p>
              <p className="text-sm text-gray-600">Uyumlu</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Your professional photo */}
            <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-medical/10 to-accent/10">
              <Image
                src="/images/berkay.jpg"
                alt="Berkay Kösen - Web Developer"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-0 md:-right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-0 md:-left-10 w-72 h-72 bg-medical/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
