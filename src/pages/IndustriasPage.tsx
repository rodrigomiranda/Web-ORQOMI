import React from 'react';
import { PageRoute } from '../types';
import { INDUSTRIES_DATA } from '../data/content';
import { ArrowRight, CheckCircle2, Compass, Building, GraduationCap, ShoppingBag, Code, Target } from 'lucide-react';
import { SignalDirectorShowcase } from '../components/SignalDirectorShowcase';

interface IndustriasPageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const IndustriasPage: React.FC<IndustriasPageProps> = ({
  currentRoute,
  onNavigate,
  onOpenContact
}) => {
  const activeIndustry = INDUSTRIES_DATA.find(i => i.route === currentRoute);

  // If Liderazgo & Decisión or direct signal director view, render the dedicated Signal Director platform experience!
  if (activeIndustry?.slug === 'liderazgo' || currentRoute === '/signal-director') {
    return (
      <div className="w-full pt-20 bg-[#0C0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs font-mono text-[#8C96A5] border-b border-[#181E29]">
          <div className="flex items-center gap-2">
            <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
              Inicio
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/industrias')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
              Industrias
            </button>
            <span>/</span>
            <span className="text-[#FF6B45] font-semibold">Liderazgo & Decisión (Signal Director)</span>
          </div>
          <button 
            onClick={() => onNavigate('/industrias')}
            className="text-xs text-[#24BDBA] hover:text-[#55DAD5] cursor-pointer transition-colors font-medium"
          >
            ← Volver a Industrias
          </button>
        </div>

        <SignalDirectorShowcase 
          onNavigate={onNavigate}
          onOpenContact={onOpenContact}
        />
      </div>
    );
  }

  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case 'educacion': return <GraduationCap className="w-5 h-5 text-[#24BDBA]" />;
      case 'construccion-sostenibilidad': return <Building className="w-5 h-5 text-[#24BDBA]" />;
      case 'retail': return <ShoppingBag className="w-5 h-5 text-[#FF6B45]" />;
      case 'software-tecnologia': return <Code className="w-5 h-5 text-[#24BDBA]" />;
      case 'liderazgo': return <Target className="w-5 h-5 text-[#FF6B45]" />;
      default: return <Compass className="w-5 h-5 text-[#24BDBA]" />;
    }
  };

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/industrias')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Industrias
          </button>
          {activeIndustry && (
            <>
              <span>/</span>
              <span className="text-[#FF6B45] font-semibold">{activeIndustry.title}</span>
            </>
          )}
        </div>

        {activeIndustry ? (
          /* Single Industry Detail View */
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-[#131924] border border-[#1E2638] rounded-lg">
                  {getIndustryIcon(activeIndustry.slug)}
                </span>
                {activeIndustry.isAlliedProject ? (
                  <span className="px-2.5 py-0.5 bg-[#FF6B45]/15 border border-[#FF6B45]/40 text-[#FF6B45] font-mono text-xs rounded font-semibold">
                    {activeIndustry.alliedProjectName}
                  </span>
                ) : (
                  <span className="font-mono text-xs text-[#24BDBA] uppercase font-semibold">
                    SECTOR // {activeIndustry.title}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
                {activeIndustry.title}
              </h1>
              <p className="text-lg text-[#FF6B45] font-mono font-light">
                {activeIndustry.headline}
              </p>
              <p className="text-base text-[#D4D9E1] max-w-3xl leading-relaxed mt-2 font-light">
                {activeIndustry.description}
              </p>
            </div>

            {/* Special Callout for Signal Director if Liderazgo */}
            {activeIndustry.isAlliedProject && (
              <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#FF6B45] font-semibold">PROYECTO ALIADO // SIGNAL DIRECTOR</span>
                  <span className="text-[#24BDBA]">Gobernanza & Estrategia</span>
                </div>
                <h3 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                  Perspectiva estratégica entre pares.
                </h3>
                <p className="text-xs text-[#D4D9E1] leading-relaxed">
                  Plataforma orientada a acompañar experiencias confidenciales de reflexión y trabajo estratégico para líderes empresariales, transformando sesiones, observaciones y señales en información estructurada y accionable.
                </p>
                <div className="text-[11px] text-[#8C96A5] italic font-mono pt-1">
                  * Proyecto desarrollado y operado en alianza estratégica de ingeniería y confidencialidad.
                </div>
              </div>
            )}

            {/* Capabilities */}
            <div className="bg-[#10141D] border border-[#1E2638] rounded-xl p-6 sm:p-8 flex flex-col gap-6">
              <h2 className="text-lg font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#24BDBA] rounded-xs" />
                Capacidades Específicas de la Vertical
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeIndustry.capabilities.map((cap, i) => (
                  <div key={i} className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex items-start gap-3 hover:border-[#24BDBA]/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#24BDBA] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F6F4EF] leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Box */}
            <div className="p-6 bg-[#131924] border-l-4 border-[#FF6B45] rounded-r-xl flex flex-col gap-2">
              <span className="font-mono text-xs text-[#FF6B45] font-semibold uppercase">
                Directriz de Enfoque:
              </span>
              <p className="text-sm text-[#F6F4EF] leading-relaxed font-light">
                {activeIndustry.message}
              </p>
            </div>

            {/* CTA */}
            <div className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                  ¿Lideras iniciativas en {activeIndustry.title}?
                </span>
                <span className="text-xs text-[#8C96A5]">
                  Conversemos sobre cómo conectar tus datos y sistemas con modelos y agentes.
                </span>
              </div>
              <button
                onClick={() => onOpenContact(`Industria: ${activeIndustry.title}`)}
                className="px-6 py-3 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
              >
                <span>Explorar caso de uso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* All Industries Overview */
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
                  CONTEXTO SECTORIAL APLICADO
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                La tecnología cambia. El contexto importa.
              </h1>
              <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
                Cada industria tiene sus propias restricciones normativas, estructuras de datos, terminología y formas de operar. Diseñamos sistemas inteligentes arraigados en la realidad de cada sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES_DATA.map((ind) => (
                <div
                  key={ind.id}
                  className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-[#131924] border border-[#1E2638] rounded-lg">
                        {getIndustryIcon(ind.slug)}
                      </div>
                      {ind.isAlliedProject ? (
                        <span className="text-[10px] font-mono text-[#FF6B45] bg-[#FF6B45]/15 border border-[#FF6B45]/40 px-2 py-0.5 rounded font-semibold">
                          PROYECTO ALIADO
                        </span>
                      ) : ind.badge ? (
                        <span className="text-[10px] font-mono text-[#24BDBA] bg-[#161D2B] px-2 py-0.5 rounded border border-[#1E2638]">
                          {ind.badge}
                        </span>
                      ) : null}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                        {ind.title}
                      </h2>
                      <p className="text-xs font-mono text-[#FF6B45] mt-1">
                        {ind.headline}
                      </p>
                    </div>

                    <p className="text-xs text-[#8C96A5] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 flex flex-col gap-1">
                      {ind.capabilities.slice(0, 4).map((c, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#6E7A8A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA]" />
                          <span className="text-[#D4D9E1]">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#181E29] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(ind.route)}
                      className="text-xs font-mono text-[#24BDBA] hover:text-[#55DAD5] flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <span>Ver arquitectura</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenContact(`Industria: ${ind.title}`)}
                      className="text-xs font-mono text-[#8C96A5] hover:text-[#F6F4EF] cursor-pointer transition-colors"
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
