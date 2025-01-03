// components/Footer.tsx
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ThangLong Inc</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                123 Đường ABC, Quận X, TP.HCM
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                0123.456.789
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                contact@thanglong.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-white transition-colors"
                >
                  Đơn Hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/xuatkhaulaodong"
                  className="hover:text-white transition-colors"
                >
                  Xuất Khẩu Lao Động
                </Link>
              </li>
              <li>
                <Link
                  href="/services/duhoc"
                  className="hover:text-white transition-colors"
                >
                  Du Học Nhật Bản
                </Link>
              </li>
              <li>
                <Link
                  href="/services/daotao"
                  className="hover:text-white transition-colors"
                >
                  Đào Tạo Tiếng Nhật
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tuvanthucte"
                  className="hover:text-white transition-colors"
                >
                  Tư Vấn Thực Tế
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kết Nối</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-3 py-2 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Đăng ký nhận tin
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} ThangLong Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
