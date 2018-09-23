import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { ContentContainer } from '../styles/Content'

// import './css/rest.css'
// import './css/global.css'

import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

// // import non-Google fonts locally
// import GoodDogPlain from '../fonts/Good-Dog-Plain.tff'
// import PrimerPrint from '../fonts/Primer-Print.tff'

injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @import url('https://fonts.googleapis.com/css?family=Henny+Penny');

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentContainer>
          {children}
        </ContentContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
