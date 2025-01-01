export interface News {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  publishDate: string;
  thumbnail: {
    url: string
  }
}