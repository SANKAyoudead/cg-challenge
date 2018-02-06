import React from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

class BitcoinPage extends React.Component {

  static async getInitialProps() { //fetch the data for bitcoin in json format and return the price

    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/');

    const bitcoinData = await response.json()

    console.log(bitcoinData)

    const price = bitcoinData[0].price_usd;

    return { price }
  }

  render() {
    return (
      <Layout title="Bitcoin">
        <div>
          Bitcoin price: ${this.props.price} USD
        </div>
      </Layout>
    )
  }
}

export default BitcoinPage 

