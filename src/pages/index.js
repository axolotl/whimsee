import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { FlexWrapper, TextSectionSide } from '../styles/Content'
import { CTABody, CTAButton, CTAButtonText } from '../styles/IndexPage'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { fluid: splash } = data.splash.childImageSharp
  const { fluid: title } = data.title.childImageSharp
  const paragraphs = data.allPrismicIndexbody.nodes[0].data.content.raw || null

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
            <CTAButton restrictOnMobile color="#1485CC">
              Look inside!
            </CTAButton>
          </CTAButtonText>
          <CTAButtonText to="/purchase">
            <CTAButton style={{ marginTop: '0px' }}>Purchase now</CTAButton>
          </CTAButtonText>
        </div>
        <TextSectionSide style={{ marginTop: '10px' }}>
          <Img fluid={title} style={{ width: '100%' }} />

          {paragraphs &&
            paragraphs.map(
              ({ type, text }) =>
                type === 'paragraph' && <CTABody>{text}</CTABody>
            )}
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
    allPrismicIndexbody {
      nodes {
        data {
          content {
            raw {
              type
              text
            }
          }
        }
      }
    }
  }
`
