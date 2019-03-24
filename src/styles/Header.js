import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

export const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: row;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled(Link)`
  font-size: 3.6rem;
  font-family: 'Henny Penny', cursive;
  padding: 30px 0;
  text-decoration: none;
  color: #6ec347;
`

export const DropdownContainer = styled.div`
  position: relative;
`

export const HeaderDropdownParentText = styled.p`
  text-decoration: none;
  font-size: 2.3rem;
  margin: 10px;
  padding: 5px 0;
  font-family: 'Oxygen', sans-serif;
  color: #363636;
  position: relative;
  cursor: pointer;
`

export const HeaderLinkText = styled(Link)`
  text-decoration: none;
  font-size: 2.3rem;
  margin: 10px;
  padding: 5px 0;
  font-family: 'Oxygen', sans-serif;
  color: #363636;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e11541;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

export const LinkPopdown = styled.ul`
  position: absolute;
  transition: all 0.3s ease-in-out;
  background-color: white;
  border: 1px solid #a8a8a8;
  padding: 0px 10px 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px rgba(184, 184, 184, 1);
  left: -15px;

  opacity: 0;
  visibility: hidden;
  z-index: 100;

  ${({ hover }) =>
    hover &&
    css`
      opacity: 1;
      visibility: visible;
    `};

  &:before {
    content: '';
    position: absolute;
    left: 40px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #a8a8a8 transparent;
    z-index: 100;
  }

  &:after {
    content: '';
    position: absolute;
    left: 41px;
    top: -9px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 9px 9px;
    border-color: transparent transparent white transparent;
    z-index: 100;
  }
`
export const PopdownItem = styled.li`
  background-color: white;
  white-space: nowrap;
  margin: 15px 0;

  transition: all 0.3s ease-in-out;

  opacity: 0;
  visibility: hidden;
  z-index: 100;

  ${({ hover }) =>
    hover &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`
export const SVGBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`
