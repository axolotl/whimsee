import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { P } from '../styles/Text'

const IndexPage = ({ data }) => {
  const { resolutions: image } = data.file.childImageSharp

  return (
    <Layout>
      <Img resolutions={image} />
    </Layout>
  )
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    file(relativePath: { eq: "whimsee-cover-img.jpg" }) {
      childImageSharp {
        resolutions(width: 600, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
