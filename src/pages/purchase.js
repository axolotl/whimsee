import React from 'react'
import Layout from '../components/layout'
import { CTAButton } from '../styles/IndexPage'
import { Wrapper, Text } from '../styles/Purchase'

const Purchase = () => (
  <Layout>
    <Wrapper>
      <Text>Available through Amazon.</Text>
      <Text>Retail: $12.99</Text>
      <CTAButton>Purchase now</CTAButton>
    </Wrapper>
  </Layout>
)

export default Purchase
