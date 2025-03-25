import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bioreino - Saúde e Bem-estar para Mulheres',
  description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bioreino - Saúde e Bem-estar para Mulheres',
    description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
    images: [{
      url: '/images/bioreino.jpg',
      width: 800,
      height: 600,
      alt: 'Bioreino Product'
    }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bioreino - Saúde e Bem-estar para Mulheres',
    description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
    images: ['/images/bioreino.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}