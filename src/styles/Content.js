import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  flex: 1 0 auto;
`
export const TextSection = styled.div`
  max-width: 600px;
`
export const TextSectionSide = styled.div`
  max-width: 400px;
`
export const FlexWrapper = styled.div`
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`