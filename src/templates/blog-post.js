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
    const twitterUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://inwords.netlify.com${slug}`)}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <main>
          <article>
            {/* <p style={{
              // color: 'rgb(215,50,50)',
              // fontFamily: 'Georgia',
              margin: '0 0 0.5rem 0',
              fontSize: '0.95rem',
              }}>
            COMPONENTS</p> */}
            <header>
              <h1 style={{
                margin: '0',
                fontSize: '2.5rem',
              }}
              >{post.frontmatter.title}</h1>
              <p style={{
                fontSize: '1.4rem',
                marginBottom: rhythm(0.5),
              }}>{post.frontmatter.description}</p>
              {/* <p style={{
                fontSize: '1rem',
                marginBottom: '0'
              }}>  
                Written by <a href={`https://twitter.com/manythunks`}>Joseph Kim</a>
              </p> */}
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(2),
                  opacity: '0.5',
                }}
              >
                {post.frontmatter.date} • {post.timeToRead} min read
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
                  Edit this page
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
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        description
      }
    }
  }
`
