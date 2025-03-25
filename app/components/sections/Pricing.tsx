'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Gift } from 'lucide-react';
interface Package {
  title: string;
  subtitle: string;
  discount: string;
  price: number;
  originalPrice: number;
  installments: number;
  pix: number;
  popular: boolean;
  savings: number;
  bonus: string[];
  hasMassager: boolean;
}
import Image from 'next/image';

interface PricingProps {
  packages: Package[];
  onPackageClick: (title: string) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PackageLabel = ({ days }: { days: number }) => (
  <div className="bg-red-500 text-white text-sm font-medium px-4 py-1 rounded-full text-center mb-4">
    Suplemento para {days} dias 
  </div>
);

const PackageType = ({ type }: { type: string }) => (
  <div className="text-lg font-semibold text-center mb-2 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
    {type}
  </div>
);

const ProductImage = ({ title }: { title: string }) => {
  const getImageSrc = (title: string) => {
    switch (title) {
      case '1 Unidade':
        return '/images/selecionado_1.png';
      case '3 Unidades':
        return '/images/Selecionado_3.png';
      case '6 Unidades':
        return '/images/6_remedios.png';
      default:
        return '/images/selecionado_10.png';
    }
  };

  return (
    <div className="relative w-64 h-64 mx-auto mb-6">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-green-200 animate-pulse opacity-30" />
      <div className="relative w-full h-full rounded-full border-2 border-gray-100 overflow-hidden shadow-lg">
        <Image
          src={getImageSrc(title)}
          alt={title}
          width={256}
          height={256}
          className="object-contain w-full h-full p-4"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-100">
        <Image
          src="/images/massageador-logo.webp"
          alt="Massageador"
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

const getBraipUrl = (title: string) => {
  switch (title) {
    case '1 Unidade':
      return 'https://ev.braip.com/checkout/plaoved6/chedronw';
    case '3 Unidades':
      return 'https://ev.braip.com/checkout/plaz2llm/chedronw';
    case '6 Unidades':
      return 'https://ev.braip.com/checkout/plagywwv/chedronw';
    default:
      return 'https://ev.braip.com/checkout/pla2q22d/chedronw';
  }
};

export function Pricing({ packages, onPackageClick }: PricingProps) {
  const getPackageType = (index: number) => {
    const types = ['Frasco único', 'Leve 3 pague 2', 'Leve 6 pague 3', 'Leve 10 pague 5'];
    return types[index];
  };

  const getDays = (title: string) => {
    if (title === '1 Unidade') return 30;
    if (title === '3 Unidades') return 90;
    if (title === '6 Unidades') return 180;
    return 300;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
          variants={fadeIn}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={`relative flex flex-col ${pkg.popular ? 'border-green-500 ring-2 ring-green-500' : ''}`}>
                {pkg.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 text-sm font-semibold text-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Mais Popular
                  </motion.div>
                )}
                <div className="p-6 relative">
                  <ProductImage title={pkg.title} />
                  <div className="flex justify-between items-center">
                    <PackageType type={getPackageType(index)} />
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
                      -{pkg.discount}
                    </span>
                  </div>
                  <PackageLabel days={getDays(pkg.title)} />

                  {pkg.hasMassager && (
                    <motion.div
                      className="text-center mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                        <Gift className="h-5 w-5" />
                        + Massageador GRÁTIS
                      </span>
                    </motion.div>
                  )}

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold tracking-tight text-gray-900">
                      12x de R$ {pkg.installments.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-center mt-1 text-sm text-gray-500 line-through">
                      De R$ {pkg.originalPrice.toFixed(2)}
                    </p>
                    <p className="text-center mt-2 text-sm text-green-600 font-medium">
                      Economia de R$ {pkg.savings.toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      12x de R$ {pkg.installments.toFixed(2)}
                    </p>
                    <p className="text-sm font-medium text-green-600">
                      À vista no PIX: R$ {pkg.pix.toFixed(2)}
                    </p>
                  </div>

                  

                  <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => window.open(getBraipUrl(pkg.title), '_blank')}
                      className="w-full bg-green-500 hover:bg-green-600 text-lg font-semibold h-12"
                    >
                      COMPRAR AGORA
                    </Button>
                  </motion.div>

                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                      alt="Visa"
                      width={30}
                      height={20}
                      className="h-6 w-auto opacity-70"
                    />
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                      alt="Mastercard"
                      width={30}
                      height={20}
                      className="h-6 w-auto opacity-70"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}