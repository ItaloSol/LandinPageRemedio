'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Gift } from 'lucide-react';
interface Package {
  title: string;
  originalPrice: number;
  installments: number;
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
        return '/images/6_remedios.png';
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

export function Pricing({ packages, onPackageClick }: PricingProps) {
  const getPackageType = (index: number) => {
    const types = ['Frasco único', 'Leve 3 pague 2', 'Leve 6 pague 3', 'Leve 12 pague 6'];
    return types[index];
  };

  const getDays = (title: string) => {
    if (title === '1 Unidade') return 30;
    if (title === '3 Unidades') return 90;
    if (title === '6 Unidades') return 180;
    return 360;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`relative overflow-hidden ${
                index === 0 ? 'bg-blue-50/30' :
                index === 1 ? 'bg-green-50/30' :
                index === 2 ? 'bg-yellow-50/30' :
                'bg-orange-50/30'
              } border-2 border-transparent hover:border-green-500 transition-all duration-300`}>
                <div className="absolute top-0 left-0 right-0 h-32 rounded-t-lg bg-gradient-to-b from-white/50 to-transparent" />
                
                <div className="p-6 relative">
                <ProductImage title={pkg.title} />
                  <PackageType type={getPackageType(index)} />
                  <PackageLabel days={getDays(pkg.title)} />
                 

                  {pkg.hasMassager && (
                    <div className="text-center mb-4">
                      <span className="inline-flex items-center gap-2 text-red-600 font-semibold">
                        <Gift className="h-5 w-5" />
                        Massageador Exclusivo
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-500 line-through text-sm">De R$ {pkg.originalPrice.toFixed(2)}</span>
                      <span className="text-red-600 font-bold">por</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      12x de R$ {pkg.installments.toFixed(2)}
                    </div>
                    <div className="text-sm text-green-600 font-medium mt-2">
                      5% de desconto no PIX
                    </div>
                  </div>

                  <Button
                    onClick={() => onPackageClick(pkg.title)}
                    className="w-full bg-green-500 hover:bg-green-600 text-lg font-semibold h-12"
                  >
                    COMPRAR AGORA
                  </Button>

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
        </div>
      </div>
    </div>
  );
}