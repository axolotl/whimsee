import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

function Gallery({ data }) {
  const images = data.allPrismicGalleryimage.nodes.map(
    node => node.data.image.localFile.childImageSharp.sizes
  )

  return (
    <Layout>
      <GalleryContainer>
        {images.map((image, i) => (
          <Img key={i} sizes={image} />
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
    allPrismicGalleryimage {
      nodes {
        data {
          title {
            html
            text
          }
          image {
            alt
            copyright
            url
            localFile {
              childImageSharp {
                sizes(maxWidth: 550) {
                  sizes
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
