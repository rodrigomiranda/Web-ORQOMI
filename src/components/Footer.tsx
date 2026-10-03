import React from 'react';
import { OrqomiLogo } from './OrqomiLogo';
import { PageRoute } from '../types';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="w-full bg-[#080B0F] border-t border-[#181E29] text-[#5D6672] text-xs pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <button 
              onClick={() => onNavigate('/')} 
              className="text-left cursor-pointer focus:outline-none"
            >
              <OrqomiLogo size="md" showWordmark={true} />
            </button>
            <p className="text-[#D4D9E1] text-xs leading-relaxed max-w-sm font-['Inter',sans-serif]">
              Orquestamos inteligencia. Diseñamos agentes, asistentes, automatizaciones y plataformas de IA conectadas a tus datos, procesos y sistemas.
            </p>
            <div className="flex flex-col gap-1.5 pt-2 text-[11px] text-[#8C96A5]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
                <span className="text-[#F6F4EF]">Santiago, Chile</span>
                <span className="text-[#5D6672]">// Capacidad regional y global</span>
              </div>
              <div>
                Contacto: <a href="mailto:hola@orqomi.com" className="text-[#24BDBA] hover:text-[#55DAD5] transition-colors">hola@orqomi.com</a>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Capacidades (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F6F4EF] font-semibold flex items-center gap-1.5">
              <span className="w-1 h-3 bg-[#24BDBA] rounded-xs" />
              Capacidades
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <button onClick={() => onNavigate('/servicios/agentes-ia')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Agentes y Asistentes de IA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/mcp')} className="hover:text-[#24BDBA] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <span>MCP & Integración</span>
                  <span className="text-[10px] text-[#FF6B45] font-mono font-semibold">CORE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/automatizacion-inteligente')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Automatización Inteligente
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/plataformas-ia')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Plataformas AI-Native
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/datos-conversacionales')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Datos Conversacionales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/ia-educacion-moodle')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  IA para Moodle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/servicios/ai-partner')} className="hover:text-[#FF6B45] transition-colors text-left cursor-pointer font-medium">
                  AI Partner para Software Factories
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Industrias (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F6F4EF] font-semibold flex items-center gap-1.5">
              <span className="w-1 h-3 bg-[#FF6B45] rounded-xs" />
              Industrias
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <button onClick={() => onNavigate('/industrias/educacion')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Educación y EdTech
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industrias/construccion-sostenibilidad')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Construcción & Sostenibilidad
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industrias/retail')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Retail y Operaciones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industrias/software-tecnologia')} className="hover:text-[#F6F4EF] transition-colors text-left cursor-pointer">
                  Software y Startups
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industrias/liderazgo')} className="hover:text-[#24BDBA] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <span>Liderazgo (Signal Director)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick CTA Box (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F6F4EF] font-semibold">
              Exploración
            </span>
            <p className="text-[11px] text-[#8C96A5] leading-relaxed font-['Inter',sans-serif]">
              ¿Tienes un desafío de integración o automatización con IA?
            </p>
            <button
              onClick={onOpenContact}
              className="px-3.5 py-2.5 bg-[#131923] hover:bg-[#1A2230] text-[#F6F4EF] border border-[#1E2638] hover:border-[#24BDBA] rounded text-left transition-colors cursor-pointer flex items-center justify-between text-xs group"
            >
              <span className="group-hover:text-[#24BDBA] transition-colors">Conversemos</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
            </button>
          </div>
        </div>

        {/* Disclaimer on Founder Credibility */}
        <div className="p-4 bg-[#0E131A] border border-[#1E2638] rounded flex items-start gap-3 text-[11px] text-[#8C96A5]">
          <ShieldCheck className="w-4 h-4 text-[#24BDBA] shrink-0 mt-0.5" />
          <div className="leading-relaxed font-['Inter',sans-serif]">
            <span className="text-[#F6F4EF] font-medium">Transparencia institucional:</span> Los casos y plataformas descritos corresponden a proyectos desarrollados como parte de la trayectoria previa del equipo fundador de ORQOMI y sus alianzas tecnológicas estratégicas.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-[#181E29] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5D6672]">
          <div>
            © {new Date().getFullYear()} ORQOMI Systems SpA. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/privacidad')} className="hover:text-[#F6F4EF] transition-colors cursor-pointer">
              Privacidad y Datos
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/terminos')} className="hover:text-[#F6F4EF] transition-colors cursor-pointer">
              Términos de Servicio
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/labs')} className="hover:text-[#24BDBA] transition-colors cursor-pointer">
              ORQOMI Labs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
