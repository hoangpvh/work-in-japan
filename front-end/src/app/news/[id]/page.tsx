// // app/news/[id]/page.tsx
// import Image from 'next/image'
// import { fetchNewsById, fetchRelatedNews } from '@/lib/api'
// import { Card, CardContent } from '@/components/ui/card'
// import { Clock, User, Tag } from 'lucide-react'

// export default async function NewsDetailPage({ params }: { params: { id: string } }) {
//   const article = await fetchNewsById(params.id)
//   const relatedNews = await fetchRelatedNews(params.id)

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-3 gap-8">
//         {/* Main Content */}
//         <div className="md:col-span-2">
//           <div className="mb-8">
//             <div className="text-sm text-gray-600 mb-2">
//               {article.attributes.category}
//             </div>
//             <h1 className="text-3xl font-bold mb-4">
//               {article.attributes.title}
//             </h1>
//             <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
//               <div className="flex items-center">
//                 <User className="w-4 h-4 mr-1" />
//                 {article.attributes.author}
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-1" />
//                 {new Date(article.attributes.publishDate).toLocaleDateString()}
//               </div>
//               <div className="flex items-center">
//                 <Tag className="w-4 h-4 mr-1" />
//                 {article.attributes.category}
//               </div>
//             </div>
//           </div>

//           <div className="relative h-[400px] mb-8">
//             <Image
//               src={article.attributes.thumbnail.data.attributes.url}
//               alt={article.attributes.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div className="prose max-w-none">
//             <div dangerouslySetInnerHTML={{ __html: article.attributes.content }} />
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div>
//           <h2 className="text-xl font-bold mb-6">Tin liên quan</h2>
//           <div className="space-y-6">
//             {relatedNews.map((related) => (
//               <Card key={related.id}>
//                 <CardContent className="p-4">
//                   <div className="relative h-40 mb-4">
//                     <Image
//                       src={related.attributes.thumbnail.data.attributes.url}
//                       alt={related.attributes.title}
//                       fill
//                       className="object-cover rounded"
//                     />
//                   </div>
//                   <h3 className="font-semibold mb-2">
//                     {related.attributes.title}
//                   </h3>
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <div className="flex items-center">
//                       <Clock className="w-4 h-4 mr-1" />
//                       {new Date(related.attributes.publishDate).toLocaleDateString()}
//                     </div>
//                     <div className="text-blue-600 hover:underline cursor-pointer">
//                       Đọc thêm
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }