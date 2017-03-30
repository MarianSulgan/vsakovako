/**
 * Layout Page
 * 
 * Page where user selects layout options for generator.
 */

import React, { Component } from 'react';
import { Row, Col, Button, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';

class LayoutPage extends Component {

    render() {
        return (
            <Layout>
                <Grid>
                    <Row className="">
                        <h1>Vyberaj zaraz dajaký layout</h1>
                    </Row>
                    <Row className="top-buffer">
                        <Col xs={ 12 } sm={ 4 }>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Donec hendrerit tempor tellus. 
                                Donec pretium posuere tellus. 
                                Proin quam nisl, tincidunt et, mattis 
                                eget, convallis nec, purus. 
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 4 }>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Donec hendrerit tempor tellus. 
                                Donec pretium posuere tellus. 
                                Proin quam nisl, tincidunt et, mattis 
                                eget, convallis nec, purus. 
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 4 }>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Donec hendrerit tempor tellus. 
                                Donec pretium posuere tellus. 
                                Proin quam nisl, tincidunt et, mattis 
                                eget, convallis nec, purus. 
                            </p>
                        </Col>
                    </Row>
                    <Row className="top-buffer text-center">
                        <Col xs={ 12 }>
                            <Link to="/pick-pattern-option">
                                <Button bsStyle="primary" bsSize="large">Ókej</Button>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        );
    }

}

export default LayoutPage;