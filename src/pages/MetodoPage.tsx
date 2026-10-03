import React, { useState } from 'react';
import { PageRoute } from '../types';
import { WORK_PROCESS_STEPS } from '../data/content';
import { EnterpriseStandards } from '../components/EnterpriseStandards';
import { ArrowRight, Eye, FileSpreadsheet, GitMerge, Activity, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MetodoPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const MetodoPage: React.FC<MetodoPageProps> = ({ onNavigate, onOpenContact }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const icons = [
    <Eye className="w-5 h-5" />,
    <FileSpreadsheet className="w-5 h-5" />,
    <GitMerge className="w-5 h-5" />,
    <Activity className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />
  ];

  const deliverables = [
    ['Mapa de fricción y usuarios', 'Inventario de fuentes de datos', 'Matriz de viabilidad técnica y negocio'],
    ['Diseño de arquitectura de software', 'Definición de guardrails y permisos', 'Criterios de evaluación y métricas de éxito'],
    ['Servidores MCP e integraciones API', 'Agentes especializados y herramientas', 'Grafos de ejecución y memoria'],
    ['Puntos de control Human-in-the-loop', 'Monitoreo de latencia y observabilidad', 'Despliegue contenerizado en producción'],
    ['Evaluación continua de deriva', 'Optimización de consumo de tokens', 'Reutilización de componentes para nuevos casos']
  ];

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <span className="text-[#FF6B45] font-semibold">Cómo trabajamos // Método O5</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#24BDBA] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
              METODOLOGÍA PROPIETARIA // INGENIERÍA RIGUROSA
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.05]">
            O5 / THE ORQOMI METHOD.
          </h1>
          <p className="text-lg sm:text-2xl text-[#FF6B45] font-mono font-light mt-1">
            NO PARTIMOS POR EL MODELO. PARTIMOS POR EL PROBLEMA.
          </p>
          <p className="text-base text-[#D4D9E1] leading-relaxed font-light mt-2 max-w-3xl">
            La mayoría de las iniciativas de IA fracasan porque parten seleccionando el modelo antes de entender el flujo del trabajo humano y los datos reales disponibles. En ORQOMI seguimos un marco de cinco fases estructuradas para convertir problemas difusos en sistemas en producción gobernables y verificables.
          </p>
        </div>

        {/* 5 Stages Interactive Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono">
          {WORK_PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                  isSelected 
                    ? 'bg-[#131924] border-[#24BDBA] shadow-lg shadow-[#24BDBA]/10 ring-1 ring-[#24BDBA]' 
                    : 'bg-[#10141D] border-[#1E2638] hover:border-[#241447] hover:bg-[#131924]'
                }`}
              >
                <div className="flex items-center justify-between w-full text-xs">
                  <span className={isSelected ? 'text-[#FF6B45] font-bold' : 'text-[#6E7A8A]'}>
                    {step.step} //
                  </span>
                  <span className={`p-2 rounded-lg ${isSelected ? 'bg-[#24BDBA]/20 text-[#24BDBA]' : 'bg-[#131924] text-[#6E7A8A]'}`}>
                    {icons[idx]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-['Space_Grotesk'] text-lg font-bold uppercase ${isSelected ? 'text-[#F6F4EF]' : 'text-[#8C96A5]'}`}>
                    {step.name}
                  </span>
                  <span className="text-xs text-[#6E7A8A] font-sans mt-0.5">
                    {step.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep Dive */}
        <div className="bg-[#10141D] border border-[#1E2638] rounded-xl p-6 sm:p-10 flex flex-col gap-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#181E29] pb-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#FF6B45]/15 border border-[#FF6B45]/40 text-[#FF6B45] text-xs font-mono font-bold rounded">
                  ETAPA {WORK_PROCESS_STEPS[activeStage].step}
                </span>
                <span className="text-xs font-mono uppercase text-[#24BDBA] font-semibold">
                  {WORK_PROCESS_STEPS[activeStage].name}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                {WORK_PROCESS_STEPS[activeStage].summary}
              </h2>
              <p className="text-sm sm:text-base text-[#D4D9E1] font-light leading-relaxed mt-2">
                {WORK_PROCESS_STEPS[activeStage].detail}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => onOpenContact(`Consulta sobre Método O5 - Etapa ${WORK_PROCESS_STEPS[activeStage].name}`)}
                className="px-5 py-2.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-lg shadow-[#FF6B45]/20"
              >
                Consultar esta etapa
              </button>
            </div>
          </div>

          {/* Entregables de la Etapa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24BDBA]" />
                Entregables Clave de esta Fase
              </span>
              <ul className="flex flex-col gap-2 font-mono text-xs">
                {deliverables[activeStage].map((item, i) => (
                  <li key={i} className="p-3 bg-[#131924] border border-[#1E2638] rounded-lg text-[#F6F4EF] flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 p-5 bg-[#131924] border border-[#1E2638] rounded-xl justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B45]" />
                  Axioma de Gobierno ORQOMI
                </span>
                <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                  {activeStage === 0 && 'Nunca asumimos lo que el cliente cree necesitar sin validar la calidad real de sus datos estructurados y no estructurados.'}
                  {activeStage === 1 && 'El 80% de los problemas de IA son problemas de datos o de arquitectura, no de prompts.'}
                  {activeStage === 2 && 'Separamos estrictamente la capa de herramientas del modelo cognitivo mediante el estándar abierto MCP.'}
                  {activeStage === 3 && 'Toda acción destructiva o transaccional de alto impacto exige confirmación explícita de un operador humano calificado.'}
                  {activeStage === 4 && 'La arquitectura no se desecha: cada caso de uso fortalece la capa base de herramientas para la siguiente iteración.'}
                </p>
              </div>

              <div className="pt-3 border-t border-[#181E29] flex items-center justify-between text-xs font-mono text-[#6E7A8A]">
                <span>Etapa {activeStage + 1} de 5</span>
                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % WORK_PROCESS_STEPS.length)}
                  className="hover:text-[#24BDBA] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Standards & Contractual Guarantees */}
        <div className="pt-8 border-t border-[#181E29]">
          <EnterpriseStandards />
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-12 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
              ¿Listo para aplicar el Método O5 a tu organización?
            </h3>
            <p className="text-sm text-[#8C96A5] font-light max-w-xl">
              Agendemos una primera sesión de diagnóstico (AI Discovery) para entender el problema antes de proponer una solución.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Diagnóstico Método O5')}
            className="px-8 py-4 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xl shadow-[#FF6B45]/20"
          >
            <span>Iniciar con Etapa 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
