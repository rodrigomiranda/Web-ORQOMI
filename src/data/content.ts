import { ServiceItem, IndustryItem, CaseStudyItem, LabProject, InsightArticle } from '../types';

export const FOUNDER_CREDIBILITY_DISCLAIMER = 
  "Proyectos desarrollados como parte de la trayectoria previa del equipo fundador y sus alianzas tecnológicas, constituyendo la base de ingeniería y conocimiento aplicada hoy en la arquitectura de ORQOMI.";

export const CORE_PHILOSOPHY = {
  badge: 'ORQUESTAMOS INTELIGENCIA',
  tagline: 'MULTIPLE INTELLIGENCES. ONE COORDINATED SYSTEM.',
  statement: 'From information to understanding to action.',
  description: 'Conectamos conocimiento, datos, sistemas, modelos, agentes, herramientas, automatizaciones y personas en un sistema inteligente coordinado.'
};

export const ORCHESTRATION_LAYERS = [
  {
    level: '01',
    name: 'KNOWLEDGE',
    title: 'Conocimiento Corporativo',
    description: 'Documentación viva, políticas operacionales, experiencia tácita, minutas y contenidos normativos de la organización.',
    items: ['Documentos & Manuales', 'Políticas Internas', 'Contenidos Curriculares', 'Expertise Tácito', 'Conversaciones Históricas'],
    accent: '#24BDBA'
  },
  {
    level: '02',
    name: 'DATA',
    title: 'Datos & Telemetría',
    description: 'Estructuras transaccionales, bases relacionales, almacenes vectoriales, series de tiempo, dashboards y APIs de datos.',
    items: ['Bases SQL (PostgreSQL, MySQL)', 'Data Warehouses', 'APIs Internas', 'Métricas IoT & Sensores', 'Vector Stores'],
    accent: '#55DAD5'
  },
  {
    level: '03',
    name: 'SYSTEMS',
    title: 'Sistemas Operacionales',
    description: 'El núcleo de software donde la empresa factura, gestiona inventario, enseña y atiende a sus clientes.',
    items: ['ERPs & CRMs', 'Moodle LMS', 'Software Propio / In-house', 'Plataformas Web', 'Herramientas de Colaboración'],
    accent: '#241447'
  },
  {
    level: '04',
    name: 'INTELLIGENCE',
    title: 'Modelos Cognitivos',
    description: 'Modelos de lenguaje de frontera y modelos locales seleccionados según precisión, latencia, privacidad y costo.',
    items: ['Claude (Anthropic)', 'GPT-4o (OpenAI)', 'Gemini (Google)', 'Modelos Open Source (Llama, DeepSeek)', 'Modelos Locales / Soberanos'],
    accent: '#24BDBA'
  },
  {
    level: '05',
    name: 'AGENTS',
    title: 'Agentes Especializados',
    description: 'Entidades autónomas con objetivos delimitados, memoria estructurada, acceso a herramientas y capacidad de colaboración.',
    items: ['Research & Síntesis', 'Análisis & SQL Agents', 'Atención Especializada', 'Flujos Operacionales', 'Auditoría & Calidad'],
    accent: '#FF6B45'
  },
  {
    level: '06',
    name: 'ORCHESTRATION',
    title: 'Capa de Orquestación',
    description: 'El cerebro de interconexión diseñado por ORQOMI: gestiona contexto, MCP, permisos, guardrails y supervisión humana.',
    items: ['Context Routing', 'Model Context Protocol (MCP)', 'Permisos & Gobernanza', 'Human-in-the-Loop Gateways', 'Observabilidad & Logs'],
    accent: '#FF6B45'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'capa-inteligencia-mcp',
    slug: 'capa-inteligencia-mcp',
    number: '01',
    title: 'Capa de Inteligencia & MCP',
    headline: 'Conecta la IA con lo que tu empresa ya sabe.',
    description: 'Diseñamos capas MCP e integraciones que permiten que asistentes y agentes trabajen con datos, software, documentos, APIs y herramientas empresariales.',
    subconcept: 'ORQOMI ORCHESTRATION LAYER',
    businessProblem: 'La mayoría de las empresas cuentan con modelos de IA aislados que no pueden acceder a sus sistemas internos sin exponer credenciales o reescribir integraciones para cada proveedor.',
    whatChanges: 'Con una Capa MCP, cualquier modelo o agente autorizado puede consultar bases de datos, activar webhooks y leer documentos en tiempo real de forma segura y estandarizada.',
    architectureConcept: 'Servidores MCP desacoplados que exponen herramientas y recursos mediante schemas tipados, con autenticación por sesión y auditoría continua.',
    capabilities: [
      'Model Context Protocol (MCP)',
      'Desarrollo de MCP Servers dedicados',
      'Integración con APIs empresariales',
      'Acceso seguro a Enterprise Data & SQL',
      'Ejecución controlada de Tools y Webhooks',
      'Gestión granular de Permissions & Context',
      'RAG avanzado y bases de conocimiento vivas'
    ],
    useCases: [
      {
        title: 'Servidor MCP sobre ERP / CRM',
        desc: 'Permite que un agente consulte el estado de órdenes de compra o clientes sin acceso directo ni permisos de escritura indiscriminada.'
      },
      {
        title: 'Context Engine sobre Repositorio Documental',
        desc: 'Indexación semántica continua que actualiza el contexto del agente cada vez que se emite una nueva normativa interna.'
      }
    ],
    approach: [
      'Inventario de fuentes de datos, APIs y herramientas corporativas.',
      'Definición de esquemas de autorización y aislamiento de permisos.',
      'Construcción y despliegue del servidor MCP en infraestructura soberana.',
      'Conexión con clientes IA (agentes internos, Cursor, Claude Desktop o web).'
    ],
    relatedExperience: 'Arquitectura aplicada en la ingesta y consulta de datos ambientales y de construcción.',
    technologies: ['Model Context Protocol', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'pgvector'],
    faqs: [
      {
        q: '¿Qué es exactamente MCP y por qué no usar una API REST común?',
        a: 'Model Context Protocol es un estándar abierto impulsado por la industria que permite a los modelos descubrir herramientas y recursos dinámicamente, evitando crear adaptadores frágiles cada vez que cambia el modelo.'
      },
      {
        q: '¿Nuestros datos viajan a servidores públicos?',
        a: 'No. El servidor MCP corre en tu propia nube o infraestructura y solo entrega al modelo el fragmento exacto de contexto necesario para responder la consulta.'
      }
    ],
    route: '/soluciones/capa-inteligencia-mcp',
    ctaText: 'Conectar mis sistemas'
  },
  {
    id: 'agentes-automatizacion',
    slug: 'agentes-ia',
    number: '02',
    title: 'Agentes & Automatización',
    headline: 'Agentes que no sólo responden. También trabajan.',
    description: 'Construimos agentes especializados capaces de analizar información, utilizar herramientas, ejecutar procesos, solicitar aprobación y colaborar con otros agentes.',
    subconcept: 'AGENTIC EXECUTION',
    businessProblem: 'Los chatbots convencionales solo generan texto sin poder ejecutar acciones ni interactuar con los procesos reales del negocio.',
    whatChanges: 'Los agentes de ORQOMI entienden metas complejas en múltiples pasos, ejecutan herramientas intermedias y entregan resultados procesados a los sistemas operacionales.',
    architectureConcept: 'Arquitectura híbrida: razonamiento probabilístico con modelos de frontera gobernado por orquestación determinística y puntos de aprobación humana.',
    capabilities: [
      'Agentes autónomos con límites de acción estrictos',
      'Sistemas multiagente coordinados',
      'Workflow Agents para tareas complejas',
      'Human-in-the-loop y puntos de validación ejecutiva',
      'Automatización determinística con n8n y APIs',
      'Gestión de eventos asíncronos y approvals',
      'Monitoreo, trazabilidad y observabilidad continua'
    ],
    useCases: [
      {
        title: 'Agente de Conciliación y Validación de Facturas',
        desc: 'Cruza contratos PDF con órdenes de compra en el ERP y redacta la aprobación para firma humana.'
      },
      {
        title: 'Flujo Multiagente de Auditoría de Faenas',
        desc: 'Un agente extrae datos de terreno, otro valida cumplimiento normativo y un tercero sintetiza el reporte gerencial.'
      }
    ],
    approach: [
      'Mapeo exhaustivo del proceso operacional y sus puntos de fricción.',
      'Definición de guardrails, presupuestos de tokens y políticas de aprobación.',
      'Implementación del ciclo de ejecución: planear, llamar herramienta, validar, reportar.',
      'Pruebas sintéticas y telemetría de deriva de comportamiento.'
    ],
    relatedExperience: 'Automatizaciones desplegadas para procesamiento de datos de terreno y flujos educativos.',
    technologies: ['LangGraph', 'n8n', 'Python', 'TypeScript', 'Webhooks', 'Zod Guardrails', 'OpenTelemetry'],
    faqs: [
      {
        q: '¿Puede un agente cometer un error crítico de forma autónoma?',
        a: 'No, porque implementamos puntos obligatorios de validación humana (Human-in-the-loop) para cualquier acción sensible o transaccional.'
      }
    ],
    route: '/soluciones/agentes-ia',
    ctaText: 'Explorar agentes'
  },
  {
    id: 'ia-conversacional',
    slug: 'ia-conversacional',
    number: '03',
    title: 'IA Conversacional',
    headline: 'Tus datos ya saben mucho. Ahora puedes preguntarles.',
    description: 'Transformamos bases de datos, dashboards, documentos y conocimiento empresarial en experiencias conversacionales con respuestas contextualizadas y trazables.',
    subconcept: 'FROM SEARCHING TO ASKING',
    businessProblem: 'Encontrar información crítica en una empresa suele requerir navegar decenas de carpetas compartidas o pedir reportes a TI con días de espera.',
    whatChanges: 'Cualquier colaborador o líder puede formular preguntas en lenguaje natural y recibir respuestas exactas con citas directas a las fuentes primarias.',
    architectureConcept: 'RAG híbrido (búsqueda densa vectorial + sparse BM25) combinado con agentes generadores de SQL asistidos por metadatos semánticos.',
    capabilities: [
      'Consultas en lenguaje natural sobre datos empresariales',
      'Arquitecturas RAG de alta precisión sin alucinación',
      'Agentes SQL y analítica conversacional (BI Agents)',
      'Extracción y búsqueda semántica en documentos complejos',
      'Enterprise Search unificado multicontenedor',
      'Trazabilidad de fuentes y citas de auditoría'
    ],
    useCases: [
      {
        title: 'Asistente de Normativa y Políticas Internas',
        desc: 'Responde consultas sobre contratos, estándares de seguridad o procedimientos con enlace a la página exacta del PDF original.'
      },
      {
        title: 'Explorador Conversacional de Ventas e Inventario',
        desc: 'Permite consultar "¿cuántas unidades del producto X quedan en bodega norte?" sin abrir el software contable.'
      }
    ],
    approach: [
      'Auditoría y limpieza de las fuentes de conocimiento.',
      'Fragmentación semántica y generación de embeddings contextuales.',
      'Configuración de agentes con trazabilidad estricta y citas verificables.',
      'Evaluación continua de precisión y tasa de alucinación cero.'
    ],
    relatedExperience: 'Asistentes de toma de decisión ambiental y normativas en construcción.',
    technologies: ['pgvector', 'Qdrant', 'LlamaIndex', 'Cohere Rerank', 'PostgreSQL', 'LangChain'],
    faqs: [
      {
        q: '¿Cómo evitan que el modelo invente datos (alucinación)?',
        a: 'Anclamos el razonamiento únicamente en el contexto recuperado (grounding estricto) y exigimos citas explícitas a documentos verificados.'
      }
    ],
    route: '/soluciones/ia-conversacional',
    ctaText: 'Conversar con mis datos'
  },
  {
    id: 'productos-ai-native',
    slug: 'productos-ai-native',
    number: '04',
    title: 'Productos AI-Native',
    headline: 'Productos que nacen con inteligencia en su arquitectura.',
    description: 'Diseñamos y desarrollamos productos digitales donde modelos, agentes y automatización son capacidades fundamentales, no funcionalidades agregadas posteriormente.',
    subconcept: 'INTELLIGENCE BY DESIGN',
    businessProblem: 'Incorporar IA como un botón de chat flotante en un software tradicional genera una experiencia inconexa y de escaso valor para el usuario.',
    whatChanges: 'Los productos AI-native adaptan su interfaz dinámicamente según el flujo de razonamiento y anticipan necesidades operativas.',
    architectureConcept: 'Sistemas desacoplados con microservicios reactivos, componentes de UI generativa y persistencia de memoria episódica por usuario.',
    capabilities: [
      'Plataformas web AI-native completas',
      'Interfaces adaptativas centradas en agentes',
      'Sistemas de soporte y decisión con IA contextual',
      'Entornos de trabajo colaborativo inteligente (Workspaces)',
      'Diseño UX/UI para flujos estocásticos y determinísticos',
      'Arquitectura de software desacoplada y escalable'
    ],
    useCases: [
      {
        title: 'Workspace de Investigación Técnica para Ingeniería',
        desc: 'Plataforma donde ingenieros cargan cálculos y planos, y agentes sugieren optimizaciones y alertas tempranas.'
      },
      {
        title: 'Plataforma de Diagnóstico y Planificación Estratégica',
        desc: 'Sistema digital que sintetiza sesiones de comité directivo en tableros de acción trazables.'
      }
    ],
    approach: [
      'Co-diseño de producto enfocado en la interacción humano-agente.',
      'Desarrollo Full-Stack con React 19, TypeScript y backends asíncronos.',
      'Integración nativa de telemetría y evaluación de experiencia.',
      'Despliegue contenerizado en infraestructura de nube segura.'
    ],
    relatedExperience: 'Desarrollo de ecosistemas digitales completos y plataformas interactivas de datos.',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Cloud Run'],
    faqs: [
      {
        q: '¿Qué diferencia a un producto AI-native de un SaaS convencional con IA?',
        a: 'En un SaaS tradicional la IA es un aditamento secundario; en un producto AI-native la inteligencia define cómo se almacena la información y cómo interactúa el usuario con la interfaz.'
      }
    ],
    route: '/soluciones/productos-ai-native',
    ctaText: 'Construir un producto'
  },
  {
    id: 'ia-educacion',
    slug: 'ia-educacion',
    number: '05',
    title: 'IA + Educación',
    headline: 'De plataforma educativa a entorno inteligente de aprendizaje.',
    description: 'Integramos inteligencia artificial con Moodle y ecosistemas educativos para acompañar a estudiantes, docentes y equipos de gestión.',
    subconcept: 'LEARNING ECOSYSTEMS',
    businessProblem: 'Moodle suele operar como un repositorio estático de archivos donde los estudiantes se sienten solos y los docentes carecen de tiempo para retroalimentación personalizada.',
    whatChanges: 'Cada curso adquiere un tutor contextual disponible 24/7 anclado al programa oficial, respetando la privacidad de los estudiantes y liberando tiempo al docente.',
    architectureConcept: 'Integración vía plugins Moodle y API LTI, con aislamiento criptográfico de datos de menores y retención cero en proveedores de modelos.',
    capabilities: [
      'Asistentes Moodle anclados al programa del curso',
      'Bases de conocimiento por asignatura y módulo',
      'Tutores socráticos 24/7 para estudiantes',
      'Asistente docente para diseño de actividades y rúbricas',
      'Generación estructurada de objetos de aprendizaje (SCORM/H5P)',
      'Reportería predictiva de deserción y engagement',
      'Analítica pedagógica conversacional'
    ],
    useCases: [
      {
        title: 'Tutor de Cátedra Universitaria',
        desc: 'Acompaña a estudiantes en ejercicios complejos formulando preguntas guía en lugar de dar respuestas directas.'
      },
      {
        title: 'Generador de Evaluaciones para Docentes',
        desc: 'Crea cuestionarios y actividades prácticas alineadas a los resultados de aprendizaje esperados del plan de estudios.'
      }
    ],
    approach: [
      'Auditoría pedagógica y técnica del entorno Moodle institucional.',
      'Indexación de bibliografías oficiales y guías de estudio.',
      'Calibración del comportamiento pedagógico del asistente (guía socrática).',
      'Capacitación al cuerpo docente y monitoreo ético de uso.'
    ],
    relatedExperience: 'Desarrollo de proyectos de educación digital y plataformas académicas en Chile.',
    technologies: ['Moodle LMS', 'PHP', 'Python', 'LTI Standards', 'RAG Académico', 'PostgreSQL'],
    faqs: [
      {
        q: '¿Cómo se protege la privacidad de los estudiantes?',
        a: 'No compartimos nombres ni datos personales con los modelos. Las consultas se anonimizan y los modelos operan con acuerdos de cero retención de datos.'
      }
    ],
    route: '/soluciones/ia-educacion',
    ctaText: 'Explorar IA para educación'
  },
  {
    id: 'ai-partner',
    slug: 'ai-partner',
    number: '06',
    title: 'AI Partner',
    headline: 'Tu equipo construye software. Nosotros agregamos inteligencia.',
    description: 'Trabajamos junto a software factories, consultoras y equipos tecnológicos que necesitan incorporar capacidades avanzadas de inteligencia artificial dentro de proyectos propios o de sus clientes.',
    subconcept: 'SPECIALIZED EMBEDDED CAPABILITY',
    businessProblem: 'Crear un equipo interno de ingenieros de IA especializados en agentes, RAG y MCP toma meses y conlleva un alto riesgo de rotación y costos fijos.',
    whatChanges: 'ORQOMI actúa como tu unidad especializada de IA on-demand, integrándose fluidamente en tus sprints y entregando componentes de alta fidelidad.',
    architectureConcept: 'Entregables desacoplados, contratos de API claros, documentación de ingeniería de primer nivel y transferencia de conocimiento.',
    capabilities: [
      'Partner especializado en IA para Software Factories',
      'Modalidad marca blanca (Behind Your Brand)',
      'Co-desarrollo visible (Alongside Your Team)',
      'Diseño y revisión de arquitectura de IA',
      'Desarrollo y entrega de componentes IA llave en mano',
      'Asesoría técnica y consultoría para licitaciones complejas'
    ],
    useCases: [
      {
        title: 'Adición de Capa MCP a Software Existente de un Cliente',
        desc: 'Tu fábrica mantiene el Frontend y Backend transaccional; ORQOMI diseña y despliega el servidor MCP y los agentes.'
      },
      {
        title: 'Desarrollo Conjunto de Producto para Licitación Corporativa',
        desc: 'Participamos como el especialista técnico en la propuesta comercial y aseguramos la viabilidad arquitectónica.'
      }
    ],
    approach: [
      'Alineación inicial sobre alcance técnico, modelo de colaboración y confidencialidad.',
      'Sprints compartidos con ceremonias ágiles y código documentado en tu repositorio.',
      'Acompañamiento en el pase a producción y pruebas de carga.',
      'Capacitación técnica a tus desarrolladores para transferencia gradual.'
    ],
    relatedExperience: 'Alianzas con desarrolladores de software y consultoras de innovación.',
    technologies: ['Git', 'Docker', 'CI/CD', 'OpenAPI Specs', 'MCP SDKs', 'Python / TS'],
    faqs: [
      {
        q: '¿Pueden trabajar bajo acuerdo de marca blanca?',
        a: 'Sí, podemos participar de manera 100% invisible para el cliente final como tu equipo interno de ingeniería en IA.'
      }
    ],
    route: '/ai-partner',
    ctaText: 'Conversemos sobre una alianza'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'ind-educacion',
    slug: 'educacion',
    title: 'Educación & EdTech',
    headline: 'De repositorio de PDFs a entornos vivos de aprendizaje.',
    description: 'Integramos inteligencia con plataformas Moodle, contenidos educativos, reportería y procesos académicos.',
    capabilities: [
      'Tutores inteligentes anclados a la bibliografía del curso',
      'Asistentes docentes para creación de rúbricas y actividades',
      'Detección temprana de riesgo académico mediante analítica',
      'Consultas en lenguaje natural sobre el rendimiento de cohortes',
      'Integraciones nativas Moodle mediante API y LTI'
    ],
    examples: [
      'Asistentes para estudiantes',
      'Asistentes para educadores',
      'Course knowledge',
      'Content generation',
      'Learning objects',
      'Academic reporting',
      'MCP',
      'Automation'
    ],
    message: 'El valor de la IA en educación no es hacer la tarea por el alumno, sino personalizar el ritmo y liberar tiempo docente para la mediación humana.',
    badge: 'Moodle & Higher Ed',
    route: '/industrias/educacion'
  },
  {
    id: 'ind-construccion',
    slug: 'construccion-sostenibilidad',
    title: 'Construcción & Sostenibilidad',
    headline: 'Conectar datos de faena con cumplimiento normativo y ambiental.',
    description: 'La experiencia del equipo incluye plataformas digitales, datos ambientales, economía circular, herramientas de gestión y asistentes especializados vinculados al ecosistema de la construcción.',
    capabilities: [
      'Gestión y valorización de residuos de construcción (RCD)',
      'Trazabilidad geolocalizada de gestores autorizados',
      'Monitoreo de consumo hídrico y huella de carbono en obra',
      'Reportería ambiental conversacional sobre indicadores cruzados',
      'Sistemas de soporte a la toma de decisión en terreno'
    ],
    examples: [
      'Environmental data',
      'Circular economy',
      'Waste management',
      'Water indicators',
      'Reporting',
      'AI assistants',
      'Geolocation',
      'Knowledge systems'
    ],
    message: 'Las obras generan volúmenes gigantescos de datos no estructurados; una capa de inteligencia permite anticipar desvíos antes de que impliquen multas o sobrecostos.',
    badge: 'Faenas & Datos Vivos',
    route: '/industrias/construccion-sostenibilidad'
  },
  {
    id: 'ind-retail',
    slug: 'retail',
    title: 'Retail & Operaciones',
    headline: 'Conectar inteligencia con catálogos, logística y experiencia.',
    description: 'Diseñamos soluciones que conectan inteligencia con catálogos, operación, ventas, atención y sistemas empresariales.',
    capabilities: [
      'Asistentes de producto con comprensión profunda de especificaciones',
      'Consultas conversacionales de inventario para equipos de tienda',
      'Análisis de patrones de compra y tendencias de demanda',
      'Integración con ERPs, CRMs y canales de mensajería',
      'Automatización de flujos de postventa y reclamos complejos'
    ],
    examples: [
      'Product assistants',
      'Internal assistants',
      'Inventory queries',
      'Sales analysis',
      'CRM / ERP integration',
      'Ecommerce',
      'Workflow automation'
    ],
    message: 'En retail la precisión lo es todo: un agente que informa inventario incorrecto destruye confianza. Por eso priorizamos verificación estricta contra el ERP.',
    badge: 'Omnicanalidad & ERP',
    route: '/industrias/retail'
  },
  {
    id: 'ind-software',
    slug: 'software-tecnologia',
    title: 'Software & Tecnología',
    headline: 'El partner especializado para equipos que ya saben construir software.',
    description: 'Somos el componente especializado de IA para equipos que ya saben construir software.',
    capabilities: [
      'Diseño e implementación de servidores MCP a medida',
      'Arquitecturas RAG avanzadas con reranking y búsqueda híbrida',
      'Desarrollo de agentes autónomos con guardrails determinísticos',
      'Evaluación continua y testbeds de deriva en modelos base',
      'Acompañamiento en el paso de prototipo a producción'
    ],
    examples: [
      'MCP',
      'Agents',
      'LLMs',
      'RAG',
      'AI architectures',
      'Model evaluation',
      'Agent workflows',
      'AI-native product design'
    ],
    message: 'No competimos con tu equipo de desarrollo; potenciamos su capacidad técnica aportando el conocimiento específico de frontera en orquestación de IA.',
    badge: 'Deep Tech & Engineering',
    route: '/industrias/software-tecnologia'
  },
  {
    id: 'ind-liderazgo',
    slug: 'liderazgo',
    title: 'Liderazgo & Decisión',
    headline: 'Inteligencia para procesos complejos de reflexión directiva.',
    description: 'También exploramos cómo la inteligencia puede acompañar procesos complejos de reflexión, análisis y toma de decisiones.',
    capabilities: [
      'Síntesis estructurada de discusiones de alta dirección',
      'Modelos de disidencia estructurada para desafiar sesgos del comité',
      'Aislamiento estricto de confidencialidad para temas estratégicos',
      'Trazabilidad de supuestos clave detrás de cada decisión',
      'Contraste de perspectiva con casos y señales interindustria'
    ],
    examples: [
      'Signal Director',
      'Strategic reflection',
      'Executive governance',
      'Confidential peer synthesis'
    ],
    message: 'En comités ejecutivos, el mayor riesgo no es la falta de datos, sino la complacencia jerárquica y los puntos ciegos jamás cuestionados.',
    isAlliedProject: true,
    alliedProjectName: 'Signal Director',
    badge: 'Proyecto Aliado',
    route: '/industrias/liderazgo'
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'case-rita',
    slug: 'rita',
    title: 'R.I.T.A.',
    subtitle: 'Asistente inteligente para la gestión de residuos en construcción',
    category: 'AI ASSISTANT / GEODATA / SUSTAINABILITY',
    context: 'El sector construcción en Chile genera toneladas de residuos con baja tasa de valorización debido al desconocimiento de gestores autorizados cercanos a cada faena.',
    challenge: 'Cómo permitir que jefes de obra y encargados ambientales encuentren rápidamente alternativas de valorización autorizadas según su ubicación exacta y tipo de residuo.',
    system: 'R.I.T.A. combina procesamiento de lenguaje natural con un dataset estructurado geolocalizado de gestores y normativas ambientales.',
    whatWasBuilt: 'Una interfaz de decisión interactiva que guía al usuario paso a paso, filtra según el radio geográfico y entrega la ficha de contacto y certificación del gestor.',
    howConnected: 'El usuario interactúa en lenguaje natural -> el sistema extrae contexto de tipo de material y coordenadas -> consulta la base de gestores -> mapea la mejor alternativa -> entrega recomendación accionable.',
    technology: ['Modelos de Lenguaje', 'Geocoding APIs', 'Dataset Especializado RCD', 'React', 'TypeScript', 'Node.js'],
    nextEvolution: 'Evolución hacia agente MCP capaz de emitir la orden de retiro y registrar la trazabilidad del residuo en el sistema ambiental de la constructora.',
    relatedCapabilities: ['Agentes Especializados', 'Datos Conversacionales', 'Integración de APIs Geográficas'],
    stepFlow: ['USUARIO', 'CONVERSACIÓN', 'CONTEXTO', 'DATOS', 'FILTRADO', 'GESTORES AUTORIZADOS', 'MAPA', 'DECISIÓN'],
    summary: 'R.I.T.A. es una asistente inteligente para la gestión de residuos en construcción que permite consultar en lenguaje natural, filtrar por geolocalización y obtener gestores certificados.',
    takeaway: 'NOT A GENERIC CHATBOT. A SPECIALIZED DECISION INTERFACE.',
    impactKpis: [
      '85% Aceleración en hallazgo de gestores certificados',
      '100% Cobertura georreferenciada en faenas',
      'Cero latencia en consulta móvil de terreno'
    ],
    route: '/experiencia/rita',
    disclaimer: 'Proyecto desarrollado como parte de la trayectoria previa del equipo fundador de ORQOMI y sus alianzas tecnológicas estratégicas.'
  },
  {
    id: 'case-dashboard-ambiental',
    slug: 'dashboard-ambiental',
    title: 'Dashboard Ambiental',
    subtitle: 'De reportería estática a inteligencia ambiental conversacional',
    category: 'DATA / REPORTING / SUSTAINABILITY',
    context: 'Constructores y desarrolladores inmobiliarios manejan hojas de cálculo dispersas para reportar huella de carbono, consumo hídrico y valorización de residuos.',
    challenge: 'Consolidar datos de múltiples faenas en tiempo real y permitir análisis predictivo sin obligar al equipo de TI a programar pantallas nuevas para cada pregunta.',
    system: 'Plataforma web con centralización de indicadores, paneles ejecutivos y capa viva de consulta conversacional asistida por MCP.',
    whatWasBuilt: 'Sistema completo de captura de telemetría de obra, gráficos analíticos consolidados y motor de exploración en lenguaje natural.',
    howConnected: 'RECOLECCIÓN DE DATOS -> INDICADORES -> REPORTES -> MCP -> CONVERSACIÓN -> INTELIGENCIA.',
    technology: ['PostgreSQL', 'TimescaleDB', 'Model Context Protocol (MCP)', 'React', 'Tailwind CSS', 'Chart Engine'],
    nextEvolution: 'From environmental reporting to conversational environmental intelligence: alertas automáticas cuando un desvío hídrico anticipa una anomalía de proceso.',
    relatedCapabilities: ['Datos Conversacionales', 'Model Context Protocol', 'Arquitectura de Datos'],
    stepFlow: ['CAPTURA FAENA', 'BASE TRANSACCIONAL', 'MOTOR ANALÍTICO', 'CAPA MCP', 'EXPLORACIÓN CONVERSACIONAL', 'ACCIÓN'],
    summary: 'Plataforma digital para el registro, monitoreo y análisis de indicadores ambientales en faenas de construcción, evolucionando de tableros estáticos a conversación con datos.',
    takeaway: 'FROM REPORTING TO CONVERSATION. ACCESO A LA INFORMACIÓN SIN BARRERAS TÉCNICAS.',
    impactKpis: [
      '70% Reducción en tiempo de consolidación de reportes',
      'Consultas analíticas en lenguaje natural vía MCP en < 2s',
      'Visibilidad multi-faena en tiempo real'
    ],
    route: '/experiencia/dashboard-ambiental',
    disclaimer: 'Proyecto desarrollado como parte de la trayectoria previa del equipo fundador de ORQOMI y sus alianzas tecnológicas estratégicas.'
  },
  {
    id: 'case-hub-ecc',
    slug: 'hub-ecc',
    title: 'HUB Economía Circular',
    subtitle: 'Ecosistema digital de conocimiento, herramientas y recursos para construcción sostenible',
    category: 'DIGITAL ECOSYSTEM / KNOWLEDGE / TOOLS',
    context: 'La adopción de economía circular en la industria de la construcción se veía frenada por la fragmentación de guías técnicas, casos y herramientas prácticas.',
    challenge: 'Diseñar un punto de encuentro digital que articule contenidos formativos, diagnósticos de madurez y herramientas de cálculo de impacto.',
    system: 'Ecosistema web modular con arquitectura de contenidos viva, recursos descargables y herramientas interactivas de diagnóstico.',
    whatWasBuilt: 'Plataforma de acceso público y privado con catálogo de buenas prácticas, calculadoras de circularidad y directorio de iniciativas sectoriales.',
    howConnected: 'Los contenidos y herramientas se interconectan mediante ontologías semánticas que permiten a la IA recomendar el recurso exacto según la etapa del proyecto.',
    technology: ['Arquitectura Web Modular', 'CMS Estructurado', 'APIs de Recursos', 'Figma Design System', 'React'],
    nextEvolution: 'Integración de un copiloto de diseño circular que evalúa especificaciones técnicas y sugiere sustitución de materiales con menor impacto.',
    relatedCapabilities: ['Productos AI-Native', 'Ecosistemas de Conocimiento', 'Diseño UX/UI de Alta Densidad'],
    stepFlow: ['ESTRATEGIA SECTORIAL', 'MODELO DE CONTENIDOS', 'ECOSISTEMA DIGITAL', 'HERRAMIENTAS INTERACTIVAS', 'COMUNIDAD'],
    summary: 'Ecosistema digital que congrega información, herramientas y recursos para la economía circular en la construcción, demostrando capacidad para construir plataformas conectadas complejas.',
    takeaway: 'MÁS ALLÁ DE APLICACIONES AISLADAS: ECOSISTEMAS DIGITALES CONECTADOS.',
    impactKpis: [
      '+150 Recursos y guías técnicas indexadas',
      'Ontología semántica viva para recomendación',
      '100% Autonomía en actualización y gestión'
    ],
    route: '/experiencia/hub-ecc',
    disclaimer: 'Proyecto desarrollado como parte de la trayectoria previa del equipo fundador de ORQOMI y sus alianzas tecnológicas estratégicas.'
  },
  {
    id: 'case-red-ecc',
    slug: 'red-ecc',
    title: 'Red ECC',
    subtitle: 'Infraestructura digital para la articulación de actores y proyectos de economía circular',
    category: 'ECOSYSTEM / PLATFORM / CONNECTION',
    context: 'Empresas, universidades, gremios y municipios trabajaban en iniciativas circulares sin visibilidad mutua, duplicando esfuerzos.',
    challenge: 'Crear una infraestructura digital colaborativa para mapear actores, compartir avances de proyectos y facilitar sinergias.',
    system: 'Directorio inteligente y plataforma de networking técnico con filtros avanzados y visualización relacional de iniciativas.',
    whatWasBuilt: 'Plataforma colaborativa con perfiles institucionales verificados, banco de proyectos y cartelera de oportunidades de vinculación.',
    howConnected: 'La base de proyectos se indexa para permitir búsquedas semánticas que conectan necesidades de una empresa con capacidades de otra.',
    technology: ['Full-Stack Web', 'PostgreSQL', 'Motor de Relaciones Semánticas', 'Tailwind CSS', 'TypeScript'],
    nextEvolution: 'Agente de matchmaking inteligente que sugiere alianzas automáticas basadas en la complementariedad de flujos de materiales.',
    relatedCapabilities: ['Plataformas Digitales', 'Redes de Datos', 'Arquitectura de Software'],
    stepFlow: ['ACTORES', 'PROYECTOS', 'INDEXACIÓN RELACIONAL', 'DIRECTORIO VIVO', 'SINERGIAS'],
    summary: 'Infraestructura digital diseñada para centralizar información de proyectos, recursos, iniciativas y actores del ecosistema de economía circular.',
    takeaway: 'INFRAESTRUCTURA QUE CONECTA INFORMACIÓN Y COMUNIDADES EN TORNO A OBJETIVOS COMUNES.',
    impactKpis: [
      '+300 Actores y organizaciones mapeadas en red',
      'Matchmaking relacional de capacidades y residuos',
      'Visibilidad unificada de proyectos sectoriales'
    ],
    route: '/experiencia/red-ecc',
    disclaimer: 'Proyecto desarrollado como parte de la trayectoria previa del equipo fundador de ORQOMI y sus alianzas tecnológicas estratégicas.'
  },
  {
    id: 'case-signal-director',
    slug: 'signal-director',
    title: 'Signal Director',
    subtitle: 'Plataforma aliada para la reflexión estratégica confidencial de líderes empresariales',
    category: 'LEADERSHIP / STRATEGIC INTELLIGENCE',
    context: 'En los comités ejecutivos y directorios, la complacencia jerárquica y el sesgo sectorial impiden detectar señales débiles de transformación antes de que sea tarde.',
    challenge: 'Crear un entorno seguro y estructurado donde líderes de industrias no competidoras confronten supuestos y sinteticen criterio directivo.',
    system: 'Plataforma con modelos de gobernanza estricta, dinámicas de disidencia estructurada y síntesis inteligente bajo protocolos de confidencialidad institucional.',
    whatWasBuilt: 'Suite de diagnóstico directivo, radares de puntos ciegos organizacionales y canal de procesamiento de inteligencia estratégica con retención cero.',
    howConnected: 'Las observaciones de líderes se anonimizan -> se procesan con agentes de síntesis privada -> se contrastan con señales interindustria -> se devuelven como mapas de criterio accionable.',
    technology: ['Modelos Privados con Zero-Retention', 'Criptografía por Sesión', 'React 19', 'Radares SVG Interactivos', 'TypeScript'],
    nextEvolution: 'Memoria reflexiva directiva para comités: auditar no solo los resultados comerciales, sino el proceso de razonamiento estratégico que llevó a la decisión.',
    relatedCapabilities: ['Inteligencia Estratégica', 'Gobernanza de Modelos', 'Confidencialidad Extrema'],
    stepFlow: ['SESIÓN CONFIDENCIAL', 'DISIDENCIA ESTRUCTURADA', 'SÍNTESIS POR AGENTES', 'RADAR DE PUNTOS CIEGOS', 'CRITERIO EJECUTIVO'],
    summary: 'Iniciativa digital aliada orientada a acompañar experiencias confidenciales de reflexión y trabajo estratégico para líderes empresariales de alta dirección.',
    takeaway: 'CONFIDENTIAL EXECUTIVE INTELLIGENCE. ESTRUCTURA PARA EL JUICIO HUMANO DE MÁXIMO IMPACTO.',
    impactKpis: [
      'Garantía contractual de Zero-Data-Retention',
      'Síntesis ejecutiva de disidencias en < 5 minutos',
      'Ambiente criptográfico por sesión para directores'
    ],
    route: '/experiencia/signal-director',
    disclaimer: 'Proyecto desarrollado y operado en alianza estratégica tecnológica e institucional con el equipo fundador de ORQOMI.'
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    name: 'OBSERVAR',
    subtitle: 'Comprender el problema real',
    summary: 'Mapear usuarios, procesos, fricción, información y resultados esperados.',
    detail: 'No empezamos escribiendo prompts ni seleccionando modelos. Nos sentamos con quienes operan el proceso para entender qué duele, dónde se pierde tiempo y qué datos existen realmente en la organización.'
  },
  {
    step: '02',
    name: 'ORDENAR',
    subtitle: 'Determinar qué vale la pena resolver',
    summary: 'Definir arquitectura, necesidades de datos, dependencias, riesgos y criterios de éxito.',
    detail: 'Separamos lo que requiere código determinístico de lo que amerita modelos probabilísticos. Establecemos el presupuesto de tokens, los guardrails éticos y la topología de seguridad necesaria.'
  },
  {
    step: '03',
    name: 'ORQUESTAR',
    subtitle: 'Conectar inteligencias y sistemas',
    summary: 'Conectar modelos, conocimiento, sistemas, herramientas, flujos de trabajo y agentes.',
    detail: 'Construimos la Capa de Orquestación y los servidores MCP. Diseñamos cómo los agentes dialogan con las APIs internas, qué memoria episódica conservan y cómo fluyen los datos entre componentes.'
  },
  {
    step: '04',
    name: 'OPERAR',
    subtitle: 'Construir, probar y monitorear',
    summary: 'Construir, probar, desplegar y monitorear en entornos operacionales reales con Human-in-the-loop.',
    detail: 'Integramos permisos granulares, logging de auditoría, gateways de aprobación humana y suites de evaluación de deriva. El sistema no es un demo: opera en producción conectado al negocio real.'
  },
  {
    step: '05',
    name: 'OPTIMIZAR',
    subtitle: 'Medir y evolucionar continuamente',
    summary: 'Medir el resultado, mejorar el sistema, agregar nuevas capacidades y reutilizar la arquitectura.',
    detail: 'La arquitectura modular de ORQOMI permite cambiar el modelo base cuando aparece una alternativa más económica o potente sin rehacer la integración, expandiendo las capacidades hacia nuevos casos de uso.'
  }
];

