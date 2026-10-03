import React from 'react';
import { PageRoute } from '../types';
import { CORE_PHILOSOPHY } from '../data/content';
import { OrqomiLogo } from '../components/OrqomiLogo';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <span className="text-[#FF6B45] font-semibold">Nosotros</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
                DOCTRINA & FUNDACIÓN INSTITUCIONAL
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.1]">
              ORQOMI nace de un cambio que ya ocurrió.
            </h1>
            <p className="text-lg text-[#F6F4EF] font-light leading-relaxed">
              Durante décadas desarrollar software significó traducir una idea a miles de líneas de código manual. Eso está cambiando radicalmente ante nuestros ojos.
            </p>
            <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
              Hoy, gran parte del valor no radica en picar sintaxis, sino en entender profundamente el problema, definir correctamente la arquitectura, establecer límites determinísticos, estructurar el contexto y coordinar inteligencias artificiales capaces de ejecutar tareas complejas.
            </p>
            <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
              La tecnología no desapareció. Los fundamentos importan más que nunca. Porque cuando la velocidad de ejecución se acelera, tener claridad conceptual sobre qué construir, cómo estructurarlo y cómo hacerlo seguro y gobernable se vuelve el activo más valioso de cualquier organización.
            </p>
          </div>

          <div className="lg:col-span-4 p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 shadow-2xl">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-[#24BDBA] uppercase tracking-wider font-semibold">
                CANON BRANDMARK
              </span>
              <div className="py-6 flex items-center justify-center">
                <OrqomiLogo size="lg" showWordmark={true} />
              </div>
              <div className="p-3.5 bg-[#131924] border border-[#1E2638] rounded-lg text-center">
                <span className="font-mono text-xs text-[#F6F4EF] font-semibold tracking-wider block">
                  {CORE_PHILOSOPHY.badge}
                </span>
                <span className="text-[10px] text-[#24BDBA] font-mono mt-1 block">
                  Multiple Intelligences. One Coordinated System.
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#8C96A5] leading-relaxed pt-2 border-t border-[#181E29]">
              Fundada en Santiago de Chile con ingeniería de estándar global.
            </div>
          </div>
        </div>

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-4 hover:border-[#24BDBA]/60 transition-colors">
            <span className="font-mono text-xs text-[#24BDBA] font-bold">TENET 01</span>
            <h3 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
              Sistemas sobre el Hype
            </h3>
            <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
              Rechazamos las metáforas de ciencia ficción vacía como "magia" o "cajas negras omnipotentes". En ORQOMI tratamos a la IA como maquinaria industrial de software: medible, auditable y verificable.
            </p>
          </div>

          <div className="p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-4 hover:border-[#FF6B45]/60 transition-colors">
            <span className="font-mono text-xs text-[#FF6B45] font-bold">TENET 02</span>
            <h3 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
              Restricción Arquitectónica
            </h3>
            <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
              El 85% de la ingeniería consiste en la sobriedad del sustrato de datos, esquemas de seguridad y límites de ejecución. La señal coral de acción solo se activa cuando hay un proceso real en marcha.
            </p>
          </div>

          <div className="p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-4 hover:border-[#24BDBA]/60 transition-colors">
            <span className="font-mono text-xs text-[#24BDBA] font-bold">TENET 03</span>
            <h3 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
              Gobernanza Humana Inviolable
            </h3>
            <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
              Los agentes automatizan la carga operativa y el análisis de alta concurrencia; el juicio, la ética y las autorizaciones sensibles permanecen firmemente bajo dirección humana.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-10 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
              ¿Compartes esta visión sobre el futuro de la ingeniería?
            </h3>
            <p className="text-xs text-[#8C96A5]">
              Conversemos sobre cómo colaborar o integrar esta arquitectura en tus sistemas.
            </p>
          </div>
          <button
            onClick={() => onOpenContact()}
            className="px-6 py-3 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
          >
            <span>Iniciar conversación</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
