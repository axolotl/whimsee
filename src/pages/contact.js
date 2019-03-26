import React from 'react'
import styled from 'styled-components'
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
            <Text>
              Follow us on{' '}
              <A href="https://www.facebook.com/whimseebooks">Facebook</A> and{' '}
              <A href="https://www.instagram.com/my_dog_is_a_what">Instagram</A>
            </Text>
            <div style={{ height: '20px' }} />
            <Text>PO Box 179.</Text>
            <Text>Batesville, Va 22924</Text>
            <Text>
              <a href="mailto:Info@whimseebooks.com">Info@whimseebooks.com</a>{' '}
            </Text>
            {/* <div style={{ height: '20px' }} />
            <Text color={'green'}>
              It's the things we play with and the people who help us play that
              make a great difference in our lives.” ― Fred Rogers{' '}
            </Text> */}
          </TextWrapper>
        </TextBox>
      </InnerWrapper>
    </Wrapper>
  </Layout>
)

const A = styled.a``

export default Contact
