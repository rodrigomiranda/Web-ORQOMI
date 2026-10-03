import React from 'react';
import { PageRoute } from '../types';
import { Shield, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ currentRoute, onNavigate }) => {
  const isPrivacy = currentRoute === '/privacidad';

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 text-xs font-mono text-[#8C96A5] hover:text-[#F6F4EF] cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#24BDBA]" />
          <span>Volver al inicio</span>
        </button>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#24BDBA]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
              DOCUMENTACIÓN LEGAL & CUMPLIMIENTO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
            {isPrivacy ? 'Política de Privacidad y Tratamiento de Datos' : 'Términos y Condiciones de Servicio'}
          </h1>
          <span className="text-xs font-mono text-[#6E7A8A]">
            Última actualización: Octubre 2025 // Santiago, Chile
          </span>
        </div>

        <div className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-6 text-xs text-[#D4D9E1] leading-relaxed font-light">
          {isPrivacy ? (
            <>
              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#24BDBA] rounded-xs" />
                  1. Principio de Soberanía y Privacidad de Datos en IA
                </h2>
                <p>
                  En ORQOMI diseñamos sistemas de inteligencia artificial bajo el principio estricto de retención cero y no entrenamiento público. Los datos corporativos, consultas y documentos procesados por nuestros servidores MCP y agentes nunca son utilizados para entrenar modelos de lenguaje públicos ni de terceros.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#24BDBA] rounded-xs" />
                  2. Datos Recopilados en este Sitio Web
                </h2>
                <p>
                  La información ingresada a través de formularios de contacto (nombre, email corporativo, empresa, cargo y descripción de requerimientos) se utiliza exclusivamente para evaluar la factibilidad técnica del proyecto y coordinar comunicaciones directas. No comercializamos ni transferimos bases de datos a terceros.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#24BDBA] rounded-xs" />
                  3. Ley de Protección de la Vida Privada (Chile)
                </h2>
                <p>
                  El tratamiento de datos personales se rige conforme a la Ley N° 19.628 de la República de Chile y estándares internacionales de protección de datos (GDPR / ISO 27001). Cualquier titular puede solicitar la rectificación o eliminación de sus antecedentes escribiendo a hola@orqomi.com.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#FF6B45] rounded-xs" />
                  1. Naturaleza de los Servicios
                </h2>
                <p>
                  ORQOMI provee servicios de arquitectura de software, ingeniería de modelos de inteligencia artificial, servidores MCP, automatización de procesos y consultoría técnica especializada. Todo proyecto productivo se rige mediante una propuesta técnica y un acuerdo de nivel de servicio (SLA) específico.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#FF6B45] rounded-xs" />
                  2. Propiedad Intelectual
                </h2>
                <p>
                  El diseño de marca, marcas registradas, esquemas visuales, código fuente y contenidos editoriales presentes en orqomi.com son propiedad de ORQOMI Systems. La propiedad del software y agentes desarrollados a medida para clientes se estipula contractualmente en cada orden de trabajo.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-[#F6F4EF] font-['Space_Grotesk'] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#FF6B45] rounded-xs" />
                  3. Jurisdicción Aplicable
                </h2>
                <p>
                  Cualquier controversia derivada del uso del sitio web o de la interpretación de los presentes términos se someterá a la jurisdicción de los tribunales ordinarios de justicia de la ciudad de Santiago de Chile.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
