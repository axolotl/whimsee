import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  HeaderContainer,
  LinksContainer,
  HeaderTitle,
  HeaderLinkText,
  LinkPopdown,
  PopdownItem,
  DropdownContainer,
  HeaderDropdownParentText,
  SVGBox,
} from '../styles/Header'
import MobileMenu from './mobile-menu'

class Header extends Component {
  state = {
    hover: false,
    isMobile: false,
    displayMobileMenu: false,
  }

  // as arrow functions to lexically bind this so that the event lister callback will work
  componentDidMount = () => {
    this.checkViewportWidth()
    window.addEventListener('resize', this.checkViewportWidth)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkViewportWidth)
  }

  checkViewportWidth = () => {
    this.setState({ isMobile: window.innerWidth < 600 })
  }

  handleMouseEnter = event => {
    this.setState({ hover: true })
  }

  handleMouseLeave = event => {
    this.setState({ hover: false })
  }

  lauchMobileMenu = () => {
    this.setState({ displayMobileMenu: true })
  }

  resetMobileMenu = () => {
    this.setState({ displayMobileMenu: false })
  }

  render() {
    const { siteTitle } = this.props
    const {
      handleMouseEnter,
      handleMouseLeave,
      lauchMobileMenu,
      resetMobileMenu,
    } = this
    const { hover, isMobile, displayMobileMenu } = this.state

    if (displayMobileMenu) {
      return <MobileMenu resetMobileMenu={resetMobileMenu} />
    } else if (isMobile) {
      return (
        <HeaderContainer>
          <HeaderTitle to="/">{siteTitle}</HeaderTitle>
          <SVGBox onClick={lauchMobileMenu}>
            <svg height="32px" id="Layer_1" viewBox="0 0 32 32" width="32px">
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </SVGBox>
        </HeaderContainer>
      )
    } else {
      return (
        <HeaderContainer>
          <HeaderTitle to="/">{siteTitle}</HeaderTitle>
          <LinksContainer>
            <HeaderLinkText to="/">Home</HeaderLinkText>
            <DropdownContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <HeaderDropdownParentText>About</HeaderDropdownParentText>

              <LinkPopdown hover={hover}>
                <PopdownItem hover={hover}>
                  <HeaderLinkText to="/about-book">
                    About the Book
                  </HeaderLinkText>
                </PopdownItem>
                <PopdownItem hover={hover}>
                  <HeaderLinkText to="/about-authors">
                    About the Authors
                  </HeaderLinkText>
                </PopdownItem>
                <PopdownItem hover={hover}>
                  <HeaderLinkText to="/about-publisher">
                    About the Publisher
                  </HeaderLinkText>
                </PopdownItem>
              </LinkPopdown>
            </DropdownContainer>
            <HeaderLinkText to="/gallery">Gallery</HeaderLinkText>
            <HeaderLinkText to="/purchase">Purchase</HeaderLinkText>
            <HeaderLinkText to="/contact">Contact</HeaderLinkText>
          </LinksContainer>
        </HeaderContainer>
      )
    }
  }
}

export default Header
