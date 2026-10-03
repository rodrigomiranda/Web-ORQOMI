import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw,
  Terminal,
  FileCode2,
  Clock,
  Zap
} from 'lucide-react';

interface AiReadinessDiagnosticProps {
  onOpenContact: (need?: string) => void;
}

export const AiReadinessDiagnostic: React.FC<AiReadinessDiagnosticProps> = ({ onOpenContact }) => {
  const [stage, setStage] = useState<'scaling' | 'enterprise' | 'startup' | 'modernizing'>('enterprise');
  const [priority, setPriority] = useState<'mcp' | 'agents' | 'rag' | 'product'>('mcp');
  const [infra, setInfra] = useState<'cloud' | 'hybrid' | 'on-premise'>('cloud');
  const [activeTab, setActiveTab] = useState<'blueprint' | 'specs' | 'timeline'>('blueprint');

  // Diagnostic recommendation logic
  const blueprints: Record<string, {
    code: string;
    title: string;
    headline: string;
    description: string;
    coreStack: string[];
    orchestrationPattern: string;
    mvpWeeks: string;
    keyDeliverables: string[];
    riskMitigations: string[];
  }> = {
    mcp: {
      code: 'ARCH-MCP-V2',
      title: 'Enterprise MCP Layer & Context Gateway',
      headline: 'Orquestación de Contexto sobre ERP, CRM y Bases SQL',
      description: 'Arquitectura desacoplada basada en Model Context Protocol para exponer datos y acciones de negocio a modelos de frontera sin abrir puertos públicos ni escribir adaptadores frágiles.',
      coreStack: ['Model Context Protocol (MCP)', 'TypeScript Server', 'PostgreSQL / SQL Server', 'FastAPI Tool-Gateway', 'Claude 3.5 Sonnet / GPT-4o'],
      orchestrationPattern: 'Servidor MCP dedicado con autenticación mTLS, esquemas tipados de tools y auditoría de lecturas/escrituras en tiempo real.',
      mvpWeeks: '4 a 6 semanas',
      keyDeliverables: [
        'Servidor MCP desplegado en VPC del cliente',
        '3 a 5 herramientas operacionales conectadas (lectura y webhook)',
        'Capa de autorización RBAC y enmascaramiento de PII',
        'Cliente de testing integrado en Cursor / Asistente web'
      ],
      riskMitigations: [
        'Aislamiento de credenciales en Vault corporativo',
        'Guardrails de validación antes de mutar base de datos',
        'Presupuesto de tokens por usuario/departamento'
      ]
    },
    agents: {
      code: 'ARCH-AGENTS-O5',
      title: 'Deterministic Multi-Agent Workflow Engine',
      headline: 'Agentes Especializados con Compuertas de Aprobación Humana',
      description: 'Sistema coordinado donde múltiples agentes asumen roles diferenciados (Auditor, Redactor, Ejecutor SQL) gobernados por un supervisor determinístico que solicita validación humana para acciones críticas.',
      coreStack: ['LangGraph / StateGraph', 'Python', 'FastAPI', 'n8n Enterprise', 'Anthropic Claude / Gemini 1.5 Pro', 'Redis State Cache'],
      orchestrationPattern: 'Máquina de estados finitos con checkpoints persistentes y compuertas Human-in-the-Loop para firmas y aprobaciones financieras.',
      mvpWeeks: '5 a 7 semanas',
      keyDeliverables: [
        'Pipeline multi-agente con 3 roles especializados',
        'Panel de supervisión humana con approvals en 1 clic',
        'Integración con Slack / Teams / Correo para alertas',
        'Logs estructurados de razonamiento y costo por ejecución'
      ],
      riskMitigations: [
        'Límite de recursión y bucles infinitos en ejecución',
        'Revisión humana obligatoria para transacciones de impacto',
        'Fallback a operador humano si la confianza es < 92%'
      ]
    },
    rag: {
      code: 'ARCH-RAG-LIVE',
      title: 'Context Engine & Live Knowledge Synthesis',
      headline: 'RAG Avanzado sobre Repositorios Documentales y Políticas',
      description: 'Motor de recuperación híbrida (densa y dispersa) que sintetiza normativas, manuales, contratos y contenidos curriculares con citas directas y trazabilidad a la fuente original.',
      coreStack: ['pgvector (PostgreSQL)', 'Cohere Rerank', 'Chunking Semántico', 'OpenAI Embeddings / BAAI', 'Claude 3.5 Haiku / Sonnet'],
      orchestrationPattern: 'Recuperación híbrida en 2 etapas: Vector Search + BM25, reordenamiento semántico con Reranker y guardrails anti-alucinación con citas verificables.',
      mvpWeeks: '4 a 5 semanas',
      keyDeliverables: [
        'Pipeline de ingestión continua de PDFs, Markdown y Docs',
        'Base de conocimiento viva con búsqueda híbrida y reranking',
        'Interfaz conversacional con previsualización del documento fuente',
        'Dashboard de evaluación de precisión y cobertura RAG'
      ],
      riskMitigations: [
        'Citas directas obligatorias para mitigar alucinaciones',
        'Segmentación de permisos por nivel de confidencialidad',
        'Actualización automática ante cambios en normativas'
      ]
    },
    product: {
      code: 'ARCH-NATIVE-PROD',
      title: 'AI-Native Product Architecture',
      headline: 'Software Diseñado Desde el Día Cero Alrededor de la Inteligencia',
      description: 'Plataforma completa donde los modelos no son un plugin añadido a posteriori, sino el núcleo de la experiencia de usuario con streaming de respuestas, UI generativa y microservicios escalables.',
      coreStack: ['Next.js / React', 'Tailwind CSS', 'Vercel / Cloud Run', 'FastAPI / Node.js Backend', 'PostgreSQL / Supabase', 'Streaming SSE'],
      orchestrationPattern: 'Frontend reactivo con soporte de Streaming, llamadas asíncronas a agentes en segundo plano y persistencia de memoria contextual por usuario.',
      mvpWeeks: '6 a 8 semanas',
      keyDeliverables: [
        'Aplicación web responsiva de alta fidelidad',
        'Arquitectura de microservicios con endpoints de IA en streaming',
        'Autenticación, roles y pasarela de pago o suscripción',
        'Telemetría de consumo de tokens y retención de usuarios'
      ],
      riskMitigations: [
        'Caché semántica para reducir costos de inferencia en un 40%',
        'Diseño de fallback ante indisponibilidad de proveedores de IA',
        'Control estricto de latencia en la primera respuesta'
      ]
    }
  };

  const currentBlueprint = blueprints[priority] || blueprints.mcp;

  return (
    <div className="w-full bg-[#0E131A] border border-[#1E2638] rounded-2xl p-6 sm:p-10 flex flex-col gap-10 font-mono shadow-2xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#24BDBA] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#24BDBA] font-bold">
            DIAGNÓSTICO INTERACTIVO DE ARQUITECTURA IA
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
          DISEÑA EL BLUEPRINT DE ORQUESTACIÓN PARA TU EMPRESA.
        </h3>
        <p className="text-[#A4A9B0] text-sm max-w-3xl leading-relaxed font-sans font-light">
          Selecciona la etapa de tu organización y tu objetivo técnico prioritario. Nuestro motor genera una recomendación arquitectónica instantánea con stack, plazos y entregables de producción.
        </p>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Questions (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Question 1: Organization Stage */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs uppercase text-[#8C96A5] font-semibold flex items-center justify-between">
              <span>1. Tipo de Organización</span>
              <span className="text-[#24BDBA] text-[10px]">Paso 1 de 3</span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'enterprise', label: 'Gran Empresa / Corporación' },
                { id: 'scaling', label: 'Mid-Market / Scaleup' },
                { id: 'startup', label: 'Startup Tecnológica' },
                { id: 'modernizing', label: 'Software Factory / Partner' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setStage(item.id as any)}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer text-xs ${
                    stage === item.id
                      ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                      : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Primary Bottleneck */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs uppercase text-[#8C96A5] font-semibold flex items-center justify-between">
              <span>2. Desafío Prioritario a Resolver</span>
              <span className="text-[#FF6B45] text-[10px]">Paso 2 de 3</span>
            </label>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { 
                  id: 'mcp', 
                  title: 'Capa MCP sobre Sistemas & ERP', 
                  desc: 'Conectar bases de datos, APIs y ERPs para que los modelos ejecuten consultas y herramientas seguras.' 
                },
                { 
                  id: 'agents', 
                  title: 'Agentes & Flujos Autónomos', 
                  desc: 'Automatizar tareas complejas en varios pasos con supervisión y aprobación humana.' 
                },
                { 
                  id: 'rag', 
                  title: 'Conocimiento Corporativo & RAG Vivo', 
                  desc: 'Indexar normativas, manuales y contratos para responder con precisión y citas reales.' 
                },
                { 
                  id: 'product', 
                  title: 'Nuevo Producto AI-Native de 0 a 1', 
                  desc: 'Desarrollar una plataforma SaaS o aplicación comercial construida nativamente con IA.' 
                }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setPriority(item.id as any)}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                    priority === item.id
                      ? 'bg-[#18202F] border-[#FF6B45] text-[#F6F4EF]'
                      : 'bg-[#10141D] border-[#1E2638] text-[#8C96A5] hover:text-[#F6F4EF]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#F6F4EF]">{item.title}</span>
                    {priority === item.id && <Sparkles className="w-3.5 h-3.5 text-[#FF6B45]" />}
                  </div>
                  <p className="text-[11px] text-[#8C96A5] font-sans font-light mt-1">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Infrastructure */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs uppercase text-[#8C96A5] font-semibold flex items-center justify-between">
              <span>3. Entorno de Despliegue Deseado</span>
              <span className="text-[#24BDBA] text-[10px]">Paso 3 de 3</span>
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'cloud', label: 'Cloud Propia (AWS / GCP / Azure)' },
                { id: 'hybrid', label: 'Híbrido / Multi-Cloud' },
                { id: 'on-premise', label: 'On-Premise / Soberano' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setInfra(item.id as any)}
                  className={`p-2.5 rounded-lg border text-center transition-colors cursor-pointer text-xs ${
                    infra === item.id
                      ? 'bg-[#18202F] text-[#24BDBA] border-[#24BDBA]'
                      : 'bg-[#10141D] text-[#8C96A5] border-[#1E2638] hover:text-[#F6F4EF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Blueprint Output (7 cols) */}
        <div className="lg:col-span-7 bg-[#10151E] border border-[#1E2638] rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xl">
          {/* Blueprint Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#181E29]">
              <div className="flex items-center gap-2 text-xs">
                <Terminal className="w-4 h-4 text-[#24BDBA]" />
                <span className="text-[#FF6B45] font-bold">{currentBlueprint.code}</span>
                <span className="text-[#323D4F]">|</span>
                <span className="text-[#8C96A5]">RECOMENDACIÓN ARQUITECTÓNICA</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#241447] text-[#24BDBA] text-[10px] uppercase font-bold border border-[#241447]">
                READY FOR SPRINT 0
              </span>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                {currentBlueprint.title}
              </h4>
              <p className="text-xs text-[#24BDBA] mt-1 font-mono">
                {currentBlueprint.headline}
              </p>
              <p className="text-xs text-[#D4D9E1] font-sans font-light leading-relaxed mt-2.5">
                {currentBlueprint.description}
              </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex gap-2 border-b border-[#181E29] pb-2 text-xs">
              <button
                onClick={() => setActiveTab('blueprint')}
                className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'blueprint' 
                    ? 'border-[#FF6B45] text-[#F6F4EF] font-bold' 
                    : 'border-transparent text-[#8C96A5]'
                }`}
              >
                Stack & Protocolo
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'specs' 
                    ? 'border-[#FF6B45] text-[#F6F4EF] font-bold' 
                    : 'border-transparent text-[#8C96A5]'
                }`}
              >
                Entregables de MVP
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'timeline' 
                    ? 'border-[#FF6B45] text-[#F6F4EF] font-bold' 
                    : 'border-transparent text-[#8C96A5]'
                }`}
              >
                Seguridad & Plazos
              </button>
            </div>

            {/* Sub-tab Content */}
            {activeTab === 'blueprint' && (
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase text-[#6E7A8A]">Stack Tecnológico Recomendado:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentBlueprint.coreStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#161D2B] border border-[#1E2638] rounded text-[#D4D9E1] text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-[#0A0D13] border border-[#181E29] rounded-lg flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase text-[#FF6B45] font-bold">Patrón de Orquestación:</span>
                  <p className="text-[11px] text-[#8C96A5] font-sans font-light leading-relaxed">
                    {currentBlueprint.orchestrationPattern}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="flex flex-col gap-2.5 text-xs">
                <span className="text-[10px] uppercase text-[#6E7A8A]">Entregables Garantizados en Fase 1:</span>
                <div className="grid grid-cols-1 gap-2">
                  {currentBlueprint.keyDeliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-[#D4D9E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#24BDBA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex items-center justify-between p-3 bg-[#131924] border border-[#1E2638] rounded-lg">
                  <span className="text-[#8C96A5]">Tiempo Estimado a MVP Operacional:</span>
                  <span className="text-[#FF6B45] font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {currentBlueprint.mvpWeeks}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase text-[#6E7A8A]">Gobernanza y Mitigación de Riesgos:</span>
                  {currentBlueprint.riskMitigations.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-[#8C96A5]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B45] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#181E29] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#8C96A5]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
              <span>Incluye sesión técnica de arquitectura 1:1</span>
            </div>

            <button
              onClick={() => onOpenContact(`Blueprint ${currentBlueprint.code} - ${currentBlueprint.title}`)}
              className="w-full sm:w-auto px-6 py-3 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#FF6B45]/20"
            >
              <span>Solicitar este Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
