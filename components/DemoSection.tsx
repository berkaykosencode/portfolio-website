"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Fark Yaratan Özellik
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Hastalarınız Sonuçları Görmek İster
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yeni websitenizle, ameliyat öncesi ve sonrası fotoğraflarınızı
            mükemmel bir şekilde sergileyebilirsiniz. İşte canlı bir örnek:
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Demo 1 */}
          <a href="/demo/surgeon1" className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/generatedSurgeon1.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Örnek Tasarım 1</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Luxury & Elegant</h3>
              <span className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-bold text-center group-hover:bg-accent group-hover:text-white transition-colors">
                İncele
              </span>
            </div>
          </a>

          {/* Demo 2 */}
          <a href="/demo/surgeon2" className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/generatedSurgeon2.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Örnek Tasarım 2</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Prestij & Kurumsal</h3>
              <span className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-bold text-center group-hover:bg-accent group-hover:text-white transition-colors">
                İncele
              </span>
            </div>
          </a>

          {/* Demo 3 */}
          <a href="/demo/surgeon3" className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl cursor-pointer block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/surgeon3_hero.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Örnek Tasarım 3</span>
              <h3 className="text-2xl font-serif font-bold mb-4">Estetik & Modern</h3>
              <span className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-bold text-center group-hover:bg-accent group-hover:text-white transition-colors">
                İncele
              </span>
            </div>
          </a>
        </motion.div>


      </div>
    </section >
  );
}