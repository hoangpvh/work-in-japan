export interface Job {
  id: number
  documentId: string
  title: string
  description: string
  salary: string
  location: string
  requirements: string
  benefits: string
  jobType: string
  featured: boolean
  applicationDeadline: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  company: {
    id: number
    documentId: string
    name: string
    description: string
    location: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  thumbnailImage: null | {
    data: {
      attributes: {
        url: string
      }
    }
  }
}