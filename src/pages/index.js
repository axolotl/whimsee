import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { P } from '../styles/Text'
import { FlexWrapper, TextSection } from '../styles/Content'
import {
  CTAHeader,
  CTABody,
  CTAButton,
  CTAButtonText,
} from '../styles/IndexPage'

const IndexPage = ({ data }) => {
  const { resolutions: image } = data.file.childImageSharp

  return (
    <Layout>
      <FlexWrapper>
        <Img resolutions={image} />
        <TextSection>
          <CTAHeader>
            Introducing this awsome new book ... continue intro copy
          </CTAHeader>
          <CTABody>
            Call to action/purchase, probably with a nice big button. Blah,
            blah, Blah, blah, Blah, blah, Blah, blah, Blah, blah,...{' '}
          </CTABody>

          <CTAButtonText to="/purchase">
            <CTAButton>Purchase now</CTAButton>
          </CTAButtonText>
        </TextSection>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    file(relativePath: { eq: "whimsee-cover-img.jpg" }) {
      childImageSharp {
        resolutions(width: 500, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
