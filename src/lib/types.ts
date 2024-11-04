export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

export interface Review {
  name: string;
  username: string;
  body: string;
}