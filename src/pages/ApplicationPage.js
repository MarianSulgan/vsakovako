/**
 * Application Page
 * 
 * Page to pick the application of pattern.
 * For example, bag or t-shirt.
 */

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';

class ApplicationPage extends Component {
    state = {  }
    render() {
        return (
            <Layout fluid={ false }>
                <Row className="top-buffer text-center">
                    <h2>A na čo to chceš plesknúť?</h2>
                </Row>
                <Row className="top-buffer text-center">
                    <Col xs={ 12 }>
                        <Link to="/pick-layout-option">
                            <Button bsStyle="primary" bsSize="large">Ďalej</Button>
                        </Link>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default ApplicationPage;