## CityGrader Coding Challenge

We're building a site to display cryptocurrency prices.

This challenge requires you to use the following frameworks/libraries:

- React.js https://reactjs.org/tutorial/tutorial.html
- Next.js https://github.com/zeit/next.js
- Material UI Next https://material-ui-next.com/demos
- Recharts http://recharts.org/#/en-US/guide/getting-started


### Running the app
Make sure you have nodejs installed. Homebrew has it on macos. 

After you clone the repo, run ``npm install`` to install the libraries listed in package.json

Use``npm run dev`` to start the app.

### Beating the challenge

You start off with 2 pages already made
- Home page
- Bitcoin price page


You have to make 3 more pages:
- [ ] Ethereum Price page
  - Just like the bitcoin page but for ETH

- [ ] Ripple Price page
  - Just like the bitcoin page but for XRP 

- [ ] Coin comparison page
  - This page should have a bar graph displaying the top 5 crypto currencies
  - For each one have 2 individual bars showing current price and a past price. Any past price will do. There's at least one past price included in the api response found in pages/btc.js
  - Use the BarChart component from the Recharts library 

And modify the home page:
- [ ] Display a list of the top 5 crypto currencies using Material UI's List component 

Additionally you have to do the following:

- [ ] Set the title tag in the <head> for each page
- [ ] Use the Roboto Mono font as described in Material UI Next documentation. This will involve creating a custom document file as per the Nextjs example

### How to get the data
You should fetch the data in a getInitialProps call from a public API like this:

``https://coinmarketcap.com/api/``

The data can come from any public api you want, I picked this one because it has per-coin endpoints and an endpoint for multiple coins.

Endpoint for multiple coins: 

``https://api.coinmarketcap.com/v1/ticker/?limit=10``




### Relevant examples:
- Next.js with layout component: https://github.com/zeit/next.js/tree/canary/examples/layout-component
- Material UI List Component https://material-ui-next.com/demos/lists/
- Material UI with routing: https://material-ui-next.com/demos/buttons/#third-party-routing-library
- Nextjs examples: https://github.com/zeit/next.js/tree/canary/examples
- Nextjs Link component: https://github.com/zeit/next.js#with-link
- Bar chart: http://jsfiddle.net/v8gxrbyu/


