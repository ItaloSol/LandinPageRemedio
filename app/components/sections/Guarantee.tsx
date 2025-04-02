'use client';

import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function Guarantee() {
  return (
    <>
      <div className="bg-red-600 text-white py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center items-center">
            <p className="text-lg font-bold flex items-center">
              <span className="animate-pulse mr-2">⚡</span>
              GARANTIA INCONDICIONAL DE 7 DIAS
              <span className="animate-pulse ml-2">⚡</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <Shield className="h-12 w-12 text-green-600" />
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              7 Dias de Garantia Total
            </motion.h2>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 p-6 bg-green-50 rounded-xl shadow-sm"
            >
              <p className="text-xl leading-8 text-gray-600">
                Se você não ficar <span className="font-bold text-green-600">100% satisfeita</span> com os resultados nos primeiros 7 dias, devolvemos seu dinheiro integralmente.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sem perguntas, sem burocracia. <span className="font-semibold">Risco Zero!</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                Devolução em até 48h
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                Sem justificativa
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                100% do valor
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}