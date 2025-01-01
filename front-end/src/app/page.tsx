import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import JobCard from '@/components/JobCard'
import { fetchFeaturedJobs } from '@/lib/api'
import type { Job } from '@/types/job'

export default async function Home() {
  const featuredJobs: Job[] = await fetchFeaturedJobs()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/japan-banner.webp"
          alt="Japan Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Cơ Hội Việc Làm Tại Nhật Bản
            </h1>
            <p className="text-xl mb-8">
              Khám phá các cơ hội việc làm hấp dẫn với mức lương cao
            </p>
            <Button size="lg">
              Tìm Hiểu Ngay
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lợi Ích Khi Đi Nhật
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Mức Lương Hấp Dẫn</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Thu nhập cao từ 25-35 triệu đồng/tháng trở lên tùy ngành nghề.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Chế Độ Đãi Ngộ</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hưởng đầy đủ bảo hiểm, lương thưởng, và các phúc lợi hấp dẫn.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Môi Trường Làm Việc</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Môi trường làm việc chuyên nghiệp, sáng tạo, và thân thiện.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 4 */}
            <Card>
              <CardHeader>
                <CardTitle>Phát Triển Nghề Nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Cơ hội thăng tiến, đào tạo nâng cao kỹ năng nghề nghiệp.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 5 */}
            <Card>
              <CardHeader>
                <CardTitle>Hỗ Trợ Chi Phí</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hỗ trợ chi phí đi lại, ăn uống, và nơi ở nếu cần thiết.</p>
              </CardContent>
            </Card>

            {/* Benefit Card 6 */}
            <Card>
              <CardHeader>
                <CardTitle>Thời Gian Linh Hoạt</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Các công việc có thời gian làm việc linh hoạt, phù hợp với nhu cầu cá nhân.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Đơn Hàng Nổi Bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
