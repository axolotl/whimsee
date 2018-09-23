import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { PageSpacer, ContentContainer } from '../styles/Content'

import Footer from './footer'

import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #___gatsby, #___gatsby > * {
    height: 100%;
  }

  #___gatsby > * {
    display: flex;
    flex-direction: column;
    margin: -2px 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Henny+Penny');
  @import url('https://fonts.googleapis.com/css?family=Oxygen');

`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <ContentContainer>
          {children}
        </ContentContainer>
        <div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
