import React from "react"
import {graphql, Link} from "gatsby"
import "../styles/mystyles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({data}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout title={siteTitle}>
            <SEO title="All posts"/>
            <ol style={{listStyle: `none`}}>
                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <li key={post.fields.slug}>
                            <div className="box my-4">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content has-text-light">
                                            <Link to={post.fields.slug} itemProp="url">
                                                <strong>{title}</strong>
                                            </Link>
                                            <br/>
                                            <small>{post.frontmatter.date}</small>
                                            <br/>
                                            <p dangerouslySetInnerHTML={{__html: post.frontmatter.description}}
                                               itemProp="description"/>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
