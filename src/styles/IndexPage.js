import styled from 'styled-components'
import Link from 'gatsby-link'

// deprecate CTAHeader
export const CTAHeader = styled.h2`
  font-size: 2.8rem;
  margin: 20px;
  color: #111111;
  font-family: 'Oxygen', sans-serif;
`

export const CTABody = styled.p`
  font-size: 1.9rem;
  line-height: 3.5rem;
  margin: 20px;
  color: #111111;
  font-family: 'Oxygen', sans-serif;
`

export const CTAButton = styled.button`
  margin: 20px;
  text-align: center;
  font-size: 2.4rem;
  padding: 10px 30px;
  margin-top: 20px;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 3px transparent;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ color }) => color || '#E11541'};
  color: white;
  transition: all 0.3s ease;
  width: 225px;

  &:hover {
    background: rgba(0, 0, 0, 0);
    color: ${({ color }) => color || '#E11541'};
    box-shadow: inset 0 0 0 3px ${({ color }) => color || '#E11541'};
  }
`

export const CTAButtonText = styled(Link)`
  text-decoration: none;
  font-family: 'Oxygen', sans-serif;
`
