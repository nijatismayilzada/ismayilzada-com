import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({data}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}/>
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content  has-text-light">

                            <h3 className="title is-3">{post.frontmatter.title}</h3>
                            <h6 className="subtitle is-6">{post.frontmatter.date}</h6>

                            <p dangerouslySetInnerHTML={{__html: post.html}}
                               itemProp="articleBody"/>

                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
