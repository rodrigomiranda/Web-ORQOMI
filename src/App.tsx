/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriasPage } from './pages/IndustriasPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { LabsPage } from './pages/LabsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { MetodoPage } from './pages/MetodoPage';
import { AiPartnerPage } from './pages/AiPartnerPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalDefaultNeed, setModalDefaultNeed] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Handle URL hash / path state synchronization
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      if (path && isValidRoute(path)) {
        setCurrentRoute(path);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isValidRoute = (path: string): boolean => {
    const validRoutes: PageRoute[] = [
      '/',
      '/que-hacemos',
      '/soluciones/capa-inteligencia-mcp',
      '/soluciones/agentes-ia',
      '/soluciones/automatizacion',
      '/soluciones/ia-conversacional',
      '/soluciones/productos-ai-native',
      '/soluciones/datos-conversacionales',
      '/soluciones/ia-educacion',
      '/servicios/agentes-ia',
      '/servicios/mcp',
      '/servicios/automatizacion-inteligente',
      '/servicios/plataformas-ia',
      '/servicios/datos-conversacionales',
      '/servicios/ia-educacion-moodle',
      '/servicios/ai-partner',
      '/ai-partner',
      '/industrias',
      '/industrias/educacion',
      '/industrias/construccion-sostenibilidad',
      '/industrias/retail',
      '/industrias/software-tecnologia',
      '/industrias/liderazgo',
      '/signal-director',
      '/experiencia',
      '/experiencia/rita',
      '/experiencia/dashboard-ambiental',
      '/experiencia/hub-ecc',
      '/experiencia/hub-economia-circular',
      '/experiencia/red-ecc',
      '/experiencia/moodle-ai',
      '/experiencia/signal-director',
      '/metodo',
      '/labs',
      '/nosotros',
      '/insights',
      '/contacto',
      '/privacidad',
      '/terminos'
    ];
    return validRoutes.includes(path as PageRoute);
  };

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (need?: string) => {
    setModalDefaultNeed(need);
    setContactModalOpen(true);
  };

  const handleToggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  // Render view router based on currentRoute
  const renderCurrentView = () => {
    if (currentRoute === '/') {
      return (
        <HomePage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (
      currentRoute === '/que-hacemos' || 
      currentRoute.startsWith('/soluciones/') || 
      currentRoute.startsWith('/servicios/')
    ) {
      return (
        <ServicesPage 
          currentRoute={currentRoute}
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/ai-partner') {
      return (
        <AiPartnerPage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/metodo') {
      return (
        <MetodoPage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (
      currentRoute === '/industrias' || 
      currentRoute.startsWith('/industrias/') || 
      currentRoute === '/signal-director'
    ) {
      return (
        <IndustriasPage 
          currentRoute={currentRoute}
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/experiencia' || currentRoute.startsWith('/experiencia/')) {
      return (
        <ExperiencePage 
          currentRoute={currentRoute}
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/labs') {
      return (
        <LabsPage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/nosotros') {
      return (
        <AboutPage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/insights') {
      return (
        <InsightsPage 
          onNavigate={navigateTo} 
          onOpenContact={handleOpenContact} 
        />
      );
    }

    if (currentRoute === '/contacto') {
      return (
        <ContactPage 
          onNavigate={navigateTo} 
        />
      );
    }

    if (currentRoute === '/privacidad' || currentRoute === '/terminos') {
      return (
        <LegalPage 
          currentRoute={currentRoute}
          onNavigate={navigateTo} 
        />
      );
    }

    // Default fallback
    return (
      <HomePage 
        onNavigate={navigateTo} 
        onOpenContact={handleOpenContact} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-[#F6F4EF] flex flex-col justify-between selection:bg-[#FF6B45] selection:text-white font-['Inter',sans-serif]">
      {/* 1-Row Top Bar Navigation Contract */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>

      {/* Quiet Corporate Footer */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenContact={() => handleOpenContact()} 
      />

      {/* Interactive Contact Drawer Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultNeed={modalDefaultNeed}
      />
    </div>
  );
}
