import React, { Fragement } from 'react'
import Layout from '../components/layout'
import { TextSection } from '../styles/Content'
import { P, LI } from '../styles/Text'

const AboutBook = () => (
  <Layout>
    <TextSection>
      <P>
        My Dog is a What?, originated with an idea for a witty, LIvely and
        unique children’s book that will entertain young children and parents
        aLIke! It is a book that not only promotes a child’s imagination but
        also incorporates many basic learning concepts in a comical form.
      </P>
      <ul>
        <LI>
          The different colored borders and matching tabs teach color/rainbow
          recognition, matching and memory
        </LI>
        <LI>
          The dogs’ names provide not only humor but teach word recognition,
          syllabic awareness, and that reading moves from left to right,
        </LI>
        <LI>
          The use of the tabs and turning of the pages, help with fine motor
          skills
        </LI>
        <LI>
          The ‘Did You Know?’ page teaches a fact about each breed of dog
          represented
        </LI>
        <LI>
          The overall action of matching and mismatching the dog pictures and
          their breed names is stimulating and so much fun!
        </LI>
      </ul>
    </TextSection>
  </Layout>
)

export default AboutBook
