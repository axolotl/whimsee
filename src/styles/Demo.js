import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

export const DemoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  height: 480px;
  max-width: 600px;
  overflow: hidden;
  position: relative;
`
export const DemoImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DemoButton = styled.button`
  min-width: 100px;
  font-size: 1.6rem;
  padding: 10px 20px;

  text-align: center;
  cursor: pointer;

  background: #1485CC;
  color: white;
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 3px transparent;
  border-radius: 5px;

  position: absolute;
  z-index: 10;

  transition: all .3s ease;

  &:hover {
    color: #1485CC;
    background: white;
    box-shadow: inset 0 0 0 3px #1485CC;
  }
`

export const DemoIntro = styled.p`
  font-size: 2rem;
  margin: 0 10px 10px;
  text-align: center;
  font-family: 'Oxygen', sans-serif;
  text-wrap: wrap;
`

export const DemoImg = styled(Img)`
  min-height: 100%;
  width: 300px; 
  transform: translateY(-480px);

  ${({ slide, direction, animatedSide }) => slide && animatedSide && css`
    transition: transform 1s ease;
    transform: translateY(${direction === 'up' ? 0 : '-960px'});
  `};
`

