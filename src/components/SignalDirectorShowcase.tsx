import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Sun, 
  Moon, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  SlidersHorizontal,
  Clock,
  HelpCircle,
  Activity
} from 'lucide-react';
import { PageRoute } from '../types';

interface SignalDirectorShowcaseProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenContact?: (need?: string) => void;
}

export const SignalDirectorShowcase: React.FC<SignalDirectorShowcaseProps> = ({
  onNavigate,
  onOpenContact
}) => {
  // Theme Mode: Daytime (#F6F3EC Cream) vs Cinematic Nighttime (#16213E / #0F3460 Navy)
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Radar active node
  const [activeRadarAxis, setActiveRadarAxis] = useState<number>(0);

  // Mini Diagnostic state (12 questions / 3 minutes concept)
  const [diagnosticOpen, setDiagnosticOpen] = useState<boolean>(false);
  const [selectedScore, setSelectedScore] = useState<{ [key: number]: number }>({
    0: 4,
    1: 3,
    2: 2,
    3: 4
  });

  const radarAxes = [
    { 
      label: 'Exposición a Industrias Cruzadas', 
      value: 78, 
      sub: 'Perspectivas no capturadas por el sesgo sectorial.',
      insight: 'La mayoría de los comités ejecutivos pasa el 92% de su tiempo debatiendo con referentes de su misma industria. La innovación de ruptura casi siempre proviene de un cuadrante análogo pero foráneo.'
    },
    { 
      label: 'Calidad de la Señal Temprana', 
      value: 84, 
      sub: 'Filtrado de ruido operacional vs. señales débiles.',
      insight: 'Diferenciar entre el ruido coyuntural de ventas y una señal débil de transformación tecnológica requiere marcos estructurados de observación no complaciente.'
    },
    { 
      label: 'Disidencia Estructurada Directiva', 
      value: 62, 
      sub: 'Capacidad de desafiar supuestos tácitos del CEO.',
      insight: 'En comités de alta dirección, la complacencia jerárquica es el mayor riesgo invisible. Signal Director crea el canal de confrontación rigurosa sin fricción política.'
    },
    { 
      label: 'Blindspots en Cadenas de Decisión', 
      value: 71, 
      sub: 'Ángulos ciegos en la ejecución estratégica.',
      insight: 'Las decisiones erradas rara vez provienen de mala información; provienen de premisas lógicas jamás cuestionadas por considerarse «obvias» dentro de la cultura de la empresa.'
    },
    { 
      label: 'Síntesis de Inteligencia entre Pares', 
      value: 89, 
      sub: 'Extracción de criterio directivo no público.',
      insight: 'El intercambio confidencial entre líderes de compañías no competidoras desbloquea respuestas tácticas que ningún informe de consultoría tradicional puede capturar.'
    },
    { 
      label: 'Gobernanza & Trazabilidad de Criterio', 
      value: 82, 
      sub: 'Memoria reflexiva para comités y directorios.',
      insight: 'Documentar por qué se tomó una decisión bajo incertidumbre permite evaluar el proceso de razonamiento, no solo el resultado fortuito o adverso.'
    }
  ];

  const faqItems = [
    {
      q: '¿Qué es exactamente Signal Director y cómo opera con ORQOMI?',
      a: 'Signal Director es un proyecto aliado especializado en crear entornos confidenciales de reflexión estratégica y contraste de perspectiva entre líderes empresariales. Mientras Signal Director articula las sesiones entre pares y los modelos de gobernanza directiva, ORQOMI diseña la arquitectura de software, los servidores seguros Model Context Protocol (MCP) y los agentes de síntesis que transforman los debates en inteligencia estructurada y accionable.'
    },
    {
      q: '¿Cómo se garantiza la estricta confidencialidad de la información?',
      a: 'Opera bajo protocolos de confidencialidad institucional equivalentes a comités de ética médica o arbitrajes de alta cuantía. Los datos compartidos durante las dinámicas de contraste nunca se consolidan en repositorios compartidos, y la capa tecnológica utiliza modelos privados con retención cero y aislamiento criptográfico por sesión.'
    },
    {
      q: '¿Cuál es la diferencia entre Signal Director y una consultoría tradicional?',
      a: 'Las consultoras tradicionales entregan diagnósticos prefabricados basados en el promedio de la industria. Signal Director no prescribe recetas: somete los supuestos del líder a la confrontación de pares con experiencia ejecutiva real de otros sectores, utilizando agentes de síntesis para descubrir ángulos ciegos antes de que el mercado los evidencie.'
    },
    {
      q: '¿A qué perfiles está orientado este programa?',
      a: 'A Directores Ejecutivos (CEOs), miembros de Directorio, Gerentes Generales y socios fundadores de compañías en etapas de inflexión estratégica, expansión internacional o disrupción de modelo de negocio.'
    }
  ];

  return (
    <div 
      className={`w-full transition-colors duration-300 font-['IBM_Plex_Sans',sans-serif] selection:bg-[#EFC07B] selection:text-[#1A1A2E] ${
        isNightMode ? 'bg-[#0F1D33] text-white' : 'bg-[#F6F3EC] text-[#1A1A2E]'
      }`}
    >
      {/* Editorial Identity Header Strip */}
      <div 
        className={`w-full border-b transition-colors px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs ${
          isNightMode 
            ? 'border-white/10 bg-[#16213E]/80 text-white/70' 
            : 'border-[#DDE1E8] bg-white/60 text-[#4A5568]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-['Cambria','Georgia',serif] text-sm font-semibold tracking-wider uppercase text-[#B08A52]">
            SIGNAL DIRECTOR
          </span>
          <span className="text-[#DDE1E8]">|</span>
          <span className="font-medium tracking-wide">
            PROYECTO ALIADO // GOBERNANZA & ESTRATEGIA DIRECTIVA
          </span>
        </div>

        {/* Day / Night Mode Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              isNightMode
                ? 'bg-white/10 border-white/20 text-[#EFC07B] hover:bg-white/15'
                : 'bg-white border-[#DDE1E8] text-[#1A1A2E] hover:border-[#B08A52] shadow-xs'
            }`}
            title="Alternar entre modo diurno editorial y modo nocturno cinemático"
          >
            {isNightMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#EFC07B]" />
                <span>Modo Diurno (Crema)</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#0F3460]" />
                <span>Modo Nocturno (Cinemático)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 1. CINEMATIC / EDITORIAL HERO */}
      <section 
        className={`w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${
          isNightMode 
            ? 'bg-gradient-to-b from-[#16213E] via-[#0F3460] to-[#0A192F] text-white' 
            : 'bg-[#F6F3EC] text-[#1A1A2E]'
        }`}
      >
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isNightMode ? '#EFC07B' : '#B08A52'} 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
          {/* Eyebrow / Kicker */}
          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
            }`}>
              CÓMO SE FORMA EL PUNTO CIEGO // DE RUIDO A SEÑAL
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-current opacity-70">
              Perspectiva Estratégica entre Pares
            </span>
          </div>

          {/* Main H1 Hero */}
          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className={`font-['Cambria','Georgia',serif] text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.08] font-normal tracking-tight ${
              isNightMode ? 'text-white drop-shadow-xl' : 'text-[#1A1A2E]'
            }`}>
              Exposición sistemática a{' '}
              <span className={isNightMode ? 'text-[#EFC07B] italic' : 'bg-[#EFC07B]/30 px-2 leading-snug rounded-xs'}>
                perspectivas improbables.
              </span>
            </h1>

            <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${
              isNightMode ? 'text-white/85' : 'text-[#4A5568]'
            }`}>
              Acompañamos a líderes empresariales en experiencias confidenciales de reflexión y contraste estratégico, transformando observaciones tácitas y señales de mercado en directrices estructuradas y accionables.
            </p>
          </div>

          {/* Call to Actions & Meta Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact?.('Signal Director — Sesión de Exploración')}
              className="px-8 py-4 bg-[#EFC07B] text-[#1A1A2E] hover:bg-[#B08A52] rounded-lg transition-colors font-medium text-base cursor-pointer shadow-lg shadow-[#EFC07B]/20"
            >
              Solicitar sesión confidencial
            </button>

            <button
              onClick={() => setDiagnosticOpen(!diagnosticOpen)}
              className={`px-6 py-4 rounded-lg transition-colors font-medium text-base cursor-pointer border ${
                isNightMode
                  ? 'bg-[#0F3460] text-white hover:bg-[#16213E] border-white/20'
                  : 'bg-white text-[#1A1A2E] hover:border-[#1A1A2E] border-[#DDE1E8] shadow-xs'
              }`}
            >
              {diagnosticOpen ? 'Ocultar autodiagnóstico' : 'Comenzar autodiagnóstico reflexivo'}
            </button>

            <div className={`flex items-center gap-2 text-xs font-medium ml-auto ${
              isNightMode ? 'text-white/60' : 'text-[#4A5568]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#EFC07B]" />
              <span>12 preguntas · 3 minutos · Criterio confidencial</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BLINDSPOT REFLECTION (H2 SECTION) */}
      <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isNightMode ? 'bg-[#0A1526] border-white/10' : 'bg-[#F6F3EC] border-[#DDE1E8]'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
            }`}>
              EL DILEMA DE LA SOLEDAD DIRECTIVA
            </span>
            <h2 className={`font-['Cambria','Georgia',serif] text-3xl sm:text-5xl leading-tight ${
              isNightMode ? 'text-white' : 'text-[#1A1A2E]'
            }`}>
              ¿Cuándo fue la última vez que alguno de tus reportes directos{' '}
              <span className="bg-[#EFC07B]/30 px-2 leading-snug rounded-xs">
                te dijo algo que no querías escuchar?
              </span>
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${
              isNightMode ? 'text-white/80' : 'text-[#4A5568]'
            }`}>
              A medida que la responsabilidad ejecutiva aumenta, los canales de feedback honesto disminuyen. Las presentaciones se pulen antes de llegar al comité y los equipos tienden a validar los sesgos del líder.
            </p>
          </div>

          {/* 3 Pillar Cards in Editorial Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${
              isNightMode 
                ? 'bg-[#16213E]/40 backdrop-blur-md border-white/10 shadow-2xl' 
                : 'bg-white border-[#DDE1E8] shadow-sm'
            }`}>
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl block mb-3">
                01 —
              </span>
              <h3 className={`font-['Cambria','Georgia',serif] text-2xl font-medium mb-3 leading-snug ${
                isNightMode ? 'text-white' : 'text-[#1A1A2E]'
              }`}>
                No es falta de talento. Es exceso de exposición a una sola industria.
              </h3>
              <p className={`text-sm leading-relaxed ${
                isNightMode ? 'text-white/75' : 'text-[#4A5568]'
              }`}>
                Los mejores directivos sufren de visión de túnel inducida por años de dominar las reglas de su propio mercado. La disrupción proviene de quienes no respetan esas reglas porque pertenecen a otro juego.
              </p>
            </div>

            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${
              isNightMode 
                ? 'bg-[#16213E]/40 backdrop-blur-md border-white/10 shadow-2xl' 
                : 'bg-white border-[#DDE1E8] shadow-sm'
            }`}>
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl block mb-3">
                02 —
              </span>
              <h3 className={`font-['Cambria','Georgia',serif] text-2xl font-medium mb-3 leading-snug ${
                isNightMode ? 'text-white' : 'text-[#1A1A2E]'
              }`}>
                La señal débil se ahoga bajo el volumen de la operación diaria.
              </h3>
              <p className={`text-sm leading-relaxed ${
                isNightMode ? 'text-white/75' : 'text-[#4A5568]'
              }`}>
                La urgencia del trimestre desplaza la lectura de vectores de largo plazo. Signal Director aísla las variables verdaderamente estructurales del ruido de corto plazo.
              </p>
            </div>

            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${
              isNightMode 
                ? 'bg-[#16213E]/40 backdrop-blur-md border-white/10 shadow-2xl' 
                : 'bg-white border-[#DDE1E8] shadow-sm'
            }`}>
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl block mb-3">
                03 —
              </span>
              <h3 className={`font-['Cambria','Georgia',serif] text-2xl font-medium mb-3 leading-snug ${
                isNightMode ? 'text-white' : 'text-[#1A1A2E]'
              }`}>
                Inteligencia artificial como sintetizador, no como oráculo.
              </h3>
              <p className={`text-sm leading-relaxed ${
                isNightMode ? 'text-white/75' : 'text-[#4A5568]'
              }`}>
                Junto a ORQOMI, empleamos agentes y servidores MCP para cruzar observaciones de múltiples comités y extraer patrones causales sin comprometer el secreto de cada compañía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE RADAR ESTRATÉGICO */}
      <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isNightMode ? 'bg-[#0F1D33] border-white/10' : 'bg-white border-[#DDE1E8]'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className={`text-xs font-bold uppercase tracking-widest ${
                isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
              }`}>
                RADAR DE GOBERNANZA & CONTRASTE
              </span>
              <h2 className={`font-['Cambria','Georgia',serif] text-3xl sm:text-4xl font-normal mt-2 ${
                isNightMode ? 'text-white' : 'text-[#1A1A2E]'
              }`}>
                Malla de Detección de Señales Críticas
              </h2>
            </div>
            <p className={`text-sm max-w-md ${isNightMode ? 'text-white/70' : 'text-[#4A5568]'}`}>
              Haz clic en cualquiera de los 6 ejes estratégicos para inspeccionar el diagnóstico de blindspots y el vector de contraste aplicado.
            </p>
          </div>

          {/* Radar Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Visual Radar (7 cols) */}
            <div className={`lg:col-span-7 p-6 rounded-2xl border flex flex-col items-center justify-center relative select-none ${
              isNightMode ? 'bg-[#16213E]/50 border-white/10' : 'bg-[#F6F3EC] border-[#DDE1E8]'
            }`}>
              <div className="w-full max-w-[440px] aspect-square relative flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                  {/* Concentric Coordinate Polygons */}
                  {[0.25, 0.5, 0.75, 1.0].map((scale, sIdx) => {
                    const r = 150 * scale;
                    const points = radarAxes.map((_, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x = 200 + r * Math.cos(angle);
                      const y = 200 + r * Math.sin(angle);
                      return `${x},${y}`;
                    }).join(' ');

                    return (
                      <polygon
                        key={sIdx}
                        points={points}
                        fill="none"
                        stroke={isNightMode ? 'rgba(255,255,255,0.1)' : 'rgba(26,26,46,0.1)'}
                        strokeWidth="1"
                        strokeDasharray={sIdx === 3 ? 'none' : '3 3'}
                      />
                    );
                  })}

                  {/* Radial Axis Lines */}
                  {radarAxes.map((_, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 200 + 150 * Math.cos(angle);
                    const y = 200 + 150 * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke={isNightMode ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.15)'}
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Data Polygon Fill */}
                  {(() => {
                    const points = radarAxes.map((axis, i) => {
                      const r = 150 * (axis.value / 100);
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x = 200 + r * Math.cos(angle);
                      const y = 200 + r * Math.sin(angle);
                      return `${x},${y}`;
                    }).join(' ');

                    return (
                      <polygon
                        points={points}
                        fill={isNightMode ? 'rgba(239, 192, 123, 0.25)' : 'rgba(176, 138, 82, 0.2)'}
                        stroke={isNightMode ? '#EFC07B' : '#B08A52'}
                        strokeWidth="2"
                      />
                    );
                  })()}

                  {/* Interactive Nodes */}
                  {radarAxes.map((axis, i) => {
                    const r = 150 * (axis.value / 100);
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 200 + r * Math.cos(angle);
                    const y = 200 + r * Math.sin(angle);
                    const isSelected = activeRadarAxis === i;

                    return (
                      <g
                        key={i}
                        className="cursor-pointer"
                        onClick={() => setActiveRadarAxis(i)}
                      >
                        {isSelected && (
                          <circle
                            cx={x}
                            cy={y}
                            r="12"
                            fill="none"
                            stroke="#EFC07B"
                            strokeWidth="1.5"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? '6.5' : '4.5'}
                          fill={isSelected ? '#EFC07B' : (isNightMode ? '#FFFFFF' : '#1A1A2E')}
                          stroke="#1A1A2E"
                          strokeWidth="1.5"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="w-full flex items-center justify-between text-xs pt-4 border-t border-[#DDE1E8]/30 font-['Cambria','Georgia',serif]">
                <span>Puntuación Global de Señal:</span>
                <span className="font-bold text-[#B08A52] text-sm">77.6 / 100</span>
              </div>
            </div>

            {/* Axis Inspector Detail (5 cols) */}
            <div className={`lg:col-span-5 p-8 rounded-2xl border flex flex-col justify-between gap-6 shadow-sm ${
              isNightMode ? 'bg-[#16213E]/80 border-white/10' : 'bg-white border-[#DDE1E8]'
            }`}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B08A52]">
                    EJE {activeRadarAxis + 1} DE 6
                  </span>
                  <span className="font-['Cambria','Georgia',serif] text-xl font-bold text-[#EFC07B]">
                    {radarAxes[activeRadarAxis].value}%
                  </span>
                </div>

                <h3 className={`font-['Cambria','Georgia',serif] text-2xl font-normal leading-snug ${
                  isNightMode ? 'text-white' : 'text-[#1A1A2E]'
                }`}>
                  {radarAxes[activeRadarAxis].label}
                </h3>

                <p className="text-xs font-medium text-[#B08A52]">
                  {radarAxes[activeRadarAxis].sub}
                </p>

                <p className={`text-sm leading-relaxed pt-2 ${
                  isNightMode ? 'text-white/80' : 'text-[#4A5568]'
                }`}>
                  {radarAxes[activeRadarAxis].insight}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE1E8]/40 flex items-center justify-between">
                <span className="text-xs text-[#4A5568]">
                  Ponderación de riesgo: <strong className="text-[#B08A52]">Bajo Control</strong>
                </span>
                <button
                  onClick={() => setActiveRadarAxis((prev) => (prev + 1) % radarAxes.length)}
                  className="text-xs font-medium text-[#B08A52] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Siguiente vector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL NUMBERED LIST (METHODOLOGY) */}
      <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isNightMode ? 'bg-[#0A1526] border-white/10' : 'bg-[#F6F3EC] border-[#DDE1E8]'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
            }`}>
              PROTOCOLO DE INTERVENCIÓN STRAT-PEER
            </span>
            <h2 className={`font-['Cambria','Georgia',serif] text-3xl sm:text-4xl font-normal ${
              isNightMode ? 'text-white' : 'text-[#1A1A2E]'
            }`}>
              Cómo se estructura la experiencia de contraste
            </h2>
          </div>

          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 border-b border-[#DDE1E8] pb-6">
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl shrink-0">
                01 —
              </span>
              <div className="flex flex-col gap-1">
                <h4 className={`font-['Cambria','Georgia',serif] text-lg font-medium ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  Auditoría Silenciosa de Premisas
                </h4>
                <span className={`text-sm leading-relaxed ${isNightMode ? 'text-white/75' : 'text-[#4A5568]'}`}>
                  Revisión preliminar de los documentos estratégicos y supuestos clave del directorio mediante modelos de análisis de consistencia lógica.
                </span>
              </div>
            </li>

            <li className="flex gap-4 border-b border-[#DDE1E8] pb-6">
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl shrink-0">
                02 —
              </span>
              <div className="flex flex-col gap-1">
                <h4 className={`font-['Cambria','Georgia',serif] text-lg font-medium ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  Mesa Redonda Asimétrica entre Pares
                </h4>
                <span className={`text-sm leading-relaxed ${isNightMode ? 'text-white/75' : 'text-[#4A5568]'}`}>
                  Sesión confidencial bajo regla de Chatham House con 4 a 6 líderes de industrias no competidoras entrenados para desafiar la tesis directiva.
                </span>
              </div>
            </li>

            <li className="flex gap-4 border-b border-[#DDE1E8] pb-6">
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl shrink-0">
                03 —
              </span>
              <div className="flex flex-col gap-1">
                <h4 className={`font-['Cambria','Georgia',serif] text-lg font-medium ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  Síntesis Asistida por Agentes ORQOMI
                </h4>
                <span className={`text-sm leading-relaxed ${isNightMode ? 'text-white/75' : 'text-[#4A5568]'}`}>
                  Extracción de divergencias, consensos tácitos y señales críticas sin transcripciones invasivas, garantizando total anonimización y rigor conceptual.
                </span>
              </div>
            </li>

            <li className="flex gap-4 pb-2">
              <span className="font-['Cambria','Georgia',serif] text-[#B08A52] font-bold text-xl shrink-0">
                04 —
              </span>
              <div className="flex flex-col gap-1">
                <h4 className={`font-['Cambria','Georgia',serif] text-lg font-medium ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  Entrega del Cuaderno de Blindspots Directivos
                </h4>
                <span className={`text-sm leading-relaxed ${isNightMode ? 'text-white/75' : 'text-[#4A5568]'}`}>
                  Documento ejecutivo encuadernado y digital con 3 a 5 decisiones que requieren revisión previa a su presentación formal en Directorio.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) */}
      <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isNightMode ? 'bg-[#0F1D33] border-white/10' : 'bg-white border-[#DDE1E8]'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
            }`}>
              CLARIDAD INSTITUCIONAL
            </span>
            <h2 className={`font-['Cambria','Georgia',serif] text-3xl sm:text-4xl font-normal ${
              isNightMode ? 'text-white' : 'text-[#1A1A2E]'
            }`}>
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#DDE1E8]">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className={`font-['Cambria','Georgia',serif] text-lg sm:text-xl font-medium group-hover:text-[#B08A52] transition-colors ${
                      isNightMode ? 'text-white' : 'text-[#1A1A2E]'
                    }`}>
                      {item.q}
                    </span>
                    <span className="text-[#B08A52] shrink-0 p-1">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8">
                      <p className={`text-base leading-relaxed ${
                        isNightMode ? 'text-white/80' : 'text-[#4A5568]'
                      }`}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FORMULARIO DE ACCESO CONFIDENCIAL */}
      <section className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isNightMode ? 'bg-[#0A1526] border-white/10' : 'bg-[#F6F3EC] border-[#DDE1E8]'
      }`}>
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#EFC07B]' : 'text-[#B08A52]'
            }`}>
              ACCESO A LA MESA STRAT-PEER
            </span>
            <h2 className={`font-['Cambria','Georgia',serif] text-3xl sm:text-4xl font-normal ${
              isNightMode ? 'text-white' : 'text-[#1A1A2E]'
            }`}>
              Inicia una conversación confidencial
            </h2>
            <p className={`text-sm max-w-lg leading-relaxed ${
              isNightMode ? 'text-white/75' : 'text-[#4A5568]'
            }`}>
              Coordinamos una primera sesión de 30 minutos sin compromiso para evaluar si tu desafío se adecúa al formato de Signal Director.
            </p>
          </div>

          {/* Form */}
          <div className={`p-8 sm:p-12 rounded-2xl border shadow-sm ${
            isNightMode ? 'bg-[#16213E]/80 border-white/15' : 'bg-white border-[#DDE1E8]'
          }`}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Solicitud confidencial recibida. Un director de Signal Director se contactará con usted de manera privada.');
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    Nombre y Apellido <span className="text-[#EFC07B] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Rodrigo Morales"
                    className="w-full px-4 py-3 bg-white text-[#1A1A2E] border border-[#DDE1E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFC07B] focus:border-transparent transition-all placeholder:text-[#4A5568]/60 text-sm"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    Compañía / Organización <span className="text-[#EFC07B] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre de la empresa"
                    className="w-full px-4 py-3 bg-white text-[#1A1A2E] border border-[#DDE1E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFC07B] focus:border-transparent transition-all placeholder:text-[#4A5568]/60 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    Rol Ejecutivo <span className="text-[#EFC07B] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="CEO / Director / Gerente General"
                    className="w-full px-4 py-3 bg-white text-[#1A1A2E] border border-[#DDE1E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFC07B] focus:border-transparent transition-all placeholder:text-[#4A5568]/60 text-sm"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    Email Corporativo <span className="text-[#EFC07B] font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nombre@empresa.com"
                    className="w-full px-4 py-3 bg-white text-[#1A1A2E] border border-[#DDE1E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFC07B] focus:border-transparent transition-all placeholder:text-[#4A5568]/60 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isNightMode ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  Foco del Dilema o Inflexión Estratégica
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente la decisión, vector de crecimiento o blindspot que te interesa contrastar..."
                  className="w-full px-4 py-3 bg-white text-[#1A1A2E] border border-[#DDE1E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EFC07B] focus:border-transparent transition-all placeholder:text-[#4A5568]/60 text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-[#4A5568] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B08A52]" />
                  <span>Información protegida bajo estricto secreto profesional.</span>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#EFC07B] text-[#1A1A2E] hover:bg-[#B08A52] rounded-lg font-medium text-sm transition-colors cursor-pointer"
                >
                  Solicitar Contacto Privado
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
