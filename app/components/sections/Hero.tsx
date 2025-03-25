'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  onContactClick: (source: string) => void;
  socialProof: {
    customers: string;
    satisfaction: string;
    reviews: string;
    guarantee: string;
  };
}

export function Hero({ onContactClick, socialProof }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center bg-white rounded-xl p-4 shadow-lg"
              >
                <span className="ml-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                <Image
                src="/images/logo.webp"
                alt="Bioreino Logo"
                width={200}
                height={150}
                className="ml-2"
                priority
                />
                </span>
              </motion.div>
              <span className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-900">
                <Clock className="mr-1 h-4 w-4" />
                Resultados em 1-2 semanas
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900" suppressHydrationWarning>
              Revolucione Sua Saúde e Bem-estar com Bioreino!
            </h1>
            <motion.p
              className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              layout
            >
              <span className="font-semibold text-green-800" suppressHydrationWarning>23 vitaminas e minerais essenciais</span> em um único composto, 
              desenvolvido especialmente para mulheres entre 30 e 90 anos. Um produto <span className="font-semibold" suppressHydrationWarning>100% natural</span>, 
              cientificamente comprovado e <span className="font-semibold" suppressHydrationWarning>com resultados em até 14 dias</span>.
            </motion.p>
            
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex flex-col items-center justify-center rounded-lg bg-green-100 p-3 sm:p-4">
                <span className="text-xl sm:text-2xl font-bold text-green-800">{socialProof.customers}</span>
                <span className="text-xs sm:text-sm text-center text-gray-700">Clientes Satisfeitas</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-green-100 p-3 sm:p-4">
                <span className="text-xl sm:text-2xl font-bold text-green-800">{socialProof.satisfaction}</span>
                <span className="text-xs sm:text-sm text-center text-gray-700">Taxa de Satisfação</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-green-100 p-3 sm:p-4">
                <span className="text-xl sm:text-2xl font-bold text-green-800">{socialProof.reviews}</span>
                <span className="text-xs sm:text-sm text-center text-gray-700">Avaliação Média</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-green-100 p-3 sm:p-4">
                <span className="text-xl sm:text-2xl font-bold text-green-800">7-14</span>
                <span className="text-xs sm:text-sm text-center text-gray-700">Dias para Resultados</span>
              </div>
            </div>

            <motion.div
              className="mt-8 sm:mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => onContactClick('hero_button')}
                className="w-full sm:w-auto bg-green-700 text-base sm:text-lg hover:bg-green-800 text-white min-h-[44px]"
              >
                Quero Transformar Minha Saúde <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                🔒 Compra 100% Segura | ✨ Resultados em 7-14 dias | 🚚 Entrega grátis para Todo Brasil
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/remedio.webp"
                alt="Bioreino Product"
                width={600}
                height={450}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-800" />
                  <span className="text-sm font-medium text-gray-800">Aprovado pela ANVISA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-800">Resultados em 1-2 semanas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}