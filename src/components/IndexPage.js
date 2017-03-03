/*
Index Page
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

import '../css/IndexPage.css';

class IndexPage extends Component {

  render() {

    return (
        <div className="text-center index-page">
            <Grid fluid>
                <Jumbotron className="top-buffer transparent">
                    <h1>všakovako generátor</h1>
                    <p>Vytvor si vlastný ľudový vzor a s láskou ho opatruj!</p>
                </Jumbotron>
                <Row className="top-buffer">
                    <Col xs={ 12 }>
                        <Link to="/pick-layout-option">
                            <Button bsStyle="primary" bsSize="large">Chcem tvoriť</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="top-buffer">
                    <Col xs={ 12 }>
                        <Button bsStyle="default" bsSize="large">Čo vytvorili iní</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default IndexPage;
