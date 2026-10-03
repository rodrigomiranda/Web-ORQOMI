import React, { useState } from 'react';
import { PageRoute } from '../types';
import { LABS_PROJECTS } from '../data/content';
import { ArrowRight, Filter } from 'lucide-react';

interface LabsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const LabsPage: React.FC<LabsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  const filteredProjects = filterStatus === 'ALL'
    ? LABS_PROJECTS
    : LABS_PROJECTS.filter(p => p.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PRODUCTION': return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
      case 'TESTING': return 'text-[#FF6B45] border-[#FF6B45]/40 bg-[#FF6B45]/10';
      case 'PROTOTYPE': return 'text-[#24BDBA] border-[#24BDBA]/40 bg-[#24BDBA]/10';
      case 'EXPLORING': return 'text-[#8C96A5] border-[#1E2638] bg-[#131924]';
      default: return 'text-[#8C96A5] border-[#1E2638]';
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
          <span className="text-[#FF6B45] font-semibold">ORQOMI Labs</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#24BDBA] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
              INVESTIGACIÓN APLICADA & FRONTERA
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
            Exploramos lo que todavía no es estándar.
          </h1>
          <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
            La velocidad con que evoluciona la inteligencia artificial exige experimentar continuamente. ORQOMI Labs es nuestro espacio para investigar nuevas formas de trabajo multiagente, MCP, computer use, arquitecturas de memoria, interfaces generativas y evaluación de modelos.
          </p>
          <div className="p-3.5 bg-[#10141D] border border-[#1E2638] rounded-xl text-xs text-[#8C96A5] font-mono">
            Directriz de laboratorio: Rigor experimental y honestidad técnica. Sin claims vacíos de marketing.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#181E29]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C96A5]">
            <Filter className="w-3.5 h-3.5 text-[#24BDBA]" />
            <span>ESTADO EXPERIMENTAL:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {['ALL', 'EXPLORING', 'PROTOTYPE', 'TESTING', 'PRODUCTION'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer border ${
                  filterStatus === st
                    ? 'bg-[#161D2B] border-[#24BDBA] text-[#24BDBA] font-medium'
                    : 'bg-[#10141D] border-[#1E2638] text-[#6E7A8A] hover:text-[#D4D9E1]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 sm:p-7 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#6E7A8A]">{p.code}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-mono border rounded ${getStatusColor(p.status)}`}>
                    {p.status}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#24BDBA] uppercase tracking-wider font-semibold">
                    {p.area}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F6F4EF] font-['Space_Grotesk'] mt-0.5 group-hover:text-[#24BDBA] transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8C96A5] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#181E29] flex flex-col gap-2">
                <span className="text-[10px] font-mono text-[#6E7A8A] uppercase">
                  Parámetros de Ingeniería:
                </span>
                <span className="text-xs font-mono text-[#D4D9E1] leading-relaxed bg-[#090D13] p-2.5 rounded-lg border border-[#181E29]">
                  {p.technicalSpecs}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Labs CTA */}
        <div className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
              ¿Quieres co-pilotar o probar un experimento en tu infraestructura?
            </span>
            <span className="text-xs text-[#8C96A5]">
              Colaboramos con equipos de I+D para validar hipótesis avanzadas de IA.
            </span>
          </div>
          <button
            onClick={() => onOpenContact('ORQOMI Labs - Colaboración R&D')}
            className="px-6 py-3 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
          >
            <span>Proponer prueba piloto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
