import React from 'react'
import Layout from '../components/layout'
import { CTAButton } from '../styles/IndexPage'
import { Wrapper, Text } from '../styles/Purchase'

const Purchase = () => (
  <Layout>
    <Wrapper>
      <Text>Available through Amazon.</Text>
      <Text>Retail: $12.99</Text>

      <a href="https://www.amazon.com/gp/product/099913101X/ref=ox_sc_saved_title_1?smid=A35KY9GH64EZOE&psc=1">
        <CTAButton>Purchase now</CTAButton>
      </a>
    </Wrapper>
  </Layout>
)

export default Purchase
