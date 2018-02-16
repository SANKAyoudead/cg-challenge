import React from 'react'
import Layout from '../components/layout'
import List, { ListItem, ListItemText } from 'material-ui/List'

class HomePage extends React.Component {

    static async getInitialProps() {

      const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=5');

      const homePage = await response.json()

      console.log(homePage)

      const name = homePage[0].name;

      // const name = Homepage.map(coin => return <listitem name=coin.name>)


      return { name }
    }

  render() {
    return (
      <Layout title="Top Crypto Currencies">
        <div>
          <List component="nav">
          <ListItem>
            <ListItemText primary={this.props.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary={this.props.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary={this.props.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary={this.props.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary={this.props.name} />
          </ListItem>
        </List>
        </div>
      </Layout>
    )
  }
}

export default HomePage
