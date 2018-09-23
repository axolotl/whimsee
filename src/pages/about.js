import React, { Fragement } from 'react'
import Layout from '../components/layout'
import { P } from '../styles/Text'

const About = () => (
  <Layout>
    <P>
      My Dog is a What?, originated with an idea for a witty, lively and unique
      children’s book that will entertain young children and parents alike! It
      is a book that not only promotes a child’s imagination but also
      incorporates many basic learning concepts in a comical form.
    </P>
    <ul>
      <li>
        <P>
          The different colored borders and matching tabs teach color/rainbow
          recognition, matching and memory
        </P>
      </li>
      <li>
        <P>
          The dogs’ names provide not only humor but teach word recognition,
          syllabic awareness, and that reading moves from left to right,
        </P>
      </li>
      <li>
        <P>
          The use of the tabs and turning of the pages, help with fine motor
          skills
        </P>
      </li>
      <li>
        <P>
          The ‘Did You Know?’ page teaches a fact about each breed of dog
          represented
        </P>{' '}
      </li>
      <li>
        <P>
          The overall action of matching and mismatching the dog pictures and
          their breed names is stimulating and so much fun!
        </P>{' '}
      </li>
    </ul>
  </Layout>
)

export default About
