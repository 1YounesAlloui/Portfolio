import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'medibook',
    name: 'Medibook',
    subtitle: 'Cross-Platform Medical Management System',
    description: 'A comprehensive medical management and reservations platform designed for multi-platform operation across web and desktop environments. Engineered with a modular Django REST backend, an interactive React frontend, and an Electron wrapper for native desktop accessibility.',
    category: 'Multi-Platform Systems',
    badge: 'Multi-Platform',
    technologies: {
      frontend: ['React', 'Vite', 'Tailwind CSS'],
      backend: ['Django', 'Django REST Framework', 'SimpleJWT'],
      desktop: ['Electron'],
      database: ['SQLite3'],
      deployment: ['Render'],
      all: ['Django', 'Django REST Framework', 'React', 'Electron', 'Tailwind CSS', 'Vite', 'SimpleJWT', 'SQLite3', 'Render']
    },
    highlights: [
      'Multi-platform accessibility spanning web and native Electron desktop distribution',
      'Secure token-based authorization utilizing Django REST Framework & SimpleJWT',
      'Responsive, high-density clinical dashboard built with React and Tailwind CSS',
      'Production deployment configured and managed on Render cloud infrastructure'
    ],
    architecturalRole: 'Architected the full system including REST API contracts, token lifecycle, React client state, and the desktop Electron execution layer.'
  },
  {
    id: 'diagnova',
    name: 'Diagnova',
    subtitle: 'AI-Integrated Medical Platform',
    description: 'A startup-oriented medical platform that integrates an intelligent AI chatbot into patient and administrative medical workflows, facilitating structured appointment-related interaction, scheduling communication, and contextual inquiry analysis.',
    category: 'AI-Integrated Platforms',
    badge: 'AI-Integrated',
    technologies: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['Django', 'Django REST Framework'],
      all: ['Django', 'React', 'AI Chatbot Integration', 'REST APIs', 'Tailwind CSS']
    },
    highlights: [
      'Seamless embedding of an AI assistant directly into clinical inquiry and appointment workflows',
      'Context-aware conversational interface designed around healthcare operation processes',
      'Modular service architecture decoupling the AI interaction layer from core business records'
    ],
    architecturalRole: 'Engineered the integration pipeline connecting the frontend conversational UI with backend processing routines and AI workflow handlers.'
  },
  {
    id: 'g3-commercial',
    name: 'G3 Commercial',
    subtitle: 'Commercial Operations & Workflow Management System',
    description: 'A robust commercial management web application engineered around end-to-end enterprise business operations, supply tracking, client account lifecycles, and operational workflows. Built as an expansive server-rendered web application with dynamic client interactivity.',
    category: 'Web Applications',
    badge: 'Full Web App',
    technologies: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      backend: ['Django Templates', 'Django'],
      all: ['Django', 'Django Templates', 'HTML5', 'CSS3', 'JavaScript']
    },
    highlights: [
      'Purpose-built business logic modeling commercial transactions and operational workflows',
      'Structured server-side view composition using Django Templates with responsive client enhancements',
      'Comprehensive data integrity enforcement across inventory, orders, and commercial records',
      'Designed specifically for intensive daily business operations and record management'
    ],
    architecturalRole: 'Designed core relational data schemas, Django controller logic, transactional operations, and dynamic UI behavior.'
  },
  {
    id: 'booklib',
    name: 'BookLib',
    subtitle: 'Library Management Application',
    description: 'A mobile and cross-environment library application focused on intuitive book discovery, personal catalog organization, and digital library shelf management.',
    category: 'Mobile',
    badge: 'Mobile',
    technologies: {
      frontend: ['React', 'React Native', 'TypeScript'],
      backend: ['REST APIs'],
      all: ['React Native', 'React', 'TypeScript', 'REST APIs', 'CSS3']
    },
    highlights: [
      'Cross-device interface facilitating seamless discovery and digital library organization',
      'A chat bot that is specialized on books',
      'Fluid gesture and touch-responsive UI designed for mobile',
      'Optimized catalog search and filtering across extensive collections'
    ],
    architecturalRole: 'Implemented cross-platform component hierarchy, state-driven collection indexing, and hybrid UI presentation.'
  },
  {
    id: 'todolist-workspace',
    name: 'TodoList / Custom Workspace',
    subtitle: 'Modular Task Management & Workspace Environment',
    description: 'A high-performance productivity application fusing granular task lifecycle tracking with a customizable personal workspace. Enables users to adapt their workspace layout, prioritize complex task pipelines, and tailor functional views to their workflow needs.',
    category: 'Productivity & Tooling',
    badge: 'Custom Workspace',
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      all: ['React', 'TypeScript', 'Tailwind CSS', 'State Management']
    },
    highlights: [
      'Customizable workspace panels adapting to diverse developer and productivity workflows',
      'Granular task state transitions with intuitive priority tagging and categorizations',
      'Lightweight, instant local persistence ensuring zero-friction task operations',
      'Clean architectural separation between workspace layout engines and task state stores'
    ],
    architecturalRole: 'Developed the modular workspace state machine, dynamic panel management, and responsive user interaction paradigm.'
  }
];
