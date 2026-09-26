export type ProjectCategory = 
  | 'Web Applications'
  | 'Multi-Platform Systems'
  | 'AI-Integrated Platforms'
  | 'Hybrid & Mobile'
  | 'Mobile'
  | 'Productivity & Tooling';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  technologies: {
    frontend?: string[];
    backend?: string[];
    desktop?: string[];
    mobile?: string[];
    database?: string[];
    deployment?: string[];
    all: string[];
  };
  highlights: string[];
  architecturalRole?: string;
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'desktop' | 'database' | 'deployment' | 'architecture';
  featured?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  architecturalHighlights: string[];
  badge?: string;
}

