export type PageRoute = 
  | '/'
  | '/que-hacemos'
  | '/soluciones/capa-inteligencia-mcp'
  | '/soluciones/agentes-ia'
  | '/soluciones/automatizacion'
  | '/soluciones/ia-conversacional'
  | '/soluciones/datos-conversacionales'
  | '/soluciones/productos-ai-native'
  | '/soluciones/ia-educacion'
  | '/servicios/agentes-ia'
  | '/servicios/mcp'
  | '/servicios/automatizacion-inteligente'
  | '/servicios/plataformas-ia'
  | '/servicios/datos-conversacionales'
  | '/servicios/ia-educacion-moodle'
  | '/servicios/ai-partner'
  | '/ai-partner'
  | '/industrias'
  | '/industrias/educacion'
  | '/industrias/construccion-sostenibilidad'
  | '/industrias/retail'
  | '/industrias/software-tecnologia'
  | '/industrias/liderazgo'
  | '/signal-director'
  | '/experiencia'
  | '/experiencia/rita'
  | '/experiencia/dashboard-ambiental'
  | '/experiencia/hub-ecc'
  | '/experiencia/hub-economia-circular'
  | '/experiencia/red-ecc'
  | '/experiencia/moodle-ai'
  | '/experiencia/signal-director'
  | '/metodo'
  | '/labs'
  | '/insights'
  | '/nosotros'
  | '/contacto'
  | '/privacidad'
  | '/terminos';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  subconcept?: string;
  businessProblem: string;
  whatChanges: string;
  architectureConcept: string;
  capabilities: string[];
  useCases: { title: string; desc: string }[];
  approach: string[];
  relatedExperience: string;
  technologies?: string[];
  faqs?: { q: string; a: string }[];
  route: PageRoute;
  ctaText?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  capabilities: string[];
  examples?: string[];
  message: string;
  badge?: string;
  route: PageRoute;
  isAlliedProject?: boolean;
  alliedProjectName?: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  context: string;
  challenge: string;
  system: string;
  whatWasBuilt: string;
  howConnected: string;
  technology: string[];
  nextEvolution: string;
  relatedCapabilities: string[];
  conceptualFlow?: {
    from: string[];
    to: string;
  };
  stepFlow?: string[];
  summary: string;
  takeaway: string;
  impactKpis?: string[];
  architectureBadge?: string;
  route: PageRoute;
  disclaimer: string;
}

export interface LabProject {
  id: string;
  code: string;
  title: string;
  area: string;
  status: 'EXPLORING' | 'PROTOTYPE' | 'TESTING' | 'PRODUCTION';
  description: string;
  technicalSpecs: string;
  keyFinding?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keywords: string[];
  practicalTakeaway?: string;
}
