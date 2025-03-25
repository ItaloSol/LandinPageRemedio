'use client';

import { Scale, Sparkles, Zap, Heart, Star, Moon, Activity, Eye } from 'lucide-react';
interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  trigger: string;
}
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
interface Testimonial {
  name: string;
  age: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export const benefits: Benefit[] = [
  {
    icon: <Scale className="h-6 w-6 text-green-500 transform hover:scale-110 transition-transform" />,
    title: 'Emagrecimento Saudável',
    description: 'Resultados visíveis em 1-2 semanas: acelere seu metabolismo e perca peso naturalmente',
    trigger: 'Destaque'
  },
  {
    icon: <Star className="h-6 w-6 text-pink-500 animate-pulse" />,
    title: 'Beleza Completa',
    description: 'Em apenas 2 semanas, cabelos mais fortes, unhas resistentes e pele radiante',
    trigger: 'Novo'
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-500 animate-bounce" />,
    title: 'Energia Vital',
    description: 'Mais disposição e energia já na primeira semana de uso',
    trigger: 'Popular'
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500 transform hover:rotate-12 transition-transform" />,
    title: 'Saúde Integral',
    description: 'Fortalecimento do sistema imunológico e equilíbrio hormonal em 14 dias',
    trigger: 'Essencial'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />,
    title: 'Anti-idade Natural',
    description: 'Primeiros resultados visíveis em 7-14 dias, com pele mais jovem e hidratada',
    trigger: 'Exclusivo'
  },
  {
    icon: <Moon className="h-6 w-6 text-indigo-500 transform hover:scale-110 transition-transform" />,
    title: 'Sono Reparador',
    description: 'Melhora na qualidade do sono já nos primeiros dias de uso',
    trigger: 'Bem-estar'
  },
  {
    icon: <Activity className="h-6 w-6 text-blue-500 animate-pulse" />,
    title: 'Vitalidade Diária',
    description: 'Em 7-14 dias, mais disposição física e mental para suas atividades',
    trigger: 'Resultado'
  },
  {
    icon: <Eye className="h-6 w-6 text-teal-500 transform hover:rotate-12 transition-transform" />,
    title: 'Proteção Completa',
    description: 'Proteção imediata com nutrientes essenciais para sua saúde',
    trigger: 'Garantido'
  }
];

export const packages: Package[] = [
  {
    title: '1 Unidade',
    subtitle: 'Experimente e Comprove',
    discount: '55%',
    price: 149.90,
    originalPrice: 332.00,
    installments: 15.42,
    pix: 142.41,
    popular: false,
    savings: 182.10,
    bonus: ['Guia de Nutrição Essencial'],
    hasMassager: false
  },
  {
    title: '3 Unidades',
    subtitle: 'Compre 2, Ganhe 1',
    discount: '60%',
    price: 134.95,
    originalPrice: 996.00,
    installments: 27.77,
    pix: 256.41,
    popular: true,
    savings: 596.77,
    bonus: [
      'Guia de Nutrição Essencial',
      'Programa de Exercícios Suaves',
      'Consulta Online com Especialista',
      'Massageador Portátil 10 Velocidades'
    ],
    hasMassager: true
  },
  {
    title: '6 Unidades',
    subtitle: 'Compre 3, Ganhe 3',
    discount: '66%',
    price: 113.30,
    originalPrice: 1992.00,
    installments: 34.97,
    pix: 322.91,
    popular: false,
    savings: 1314.72,
    bonus: [
      'Guia de Nutrição Essencial',
      'Programa de Exercícios Suaves',
      'Consulta Online com Especialista',
      'Acompanhamento Personalizado',
      'Massageador Portátil 10 Velocidades'
    ],
    hasMassager: true
  },
  {
    title: '10 Unidades',
    subtitle: 'Compre 5, Ganhe 5',
    discount: '70%',
    price: 99.90,
    originalPrice: 3320.00,
    installments: 51.43,
    pix: 474.91,
    popular: false,
    savings: 2324.10,
    bonus: [
      'Guia de Nutrição Essencial',
      'Programa de Exercícios Suaves',
      'Consulta Online com Especialista',
      'Acompanhamento Personalizado',
      'Kit Bem-estar Exclusivo',
      'Massageador Portátil 10 Velocidades'
    ],
    hasMassager: true
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    age: "52 anos",
    location: "São Paulo, SP",
    text: "Em apenas 2 semanas usando Bioreino, minha disposição mudou completamente! Acordo com mais energia e as dores nas articulações diminuíram muito.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ana Paula Costa",
    age: "45 anos",
    location: "Rio de Janeiro, RJ",
    text: "Já na primeira semana notei diferença na minha pele e cabelo! Minhas amigas sempre perguntam qual é meu segredo. Recomendo para todas!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Cristina Oliveira",
    age: "63 anos",
    location: "Belo Horizonte, MG",
    text: "Em 10 dias os sintomas da menopausa diminuíram significativamente. Durmo melhor e me sinto mais disposta durante o dia todo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Patrícia Santos",
    age: "48 anos",
    location: "Curitiba, PR",
    text: "Incrível como minha imunidade melhorou! Não tenho mais aquele cansaço constante e minha pele está muito mais bonita. Resultado em 2 semanas!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Regina Martins",
    age: "57 anos",
    location: "Salvador, BA",
    text: "Depois de 3 semanas usando Bioreino, perdi 4kg sem fazer dieta rigorosa. Minha disposição aumentou e as dores nas juntas sumiram!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Luciana Ferreira",
    age: "41 anos",
    location: "Florianópolis, SC",
    text: "Comecei a ver resultados em apenas 1 semana! Minha energia voltou, durmo melhor e meu cabelo está muito mais forte. Simplesmente maravilhoso!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export const socialProof = {
  customers: "50.000+",
  satisfaction: "98%",
  reviews: "4.9/5",
  guarantee: "7 dias"
};