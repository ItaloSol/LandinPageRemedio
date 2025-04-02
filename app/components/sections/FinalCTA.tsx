'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  onContactClick: (source: string) => void;
  customers: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function FinalCTA({ onContactClick, customers }: FinalCTAProps) {
  return (
    <div className="relative isolate overflow-hidden bg-green-600 px-6 py-24 sm:py-32 lg:px-8">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Transforme Sua Saúde Hoje!
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
          Junte-se a mais de {customers} mulheres que já descobriram os benefícios do Bioreino.
          Não perca mais tempo - sua saúde não pode esperar!
        </p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-x-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            onClick={() => onContactClick('final_cta')}
            className="bg-white text-green-600 hover:bg-green-50"
          >
            Quero Começar Agora
          </Button>
        </motion.div>
        <p className="mt-6 text-sm text-green-100">
          🔒 Compra 100% Segura | ✨ Satisfação Garantida | 🚚 Entrega Grátis
        </p>
      </motion.div>
    </div>
  );
}