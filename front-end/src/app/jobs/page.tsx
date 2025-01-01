import { Suspense } from 'react'
import { fetchJobs } from '@/lib/api'
import JobCard from '@/components/JobCard'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import JobFilters from '@/components/JobFilters'
import type { Job } from '@/types/job'

// Change interface to type with index signature
type SearchParams = {
  [key: string]: string | string[] | undefined
  search?: string
  jobType?: string
  location?: string
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const jobs = await fetchJobs(searchParams)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Danh sách đơn hàng</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="space-y-6">
          <Suspense fallback={<div>Loading filters...</div>}>
            <JobFilters />
          </Suspense>
        </aside>

        {/* Job Listings */}
        <div className="md:col-span-3">
          {/* Search */}
          <form className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Tìm kiếm đơn hàng..."
              className="pl-10"
              name="search"
              defaultValue={searchParams.search?.toString()}
              aria-label="Search jobs"
            />
          </form>

          {jobs.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Không tìm thấy đơn hàng nào phù hợp.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job: Job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}