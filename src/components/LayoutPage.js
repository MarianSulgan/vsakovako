
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from './Layout';

class LayoutPage extends Component {

    render() {
        return (
            <Layout fluid={ false }>
                <Row className="top-buffer text-center">
                    <h2>Vyberaj zaraz dajaký layout</h2>
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
            </Layout>
        );
    }

}

export default LayoutPage;