import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { P } from '../styles/Text'
import { TextSection, TextWrapper } from '../styles/Content'

const AboutPublisher = ({ data }) => {
  console.log(data)
  const { fluid: patricia } = data.file.childImageSharp
  return (
    <Layout>
      <TextWrapper>
        <TextSection>
          <Img fluid={patricia} style={{ width: '100%', margin: '1.5rem 0' }} />
          <P>PAPER SHOE PRESS</P>
          <P>
            Paper Shoe Press, proud publisher of My Dog is a WHAT?, was founded
            in 2011 by Patricia Castelli. Her company is named for a simple
            idea. The stories, ideas and images within books transport us to
            places near and far that we would not get to know any other way.
            They make us laugh, reflect and see and think about the world around
            us differently. We make books (traditionally at least) with paper,
            and we wear shoes on any kind of journey. They both take us places.
            Patricia takes great pleasure in putting well-crafted stories and
            striking and intriguing images in the hands of happy readers. She is
            also the author of The Story of Keswick Hall (2011, second printing
            2014), which was featured in the 2012 Virginia Festival of the Book
            and nominated that year for a nonfiction award by the Library of
            Virginia. To learn more about her book, visit storyofkeswick.com.
          </P>
        </TextSection>
      </TextWrapper>
    </Layout>
  )
}

export default AboutPublisher

export const publisherQuery = graphql`
  query publisherQuery {
    file(relativePath: { eq: "patricia.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
