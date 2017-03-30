/**
 * Application Page
 * 
 * Page to pick the application of pattern.
 * For example, bag or t-shirt.
 */

import React, { Component } from 'react';
import { Row, Col, Button, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';

class ApplicationPage extends Component {
    state = {  }
    render() {
        return (
            <Layout>
                <Grid>
                    <Row className="">
                        <h1>A na čo to chceš plesknúť?</h1>
                    </Row>
                    <Row className="top-buffer text-center">
                        <Col xs={ 12 }>
                            <Link to="/pick-layout-option">
                                <Button bsStyle="primary" bsSize="large">Ďalej</Button>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ApplicationPage;