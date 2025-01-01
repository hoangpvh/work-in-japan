'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      // Handle form submission here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      console.log('Form submitted:', Object.fromEntries(formData))
      
      // Reset form or redirect
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Đơn ứng tuyển</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Họ</Label>
            <Input id="firstName" name="firstName" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Tên</Label>
            <Input id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            required 
            pattern="[0-9]{10,11}"
            title="Số điện thoại phải có 10-11 chữ số"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthdate">Ngày sinh</Label>
          <Input 
            id="birthdate" 
            name="birthdate" 
            type="date" 
            required 
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="education">Trình độ học vấn</Label>
          <Select name="education" required>
            <SelectTrigger id="education">
              <SelectValue placeholder="Chọn trình độ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highschool">THPT</SelectItem>
              <SelectItem value="college">Cao đẳng</SelectItem>
              <SelectItem value="university">Đại học</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Kinh nghiệm làm việc</Label>
          <Textarea 
            id="experience" 
            name="experience" 
            rows={4}
            maxLength={1000}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cv">Hồ sơ/CV</Label>
          <Input 
            id="cv" 
            name="cv"
            type="file" 
            accept=".pdf,.doc,.docx" 
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Đang gửi...' : 'Gửi đơn ứng tuyển'}
        </Button>
      </form>
    </main>
  )
}