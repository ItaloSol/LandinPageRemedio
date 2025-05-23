import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  metadataBase: new URL('https://bioreinooficial.com.br'),
  title: 'Bioreino',
  description: 'Bioreino - Saúde e Bem-estar para Mulheres',
  openGraph: {
    title: 'Bioreino - Saúde e Bem-estar para Mulheres',
    description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bioreino - Saúde e Bem-estar para Mulheres',
      },
    ],
    siteName: 'Bioreino',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bioreino - Saúde e Bem-estar para Mulheres',
    description: 'Bioreino é um composto de 23 vitaminas e minerais essenciais para a saúde da mulher.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bioreinooficial.com.br/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.webp',
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