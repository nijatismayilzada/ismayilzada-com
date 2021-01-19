import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Disqus} from 'gatsby-plugin-disqus'

const BlogPostTemplate = ({data}) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title

    let disqusConfig = {
        url: `${data.site.siteMetadata.siteUrl + post.fields.slug}`,
        identifier: post.id,
        title: post.frontmatter.title,
    }

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
                <br/>
                <br/>
                <hr/>
                <Disqus config={disqusConfig}/>
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
        siteUrl
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
