import React, { Component } from 'react'
import Layout from '../components/layout'
import {
  DemoIntro,
  DemoContainer,
  DemoImgContainer,
  DemoButton,
  DemoImg,
} from '../styles/Demo'
import { graphql } from 'gatsby'

class Demo extends Component {
  state = {
    frontIndex: 1,
    backIndex: 1,
    slide: false,
    direction: '',
    animatedSide: '',
  }

  // for expediency setting the number of images to 3 on either side
  swapPicture = (side, direction) => {
    const current = this.state[side]
    const next = this.calcIndex(current, direction)
    this.setState({ [side]: next })
  }

  calcIndex = (current, direction) =>
    current + direction < 0
      ? 2
      : current + direction > 2
      ? 0
      : current + direction

  setSlide = (side, direction) => {
    this.setState({
      slide: true,
      direction: direction === -1 ? 'up' : 'down',
      animatedSide: side,
    })
    setTimeout(() => {
      this.setState({ slide: false })
      this.swapPicture(side, direction)
    }, 500)
  }

  render() {
    // grab all images
    const { edges } = this.props.data.allImageSharp

    // parse out only only the onces we need
    const images = edges.filter(
      image =>
        !image.node.sizes.src.match('cover') &&
        image.node.sizes.src.match('whimsee')
    )
    const fronts = []
    const backs = []

    // sort images into the correct categories based on filename
    images.forEach(image => {
      let imageNum = parseInt(
        image.node.sizes.src.match(/-[0-9]{2}./)[0].slice(1, 3)
      )
      if (imageNum % 2 === 0) {
        backs.push(image)
      } else {
        fronts.push(image)
      }
    })

    const { calcIndex, setSlide } = this
    const { frontIndex, backIndex, slide, direction, animatedSide } = this.state

    return (
      <Layout>
        <DemoIntro>
          Use the previous and next buttons to try creating a new dog breed!
        </DemoIntro>

        <DemoContainer>
          <DemoImgContainer style={{ marginRight: '5px' }}>
            <DemoButton
              style={{ top: 10, left: 10 }}
              onClick={() => (!slide ? setSlide('frontIndex', -1) : '')}
            >
              Previous
            </DemoButton>
            <DemoButton
              style={{ bottom: 10, left: 10 }}
              onClick={() => (!slide ? setSlide('frontIndex', 1) : '')}
            >
              Next
            </DemoButton>
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'frontIndex' ? true : false}
              sizes={fronts[calcIndex(frontIndex, -1)].node.sizes}
            />
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'frontIndex' ? true : false}
              sizes={fronts[frontIndex].node.sizes}
            />
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'frontIndex' ? true : false}
              sizes={fronts[calcIndex(frontIndex, 1)].node.sizes}
            />
          </DemoImgContainer>

          <DemoImgContainer>
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'backIndex' ? true : false}
              sizes={backs[calcIndex(backIndex, -1)].node.sizes}
            />
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'backIndex' ? true : false}
              sizes={backs[backIndex].node.sizes}
            />
            <DemoImg
              slide={slide}
              direction={direction}
              animatedSide={animatedSide === 'backIndex' ? true : false}
              sizes={backs[calcIndex(backIndex, 1)].node.sizes}
            />
            <DemoButton
              style={{ top: 10, right: 10 }}
              onClick={() => (!slide ? setSlide('backIndex', -1) : '')}
            >
              Previous
            </DemoButton>
            <DemoButton
              style={{ bottom: 10, right: 10 }}
              onClick={() => (!slide ? setSlide('backIndex', 1) : '')}
            >
              Next
            </DemoButton>
          </DemoImgContainer>
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
