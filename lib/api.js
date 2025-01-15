import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}


function generateRssItem(post) {
    return `
<item>
  <guid>https://ismayilzada.com/posts/${post.slug}</guid>
  <title>${post.title}</title>
  <link>https://ismayilzada.com/posts/${post.slug}</link>
  <description>${post.excerpt}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>
`;
}

export async function generateRss(posts) {
    const rss = `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>ismayilzada.com</title>
  <link>https://ismayilzada.com</link>
  <description>nijat ismayilzada's blog</description>
  <language>en</language>
  <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
  <atom:link href="https://ismayilzada.com/feed/rss.xml" rel="self" type="application/rss+xml"/>
  ${posts.map(post => generateRssItem(post)).join('')}
</channel>
</rss>
`;
    fs.writeFileSync(`${process.cwd()}/public/feed/rss.xml`, rss);
    console.log(`Generated RSS ${process.cwd()}/public/feed/rss.xml`);
}
