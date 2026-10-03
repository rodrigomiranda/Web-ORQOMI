import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    projectType: 'Agente de IA',
    challenge: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <span className="text-[#FF6B45] font-semibold">Contacto</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B45]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B45] font-semibold">
                CANAL DE INGENIERÍA DIRECTO
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk'] leading-[1.1]">
              Conversemos sobre tu desafío.
            </h1>
            <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
              No necesitas llegar con una especificación técnica o arquitectura resuelta. Podemos comenzar entendiendo el problema de negocio, la fricción de los usuarios y las fuentes de datos disponibles.
            </p>

            <div className="p-6 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col gap-4 font-mono text-xs text-[#8C96A5]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#24BDBA] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#6E7A8A] block text-[10px]">CORREO DIRECTO:</span>
                  <a href="mailto:hola@orqomi.com" className="text-[#F6F4EF] hover:text-[#24BDBA] transition-colors">
                    hola@orqomi.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#6E7A8A] block text-[10px]">BASE OPERACIONAL:</span>
                  <span className="text-[#F6F4EF]">Santiago, Chile</span>
                  <span className="text-[#6E7A8A] block text-[10px]">Despliegue regional & global</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#131924] border-l-2 border-[#24BDBA] rounded-r-lg text-xs text-[#8C96A5] leading-relaxed">
              Acuerdo de Confidencialidad (NDA): Podemos suscribir un acuerdo mutuo previo a la revisión de datos o arquitecturas propietarias.
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#10141D] border border-[#1E2638] rounded-xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#24BDBA]/10 border border-[#24BDBA] flex items-center justify-center text-[#24BDBA]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#F6F4EF] font-['Space_Grotesk']">
                  Solicitud ingresada con éxito
                </h3>
                <p className="text-xs text-[#8C96A5] max-w-md leading-relaxed font-light">
                  Hemos registrado tus datos. Uno de nuestros arquitectos de sistemas se pondrá en contacto dentro de las próximas 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg cursor-pointer transition-colors shadow-lg shadow-[#FF6B45]/20"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#8C96A5] mb-1">Nombre *</label>
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
                    <label className="block text-xs font-mono text-[#8C96A5] mb-1">Empresa *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#8C96A5] mb-1">Cargo *</label>
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
                    <label className="block text-xs font-mono text-[#8C96A5] mb-1">Email corporativo *</label>
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
                  <label className="block text-xs font-mono text-[#8C96A5] mb-1">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    placeholder="+56 9 8765 4321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none transition-colors"
                  />
                </div>

                {/* Qué quieres construir */}
                <div>
                  <label className="block text-xs font-mono text-[#8C96A5] mb-2">
                    ¿Qué tipo de solución buscas explorar?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, projectType: opt })}
                        className={`px-2.5 py-2 text-left rounded-md text-xs transition-colors border cursor-pointer ${
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
                  <label className="block text-xs font-mono text-[#8C96A5] mb-1">
                    Cuéntanos brevemente el desafío:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe el contexto actual, los sistemas involucrados o la pregunta que te gustaría resolver..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-[#090D13] border border-[#1E2638] rounded-lg px-3 py-2 text-xs text-[#F6F4EF] focus:border-[#24BDBA] focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#FF6B45] hover:bg-[#E0532E] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2 shadow-lg shadow-[#FF6B45]/20"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Conversemos'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
