/**
 * Editor Page
 * 
 * Page that shows the editor environment after user selected all the options (layout, pattern, application).
 * All the editing runs here. Magic!
 */

// Flow checker, use 'npm flow' to run.
// @flow

import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import SVGCanvas from '../components/SVGCanvas';
import Layout from '../components/Layout';

class App extends Component {

  render() {

    let options = {
      w: 100,
      h: 100
    };

    return (
      <Layout fluid={ true }>
          <Row className="height-80">
            <SVGCanvas options={ options } />
          </Row>
      </Layout>
    );
  }
}

export default App;
