// app/jobs/[id]/page.tsx
import { Building, Calendar, JapaneseYen, MapPin, Users } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { fetchJob } from '@/lib/api'

export default async function JobDetailPage() {
  // { params }: { params: { id: string } }
  // const job = await fetchJob(params.id)
  // const { attributes } = job
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* <h1 className="text-3xl font-bold mb-4">{attributes.title}</h1> */}

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <JapaneseYen className="w-5 h-5 mr-2" />
                {/* <span>{attributes.salary.toLocaleString()} JPY</span> */}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {/* <span>{attributes.location}</span> */}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {/* <span>Hạn nộp: {new Date(attributes.applicationDeadline).toLocaleDateString()}</span> */}
              </div>
            </div>

            <div className="prose max-w-none">
              <h2>Mô tả công việc</h2>
              {/* <div dangerouslySetInnerHTML={{ __html: attributes.description }} /> */}

              <h2>Yêu cầu</h2>
              {/* <div dangerouslySetInnerHTML={{ __html: attributes.requirements }} /> */}

              <h2>Quyền lợi</h2>
              {/* <div dangerouslySetInnerHTML={{ __html: attributes.benefits }} /> */}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative h-16 w-16">
                {/* <Image
                  src={attributes.company.data.attributes.logo.data.attributes.url}
                  alt={attributes.company.data.attributes.name}
                  fill
                  className="object-contain rounded-lg"
                /> */}
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  {/* {attributes.company.data.attributes.name} */}
                </h3>
                <p className="text-gray-600">
                  {/* {attributes.company.data.attributes.location} */}
                </p>
              </div>
            </div>
            <Button className="w-full">Ứng tuyển ngay</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
