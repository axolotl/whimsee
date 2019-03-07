import React from 'react'
import Layout from '../components/layout'
import {
  Wrapper,
  InnerWrapper,
  Text,
  Header,
  TextBox,
  TextWrapper,
} from '../styles/Contact'

const Contact = () => (
  <Layout>
    <Wrapper>
      <InnerWrapper>
        <Header>Questions? Comments? We are here for you!</Header>
        <TextBox>
          <TextWrapper>
            <Text>PO Box 179.</Text>
            <Text>Batesville, Va 22924</Text>
            <Text>
              <a href="mailto:Info@whimseebooks.com">Info@whimseebooks.com</a>{' '}
            </Text>
          </TextWrapper>
        </TextBox>
      </InnerWrapper>
    </Wrapper>
  </Layout>
)

export default Contact
