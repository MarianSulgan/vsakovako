/*
App.js 
 */

// @flow

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { push as Menu } from 'react-burger-menu';

import Canvas from './Canvas';

class App extends Component {

  render() {

    return (
      <div id="outer-container">
        <Menu outer pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
          <a id="home" className="menu-item" href="#">Home</a>
          <a id="about" className="menu-item" href="#">About</a>
          <a id="contact" className="menu-item" href="#">Contact</a>
        </Menu>
        <Grid fluid id="page-wrap">
          <h1 className="pull-right">všakovako generátor</h1>
          <Row className="">
            <Col xs={ 12 } className="">
              <Canvas 
                ref={ (c) => this.canvas = c } 
                width={ 700 } 
                height={ 700 } 
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
