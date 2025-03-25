'use client';

import Image from 'next/image';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center space-x-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.webp"
              alt="Visa"
              width={40}
              height={20}
              className="h-8 w-auto"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.webp"
              alt="Mastercard"
              width={40}
              height={20}
              className="h-8 w-auto"
            />
            <Shield className="h-6 w-6 text-gray-400" />
            <span className="text-sm text-gray-400">Pagamento Seguro</span>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2024 Bioreino. Todos os direitos reservados.
            <br />
            CNPJ: 59.072.084/0001-11
          </p>
        </div>
      </div>
    </footer>
  );
}