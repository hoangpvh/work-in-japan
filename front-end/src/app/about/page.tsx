// app/about/page.tsx
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/about-banner.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Về Chúng Tôi
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Đồng hành cùng bạn trên hành trình khám phá cơ hội việc làm tại Nhật Bản
            </p>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Giới thiệu công ty</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <p>
              Chúng tôi là đơn vị tiên phong trong lĩnh vực xuất khẩu lao động và du học Nhật Bản, 
              với hơn 10 năm kinh nghiệm và mạng lưới đối tác rộng khắp.
            </p>
            <p>
              Sứ mệnh của chúng tôi là kết nối nguồn nhân lực Việt Nam với các cơ hội việc làm 
              chất lượng cao tại Nhật Bản, đồng thời hỗ trợ toàn diện trong quá trình học tập 
              và làm việc tại Nhật.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Ứng viên thành công</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Đối tác tại Nhật</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Tỷ lệ hài lòng</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Quy trình làm việc</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Tư vấn',
              description: 'Tư vấn chi tiết về đơn hàng và yêu cầu'
            },
            {
              step: '02',
              title: 'Đào tạo',
              description: 'Đào tạo ngôn ngữ và kỹ năng cần thiết'
            },
            {
              step: '03',
              title: 'Thủ tục',
              description: 'Hỗ trợ hoàn thiện hồ sơ và thủ tục'
            },
            {
              step: '04',
              title: 'Xuất cảnh',
              description: 'Hỗ trợ xuất cảnh và định hướng tại Nhật'
            }
          ].map((item) => (
            <Card key={item.step} className="p-6">
              <div className="text-blue-600 font-bold mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications & Partners */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Chứng nhận & Đối tác</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Chứng nhận</h3>
            <ul className="space-y-4">
              {[
                'Giấy phép hoạt động dịch vụ đưa người lao động đi làm việc ở nước ngoài',
                'Chứng nhận ISO 9001:2015 về quản lý chất lượng',
                'Thành viên Hiệp hội Xuất khẩu lao động Việt Nam'
              ].map((cert, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Đối tác tại Nhật Bản</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={partner} className="relative h-20">
                  <Image
                    src={`/images/partner-${partner}.jpg`}
                    alt={`Partner ${partner}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}