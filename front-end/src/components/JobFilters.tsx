'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

type FilterOption = {
  id: string
  label: string
  value: string
}

const JOB_TYPES: FilterOption[] = [
  { id: 'manufacturing', label: 'Sản xuất', value: 'manufacturing' },
  { id: 'construction', label: 'Xây dựng', value: 'construction' },
]

const LOCATIONS: FilterOption[] = [
  { id: 'tokyo', label: 'Tokyo', value: 'tokyo' },
  { id: 'osaka', label: 'Osaka', value: 'osaka' },
]

const SALARY_RANGES: FilterOption[] = [
  { id: 'salary1', label: '20-25 triệu', value: '20-25' },
  { id: 'salary2', label: '25-30 triệu', value: '25-30' },
]

export default function JobFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const currentValues = params.getAll(key)
    
    if (currentValues.includes(value)) {
      const newValues = currentValues.filter(v => v !== value)
      params.delete(key)
      newValues.forEach(v => params.append(key, v))
    } else {
      params.append(key, value)
    }

    startTransition(() => {
      router.push(`/jobs?${params.toString()}`)
    })
  }

  const isChecked = (key: string, value: string) => {
    const values = searchParams.getAll(key)
    return values.includes(value)
  }

  const FilterGroup = ({ title, options, paramKey }: { 
    title: string
    options: FilterOption[]
    paramKey: string 
  }) => (
    <AccordionItem value={paramKey}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {options.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox 
                id={option.id}
                checked={isChecked(paramKey, option.value)}
                onCheckedChange={() => updateFilter(paramKey, option.value)}
                disabled={isPending}
              />
              <Label 
                htmlFor={option.id}
                className="cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bộ lọc</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-2">
          <FilterGroup 
            title="Ngành nghề"
            options={JOB_TYPES}
            paramKey="jobType"
          />
          <FilterGroup 
            title="Địa điểm"
            options={LOCATIONS}
            paramKey="location"
          />
          <FilterGroup 
            title="Mức lương"
            options={SALARY_RANGES}
            paramKey="salary"
          />
        </Accordion>
      </CardContent>
    </Card>
  )
}