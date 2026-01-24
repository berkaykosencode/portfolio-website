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
            Kodlarım, ameliyat öncesi ve sonrası fotoğraflarınızı 
            mükemmel bir şekilde sergiler. İşte canlı bir örnek:
          </p>
        </motion.div>

        {/* Before/After Slider Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop"
            afterImage="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop&brightness=1.1&saturation=1.2"
            beforeLabel="Önce"
            afterLabel="Sonra"
          />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Instagram Uyumlu
            </h3>
            <p className="text-gray-600">
              Ziyaretçilerinizin %90'ı Instagram'dan gelir. 
              Siteleriniz Instagram tarayıcısında mükemmel çalışır.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Hızlı Yükleme
            </h3>
            <p className="text-gray-600">
              Yavaş siteler hasta kaybettirir. Siteleriniz 1 saniyeden 
              az sürede yüklenir.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Güven Veren Tasarım
            </h3>
            <p className="text-gray-600">
              Modern, temiz ve profesyonel görünüm. İşinizin kalitesini 
              yansıtan tasarımlar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
