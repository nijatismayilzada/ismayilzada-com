import Container from '../components/container'
import Header from '../components/header'
import Seo from '../components/seo'
import PostPreview from '../components/post-preview'
import { getAllPosts, generateRss } from '../lib/api'
import { useEffect } from "react";

export default function Index({ allPosts }) {

  useEffect(() => {
    var body = document.querySelector('body');
    body.className = ""
  }, []);
  const seo = {
    metaTitle: "ismayilzada.com",
    metaDescription: "nijat ismayilzada's blog",
    shareImage: allPosts[0].ogImage.url
  };

  return (
    <>
      <Seo seo={seo} />
      <Container>
        <Header />
      </Container>
      <Container>
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Container>
    </>
  )
}

export async function getStaticProps() {



  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'ogImage'
  ])


  await generateRss(allPosts);

  return {
    props: { allPosts },
  }
}
