/**
 * Editor Page
 * 
 * Page that shows the editor environment after user selected all the options (layout, pattern, application).
 * All the editing runs here. Magic!
 */

// Flow checker, use 'npm flow' to run.
// @flow

import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import { Link } from 'react-router';

// import SVGCanvas from '../components/SVGCanvas';
import Layout from '../components/Layout';
import strings from '../translations.js';
import SideNavigation from '../components/SideNavigation';

class App extends Component {

  render() {

    const lastRowStyle = {
        paddingBottom: 3.2 + 'em'
    }

    // let options = {
    //   w: 100,
    //   h: 100
    // };

    return (
      <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
        <section className="full-section">
          <Grid id="editorPage" className="app-flow-page">
            <Row className="">
                <Col xs={3} sm={2}>
                    <SideNavigation indicatorNumber={ 3 }/>
                </Col>
                <Col xs={9} sm={10}>
                  <Row>
                    {/*<SVGCanvas options={ options } />*/}
                  </Row>
                </Col>
            </Row>
            <Row style={ lastRowStyle } className="text-center">
                <Link to="/export-pattern">
                    {strings.done}
                </Link>
            </Row>
          </Grid>
        </section>
      </Layout>
    );
  }
}

export default App;
