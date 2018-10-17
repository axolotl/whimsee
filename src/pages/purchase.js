import React from 'react'
import Layout from '../components/layout'
import { P } from '../styles/Text'

const Purchase = () => (
  <Layout>
    <P>Purchase.</P>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="EEDRXML5A9UJQ" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </Layout>
)

export default Purchase
