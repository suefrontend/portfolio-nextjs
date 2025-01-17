import { getArticleBySlug, getAllArticles } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
// Generate static params for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.fields.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const article = await getArticleBySlug(params.slug);
  console.log('Article:', article.fields.article.content.map(element => {
    if (element.nodeType === 'paragraph') {
      return element.content.map(textNode => textNode.value).join(' ')
    }
    return ''
  }));

  if (!article) {
    notFound();
  }

  // import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

  
  const options = {
    renderNode: {
      // Separate handler for code blocks
      [BLOCKS.CODE]: (node) => (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{node.content[0].value}</code>
        </pre>
      ),
      
      // Regular paragraph handler
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // Check if this is a code block
        if (node.content.some(item => item.nodeType === 'text' && item.marks.some(mark => mark.type === 'code'))) {
          return children;
        }
        // Regular paragraph
        return <p className="mb-4">{children}</p>;
      },
      
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, description } = node.data.target.fields;
        return (
          <img 
            src={url} 
            alt={description || ''} 
            className="my-4 w-full h-auto"
          />
        );
      }
    },
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.CODE]: text => (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{text}</code>
        </pre>
      )
    }
  };

  return (
    <article className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{article.fields.title}</h1>
      <div className="prose lg:prose-xl">
        {documentToReactComponents(article.fields.article, options)}
      </div>
    </article>
  );
}
