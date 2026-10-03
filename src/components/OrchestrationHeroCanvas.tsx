import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCw, Cpu, Users, Database, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface NodeInfo {
  id: string;
  name: string;
  category: string;
  role: string;
  x: number;
  y: number;
  icon: React.ReactNode;
}

const NODES: NodeInfo[] = [
  { id: 'knowledge', name: 'KNOWLEDGE', category: 'Enterprise Context', role: 'Políticas, documentación, experiencia tácita y contenidos corporativos.', x: 130, y: 110, icon: <BookOpen className="w-4 h-4" /> },
  { id: 'data', name: 'DATA', category: 'Structured Sources', role: 'Bases SQL, reportes, telemetría IoT, analytics y APIs transaccionales.', x: 130, y: 290, icon: <Database className="w-4 h-4" /> },
  { id: 'models', name: 'MODELS', category: 'Cognitive Engines', role: 'Modelos de lenguaje de frontera (Claude, OpenAI, Gemini) y modelos locales.', x: 400, y: 80, icon: <Sparkles className="w-4 h-4" /> },
  { id: 'agents', name: 'AGENTS', category: 'Agentic Execution', role: 'Planificación, síntesis, razonamiento, memoria y colaboración multiagente.', x: 400, y: 320, icon: <Cpu className="w-4 h-4" /> },
  { id: 'systems', name: 'SYSTEMS', category: 'Operational Core', role: 'ERPs, CRMs, Moodle LMS, software propio y herramientas de negocio.', x: 670, y: 110, icon: <Layers className="w-4 h-4" /> },
  { id: 'people', name: 'PEOPLE', category: 'Human Direction', role: 'Directiva ejecutiva, control ético y aprobación de decisiones críticas.', x: 670, y: 290, icon: <Users className="w-4 h-4" /> }
];

const ORCHESTRATION_PHASES = [
  {
    phase: 1,
    title: 'Sustrato Inicial',
    state: 'Nodos de información y personas operando de forma aislada.',
    source: 'knowledge',
    target: 'models',
    signalActive: false,
    coralAction: false,
    humanApproval: false,
    log: 'ISOLATED_STATE: Nodes exist independently without shared orchestration layer.'
  },
  {
    phase: 2,
    title: 'Conexión Teal de Inteligencia',
    state: 'La capa MCP despliega conexiones semánticas seguras entre datos y modelos.',
    source: 'models',
    target: 'knowledge',
    signalActive: true,
    coralAction: false,
    humanApproval: false,
    log: 'TEAL_CONNECTIVITY: MCP server registers schema & indexes enterprise knowledge.'
  },
  {
    phase: 3,
    title: 'Invocación de Agente',
    state: 'El agente interroga la fuente de datos mediante lenguaje natural y herramientas.',
    source: 'agents',
    target: 'data',
    signalActive: true,
    coralAction: false,
    humanApproval: false,
    log: 'AGENT_TOOL_CALL: agent.execute_query("variance_rcd_faenas") via MCP.'
  },
  {
    phase: 4,
    title: 'Señal Coral de Ejecución',
    state: 'El flujo transita de análisis a preparación de acción en el sistema operacional.',
    source: 'agents',
    target: 'systems',
    signalActive: true,
    coralAction: true,
    humanApproval: false,
    log: 'CORAL_DISPATCH: Target ERP / LMS webhook prepared for operational sync.'
  },
  {
    phase: 5,
    title: 'Punto de Aprobación Humana',
    state: 'Human-in-the-loop: La persona recibe la síntesis y autoriza el cambio sensible.',
    source: 'people',
    target: 'systems',
    signalActive: true,
    coralAction: true,
    humanApproval: true,
    log: 'HUMAN_APPROVAL_GATEWAY: Executive review verified. Permission granted.'
  },
  {
    phase: 6,
    title: 'ACCIÓN CONSOLIDADA',
    state: 'Resultado ejecutado: De la información al entendimiento y a la acción real.',
    source: 'systems',
    target: 'people',
    signalActive: true,
    coralAction: true,
    humanApproval: false,
    log: 'ACTION_COMMITTED: Coordinated intelligent system state updated successfully.'
  }
];

