'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check, Heart, Shield, Sparkles, Star, Sun, Zap, Moon, Activity, Eye, Clock, Award, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialProof = {
  customers: "50.000+",
  satisfaction: "98%",
  reviews: "4.9/5",
  guarantee: "7 dias"
};

const urgencyTriggers = {
  stock: "Últimas unidades disponíveis!",
  promotion: "Oferta por tempo limitado",
  bonus: "Bônus exclusivos hoje"
};

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: 'Energia Instantânea',
    description: 'Sinta-se mais disposta logo nas primeiras semanas, com energia que dura o dia todo',
    trigger: 'Resultado Rápido'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: 'Proteção Total',
    description: 'Sistema imunológico até 3x mais forte, garantindo sua saúde e bem-estar diário',
    trigger: 'Segurança'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: 'Rejuvenescimento Natural',
    description: 'Redução visível dos sinais de envelhecimento em apenas 60 dias de uso',
    trigger: 'Transformação'
  },
  {
    icon: <Sun className="h-6 w-6 text-orange-500" />,
    title: 'Metabolismo Acelerado',
    description: 'Queima de gordura otimizada e mais facilidade para emagrecer naturalmente',
    trigger: 'Resultado Garantido'
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    title: 'Beleza Integral',
    description: 'Pele mais jovem, cabelos mais fortes e unhas resistentes em um único produto',
    trigger: 'Praticidade'
  },
  {
    icon: <Moon className="h-6 w-6 text-indigo-500" />,
    title: 'Sono Restaurador',
    description: 'Durma melhor e acorde mais disposta, sem aquela sensação de cansaço',
    trigger: 'Bem-estar'
  },
  {
    icon: <Activity className="h-6 w-6 text-red-500" />,
    title: 'Equilíbrio Hormonal',
    description: 'Alívio dos sintomas da menopausa e regulação natural dos hormônios',
    trigger: 'Saúde'
  },
  {
    icon: <Eye className="h-6 w-6 text-teal-500" />,
    title: 'Vitalidade Completa',
    description: 'Fortalecimento de ossos e articulações, prevenindo dores e desconfortos',
    trigger: 'Prevenção'
  }
];

