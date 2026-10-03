import React, { useState } from 'react';
import { WORK_PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2, Shield, Eye, FileSpreadsheet, GitMerge, Activity, TrendingUp } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [
    <Eye className="w-4 h-4" />,
    <FileSpreadsheet className="w-4 h-4" />,
    <GitMerge className="w-4 h-4" />,
    <Activity className="w-4 h-4" />,
    <TrendingUp className="w-4 h-4" />
  ];

  return (
    <div className="w-full flex flex-col gap-10 font-mono">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-[#24BDBA] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#24BDBA]" />
          <span>PROPRIETARY METHODOLOGY // O5</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
          O5 / THE ORQOMI METHOD
        </h3>
        <p className="text-[#A4A9B0] text-sm sm:text-base max-w-2xl leading-relaxed font-sans font-light">
          No partimos por el modelo. Partimos por el problema real, sus restricciones y la arquitectura de datos antes de escribir una sola línea de integración.
        </p>
      </div>

      {/* 5 Process Tabs / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {WORK_PROCESS_STEPS.map((step, idx) => {
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 sm:p-5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                isSelected 
                  ? 'bg-[#141B26] border-[#24BDBA] shadow-lg shadow-[#24BDBA]/10 ring-1 ring-[#24BDBA]' 
                  : 'bg-[#0A0D12] border-[#181E29] hover:border-[#241447] hover:bg-[#0E121A]'
              }`}
            >
              <div className="flex items-center justify-between w-full font-mono text-xs">
                <span className={isSelected ? 'text-[#FF6B45] font-bold' : 'text-[#5D6672]'}>
                  {step.step} //
                </span>
                <span className={`p-1.5 rounded ${isSelected ? 'bg-[#24BDBA]/20 text-[#24BDBA]' : 'bg-[#121620] text-[#5D6672]'}`}>
                  {icons[idx]}
                </span>
              </div>
              <div className="flex flex-col">
                <span className={`font-['Space_Grotesk'] text-base font-bold uppercase ${isSelected ? 'text-[#F6F4EF]' : 'text-[#A4A9B0]'}`}>
                  {step.name}
                </span>
                <span className="text-[11px] text-[#5D6672] line-clamp-1 mt-0.5 font-sans">
                  {step.summary}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Step Detail View */}
      <div className="bg-[#0E1219] border border-[#241447] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#FF6B45]/15 border border-[#FF6B45]/30 text-[#FF6B45] text-[10px] rounded font-mono font-bold">
              ETAPA {WORK_PROCESS_STEPS[activeStepIndex].step}
            </span>
            <span className="text-xs uppercase font-mono text-[#24BDBA] font-bold">
              {WORK_PROCESS_STEPS[activeStepIndex].name}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
            {WORK_PROCESS_STEPS[activeStepIndex].summary}
          </h4>
          <p className="text-xs sm:text-sm text-[#A4A9B0] font-sans font-light leading-relaxed mt-1">
            {WORK_PROCESS_STEPS[activeStepIndex].detail}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={() => setActiveStepIndex((prev) => (prev + 1) % WORK_PROCESS_STEPS.length)}
            className="px-5 py-2.5 bg-[#141B26] hover:bg-[#1E2736] text-[#F6F4EF] border border-[#241447] rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Siguiente etapa</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
          </button>
        </div>
      </div>

      {/* Closing Axiom */}
      <div className="p-4 bg-[#0A0D12] border border-[#1A202C] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="text-xs font-bold text-[#F6F4EF] font-['Space_Grotesk'] uppercase tracking-wider">
          NO PARTIMOS POR EL MODELO. PARTIMOS POR EL PROBLEMA.
        </span>
        <span className="text-[11px] text-[#5D6672] font-mono">
          Arquitectura desacoplada, auditable y gobernable.
        </span>
      </div>
    </div>
  );
};
