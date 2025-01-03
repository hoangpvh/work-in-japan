'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'

import { Card, CardContent } from '@/components/ui/card'

const MotionCard = motion(Card)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img
            src="/images/about-banner.jpg"
            alt="About Us Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Về Chúng Tôi
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
                Đồng hành cùng bạn trên hành trình khám phá cơ hội việc làm tại
                Nhật Bản
              </p>
            </motion.div>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Giới thiệu công ty
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-lg leading-relaxed text-gray-600">
              <p className="mb-6">
                Chúng tôi là đơn vị tiên phong trong lĩnh vực xuất khẩu lao động
                và du học Nhật Bản, với hơn 10 năm kinh nghiệm và mạng lưới đối
                tác rộng khắp.
              </p>
              <p>
                Sứ mệnh của chúng tôi là kết nối nguồn nhân lực Việt Nam với các
                cơ hội việc làm chất lượng cao tại Nhật Bản, đồng thời hỗ trợ
                toàn diện trong quá trình học tập và làm việc tại Nhật.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '1000+', label: 'Ứng viên thành công' },
                { number: '50+', label: 'Đối tác tại Nhật' },
                { number: '10+', label: 'Năm kinh nghiệm' },
                { number: '100%', label: 'Tỷ lệ hài lòng' },
              ].map((stat, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="text-center p-0">
                    <div className="text-4xl font-bold text-blue-600 mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Quy trình làm việc
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Tư vấn',
                description: 'Tư vấn chi tiết về đơn hàng và yêu cầu',
              },
              {
                step: '02',
                title: 'Đào tạo',
                description: 'Đào tạo ngôn ngữ và kỹ năng cần thiết',
              },
              {
                step: '03',
                title: 'Thủ tục',
                description: 'Hỗ trợ hoàn thiện hồ sơ và thủ tục',
              },
              {
                step: '04',
                title: 'Xuất cảnh',
                description: 'Hỗ trợ xuất cảnh và định hướng tại Nhật',
              },
            ].map((item, index) => (
              <MotionCard
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="text-blue-600 font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <ArrowRight className="mt-4 text-blue-600" />
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Chứng nhận & Đối tác
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Chứng nhận</h3>
                <ul className="space-y-6">
                  {[
                    'Giấy phép hoạt động dịch vụ đưa người lao động đi làm việc ở nước ngoài',
                    'Chứng nhận ISO 9001:2015 về quản lý chất lượng',
                    'Thành viên Hiệp hội Xuất khẩu lao động Việt Nam',
                  ].map((cert, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">
                  Đối tác tại Nhật Bản
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((partner) => (
                    <motion.div
                      key={partner}
                      className="relative h-16 w-16 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={`/images/partner-${partner}.jpg`}
                        alt={`Partner ${partner}`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
