import styled, { css } from 'styled-components'
import Link from 'gatsby-link';

export const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  color: #111111;
`

export const DropdownContainer = styled.div`
  position: relative;
`

export const HeaderDropdownParentText = styled.p`
  text-decoration: none;
  font-size: 2.0rem;
  margin: 10px;
  padding: 5px 0;
  font-family: 'Oxygen', sans-serif;
  color: #363636;
  position: relative;
  cursor: pointer;

  &:hover + ${PopdownItem} {
    color: red;
  }
`

export const HeaderLinkText = styled(Link)`
  text-decoration: none;
  font-size: 2.0rem;
  margin: 10px;
  padding: 5px 0;
  font-family: 'Oxygen', sans-serif;
  color: #363636;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #5b5b5b;
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
  transition: all 0.5s ease;
  background-color: white;
  border: 1px solid #8c8c8c;
  padding: 0px 10px 10px 15px;
  border-radius: 5px;
  left: -15px;

  opacity: 0;
  visibility: hidden;

  ${props => props.hover && css`
    transition: opacity .3s ease-in-out;
    opacity: 1;
    visibility: visible;
  `};

  &:before {
    content:"";
    position: absolute;
    left: 40px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #8c8c8c transparent;
    z-index: 100;
  }

  &:after {
    content:"";
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
  display: table;
  background-color: white;
  white-space: nowrap;
  margin: 15px 0;
  position: relative;
`