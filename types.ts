
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}
