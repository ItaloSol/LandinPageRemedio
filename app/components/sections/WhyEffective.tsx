'use client';

import { motion } from 'framer-motion';
import { Battery, Shield, Sparkles, Scale } from 'lucide-react';

const effectiveReasons = [
  {
    icon: <Battery className="h-8 w-8 text-yellow-500" />,
    title: "Energia",
    description: "Tem um efeito revigorante aliviando o stress, pois auxilia na energia do seu corpo em geral, causando uma plena sensação de bem estar."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Imunidade",
    description: "Auxiliando no melhor funcionamento do sistema imune, sendo assim te fornece uma maior resistência as doenças, inclusive fortalece o coração."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-purple-500" />,
    title: "Ação antioxidante",
    description: "Seu corpo reduz a oxidação, pelo seu efeito antioxidativo, isso causa rejuvenescimento e evita o surgimento de doenças."
  },
  {
    icon: <Scale className="h-8 w-8 text-green-500" />,
    title: "Metabolismo",
    description: "Auxiliam no metabolismo energético, melhorando o metabolismo e equilibrando o seu corpo para favorecer o emagrecimento, sendo muito mais fácil emagrecer com seu corpo equilibrado."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function WhyEffective() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que Faz o Bioreino tão Eficaz?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubra os segredos por trás da eficácia comprovada do Bioreino
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {effectiveReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}