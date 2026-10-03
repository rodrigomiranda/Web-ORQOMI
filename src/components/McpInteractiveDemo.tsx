import React, { useState } from 'react';
import { Terminal, Sparkles, BarChart3, CornerDownLeft, ArrowRight, AlertTriangle, FileText } from 'lucide-react';

interface SimulatedConversation {
  id: string;
  query: string;
  mcpToolCall: string;
  response: string;
  datapoints?: { label: string; value: string; trend?: string }[];
  highlight?: string;
}

const PRESET_QUERIES: SimulatedConversation[] = [
  {
    id: 'q1',
    query: '¿Qué proyectos aumentaron más la generación de residuos durante los últimos tres meses?',
    mcpToolCall: 'mcp::query_waste_metrics(range="90d", order_by="variance_pct_desc", limit=2)',
    response: 'Analizando registros de faena en tiempo real: Se detectan 2 proyectos con alzas estadísticas significativas en residuos de construcción (RCD). Proyecto Costanera Norte (+34.2%) y Edificio Vespucio Sur (+28.1%). La causa principal reportada fue el inicio simultáneo de la fase de demolición de fundaciones.',
    datapoints: [
      { label: 'Costanera Norte', value: '412 ton RCD', trend: '+34.2%' },
      { label: 'Vespucio Sur', value: '286 ton RCD', trend: '+28.1%' },
      { label: 'Promedio Portafolio', value: '142 ton RCD', trend: '+2.1%' }
    ]
  },
  {
    id: 'q2',
    query: 'Compáralos con el consumo de agua.',
    mcpToolCall: 'mcp::cross_metric_correlation(entities=["costanera_norte", "vespucio_sur"], metric="water_consumption_m3")',
    response: 'Cruce completado entre la base ambiental y medidores IoT: Costanera Norte registró 1.420 m³ de consumo hídrico (+18% sobre cuota proyectada), mientras que Vespucio Sur se mantuvo nominal en 890 m³ (-1.4%).',
    datapoints: [
      { label: 'Costanera Norte (Agua)', value: '1.420 m³', trend: '+18.0%' },
      { label: 'Vespucio Sur (Agua)', value: '890 m³', trend: '-1.4%' }
    ]
  },
  {
    id: 'q3',
    query: '¿Hay algún comportamiento anómalo?',
    mcpToolCall: 'mcp::anomaly_detection(factors=["demolition_stage", "dust_suppression", "water_volume"])',
    response: 'Sí, anomalía explicada con correlación positiva alta (r = 0.84) en Costanera Norte: el 78% del agua adicional se utilizó en cañones aspersores para mitigación de polvo por normativa de calidad del aire durante la demolición. En Vespucio Sur la demolición utilizó corte mecánico en seco, sin impacto en la red de agua.',
    highlight: 'ANOMALÍA AUDITADA: Alza hídrica vinculada a cumplimiento normativo de material particulado.',
    datapoints: [
      { label: 'Correlación Polvo / Agua', value: 'r = 0.84', trend: 'Directa' },
      { label: 'Mitigación Normativa', value: '78% del Excedente', trend: 'Auditada' }
    ]
  },
  {
    id: 'q4',
    query: 'Genera un resumen para la gerencia.',
    mcpToolCall: 'mcp::generate_executive_brief(audience="c_level", format="structured_markdown")',
    response: 'Síntesis para Gerencia de Operaciones: El alza hídrica en Costanera Norte fue un costo de cumplimiento ambiental programado por mitigación de material particulado. Se recomienda instalar recirculadores móviles en futuras demoliciones para recuperar hasta un 35% del caudal consumido.',
    datapoints: [
      { label: 'Impacto Presupuestario', value: '$2.140.000 CLP', trend: 'Asumible' },
      { label: 'Potencial de Ahorro', value: '35% con recirculador', trend: 'Siguiente Fase' }
    ]
  }
];

