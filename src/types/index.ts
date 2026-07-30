export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
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
