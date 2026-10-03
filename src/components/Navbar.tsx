import React, { useState, useEffect } from 'react';
import { OrqomiLogo } from './OrqomiLogo';
import { PageRoute } from '../types';
import { Menu, X, Globe, ChevronDown, ArrowUpRight, Sparkles, Cpu, Layers, Database, GraduationCap, Building, ShoppingBag, Code, Target, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  lang: 'es' | 'en';
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  lang,
  onToggleLang,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'que-hacemos' | 'industrias' | 'experiencia' | 'insights' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setActiveMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 font-mono ${
          isScrolled 
            ? 'bg-[#0C0F14]/95 backdrop-blur-md border-b border-[#241447]/60 shadow-2xl' 
            : 'bg-[#0C0F14]/85 backdrop-blur-sm border-b border-[#1A1F29]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* ZONE 1: Brand Wordmark */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-[#FF6B45] rounded p-1 -ml-1 transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="ORQOMI - Ir a Inicio"
          >
            <OrqomiLogo size="md" showWordmark={true} />
          </button>

          {/* ZONE 2: Desktop Navigation with Mega-Menus */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-mono text-[#A4A9B0]">
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 relative ${
                currentRoute === '/' ? 'text-[#F6F4EF] font-semibold' : ''
              }`}
            >
              {lang === 'es' ? 'Inicio' : 'Home'}
              {currentRoute === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B45]" />
              )}
            </button>

            {/* MEGA MENU: QUÉ HACEMOS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('que-hacemos')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => handleNavClick('/que-hacemos')}
                className={`flex items-center gap-1 hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 ${
                  currentRoute.startsWith('/soluciones') || currentRoute === '/que-hacemos'
                    ? 'text-[#F6F4EF] font-semibold'
                    : ''
                }`}
              >
                <span>{lang === 'es' ? 'Qué hacemos' : 'Capabilities'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeMenu === 'que-hacemos' && (
                <div className="absolute top-full -left-12 w-[520px] bg-[#0E1219] border border-[#241447] rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-3 z-50 animate-fadeIn">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#1E2533] flex items-center justify-between text-[11px] text-[#24BDBA] font-semibold">
                    <span>CAPACIDADES DE ORQUESTACIÓN</span>
                    <button onClick={() => handleNavClick('/que-hacemos')} className="hover:underline flex items-center gap-1 text-[#F6F4EF]">
                      <span>Ver todo</span>
                      <ArrowUpRight className="w-3 h-3 text-[#FF6B45]" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleNavClick('/soluciones/capa-inteligencia-mcp')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA] flex items-center justify-between">
                      <span>Capa de Inteligencia & MCP</span>
                      <span className="text-[10px] text-[#FF6B45] font-mono">CORE</span>
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">Model Context Protocol, APIs y herramientas empresariales.</p>
                  </button>

                  <button
                    onClick={() => handleNavClick('/soluciones/agentes-ia')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA]">
                      Agentes & Automatización
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">Sistemas multiagente con guardrails y human-in-the-loop.</p>
                  </button>

                  <button
                    onClick={() => handleNavClick('/soluciones/ia-conversacional')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA]">
                      IA Conversacional
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">Consultas en lenguaje natural sobre bases de conocimiento.</p>
                  </button>

                  <button
                    onClick={() => handleNavClick('/soluciones/productos-ai-native')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA]">
                      Productos AI-Native
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">Arquitectura de software con inteligencia en su núcleo.</p>
                  </button>

                  <button
                    onClick={() => handleNavClick('/soluciones/datos-conversacionales')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA]">
                      Datos Conversacionales
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">De mirar dashboards fijos a dialogar con tus métricas.</p>
                  </button>

                  <button
                    onClick={() => handleNavClick('/soluciones/ia-educacion')}
                    className="p-3 text-left bg-[#131923] hover:bg-[#1A2230] border border-[#1E2636] hover:border-[#24BDBA] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="text-xs font-semibold text-[#F6F4EF] group-hover:text-[#24BDBA]">
                      IA para Educación
                    </div>
                    <p className="text-[11px] text-[#5D6672] mt-1 line-clamp-2">Integraciones nativas en Moodle y analítica pedagógica.</p>
                  </button>
                </div>
              )}
            </div>

            {/* AI PARTNER DIRECT LINK */}
            <button
              onClick={() => handleNavClick('/ai-partner')}
              className={`hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 relative ${
                currentRoute === '/ai-partner' ? 'text-[#FF6B45] font-semibold' : ''
              }`}
            >
              <span className="text-[#FF6B45] font-bold">AI Partner</span>
            </button>

            {/* MEGA MENU: INDUSTRIAS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('industrias')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => handleNavClick('/industrias')}
                className={`flex items-center gap-1 hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 ${
                  currentRoute.startsWith('/industrias') ? 'text-[#F6F4EF] font-semibold' : ''
                }`}
              >
                <span>{lang === 'es' ? 'Industrias' : 'Industries'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeMenu === 'industrias' && (
                <div className="absolute top-full -left-20 w-80 bg-[#0E1219] border border-[#241447] rounded-xl shadow-2xl p-3 flex flex-col gap-1 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNavClick('/industrias')}
                    className="text-left px-3 py-2 text-[11px] uppercase tracking-wider text-[#24BDBA] hover:bg-[#131923] rounded flex items-center justify-between"
                  >
                    <span>Panorama de Industrias</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                  <div className="h-px bg-[#1E2533] my-1" />
                  <button
                    onClick={() => handleNavClick('/industrias/educacion')}
                    className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded flex items-center gap-2"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-[#24BDBA]" />
                    <span>Educación</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/industrias/construccion-sostenibilidad')}
                    className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded flex items-center gap-2"
                  >
                    <Building className="w-3.5 h-3.5 text-[#24BDBA]" />
                    <span>Construcción & Sostenibilidad</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/industrias/retail')}
                    className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded flex items-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#24BDBA]" />
                    <span>Retail</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/industrias/software-tecnologia')}
                    className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded flex items-center gap-2"
                  >
                    <Code className="w-3.5 h-3.5 text-[#24BDBA]" />
                    <span>Software & Tecnología</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/industrias/liderazgo')}
                    className="text-left px-3 py-2 text-xs text-[#FF6B45] hover:bg-[#131923] rounded flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-[#FF6B45]" />
                      <span>Liderazgo (Signal Director)</span>
                    </span>
                    <span className="text-[9px] bg-[#FF6B45]/15 px-1 py-0.5 rounded text-[#FF6B45]">CONFIDENCIAL</span>
                  </button>
                </div>
              )}
            </div>

            {/* MEGA MENU: EXPERIENCIA */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('experiencia')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => handleNavClick('/experiencia')}
                className={`flex items-center gap-1 hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 ${
                  currentRoute.startsWith('/experiencia') ? 'text-[#F6F4EF] font-semibold' : ''
                }`}
              >
                <span>{lang === 'es' ? 'Experiencia' : 'Experience'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeMenu === 'experiencia' && (
                <div className="absolute top-full -left-20 w-80 bg-[#0E1219] border border-[#241447] rounded-xl shadow-2xl p-3 flex flex-col gap-1 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNavClick('/experiencia')}
                    className="text-left px-3 py-2 text-[11px] uppercase tracking-wider text-[#24BDBA] hover:bg-[#131923] rounded flex items-center justify-between"
                  >
                    <span>Casos de Estudio</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                  <div className="h-px bg-[#1E2533] my-1" />
                  <button onClick={() => handleNavClick('/experiencia/rita')} className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded">
                    • R.I.T.A. (Asistente Geodatos Residuos)
                  </button>
                  <button onClick={() => handleNavClick('/experiencia/dashboard-ambiental')} className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded">
                    • Dashboard Ambiental (Faenas)
                  </button>
                  <button onClick={() => handleNavClick('/experiencia/hub-ecc')} className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded">
                    • HUB Economía Circular
                  </button>
                  <button onClick={() => handleNavClick('/experiencia/red-ecc')} className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded">
                    • Red ECC (Infraestructura Digital)
                  </button>
                  <button onClick={() => handleNavClick('/experiencia/signal-director')} className="text-left px-3 py-2 text-xs text-[#FF6B45] hover:bg-[#131923] rounded">
                    • Signal Director (Inteligencia Estratégica)
                  </button>
                </div>
              )}
            </div>

            {/* CÓMO TRABAJAMOS (MÉTODO O5) */}
            <button
              onClick={() => handleNavClick('/metodo')}
              className={`hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 relative ${
                currentRoute === '/metodo' ? 'text-[#F6F4EF] font-semibold' : ''
              }`}
            >
              <span>{lang === 'es' ? 'Cómo trabajamos' : 'Method'}</span>
              {currentRoute === '/metodo' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B45]" />
              )}
            </button>

            {/* INSIGHTS & LABS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('insights')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => handleNavClick('/insights')}
                className={`flex items-center gap-1 hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 ${
                  currentRoute === '/insights' || currentRoute === '/labs' ? 'text-[#F6F4EF] font-semibold' : ''
                }`}
              >
                <span>Insights</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeMenu === 'insights' && (
                <div className="absolute top-full -left-12 w-64 bg-[#0E1219] border border-[#241447] rounded-xl shadow-2xl p-3 flex flex-col gap-1 z-50 animate-fadeIn">
                  <button onClick={() => handleNavClick('/insights')} className="text-left px-3 py-2 text-xs text-[#F6F4EF] hover:bg-[#131923] hover:text-[#24BDBA] rounded">
                    • Artículos & Ensayos Técnicos
                  </button>
                  <button onClick={() => handleNavClick('/labs')} className="text-left px-3 py-2 text-xs text-[#24BDBA] hover:bg-[#131923] rounded flex items-center justify-between">
                    <span>• ORQOMI Labs</span>
                    <span className="text-[10px] text-[#24BDBA] border border-[#24BDBA]/30 px-1 rounded">I+D</span>
                  </button>
                </div>
              )}
            </div>

            {/* NOSOTROS */}
            <button
              onClick={() => handleNavClick('/nosotros')}
              className={`hover:text-[#F6F4EF] transition-colors cursor-pointer py-1 relative ${
                currentRoute === '/nosotros' ? 'text-[#F6F4EF] font-semibold' : ''
              }`}
            >
              {lang === 'es' ? 'Nosotros' : 'About'}
              {currentRoute === '/nosotros' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B45]" />
              )}
            </button>
          </nav>

          {/* ZONE 3: Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#A4A9B0] hover:text-[#F6F4EF] transition-colors border border-transparent hover:border-[#241447] rounded cursor-pointer"
              title="Cambiar idioma / Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#24BDBA]" />
              <span className="uppercase">{lang}</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-mono font-bold text-white bg-[#FF6B45] hover:bg-[#C9472D] transition-colors rounded-lg uppercase tracking-wider cursor-pointer whitespace-nowrap shadow-lg shadow-[#FF6B45]/20 flex items-center gap-1.5"
            >
              <span>{lang === 'es' ? 'CONVERSEMOS' : "LET'S TALK"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="px-2 py-1 text-xs font-mono text-[#A4A9B0] border border-[#241447] rounded"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F6F4EF] hover:bg-[#161B24] rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B45]" /> : <Menu className="w-6 h-6 text-[#24BDBA]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-40 bg-[#0C0F14] border-t border-[#241447] p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-fadeIn font-mono">
          <div className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute === '/' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => handleNavClick('/que-hacemos')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute === '/que-hacemos' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Qué hacemos (Capacidades)
            </button>
            <div className="pl-3 flex flex-col gap-2 text-xs text-[#A4A9B0]">
              <button onClick={() => handleNavClick('/soluciones/capa-inteligencia-mcp')} className="text-left py-1 hover:text-[#24BDBA]">
                • Capa de Inteligencia & MCP
              </button>
              <button onClick={() => handleNavClick('/soluciones/agentes-ia')} className="text-left py-1 hover:text-[#24BDBA]">
                • Agentes & Automatización
              </button>
              <button onClick={() => handleNavClick('/soluciones/ia-conversacional')} className="text-left py-1 hover:text-[#24BDBA]">
                • IA Conversacional
              </button>
              <button onClick={() => handleNavClick('/soluciones/productos-ai-native')} className="text-left py-1 hover:text-[#24BDBA]">
                • Productos AI-Native
              </button>
              <button onClick={() => handleNavClick('/soluciones/datos-conversacionales')} className="text-left py-1 hover:text-[#24BDBA]">
                • Datos Conversacionales
              </button>
              <button onClick={() => handleNavClick('/soluciones/ia-educacion')} className="text-left py-1 hover:text-[#24BDBA]">
                • IA para Educación
              </button>
            </div>

            <button
              onClick={() => handleNavClick('/ai-partner')}
              className={`text-left py-2 border-b border-[#1E2533] text-[#FF6B45] font-bold`}
            >
              AI Partner (Software Factories)
            </button>

            <button
              onClick={() => handleNavClick('/industrias')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute.startsWith('/industrias') ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Industrias (Educación, Construcción, Retail, Tech, Liderazgo)
            </button>

            <button
              onClick={() => handleNavClick('/experiencia')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute.startsWith('/experiencia') ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Experiencia (R.I.T.A., Dashboard Ambiental, HUB ECC, Signal Director)
            </button>

            <button
              onClick={() => handleNavClick('/metodo')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute === '/metodo' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Cómo trabajamos (Método O5)
            </button>

            <button
              onClick={() => handleNavClick('/labs')}
              className={`text-left py-2 border-b border-[#1E2533] flex items-center justify-between ${
                currentRoute === '/labs' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              <span>ORQOMI Labs</span>
              <span className="text-[10px] text-[#24BDBA] border border-[#24BDBA]/30 px-1.5 py-0.5 rounded">I+D</span>
            </button>

            <button
              onClick={() => handleNavClick('/insights')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute === '/insights' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Insights & Artículos
            </button>

            <button
              onClick={() => handleNavClick('/nosotros')}
              className={`text-left py-2 border-b border-[#1E2533] ${
                currentRoute === '/nosotros' ? 'text-[#FF6B45] font-semibold' : 'text-[#F6F4EF]'
              }`}
            >
              Nosotros
            </button>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 text-center text-xs font-mono font-bold text-white bg-[#FF6B45] rounded-lg uppercase tracking-wider shadow-lg shadow-[#FF6B45]/20 flex items-center justify-center gap-2"
            >
              <span>CONVERSEMOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
