import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <div>
          {posts.map(({ node }, idx) => {
            // `idx` returns the index of each posts in the array
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} style={{marginBottom: '2.5rem'}}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 20),
                  }}
                >
                  <Link
                    style={{
                      boxShadow: `none`,
                      fontSize: '1.7rem',
                      color: 'white',
                    }}
                    to={node.fields.slug}
                  >
                  {title}
                  </Link>
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    marginBottom: '0.5rem',
                  }}
                >{node.frontmatter.date} • {node.timeToRead} min read</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  style={{
                    marginTop: '0.2rem',
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
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
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
