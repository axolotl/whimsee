import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { P } from '../styles/Text'
import { DemoContainer } from '../styles/Demo'

class Demo extends Component {
  state = {
    frontIndex: 0,
    backIndex: 0
  }

  render() {
    // grab all images
    const { edges } = this.props.data.allImageSharp
    // parse out only only the onces we need
    const images = edges.filter(image => !image.node.sizes.src.match('cover'))
    const fronts = []
    const ends = []

    // sort images into the correct categories based on filename
    images.forEach(
      image =>
        parseInt(image.node.sizes.src.match(/-[0-9]{2}-/)[0].slice(1, 3)) %
        2 ===
        0
          ? ends.push(image)
          : fronts.push(image)
    )

    return (
      <Layout>
        <DemoContainer>
          <button>Prev</button>
          <button>Next</button>
          <Img style={{ width: '300px' }} sizes={fronts[0].node.sizes} />
          <Img style={{ width: '300px' }} sizes={ends[0].node.sizes} />

          {/*

          {fronts.map((image, i) => {
            return (
              <Img key={i} style={{ width: '350px' }} sizes={image.node.sizes} />
            )
          })}

          {ends.map((image, i) => {
            return (
              <Img key={i} style={{ width: '350px' }} sizes={image.node.sizes} />
            )
          })}

          */}

        </DemoContainer>
      </Layout>
    )
  }
}

export default Demo

export const demoQuery = graphql`
  query demoQuery {
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 550, quality: 100) {
            sizes
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
  }
`
