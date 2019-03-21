/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div>
              {/* Personal blog by
              {` `} */}
              <a href={`https://twitter.com/${social.twitter}`}>
                {author}
              </a>
              <br />
              <div style={{
                opacity: '0.7',
                fontSize: '0.9rem',
              }}>
                {/* Full-Stack Web Developer */}
                Maintainer of Inwords
              </div>
              <div>
                <a
                  href="https://twitter.com/manythunks?ref_src=twsrc%5Etfw" 
                  className="twitter-follow-button"
                >
                  <Image
                    fixed={data.social.childImageSharp.fixed}
                    alt="twitter-logo"
                    style={{
                      opacity: '0.5',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
    social: file(absolutePath: { regex: "/Twitter_Logo_WhiteOnImage.png/" }) {
      childImageSharp {
        fixed(width: 28, height: 28) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
