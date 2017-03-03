/*
App.js 
 */

// @flow

import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import Canvas from './Canvas';
import Layout from './Layout';

class App extends Component {

  render() {

    return (
      <Layout fluid={ true }>
          <Row className="height-80">
              <Canvas 
                ref={ (c) => this.canvas = c }
                // width={ 700 } 
                // height={ 700 }
              />
          </Row>
      </Layout>
    );
  }
}

export default App;
