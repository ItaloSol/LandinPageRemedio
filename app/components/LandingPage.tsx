'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { ProblemSolution } from './sections/ProblemSolution';
import { Benefits } from './sections/Benefits';
import { ForWho } from './sections/ForWho';
import { WhyEffective } from './sections/WhyEffective';
import { InspirationGallery } from './sections/InspirationGallery';
import { Testimonials } from './sections/Testimonials';
import { Guarantee } from './sections/Guarantee';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { BonusSection } from './sections/BonusSection';
import { benefits, packages, testimonials, socialProof } from '../data/content';

const getWhatsAppMessage = (source: string, packageInfo?: any) => {
  const messages = {
    floating_button: "Olá! Gostaria de saber mais sobre o Bioreino e seus benefícios para a saúde.",
    header_button: "Olá! Vi o Bioreino no site e gostaria de mais informações sobre o produto.",
    hero_button: "Olá! Quero transformar minha saúde com Bioreino. Pode me ajudar?",
    bonus_section: "Olá! Gostaria de aproveitar a promoção do Bioreino com o massageador portátil grátis!",
    final_cta: "Olá! Estou interessada em começar minha transformação com Bioreino hoje mesmo!",
    package: packageInfo ? 
      `Olá! Gostaria de comprar o kit ${packageInfo.title} do Bioreino por R$ ${packageInfo.price.toFixed(2)}${packageInfo.hasMassager ? ' com massageador grátis' : ''}!` : 
      "Olá! Gostaria de fazer um pedido do Bioreino."
  };

  return (source in messages) ? messages[source as keyof typeof messages] : messages.floating_button;
};

const handleWhatsAppClick = (source: string, packageInfo?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'Engagement',
      event_label: source
    });
  }
  
  const message = encodeURIComponent(getWhatsAppMessage(source, packageInfo));
  window.open(`https://wa.me/5531991516102?text=${message}`, '_blank');
};

const handlePackageClick = (packageTitle: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'select_package', {
      event_category: 'Conversion',
      event_label: packageTitle
    });
  }
  
  const packageInfo = packages.find(pkg => pkg.title === packageTitle);
  handleWhatsAppClick('package', packageInfo);
};

export default function LandingPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Bioreino Landing Page',
        page_location: window.location.href
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <motion.button
        onClick={() => handleWhatsAppClick('floating_button')}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 sm:px-6 py-3 text-white shadow-lg hover:bg-green-600 min-h-[44px] min-w-[44px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
        />
        <span className="hidden sm:inline">Fale Conosco</span>
      </motion.button>

      <div className="bg-red-600 text-white py-2 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <p className="text-sm font-medium flex items-center">
              <span className="animate-pulse">⚡</span>
              <span className="ml-1">Últimas unidades em estoque!</span>
            </p>
            <p className="text-sm font-medium">
              Oferta Especial: Até 70% OFF + Bônus Exclusivos
            </p>
            <p className="text-sm font-medium hidden sm:block">
              <span className="animate-pulse">🔥</span>
              <span className="ml-1">Promoção termina em breve</span>
            </p>
          </div>
        </div>
      </div>

      <Header onContactClick={handleWhatsAppClick} socialProof={socialProof} />
      <Hero onContactClick={handleWhatsAppClick} socialProof={socialProof} />
      <ProblemSolution />
      <Benefits benefits={benefits} />
      <ForWho />
      <WhyEffective />
      <InspirationGallery />
      <Testimonials testimonials={testimonials} />
      <Guarantee />
      <BonusSection onContactClick={handleWhatsAppClick} />
      <Pricing packages={packages} onPackageClick={handlePackageClick} />
      <FAQ />
      <FinalCTA onContactClick={handleWhatsAppClick} customers={socialProof.customers} />
      <Footer />
    </div>
  );
}