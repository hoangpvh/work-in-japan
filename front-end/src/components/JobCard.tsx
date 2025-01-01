import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MapPin, JapaneseYen } from 'lucide-react'

interface Job {
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

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gray-100">
          {job.thumbnailImage?.data && (
            <Image
              src={job.thumbnailImage.data.attributes.url}
              alt={job.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">
              {job.company.name.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-gray-600">
            {job.company.name}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">
          {job.title}
        </h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <JapaneseYen className="w-4 h-4 mr-1" />
            {parseInt(job.salary).toLocaleString()} JPY
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link 
          href={`/jobs/${job.documentId}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Xem chi tiết →
        </Link>
      </CardFooter>
    </Card>
  )
}