const packages = [
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
    bonus: ['Massageador Portátil 10 Velocidades'],
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
    bonus: ['Massageador Portátil 10 Velocidades'],
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
    bonus: ['Massageador Portátil 10 Velocidades'],
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
    bonus: ['Massageador Portátil 10 Velocidades'],
    hasMassager: true
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    age: "52 anos",
    location: "São Paulo, SP",
    text: "Depois de 2 meses usando Bioreino, minha disposição mudou completamente! Acordo com mais energia e as dores nas articulações diminuíram muito.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ana Paula Costa",
    age: "45 anos",
    location: "Rio de Janeiro, RJ",
    text: "Incrível como minha pele e cabelo melhoraram! Minhas amigas sempre perguntam qual é meu segredo. Recomendo para todas!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Cristina Oliveira",
    age: "63 anos",
    location: "Belo Horizonte, MG",
    text: "Os sintomas da menopausa diminuíram significativamente. Durmo melhor e me sinto mais disposta durante o dia todo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

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

  return source in messages ? messages[source as keyof typeof messages] : messages.floating_button;
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

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white shadow-lg hover:bg-green-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
        />
        Fale Conosco
      </motion.button>

      <div className="bg-red-600 text-white py-2 text-center">
        <p className="text-sm font-medium">
          ⚡ Oferta Especial: Últimas horas com até 70% OFF + Bônus Exclusivos!
        </p>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-white shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/images/logo.png"
                alt="Bioreino Logo"
                width={150}
                height={40}
                className="ml-2"
              />
            </motion.div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Produto Mais Vendido 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">{socialProof.satisfaction} de Satisfação</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Garantia de {socialProof.guarantee}</span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleWhatsAppClick('header_button')}
                className="hidden bg-green-500 hover:bg-green-600 sm:flex"
              >
                Fale Conosco via WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <AnimatedSection className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              className="flex flex-col justify-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  <Clock className="mr-1 h-4 w-4" />
                  Oferta por tempo limitado
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Revolucione Sua Saúde e Bem-estar com Bioreino!
              </h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="font-semibold text-green-600">23 vitaminas e minerais essenciais</span> em um único composto, 
                desenvolvido especialmente para mulheres entre 30 e 90 anos. Um produto <span className="font-semibold">100% natural</span>, 
                cientificamente comprovado e <span className="font-semibold">sem efeitos colaterais</span>.
              </motion.p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-4">
                  <span className="text-2xl font-bold text-green-600">{socialProof.customers}</span>
                  <span className="text-sm text-gray-600">Clientes Satisfeitas</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-4">
                  <span className="text-2xl font-bold text-green-600">{socialProof.satisfaction}</span>
                  <span className="text-sm text-gray-600">Taxa de Satisfação</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-4">
                  <span className="text-2xl font-bold text-green-600">{socialProof.reviews}</span>
                  <span className="text-sm text-gray-600">Avaliação Média</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-4">
                  <span className="text-2xl font-bold text-green-600">{socialProof.guarantee}</span>
                  <span className="text-sm text-gray-600">Garantia</span>
                </div>
              </div>
              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => handleWhatsAppClick('hero_button')}
                  className="bg-green-500 text-lg hover:bg-green-600"
                >
                  Quero Transformar Minha Saúde <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  🔒 Compra 100% Segura | ✨ Resultados Garantidos | 🚚 Entrega para Todo Brasil
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/remedio.png"
                alt="Bioreino Product"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Aprovado pela ANVISA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Produto Mais Vendido</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Por que Bioreino é Essencial para Sua Saúde?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Segundo pesquisa do IBGE, mais de 98% das pessoas não ingerem a quantidade ideal de vitaminas e minerais essenciais.
              Uma alimentação completa para atingir esses níveis custaria cerca de R$1.500,00 mensais.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">Problemas Comuns:</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✕</span>
                  Fadiga e falta de energia constante
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✕</span>
                  Sistema imunológico enfraquecido
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✕</span>
                  Envelhecimento precoce da pele
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✕</span>
                  Dores nas articulações
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✕</span>
                  Alterações hormonais frequentes
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">Solução Bioreino:</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  23 vitaminas e minerais essenciais
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  Apenas 2 cápsulas por dia
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  100% natural e sem efeitos colaterais
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  Resultados em até 30 dias
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  Economia de mais de R$1.000 por mês
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefícios Cientificamente Comprovados
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Com apenas 2 cápsulas diárias, você obtém todos estes benefícios transformadores para sua saúde.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            variants={staggerChildren}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="relative flex flex-col"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -top-4 left-0">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {benefit.trigger}
                    </span>
                  </div>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {benefit.icon}
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Shield className="mx-auto h-16 w-16 text-green-600" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Garantia Legal de 7 Dias
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sua satisfação é nossa prioridade! Conforme o Código de Defesa do Consumidor, 
              você tem 7 dias para testar o produto. Se não estiver completamente satisfeita, 
              devolvemos 100% do seu dinheiro na hora. Sem questionamentos, sem burocracia!
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block bg-red-100 rounded-full px-4 py-1 text-sm font-medium text-red-800 mb-6"
            >
              ⏳ Promoção por Tempo Limitado
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Peça mais de 3 Frascos e Ganhe Bônus Gratuitos!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprando ainda hoje a partir de 3 frascos, você ganha na hora um massageador portátil exclusivo.
            </p>
          </div>
          <motion.div
            className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 lg:p-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Massageador Portátil Premium
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                    <span>10 velocidades ajustáveis para diferentes necessidades</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                    <span>Alivia dores no pescoço, costas, cintura, nádegas e pernas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                    <span>Design portátil e ergonômico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                    <span>Fácil de usar e transportar</span>
                  </li>
                </ul>
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleWhatsAppClick('bonus_section')}
                    className="bg-green-500 hover:bg-green-600"
                    size="lg"
                  >
                    Garantir Meu Brinde <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
              <div className="relative">
                <Image
                  src="/images/massageador.webp"
                  alt="Massageador Portátil"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold transform rotate-12">
                  GRÁTIS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Escolha o Melhor Plano para Você
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quanto mais unidades, maior seu desconto. Aproveite nossas ofertas especiais!
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
            variants={staggerChildren}
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
                <Card
                  className={`relative flex flex-col ${
                    pkg.popular ? 'border-green-500 ring-2 ring-green-500' : ''
                  }`}
                >
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 text-sm font-semibold text-white"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Mais Popular
                    </motion.div>
                  )}
                  {pkg.hasMassager && (
                    <motion.div
                      className="absolute -top-4 right-4 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      + Massageador GRÁTIS
                    </motion.div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
                        -{pkg.discount}
                      </span>
                    </div>
                    {pkg.subtitle && (
                      <p className="mt-1 text-sm text-gray-500">{pkg.subtitle}</p>
                    )}
                    <div className="mt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                          R$ {pkg.price.toFixed(2)}
                        </span>
                        <span className="ml-1 text-sm font-semibold text-gray-500">/unidade</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 line-through">
                        De R$ {pkg.originalPrice.toFixed(2)}
                      </p>
                      <p className="mt-2 text-sm text-green-600 font-medium">
                        Economia de R$ {pkg.savings.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        12x de R$ {pkg.installments.toFixed(2)}
                      </p>
                      <p className="text-sm font-medium text-green-600">
                        À vista no PIX: R$ {pkg.pix.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-6 space-y-4">
                      <p className="text-sm font-medium text-gray-900">Bônus Inclusos:</p>
                      <ul className="space-y-2">
                        {pkg.bonus.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => handlePackageClick(pkg.title)}
                        className="w-full bg-green-500 hover:bg-green-600"
                      >
                        Comprar Agora
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <dl className="space-y-8">
              {[
                {
                  question: "Quanto tempo demora para ver resultados?",
                  answer: "A maioria das clientes relata melhorias significativas já nas primeiras 2-3 semanas de uso. Para resultados completos, recomendamos o uso contínuo por 90 dias."
                },
                {
                  question: "O Bioreino tem efeitos colaterais?",
                  answer: "Não. Por ser um produto 100% natural e desenvolvido com ingredientes seguros, o Bioreino não apresenta efeitos colaterais."
                },
                {
                  question: "Como devo tomar o Bioreino?",
                  answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente pela manhã, com água."
                },
                {
                  question: "O produto tem registro na ANVISA?",
                  answer: "Sim, o Bioreino é um produto devidamente registrado e aprovado pela ANVISA."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-8"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-4 text-gray-600">{faq.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden bg-green-600 px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforme Sua Saúde Hoje!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
            Junte-se a mais de {socialProof.customers} mulheres que já descobriram os benefícios do Bioreino.
            Não perca mais tempo - sua saúde não pode esperar!
          </p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => handleWhatsAppClick('final_cta')}
              className="bg-white text-green-600 hover:bg-green-50"
            >
              Quero Começar Agora
            </Button>
          </motion.div>
          <p className="mt-6 text-sm text-green-100">
            🔒 Compra 100% Segura | ✨ Satisfação Garantida | 🚚 Entrega Expressa
          </p>
        </motion.div>
      </AnimatedSection>

      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <div className="flex items-center space-x-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                alt="Visa"
                width={40}
                height={20}
                className="h-8 w-auto"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
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
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}