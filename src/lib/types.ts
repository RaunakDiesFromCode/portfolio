export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

export interface Review {
  id: string;
  name: string;
  contact: string;
  review: string;
  rating: number;
}