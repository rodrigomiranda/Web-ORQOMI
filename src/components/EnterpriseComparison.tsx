import React, { useState } from 'react';
import { Check, X, Minus, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface EnterpriseComparisonProps {
  onOpenContact: (need?: string) => void;
}

export const EnterpriseComparison: React.FC<EnterpriseComparisonProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'delivery' | 'architecture' | 'ownership'>('all');

  const comparisonCriteria = [
    {
      category: 'delivery',
      criteria: 'Tiempo para MVP en Producción',
      orqomi: '4 a 8 Semanas (Validado con datos reales)',
      traditionalConsulting: '6 a 12 Meses (Enfocado en reportes y slides)',
      softwareFactory: '3 a 6 Meses (Prototipos frágiles o wrappers simples)',
      inHouse: '6 a 9 Meses (Compitiendo por contratar talento escaso de IA)',
      status: 'win'
    },
    {
      category: 'architecture',
      criteria: 'Dominio de Protocolo MCP & Agentes',
      orqomi: 'Especialización nativa en Model Context Protocol, Multi-Agent y RAG',
      traditionalConsulting: 'Comprensión conceptual teórica sin código ejecutable',
      softwareFactory: 'APIs básicas de OpenAI sin orquestación de herramientas',
      inHouse: 'Curva de aprendizaje costosa y riesgo de obsolescencia',
      status: 'win'
    },
    {
      category: 'ownership',
      criteria: 'Propiedad del Código e Infraestructura',
      orqomi: '100% de la empresa (En tus repositorios y nube, sin lock-in)',
      traditionalConsulting: 'Dependiente de frameworks propietarios o licencias caras',
      softwareFactory: 'Código mixto o módulos opacos difícilmente transferibles',
      inHouse: '100% de la empresa (pero con dependencia de personas clave)',
      status: 'win'
    },
    {
      category: 'architecture',
      criteria: 'Independencia de Modelos (Model-Agnostic)',
      orqomi: 'Total libertad: Anthropic, OpenAI, Gemini, DeepSeek o modelos locales',
      traditionalConsulting: 'Atados a acuerdos comerciales corporativos cerrados',
      softwareFactory: 'Habitualmente dependientes de un solo proveedor API',
      inHouse: 'Riesgo de acoplamiento rígido en las primeras iteraciones',
      status: 'win'
    },
    {
      category: 'delivery',
      criteria: 'Gobernanza & Zero-Training Guarantees',
      orqomi: 'Contratos BAA/NDA estrictos con guardrails determinísticos',
      traditionalConsulting: 'Políticas complejas sin implementación técnica granular',
      softwareFactory: 'Riesgo recurrente de filtración de datos en APIs públicas',
      inHouse: 'Requiere auditorías de seguridad constantes',
      status: 'win'
    },
    {
      category: 'ownership',
      criteria: 'Transparencia de Costos & Entrega Ágil',
      orqomi: 'Sprints fijos y entregables funcionales cada 2 semanas',
      traditionalConsulting: 'Honorarios millonarios con sobrecostos y plazos elásticos',
      softwareFactory: 'Facturación por horas con alcance frecuentemente desalineado',
      inHouse: 'Costos fijos recurrentes elevados (salarios de especialistas senior)',
      status: 'win'
    }
  ];

  const filteredCriteria = activeTab === 'all' 
    ? comparisonCriteria 
    : comparisonCriteria.filter(item => item.category === activeTab);

  return (
    <div className="w-full flex flex-col gap-10 font-mono">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
            <span className="text-xs uppercase tracking-wider text-[#FF6B45] font-bold">
              BENCHMARK DE VALOR EMPRESARIAL
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
            POR QUÉ TRABAJAR CON ORQOMI FRENTE A OTRAS ALTERNATIVAS.
          </h3>
          <p className="text-[#A4A9B0] text-sm leading-relaxed font-sans font-light">
            Las grandes organizaciones a menudo dudan entre contratar a una de las Big 4, una software factory generalista o intentar armar un equipo interno de IA desde cero. Esta es nuestra propuesta de valor comparativa:
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
            }`}
          >
            Todos los Criterios
          </button>
          <button
            onClick={() => setActiveTab('delivery')}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              activeTab === 'delivery'
                ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
            }`}
          >
            Velocidad de Entrega
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
            }`}
          >
            Arquitectura & MCP
          </button>
          <button
            onClick={() => setActiveTab('ownership')}
            className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              activeTab === 'ownership'
                ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
            }`}
          >
            Propiedad & Costos
          </button>
        </div>
      </div>

      {/* Comparison Table / Matrix */}
      <div className="w-full overflow-x-auto rounded-xl border border-[#1E2638] bg-[#0E131A] shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-[#1E2638] bg-[#10151E] text-xs uppercase font-mono">
              <th className="py-4 px-5 text-[#8C96A5] font-semibold w-1/4">
                Criterio Clave
              </th>
              <th className="py-4 px-5 text-[#24BDBA] bg-[#241447]/40 border-x border-[#241447] font-bold w-1/4">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B45]" />
                  <span>ORQOMI (Especialistas)</span>
                </div>
              </th>
              <th className="py-4 px-5 text-[#8C96A5] font-semibold w-1/6">
                Consultoras Big 4
              </th>
              <th className="py-4 px-5 text-[#8C96A5] font-semibold w-1/6">
                Software Factory Convencional
              </th>
              <th className="py-4 px-5 text-[#8C96A5] font-semibold w-1/6">
                Crear Equipo In-House
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#181E29] text-xs">
            {filteredCriteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#131924]/60 transition-colors">
                <td className="py-4 px-5 font-semibold text-[#F6F4EF] font-sans">
                  {item.criteria}
                </td>
                
                {/* ORQOMI Column */}
                <td className="py-4 px-5 bg-[#241447]/20 border-x border-[#241447] text-[#24BDBA] font-semibold font-sans">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FF6B45] shrink-0 mt-0.5" />
                    <span>{item.orqomi}</span>
                  </div>
                </td>

                {/* Big 4 Column */}
                <td className="py-4 px-5 text-[#8C96A5] font-sans font-light">
                  <div className="flex items-start gap-1.5">
                    <Minus className="w-3.5 h-3.5 text-[#6E7A8A] shrink-0 mt-0.5" />
                    <span>{item.traditionalConsulting}</span>
                  </div>
                </td>

                {/* Software Factory Column */}
                <td className="py-4 px-5 text-[#8C96A5] font-sans font-light">
                  <div className="flex items-start gap-1.5">
                    <Minus className="w-3.5 h-3.5 text-[#6E7A8A] shrink-0 mt-0.5" />
                    <span>{item.softwareFactory}</span>
                  </div>
                </td>

                {/* In-House Column */}
                <td className="py-4 px-5 text-[#8C96A5] font-sans font-light">
                  <div className="flex items-start gap-1.5">
                    <Minus className="w-3.5 h-3.5 text-[#6E7A8A] shrink-0 mt-0.5" />
                    <span>{item.inHouse}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action Bar */}
      <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Zap className="w-5 h-5 text-[#FF6B45] shrink-0" />
          <span className="text-xs text-[#D4D9E1] font-sans">
            ¿Quieres evaluar la viabilidad técnica y los costos de tu proyecto con nuestro equipo de arquitectura?
          </span>
        </div>
        <button
          onClick={() => onOpenContact('Evaluación Comparativa de Arquitectura')}
          className="px-5 py-2.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer shrink-0"
        >
          <span>Agendar Sesión Técnica</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
