// components/Header.tsx
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          Logo
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/jobs" className="hover:text-blue-600">
            Đơn Hàng
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            Giới Thiệu
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Liên Hệ
          </Link>
          <Link href="/news" className="hover:text-blue-600">
            Tin Tức
          </Link>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5" />
        </button>
      </nav>
    </header>
  )
}