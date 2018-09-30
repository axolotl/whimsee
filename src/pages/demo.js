import React, { Component } from 'react'
import Layout from '../components/layout'
import { P } from '../styles/Text'
import { DemoIntro, DemoContainer, DemoButton, DemoImg } from '../styles/Demo'

class Demo extends Component {
  state = {
    frontIndex: 0,
    backIndex: 0,
  }

  // for expediency setting the number of images to 3 on either side
  swapPicture = (side, direction) => {
    const current = this.state[side]
    const next =
      current + direction < 0
        ? 2
        : current + direction > 2
          ? 0
          : current + direction
    this.setState({ [side]: next })
  }

  render() {
    // grab all images
    const { edges } = this.props.data.allImageSharp
    // parse out only only the onces we need
    const images = edges.filter(image => !image.node.sizes.src.match('cover'))
    const fronts = []
    const backs = []

    // sort images into the correct categories based on filename
    images.forEach(
      image =>
        parseInt(image.node.sizes.src.match(/-[0-9]{2}-/)[0].slice(1, 3)) %
        2 ===
        0
          ? backs.push(image)
          : fronts.push(image)
    )

    const { swapPicture } = this
    const { frontIndex, backIndex } = this.state

    console.log(this.state)

    return (
      <Layout>
        <DemoIntro>
          Use the previous and next buttons to try creating a new dog breed!
        </DemoIntro>
        <DemoContainer style={{ maxWidth: '580px' }}>
          <DemoButton
            style={{ top: 10, left: 10 }}
            onClick={() => swapPicture('frontIndex', -1)}
          >
            Previous
          </DemoButton>
          <DemoButton
            style={{ bottom: 10, left: 10 }}
            onClick={() => swapPicture('frontIndex', 1)}
          >
            Next
          </DemoButton>
          <DemoImg
            style={{ width: '300px', marginRight: '5px' }}
            sizes={fronts[frontIndex].node.sizes}
          />
          <DemoImg
            style={{ width: '300px' }}
            sizes={backs[backIndex].node.sizes}
          />
          <DemoButton
            style={{ top: 10, right: 10 }}
            onClick={() => swapPicture('backIndex', -1)}
          >
            Previous
          </DemoButton>
          <DemoButton
            style={{ bottom: 10, right: 10 }}
            onClick={() => swapPicture('backIndex', 1)}
          >
            Next
          </DemoButton>

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
          sizes(maxWidth: 550) {
            sizes
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
  }
`
