'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ProblemSolution() {
  return (
    <div className="bg-gray-50 py-24">
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
    </div>
  );
}