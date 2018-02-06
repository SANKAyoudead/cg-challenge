import Link from 'next/link'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Reboot from 'material-ui/Reboot';

export default ({ children, title = '' }) => (
  <div>
    <Reboot/> {/* reset styles using normalize.css */}

    <AppBar position="static">
      <Toolbar>

        <Link href="/">
          <Button variant="raised" color="primary" component="a">
            Home
          </Button>
        </Link>

        <Link href="/btc">
          <Button variant="raised" color="primary" component="a">
            Bitcoin
          </Button>
        </Link>

        <Link href="/eth">
          <Button variant="raised" color="primary" component="a">
            Ethereum
          </Button>
        </Link>

        <Link href="/compare">
          <Button variant="raised" color="primary" component="a">
            Compare
          </Button>
        </Link>

      </Toolbar>
    </AppBar>

    <div style={{margin:20}}>
      <Paper style={{padding:20}}>
        <h1>{title}</h1>
        { children }
      </Paper>
    </div>

  </div>
)
