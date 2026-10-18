import takeoffEspanaImg from '../assets/takeoff-espana.jpg';

export type Language = 'it' | 'es' | 'en';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    skills: string;
    projects: string;
    career: string;
    education: string;
    contact: string;
  };
  hero: {
    availableBadge: string;
    greeting: string;
    name: string;
    roles: string[];
    bio: string;
    ctaContact: string;
    ctaProjects: string;
    badgeRole: string;
    badgeId: string;
    dragPrompt: string;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    description1: string;
    description2: string;
    metrics: {
      experience: { value: string; label: string };
      companies: { value: string; label: string };
      mrr: { value: string; label: string };
      retention: { value: string; label: string };
    };
    highlights: string[];
    quote: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      name: string;
      description: string;
      skills: string[];
    }[];
    languagesTitle: string;
    languages: {
      lang: string;
      level: string;
      detail: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      category: string;
      description: string;
      results: string[];
      tags: string[];
      image: string;
      highlight: string;
    }[];
  };
  career: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      period: string;
      role: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
      image?: string;
    }[];
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    academicTitle: string;
    certificationsTitle: string;
    items: {
      period: string;
      title: string;
      institution: string;
      badge: string;
      highlights: string[];
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    availableStatus: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linkedinLabel: string;
    copyEmail: string;
    copiedEmail: string;
    openEmail: string;
    callWhatsApp: string;
    callPhone: string;
    openLinkedIn: string;
    info: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      linkedinUrl: string;
    };
  };
  footer: {
    role: string;
    allRightsReserved: string;
    builtWith: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  it: {
    nav: {
      home: "Home",
      about: "Chi Sono",
      services: "Cosa Faccio",
      skills: "Competenze",
      projects: "Risultati & Casi Studio",
      career: "Percorso",
      education: "Formazione",
      contact: "Contatti",
    },
    hero: {
      availableBadge: "Disponibile per opportunità B2B SaaS",
      greeting: "Ciao, sono",
      name: "Lorenzo Toccaceli",
      roles: [
        "Customer Success Manager",
        "Specialista Onboarding B2B SaaS",
        "Sviluppo ed Espansione Account",
        "Automazione Flussi CRM",
      ],
      bio: "Customer Success Manager con oltre 10 anni di esperienza tra gestione operativa aziendale, relazione con clienti B2B e tecnologia. Specializzato in onboarding guidato, adozione rapida di prodotto, contenimento del churn e automazione dei processi CRM nei mercati italiano e spagnolo.",
      ctaContact: "I Miei Contatti",
      ctaProjects: "Esplora i Risultati",
      badgeRole: "Customer Success Manager",
      badgeId: "CSM-LT89",
      dragPrompt: "Trascina o clicca il badge",
    },
    about: {
      badge: "Profilo Professionale",
      title: "Costruisco relazioni solide e",
      titleHighlight: "valore misurabile per i clienti",
      description1:
        "Professionista pragmatico e orientato all'azione, attivo nel Customer Success e nella gestione operativa di piattaforme CRM B2B. Accompagno le aziende clienti dalla fase di avvio iniziale alla piena autonomia operativa, garantendo un percorso di adozione rapido e continuativo.",
      description2:
        "Ho promosso e guidato l'apertura della filiale spagnola di TakeOff CRM, curando direttamente l'onboarding di decine di aziende su entrambi i mercati. Unisco una solida preparazione economico-gestionale a competenze pratiche in automazione con n8n, Make, connettori API e assistenti di intelligenza artificiale.",
      metrics: {
        experience: { value: "10+", label: "Anni di Esperienza Operativa" },
        companies: { value: "208+", label: "Aziende Avviate (Italia e Spagna)" },
        mrr: { value: "31.000 €", label: "MRR Netto Gestito" },
        retention: { value: "153+", label: "Clienti Attivi Fidelizzati" },
      },
      highlights: [
        "Onboarding B2B & Accelerazione Time-to-Value",
        "Espansione Account & Massimizzazione LTV",
        "Integrazione Flussi Operativi con n8n, Make & API",
        "Operatività Multilingua: Italiano, Spagnolo, Inglese",
      ],
      quote:
        "Il Customer Success non è semplice assistenza: è la capacità di trasformare una soluzione software in un moltiplicatore tangibile di ricavi per il cliente.",
    },
    services: {
      badge: "Valore Aggiunto",
      title: "Come genero impatto per",
      subtitle: "l'azienda e i suoi clienti",
      items: [
        {
          title: "Onboarding Guidato & Riduzione del Time-to-Value",
          description:
            "Definizione di percorsi di avviamento strutturati, sessioni formative dedicate ai team operativi e massimizzazione del tasso di adozione nei primi 60 giorni.",
          tags: ["Adozione Utente", "Formazione Clienti", "Time-to-Value", "Onboarding SaaS"],
        },
        {
          title: "Espansione Account & Upselling Strategico",
          description:
            "Individuazione proattiva delle opportunità di crescita all'interno delle aziende clienti, convertendo contratti base in accordi enterprise ad alto valore.",
          tags: ["Espansione Account", "Crescita LTV", "Cross-selling", "Net Retention"],
        },
        {
          title: "Architettura CRM & Automazione dei Flussi con n8n e Make",
          description:
            "Configurazione di TakeOff CRM, orchestrazione di webhook e flussi automatizzati con n8n e Make per sincronizzare lead, contratti e dati senza interventi manuali.",
          tags: ["TakeOff CRM", "n8n & Make", "Webhook e API", "Ottimizzazione Processi"],
        },
        {
          title: "Monitoraggio Salute Account & Prevenzione Churn",
          description:
            "Analisi continua dei pattern di utilizzo, rilevazione tempestiva dei segnali di disaffezione e interventi mirati a protezione dei ricavi ricorrenti.",
          tags: ["Mitigazione Churn", "Health Score", "Retention", "Revisioni Periodiche"],
        },
      ],
    },
    skills: {
      badge: "Competenze & Strumenti",
      title: "Competenze Chiave &",
      subtitle: "Stack Operativo",
      categories: [
        {
          name: "Customer Success & Gestione Clienti B2B",
          description: "Metodologie orientate alla soddisfazione, fidelizzazione ed espansione dei conti",
          skills: [
            "Onboarding Clienti B2B",
            "Adozione di Prodotto e Formazione Utenti",
            "Prevenzione del Churn e Retention",
            "Espansione Account e Upselling",
            "Gestione Portafogli Clienti",
            "Metriche SaaS (MRR, Churn, Net Retention)",
            "Relazioni con Stakeholder Direzionali",
          ],
        },
        {
          name: "Sistemi CRM & Tecnologie di Integrazione",
          description: "Amministrazione e orchestrazione di piattaforme operative e flussi dati",
          skills: [
            "TakeOff CRM",
            "Automazione Flussi con n8n e Make",
            "Integrazioni via Webhook e API",
            "Cloudflare e Vercel",
            "Interrogazione Dati SQL",
            "Microsoft Dynamics NAV e Power BI",
            "Architettura Dati Operativi",
          ],
        },
        {
          name: "Intelligenza Artificiale & Produttività",
          description: "Utilizzo pratico quotidiano dell'AI per ottimizzare i processi di lavoro",
          skills: [
            "Google Antigravity e Assistenti AI",
            "Claude Code e Prompt Engineering",
            "Progettazione Workflow Assistiti da AI",
            "Monitoraggio Conversioni e Lead",
            "Automazione della Documentazione Operativa",
          ],
        },
        {
          name: "Operazioni Aziendali & Gestione Qualità",
          description: "Fondamenta metodologiche di gestione, conformità e rigore organizzativo",
          skills: [
            "Sistemi di Gestione Qualità (ISO 9001 e ISO 13485)",
            "Risoluzione Problemi e Negoziazione",
            "Controllo di Gestione e Indicatori Economici",
            "Coordinamento e Sviluppo Team",
            "Revisioni e Audit di Processo",
          ],
        },
      ],
      languagesTitle: "Padronanza Linguistica",
      languages: [
        {
          lang: "Italiano",
          level: "Madrelingua",
          detail: "Comunicazione fluente, redazione contrattuale, negoziazione e supporto clienti a livello dirigenziale.",
        },
        {
          lang: "Spagnolo",
          level: "Professionale Avanzato",
          detail: "Impiego quotidiano sul mercato spagnolo per onboarding, gestione portafogli clienti e trattative commerciali.",
        },
        {
          lang: "Inglese",
          level: "Intermedio",
          detail: "Supporto tecnico internazionale, partecipazione a riunioni di lavoro e consultazione della documentazione software.",
        },
      ],
    },
    projects: {
      badge: "Casi Studio & Risultati",
      title: "Risultati Concreti &",
      subtitle: "Casi Studio sul Campo",
      viewCaseStudy: "Dettagli Impatto",
      items: [
        {
          id: "takeoff-spain",
          title: "Lancio e Sviluppo TakeOff CRM Spagna",
          subtitle: "Dall'iniziativa di espansione all'avviamento operativo di decine di aziende iberiche",
          category: "Apertura Mercato & Customer Success",
          description:
            "Ho proposto e guidato l'apertura della filiale spagnola di TakeOff CRM, convincendo i vertici italiani a investire. Ho curato l'onboarding localizzato per oltre 60 aziende, raggiungendo 6.000 € di MRR netto.",
          results: [
            "62 aziende complessivamente avviate sul mercato spagnolo",
            "45 clienti attivi continuativi consolidati",
            "6.000 € di MRR netto generato partendo da zero",
            "Modello di onboarding completamente localizzato per il mercato iberico",
          ],
          tags: ["TakeOff CRM", "Espansione Internazionale", "Onboarding Spagna", "Crescita MRR"],
          image: takeoffEspanaImg,
          highlight: "+6.000 € MRR Netto",
        },
        {
          id: "ac-systems-expansion",
          title: "Espansione Account: AC Systems Italia",
          subtitle: "Da un contratto pilota di 3 licenze a un accordo enterprise di 21 licenze",
          category: "Espansione Account",
          description:
            "Attraverso un affiancamento costante e la dimostrazione del ritorno operativo per i team sul campo, ho trasformato un contratto iniziale da 198 € al mese in un accordo enterprise da 666 € al mese.",
          results: [
            "Crescita utenti da 3 a 21 licenze attive",
            "Aumento del valore mensile da 198 € a 666 €",
            "Zero churn e massima adozione da parte dei tecnici operativi",
            "Miglioramento dell'efficienza nei flussi di lavoro aziendali",
          ],
          tags: ["Espansione Account", "Upselling", "B2B SaaS", "Revenue Growth"],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "Espansione Contratto AC Systems",
        },
        {
          id: "automated-workflows",
          title: "Automazioni Onboarding con n8n, Make & API",
          subtitle: "Ottimizzazione dei tempi di attivazione e notifiche preventive di disaffezione",
          category: "Automazione & Processi",
          description:
            "Implementazione di flussi automatizzati con n8n e Make per gestire le nuove registrazioni, inviare materiali formativi tempestivi e notificare al team di Customer Success eventuali anomalie di utilizzo prima che generino disdette.",
          results: [
            "Risparmio del 40% del tempo dedicato a compiti amministrativi ripetitivi",
            "Sincronizzazione in tempo reale tra CRM, webhook e banche dati",
            "Rilevazione precoce delle inattività per la salvaguardia dei contratti",
          ],
          tags: ["n8n & Make", "Webhook", "API", "Alert Preventivi"],
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "-40% Tempo Manuale",
        },
        {
          id: "takeoff-italy-portfolio",
          title: "Gestione Portafoglio Clienti Italia",
          subtitle: "Onboarding e fidelizzazione su scala per oltre 140 aziende clienti",
          category: "Customer Success",
          description:
            "Coordinamento dell'intero ciclo di vita dei clienti sul mercato italiano: sessioni formative mirate, assistenza operativa, coordinamento con gli sviluppatori del software e salvaguardia di 25.000 € di MRR netto.",
          results: [
            "146 aziende avviate con successo nel tempo",
            "Circa 108 clienti attivi stabili e continuativi",
            "25.000 € di MRR netto direttamente presidiato",
            "Feedback di utilizzo tradotti in nuove funzionalità di prodotto",
          ],
          tags: ["TakeOff CRM", "Fidelizzazione", "25k€ MRR", "B2B SaaS"],
          image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "25.000 € MRR Gestito",
        },
      ],
    },
    career: {
      badge: "Percorso Lavorativo",
      title: "Esperienza Professionale &",
      subtitle: "Responsabilità Chiave",
      items: [
        {
          period: "Gen 2025 – Presente",
          role: "Cofondatore & Customer Success Manager",
          company: "TakeOff España",
          location: "Valladolid, Spagna",
          description:
            "Avvio e sviluppo delle operazioni sul mercato spagnolo di TakeOff CRM. Gestione completa dell'onboarding dei clienti iberici, formazione operativa e coordinamento delle attività di marketing locale.",
          achievements: [
            "Promosso con successo l'espansione e l'apertura della filiale in Spagna",
            "62 aziende avviate con 45 clienti attivi consolidati e 6.000 € di MRR netto",
            "Creazione del modello di onboarding e della documentazione in lingua spagnola",
          ],
        },
        {
          period: "Gen 2023 – Presente",
          role: "Customer Success Manager",
          company: "TakeOff CRM Italia",
          location: "Salamanca, Spagna (Remoto)",
          description:
            "Guida all'adozione del software CRM per aziende clienti in Italia. Presidio delle relazioni post-vendita, configurazione delle procedure operative, raccolta esigenze di prodotto e difesa dei ricavi ricorrenti.",
          achievements: [
            "146 aziende avviate e mantenimento di circa 108 clienti attivi continuativi",
            "Presidio e tutela di 25.000 € di MRR netto",
            "Sviluppo di casi concreti di espansione contrattuale su clienti chiave (AC Systems)",
          ],
        },
        {
          period: "Apr 2022 – Dic 2022",
          role: "Account Manager",
          company: "AvaiBook Sports (gruppo idealista)",
          location: "Zaragoza, Spagna (Remoto)",
          description:
            "Studio di mercato e attività commerciali per la piattaforma software dedicata agli eventi sportivi. Dimostrazioni del prodotto, gestione account e supporto tecnico in italiano e inglese.",
          achievements: [
            "Miglioramento delle procedure di accoglienza e supporto continuativo ai clienti",
            "Attività di upselling e fidelizzazione sulla base utenti registrata",
          ],
        },
        {
          period: "Gen 2020 – Feb 2022",
          role: "Capo Settore",
          company: "Bricoman Italia",
          location: "Bologna e Cagliari, Italia",
          description:
            "Membro del comitato di direzione del punto vendita. Gestione e formazione di team operativi di vendita, presidio dei risultati commerciali (fatturato, margini, rotazione magazzino) e qualità del servizio.",
          achievements: [
            "Guida e crescita professionale di team di reparto numerosi",
            "Analisi costante delle metriche economiche e ottimizzazione delle scorte",
          ],
        },
        {
          period: "Gen 2014 – Gen 2020",
          role: "Responsabile Qualità & Amministrazione",
          company: "Umbra S.p.A.",
          location: "Perugia, Italia",
          description:
            "Applicazione e mantenimento dei Sistemi di Gestione Qualità secondo le norme ISO 9001 e ISO 13485. Definizione KPI, audit interni ed esterni, gestione fornitori esteri e contabilità generale.",
          achievements: [
            "Mantenimento continuativo delle certificazioni di qualità internazionali per oltre 4 anni",
            "Controllo rigoroso della conformità procedurale e documentale",
          ],
        },
      ],
    },
    education: {
      badge: "Formazione & Percorso",
      title: "Titoli Accademici &",
      subtitle: "Certificazioni Continue",
      academicTitle: "Percorso Accademico & Titoli di Studio",
      certificationsTitle: "Corsi di Specializzazione & Formazione AI",
      items: [
        {
          period: "2008 – 2013",
          title: "Laurea in Economia dell'Impresa",
          institution: "Università degli Studi di Perugia",
          badge: "Economia e Gestione Aziendale",
          highlights: [
            "Competenze in finanza aziendale, gestione processi d'impresa, bilancio e contabilità",
            "Studio approfondito dell'organizzazione e delle strategie di sviluppo commerciale",
            "Approccio quantitativo orientato all'analisi dei dati numerici d'impresa",
          ],
        },
        {
          period: "Mag 2026 – Giu 2026",
          title: "IA pratica per creare soluzioni di business con Antigravity",
          institution: "CEINPRO",
          badge: "Automazione e Agenti AI",
          highlights: [
            "Sviluppo di flussi operativi intelligenti basati su agenti AI",
            "Integrazione pratica degli assistenti artificiali nei processi di lavoro",
          ],
        },
        {
          period: "Mar 2026 – Apr 2026",
          title: "Corso Pratico in Intelligenza Artificiale (4ª Edizione)",
          institution: "EOI — Escuela de Organización Industrial",
          badge: "Intelligenza Artificiale Applicata",
          highlights: [
            "Impiego operativo dei modelli linguistici nelle attività aziendali",
            "Ottimizzazione della produttività individuale e di squadra con strumenti avanzati",
          ],
        },
        {
          period: "2003 – 2008",
          title: "Diploma di Ragioneria e Perito Commerciale (Informatica)",
          institution: "ITC Vittorio Emanuele II — Perugia",
          badge: "Contabilità e Informatica",
          highlights: [
            "Basi strutturate di contabilità generale, programmazione e banche dati",
          ],
        },
      ],
    },
    contact: {
      badge: "Contatti Diretti",
      title: "Parliamo del successo dei tuoi clienti",
      subtitle: "e delle tue operazioni B2B",
      description:
        "Disponibile per nuove opportunità nel Customer Success B2B SaaS, ruoli di coordinamento operativo ed espansione internazionale dei portafogli clienti.",
      availableStatus: "Aperto a nuove opportunità professionali",
      emailLabel: "Posta Elettronica",
      phoneLabel: "Telefono e WhatsApp",
      locationLabel: "Residenza",
      linkedinLabel: "Profilo Professionale",
      copyEmail: "Copia Email",
      copiedEmail: "Email Copiata!",
      openEmail: "Scrivi un'email",
      callWhatsApp: "Scrivi su WhatsApp",
      callPhone: "Chiama al telefono",
      openLinkedIn: "Visualizza Profilo",
      info: {
        email: "lorenzo.toccaceli@gmail.com",
        phone: "+34 644 564 857",
        location: "Valladolid, Spagna",
        linkedin: "linkedin.com/in/lt89",
        linkedinUrl: "https://linkedin.com/in/lt89",
      },
    },
    footer: {
      role: "Customer Success Manager & Operazioni Aziendali",
      allRightsReserved: "Tutti i diritti riservati.",
      builtWith: "",
      backToTop: "Torna in alto",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      services: "Qué Hago",
      skills: "Competencias",
      projects: "Casos de Éxito",
      career: "Trayectoria",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      availableBadge: "Disponible para oportunidades B2B SaaS",
      greeting: "Hola, soy",
      name: "Lorenzo Toccaceli",
      roles: [
        "Customer Success Manager",
        "Especialista en Onboarding B2B SaaS",
        "Crecimiento y Expansión de Cuentas",
        "Automatización de Flujos CRM",
      ],
      bio: "Customer Success Manager con más de 10 años de experiencia uniendo operaciones de negocio, relación con clientes B2B y tecnología. Especializado en onboarding guiado, adopción de producto, reducción del churn y automatización de procesos CRM en España e Italia.",
      ctaContact: "Mis Contactos",
      ctaProjects: "Ver Casos de Éxito",
      badgeRole: "Customer Success Manager",
      badgeId: "CSM-LT89",
      dragPrompt: "Arrastra o haz clic en la tarjeta",
    },
    about: {
      badge: "Perfil Profesional",
      title: "Construyo relaciones sólidas y",
      titleHighlight: "valor medible para los clientes",
      description1:
        "Profesional pragmático y orientado a la acción, activo en Customer Success y en la gestión operativa de herramientas CRM B2B. Acompaño a las empresas clientes desde el arranque inicial hasta su total autonomía operativa, asegurando un proceso de adopción rápido y continuo.",
      description2:
        "Impulsé y lideré la apertura de la filial española de TakeOff CRM, gestionando directamente el onboarding de decenas de empresas en ambos mercados. Combino formación en ciencias empresariales con competencias prácticas en automatización con n8n, Make, conectores API y asistentes de inteligencia artificial.",
      metrics: {
        experience: { value: "10+", label: "Años de Experiencia Operativa" },
        companies: { value: "208+", label: "Empresas Iniciadas (España e Italia)" },
        mrr: { value: "31.000 €", label: "MRR Neto Gestionado" },
        retention: { value: "153+", label: "Clientes Activos Fidelizados" },
      },
      highlights: [
        "Onboarding B2B y Aceleración del Time-to-Value",
        "Expansión de Cuentas y Maximización del LTV",
        "Integración de Flujos Operativos con n8n, Make y API",
        "Competencia Multilingüe: Español, Italiano, Inglés",
      ],
      quote:
        "El Customer Success no es mero soporte técnico: es la capacidad de transformar un software en un multiplicador tangible de ingresos para el cliente.",
    },
    services: {
      badge: "Propuesta de Valor",
      title: "Cómo genero impacto para",
      subtitle: "tu compañía y sus clientes",
      items: [
        {
          title: "Onboarding Guiado & Aceleración del Time-to-Value",
          description:
            "Diseño de itinerarios estructurados de incorporación, formación adaptada a equipos operativos y maximización de la tasa de adopción en los primeros 60 días.",
          tags: ["Adopción de Usuario", "Formación de Clientes", "Time-to-Value", "Onboarding SaaS"],
        },
        {
          title: "Expansión de Cuentas & Upselling Estratégico",
          description:
            "Detección proactiva de momentos clave de crecimiento dentro de las cuentas, transformando contratos piloto en acuerdos enterprise de alto valor.",
          tags: ["Expansión de Cuenta", "Crecimiento LTV", "Cross-selling", "Net Retention"],
        },
        {
          title: "Arquitectura CRM & Automatización con n8n y Make",
          description:
            "Configuración de TakeOff CRM, orquestación de webhooks y flujos automáticos con n8n y Make para sincronizar contactos, contratos y datos sin tareas manuales.",
          tags: ["TakeOff CRM", "n8n & Make", "Webhooks y API", "Optimización de Procesos"],
        },
        {
          title: "Salud de Cuenta & Prevención Activa de Churn",
          description:
            "Seguimiento continuo de los patrones de uso, detección temprana de señales de desenganche e intervenciones específicas para proteger los ingresos recurrentes.",
          tags: ["Mitigación de Churn", "Health Score", "Retención", "Revisiones Periódicas"],
        },
      ],
    },
    skills: {
      badge: "Habilidades & Herramientas",
      title: "Competencias Clave &",
      subtitle: "Stack Operativo",
      categories: [
        {
          name: "Customer Success & Gestión de Cuentas B2B",
          description: "Metodologías enfocadas a la satisfacción, fidelización y crecimiento de valor",
          skills: [
            "Onboarding de Clientes B2B",
            "Adopción de Producto y Capacitación",
            "Prevención de Churn y Retención",
            "Expansión de Cuentas y Upselling",
            "Gestión de Carteras de Clientes",
            "Métricas SaaS (MRR, Churn, Retención Neta)",
            "Relaciones con Interlocutores Directivos",
          ],
        },
        {
          name: "Sistemas CRM & Tecnologías de Integración",
          description: "Administración y orquestación de plataformas y flujos de datos operativos",
          skills: [
            "TakeOff CRM",
            "Automatización de Flujos con n8n y Make",
            "Integraciones mediante Webhook y API",
            "Cloudflare y Vercel",
            "Consultas y Análisis de Datos SQL",
            "Microsoft Dynamics NAV y Power BI",
            "Estructura de Datos Operativos",
          ],
        },
        {
          name: "Inteligencia Artificial & Eficiencia",
          description: "Aplicación práctica diaria de IA para optimizar procesos y flujos de trabajo",
          skills: [
            "Google Antigravity y Agentes de IA",
            "Claude Code y Prompt Engineering",
            "Construcción de Flujos Asistidos por IA",
            "Seguimiento de Conversiones y Leads",
            "Automatización de Documentación Operativa",
          ],
        },
        {
          name: "Operaciones de Negocio & Control de Calidad",
          description: "Fundamentos sólidos de administración, cumplimiento normativo y rigor",
          skills: [
            "Sistemas de Gestión de Calidad (ISO 9001 e ISO 13485)",
            "Resolución de Incidencias y Negociación",
            "Control Presupuestario e Indicadores de Negocio",
            "Liderazgo y Coordinación de Equipos",
            "Auditorías y Revisiones de Procesos",
          ],
        },
      ],
      languagesTitle: "Competencia Lingüística",
      languages: [
        {
          lang: "Italiano",
          level: "Nativo",
          detail: "Comunicación fluida, redacción contractual, negociación y atención directiva a clientes.",
        },
        {
          lang: "Español",
          level: "Profesional Avanzado",
          detail: "Uso diario en el mercado español para onboarding, gestión de carteras de clientes y acuerdos comerciales.",
        },
        {
          lang: "Inglés",
          level: "Intermedio",
          detail: "Soporte técnico internacional, participación en reuniones de trabajo y documentación técnica.",
        },
      ],
    },
    projects: {
      badge: "Casos de Éxito & Resultados",
      title: "Resultados Cuantitativos &",
      subtitle: "Impacto Demostrable",
      viewCaseStudy: "Ver Impacto",
      items: [
        {
          id: "takeoff-spain",
          title: "Lanzamiento y Desarrollo de TakeOff CRM España",
          subtitle: "Desde la propuesta de inversión hasta la puesta en marcha de decenas de empresas",
          category: "Apertura de Mercado & Customer Success",
          description:
            "Propuse y lideré el lanzamiento de TakeOff CRM en España, convenciendo a la dirección italiana. Diseñé el proceso de onboarding adaptado al mercado español, arrancando más de 60 empresas y alcanzando 6.000 € de MRR neto.",
          results: [
            "62 empresas iniciadas en el mercado español",
            "45 clientes activos recurrentes consolidados",
            "6.000 € de MRR neto generado partiendo de cero",
            "Modelo de onboarding completamente adaptado al mercado español",
          ],
          tags: ["TakeOff CRM", "Expansión Internacional", "Onboarding España", "Crecimiento MRR"],
          image: takeoffEspanaImg,
          highlight: "+6.000 € MRR Neto",
        },
        {
          id: "ac-systems-expansion",
          title: "Expansión de Cuenta: AC Systems",
          subtitle: "De una prueba de 3 licencias a un acuerdo corporativo de 21 licencias",
          category: "Expansión de Cuenta",
          description:
            "Mediante un seguimiento cercano y demostrando el retorno operativo para los técnicos de campo, transformé un contrato inicial de 198 € al mes en un despliegue de 666 € al mes.",
          results: [
            "Crecimiento de 3 a 21 cuentas activas",
            "Incremento del valor de 198 € a 666 € mensuales",
            "Cero cancelaciones y máxima satisfacción en equipos técnicos",
            "Estandarización de procedimientos operativos de campo",
          ],
          tags: ["Expansión de Cuenta", "Upselling", "B2B SaaS", "Revenue Growth"],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "Expansión de Cuenta AC Systems",
        },
        {
          id: "automated-workflows",
          title: "Automatización de Onboarding con n8n, Make & API",
          subtitle: "Reducción de gestiones manuales y avisos automáticos de inactividad",
          category: "Automatización & Procesos",
          description:
            "Implementación de flujos automáticos con n8n y Make para conectar nuevas altas, enviar contenidos de bienvenida y notificar de inmediato al responsable de cuentas ante bajas en la frecuencia de uso.",
          results: [
            "Ahorro del 40% del tiempo dedicado a tareas administrativas repetitivas",
            "Sincronización en tiempo real vía Webhooks y bases de datos",
            "Detección y prevención anticipada de cancelaciones",
          ],
          tags: ["n8n & Make", "Webhooks", "API", "Alertas Proactivas"],
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "-40% Tiempo Manual",
        },
        {
          id: "takeoff-italy-portfolio",
          title: "Gestión de Cartera TakeOff Italia",
          subtitle: "Onboarding y retención continuada para más de 140 clientes B2B",
          category: "Customer Success",
          description:
            "Gestión integral del ciclo de vida del cliente: sesiones formativas interactivas, resolución de dudas operativas, coordinación con el equipo de producto y protección de 25.000 € de MRR neto.",
          results: [
            "146 empresas iniciadas satisfactoriamente a lo largo del tiempo",
            "Aproximadamente 108 clientes activos estables y fidelizados",
            "25.000 € de MRR neto gestionado de manera directa",
            "Aportaciones de usuarios convertidas en mejoras de la plataforma",
          ],
          tags: ["TakeOff CRM", "Fidelización", "25k€ MRR", "B2B SaaS"],
          image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "25.000 € MRR Gestionado",
        },
      ],
    },
    career: {
      badge: "Trayectoria",
      title: "Experiencia Profesional &",
      subtitle: "Responsabilidades Clave",
      items: [
        {
          period: "Ene 2025 – Presente",
          role: "Cofundador y Customer Success Manager",
          company: "TakeOff España",
          location: "Valladolid, España",
          description:
            "Lanzamiento y consolidación de las operaciones en España de TakeOff CRM. Gestión integral del onboarding de clientes españoles, formación operativa y coordinación de iniciativas comerciales locales.",
          achievements: [
            "Promoví con éxito la apertura de la filial en el mercado español",
            "62 empresas iniciadas con 45 cuentas activas y 6.000 € de MRR neto",
            "Elaboración de manuales y recursos formativos en español",
          ],
        },
        {
          period: "Ene 2023 – Presente",
          role: "Customer Success Manager",
          company: "TakeOff CRM Italia",
          location: "Salamanca, España (Remoto)",
          description:
            "Acompañamiento en la adopción del software CRM a empresas en Italia. Configuración de procesos, formación de usuarios, defensa de la retención y generación de upselling.",
          achievements: [
            "146 empresas iniciadas y consolidación de unas 108 cuentas activas",
            "Custodia de 25.000 € de MRR neto gestionado",
            "Casos destacados de ampliación de contrato en clientes clave (AC Systems)",
          ],
        },
        {
          period: "Abr 2022 – Dic 2022",
          role: "Account Manager",
          company: "AvaiBook Sports (grupo idealista)",
          location: "Zaragoza, España (Remoto)",
          description:
            "Análisis de mercado, demostraciones del producto a organizadores deportivos, captación de cuentas y soporte técnico en italiano e inglés.",
          achievements: [
            "Optimización de los procesos de incorporación y soporte técnico continuo",
            "Acciones de upselling y retención sobre la base de usuarios",
          ],
        },
        {
          period: "Ene 2020 – Feb 2022",
          role: "Jefe de Sector",
          company: "Bricoman Italia",
          location: "Bolonia y Cagliari, Italia",
          description:
            "Miembro del comité de dirección de tienda. Selección, dirección y formación de equipos de venta, control de métricas comerciales (ventas, márgenes, rotación) y atención al cliente.",
          achievements: [
            "Liderazgo y desarrollo de equipos de venta numerosos",
            "Análisis constante de resultados y optimización del aprovisionamiento",
          ],
        },
        {
          period: "Ene 2014 – Ene 2020",
          role: "Responsable de Calidad y Administración",
          company: "Umbra S.p.A.",
          location: "Perusa, Italia",
          description:
            "Implantación y seguimiento de los Sistemas de Gestión de Calidad (normas ISO 9001 e ISO 13485). Definición de indicadores, auditorías internas y externas, gestión de compras internacionales y contabilidad.",
          achievements: [
            "Renovación continuada de las certificaciones internacionales durante más de 4 años",
            "Rigor en los procedimientos y cumplimiento de normativas",
          ],
        },
      ],
    },
    education: {
      badge: "Formación & Trayectoria",
      title: "Titulaciones Académicas &",
      subtitle: "Especializaciones Continuas",
      academicTitle: "Formación Académica y Titulaciones",
      certificationsTitle: "Cursos de Especialización y Formación en IA",
      items: [
        {
          period: "2008 – 2013",
          title: "Diplomatura en Ciencias Empresariales",
          institution: "Università degli Studi di Perugia (Italia)",
          badge: "Economía y Gestión Empresarial",
          highlights: [
            "Formación en finanzas corporativas, gestión de procesos de negocio y contabilidad",
            "Estrategia comercial y análisis cuantitativo de empresas",
            "Enfoque analítico y toma de decisiones basada en datos numéricos",
          ],
        },
        {
          period: "May 2026 – Jun 2026",
          title: "IA práctica para crear soluciones de negocio con Antigravity",
          institution: "CEINPRO",
          badge: "Automatización con Agentes de IA",
          highlights: [
            "Desarrollo de soluciones operativas basadas en agentes inteligentes",
            "Integración de asistentes de IA en la actividad empresarial diaria",
          ],
        },
        {
          period: "Mar 2026 – Abr 2026",
          title: "Curso Práctico en Inteligencia Artificial (4ª Edición)",
          institution: "EOI — Escuela de Organización Industrial",
          badge: "Inteligencia Artificial Aplicada",
          highlights: [
            "Aplicación práctica de modelos de lenguaje en procesos corporativos",
            "Optimización de productividad en flujos de trabajo asistidos por IA",
          ],
        },
        {
          period: "2003 – 2008",
          title: "Diploma en Contabilidad e Informática",
          institution: "ITC Vittorio Emanuele II — Perusa, Italia",
          badge: "Contabilidad y Sistemas",
          highlights: [
            "Bases en gestión contable, desarrollo de software y bases de datos relacionales",
          ],
        },
      ],
    },
    contact: {
      badge: "Contacto Directo",
      title: "Hablemos sobre el éxito de tus clientes",
      subtitle: "y tus operaciones comerciales B2B",
      description:
        "Disponible para nuevos retos profesionales en Customer Success B2B SaaS, gestión operativa de cuentas y expansión internacional.",
      availableStatus: "Abierto a nuevas oportunidades profesionales",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono y WhatsApp",
      locationLabel: "Residencia",
      linkedinLabel: "Perfil Profesional",
      copyEmail: "Copiar Correo",
      copiedEmail: "¡Correo Copiado!",
      openEmail: "Escribir un correo",
      callWhatsApp: "Escribir por WhatsApp",
      callPhone: "Llamar por teléfono",
      openLinkedIn: "Ver Perfil",
      info: {
        email: "lorenzo.toccaceli@gmail.com",
        phone: "+34 644 564 857",
        location: "Valladolid, España",
        linkedin: "linkedin.com/in/lt89",
        linkedinUrl: "https://linkedin.com/in/lt89",
      },
    },
    footer: {
      role: "Customer Success Manager & Operaciones de Negocio",
      allRightsReserved: "Todos los derechos reservados.",
      builtWith: "",
      backToTop: "Volver arriba",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "What I Do",
      skills: "Skills",
      projects: "Case Studies",
      career: "Career",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      availableBadge: "Available for B2B SaaS opportunities",
      greeting: "Hi, I'm",
      name: "Lorenzo Toccaceli",
      roles: [
        "Customer Success Manager",
        "B2B SaaS Onboarding Specialist",
        "Account Growth & Expansion",
        "CRM Workflow Automation",
      ],
      bio: "Customer Success Manager with 10+ years of operational experience across business management, B2B client success, and technology. Specialized in guided onboarding, driving user adoption, churn mitigation, and automated CRM operations across Italian and Spanish markets.",
      ctaContact: "Get in Touch",
      ctaProjects: "Explore Case Studies",
      badgeRole: "Customer Success Manager",
      badgeId: "CSM-LT89",
      dragPrompt: "Drag or click the badge",
    },
    about: {
      badge: "Professional Profile",
      title: "Building lasting relationships &",
      titleHighlight: "measurable customer value",
      description1:
        "Action-oriented Customer Success professional with deep operational experience in B2B CRM software platforms. I guide enterprise and SME clients from initial kickoff to complete platform autonomy, ensuring rapid time-to-value and sticky user adoption.",
      description2:
        "Spearheaded the expansion and launch of TakeOff CRM's Spanish division, personally onboarding dozens of accounts across Italy and Spain. I blend business administration acumen with practical workflow automation using n8n, Make, API connectors, and daily artificial intelligence assistants.",
      metrics: {
        experience: { value: "10+", label: "Years of Operations Experience" },
        companies: { value: "208+", label: "Companies Onboarded (Italy & Spain)" },
        mrr: { value: "€31,000", label: "Net MRR Managed" },
        retention: { value: "153+", label: "Active Retained Clients" },
      },
      highlights: [
        "B2B Onboarding & Time-to-Value Acceleration",
        "Account Expansion & LTV Maximization",
        "Operational Workflow Automation with n8n, Make & APIs",
        "Multilingual Fluency: Italian, Spanish, English",
      ],
      quote:
        "Customer Success is not merely technical support: it is the disciplined ability to turn a software solution into an indispensable revenue multiplier for every client.",
    },
    services: {
      badge: "Value Proposition",
      title: "How I deliver high-impact value",
      subtitle: "for your business and clients",
      items: [
        {
          title: "Structured Onboarding & Time-to-Value Acceleration",
          description:
            "Designing guided onboarding journeys, custom enablement for operational teams, and driving rapid user adoption within the first 60 days.",
          tags: ["User Adoption", "Client Training", "Time-to-Value", "SaaS Onboarding"],
        },
        {
          title: "Account Expansion & Strategic Upselling",
          description:
            "Proactively identifying growth triggers across the customer base, turning pilot subscriptions into high-value enterprise partnerships.",
          tags: ["Account Expansion", "LTV Growth", "Cross-selling", "Net Retention"],
        },
        {
          title: "CRM Architecture & Workflow Automation with n8n and Make",
          description:
            "Configuring TakeOff CRM, orchestrating automated n8n and Make pipelines and webhooks to sync leads, contracts, and data without manual overhead.",
          tags: ["TakeOff CRM", "n8n & Make", "Webhooks & APIs", "Process Optimization"],
        },
        {
          title: "Account Health Scoring & Proactive Churn Prevention",
          description:
            "Continuously monitoring platform engagement patterns, detecting disengagement signals early, and executing targeted interventions to protect recurring revenue.",
          tags: ["Churn Mitigation", "Health Score", "Retention", "Periodic Reviews"],
        },
      ],
    },
    skills: {
      badge: "Skills & Tech Stack",
      title: "Core Competencies &",
      subtitle: "Operational Tools",
      categories: [
        {
          name: "Customer Success & B2B Account Management",
          description: "Frameworks focused on customer adoption, retention, and lifetime value expansion",
          skills: [
            "B2B Customer Onboarding",
            "Product Adoption and User Training",
            "Churn Prevention and Retention",
            "Account Expansion and Upselling",
            "Portfolio Health Management",
            "SaaS Metrics (MRR, Churn, Net Retention)",
            "Executive Stakeholder Alignment",
          ],
        },
        {
          name: "CRM Systems & Technical Setup",
          description: "Hands-on orchestration of operational data and platforms",
          skills: [
            "TakeOff CRM",
            "n8n & Make Workflow Automation",
            "API and Webhook Integrations",
            "Cloudflare and Vercel",
            "SQL Data Querying",
            "Microsoft Dynamics NAV and Power BI",
            "Operational Data Architecture",
          ],
        },
        {
          name: "Artificial Intelligence & Tooling",
          description: "Daily practical AI integration to supercharge operational productivity",
          skills: [
            "Google Antigravity and AI Agents",
            "Claude Code and Prompt Engineering",
            "AI-Assisted Workflow Design",
            "Lead Pipeline and Conversion Tracking",
            "Process and Documentation Automation",
          ],
        },
        {
          name: "Business Operations & Quality Systems",
          description: "Methodological rigor in corporate operations and compliance",
          skills: [
            "Quality Management Systems (ISO 9001 and ISO 13485)",
            "Problem Solving and Negotiation",
            "Budget Planning and Financial Metrics",
            "Cross-Functional Team Coordination",
            "Operational Audits and Process Reviews",
          ],
        },
      ],
      languagesTitle: "Language Proficiencies",
      languages: [
        {
          lang: "Italian",
          level: "Native",
          detail: "Fluent communication, contractual drafting, business negotiations, and executive support.",
        },
        {
          lang: "Spanish",
          level: "Full Professional",
          detail: "Daily operational use in Spain for customer onboarding, portfolio management, and commercial agreements.",
        },
        {
          lang: "English",
          level: "Intermediate",
          detail: "International technical support, meeting participation, and software documentation review.",
        },
      ],
    },
    projects: {
      badge: "Case Studies",
      title: "Measurable Impact &",
      subtitle: "Proven Case Studies",
      viewCaseStudy: "View Impact",
      items: [
        {
          id: "takeoff-spain",
          title: "TakeOff CRM Spain Market Expansion",
          subtitle: "From investment pitch to onboarding dozens of Spanish B2B enterprises",
          category: "Market Entry & Customer Success",
          description:
            "Spearheaded TakeOff CRM's expansion into Spain, persuading HQ to invest. Built localized onboarding frameworks and account support, bringing on 60+ accounts and €6,000 net MRR from scratch.",
          results: [
            "62 total companies onboarded into the platform",
            "45 active ongoing accounts consolidated",
            "€6,000 net MRR generated and sustained from zero",
            "Fully localized Spanish onboarding playbook",
          ],
          tags: ["TakeOff CRM", "Market Entry", "Onboarding Spain", "MRR Growth"],
          image: takeoffEspanaImg,
          highlight: "+€6,000 Net MRR",
        },
        {
          id: "ac-systems-expansion",
          title: "Account Expansion: AC Systems",
          subtitle: "Scaling a 3-seat pilot into a 21-seat enterprise contract",
          category: "Account Expansion",
          description:
            "Through consistent value delivery and demonstrating workflow efficiency across field teams, expanded an initial €198/month pilot contract into a €666/month enterprise partnership.",
          results: [
            "Account scaled from 3 to 21 active user seats",
            "Monthly contract value grew from €198 to €666",
            "Zero churn and complete field-team adoption",
            "Custom workflow setup for field operations",
          ],
          tags: ["Account Expansion", "Upselling", "B2B SaaS", "Revenue Growth"],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "AC Systems Account Expansion",
        },
        {
          id: "automated-workflows",
          title: "Onboarding Automation with n8n, Make & APIs",
          subtitle: "Cutting manual admin time and enabling proactive churn alerts",
          category: "Automation & Integrations",
          description:
            "Engineered automated workflows with n8n and Make connecting CRM signups, automated welcome walkthroughs, and proactive user inactivity alerts sent directly to the Customer Success dashboard.",
          results: [
            "40% reduction in manual onboarding administrative overhead",
            "Real-time webhook and API synchronization",
            "Early risk detection preventing potential churn",
          ],
          tags: ["n8n & Make", "Webhooks", "API", "Proactive Alerts"],
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "-40% Manual Effort",
        },
        {
          id: "takeoff-italy-portfolio",
          title: "Italian Client Portfolio Management",
          subtitle: "Scaled onboarding and retention across 140+ B2B companies",
          category: "Customer Success",
          description:
            "Managed the complete customer lifecycle for the Italian domestic market: conducting interactive training, troubleshooting business requirements, and protecting €25,000 in net MRR.",
          results: [
            "146 companies launched over time",
            "Approximately 108 stable, loyal active accounts",
            "€25,000 net MRR directly managed",
            "Direct feedback loops driving core product roadmap",
          ],
          tags: ["TakeOff CRM", "Customer Retention", "€25k MRR", "B2B SaaS"],
          image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlight: "€25,000 MRR Managed",
        },
      ],
    },
    career: {
      badge: "Career Journey",
      title: "Professional Experience &",
      subtitle: "Key Milestones",
      items: [
        {
          period: "Jan 2025 – Present",
          role: "Co-founder & Customer Success Manager",
          company: "TakeOff España",
          location: "Valladolid, Spain",
          description:
            "Spearheaded TakeOff CRM operations in Spain. Managing end-to-end client onboarding, user training, local operational workflows, and Spanish market development.",
          achievements: [
            "Pitched and convinced Italian leadership to establish the Spanish division",
            "62 onboarded companies with 45 active accounts and €6,000 net MRR",
            "Structured complete Spanish-language onboarding and support assets",
          ],
        },
        {
          period: "Jan 2023 – Present",
          role: "Customer Success Manager",
          company: "TakeOff CRM Italia",
          location: "Salamanca, Spain (Remote)",
          description:
            "Guiding client companies through CRM software onboarding. Managing post-sale client relationships, user adoption, feedback loops, and recurring revenue retention.",
          achievements: [
            "146 onboarded companies with approximately 108 active accounts maintained",
            "Managing and safeguarding €25,000 net MRR",
            "Executed high-impact account expansions across key accounts (AC Systems)",
          ],
        },
        {
          period: "Apr 2022 – Dec 2022",
          role: "Account Manager",
          company: "AvaiBook Sports (idealista group)",
          location: "Zaragoza, Spain (Remote)",
          description:
            "Market analysis, commercial software demonstrations for sports event organizers, client onboarding, and technical support in Italian and English.",
          achievements: [
            "Streamlined customer acquisition and technical enablement",
            "Executed upselling initiatives on existing registered clients",
          ],
        },
        {
          period: "Jan 2020 – Feb 2022",
          role: "Department Manager",
          company: "Bricoman Italia",
          location: "Bologna and Cagliari, Italy",
          description:
            "Member of the Store Management Committee. Led, trained, and recruited sales teams while monitoring operational and commercial KPIs (revenue, margins, stock turnover) and customer satisfaction.",
          achievements: [
            "Mentored and developed high-performing retail sales teams",
            "Optimized stock rotation and competitive pricing strategies",
          ],
        },
        {
          period: "Jan 2014 – Jan 2020",
          role: "Quality & Regulatory Affairs Manager",
          company: "Umbra S.p.A.",
          location: "Perugia, Italy",
          description:
            "Implemented and audited Quality Management Systems (ISO 9001 and ISO 13485). Defined KPIs, conducted internal audits, managed international supplier relationships, and oversaw general accounting.",
          achievements: [
            "Maintained strict international ISO quality certifications for 4+ years",
            "Demonstrated process discipline, audit readiness, and regulatory compliance",
          ],
        },
      ],
    },
    education: {
      badge: "Education & Growth",
      title: "Academic Degrees &",
      subtitle: "Continuous Certifications",
      academicTitle: "Academic Background & Formal Education",
      certificationsTitle: "Specialized Courses & AI Certifications",
      items: [
        {
          period: "2008 – 2013",
          title: "Bachelor's Degree in Business Administration",
          institution: "Università degli Studi di Perugia (Italy)",
          badge: "Business Administration",
          highlights: [
            "Solid foundations in corporate finance, business operations, and financial accounting",
            "Corporate governance, market strategy, and organizational management",
            "Data-driven decision making and financial acumen",
          ],
        },
        {
          period: "May 2026 – Jun 2026",
          title: "Practical AI for Business Solutions with Antigravity",
          institution: "CEINPRO",
          badge: "AI Automation",
          highlights: [
            "Building intelligent workflow automations with AI agents",
            "Integration of LLM-assisted systems for team efficiency",
          ],
        },
        {
          period: "Mar 2026 – Apr 2026",
          title: "Applied Artificial Intelligence Course (4th Edition)",
          institution: "EOI — Escuela de Organización Industrial (Spain)",
          badge: "Applied AI",
          highlights: [
            "Practical deployment of LLM tooling in business workflows",
            "Productivity optimization with modern AI architectures",
          ],
        },
        {
          period: "2003 – 2008",
          title: "Diploma in Accounting & Computer Science",
          institution: "ITC Vittorio Emanuele II — Perugia, Italy",
          badge: "Accounting & IT",
          highlights: [
            "Foundations in financial accounting, programming, and relational databases",
          ],
        },
      ],
    },
    contact: {
      badge: "Direct Contact",
      title: "Let's discuss your customer success",
      subtitle: "and B2B operations",
      description:
        "Open to new B2B SaaS Customer Success leadership opportunities, client onboarding operational roles, and international portfolio expansion.",
      availableStatus: "Open to new professional opportunities",
      emailLabel: "Email Address",
      phoneLabel: "Phone & WhatsApp",
      locationLabel: "Residence",
      linkedinLabel: "Professional Profile",
      copyEmail: "Copy Email",
      copiedEmail: "Email Copied!",
      openEmail: "Compose Email",
      callWhatsApp: "Chat on WhatsApp",
      callPhone: "Direct Phone Call",
      openLinkedIn: "View LinkedIn",
      info: {
        email: "lorenzo.toccaceli@gmail.com",
        phone: "+34 644 564 857",
        location: "Valladolid, Spain",
        linkedin: "linkedin.com/in/lt89",
        linkedinUrl: "https://linkedin.com/in/lt89",
      },
    },
    footer: {
      role: "Customer Success Manager & Business Operations",
      allRightsReserved: "All rights reserved.",
      builtWith: "",
      backToTop: "Back to top",
    },
  },
};
