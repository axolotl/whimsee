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
  const { fluid: splash } = data.splash.childImageSharp
  const { fluid: title } = data.title.childImageSharp

  return (
    <Layout>
      <FlexWrapper style={{ width: '100%' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '28px',
          }}
        >
          <Img fluid={splash} style={{ width: '100%' }} />
          <CTAButtonText to="/demo">
            <CTAButton color="#1485CC">Look inside!</CTAButton>
          </CTAButtonText>
          <CTAButtonText to="/purchase">
            <CTAButton style={{ marginTop: '0px' }}>Purchase now</CTAButton>
          </CTAButtonText>
        </div>
        <TextSectionSide style={{ marginTop: '10px' }}>
          {/* deprecate header */}
          {/*<CTAHeader>
            Introducing this awsome new book ... continue intro copy
          </CTAHeader>*/}

          <Img fluid={title} style={{ width: '100%' }} />

          <CTABody>
            Welcome to the world of WhimSee BOOKS! That’s WhimSee as in
            whimsical, fanciful, quirky, amusing, creative and imaginative!
          </CTABody>

          <CTABody>
            Our playful flip book, My Dog Is A WHAT?, is the first in a series.
            It will give you lots of smiles making off-the-wall combinations of
            some of your favorite dogs.
          </CTABody>

          <CTABody>
            And not only you! The children in your world, the older people in
            your world, anyone in your world who could use some new-fashioned
            fun will love making a HUS-SET or a COR-KY.
          </CTABody>

          <CTABody>A WHAT?? You’ll find out!</CTABody>
        </TextSectionSide>
      </FlexWrapper>
    </Layout>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    splash: file(relativePath: { eq: "whimsee-cover-splash.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    title: file(relativePath: { eq: "whimsee-cover-title.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
