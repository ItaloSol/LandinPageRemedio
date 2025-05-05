'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
interface Testimonial {
  name: string;
  age: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

import { useState } from 'react';

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [loadedVideos, setLoadedVideos] = useState<number[]>([]);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const youtubeShorts = [
    { url: "https://www.youtube.com/shorts/vKRMPN_T2S4", id: "vKRMPN_T2S4" },
    { url: "https://www.youtube.com/shorts/dG2F8D89clo", id: "dG2F8D89clo" },
    { url: "https://www.youtube.com/shorts/BNy6u-sM-pI", id: "BNy6u-sM-pI" },
    { url: "https://www.youtube.com/shorts/VRmDXtn0bRA", id: "VRmDXtn0bRA" },
    { url: "https://www.youtube.com/shorts/fEjKWSqQ8Lg", id: "fEjKWSqQ8Lg" },
    { url: "https://www.youtube.com/shorts/5UaBvdoEWeE", id: "5UaBvdoEWeE" }
  ];

  const visibleVideos = showAllVideos ? youtubeShorts : youtubeShorts.slice(0, 3);
  
  const loadVideo = (index: number) => {
    setLoadedVideos(prev => [...prev, index]);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Histórias Reais de Transformação
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubra como o Bioreino está transformando a vida de milhares de mulheres em todo o Brasil.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Depoimentos em Vídeo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleVideos.map((video, index) => (
              <div key={index} className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow-lg">
                {loadedVideos.includes(index) ? (
                  <iframe
                    src={`${video.url.replace('shorts/', 'embed/')}`}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div 
                    className="w-full h-full bg-gray-200 flex flex-col items-center justify-center cursor-pointer relative"
                    onClick={() => loadVideo(index)}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt="Thumbnail do vídeo"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {!showAllVideos && youtubeShorts.length > 3 && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAllVideos(true)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Ver Mais Depoimentos
              </button>
            </div>
          )}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-1 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      className="object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}