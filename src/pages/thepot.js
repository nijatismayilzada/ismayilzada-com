import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThePot = ({data}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle}>
            <SEO title="Nijat Ismayilzada"/>
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content  has-text-light">
                            <h3 className="title is-3">About Me</h3>
                            <p>There will be details about me</p>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default ThePot

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
