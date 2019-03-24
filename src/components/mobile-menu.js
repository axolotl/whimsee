import React from 'react'
import styled from 'styled-components'

import { HeaderLinkText } from '../styles/Header'

const MobileMenu = ({ resetMobileMenu }) => (
  <Container onClick={resetMobileMenu}>
    <HeaderLinkText to="/">Home</HeaderLinkText>
    <HeaderLinkText to="/about-book">About the Book</HeaderLinkText>
    <HeaderLinkText to="/about-authors">About the Authors</HeaderLinkText>
    <HeaderLinkText to="/about-publisher">About the Publisher</HeaderLinkText>
    <HeaderLinkText to="/gallery">Gallery</HeaderLinkText>
    <HeaderLinkText to="/purchase">Purchase</HeaderLinkText>
    <HeaderLinkText to="/contact">Contact</HeaderLinkText>
  </Container>
)

const Container = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default MobileMenu
