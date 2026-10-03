import React from 'react';
import { PageRoute } from '../types';
import { CASE_STUDIES_DATA, FOUNDER_CREDIBILITY_DISCLAIMER } from '../data/content';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface ExperiencePageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  currentRoute,
  onNavigate,
  onOpenContact
}) => {
  const activeCase = CASE_STUDIES_DATA.find(c => c.route === currentRoute);

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/experiencia')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Experiencia
          </button>
          {activeCase && (
            <>
              <span>/</span>
              <span className="text-[#FF6B45] font-semibold">{activeCase.title}</span>
            </>
          )}
        </div>

        {activeCase ? (
          /* Single Case Study Deep Dive */
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-[#FF6B45]/15 border border-[#FF6B45]/40 text-[#FF6B45] font-mono text-xs rounded font-semibold">
                  {activeCase.category}
                </span>
                <span className="font-mono text-xs text-[#24BDBA] font-semibold">
                  // CASO DE ESTUDIO TÉCNICO
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
                {activeCase.title}
              </h1>
              {activeCase.subtitle && (
                <p className="text-lg text-[#FF6B45] font-mono font-light">
                  {activeCase.subtitle}
                </p>
              )}
              <p className="text-base text-[#D4D9E1] max-w-3xl leading-relaxed mt-2 font-light">
                {activeCase.summary}
              </p>

              {/* Quantified Impact KPIs Bar */}
              {activeCase.impactKpis && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  {activeCase.impactKpis.map((kpi, idx) => (
                    <div key={idx} className="p-4 bg-[#10141D] border border-[#1E2638] rounded-xl flex items-center gap-3 font-mono text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B45] shrink-0" />
                      <span className="text-[#F6F4EF] font-semibold">{kpi}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Architecture Flow Diagram */}
            <div className="bg-[#10141D] border border-[#1E2638] rounded-xl p-6 sm:p-8 flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                TOPOLOGÍA DE FLUJO DEL SISTEMA
              </span>

              {activeCase.stepFlow && (
                <div className="p-6 bg-[#090D13] border border-[#181E29] rounded-xl flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  {activeCase.stepFlow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-2 px-3 py-2 bg-[#131924] border border-[#1E2638] rounded-lg">
                        <span className="text-[10px] text-[#24BDBA] font-semibold">0{idx + 1}</span>
                        <span className={idx === activeCase.stepFlow!.length - 1 ? 'text-[#FF6B45] font-bold' : 'text-[#F6F4EF]'}>
                          {step}
                        </span>
                      </div>
                      {idx < activeCase.stepFlow!.length - 1 && (
                        <span className="text-[#FF6B45] font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {activeCase.conceptualFlow && (
                <div className="p-6 bg-[#090D13] border border-[#181E29] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2 text-[#D4D9E1]">
                    {activeCase.conceptualFlow.from.map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-lg text-[#F6F4EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#FF6B45] font-bold text-base">→</span>
                  <div className="px-4 py-2 bg-[#FF6B45]/15 border border-[#FF6B45] rounded-lg text-[#FF6B45] font-semibold">
                    {activeCase.conceptualFlow.to}
                  </div>
                </div>
              )}

              <div className="p-4 bg-[#131924] border-l-4 border-[#24BDBA] rounded-r-lg text-sm text-[#F6F4EF] leading-relaxed">
                <strong className="text-[#24BDBA]">Conclusión técnica:</strong> {activeCase.takeaway}
              </div>
            </div>

            {/* Credibility Box */}
            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex items-start gap-3 text-xs text-[#8C96A5]">
              <ShieldCheck className="w-5 h-5 text-[#24BDBA] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F6F4EF] font-medium">Transparencia institucional:</strong> {activeCase.disclaimer}
              </div>
            </div>

            {/* Action */}
            <div className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                  ¿Tienes un desafío similar a {activeCase.title}?
                </span>
                <span className="text-xs text-[#8C96A5]">
                  Diseñamos soluciones análogas adaptadas a tus datos y reglas de negocio.
                </span>
              </div>
              <button
                onClick={() => onOpenContact(`Caso similar: ${activeCase.title}`)}
                className="px-6 py-3 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
              >
                <span>Conversar sobre este caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* General Experience Overview */
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
                  EXPERIENCIA QUE DA ORIGEN A ORQOMI
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                ORQOMI es nueva. La experiencia detrás de ella no.
              </h1>
              <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
                ORQOMI nace después de años diseñando, desarrollando e integrando plataformas digitales, automatizaciones, sistemas de reportería y soluciones tecnológicas para organizaciones de distintas industrias. La evolución hacia agentes, asistentes y sistemas inteligentes es la continuación natural de ese recorrido.
              </p>
            </div>

            {/* Credibility Notice Banner */}
            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex items-start gap-3 text-xs text-[#8C96A5]">
              <ShieldCheck className="w-5 h-5 text-[#24BDBA] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-[#F6F4EF]">Rigor y honestidad intelectual:</strong> Todos los proyectos aquí expuestos constituyen la experiencia comprobada del equipo fundador de ORQOMI y de sus partners tecnológicos estratégicos, conformando el acervo de ingeniería sobre el cual se funda la compañía.
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CASE_STUDIES_DATA.map((cs) => (
                <div
                  key={cs.id}
                  className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-mono text-[#24BDBA] uppercase tracking-wider font-semibold">
                      {cs.category}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                        {cs.title}
                      </h2>
                      {cs.subtitle && (
                        <p className="text-xs font-mono text-[#FF6B45] mt-0.5">
                          {cs.subtitle}
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-[#8C96A5] leading-relaxed">
                      {cs.summary}
                    </p>

                    {/* Impact KPI Tag on Card */}
                    {cs.impactKpis && cs.impactKpis.length > 0 && (
                      <div className="pt-2 flex flex-col gap-1 font-mono text-[11px] text-[#24BDBA]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                          <span className="text-[#D4D9E1] font-medium">{cs.impactKpis[0]}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#181E29] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(cs.route)}
                      className="text-xs font-mono text-[#F6F4EF] group-hover:text-[#24BDBA] flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <span>Ver caso completo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
                    </button>
                    <span className="text-[10px] font-mono text-[#6E7A8A]">
                      FUNDACIÓN TÉCNICA
                    </span>
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
