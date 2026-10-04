export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  category: 'development' | 'production';
}

export interface Wiki {
  id: string;
  title: string;
  description: string;
}

export interface SocialLinks {
  github: string;
  threads: string;
}
