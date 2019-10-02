import React from 'react'
import Layout from '../components/layout'
import { CTAButton } from '../styles/IndexPage'
import { Wrapper, Text } from '../styles/Purchase'

const Purchase = () => (
  <Layout>
    <Wrapper>
      <Text>Retail: $12.99</Text>

      <Text>Check out with Square (and get free shipping!)</Text>
      <a href="https://checkout.square.site/buy/WMLNRNFDTEIYSNCSUL2YDLIR">
        <CTAButton>Check out now</CTAButton>
      </a>

      <Text>Also available through Amazon</Text>

      <a href="https://www.amazon.com/gp/product/099913101X/ref=ox_sc_saved_title_1?smid=A35KY9GH64EZOE&psc=1">
        <CTAButton>Proceed to Amazon</CTAButton>
      </a>
    </Wrapper>
  </Layout>
)

export default Purchase
