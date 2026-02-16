"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
            {t.contact.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.contact.info.email}</p>
                    <a
                      href="mailto:brkkosenwrk@gmail.com"
                      className="text-gray-300 hover:text-accent transition-colors"
                    >
                      brkkosenwrk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.contact.info.location}</p>
                    <p className="text-gray-300">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t.contact.social.title}</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/berkay.kosen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/berkay-kösen-4745bb258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-accent font-semibold">{t.contact.quickResponse.title}</span>
                {" "}{t.contact.quickResponse.text}
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-medical to-accent rounded-3xl p-8 md:p-10 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              {t.contact.ctaCard.title}
            </h3>
            <p className="text-lg mb-8 text-white/90">
              {t.contact.ctaCard.description}
            </p>

            <div className="space-y-4">
              <motion.a
                href="https://wa.me/905442151282?text=Merhaba%20Berkay!%20Web%20siteniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-white text-medical px-8 py-4 rounded-full font-semibold text-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t.contact.ctaCard.whatsappBtn}
              </motion.a>

              <p className="text-center text-sm text-white/80">
                {t.contact.ctaCard.orEmail}
              </p>

              <motion.a
                href="mailto:brkkosenwrk@gmail.com?subject=Web Sitesi Talebi&body=Merhaba Berkay, kliniğim için bir web sitesi oluşturmak istiyorum."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-white hover:text-medical transition-all duration-300"
              >
                {t.contact.ctaCard.emailBtn}
              </motion.a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <ul className="space-y-3 text-sm">
                {t.contact.ctaCard.checklist.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
