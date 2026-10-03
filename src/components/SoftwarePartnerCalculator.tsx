import React, { useState } from 'react';
import { Layers, ShieldCheck, Users2, Code2, ArrowRight } from 'lucide-react';

interface SoftwarePartnerCalculatorProps {
  onOpenContact: (need?: string) => void;
}

export const SoftwarePartnerCalculator: React.FC<SoftwarePartnerCalculatorProps> = ({ onOpenContact }) => {
  const [selectedModality, setSelectedModality] = useState<'white-label' | 'alongside' | 'direct' | 'component'>('white-label');
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    'Agentes & RAG',
    'Servidores MCP'
  ]);

  const capabilitiesList = [
    'Agentes & RAG',
    'Servidores MCP',
    'Automatización n8n & APIs',
    'Evaluación & Guardrails',
    'Datos Conversacionales',
    'Plataformas AI-Native',
    'Sistemas Multiagente',
    'Enterprise Integrations'
  ];

  const toggleCapability = (cap: string) => {
    setSelectedCapabilities(prev => 
      prev.includes(cap) ? prev.filter(c => c !== cap) : [...prev, cap]
    );
  };

  return (
    <div className="w-full bg-[#0E1219] border border-[#241447] rounded-xl p-6 sm:p-10 flex flex-col gap-8 font-mono">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
          <span className="text-xs uppercase tracking-wider text-[#FF6B45] font-bold">
            PROGRAMA DE ALIANZA // SOFTWARE FACTORIES & TECH TEAMS
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
          TU CLIENTE NECESITA IA. NO NECESITAS CREAR UN EQUIPO COMPLETO DESDE CERO.
        </h3>
        <p className="text-[#A4A9B0] text-sm max-w-3xl leading-relaxed font-sans font-light">
          Trabajamos con empresas de software y consultoras que requieren capacidades especializadas para proyectos que incorporan agentes, RAG, MCP, LLMs, automatización, sistemas multiagente, arquitectura de IA, evaluación e integraciones empresariales.
        </p>
      </div>

      {/* Interactive Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Modality Selector (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-3.5">
          <span className="text-xs uppercase text-[#24BDBA] font-bold">
            1. Formas de Participación
          </span>
          <div className="grid grid-cols-1 gap-2.5">
            <button
              onClick={() => setSelectedModality('white-label')}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                selectedModality === 'white-label'
                  ? 'bg-[#141B26] border-[#FF6B45] text-[#F6F4EF] shadow-md ring-1 ring-[#FF6B45]'
                  : 'bg-[#080B0F] border-[#181E29] text-[#8A919C] hover:text-[#F6F4EF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  Behind Your Brand (Marca Blanca)
                </span>
                <span className="text-[10px] text-[#FF6B45] bg-[#FF6B45]/10 px-2 py-0.5 rounded font-mono">Discreta</span>
              </div>
              <p className="text-xs text-[#5D6672] leading-relaxed font-sans">
                Operamos de forma 100% invisible para el cliente final como tu unidad especializada interna de IA.
              </p>
            </button>

            <button
              onClick={() => setSelectedModality('alongside')}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                selectedModality === 'alongside'
                  ? 'bg-[#141B26] border-[#FF6B45] text-[#F6F4EF] shadow-md ring-1 ring-[#FF6B45]'
                  : 'bg-[#080B0F] border-[#181E29] text-[#8A919C] hover:text-[#F6F4EF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  Alongside Your Team (Co-Desarrollo Visible)
                </span>
                <span className="text-[10px] text-[#24BDBA] bg-[#24BDBA]/10 px-2 py-0.5 rounded font-mono">AI Partner</span>
              </div>
              <p className="text-xs text-[#5D6672] leading-relaxed font-sans">
                Nos presentamos de manera conjunta ante el cliente como el partner tecnológico experto en orquestación de IA.
              </p>
            </button>

            <button
              onClick={() => setSelectedModality('component')}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                selectedModality === 'component'
                  ? 'bg-[#141B26] border-[#FF6B45] text-[#F6F4EF] shadow-md ring-1 ring-[#FF6B45]'
                  : 'bg-[#080B0F] border-[#181E29] text-[#8A919C] hover:text-[#F6F4EF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  Owning a Defined AI Component
                </span>
                <span className="text-[10px] text-[#55DAD5] bg-[#55DAD5]/10 px-2 py-0.5 rounded font-mono">Capa Dedicada</span>
              </div>
              <p className="text-xs text-[#5D6672] leading-relaxed font-sans">
                Tomamos la responsabilidad completa de diseñar y entregar un componente cerrado (servidor MCP, agente, motor RAG).
              </p>
            </button>

            <button
              onClick={() => setSelectedModality('direct')}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                selectedModality === 'direct'
                  ? 'bg-[#141B26] border-[#FF6B45] text-[#F6F4EF] shadow-md ring-1 ring-[#FF6B45]'
                  : 'bg-[#080B0F] border-[#181E29] text-[#8A919C] hover:text-[#F6F4EF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                  Directly with the End Customer (Referral / Co-Pitch)
                </span>
                <span className="text-[10px] text-[#A4A9B0] bg-[#121620] px-2 py-0.5 rounded font-mono">Referral</span>
              </div>
              <p className="text-xs text-[#5D6672] leading-relaxed font-sans">
                Lideramos la venta técnica y la entrega del proyecto de IA integrando tu software base como proveedor preferente.
              </p>
            </button>
          </div>
        </div>

        {/* Capabilities Multi-Selector (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-3.5">
          <span className="text-xs uppercase text-[#24BDBA] font-bold">
            2. Capacidades de IA Requeridas
          </span>
          <div className="grid grid-cols-2 gap-2">
            {capabilitiesList.map((cap) => {
              const active = selectedCapabilities.includes(cap);
              return (
                <button
                  key={cap}
                  onClick={() => toggleCapability(cap)}
                  className={`p-3 rounded-lg border text-left text-xs transition-colors cursor-pointer flex items-center justify-between ${
                    active
                      ? 'bg-[#141B26] border-[#24BDBA] text-[#F6F4EF]'
                      : 'bg-[#080B0F] border-[#181E29] text-[#5D6672] hover:text-[#A4A9B0]'
                  }`}
                >
                  <span className="truncate">{cap}</span>
                  <span className={`w-2 h-2 rounded-full ${active ? 'bg-[#FF6B45]' : 'bg-[#1E2533]'}`} />
                </button>
              );
            })}
          </div>

          {/* Synthesis Box */}
          <div className="p-5 bg-[#0A0D12] border border-[#241447] rounded-xl flex flex-col gap-3.5 mt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A4A9B0]">Esquema Seleccionado:</span>
              <span className="text-[#FF6B45] font-bold uppercase">
                {selectedModality === 'white-label' && 'Marca Blanca (Discreta)'}
                {selectedModality === 'alongside' && 'Co-Desarrollo Visible'}
                {selectedModality === 'component' && 'Componente Cerrado'}
                {selectedModality === 'direct' && 'Referral / Co-Pitch'}
              </span>
            </div>
            <div className="text-[11px] text-[#5D6672] leading-relaxed font-sans">
              Seleccionadas {selectedCapabilities.length} capacidades clave. Diseñamos acuerdos de colaboración técnica y NDA recíproco en menos de 24 horas hábiles.
            </div>
            <button
              onClick={() => onOpenContact(`Alianza Software Factory (${selectedModality})`)}
              className="w-full py-3 bg-[#FF6B45] hover:bg-[#C9472D] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#FF6B45]/20"
            >
              <span>CONVERSEMOS SOBRE UNA ALIANZA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
