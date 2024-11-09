export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

export interface Review {
  id: number;
  name: string;
  email: string;
  message: string;
}