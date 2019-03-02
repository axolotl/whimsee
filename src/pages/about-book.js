import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { TextSection, TextWrapper } from '../styles/Content'
import { P, LI } from '../styles/Text'

const AboutBook = () => (
  <Layout>
    <TextWrapper>
      <TextSection>
        <Block>
          <Chunk>
            At first there was <b>a friendship</b> between two teachers of Early
            Childhood Education.
          </Chunk>

          <Chunk>The friendship is strong and longstanding.</Chunk>
        </Block>

        <Block>
          <Chunk>
            Then there was <b>an idea</b> for a lively, unique, interactive,
            entertaining children’s book for all ages.
          </Chunk>

          <Chunk>The idea grew.</Chunk>
        </Block>

        <Block>
          <Chunk>
            At last there was <b>My Dog is a WHAT?</b>
          </Chunk>

          <Chunk>
            This engaging book tickles a child’s imagination using many basic
            learning concepts, including:
          </Chunk>
        </Block>
        <ul>
          <LI>
            The different colored pages and matching tabs teach color/rainbow
            recognition, matching and memory.
          </LI>
          <LI>
            The dogs’ names created by flipping the pages provide not only humor
            but teach word recognition, syllabic awareness, and that reading
            moves from left to right.
          </LI>
          <LI>
            The use of the tabs and turning of the pages, help with fine motor
            skills and strengthening pincer grip.
          </LI>
          <LI>
            The ‘Did You Know?’ page teaches a fact about each breed of dog
            represented.
          </LI>
          <LI>
            The overall action of matching and silly-matching the dog pictures
            and their breed names is stimulating and so much fun!
          </LI>
        </ul>
        <P style={{ marginTop: '2rem' }}>
          Leslie Browne and Beverley Crosby, having spent countless hours
          enjoying books with young children, are convinced that time spent with
          a child and a book is the most memorable of all playtime activities.
          When it’s a book that promotes both laughter and learning, what could
          be more rewarding?
        </P>
      </TextSection>
    </TextWrapper>
  </Layout>
)

export default AboutBook

const Block = styled.div`
  margin-bottom: 2rem;
`

const Chunk = styled(P)`
  margin-bottom: 0;
  text-align: center;
`