export const ENGAGEMENT_MODELS = [
  {
    number: '01',
    name: 'AI DISCOVERY',
    subtitle: 'Para organizaciones que necesitan identificar qué vale la pena construir.',
    description: 'Diagnóstico técnico y de negocio para priorizar los casos de uso donde la inteligencia artificial genera un retorno verificable.',
    deliverables: [
      'Mapa de oportunidades y fricciones operacionales',
      'Evaluación de viabilidad de datos y sistemas existentes',
      'Propuesta de arquitectura técnica y estimación de costos',
      'Roadmap priorizado de despliegue por fases'
    ],
    idealFor: 'Comités directivos, gerencias de innovación y líderes de TI.'
  },
  {
    number: '02',
    name: 'AI BUILD',
    subtitle: 'ORQOMI diseña y construye el sistema inteligente completo.',
    description: 'Ejecución integral de proyectos de software con IA: desde la capa MCP y los agentes hasta la interfaz de usuario en producción.',
    deliverables: [
      'Agentes autónomos con guardrails determinísticos',
      'Capa MCP conectada a bases de datos y APIs',
      'Productos AI-native y plataformas web completas',
      'Puntos de control Human-in-the-loop y telemetría'
    ],
    idealFor: 'Empresas que requieren soluciones a medida listas para operar.'
  },
  {
    number: '03',
    name: 'AI PARTNER',
    subtitle: 'ORQOMI se suma a un equipo existente de software o tecnología.',
    description: 'Actuamos como la unidad especializada de IA de tu fábrica de software o consultora, aportando arquitectura y ejecución de frontera.',
    deliverables: [
      'Colaboración Behind Your Brand (marca blanca)',
      'Co-desarrollo visible Alongside Your Team',
      'Entrega de componentes de IA específicos llave en mano',
      'Acompañamiento en licitaciones y preventa técnica'
    ],
    idealFor: 'Software factories, consultoras de tecnología y equipos de producto.'
  },
  {
    number: '04',
    name: 'EVOLVE',
    subtitle: 'Desarrollo y optimización continua post-lanzamiento.',
    description: 'Mantenimiento evolutivo para que tus sistemas inteligentes no queden obsoletos frente al avance vertiginoso de los modelos de base.',
    deliverables: [
      'Evaluación continua y testbeds de deriva',
      'Optimización de latencia y reducción de costos de inferencia',
      'Adición de nuevos agentes, herramientas y fuentes de datos',
      'Actualización a nuevos modelos de frontera sin fricción'
    ],
    idealFor: 'Empresas con sistemas en producción que exigen mejora continua.'
  }
];

