import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SoftwarePartnerCalculator } from '../components/SoftwarePartnerCalculator';
import { ArrowRight, ShieldCheck, Code2, Users2, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface AiPartnerPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const AiPartnerPage: React.FC<AiPartnerPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <span className="text-[#FF6B45] font-semibold">AI Partner // Software Factories</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B45] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
              PROGRAMA DE ALIANZA // SOFTWARE FACTORIES & TECH TEAMS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.06]">
            TU CLIENTE NECESITA IA.<br />
            <span className="text-[#FF6B45]">NO NECESITAS CREAR UN EQUIPO COMPLETO DESDE CERO.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#D4D9E1] font-light leading-relaxed max-w-3xl">
            Trabajamos con empresas de software, consultoras y equipos tecnológicos que requieren capacidades especializadas para proyectos que incorporan agentes, RAG, MCP, LLMs, automatización, sistemas multiagente, arquitectura de IA, evaluación e integraciones empresariales.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <button
              onClick={() => onOpenContact('Alianza AI Partner')}
              className="px-8 py-4 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors cursor-pointer shadow-xl shadow-[#FF6B45]/20"
            >
              <span>CONVERSEMOS SOBRE UNA ALIANZA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:hola@orqomi.com?subject=Alianza%20AI%20Partner"
              className="px-6 py-4 bg-[#131924] hover:bg-[#1A2232] text-[#F6F4EF] border border-[#1E2638] uppercase tracking-wider rounded-lg transition-colors"
            >
              hola@orqomi.com
            </a>
          </div>
        </div>

        {/* 4 Modalities of Engagement */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
              FLEXIBILIDAD CONTRACTUAL & OPERATIVA
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
              Cuatro formas de participar juntos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {/* 01 Behind Your Brand */}
            <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#FF6B45]/60 transition-colors">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#FF6B45] font-bold">01 // MARCA BLANCA</span>
                <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                  Behind Your Brand
                </h3>
                <p className="text-xs text-[#8C96A5] leading-relaxed font-sans font-light">
                  Operamos de forma 100% invisible para el cliente final como tu unidad especializada interna de IA. Todo el código y los entregables llevan tu marca.
                </p>
              </div>
              <span className="text-[11px] text-[#24BDBA] pt-3 border-t border-[#181E29]">
                Ideal para: Software Factories consolidadas.
              </span>
            </div>

            {/* 02 Alongside Your Team */}
            <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#24BDBA] font-bold">02 // CO-DESARROLLO</span>
                <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                  Alongside Your Team
                </h3>
                <p className="text-xs text-[#8C96A5] leading-relaxed font-sans font-light">
                  Nos presentamos conjuntamente ante el cliente como el partner tecnológico experto en orquestación de IA, fortaleciendo la credenciales de tu propuesta.
                </p>
              </div>
              <span className="text-[11px] text-[#24BDBA] pt-3 border-t border-[#181E29]">
                Ideal para: Consultoras y licitaciones enterprise.
              </span>
            </div>

            {/* 03 Component Delivery */}
            <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#FF6B45]/60 transition-colors">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#FF6B45] font-bold">03 // COMPONENTE LLAVE EN MANO</span>
                <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                  Component Delivery
                </h3>
                <p className="text-xs text-[#8C96A5] leading-relaxed font-sans font-light">
                  Tu equipo construye el software transaccional y nosotros diseñamos y entregamos el servidor MCP o el agente con contratos de API estrictamente definidos.
                </p>
              </div>
              <span className="text-[11px] text-[#24BDBA] pt-3 border-t border-[#181E29]">
                Ideal para: Equipos que requieren velocidad sin desvíos.
              </span>
            </div>

            {/* 04 Direct Engagement */}
            <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#24BDBA] font-bold">04 // ADVISORY & REVIEWS</span>
                <h3 className="text-xl font-bold text-[#F6F4EF] font-['Space_Grotesk']">
                  AI Architecture Advisory
                </h3>
                <p className="text-xs text-[#8C96A5] leading-relaxed font-sans font-light">
                  Revisamos tu arquitectura técnica, evaluamos latencias y presupuestos de tokens, y diseñamos testbeds de derivación para tus clientes.
                </p>
              </div>
              <span className="text-[11px] text-[#24BDBA] pt-3 border-t border-[#181E29]">
                Ideal para: CTOs y arquitectos de software.
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Scope Configurator */}
        <div className="mt-4">
          <SoftwarePartnerCalculator onOpenContact={onOpenContact} />
        </div>

        {/* Trust and Engineering Standards */}
        <div className="p-8 sm:p-10 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#24BDBA] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#24BDBA]" />
            <span>ESTÁNDARES DE INGENIERÍA & CONFIDENCIALIDAD PARA PARTNERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#D4D9E1]">
            <div className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex flex-col gap-2">
              <span className="text-[#FF6B45] font-bold">NDA BIDIRECCIONAL</span>
              <p className="text-[#8C96A5] font-sans font-light">
                Firmamos acuerdos de no competencia y confidencialidad estrictos previo a revisar código o datos de tus clientes.
              </p>
            </div>
            <div className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex flex-col gap-2">
              <span className="text-[#24BDBA] font-bold">CÓDIGO EN TU REPOSITORIO</span>
              <p className="text-[#8C96A5] font-sans font-light">
                Todo el código se commitea directamente en tus repositorios de GitHub/GitLab, con pruebas unitarias y documentación técnica.
              </p>
            </div>
            <div className="p-4 bg-[#131924] border border-[#1E2638] rounded-lg flex flex-col gap-2">
              <span className="text-[#55DAD5] font-bold">TRANSFERENCIA DE CONOCIMIENTO</span>
              <p className="text-[#8C96A5] font-sans font-light">
                Capacitamos a tus desarrolladores para que puedan mantener y evolucionar la capa de orquestación en el largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
