import React from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

class EthereumPage extends React.Component {

  static async getInitialProps() { //fetch the data for bitcoin in json format and return the price

    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/');

    const ethereumData = await response.json()

    console.log(ethereumData)

    const price = ethereumData[0].price_usd;

    return { price }
  }

  render() {
    return (
      <Layout title="Ethereum">
        <div>
          Ethereum price: ${this.props.price} USD
        </div>
      </Layout>
    )
  }
}

export default EthereumPage
