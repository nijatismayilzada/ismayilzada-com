import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Seo from '../../components/seo'
import Header from '../../components/header'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import DateFormatter from '../../components/date-formatter'

export default function Post({ post }) {
  const seo = {
    metaTitle: post.title,
    metaDescription: post.excerpt,
    shareImage: post.ogImage.url
  };
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Seo seo={seo} />
      <Container>
        <Header />
      </Container>
      <Container>
        <div className="box">
          <article className="media">
            <div className="content  has-text-light">

              <h3 className="title is-3">{post.title}</h3>

              <small>
                <DateFormatter dateString={post.date} />
              </small>
              <br />
              <br />

              <p dangerouslySetInnerHTML={{ __html: post.content }} itemProp="articleBody" />

            </div>
          </article>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
