import { Job } from '@/types/job'
import { News } from '@/types/news'

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'

export async function fetchFeaturedJobs(): Promise<Job[]> {
  try {
    const res = await fetch(`${API_URL}/api/jobs?filters[featured][$eq]=true&populate=*`)
    if (!res.ok) throw new Error('Failed to fetch featured jobs')
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching featured jobs:', error)
    return []
  }
}

export async function fetchJob(id: string): Promise<Job | null> {
  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}?populate=*`)
    if (!res.ok) throw new Error(`Failed to fetch job with id ${id}`)
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error)
    return null
  }
}

export async function fetchJobs(searchParams: Record<string, string | string[] | undefined>): Promise<Job[]> {
  try {
    const queryParams = new URLSearchParams()
    
    // Always populate related fields
    queryParams.append('populate', '*')
    
    // Handle search
    if (searchParams.search) {
      queryParams.append('filters[$or][0][title][$containsi]', String(searchParams.search))
      queryParams.append('filters[$or][1][description][$containsi]', String(searchParams.search))
    }
    
    // Handle job type filter
    if (searchParams.jobType) {
      queryParams.append('filters[jobType][$eq]', String(searchParams.jobType))
    }
    
    // Handle location filter
    if (searchParams.location) {
      queryParams.append('filters[location][$containsi]', String(searchParams.location))
    }

    const url = `${API_URL}/api/jobs?${queryParams.toString()}`
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch jobs')
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return []
  }
}

export async function fetchNews(): Promise<News[]> {
  try {
    const res = await fetch(`${API_URL}/api/news?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch news');
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}