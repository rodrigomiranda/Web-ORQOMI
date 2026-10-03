import React from 'react';
import { ShieldCheck, Lock, Award, Clock, Code2, Cpu } from 'lucide-react';

export const EnterpriseStandards: React.FC = () => {
  const standards = [
    {
      icon: Lock,
      title: 'Zero-Training Data Privacy',
      subtitle: 'Tus datos nunca entrenan modelos públicos',
      description: 'Garantizamos mediante contratos BAA/NDA y configuración de APIs empresariales que ningún dato, documento o interacción de tu organización sea utilizado para entrenar modelos de IA de terceros.'
    },
    {
      icon: Code2,
      title: '100% Código & Propiedad Intelectual',
      subtitle: 'Cero vendor lock-in',
      description: 'Todo el software, arquitecturas MCP, pipelines de agentes, conectores y documentación se despliegan en tus propios repositorios y nube. Eres dueño absoluto de tu infraestructura.'
    },
    {
      icon: Clock,
      title: 'MVP en Producción en 4 a 8 Semanas',
      subtitle: 'Velocidad de ejecución sin burocracia',
      description: 'A través de nuestro Método O5 pasamos del diagnóstico a un prototipo validado y a un MVP funcional en producción en semanas, no en semestres de consultoría teórica.'
    },
    {
      icon: ShieldCheck,
      title: 'Gobernanza & Determinismo',
      subtitle: 'Guardrails y supervisión humana activa',
      description: 'No dejamos que los modelos operen a ciegas. Diseñamos compuertas de aprobación humana (Human-in-the-Loop), presupuestos de tokens, logs de auditoría y límites estrictos de permisos.'
    },
    {
      icon: Cpu,
      title: 'Arquitectura Model-Agnostic',
      subtitle: 'Libertad de migración tecnológica',
      description: 'Orquestamos sobre estándares abiertos como Model Context Protocol (MCP). Si mañana surge un modelo superior o más económico, tu sistema se adapta sin reconstruir la aplicación.'
    },
    {
      icon: Award,
      title: 'Estándar Internacional de Ingeniería',
      subtitle: 'Rigor técnico desde Chile hacia el mundo',
      description: 'Metodologías ágiles de entrega continua, tipado estricto en TypeScript/Python, arquitectura desacoplada y observabilidad continua con telemetría de latencia y costos.'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#24BDBA] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-bold">
            ESTÁNDAR EMPRESARIAL & GARANTÍAS DE ENTREGA
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
          CÓMO TRABAJAMOS PARA PROTEGER TU INVERSIÓN Y TU SEGURIDAD.
        </h3>
        <p className="text-[#A4A9B0] text-sm leading-relaxed font-sans font-light">
          Inspirados en las mejores prácticas de los estudios de IA de mayor reputación a nivel internacional, aplicamos un marco riguroso de gobernanza, confidencialidad y propiedad técnica desde el primer sprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
        {standards.map((std, idx) => {
          const IconComponent = std.icon;
          return (
            <div
              key={idx}
              className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-4 hover:border-[#24BDBA]/60 transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#161D2B] border border-[#1E2638] flex items-center justify-center text-[#24BDBA] group-hover:text-[#55DAD5] group-hover:border-[#24BDBA]/40 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F6F4EF] font-['Space_Grotesk'] group-hover:text-[#24BDBA] transition-colors">
                    {std.title}
                  </h4>
                  <p className="text-xs text-[#FF6B45] font-mono mt-0.5">
                    {std.subtitle}
                  </p>
                </div>
                <p className="text-xs text-[#8C96A5] font-sans font-light leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#181E29] flex items-center gap-1.5 text-[11px] text-[#24BDBA]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Compromiso Contractual</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