export const TECHNOLOGIES_WE_BUILD_WITH = [
  { name: 'Model Context Protocol', category: 'PROTOCOLO // ESTÁNDAR ABIERTO' },
  { name: 'Anthropic / Claude', category: 'MODELOS DE RAZONAMIENTO' },
  { name: 'OpenAI / GPT-4o', category: 'MODELOS DE FRONTERA' },
  { name: 'Google / Gemini', category: 'MULTIMODAL & VENTANA EXTENSA' },
  { name: 'Modelos Open Source', category: 'LLAMA & DEEPSEEK' },
  { name: 'n8n & Webhooks', category: 'BUS DETERMINÍSTICO' },
  { name: 'Vector DBs (pgvector / Qdrant)', category: 'MEMORIA SEMÁNTICA' },
  { name: 'PostgreSQL / Timescale', category: 'NÚCLEO RELACIONAL' },
  { name: 'REST & GraphQL APIs', category: 'PUENTE DE INTEGRACIÓN' },
  { name: 'Moodle LMS', category: 'ECOSISTEMAS EDUCATIVOS' },
  { name: 'Zod & Schema Guards', category: 'VALIDACIÓN ESTRUCTURADA' },
  { name: 'Docker & Private Cloud', category: 'CÓMPUTO SOBERANO' }
];

