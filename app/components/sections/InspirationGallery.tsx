'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    image: "/images/mulher-natural.webp",
    caption: "Energia renovada e disposição para aproveitar cada momento",
    alt: "Mulher sorridente praticando yoga"
  },
  {
    image: "/images/mulher-sorri.webp",
    caption: "Confiança e bem-estar em todas as ocasiões",
    alt: "Mulher feliz e confiante sorrindo"
  },
  {
    image: "/images/Vitalidade.webp",
    caption: "Vitalidade e alegria no dia a dia",
    alt: "Mulher radiante fazendo exercícios"
  },
  {
    image: "/images/mulher-sauda.webp",
    caption: "Saúde e felicidade em harmonia",
    alt: "Mulher sorridente em momento de bem-estar"
  },
  {
    image: "/images/mulher-sorri.webp",
    caption: "Transformação e autoestima elevada",
    alt: "Mulher feliz após exercício"
  },
  {
    image: "/images/Equilibrio.webp",
    caption: "Equilíbrio perfeito entre corpo e mente",
    alt: "Mulher sorridente em pose de yoga"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function InspirationGallery() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Inspiração para Sua Transformação
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conheça mulheres reais que encontraram no Bioreino o caminho para uma vida mais saudável e plena.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
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
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-[4/5] w-full relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={500}
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-lg font-medium text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}