import styled from 'styled-components'
import Link from 'gatsby-link';

export const CTAHeader = styled.h2`
  font-size: 2.8rem;
  margin: 20px;
  color: #111111;
`

export const CTABody = styled.p`
  font-size: 1.8rem;
  margin: 20px;
  color: #111111;
`

export const CTAButton = styled.button`
  display: block;
  margin: 20px;
  text-align: center;
  font-size: 2.4rem;
  padding: 10px 30px;
  margin-top: 50px;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 3px transparent;
  border-radius: 5px;
  cursor: pointer;
  background: #E11541;
  color: white;
  transition: all .3s ease;

  &:hover {
    background: rgba(0,0,0,0);
    color: #E11541;
    box-shadow: inset 0 0 0 3px #E11541;
  }
`

export const CTAButtonText = styled(Link)`
  text-decoration: none;
  font-family: 'Oxygen', sans-serif;
`