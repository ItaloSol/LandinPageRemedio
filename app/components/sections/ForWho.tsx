'use client';

import { motion } from 'framer-motion';
import { Battery, Heart, Shield, Sparkles, Scale, Sun, Activity, Dumbbell } from 'lucide-react';
import Image from 'next/image';

const forWhoItems = [
  {
    text: "Aumentar sua energia e vitalidade",
    icon: <Battery className="h-5 w-5 text-yellow-500" />
  },
  {
    text: "Fortalecer seu sistema imunológico",
    icon: <Shield className="h-5 w-5 text-blue-500" />
  },
  {
    text: "Melhorar sua saúde e bem-estar",
    icon: <Heart className="h-5 w-5 text-red-500" />
  },
  {
    text: "Manter sua pele, cabelo e unhas saudáveis e bonitos",
    icon: <Sparkles className="h-5 w-5 text-purple-500" />
  },
  {
    text: "Emagrecer de forma saudável",
    icon: <Scale className="h-5 w-5 text-green-500" />
  },
  {
    text: "Solução natural, eficaz e saudável",
    icon: <Sun className="h-5 w-5 text-orange-500" />
  },
  {
    text: "Fortalecimento: colunas, pernas, braços, ossos, articulações e tendões",
    icon: <Dumbbell className="h-5 w-5 text-indigo-500" />
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function ForWho() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="mx-auto max-w-2xl mb-16"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Para Quem é o Bioreino?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Não perca mais tempo se sentindo cansada e sem motivação. Bioreino é a solução que você precisa para recuperar sua energia e vitalidade.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <motion.ul
                className="space-y-6"
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
                {forWhoItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeIn}
                    className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/Principal.webp"
              alt="Mulher radiante e confiante"
              width={600}
              height={800}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}