export const McpInteractiveDemo: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<SimulatedConversation>(PRESET_QUERIES[0]);
  const [history, setHistory] = useState<SimulatedConversation[]>([PRESET_QUERIES[0]]);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectQuery = (preset: SimulatedConversation) => {
    setIsProcessing(true);
    setTimeout(() => {
      setSelectedConversation(preset);
      if (!history.find(h => h.id === preset.id)) {
        setHistory(prev => [...prev, preset]);
      }
      setIsProcessing(false);
    }, 320);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsProcessing(true);
    const queryText = customInput;
    setCustomInput('');

    setTimeout(() => {
      const generated: SimulatedConversation = {
        id: 'custom-' + Date.now(),
        query: queryText,
        mcpToolCall: `mcp::semantic_sql_query(query="${queryText.slice(0, 30)}...", sandbox="postgres_faenas")`,
        response: `Consulta procesada a través de la Capa de Orquestación MCP: Se cruzaron los indicadores de faenas seleccionadas con la tabla histórica. Los resultados concuerdan con la tendencia estacional reportada para la Región Metropolitana.`,
        datapoints: [
          { label: 'Estado Consulta', value: '200 OK', trend: 'Verificado' },
          { label: 'Latencia MCP', value: '9.4 ms', trend: 'Óptima' }
        ]
      };
      setSelectedConversation(generated);
      setHistory(prev => [...prev, generated]);
      setIsProcessing(false);
    }, 550);
  };

  return (
    <div className="w-full flex flex-col gap-8 font-mono">
      {/* Strategic Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#24BDBA]" />
          <span className="text-xs uppercase tracking-wider text-[#24BDBA] font-semibold">
            CONVERSATIONAL DATA // SIGNATURE DEMONSTRATION
          </span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.08]">
          DE MIRAR REPORTES A <span className="text-[#FF6B45]">CONVERSAR</span> CON TUS DATOS.
        </h3>
        <p className="text-[#A4A9B0] text-sm sm:text-base max-w-3xl leading-relaxed font-sans font-light">
          Un dashboard responde las preguntas que imaginamos cuando fue diseñado. Pero las organizaciones cambian. Aparecen nuevas preguntas. Nuevos cruces. Nuevas hipótesis. Una capa de inteligencia permite explorar información que nunca necesitó una pantalla específica.
        </p>
      </div>

      {/* Side-by-Side Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Traditional Environmental Dashboard (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0C1017] border border-[#1E2533] rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1A202C]">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#5D6672]" />
                <span className="text-xs uppercase tracking-wider text-[#A4A9B0] font-semibold">
                  Dashboard Ambiental Tradicional
                </span>
              </div>
              <span className="text-[10px] text-[#5D6672] bg-[#121620] px-2 py-0.5 rounded border border-[#1E2533]">
                Vista Fija
              </span>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#5D6672]">
              <span className="px-2 py-0.5 bg-[#121722] border border-[#1E2636] rounded">Proyecto: Todos</span>
              <span className="px-2 py-0.5 bg-[#121722] border border-[#1E2636] rounded">Región: RM</span>
              <span className="px-2 py-0.5 bg-[#121722] border border-[#1E2636] rounded">Período: Q3</span>
            </div>

            {/* Static Widgets Mockup */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#0A0D12] border border-[#181E29] rounded-lg">
                <span className="text-[10px] text-[#5D6672] uppercase">Residuos Obra</span>
                <div className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] mt-0.5">4.210 ton</div>
                <span className="text-[10px] text-[#5D6672]">Total acumulado</span>
              </div>
              <div className="p-3 bg-[#0A0D12] border border-[#181E29] rounded-lg">
                <span className="text-[10px] text-[#5D6672] uppercase">Consumo Agua</span>
                <div className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] mt-0.5">12.450 m³</div>
                <span className="text-[10px] text-[#5D6672]">Red potable + aljibe</span>
              </div>
              <div className="p-3 bg-[#0A0D12] border border-[#181E29] rounded-lg">
                <span className="text-[10px] text-[#5D6672] uppercase">Emisiones CO₂ eq</span>
                <div className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] mt-0.5">1.840 ton</div>
                <span className="text-[10px] text-[#5D6672]">Consolidado anual</span>
              </div>
              <div className="p-3 bg-[#0A0D12] border border-[#181E29] rounded-lg">
                <span className="text-[10px] text-[#5D6672] uppercase">Costo Tratamiento</span>
                <div className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] mt-0.5">$38.4M CLP</div>
                <span className="text-[10px] text-[#5D6672]">Acumulado faenas</span>
              </div>
            </div>

            {/* Static Graphic Representation */}
            <div className="p-3.5 bg-[#0A0D12] border border-[#181E29] rounded-lg flex flex-col gap-2">
              <div className="flex justify-between items-center text-[11px] text-[#5D6672]">
                <span>Tasa de Valorización de Residuos</span>
                <span className="text-[#F6F4EF] font-bold">32.4%</span>
              </div>
              <div className="w-full bg-[#161C26] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#5D6672] h-full w-[32.4%]" />
              </div>
              <p className="text-[10px] text-[#5D6672] italic pt-1 leading-relaxed">
                ¿Qué faena causó la baja en marzo? El gráfico no lo explica. Requiere exportar a Excel o solicitar un nuevo desarrollo de software.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#1A202C] text-[11px] text-[#5D6672] leading-relaxed">
            <strong className="text-[#A4A9B0]">Limitación estructural:</strong> responde únicamente las preguntas que imaginamos al momento de diseñar la pantalla.
          </div>
        </div>

        {/* Right Side: ORQOMI Conversational Layer (MCP) (7 Cols) */}
        <div className="lg:col-span-7 bg-[#10141D] border border-[#241447] rounded-xl p-6 flex flex-col justify-between shadow-2xl relative">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1E2533]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#24BDBA]" />
                <span className="text-xs uppercase tracking-wider text-[#F6F4EF] font-bold font-['Space_Grotesk']">
                  Capa de Inteligencia ORQOMI (MCP)
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#24BDBA] bg-[#24BDBA]/10 px-2 py-0.5 rounded border border-[#24BDBA]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA] animate-pulse" />
                <span>MCP SERVER CONNECTED</span>
              </div>
            </div>

            {/* Quick Prompt Selector Buttons */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] text-[#5D6672] uppercase tracking-wider">
                Preguntas de exploración en secuencia:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRESET_QUERIES.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectQuery(item)}
                    className={`text-left p-2.5 rounded-lg text-xs transition-all border cursor-pointer ${
                      selectedConversation.id === item.id
                        ? 'bg-[#18202D] border-[#FF6B45] text-[#F6F4EF] shadow-md'
                        : 'bg-[#0A0D12] border-[#1A202C] text-[#8A919C] hover:text-[#F6F4EF] hover:bg-[#121620]'
                    }`}
                  >
                    <span className="text-[#FF6B45] font-bold mr-1.5">0{idx + 1}.</span>
                    <span className="line-clamp-1">{item.query}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Chat / MCP Response Box */}
            <div className="bg-[#07090D] border border-[#1A202C] rounded-lg p-4 flex flex-col gap-3 min-h-[200px]">
              {/* User Question */}
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded bg-[#1A2230] text-[#A4A9B0] text-[10px] flex items-center justify-center shrink-0 font-bold">
                  TÚ
                </div>
                <div className="text-xs text-[#F6F4EF] pt-0.5 font-medium">
                  «{selectedConversation.query}»
                </div>
              </div>

              {/* MCP Tool Call Trace */}
              <div className="px-2.5 py-1.5 bg-[#0F141D] border-l-2 border-[#24BDBA] text-[11px] font-mono text-[#5D6672] flex items-center gap-2 overflow-x-auto rounded-r">
                <Terminal className="w-3.5 h-3.5 text-[#24BDBA] shrink-0" />
                <span className="text-[#24BDBA] shrink-0 font-bold">MCP_EXEC:</span>
                <span className="text-[#A4A9B0] truncate">{selectedConversation.mcpToolCall}</span>
              </div>

              {/* Agent Response */}
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded bg-[#FF6B45] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  IA
                </div>
                <div className="flex flex-col gap-2 pt-0.5">
                  <p className="text-xs text-[#E6E9EB] leading-relaxed font-sans">
                    {isProcessing ? 'Ejecutando inferencia a través de la Capa de Orquestación MCP...' : selectedConversation.response}
                  </p>

                  {/* Anomaly Callout if present */}
                  {selectedConversation.highlight && !isProcessing && (
                    <div className="p-2.5 bg-[#FF6B45]/10 border-l-2 border-[#FF6B45] rounded-r text-[11px] text-[#FF6B45] flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{selectedConversation.highlight}</span>
                    </div>
                  )}

                  {/* Dynamic Datapoints from MCP */}
                  {selectedConversation.datapoints && !isProcessing && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                      {selectedConversation.datapoints.map((dp, i) => (
                        <div key={i} className="p-2 bg-[#0E131A] border border-[#1A2230] rounded-md">
                          <span className="text-[10px] text-[#5D6672] block truncate">{dp.label}</span>
                          <span className="text-xs font-bold text-[#F6F4EF] font-['Space_Grotesk']">{dp.value}</span>
                          {dp.trend && (
                            <span className="text-[10px] text-[#24BDBA] block font-mono mt-0.5">{dp.trend}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Punchline */}
          <div className="mt-4 pt-3 border-t border-[#1E2533] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#24BDBA] font-['Space_Grotesk'] uppercase tracking-wider text-xs">
              NO NECESITAS DISEÑAR UNA NUEVA PANTALLA PARA CADA PREGUNTA.
            </span>
            <form onSubmit={handleCustomSubmit} className="w-full sm:w-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Pregunta a los datos..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="bg-[#07090D] border border-[#1E2533] rounded px-3 py-1.5 text-xs text-[#F6F4EF] placeholder-[#5D6672] focus:outline-none focus:border-[#24BDBA]"
              />
              <button
                type="submit"
                disabled={isProcessing}
                className="px-3 py-1.5 bg-[#FF6B45] hover:bg-[#C9472D] text-white text-xs font-mono font-bold rounded flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <span>Consultar</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
