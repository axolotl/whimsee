import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { P } from '../styles/Text'
import { TextSection, TextWrapper } from '../styles/Content'
import { PicsContainer } from '../styles/Authors'
import { graphql } from 'gatsby'

const AboutAuthors = ({ data }) => {
  const { fluid: beverly } = data.beverly.childImageSharp
  const { fluid: leslie } = data.leslie.childImageSharp

  return (
    <Layout>
      <TextWrapper>
        <TextSection>
          <PicsContainer>
            <Img fluid={beverly} style={{ width: '100%' }} />
            <Img fluid={leslie} style={{ width: '100%' }} />
          </PicsContainer>
          <P>
            Anyone watching Leslie and Beverley grow up and then raise their own
            families in gorgeous central Virginia might easily imagine how My
            Dog Is a WHAT? would emerge.
          </P>
          <P>
            Both love animals and have beloved family dogs of their own. Leslie
            enjoyed years of horseback riding with her mother and sisters, and
            Beverley always loved the outdoors, especially hiking with her
            children. Both have spent many hours volunteering at their local
            animal shelters.
          </P>
          <P>
            The uniquely crafted book they have created reflects their
            backgrounds in fine arts: Beverley enjoys drawing, paper cutting and
            stain glassed projects at home. Leslie started a kids’ clothing
            business called Kids Knits, designing both hand-knit and
            machine-knit items.
          </P>
          <P>
            Twenty years ago they met as neighbors, became close friends in no
            time at all and realized how much they both enjoy animals, creative
            arts and children. Their Fine Arts, Psychology and Child Development
            degrees led to Leslie teaching for 12 years and Beverley for 17 –
            for a while at the same preschool – a surefire way to observe what
            makes children laugh and to dream about innovative new projects.
          </P>
          <P>
            My Dog Is a WHAT? is a book that’s also an activity. It’s a creative
            way for children (and adults!) to have fun with the playful
            construction and reconstruction of dogs and dog names. It’s an
            excuse to be silly with a young friend; to enjoy a new take on Roy
            G. Biv, the spectrum colors; to flip pages and make ridiculous,
            laughable combinations. Beverley and Leslie have given us fun and
            fun only in their delightful book. May the world chuckle with them!
          </P>
        </TextSection>
      </TextWrapper>
    </Layout>
  )
}

export default AboutAuthors

export const authorsQuery = graphql`
  query authorsQuery {
    beverly: file(relativePath: { eq: "authorpage-beverly.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leslie: file(relativePath: { eq: "authorpage-leslie.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