export const OrchestrationHeroCanvas: React.FC = () => {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedNode, setSelectedNode] = useState<NodeInfo | null>(NODES[3]); // Default: AGENTS

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentPhaseIndex((prev) => (prev + 1) % ORCHESTRATION_PHASES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentPhase = ORCHESTRATION_PHASES[currentPhaseIndex];

  return (
    <div className="w-full bg-[#0E1219] border border-[#241447] rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono">
      {/* Top Instrumentation Bar */}
      <div className="px-5 py-3 bg-[#0A0D12] border-b border-[#1E2533] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${currentPhase.coralAction ? 'bg-[#FF6B45]' : 'bg-[#24BDBA]'} animate-pulse`} />
          <span className="text-[#F6F4EF] font-bold tracking-wider font-['Space_Grotesk']">
            ORCHESTRATION PROTOCOL
          </span>
          <span className="text-[#3A4452]">|</span>
          <span className="text-[#A4A9B0] text-[11px]">
            {currentPhase.coralAction ? 'CORAL: ACCIÓN EN CURSO' : 'TEAL: INTELIGENCIA ACTIVA'}
          </span>
        </div>

        {/* Phase Indicator & Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[#5D6672] text-[11px]">FASE {currentPhase.phase}/6:</span>
          <span className={`text-xs font-semibold ${currentPhase.coralAction ? 'text-[#FF6B45]' : 'text-[#24BDBA]'}`}>
            {currentPhase.title}
          </span>
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 text-[#A4A9B0] hover:text-[#F6F4EF] bg-[#161D27] hover:bg-[#202936] rounded transition-colors cursor-pointer"
              title={isPlaying ? 'Pausar animación' : 'Reanudar'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#24BDBA]" />}
            </button>
            <button
              onClick={() => setCurrentPhaseIndex((prev) => (prev + 1) % ORCHESTRATION_PHASES.length)}
              className="p-1 text-[#A4A9B0] hover:text-[#F6F4EF] bg-[#161D27] hover:bg-[#202936] rounded transition-colors cursor-pointer"
              title="Avanzar fase"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div className="relative w-full h-[370px] sm:h-[410px] bg-[#0A0D12] overflow-hidden select-none">
        {/* Architectural drafting matrix */}
        <div className="absolute inset-0 bg-grid-matrix opacity-30 pointer-events-none" />

        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#24BDBA" floodOpacity="0.8" />
            </filter>
            <filter id="coralGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#FF6B45" floodOpacity="0.95" />
            </filter>
          </defs>

          {/* Neutral Baseline Grid Connections (Muted Indigo & Slate) */}
          <g stroke="#1F2633" strokeWidth="1.2" strokeDasharray="3 3">
            <line x1="130" y1="110" x2="400" y2="80" />
            <line x1="130" y1="110" x2="400" y2="320" />
            <line x1="130" y1="290" x2="400" y2="320" />
            <line x1="130" y1="290" x2="400" y2="80" />
            <line x1="400" y1="80" x2="670" y2="110" />
            <line x1="400" y1="80" x2="400" y2="320" />
            <line x1="400" y1="320" x2="670" y2="110" />
            <line x1="400" y1="320" x2="670" y2="290" />
            <line x1="670" y1="110" x2="670" y2="290" />
          </g>

          {/* Central Orchestration Nexus Rings (Indigo / Teal) */}
          <circle cx="400" cy="200" r="115" stroke="rgba(36, 189, 186, 0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <circle cx="400" cy="200" r="48" stroke="rgba(36, 20, 71, 0.7)" strokeWidth="1.5" fill="none" />
          <circle cx="400" cy="200" r="5" fill={currentPhase.coralAction ? '#FF6B45' : '#24BDBA'} />

          {/* Active Signal Vector Line Based on Current Phase */}
          {(() => {
            const fromNode = NODES.find(n => n.id === currentPhase.source);
            const toNode = NODES.find(n => n.id === currentPhase.target);
            if (!fromNode || !toNode || !currentPhase.signalActive) return null;

            const strokeColor = currentPhase.coralAction ? '#FF6B45' : '#24BDBA';
            const filterId = currentPhase.coralAction ? 'url(#coralGlow)' : 'url(#tealGlow)';

            return (
              <g>
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={strokeColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
                {/* Moving Signal Bead: Coral (Action) or Teal (Intelligence) */}
                <circle
                  r="5.5"
                  fill={strokeColor}
                  filter={filterId}
                  className="animate-pulse"
                >
                  <animate
                    attributeName="cx"
                    from={fromNode.x}
                    to={toNode.x}
                    dur="1.3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={fromNode.y}
                    to={toNode.y}
                    dur="1.3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })()}

          {/* Human Approval Checkpoint Ring (Phase 5) */}
          {currentPhase.humanApproval && (
            <g>
              <circle
                cx={NODES[5].x}
                cy={NODES[5].y}
                r="40"
                fill="none"
                stroke="#FF6B45"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-spin"
                style={{ transformOrigin: `${NODES[5].x}px ${NODES[5].y}px`, animationDuration: '6s' }}
              />
              <text
                x={NODES[5].x}
                y={NODES[5].y - 36}
                textAnchor="middle"
                fill="#FF6B45"
                fontSize="9"
                fontWeight="bold"
                fontFamily="IBM Plex Mono, monospace"
              >
                APPROVAL REQUIRED
              </text>
            </g>
          )}

          {/* 6 Core System Nodes */}
          {NODES.map((node) => {
            const isSource = currentPhase.source === node.id && currentPhase.signalActive;
            const isTarget = currentPhase.target === node.id && currentPhase.signalActive;
            const isSelected = selectedNode?.id === node.id;
            const isActive = isSource || isTarget;
            const isCoral = currentPhase.coralAction && (isSource || isTarget);

            const nodeStroke = isCoral ? '#FF6B45' : isActive ? '#24BDBA' : isSelected ? '#55DAD5' : '#2A3445';
            const nodeFill = isCoral ? '#211317' : isActive ? '#0D1E26' : isSelected ? '#151D29' : '#0E131A';

            return (
              <g 
                key={node.id} 
                className="cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedNode(node)}
              >
                {/* Active halo */}
                {isActive && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="34"
                    fill="none"
                    stroke={isCoral ? '#FF6B45' : '#24BDBA'}
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    className="animate-ping"
                    style={{ animationDuration: '2.8s' }}
                  />
                )}

                {/* Node Background Disc */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="28"
                  fill={nodeFill}
                  stroke={nodeStroke}
                  strokeWidth={isActive ? 2.2 : 1.2}
                  className="transition-colors duration-300"
                />

                {/* Internal semantic dot (Teal = Intelligence / Coral = Action) */}
                <circle
                  cx={node.x + 18}
                  cy={node.y - 18}
                  r="3.5"
                  fill={isCoral ? '#FF6B45' : isActive ? '#24BDBA' : '#3A4556'}
                />

                {/* Node Label Text */}
                <text
                  x={node.x}
                  y={node.y + 44}
                  textAnchor="middle"
                  fill={isCoral ? '#FF6B45' : isActive || isSelected ? '#F6F4EF' : '#8A919C'}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="Space Grotesk, sans-serif"
                  letterSpacing="0.08em"
                >
                  {node.name}
                </text>

                <text
                  x={node.x}
                  y={node.y + 57}
                  textAnchor="middle"
                  fill="#5D6672"
                  fontSize="8"
                  fontFamily="IBM Plex Mono, monospace"
                >
                  {node.category}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Node Details Card in bottom-right corner */}
        {selectedNode && (
          <div className="absolute bottom-3 right-3 max-w-[280px] p-3.5 bg-[#0C1017]/95 border border-[#241447] rounded-lg shadow-xl backdrop-blur-md text-xs">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#5D6672] pb-1 border-b border-[#1E2533]">
              <span>COMPONENTE DEL SISTEMA</span>
              <span className="text-[#24BDBA]">0{NODES.findIndex(n => n.id === selectedNode.id) + 1}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="p-1 bg-[#131923] border border-[#1E2636] rounded text-[#24BDBA]">
                {selectedNode.icon}
              </span>
              <div>
                <span className="font-bold text-[#F6F4EF] font-['Space_Grotesk'] text-sm block">
                  {selectedNode.name}
                </span>
                <span className="text-[10px] text-[#5D6672] font-mono block">
                  {selectedNode.category}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#A4A9B0] mt-2 leading-relaxed">
              {selectedNode.role}
            </p>
          </div>
        )}

        {/* Live Step Explanation in bottom-left corner */}
        <div className="absolute bottom-3 left-3 max-w-[340px] p-3 bg-[#0A0D12]/95 border border-[#241447] rounded-lg backdrop-blur-sm text-xs">
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className={`w-1.5 h-1.5 rounded-full ${currentPhase.coralAction ? 'bg-[#FF6B45]' : 'bg-[#24BDBA]'}`} />
            <span className={currentPhase.coralAction ? 'text-[#FF6B45]' : 'text-[#24BDBA]'}>
              ORCHESTRATION IN PROGRESS
            </span>
          </div>
          <div className="text-xs text-[#F6F4EF] font-bold mt-1 font-['Space_Grotesk']">
            {currentPhase.title}
          </div>
          <p className="text-[11px] text-[#A4A9B0] mt-0.5 leading-snug">
            {currentPhase.state}
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#1E2533] text-[9px] font-mono text-[#5D6672] truncate">
            {currentPhase.log}
          </div>
        </div>
      </div>
    </div>
  );
};
