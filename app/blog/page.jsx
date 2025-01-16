import { getAllArticles } from "@/lib/api";

export default async function Home() {
  const articles = await getAllArticles()
  
  // Log articles to console
  console.log('Articles from Contentful:', articles)
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      {articles.map((article) => (
        <div key={article.sys.id} className="mb-6">
          <h2 className="text-xl font-semibold">
            {article.fields.title}
          </h2>
          <p className="mt-2">
            {article.fields.description}
          </p>
        </div>
      ))}
    </main>
  )
}
