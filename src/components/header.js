import React from 'react'
import { Link } from 'gatsby'
import { HeaderContainer, LinksContainer, HeaderTitle, HeaderLinkText } from '../styles/Header'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTitle to="/">{siteTitle}</HeaderTitle>
    <LinksContainer>
      <HeaderLinkText to="/about">About</HeaderLinkText>
      <HeaderLinkText to="/purchase">Purchase</HeaderLinkText>
      <HeaderLinkText to="/contact">Contact</HeaderLinkText>
    </LinksContainer>
  </HeaderContainer>
)

export default Header
