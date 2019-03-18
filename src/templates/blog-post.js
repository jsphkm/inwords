import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext
    const originalUrl = `https://github.com/jsphkm/inwords/edit/master/content/blog${slug}index.md`;
    const twitterUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(`manythunks https://inwords.netlify.com${slug}`)}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <main>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {post.frontmatter.date}
              </p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer style={{
              marginTop: '60px',
            }}>
              
              <p style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                  Comment on Twitter
                </a>
                <a href={originalUrl} target="_blank" rel="noopener noreferrer">
                  Contribute on Github
                </a>
              </p>
            </footer>
          </article>
        </main>
        <aside>  
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
            />
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              marginLeft: 0,
            }}
            >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </aside>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
