import React from 'react'
import { Link } from 'gatsby'

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

// import styles
import { HeaderContainer, LinksContainer, HeaderLinkText } from '../styles/Header'
import { H1 } from '../styles/Text'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <H1>{siteTitle}</H1>
    <LinksContainer>
      <HeaderLinkText>About</HeaderLinkText>
      <HeaderLinkText>Purchase</HeaderLinkText>
      <HeaderLinkText>Contact</HeaderLinkText>
    </LinksContainer>
  </HeaderContainer>
)

export default Header
