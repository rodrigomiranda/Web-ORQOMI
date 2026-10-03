import React, { useState } from 'react';
import { PageRoute, InsightArticle } from '../types';
import { INSIGHTS_ARTICLES } from '../data/content';
import { Search, ArrowRight, X, Clock } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (need?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['ALL', ...Array.from(new Set(INSIGHTS_ARTICLES.map(a => a.category)))];

  const filteredArticles = INSIGHTS_ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === 'ALL' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0C0F14] text-[#F6F4EF] font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E7A8A]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#F6F4EF] cursor-pointer transition-colors">
            Inicio
          </button>
          <span>/</span>
          <span className="text-[#FF6B45] font-semibold">Insights</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#24BDBA]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#24BDBA] font-semibold">
                CONOCIMIENTO TÉCNICO & ARQUITECTURA
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-[#F6F4EF] font-['Space_Grotesk']">
              Insights & Artículos.
            </h1>
            <p className="text-base text-[#D4D9E1] leading-relaxed font-light">
              Análisis técnicos, criterios de arquitectura y guías prácticas sobre agentes de IA, Model Context Protocol, automatización y datos conversacionales en Chile y Latinoamérica.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#6E7A8A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por tema o tecnología..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#10141D] border border-[#1E2638] rounded-lg pl-9 pr-3 py-2 text-xs text-[#F6F4EF] placeholder-[#6E7A8A] focus:outline-none focus:border-[#24BDBA] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#181E29] pb-3 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#161D2B] border-[#24BDBA] text-[#24BDBA] font-medium'
                  : 'bg-[#10141D] border-[#1E2638] text-[#6E7A8A] hover:text-[#D4D9E1]'
              }`}
            >
              {cat === 'ALL' ? 'Todos los artículos' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-8 bg-[#10141D] border border-[#1E2638] rounded-xl flex flex-col justify-between gap-6 hover:border-[#24BDBA]/60 transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#6E7A8A]">
                  <span className="text-[#24BDBA] font-semibold">{article.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#24BDBA]" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h2 
                  onClick={() => setActiveArticle(article)}
                  className="text-xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] cursor-pointer group-hover:text-[#24BDBA] transition-colors leading-snug"
                >
                  {article.title}
                </h2>

                <p className="text-xs text-[#8C96A5] leading-relaxed">
                  {article.summary}
                </p>

                {/* Keywords tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {article.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] font-mono text-[#8C96A5] bg-[#131924] border border-[#1E2638] px-2 py-0.5 rounded">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#181E29] flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-mono text-[#F6F4EF] hover:text-[#24BDBA] flex items-center gap-1.5 cursor-pointer font-medium transition-colors"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B45]" />
                </button>
                <span className="text-[10px] font-mono text-[#6E7A8A]">
                  ORQOMI RESEARCH
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div 
              className="w-full max-w-3xl bg-[#10141D] border border-[#1E2638] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-[#090D13] border-b border-[#181E29] flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-[#24BDBA]">
                  <span>{activeArticle.category}</span>
                  <span className="text-[#323D4F]">·</span>
                  <span className="text-[#8C96A5]">{activeArticle.readTime} de lectura</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1 text-[#6E7A8A] hover:text-[#F6F4EF] rounded cursor-pointer transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10 overflow-y-auto flex flex-col gap-6 text-[#F6F4EF]">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[#F6F4EF] font-['Space_Grotesk'] leading-tight">
                  {activeArticle.title}
                </h1>

                <div className="p-4 bg-[#131924] border-l-2 border-[#24BDBA] rounded-r-lg text-xs text-[#D4D9E1] leading-relaxed italic">
                  {activeArticle.summary}
                </div>

                <div className="flex flex-col gap-4 text-sm text-[#D4D9E1] leading-relaxed font-light">
                  {activeArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#181E29] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {activeArticle.keywords.map((kw, i) => (
                      <span key={i} className="text-xs font-mono text-[#24BDBA] bg-[#131924] border border-[#1E2638] px-2 py-0.5 rounded">
                        #{kw}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const articleTitle = activeArticle.title;
                      setActiveArticle(null);
                      onOpenContact(`Conversar sobre: ${articleTitle}`);
                    }}
                    className="px-5 py-2.5 bg-[#FF6B45] text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-lg cursor-pointer hover:bg-[#E0532E] transition-colors shadow-lg shadow-[#FF6B45]/20"
                  >
                    Consultar sobre este tema
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
