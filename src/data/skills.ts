import type { SkillCategoryGroup } from '../types';

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Component architecture, reactive states, and performant user interfaces.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'React Native',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems & APIs',
    description: 'Scalable server architecture, robust endpoints, and business logic processing.',
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'REST APIs',
      'JWT Authentication',
      'API Security'
    ]
  },
  {
    id: 'desktop-crossplatform',
    title: 'Desktop & Cross-Platform',
    description: 'Native runtime wrappers and hybrid cross-platform application design.',
    skills: [
      'Electron',
      'React Native',
      'Desktop UI Integration',
      'Cross-Platform Workflows'
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational data modeling, query optimization, and serverless Postgres infrastructure.',
    skills: [
      'PostgreSQL',
      'Neon',
      'SQLite'
    ]
  },
  {
    id: 'deployment-devops',
    title: 'Deployment & DevOps',
    description: 'Continuous integration, containerized platforms, and automated cloud deployments.',
    skills: [
      'Vercel',
      'Render',
      'Production Workflows'
    ]
  },
];

export const coreSpecialties = [
  'Full-Stack Architecture',
  'REST APIs & JWT',
  'Cross-Platform (Electron & React Native)',
  'Cloud Deployment (Vercel & Render)'
];
