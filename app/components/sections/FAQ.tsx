'use client';

import { motion } from 'framer-motion';
import { Shield, Check, AlertCircle, Clock, Star, Award, ThumbsUp } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const faqs = [
  {
    question: "Quem pode usar o Bioreino?",
    answer: "O Bioreino é um suplemento 100% natural e seguro, desenvolvido para ser usado por qualquer pessoa adulta que busca melhorar sua saúde e qualidade de vida. Seja você jovem ou idosa, ativa ou sedentária, o Bioreino é para você!",
    icon: <Check className="h-6 w-6 text-green-500" />
  },
  {
    question: "Por que não devo adiar o cuidado com minha saúde?",
    answer: "Saúde e cuidados pessoais não podem esperar. Quanto mais você adiar, mais difícil pode se tornar resolver questões de saúde no futuro. O momento ideal para começar a se cuidar é agora, prevenindo problemas e garantindo seu bem-estar a longo prazo.",
    icon: <Clock className="h-6 w-6 text-red-500" />
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Nossa garantia é simples e transparente: se você não ficar 100% satisfeita com os resultados nos primeiros 7 dias de uso, devolvemos seu dinheiro integralmente. Sem perguntas, sem burocracia. Você não tem nada a perder!",
    icon: <Shield className="h-6 w-6 text-blue-500" />
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer: "A maioria das clientes relata melhorias significativas já nas primeiras 1-2 semanas de uso. Para resultados completos, recomendamos o uso contínuo por 90 dias.",
    icon: <AlertCircle className="h-6 w-6 text-yellow-500" />
  },
  {
    question: "O Bioreino tem efeitos colaterais?",
    answer: "Não. Por ser um produto 100% natural e desenvolvido com ingredientes seguros, o Bioreino não apresenta efeitos colaterais. É seguro para uso contínuo.",
    icon: <Check className="h-6 w-6 text-green-500" />
  },
  {
    question: "Como devo tomar o Bioreino?",
    answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente pela manhã, com água. É super fácil de incorporar à sua rotina!",
    icon: <Check className="h-6 w-6 text-green-500" />
  },
  {
    question: "O produto tem registro na ANVISA?",
    answer: "Sim, o Bioreino é um produto devidamente registrado e aprovado pela ANVISA, garantindo sua segurança e eficácia.",
    icon: <Shield className="h-6 w-6 text-blue-500" />
  },
  {
    question: "Quem é a empresa por trás do Bioreino?",
    answer: "Desde 2018, somos referência em saúde e bem-estar, com milhares de clientes satisfeitas em todo o Brasil. Nossa missão é promover qualidade de vida através de produtos inovadores e de alta qualidade.",
    icon: <Award className="h-6 w-6 text-purple-500" />
  },
  {
    question: "Por que o Bioreino é diferente dos outros suplementos?",
    answer: "O Bioreino é único devido à sua fórmula inovadora com quelato e componentes importados de alta qualidade. Nossa composição exclusiva garante absorção superior e resultados mais efetivos que outros produtos do mercado.",
    icon: <Star className="h-6 w-6 text-yellow-500" />
  },
  {
    question: "O investimento vale a pena?",
    answer: "Absolutamente! O Bioreino oferece benefícios incomparáveis para sua saúde. Além disso, oferecemos descontos exclusivos, brindes especiais e garantia de satisfação. Lembre-se: sua saúde é seu maior patrimônio.",
    icon: <ThumbsUp className="h-6 w-6 text-green-500" />
  }
];

export function FAQ() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tire suas dúvidas sobre o Bioreino e descubra por que milhares de pessoas já confiam em nosso produto
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">
                Garantia incondicional de 7 dias
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}