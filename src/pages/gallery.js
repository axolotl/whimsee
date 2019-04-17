import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

function Gallery({ data }) {
  const images = data.allImageSharp.edges.filter(image =>
    image.node.sizes.src.match('gallery')
  )

  return (
    <Layout>
      <GalleryContainer>
        {images.map((image, i) => (
          <Img key={i} sizes={image.node.sizes} />
        ))}
      </GalleryContainer>
    </Layout>
  )
}

export default Gallery

const GalleryContainer = styled.div`
  & > * {
    width: 300px;
    max-width: 300px;
    margin: 1rem;
  }

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const galleryQuery = graphql`
  query galleryQuery {
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 550) {
            sizes
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
  }
`
