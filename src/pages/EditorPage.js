/**
 * Editor Page
 * 
 * Page that shows the editor environment after user selected all the options (layout, pattern, application).
 * All the editing runs here. Magic!
 */

// Flow checker, use 'npm flow' to run.
// @flow

import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';

// import SVGCanvas from '../components/SVGCanvas';
import Layout from '../components/Layout';

class App extends Component {

  render() {

    // let options = {
    //   w: 100,
    //   h: 100
    // };

    return (
      <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
        <Grid>
          <Row>
            {/*<SVGCanvas options={ options } />*/}
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default App;
