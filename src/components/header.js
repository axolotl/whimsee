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
} from '../styles/Header'

class Header extends Component {
  state = {
    hover: false,
  }

  handleMouseEnter = event => {
    this.setState({ hover: true })
  }

  handleMouseLeave = event => {
    this.setState({ hover: false })
  }

  render() {
    const { siteTitle } = this.props
    const { handleMouseEnter, handleMouseLeave } = this
    const { hover } = this.state

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
                <HeaderLinkText to="/about-book">About the Book</HeaderLinkText>
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
          {/* <HeaderLinkText to="/events">Events</HeaderLinkText> */}
          <HeaderLinkText to="/gallery">Gallery</HeaderLinkText>
          <HeaderLinkText to="/purchase">Purchase</HeaderLinkText>
          <HeaderLinkText to="/contact">Contact</HeaderLinkText>
        </LinksContainer>
      </HeaderContainer>
    )
  }
}

export default Header
