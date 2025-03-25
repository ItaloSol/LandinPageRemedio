import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bioreino - Saúde e Bem-estar para Mulheres',
  description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
  metadataBase: new URL('https://bioreinooficial.com.br'),
  icons: {
    icon: '/icon.png',
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