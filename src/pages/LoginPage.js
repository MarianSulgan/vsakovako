/**
 * Login Page
 * 
 * Page that allows t o log in using social accounts.
 */

import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Layout from '../components/Layout';

class App extends Component {

  render() {

    return (
      <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
        <Grid id="loginPage">
            <Row>
                <h1>Prihlásenie. Seba sa.</h1>
                <p>Prihlás sa cez jeden z účtov. Po prihlásení sa tvoje výtvory samé ukladajú do profilu a máš ich vždy po ruke. To dá rozum.</p>
            </Row>
          <Row>
            <div className="social-btns text-center">
                <FontAwesome name='facebook' size="4x" />
                <FontAwesome name='twitter' size="4x" />
                <FontAwesome name='google' size="4x" />
            </div>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default App;
