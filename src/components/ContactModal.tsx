import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNeed?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultNeed = 'Agente de IA'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    projectType: defaultNeed,
    challenge: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const projectOptions = [
    'Agente de IA',
    'Asistente de IA',
    'Automatización',
    'MCP / integración',
    'Plataforma de IA',
    'IA para Moodle',
    'AI Partner',
    'No estoy seguro todavía'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn font-mono">
      <div 
        className="w-full max-w-2xl bg-[#10141D] border border-[#1E2638] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#090D13] border-b border-[#181E29] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FF6B45] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FF6B45] animate-pulse" />
            <span>CANAL DIRECTO // ORQOMI</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#6E7A8A] hover:text-[#F6F4EF] rounded-md cursor-pointer transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#24BDBA]/10 border border-[#24BDBA] flex items-center justify-center text-[#24BDBA]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                Mensaje recibido correctamente
              </h3>
              <p className="text-xs text-[#8C96A5] max-w-md leading-relaxed font-sans font-light">
                Gracias por compartir tu desafío. El equipo de arquitectura de ORQOMI revisará los antecedentes y te contactará a la brevedad para coordinar una primera sesión de exploración.
              </p>
              <div className="p-3 bg-[#090D13] border border-[#181E29] rounded-lg text-[11px] text-[#6E7A8A] mt-2">
                Referencia de solicitud: <span className="text-[#FF6B45] font-semibold">ORQ-REQ-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg cursor-pointer transition-colors shadow-lg shadow-[#FF6B45]/20"
              >
                Cerrar ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                  Conversemos sobre tu desafío
                </h2>
                <p className="text-xs text-[#8C96A5] mt-1 font-sans font-light">
                  Evaluamos viabilidad técnica, arquitectura de datos y roadmap de despliegue.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div>
                  <label className="block text-[11px] text-[#8C96A5] mb-1">Nombre *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#8C96A5] mb-1">Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Empresa u organización"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-[#8C96A5] mb-1">Cargo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Cargo o rol"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#8C96A5] mb-1">Email corporativo *</label>
                  <input
                    type="email"
                    required
                    placeholder="nombre@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-[#8C96A5] mb-1">Teléfono (opcional)</label>
                <input
                  type="tel"
                  placeholder="+56 9 8765 4321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#8C96A5] mb-1.5">
                  ¿Qué tipo de solución buscas explorar?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {projectOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, projectType: opt })}
                      className={`px-2 py-1.5 text-left rounded-md text-[11px] transition-colors border cursor-pointer ${
                        formData.projectType === opt
                          ? 'bg-[#161D2B] border-[#24BDBA] text-[#24BDBA] font-medium'
                          : 'bg-[#090D13] border-[#1E2638] text-[#8C96A5] hover:text-[#F6F4EF]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-[#8C96A5] mb-1">
                  Cuéntanos brevemente el desafío:
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe el contexto actual, los sistemas involucrados o la pregunta que te gustaría resolver..."
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none resize-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-[10px] text-[#6E7A8A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#24BDBA]" />
                  <span>Tratamiento confidencial garantizado (NDA previo)</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-[#FF6B45]/20"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
