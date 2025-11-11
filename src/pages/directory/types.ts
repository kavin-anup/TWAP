export interface App {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  pricing: string;
  featured: boolean;
  tags: string[];
  logo: string;
}