"use client";

import { motion } from "framer-motion";
import { 
  FaServer, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaWhatsapp, 
  FaImages, 
  FaHeadset 
} from "react-icons/fa";

const features = [
  {
    icon: FaServer,
    title: "Domain & Hosting Kurulumu",
    description: "Alan adı alımı, hosting ayarları, SSL sertifikası - hepsi dahil.",
  },
  {
    icon: FaShieldAlt,
    title: "KVKK Uyumlu Formlar",
    description: "Türkiye yasalarına uygun veri koruma ve gizlilik politikaları.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobil-Öncelikli Tasarım",
    description: "Instagram tarayıcısında bile mükemmel çalışan responsive tasarım.",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Entegrasyonu",
    description: "Hastalarınız tek tıkla size ulaşabilir. Önceden yazılmış mesajlar.",
  },
  {
    icon: FaImages,
    title: "Önce/Sonra Galeri Sistemi",
    description: "Ameliyat sonuçlarınızı etkileyici şekilde sergileyin.",
  },
  {
    icon: FaHeadset,
    title: "7/24 Teknik Destek",
    description: "Site çöktü mü? Bir şey değişmesi mi gerekiyor? Her zaman yanınızdayım.",
  },
];

export default function NoHeadacheSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Baş Ağrısı Yok
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Her Şeyi Ben Hallederim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siz ameliyathanede harika işler çıkarırken, ben de sitenizin 
            sorunsuz çalışmasını sağlarım. İşte tam olarak ne yapıyorum:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-medical/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-medical" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-medical to-accent p-8 md:p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Huzur İçinde Uyku Garantisi
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Site çöktü, hastalar ulaşamıyor, formlar çalışmıyor gibi 
            korkulu rüyaları unutun. Ben her zaman bir WhatsApp mesajı 
            kadar yakınım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-medical px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hemen Başlayalım
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-medical transition-all duration-300"
            >
              Fiyatları Gör
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