export const LABS_PROJECTS: LabProject[] = [
  {
    id: 'lab-01',
    code: 'EXP-MCP-07',
    title: 'Servidores MCP con Gobernanza Criptográfica en Edge',
    area: 'MCP & PROTOCOLS',
    status: 'PRODUCTION',
    description: 'Implementación de servidores Model Context Protocol capaces de verificar firmas HMAC en microsegundos antes de exponer herramientas a modelos remotos.',
    technicalSpecs: 'TypeScript / WebAssembly / Cloudflare Workers / Ed25519 Signatures',
    keyFinding: 'Reduce la latencia de tool-calling a menos de 12ms manteniendo aislamiento estricto de red.'
  },
  {
    id: 'lab-02',
    code: 'EXP-MAGENT-03',
    title: 'Coordinación Multiagente con Topología Líder-Especialistas',
    area: 'MULTI-AGENT SYSTEMS',
    status: 'TESTING',
    description: 'Arquitectura donde un agente director descompone consultas analíticas complejas en subtareas paralelas para agentes SQL, vectoriales y de síntesis.',
    technicalSpecs: 'LangGraph / State Graphs / Asynchronous Queue / Deterministic Barrier',
    keyFinding: 'Aumenta en 44% la precisión en consultas con cruces de más de tres variables independientes.'
  },
  {
    id: 'lab-03',
    code: 'EXP-MEM-02',
    title: 'Memoria Episódica Jerárquica para Asistentes de Dominio',
    area: 'MEMORY & CONTEXT',
    status: 'PROTOTYPE',
    description: 'Mecanismo de compresión y consolidación de contexto para permitir que un asistente mantenga hilo conversacional coherente a lo largo de meses sin desbordar tokens.',
    technicalSpecs: 'Hierarchical Vector Embeddings / Episodic Buffer / Graph Storage / Semantic Pruning',
    keyFinding: 'Preserva hechos clave de proyectos a una fracción del costo de almacenar el historial completo.'
  },
  {
    id: 'lab-04',
    code: 'EXP-GENUI-01',
    title: 'Generative UI: Tablas y Gráficos Sintetizados On-the-Fly',
    area: 'GENERATIVE UI',
    status: 'PROTOTYPE',
    description: 'Generación reactiva de componentes de interfaz basados en la estructura del resultado devuelto por una llamada MCP, sin layouts predefinidos.',
    technicalSpecs: 'React 19 Server Components / JSON Schema to UI Mapping / Micro-widgets SVG',
    keyFinding: 'La interfaz se ensambla dinámicamente según la respuesta, evitando pantallas estáticas innecesarias.'
  },
  {
    id: 'lab-05',
    code: 'EXP-EVAL-05',
    title: 'Testbeds Automatizados para Detección de Deriva en Agentes',
    area: 'MODEL EVALUATION',
    status: 'EXPLORING',
    description: 'Marco de evaluación continua para medir si actualizaciones en los pesos de los modelos base alteran la tasa de éxito de herramientas MCP.',
    technicalSpecs: 'Automated Evals / Synthetic Benchmark Suites / CI/CD Pipeline Integration',
    keyFinding: 'Permite advertir degradaciones de sintaxis de tool calling antes de desplegar en producción.'
  },
  {
    id: 'lab-06',
    code: 'EXP-COMPUSE-01',
    title: 'Computer Use Asistido para Tareas Administrativas Repetitivas',
    area: 'COMPUTER USE & AUTOMATION',
    status: 'EXPLORING',
    description: 'Exploración de agentes con capacidad de operar interfaces web legacy que carecen de API pública, con supervisión humana en cada clic sensible.',
    technicalSpecs: 'OS Sandbox Environment / Vision-guided Navigation / Human Approval Gatekeeper',
    keyFinding: 'Factible para tareas de ingesta de datos en sistemas públicos que no ofrecen webhooks.'
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'art-01',
    slug: 'que-es-mcp-y-como-transforma-software',
    title: 'Qué es Model Context Protocol (MCP) y cómo puede transformar tu software existente',
    category: 'ARQUITECTURA & PROTOCOLOS',
    readTime: '6 min',
    date: 'Octubre 2025',
    summary: 'El protocolo abierto está cambiando la forma de conectar IA con bases de datos y APIs. Analizamos por qué supera a los plugins y funciones aisladas.',
    content: [
      'Durante el último año, conectar modelos de lenguaje con sistemas externos ha sido un desafío fragmentado. Cada proveedor inventó su propio formato de tool calling, obligando a reescribir integraciones cada vez que se cambiaba de modelo.',
      'Model Context Protocol (MCP) resuelve este problema de raíz. Es un estándar abierto que separa el modelo del servidor de herramientas. Un servidor MCP expone datos, herramientas y recursos a cualquier cliente compatible (Claude Desktop, Cursor, o tu propia plataforma web).',
      'En ORQOMI diseñamos servidores MCP como la capa viva que permite a las organizaciones convertir reporterías estáticas en interfaces consultivas con seguridad de nivel empresarial.'
    ],
    keywords: ['MCP', 'Model Context Protocol', 'Integración', 'APIs', 'Arquitectura'],
    practicalTakeaway: 'Un único servidor MCP puede servir a agentes internos, interfaces web corporativas y entornos de desarrollo.'
  },
  {
    id: 'art-02',
    slug: 'agentes-ia-vs-chatbots',
    title: 'Agentes de IA vs. Chatbots: La diferencia entre responder y trabajar',
    category: 'AGENTES & AUTOMATIZACIÓN',
    readTime: '5 min',
    date: 'Octubre 2025',
    summary: 'Un chatbot se limita a generar texto plausible. Un agente comprende un objetivo, consulta datos reales, utiliza herramientas, ejecuta procesos y solicita autorización cuando es necesario.',
    content: [
      'Muchas empresas se desilusionaron con los chatbots tradicionales porque sólo respondían texto sin poder hacer nada concreto. Cuando un usuario preguntaba por el estado de su pedido o pedía modificar una reserva, el bot quedaba ciego.',
      'Un agente de inteligencia artificial es fundamentalmente diferente: posee herramientas (tools), memoria estructurada, capacidad de planificación en varios pasos y límites de ejecución verificables.',
      'El verdadero valor para las empresas radica en los agentes capaces de orquestar flujos de trabajo completos manteniendo a los humanos en los puntos críticos de decisión (human-in-the-loop).'
    ],
    keywords: ['Agentes IA', 'Chatbots', 'Automatización', 'Sistemas Multiagente', 'Human-in-the-loop'],
    practicalTakeaway: 'Si tu solución no puede consultar una base de datos ni activar un webhook, es un chatbot, no un agente.'
  },
  {
    id: 'art-03',
    slug: 'como-conectar-ia-con-datos-empresariales',
    title: 'Cómo conectar IA con datos empresariales sin comprometer la seguridad',
    category: 'DATOS & GOBERNANZA',
    readTime: '7 min',
    date: 'Octubre 2025',
    summary: 'Guía técnica para conectar modelos de lenguaje con ERPs y bases SQL manteniendo aislamiento de credenciales y auditoría continua.',
    content: [
      'El principal temor de los directores de tecnología es que un modelo de lenguaje tenga acceso irrestricto a la base de datos o que los datos corporativos se usen para reentrenar modelos públicos.',
      'La solución pasa por una capa de abstracción semántica donde el modelo solo interactúa con esquemas de solo lectura validados o funciones estandarizadas (MCP) con cuotas y permisos por usuario.',
      'La telemetría detallada de cada inferencia y la retención cero de datos en los proveedores de API son requisitos ineludibles para cualquier despliegue corporativo serio.'
    ],
    keywords: ['Datos Empresariales', 'Seguridad IA', 'SQL Agents', 'Gobernanza', 'Zero Retention'],
    practicalTakeaway: 'Nunca entregues una cadena de conexión directa a un LLM; expón consultas parametrizadas a través de un servidor MCP.'
  },
  {
    id: 'art-04',
    slug: 'de-mirar-reportes-a-conversar-con-tus-datos',
    title: 'De mirar reportes a conversar con tus datos: El fin de las pantallas para cada pregunta',
    category: 'DATOS CONVERSACIONALES',
    readTime: '7 min',
    date: 'Septiembre 2025',
    summary: 'Un dashboard responde las preguntas imaginadas el día que se diseñó. Una capa de inteligencia permite formular hipótesis nuevas y cruzar variables sin esperar semanas de desarrollo.',
    content: [
      'El paradigma tradicional del Business Intelligence consiste en predecir qué gráficos necesitará un gerente y diseñar tableros con filtros fijos. Cuando surge una pregunta no anticipada, el equipo de TI debe crear una nueva vista o exportar a hojas de cálculo.',
      'Al incorporar una capa MCP sobre el almacén de datos, la organización puede interrogar indicadores cruzados directamente: "¿Qué proyectos aumentaron residuos en el último trimestre y cómo se correlaciona con el consumo de agua?".',
      'El sistema no reemplaza el dashboard; lo complementa con una interfaz viva de exploración y síntesis ejecutiva.'
    ],
    keywords: ['Conversational Data', 'Dashboards', 'BI', 'SQL Agents', 'MCP'],
    practicalTakeaway: 'Conversational Data no compite con el dashboard; resuelve las preguntas exploratorias que el dashboard no anticipó.'
  },
  {
    id: 'art-05',
    slug: 'que-es-una-arquitectura-multiagente',
    title: 'Qué es una arquitectura multiagente y cuándo conviene implementarla',
    category: 'ARQUITECTURA & AGENTES',
    readTime: '6 min',
    date: 'Septiembre 2025',
    summary: 'Por qué dividir una tarea compleja entre varios agentes especializados supera a un único prompt omnipotente.',
    content: [
      'Intentar que un único prompt resuelva la extracción de datos, la validación de negocio, el cálculo financiero y la redacción final suele provocar alucinaciones y degradación de instrucciones.',
      'Una arquitectura multiagente asigna roles acotados: un agente investigador busca los hechos, un agente auditor verifica inconsistencias y un agente redactor formatea el informe.',
      'El estado se comparte mediante grafos determinísticos (como LangGraph) que aseguran que ningún paso se ejecute sin cumplir las condiciones previas.'
    ],
    keywords: ['Multiagente', 'LangGraph', 'Sistemas Distribuidos', 'Especialización', 'Arquitectura'],
    practicalTakeaway: 'Usa multiagentes solo cuando la tarea tenga etapas con criterios de aceptación independientes.'
  },
  {
    id: 'art-06',
    slug: 'ia-en-moodle-y-educacion-superior',
    title: 'IA en Moodle: Cómo transformar un LMS en un entorno inteligente de aprendizaje',
    category: 'EDUCACIÓN & EDTECH',
    readTime: '8 min',
    date: 'Septiembre 2025',
    summary: 'Acompañar a estudiantes con tutores anclados al contenido del curso y asistir a los docentes en la creación de actividades sin poner en riesgo la privacidad.',
    content: [
      'Moodle es el estándar global en universidades y centros de formación en Chile y América Latina. Sin embargo, en la mayoría de las instituciones opera como un simple repositorio de PDFs.',
      'Al integrar agentes de IA con permisos basados en roles y conexión a los materiales de cada asignatura, cada estudiante cuenta con un asistente disponible 24/7 que conoce exactamente la bibliografía y el programa del curso.',
      'La clave de una implementación exitosa radica en la retención cero de datos de los estudiantes y en la trazabilidad estricta de las respuestas hacia los textos oficiales de la cátedra.'
    ],
    keywords: ['Moodle', 'IA Educación', 'EdTech', 'RAG Académico', 'Chile'],
    practicalTakeaway: 'El asistente debe operar como tutor socrático que guía con preguntas en lugar de resolver la prueba por el estudiante.'
  },
  {
    id: 'art-07',
    slug: 'ia-aplicada-a-educacion-principios-eticos',
    title: 'IA aplicada a educación: Principios éticos y metodológicos',
    category: 'EDUCACIÓN & ÉTICA',
    readTime: '5 min',
    date: 'Agosto 2025',
    summary: 'Cómo garantizar rigor pedagógico, equidad y respeto a la privacidad de los estudiantes en soluciones EdTech.',
    content: [
      'La adopción de IA en entornos académicos genera dilemas legítimos sobre plagio, sesgo y dependencia cognitiva.',
      'En ORQOMI diseñamos sistemas que incentivan el pensamiento crítico, transparentan las fuentes y otorgan control completo al cuerpo docente sobre qué materiales puede consultar el modelo.',
      'Los datos de interacciones nunca se comercializan ni se emplean para crear perfiles publicitarios de estudiantes.'
    ],
    keywords: ['Ética IA', 'Educación', 'Privacidad', 'Docencia', 'Pedagogía'],
    practicalTakeaway: 'Involucra a los docentes desde el día uno en la definición de las reglas pedagógicas del asistente.'
  },
  {
    id: 'art-08',
    slug: 'como-identificar-procesos-que-vale-la-pena-automatizar',
    title: 'Cómo identificar procesos que realmente vale la pena automatizar con IA',
    category: 'ESTRATEGIA & NEGOCIO',
    readTime: '5 min',
    date: 'Agosto 2025',
    summary: 'No todo proceso requiere un LLM. Analizamos la matriz de decisión entre automatización determinística y flujos que requieren interpretación semántica.',
    content: [
      'Uno de los errores más frecuentes en la adopción de IA es intentar resolver con modelos probabilísticos tareas que se resuelven mejor con código determinístico y reglas de negocio.',
      'La IA aporta valor real en los puntos de contacto donde la información no viene estructurada: correos de clientes, planos, fotografías de faena, audios o contratos.',
      'En ORQOMI combinamos n8n, webhooks y bases de datos con modelos de frontera solo en el eslabón donde se requiere juicio analítico, logrando sistemas robustos y de bajo costo operativo.'
    ],
    keywords: ['n8n', 'Automatización', 'Estrategia IA', 'Costos LLM', 'Productividad'],
    practicalTakeaway: 'Automatiza con código lo determinístico; usa LLMs solo donde se requiere interpretar lenguaje no estructurado.'
  },
  {
    id: 'art-09',
    slug: 'rag-vs-mcp-que-necesitas-realmente',
    title: 'RAG vs. MCP: ¿Qué arquitectura necesita realmente tu empresa?',
    category: 'ARQUITECTURA & PROTOCOLOS',
    readTime: '6 min',
    date: 'Agosto 2025',
    summary: 'RAG resuelve la recuperación de conocimiento estático; MCP permite a la IA interactuar con sistemas vivos y ejecutar herramientas. Cómo combinarlos armónicamente.',
    content: [
      'Durante 2023 y 2024, Retrieval-Augmented Generation (RAG) fue la solución predominante para que los modelos no alucinaran sobre documentos internos. Sin embargo, RAG es esencialmente de solo lectura.',
      'Model Context Protocol introduce la dimensión de acción y consulta en tiempo real. A través de MCP, el modelo no solo lee un PDF: puede consultar el balance contable de hoy en SAP o ejecutar un cálculo en una API interna.',
      'En la práctica, las soluciones empresariales más potentes utilizan RAG para el contexto documental y MCP para la interacción viva con bases transaccionales.'
    ],
    keywords: ['RAG', 'MCP', 'Arquitectura de Datos', 'Bases Vectoriales', 'APIs'],
    practicalTakeaway: 'RAG te dice qué dice el documento; MCP le permite al modelo saber qué pasa hoy en tu sistema y actuar.'
  },
  {
    id: 'art-10',
    slug: 'como-disenar-sistemas-human-in-the-loop',
    title: 'Cómo diseñar sistemas Human-in-the-loop eficaces y sin fricción',
    category: 'GOBERNANZA & UX',
    readTime: '6 min',
    date: 'Julio 2025',
    summary: 'Integrar supervisión humana no debe significar ralentizar la operación. Puntos de aprobación asíncronos y alertas basadas en umbrales de confianza.',
    content: [
      'Un sistema autónomo sin supervisión es un riesgo; un sistema que pide permiso para cada acción irrelevante es una molestia que los usuarios terminarán apagando.',
      'El diseño de Human-in-the-loop requiere clasificar las acciones según su reversibilidad e impacto financiero. Acciones reversibles de bajo impacto se ejecutan de inmediato con log; transferencias o cambios de estado exigen aprobación explícita.',
      'Interfaces como notificaciones interactivas de Slack o tarjetas web con vista previa de diferencias permiten al líder autorizar en un clic con contexto completo.'
    ],
    keywords: ['Human-in-the-loop', 'Gobernanza', 'UX de Agentes', 'Supervisión', 'Seguridad'],
    practicalTakeaway: 'Pide aprobación humana solo cuando la acción sea irreversible o comprometa recursos financieros sensibles.'
  },
  {
    id: 'art-11',
    slug: 'como-evaluar-un-agente-de-ia',
    title: 'Cómo evaluar un agente de IA antes de llevarlo a producción',
    category: 'INGENIERÍA & TESTING',
    readTime: '7 min',
    date: 'Julio 2025',
    summary: 'Métricas cuantitativas, datasets sintéticos y matrices de aserción para garantizar fiabilidad en entornos empresariales.',
    content: [
      'Probar un agente manualmente con tres preguntas no es suficiente para salir a producción. Se requieren testbeds automatizados con cientos de casos de prueba.',
      'Evaluamos tres dimensiones: tasa de éxito en el llamado de herramientas (tool calling accuracy), consistencia semántica de la respuesta y apego a las restricciones éticas.',
      'Medir la tasa de éxito antes de cada release previene regresiones silenciosas provocadas por cambios en los proveedores de modelos.'
    ],
    keywords: ['Evaluación IA', 'Testbeds', 'Calidad de Software', 'Regresiones', 'Benchmarks'],
    practicalTakeaway: 'Crea un dataset de 50 preguntas complejas de tu negocio y córrelo en CI/CD antes de actualizar cualquier prompt o modelo.'
  },
  {
    id: 'art-12',
    slug: 'ia-aplicada-a-sostenibilidad-y-construccion',
    title: 'IA aplicada a sostenibilidad y construcción: Casos reales en Chile',
    category: 'SOSTENIBILIDAD & INDUSTRIA',
    readTime: '6 min',
    date: 'Junio 2025',
    summary: 'Cómo la inteligencia artificial optimiza el reciclaje de escombros, reduce la huella de carbono y simplifica el cumplimiento normativo en faenas.',
    content: [
      'El sector construcción enfrenta metas ambiciosas de reducción de residuos de construcción y demolición (RCD). Sin embargo, en obra los jefes de faena carecen de tiempo para clasificar manualmente normativas complejas.',
      'Sistemas especializados como R.I.T.A. y tableros ambientales conversacionales demuestran cómo la tecnología ayuda a conectar faenas con gestores certificados y mitigar desvíos hídricos tempranamente.',
      'La clave está en no inventar procesos nuevos para los obreros, sino integrar la asistencia de IA en los canales que ya utilizan.'
    ],
    keywords: ['Sostenibilidad', 'Construcción', 'RCD', 'Chile', 'Economía Circular'],
    practicalTakeaway: 'El mejor asistente ambiental en faenas es aquel que responde en 5 segundos con el teléfono en terreno.'
  },
  {
    id: 'art-13',
    slug: 'automatizacion-con-n8n-mas-ia',
    title: 'Automatización con n8n + IA: La combinación perfecta de determinismo y razonamiento',
    category: 'AUTOMATIZACIÓN & ARQUITECTURA',
    readTime: '5 min',
    date: 'Junio 2025',
    summary: 'Por qué unir una herramienta de workflows como n8n con agentes de IA es superior a construir sistemas puramente probabilísticos.',
    content: [
      'n8n aporta conectores probados a cientos de APIs, colas de ejecución garantizadas, reintentos automáticos y trazabilidad paso a paso.',
      'Al insertar un nodo de agente de IA dentro de un flujo n8n, obtenemos lo mejor de ambos mundos: la solidez del código determinístico con la flexibilidad semántica del LLM.',
      'En ORQOMI utilizamos n8n como el bus operacional que orquesta la ejecución física de las decisiones tomadas por los agentes.'
    ],
    keywords: ['n8n', 'Workflows', 'Automatización', 'APIs', 'Sistemas Híbridos'],
    practicalTakeaway: 'Usa n8n para mover los datos y manejar reintentos; usa la IA solo para transformar o tomar la decisión.'
  },
  {
    id: 'art-14',
    slug: 'como-construir-un-producto-ai-native',
    title: 'Cómo construir un producto AI-native desde cero: Principios de diseño',
    category: 'DISEÑO DE PRODUCTO & UX',
    readTime: '7 min',
    date: 'Mayo 2025',
    summary: 'Dejar atrás la barra de búsqueda y el formulario rígido: patrones de interacción, componentes dinámicos y persistencia de memoria.',
    content: [
      'Construir un producto AI-native no significa agregar un chatbot a un software existente; significa concebir la experiencia de usuario asumiendo que el sistema puede inferir intenciones y sintetizar interfaces sobre la marcha.',
      'Patrones como Generative UI permiten que la pantalla pase de un formulario a una tabla interactiva o a un resumen ejecutivo según lo que requiera la tarea.',
      'La arquitectura debe separar el almacenamiento transaccional de la memoria semántica para ofrecer respuestas veloces y personalizadas.'
    ],
    keywords: ['AI-Native', 'Product Design', 'Generative UI', 'UX', 'SaaS Moderno'],
    practicalTakeaway: 'Diseña el producto pensando en qué puede hacer el sistema por el usuario antes de que éste tenga que pedírselo.'
  }
];
