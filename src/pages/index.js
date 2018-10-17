import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { P } from '../styles/Text'
import { FlexWrapper, TextSectionSide } from '../styles/Content'
import {
  IndexImg,
  CTAHeader,
  CTABody,
  CTAButton,
  CTAButtonText,
} from '../styles/IndexPage'

const IndexPage = ({ data }) => {
  const { fluid: image } = data.file.childImageSharp

  // console.log(data)
  return (
    <Layout>
      <FlexWrapper style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Img fluid={image} style={{ width: '100%' }} />
        </div>
        <TextSectionSide style={{ marginTop: '30px' }}>
          <CTAHeader>
            Introducing this awsome new book ... continue intro copy
          </CTAHeader>
          <CTABody>
            Call to action/purchase, probably with a nice big button. Blah,
            blah, Blah, blah, Blah, blah, Blah, blah, Blah, blah,...{' '}
          </CTABody>

          <CTAButtonText to="/demo">
            <CTAButton color="#1485CC">Look inside!</CTAButton>
          </CTAButtonText>
          <CTAButtonText to="/purchase">
            <CTAButton style={{ marginTop: '0px' }}>Purchase now</CTAButton>
          </CTAButtonText>
        </TextSectionSide>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    file(relativePath: { eq: "whimsee-cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

/*
resolutions(width: 500) {
          ...GatsbyImageSharpResolutions
        }
      */
