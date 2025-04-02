'use client';

import { Button } from '@/components/ui/button';
import { Sparkles, Award, ThumbsUp, Clock, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeaderProps {
  onContactClick: (source: string) => void;
  socialProof: {
    satisfaction: string;
    guarantee: string;
  };
}

export function Header({ onContactClick, socialProof }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            
          </motion.div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">Produto Mais Vendido 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">{socialProof.satisfaction} de Satisfação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Garantia de {socialProof.guarantee}</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onContactClick('header_button')}
                className="bg-green-500 hover:bg-green-600 min-h-[44px] min-w-[44px]"
              >
                Fale Conosco via WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 space-y-4 pb-4"
          >
            <div className="flex items-center space-x-2 py-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">Produto Mais Vendido 2024</span>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <ThumbsUp className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">{socialProof.satisfaction} de Satisfação</span>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <Clock className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Garantia de {socialProof.guarantee}</span>
            </div>
            <Button
              onClick={() => onContactClick('header_button')}
              className="w-full bg-green-500 hover:bg-green-600 min-h-[44px]"
            >
              Fale Conosco via WhatsApp
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}