import styled from 'styled-components'

export const DemoContainer = styled.div`
  display: flex;
  position: relative;
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
  z-index: 100;

  transition: all .3s ease;

  &:hover {
    color: #1485CC;
    background: white;
    box-shadow: inset 0 0 0 3px #1485CC;
  }
`