import React from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

class RipplePage extends React.Component {

  static async getInitialProps() { //fetch the data for bitcoin in json format and return the price

    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/ripple/');

    const rippleData = await response.json()

    console.log(rippleData)

    const price = rippleData[0].price_usd;

    return { price }
  }

  render() {
    return (
      <Layout title="Ripple">
        <div>
          Ripple price: ${this.props.price} USD
        </div>
      </Layout>
    )
  }
}

export default RipplePage
