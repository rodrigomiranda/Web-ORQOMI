import React, { useState } from 'react';
import { ArrowRight, BookOpen, Database, Layers, Sparkles, Cpu, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface LayerItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  accent: string;
}

const LAYERS: LayerItem[] = [
  {
    id: 'layer-6',
    number: '06',
    name: 'ORCHESTRATION',
    subtitle: 'Capa de Orquestación & Gobernanza',
    description: 'La columna vertebral que enlaza modelos con herramientas determinísticas, memoria, routing y supervisión humana.',
    items: ['Context Management', 'MCP Servers', 'Permissions', 'Episodic Memory', 'Dynamic Tools', 'Routing', 'Guardrails', 'Human Approval', 'Observability'],
    icon: <Compass className="w-5 h-5" />,
    accent: '#FF6B45' // Action signal
  },
  {
    id: 'layer-5',
    number: '05',
    name: 'AGENTS',
    subtitle: 'Agentes Especializados de Dominio',
    description: 'Entidades autónomas orientadas a cumplir objetivos específicos mediante razonamiento y uso coordinado de herramientas.',
    items: ['Research Agents', 'Analysis & Synthesis', 'Customer Support', 'Operations', 'Executive Reporting', 'Workflow Automation'],
    icon: <Cpu className="w-5 h-5" />,
    accent: '#24BDBA' // Intelligence
  },
  {
    id: 'layer-4',
    number: '04',
    name: 'INTELLIGENCE',
    subtitle: 'Motores Cognitivos & Modelos',
    description: 'Seleccionamos y combinamos los mejores modelos de frontera y locales según latencia, razonamiento y soberanía de datos.',
    items: ['Anthropic Claude', 'OpenAI GPT-4o', 'Google Gemini', 'Modelos Open Source (Llama/DeepSeek)', 'Embeddings Especializados'],
    icon: <Sparkles className="w-5 h-5" />,
    accent: '#55DAD5' // Active cyan
  },
  {
    id: 'layer-3',
    number: '03',
    name: 'SYSTEMS',
    subtitle: 'Plataformas Operacionales Existentes',
    description: 'Los sistemas centrales donde reside la operación del negocio y donde se inyectan las acciones generadas por la IA.',
    items: ['ERPs & CRMs', 'Moodle LMS', 'Custom Software & APIs', 'Web Platforms', 'Internal Business Tools', 'Webhooks'],
    icon: <Layers className="w-5 h-5" />,
    accent: '#E6E9EB' // System mist
  },
  {
    id: 'layer-2',
    number: '02',
    name: 'DATA',
    subtitle: 'Fuentes Estructuradas & Métricas',
    description: 'Almacenes de datos transaccionales y reporterías que alimentan el contexto en tiempo real sin duplicación.',
    items: ['PostgreSQL / SQL', 'Dashboards BI', 'APIs Transaccionales', 'Analytics', 'Time-series & IoT Data', 'Structured JSON-LD'],
    icon: <Database className="w-5 h-5" />,
    accent: '#24BDBA'
  },
  {
    id: 'layer-1',
    number: '01',
    name: 'KNOWLEDGE',
    subtitle: 'Conocimiento No Estructurado & Experiencia',
    description: 'El acervo intelectual y documental de la organización transformado en vectores y grafos semánticos.',
    items: ['Documentos & Manuales', 'Políticas Internas', 'Contenidos Curriculares', 'Expertise Tácito', 'Historial de Conversaciones'],
    icon: <BookOpen className="w-5 h-5" />,
    accent: '#55DAD5'
  }
];

interface OrchestrationLayerDiagramProps {
  onNavigate: (route: PageRoute) => void;
}

export const OrchestrationLayerDiagram: React.FC<OrchestrationLayerDiagramProps> = ({ onNavigate }) => {
  const [activeLayerId, setActiveLayerId] = useState<string>('layer-6');

  const selectedLayer = LAYERS.find(l => l.id === activeLayerId) || LAYERS[0];

  return (
    <div className="w-full flex flex-col gap-10 font-mono">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#24BDBA] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#24BDBA]" />
            <span>ORQOMI ORCHESTRATION LAYER // CAPA DE ORQUESTACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
            LA CAPA QUE CONECTA <span className="text-[#FF6B45]">INTELIGENCIA</span> CON OPERACIÓN.
          </h2>
          <p className="text-sm sm:text-base text-[#A4A9B0] font-sans font-light leading-relaxed mt-1">
            Tener IA no significa tener inteligencia conectada. En ORQOMI diseñamos la arquitectura viva que permite que el conocimiento, los datos, los sistemas y las personas colaboren como un solo sistema coordinado.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/soluciones/capa-inteligencia-mcp')}
          className="px-5 py-3 bg-[#131923] hover:bg-[#1A2230] text-[#F6F4EF] border border-[#241447] hover:border-[#24BDBA] rounded-lg text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto shrink-0"
        >
          <span>Explorar Capa de Inteligencia & MCP</span>
          <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
        </button>
      </div>

      {/* Interactive 6-Layer Architecture Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Layer Selector Stack (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          {LAYERS.map((layer) => {
            const isSelected = activeLayerId === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#121722] border-[#24BDBA] shadow-lg shadow-[#24BDBA]/10 ring-1 ring-[#24BDBA]'
                    : 'bg-[#0A0D12] border-[#181E29] hover:border-[#241447] hover:bg-[#0E121A]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#FF6B45]' : 'text-[#5D6672]'}`}>
                    {layer.number}
                  </span>
                  <div className={`p-2 rounded-lg border ${
                    isSelected ? 'bg-[#18202D] border-[#24BDBA] text-[#24BDBA]' : 'bg-[#0E121A] border-[#1E2533] text-[#5D6672]'
                  }`}>
                    {layer.icon}
                  </div>
                  <div>
                    <span className={`font-bold font-['Space_Grotesk'] text-sm sm:text-base block ${
                      isSelected ? 'text-[#F6F4EF]' : 'text-[#A4A9B0]'
                    }`}>
                      {layer.name}
                    </span>
                    <span className="text-[11px] text-[#5D6672] font-sans block line-clamp-1">
                      {layer.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] text-[#5D6672] uppercase">
                    {layer.items.length} componentes
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#FF6B45]' : 'bg-[#1E2533]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#0E1219] border border-[#241447] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2533]">
              <span className="text-xs uppercase tracking-wider text-[#24BDBA] font-bold">
                ESPECIFICACIÓN DE CAPA // {selectedLayer.number}
              </span>
              <span className="text-[10px] text-[#FF6B45] font-mono bg-[#FF6B45]/10 px-2 py-0.5 rounded border border-[#FF6B45]/30">
                ORQOMI ARCHITECTURE
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                {selectedLayer.name}
              </h3>
              <p className="text-xs text-[#24BDBA] font-medium mt-0.5">
                {selectedLayer.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A4A9B0] leading-relaxed font-sans font-light">
              {selectedLayer.description}
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[11px] text-[#5D6672] uppercase font-bold tracking-wider">
                Módulos y protocolos coordinados:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedLayer.items.map((item, idx) => (
                  <div key={idx} className="p-2 bg-[#080B0F] border border-[#1A202C] rounded text-[11px] text-[#E6E9EB] flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1E2533] flex items-center justify-between text-xs">
            <span className="text-[11px] text-[#5D6672]">
              Multiple Intelligences. One Coordinated System.
            </span>
            <button
              onClick={() => onNavigate('/soluciones/capa-inteligencia-mcp')}
              className="text-[#FF6B45] hover:underline flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>Ver detalles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
