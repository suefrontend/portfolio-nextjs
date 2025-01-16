import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getAllArticles() {
  try {
    const response = await client.getEntries({
      content_type: 'ai', // Replace with your content type ID
    })
    
    return response.items
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}