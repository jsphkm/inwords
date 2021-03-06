import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.4),
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(0.4),
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            // maxWidth: rhythm(24),
            maxWidth: rhythm(31),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '52px',
              // backgroundColor: '#11100f',
              backgroundColor: 'rgba(17,16,15,0.9)',
              zIndex: '1',
              WebkitBackdropFilter: 'blur(50px)',
              backdropFilter: 'blur(50px)',
              borderBottom: '1px solid rgba(50,50,50,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: rhythm(31),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              {header}
            </div>
          </header>
          <div style={{
              marginTop: '52px',
            }}>
            {children}
          </div>
        </div>
        <footer>
          <div style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            // maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            maxWidth: rhythm(31),
          }}>
            <a
              href="https://mobile.twitter.com/manythunks"
              target="_blank"
              rel="noopener noreferrer"
              >twitter</a>{' '}
            &bull;{' '}
            <a
              href="https://github.com/jsphkm"
              target="_blank"
              rel="noopener noreferrer"
              >github</a>{' '}
            &bull;{' '}
            <a
              href="https://jsphkm.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              >portfolio</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
