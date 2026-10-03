import React from 'react';
import { PageRoute } from '../types';
import { 
  SERVICES_DATA, 
  INDUSTRIES_DATA, 
  CASE_STUDIES_DATA, 
  LABS_PROJECTS, 
  INSIGHTS_ARTICLES, 
  ENGAGEMENT_MODELS, 
  TECHNOLOGIES_WE_BUILD_WITH, 
  FOUNDER_CREDIBILITY_DISCLAIMER 
} from '../data/content';
import { OrchestrationHeroCanvas } from '../components/OrchestrationHeroCanvas';
import { OrchestrationLayerDiagram } from '../components/OrchestrationLayerDiagram';
import { McpInteractiveDemo } from '../components/McpInteractiveDemo';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { SoftwarePartnerCalculator } from '../components/SoftwarePartnerCalculator';
import { EnterpriseComparison } from '../components/EnterpriseComparison';
import { AiReadinessDiagnostic } from '../components/AiReadinessDiagnostic';
import { EnterpriseStandards } from '../components/EnterpriseStandards';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Layers, 
  Database, 
  Sparkles, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Building, 
  ShoppingBag, 
  Code, 
  Target 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="w-full flex flex-col font-['Inter',sans-serif] text-[#F6F4EF] bg-[#0C0F14]">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          01 — HERO (Intelligence Orchestration Canvas)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0C0F14]">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #241447 1.5px, transparent 0)',
            backgroundSize: '36px 36px'
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#FF6B45] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B45] animate-pulse" />
              ORQOMI / INTELLIGENCE ORCHESTRATION
            </span>
            <span className="text-[#323D4F] font-mono">|</span>
            <span className="text-xs font-mono text-[#24BDBA] uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA]" />
              CHILE & GLOBAL DELIVERY
            </span>
          </div>

          {/* Main Headline & Supporting Value */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.03]">
                ORQUESTAMOS<br />
                <span className="text-[#FF6B45]">INTELIGENCIA.</span>
              </h1>
              <p className="text-lg sm:text-2xl text-[#24BDBA] font-['Space_Grotesk'] font-medium leading-snug">
                Conectamos IA, datos, sistemas y procesos para que tu organización pueda convertir información en acción.
              </p>
              <p className="text-base sm:text-lg text-[#D4D9E1] max-w-2xl leading-relaxed font-light">
                Diseñamos agentes, asistentes, automatizaciones, capas MCP y productos AI-native conectados con el conocimiento y los sistemas reales de una organización. Desde agregar inteligencia a una plataforma existente hasta construir ecosistemas donde múltiples agentes trabajan coordinadamente.
              </p>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 pb-2">
              <button
                onClick={() => onOpenContact()}
                className="w-full py-4 px-6 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-lg flex items-center justify-between transition-colors cursor-pointer shadow-xl shadow-[#FF6B45]/20"
              >
                <span>Conversemos sobre tu desafío</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/que-hacemos')}
                className="w-full py-4 px-6 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] text-xs font-mono uppercase tracking-wider rounded-lg flex items-center justify-between transition-colors cursor-pointer group"
              >
                <span className="group-hover:text-[#24BDBA] transition-colors">Ver lo que construimos</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C96A5] group-hover:text-[#24BDBA] transition-colors" />
              </button>
            </div>
          </div>

          {/* Below Hero Disciplines Bar */}
          <div className="py-3.5 px-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8C96A5]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">AGENTES IA</span>
              <span className="text-[#323D4F]">·</span>
              <span className="text-[#24BDBA] font-semibold">MCP</span>
              <span className="text-[#323D4F]">·</span>
              <span className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">AUTOMATIZACIÓN</span>
              <span className="text-[#323D4F]">·</span>
              <span className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">AI-NATIVE PRODUCTS</span>
              <span className="text-[#323D4F]">·</span>
              <span className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">DATOS</span>
              <span className="text-[#323D4F]">·</span>
              <span className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">INTEGRACIÓN</span>
            </div>
            <div className="text-[11px] text-[#FF6B45] font-semibold tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
              MULTIPLE INTELLIGENCES. ONE COORDINATED SYSTEM.
            </div>
          </div>

          {/* Interactive Orchestration Visualization */}
          <div className="mt-2">
            <OrchestrationHeroCanvas />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          02 — TRUST / EXPERIENCE SIGNAL & EXECUTIVE KPI METRICS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-y border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#181E29]">
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#24BDBA]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
                  EXPERIENCIA EN SISTEMAS QUE YA OPERAN EN EL MUNDO REAL
                </span>
              </div>
              <p className="text-sm text-[#D4D9E1] font-light leading-relaxed">
                La experiencia que da origen a ORQOMI combina desarrollo de plataformas de misión crítica, ingeniería de datos, automatización, educación digital e inteligencia artificial aplicada.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#8C96A5]">
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#F6F4EF]">Educación</span>
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#F6F4EF]">Construcción</span>
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#F6F4EF]">Sostenibilidad</span>
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#F6F4EF]">Plataformas Digitales</span>
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#F6F4EF]">Reportería & BI</span>
              <span className="px-3 py-1.5 bg-[#131924] border border-[#1E2638] rounded-md text-[#24BDBA]">Liderazgo Estratégico</span>
            </div>
          </div>

          {/* Executive Proof Metric Cards (Inspired by HatchWorks & NineTwoThree) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between hover:border-[#FF6B45]/40 transition-colors">
              <span className="text-3xl font-bold text-[#FF6B45] font-['Space_Grotesk']">+10 Años</span>
              <div className="mt-2 flex flex-col">
                <span className="text-xs text-[#F6F4EF] font-semibold">Ingeniería en Producción</span>
                <span className="text-[11px] text-[#8C96A5] font-sans font-light mt-0.5">Sistemas corporativos operando en industrias reguladas</span>
              </div>
            </div>

            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between hover:border-[#24BDBA]/40 transition-colors">
              <span className="text-3xl font-bold text-[#24BDBA] font-['Space_Grotesk']">4 a 8 Semanas</span>
              <div className="mt-2 flex flex-col">
                <span className="text-xs text-[#F6F4EF] font-semibold">Velocidad a MVP</span>
                <span className="text-[11px] text-[#8C96A5] font-sans font-light mt-0.5">Arquitecturas funcionales probadas con datos reales</span>
              </div>
            </div>

            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between hover:border-[#24BDBA]/40 transition-colors">
              <span className="text-3xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">100% IP</span>
              <div className="mt-2 flex flex-col">
                <span className="text-xs text-[#F6F4EF] font-semibold">Propiedad Total del Cliente</span>
                <span className="text-[11px] text-[#8C96A5] font-sans font-light mt-0.5">Código, repositorios y modelos en tu propia nube</span>
              </div>
            </div>

            <div className="p-5 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between hover:border-[#FF6B45]/40 transition-colors">
              <span className="text-3xl font-bold text-[#FF6B45] font-['Space_Grotesk']">Zero-Training</span>
              <div className="mt-2 flex flex-col">
                <span className="text-xs text-[#F6F4EF] font-semibold">Privacidad & Guardrails</span>
                <span className="text-[11px] text-[#8C96A5] font-sans font-light mt-0.5">Garantía contractual de no uso para reentrenamiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          03 — THE PROBLEM: THE GAP
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
              THE GAP // EL DESAFÍO ESTRUCTURAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.08]">
              TENER IA NO SIGNIFICA<br />
              <span className="text-[#FF6B45]">TENER INTELIGENCIA CONECTADA.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-4 text-base text-[#D4D9E1] leading-relaxed font-light">
              <p>
                Muchas organizaciones ya tienen modelos de IA, bases de datos, documentos, dashboards, aplicaciones y automatizaciones. El problema es que viven separados en silos operacionales.
              </p>
              <p>
                Una IA aislada puede responder preguntas genéricas. Pero una inteligencia conectada puede entender el contexto del negocio, consultar información real, usar herramientas de software y ejecutar trabajo de forma coordinada.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#10141D] border-l-4 border-[#FF6B45] rounded-r-xl flex flex-col gap-2">
              <span className="font-mono text-xs text-[#FF6B45] font-semibold uppercase">
                AXIOMA FUNDACIONAL
              </span>
              <p className="text-lg font-bold font-['Space_Grotesk'] text-[#F6F4EF]">
                THE MODEL IS NOT THE SYSTEM.
              </p>
              <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                El modelo es solo el componente cognitivo. El sistema inteligente es el producto de conectar datos, herramientas, políticas y supervisión humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          04 — ORQOMI ORCHESTRATION LAYER (Capa de Orquestación)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto">
          <OrchestrationLayerDiagram onNavigate={onNavigate} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05 — WHAT WE BUILD (LO QUE CONSTRUIMOS — 6 Blocks)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                CAPACIDADES DE INGENIERÍA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                LO QUE CONSTRUIMOS.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/que-hacemos')}
              className="px-5 py-2.5 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto group"
            >
              <span className="group-hover:text-[#24BDBA] transition-colors">Ver todas las capacidades</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
            </button>
          </div>

          {/* 6 Rich Capability Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#FF6B45] font-bold">{srv.number} // CAPACIDAD</span>
                    {srv.subconcept && (
                      <span className="text-[10px] uppercase text-[#24BDBA] tracking-wider font-semibold">
                        {srv.subconcept}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono text-[#FF6B45] mt-1">
                      {srv.headline}
                    </p>
                  </div>
                  <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                    {srv.description}
                  </p>

                  {/* Capabilities tags */}
                  <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs text-[#6E7A8A]">
                    {srv.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#24BDBA]" />
                        <span className="text-[#D4D9E1]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#181E29] flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => onNavigate(srv.route)}
                    className="text-[#24BDBA] hover:text-[#55DAD5] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>{srv.ctaText || 'Explorar'} →</span>
                  </button>
                  <button
                    onClick={() => onOpenContact(srv.title)}
                    className="px-3 py-1 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] rounded border border-[#1E2638] text-[11px] cursor-pointer"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          05.5 — INTERACTIVE AI READINESS & ARCHITECTURE DIAGNOSTIC
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0D13] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto">
          <AiReadinessDiagnostic onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          06 — SIGNATURE SECTION: FROM REPORTING TO CONVERSATION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto">
          <McpInteractiveDemo />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          07 — INDUSTRIES: LA TECNOLOGÍA ES TRANSVERSAL. EL CONTEXTO NO.
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                DOMINIO & CONTEXTO APLICADO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
                LA TECNOLOGÍA ES TRANSVERSAL.<br />
                <span className="text-[#FF6B45]">EL CONTEXTO NO.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-sm text-[#D4D9E1] leading-relaxed font-light">
              La IA funciona mejor cuando entiende la industria, sus datos, restricciones normativas, procesos y lenguaje. Diseñamos cada sistema a partir de la realidad de su entorno.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#24BDBA] font-semibold">{ind.title}</span>
                    {ind.isAlliedProject ? (
                      <span className="text-[10px] text-[#FF6B45] bg-[#FF6B45]/15 border border-[#FF6B45]/40 px-2 py-0.5 rounded font-semibold">
                        PROYECTO ALIADO
                      </span>
                    ) : ind.badge ? (
                      <span className="text-[10px] text-[#8C96A5] bg-[#161D2B] px-2 py-0.5 rounded border border-[#1E2638]">
                        {ind.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                    {ind.headline}
                  </h3>
                  <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181E29] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E7A8A] text-[11px] italic line-clamp-1 max-w-[200px]">
                    {ind.message}
                  </span>
                  <button
                    onClick={() => onNavigate(ind.route)}
                    className="p-1 text-[#F6F4EF] hover:text-[#24BDBA] cursor-pointer transition-colors"
                    aria-label={`Ver industria ${ind.title}`}
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          08 — EXPERIENCE: ORQOMI ES NUEVA. LA EXPERIENCIA QUE LA ORIGINA, NO.
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
              EXPERIENCE BEHIND ORQOMI
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                  ORQOMI ES NUEVA.<br />
                  <span className="text-[#24BDBA]">LA EXPERIENCIA QUE LA ORIGINA, NO.</span>
                </h2>
                <p className="text-xs font-mono text-[#8C96A5] mt-2">
                  Trayectoria previa del equipo fundador y partners tecnológicos estratégicos
                </p>
              </div>
              <button
                onClick={() => onNavigate('/experiencia')}
                className="px-5 py-2.5 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto group"
              >
                <span className="group-hover:text-[#24BDBA] transition-colors">Ver todos los casos</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
              </button>
            </div>
            <p className="text-sm text-[#D4D9E1] max-w-3xl leading-relaxed mt-2 font-light">
              ORQOMI nace después de años diseñando, desarrollando e integrando plataformas digitales, automatizaciones, sistemas de reportería y soluciones tecnológicas para organizaciones de distintas industrias. La evolución hacia agentes, asistentes y sistemas inteligentes es la continuación natural de ese recorrido.
            </p>
          </div>

          {/* 5 Featured Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES_DATA.map((cs) => (
              <div
                key={cs.id}
                className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-[#24BDBA] uppercase tracking-wider font-semibold">
                    {cs.category}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                      {cs.title}
                    </h3>
                    {cs.subtitle && (
                      <p className="text-xs font-mono text-[#FF6B45] mt-0.5">
                        {cs.subtitle}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                    {cs.summary}
                  </p>

                  {/* Flow representation */}
                  {cs.stepFlow && (
                    <div className="p-3 bg-[#090D13] border border-[#181E29] rounded-lg flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-[#D4D9E1]">
                      {cs.stepFlow.slice(0, 5).map((s, idx) => (
                        <React.Fragment key={idx}>
                          <span className={idx === 4 ? 'text-[#FF6B45] font-semibold' : ''}>{s}</span>
                          {idx < 4 && <span className="text-[#323D4F]">→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#181E29] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E7A8A] text-[11px] italic line-clamp-1">
                    {cs.takeaway}
                  </span>
                  <button
                    onClick={() => onNavigate(cs.route)}
                    className="p-1 text-[#F6F4EF] hover:text-[#24BDBA] cursor-pointer transition-colors"
                    aria-label={`Ver caso ${cs.title}`}
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Credibility disclaimer */}
          <div className="p-4 bg-[#10141D] border border-[#1E2638] rounded-xl flex items-center gap-3 text-xs text-[#8C96A5] font-mono">
            <ShieldCheck className="w-4 h-4 text-[#24BDBA] shrink-0" />
            <span>{FOUNDER_CREDIBILITY_DISCLAIMER}</span>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          09 — ORQOMI METHOD (O5)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <ProcessTimeline />
          <div className="text-right font-mono text-xs">
            <button
              onClick={() => onNavigate('/metodo')}
              className="text-[#24BDBA] hover:text-[#55DAD5] inline-flex items-center gap-1.5 cursor-pointer font-semibold"
            >
              <span>Conocer las 5 fases en detalle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          09.5 — ENTERPRISE BENCHMARK COMPARISON
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto">
          <EnterpriseComparison onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          10 — HOW WE CAN WORK TOGETHER (Engagement Models)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
              MODELOS DE COLABORACIÓN
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
              CÓMO PODEMOS TRABAJAR JUNTOS.
            </h2>
            <p className="text-sm sm:text-base text-[#D4D9E1] font-light leading-relaxed">
              No todas las empresas necesitan lo mismo. Diseñamos modalidades de participación claras y adaptadas a la madurez tecnológica de tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {ENGAGEMENT_MODELS.map((model) => (
              <div 
                key={model.number} 
                className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FF6B45] font-bold">{model.number} //</span>
                    <span className="text-[10px] text-[#24BDBA] uppercase font-semibold">ENGAGEMENT</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                    {model.name}
                  </h3>
                  <p className="text-xs text-[#8C96A5] font-sans font-light leading-relaxed">
                    {model.subtitle}
                  </p>
                  
                  <div className="pt-2 flex flex-col gap-1.5 text-[11px] text-[#D4D9E1]">
                    <span className="text-[10px] text-[#6E7A8A] uppercase">Entregables:</span>
                    {model.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#24BDBA] shrink-0 mt-1.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#181E29] text-[10px] text-[#6E7A8A] font-sans">
                  {model.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          11 — MODEL AGNOSTIC (Technologies We Build With)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
              FILOSOFÍA DE ARQUITECTURA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
              EL MODELO ES UN COMPONENTE.<br />
              <span className="text-[#24BDBA]">EL SISTEMA ES EL PRODUCTO.</span>
            </h2>
            <p className="text-sm text-[#D4D9E1] leading-relaxed mt-1 font-light">
              No diseñamos una estrategia tecnológica alrededor de una única marca o modelo. Seleccionamos modelos, herramientas y arquitecturas según los requerimientos de precisión, latencia, privacidad y costo de cada caso.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6E7A8A]">
              TECHNOLOGIES WE BUILD WITH (TECNOLOGÍAS CON LAS QUE CONSTRUIMOS):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 font-mono text-xs">
              {TECHNOLOGIES_WE_BUILD_WITH.map((tech, i) => (
                <div key={i} className="p-3.5 bg-[#10141D] border border-[#1E2638] rounded-lg flex flex-col justify-between hover:border-[#24BDBA] transition-colors">
                  <span className="text-[#F6F4EF] font-medium">{tech.name}</span>
                  <span className="text-[10px] text-[#24BDBA] mt-1">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          11.5 — ENTERPRISE STANDARDS & DELIVERY GUARANTEES
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto">
          <EnterpriseStandards />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          12 — AI PARTNER SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                ALIANZA PARA FACTORIES & CONSULTORAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.08]">
                TU CLIENTE NECESITA IA.<br />
                <span className="text-[#FF6B45]">NO NECESITAS CREAR UN EQUIPO COMPLETO DESDE CERO.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#D4D9E1] font-light leading-relaxed mt-1">
                Trabajamos con empresas de software y equipos tecnológicos que requieren capacidades especializadas para proyectos que incorporan agentes, RAG, MCP, LLMs, automatización y arquitecturas de IA.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/ai-partner')}
              className="px-6 py-3.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#FF6B45]/20"
            >
              <span>CONVERSEMOS SOBRE UNA ALIANZA →</span>
            </button>
          </div>

          <SoftwarePartnerCalculator onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          13 — ORQOMI LABS PREVIEW
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#24BDBA] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
                  ORQOMI LABS // INVESTIGACIÓN & PROTOTIPADO
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                EXPLORAMOS LO QUE TODAVÍA NO ES ESTÁNDAR.
              </h2>
              <p className="text-sm text-[#8C96A5] font-light max-w-2xl">
                Notebook experimental donde investigamos agentes, MCP, multiagentes, memoria, UI generativa y computer use.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/labs')}
              className="px-5 py-2.5 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto group"
            >
              <span className="group-hover:text-[#24BDBA] transition-colors">Explorar el laboratorio</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LABS_PROJECTS.slice(0, 3).map((lab) => (
              <div
                key={lab.id}
                className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#24BDBA] font-semibold">{lab.code}</span>
                    <span className="text-[10px] text-[#F6F4EF] bg-[#161D2B] px-2 py-0.5 rounded border border-[#1E2638]">
                      {lab.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-xs text-[#8C96A5] leading-relaxed font-light">
                    {lab.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#181E29] text-[11px] font-mono text-[#6E7A8A]">
                  {lab.technicalSpecs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          14 — INSIGHTS (Editorial Hub Preview)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#0E131A] border-t border-[#181E29]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                PUBLICACIONES & CRITERIO EDITORIAL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
                INSIGHTS & ANÁLISIS TÉCNICO.
              </h2>
              <p className="text-sm text-[#8C96A5] font-light">
                Artículos, guías y criterios de arquitectura sobre orquestación de IA en Chile y Latinoamérica.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/insights')}
              className="px-5 py-2.5 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto group"
            >
              <span className="group-hover:text-[#24BDBA] transition-colors">Ver todos los artículos</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B45]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {INSIGHTS_ARTICLES.slice(0, 3).map((art) => (
              <div
                key={art.id}
                onClick={() => onNavigate('/insights')}
                className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-4 hover:border-[#24BDBA]/60 transition-colors cursor-pointer group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] text-[#6E7A8A]">
                    <span className="text-[#24BDBA] font-semibold">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#8C96A5] font-sans font-light line-clamp-3">
                    {art.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#181E29] flex items-center justify-between text-[#F6F4EF] group-hover:text-[#24BDBA]">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          15 — FINAL CTA (Closing Question)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] border-t border-[#181E29] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #241447 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B45] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B45] font-semibold">
              SIGUIENTE PASO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.08] tracking-tight">
            ¿QUÉ PODRÍA HACER<br />
            TU ORGANIZACIÓN SI SUS SISTEMAS<br />
            PUDIERAN <span className="text-[#FF6B45]">TRABAJAR JUNTOS?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D4D9E1] max-w-2xl leading-relaxed font-light">
            No necesitas llegar con la solución definida. Cuéntanos el problema, el proceso o la plataforma que quieres llevar a una nueva etapa.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto font-mono text-xs">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer shadow-xl shadow-[#FF6B45]/25"
            >
              <span>CONVERSEMOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/que-hacemos')}
              className="w-full sm:w-auto px-8 py-4 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explorar nuestras capacidades</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
