import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const InnerWrapper = styled.div`
  margin-top: 3rem;
`

export const Text = styled.p`
  font-size: 2rem;
  font-family: 'Oxygen', sans-serif;
  // color: #363636;

  color: ${({ color }) => {
    switch (color) {
      case 'green':
        return '#3BD44A'
      default:
        return '#363636'
    }
  }};

  margin: 2rem 0 1.5rem;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const TextWrapper = styled.div`
  max-width: 700px;
`

export const Header = styled.h2`
  font-family: 'Henny Penny', cursive;
  font-size: 2.6rem;
  color: #ff1e00;
`
