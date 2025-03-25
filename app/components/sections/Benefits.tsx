'use client';

import { motion } from 'framer-motion';
interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  trigger: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

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

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Benefícios Cientificamente Comprovados
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transforme sua saúde com Bioreino: emagrecimento saudável, beleza integral e bem-estar completo em um único produto.
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
                className="relative flex flex-col group"
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
                  <div className="relative">
                    {benefit.icon}
                    <div className="absolute -inset-1 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
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
    </div>
  );
}