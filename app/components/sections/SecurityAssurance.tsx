'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Clock, CreditCard } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: 'Compra Segura',
    description: 'Comprar o Bioreino é fácil, confiável e seguro'
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-500" />,
    title: 'Dados Protegidos',
    description: 'Dados pessoais sigilosos não são compartilhados'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-purple-500" />,
    title: 'Pagamento Seguro',
    description: 'Suas informações financeiras são protegidas'
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: 'Entrega Garantida',
    description: 'Entrega garantida no prazo e política de devolução'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function SecurityAssurance() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            EM DÚVIDA QUANTO COMPRAR PELA INTERNET?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            100% confiável, compre com segurança
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="rounded-full bg-gray-50 p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
}