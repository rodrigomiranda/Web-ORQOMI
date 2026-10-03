import React, { useState } from 'react';
import { PageRoute, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Workflow 
} from 'lucide-react';

interface ServicesPageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  currentRoute,
  onNavigate,
  onOpenContact
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Match active service by route or slug alias
  const activeService: ServiceItem | undefined = SERVICES_DATA.find(s => 
    s.route === currentRoute || 
    currentRoute.includes(s.slug) ||
    (currentRoute === '/servicios/mcp' && s.id === 'capa-inteligencia-mcp') ||
    (currentRoute === '/servicios/agentes-ia' && s.id === 'agentes-automatizacion') ||
    (currentRoute === '/servicios/datos-conversacionales' && s.id === 'ia-conversacional') ||
    (currentRoute === '/servicios/plataformas-ia' && s.id === 'productos-ai-native') ||
    (currentRoute === '/servicios/ia-educacion-moodle' && s.id === 'ia-educacion') ||
    (currentRoute === '/servicios/ai-partner' && s.id === 'ai-partner')
  );

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/que-hacemos')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Qué hacemos
          </button>
          {activeService && (
            <>
              <span>/</span>
              <span className="text-[#FF6B45] font-semibold">{activeService.title}</span>
            </>
          )}
        </div>

        {activeService ? (
          /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              SERVICE DETAIL VIEW (10-Section Canonical Template)
             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
          <div className="flex flex-col gap-14">
            {/* 1. Clear Outcome-Led Hero */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-[#FF6B45]/15 border border-[#FF6B45]/40 text-[#FF6B45] font-mono text-xs rounded font-bold">
                  SERVICIO {activeService.number}
                </span>
                {activeService.subconcept && (
                  <span className="font-mono text-xs text-[#24BDBA] uppercase font-semibold">
                    // {activeService.subconcept}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.05]">
                {activeService.title}
              </h1>
              <p className="text-xl sm:text-2xl text-[#FF6B45] font-mono font-medium">
                {activeService.headline}
              </p>
              <p className="text-base sm:text-lg text-[#D4D9E1] leading-relaxed font-light mt-1">
                {activeService.description}
              </p>
            </div>

            {/* 2 & 3. Business Problem & What Changes After Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B45] font-semibold">
                  <AlertCircle className="w-4 h-4 text-[#FF6B45]" />
                  <span>EL PROBLEMA DE NEGOCIO</span>
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  La fricción actual
                </h3>
                <p className="text-sm text-[#8C96A5] leading-relaxed font-light">
                  {activeService.businessProblem}
                </p>
              </div>

              <div className="p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#24BDBA] font-semibold">
                  <Sparkles className="w-4 h-4 text-[#24BDBA]" />
                  <span>EL CAMBIO TRAS LA IMPLEMENTACIÓN</span>
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  El nuevo estado operativo
                </h3>
                <p className="text-sm text-[#D4D9E1] leading-relaxed font-light">
                  {activeService.whatChanges}
                </p>
              </div>
            </div>

            {/* 4. Architecture / Visual Explanation */}
            <div className="p-8 bg-[#090D13] border border-[#1E2638] rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#24BDBA] font-semibold">
                <Layers className="w-4 h-4 text-[#24BDBA]" />
                <span>CONCEPTO DE ARQUITECTURA TÉCNICA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                Cómo opera en la práctica
              </h3>
              <p className="text-sm text-[#D4D9E1] leading-relaxed font-light max-w-3xl">
                {activeService.architectureConcept}
              </p>
            </div>

            {/* 5. Capabilities */}
            <div className="bg-[#10141D] border border-[#1E2638] rounded-xl p-8 flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#24BDBA] rounded-xs" />
                Capacidades Específicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeService.capabilities.map((cap, i) => (
                  <div key={i} className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex items-start gap-3 hover:border-[#24BDBA]/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#24BDBA] shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-[#F6F4EF] leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>

              {activeService.technologies && (
                <div className="pt-4 border-t border-[#181E29] flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-[#6E7A8A]">Stack con el que construimos:</span>
                  {activeService.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#131924] border border-[#1E2638] text-[11px] text-[#D4D9E1] rounded hover:border-[#24BDBA] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Example Use Cases */}
            <div className="flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                <span className="w-1.5 h-3 bg-[#FF6B45] rounded-xs" />
                Casos de Uso Concretos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeService.useCases.map((uc, i) => (
                  <div key={i} className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#24BDBA] font-bold">CASO 0{i + 1}</span>
                    <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#F6F4EF]">{uc.title}</h3>
                    <p className="text-xs text-[#8C96A5] leading-relaxed font-light">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. How ORQOMI Approaches the Project */}
            <div className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B45] font-semibold">
                <Workflow className="w-4 h-4 text-[#FF6B45]" />
                <span>CÓMO ABORDAMOS ESTE PROYECTO (MÉTODO O5)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                {activeService.approach.map((step, idx) => (
                  <div key={idx} className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex flex-col gap-2">
                    <span className="text-[#FF6B45] font-bold">PASO 0{idx + 1}</span>
                    <p className="text-[#D4D9E1] font-sans font-light leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Related Experience */}
            <div className="p-6 bg-[#131924] border-l-4 border-[#24BDBA] rounded-r-xl flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-[#24BDBA] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-mono text-[#24BDBA] font-bold uppercase">Experiencia previa relacionada:</span>
                <p className="text-[#D4D9E1] leading-relaxed font-light">
                  {activeService.relatedExperience}
                </p>
              </div>
            </div>

            {/* 9. FAQ Section */}
            {activeService.faqs && activeService.faqs.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#24BDBA]" />
                  Preguntas Frecuentes
                </h2>
                <div className="flex flex-col gap-3 font-mono text-xs">
                  {activeService.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="border border-[#1E2638] bg-[#10141D] rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-5 text-left flex items-center justify-between text-[#F6F4EF] hover:text-[#24BDBA] transition-colors cursor-pointer"
                        >
                          <span className="font-bold font-['Space_Grotesk'] text-sm sm:text-base">{faq.q}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-[#FF6B45]" /> : <ChevronDown className="w-4 h-4 text-[#6E7A8A]" />}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-[#8C96A5] font-sans font-light leading-relaxed border-t border-[#181E29]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 10. CTA Box */}
            <div className="p-8 sm:p-12 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                  ¿Quieres implementar {activeService.title} en tu organización?
                </h3>
                <p className="text-xs text-[#8C96A5] font-light">
                  Evaluamos viabilidad técnica, arquitectura de datos y roadmap de despliegue sin compromiso.
                </p>
              </div>
              <button
                onClick={() => onOpenContact(activeService.title)}
                className="px-8 py-4 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
              >
                <span>{activeService.ctaText || 'Iniciar conversación'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              ALL CAPABILITIES OVERVIEW VIEW (/que-hacemos)
             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
                  INGENIERÍA & ARQUITECTURA DE IA
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                Qué hacemos.
              </h1>
              <p className="text-base sm:text-lg text-[#D4D9E1] leading-relaxed font-light">
                Diseñamos e implementamos sistemas donde la inteligencia artificial se integra a los sistemas centrales de una organización, permitiendo que personas, datos, modelos, agentes y herramientas colaboren coordinadamente.
              </p>
            </div>

            {/* 6 Capabilities Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SERVICES_DATA.map((srv) => (
                <div
                  key={srv.id}
                  className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#FF6B45] font-bold">{srv.number} // CAPACIDAD</span>
                      {srv.subconcept && (
                        <span className="text-[10px] text-[#24BDBA] uppercase font-semibold">{srv.subconcept}</span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                        {srv.title}
                      </h2>
                      <p className="text-xs font-mono text-[#FF6B45] mt-1">
                        {srv.headline}
                      </p>
                    </div>
                    <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                      {srv.description}
                    </p>

                    <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                      {srv.capabilities.slice(0, 4).map((c, i) => (
                        <div key={i} className="flex items-center gap-2 text-[#D4D9E1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA]" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#181E29] flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={() => onNavigate(srv.route)}
                      className="text-[#24BDBA] hover:text-[#55DAD5] flex items-center gap-1.5 cursor-pointer transition-colors font-medium"
                    >
                      <span>Ver especificación completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenContact(srv.title)}
                      className="px-3.5 py-1.5 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#FF6B45] rounded-md cursor-pointer transition-colors"
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
