'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Clock,
  Heart,
  Wallet,
} from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import JobCard from '@/components/JobCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchFeaturedJobs } from '@/lib/api'
import type { Job } from '@/types/job'

export default function Home() {
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([])

  useEffect(() => {
    async function getFeaturedJobs() {
      const jobs = await fetchFeaturedJobs()
      setFeaturedJobs(jobs)
    }
    getFeaturedJobs()
  }, [])

  const benefits = [
    {
      title: 'Mức Lương Hấp Dẫn',
      description:
        'Thu nhập cao từ 25-35 triệu đồng/tháng trở lên tùy ngành nghề.',
      icon: <Wallet className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Chế Độ Đãi Ngộ',
      description:
        'Hưởng đầy đủ bảo hiểm, lương thưởng, và các phúc lợi hấp dẫn.',
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Môi Trường Làm Việc',
      description:
        'Môi trường làm việc chuyên nghiệp, sáng tạo, và thân thiện.',
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Phát Triển Nghề Nghiệp',
      description: 'Cơ hội thăng tiến, đào tạo nâng cao kỹ năng nghề nghiệp.',
      icon: <Award className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Hỗ Trợ Chi Phí',
      description: 'Hỗ trợ chi phí đi lại, ăn uống, và nơi ở nếu cần thiết.',
      icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Thời Gian Linh Hoạt',
      description:
        'Các công việc có thời gian làm việc linh hoạt, phù hợp với nhu cầu cá nhân.',
      icon: <Clock className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/japan-banner.webp"
          alt="Japan Banner"
          fill
          className="object-cover transform scale-105 hover:scale-100 transition-transform duration-1000"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 backdrop-blur-sm">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center text-white space-y-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Cơ Hội Việc Làm Tại Nhật Bản
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Khám phá các cơ hội việc làm hấp dẫn với mức lương cao
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button size="lg" className="mt-8">
                  Xem Việc Làm <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Lợi Ích Khi Đi Nhật</h2>
            <p className="text-lg text-gray-600">
              Khám phá những ưu đãi và cơ hội phát triển khi làm việc tại Nhật
              Bản
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {benefit.icon}
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Đơn Hàng Nổi Bật</h2>
            <p className="text-lg text-gray-600">
              Những cơ hội việc làm mới nhất với mức lương và điều kiện hấp dẫn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job: Job, index: number) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
