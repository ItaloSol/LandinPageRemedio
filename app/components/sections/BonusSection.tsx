'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Heart, Shield, Sparkles, Star, Sun, Zap, Moon, Activity, Eye, Clock, Award, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

interface BonusSectionProps {
  onContactClick: (source: string) => void;
}

export function BonusSection({ onContactClick }: BonusSectionProps) {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block bg-red-200 rounded-full px-4 py-1 text-sm font-medium text-red-900 mb-6"
          >
            ⏳ Promoção por Tempo Limitado
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Massageador Portátil Premium
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-800 mt-1" />
                    <span className="text-gray-700">10 velocidades ajustáveis para diferentes necessidades</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-800 mt-1" />
                    <span className="text-gray-700">Alivia dores no pescoço, costas, cintura, nádegas e pernas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-800 mt-1" />
                    <span className="text-gray-700">Design portátil e ergonômico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-800 mt-1" />
                    <span className="text-gray-700">Fácil de usar e transportar</span>
                  </li>
                </ul>
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                 
                </motion.div>
              </div>
              <div className="relative">
                <Image
                  src="/images/massageador.jpeg"
                  alt="Massageador Portátil"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-700 text-white rounded-full px-4 py-2 font-bold transform rotate-12">
                  GRÁTIS
                </div>
              </div>
            </div>
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => onContactClick('bonus_section')}
              className="bg-green-700 text-lg hover:bg-green-800 text-white"
            >
              Aproveitar Oferta Especial
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}