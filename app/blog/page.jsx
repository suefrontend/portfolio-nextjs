import { getAllArticles } from "@lib/contentful";
import Link from 'next/link'

export default async function Home() {
  const articles = await getAllArticles()
  
  // Log articles to console
  // console.log('Articles from Contentful:', articles)
  console.log('Full article data:', JSON.stringify(articles, null, 2))
  
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      {articles.map((article) => (
        <Link 
          href={`/blog/${article.fields.slug}`} 
          key={article.sys.id}
          className="block mb-6 p-4 hover:bg-gray-50 rounded-lg transition"
        >
          <h2 className="text-xl font-semibold">
            {article.fields.title}
          </h2>
          <p className="mt-2">
            {article.fields.description}
          </p>
        </Link>
      ))}
    </main>
  )
}
