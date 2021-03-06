import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({data}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle}>
            <SEO title="404: Not Found"/>
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content  has-text-light">
                            <h3 className="title is-3">404: Not Found</h3>
                            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
