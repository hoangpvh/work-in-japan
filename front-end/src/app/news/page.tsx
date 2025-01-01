// app/news/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { fetchNews } from '@/lib/api'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Clock, User } from 'lucide-react'
import type { News } from '@/types/news'

export default async function NewsPage() {
  const news: News[] = await fetchNews()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tin tức</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input 
          placeholder="Tìm kiếm tin tức..." 
          className="md:w-80"
        />
        <Select>
          <SelectTrigger className="md:w-48">
            <SelectValue placeholder="Danh mục" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="company">Tin công ty</SelectItem>
            <SelectItem value="industry">Tin ngành</SelectItem>
            <SelectItem value="jobs">Đơn hàng mới</SelectItem>
            <SelectItem value="guide">Hướng dẫn</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured News */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {news.slice(0, 1).map((article) => (
          <Card key={article.id} className="md:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                {/* <Image
                  src={article.thumbnail.url}
                  alt={article.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {article.category}
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  <Link href={`/news/${article.id}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User  className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                </div>
                <Button variant="outline">Đọc thêm</Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* News List */}
      <div className="grid md:grid-cols-3 gap-8">
        {news.slice(1).map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="relative h-48">
              {/* <Image
                src={article.thumbnail.url}
                alt={article.title}
                fill
                className="object-cover"
              /> */}
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-gray-600 mb-2">
                {article.category}
              </div>
              <h3 className="font-bold mb-2">
                <Link href={`/news/${article.id}`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <User  className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <Button variant="outline">Trước</Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Sau</Button>
        </div>
      </div>
    </div>
  )
}