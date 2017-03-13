/**
 * Pattern Page
 * 
 * Page where user selects essential patterns to use in editor.
 */

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';

class LayoutPage extends Component {

    render() {
        return (
            <Layout fluid={ false }>
                <Row className="top-buffer text-center">
                    <h2>No a voľajaký ornament k tomu pre začiatok!</h2>
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
                        <Link to="/editor">
                            <Button bsStyle="primary" bsSize="large">Dóóbre</Button>
                        </Link>
                    </Col>
                </Row>
            </Layout>
        );
    }

}

export default LayoutPage;