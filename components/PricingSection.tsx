"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-white">
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
            {t.pricing.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Setup Fee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.pricing.setup.title}
              </h3>
              <p className="text-gray-600">{t.pricing.setup.subtitle}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">
                {t.pricing.setup.price}
              </span>
              <p className="text-sm text-gray-500 mt-2">
                {t.pricing.setup.note}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.setup.features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Monthly Retainer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-medical to-accent text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold">
              {t.pricing.monthly.badge}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {t.pricing.monthly.title}
              </h3>
              <p className="text-white/80">{t.pricing.monthly.subtitle}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">{t.pricing.monthly.price}</span>
              <p className="text-sm text-white/80 mt-2">
                {t.pricing.monthly.note}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.monthly.features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>

        {/* ROI Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto bg-accent/10 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.pricing.roi.title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.pricing.roi.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
