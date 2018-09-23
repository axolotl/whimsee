import styled from 'styled-components'
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
`

export const HeaderTitle = styled(Link)`
  font-size: 3.6rem;
  font-family: 'Henny Penny', cursive;
  padding: 30px 0;
  text-decoration: none;
  color: black;
`

export const HeaderLinkText = styled(Link)`
  text-decoration: none;
  font-size: 2.0rem;
  margin: 10px;
  padding: 5px 0;
  font-family: 'Oxygen', sans-serif;
  color: black;
  position: relative;

  &:hover{
    color: #5b5b5b;
  }

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