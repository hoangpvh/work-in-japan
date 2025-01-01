// app/contact/page.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Phone as PhoneIcon
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Liên Hệ</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Thông tin liên hệ</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Điện thoại</div>
                    <a href="tel:+84123456789" className="text-blue-600">
                      (+84) 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:contact@example.com" className="text-blue-600">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Địa chỉ</div>
                    <div>123 Đường ABC, Quận XYZ, TP.HCM</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Giờ làm việc</div>
                    <div>Thứ 2 - Thứ 6: 8:00 - 17:30</div>
                    <div>Thứ 7: 8:00 - 12:00</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Hỗ trợ trực tuyến</h2>
              
              <div className="space-y-4">
                <Button className="w-full flex items-center" variant="outline">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat với tư vấn viên
                </Button>

                <Button className="w-full flex items-center" variant="outline">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Yêu cầu gọi lại
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name">Họ và tên</label>
                    <Input id="name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone">Số điện thoại</label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject">Tiêu đề</label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message">Nội dung</label>
                  <Textarea id="message" rows={6} required />
                </div>

                <Button type="submit">Gửi tin nhắn</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d106.12345678901234!3d10.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzM0LjQiTiAxMDbCsDA3JzM0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}