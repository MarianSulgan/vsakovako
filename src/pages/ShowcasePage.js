/**
 * Showcase Page
 * 
 * Page that shows what others created.
 */

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/Layout';

class ShowcasePage extends Component {
    state = {  }
    render() {
        return (
            <Layout fluid={ false }>
                <Row className="top-buffer text-center">
                    <h2>Všakovaké obrázky sa už vygeneruvali!</h2>
                </Row>
                <Row className="top-buffer text-center">
                    <Col xsOffset={ 3 } xs={ 6 }>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. 
                            Donec hendrerit tempor tellus. 
                            Donec pretium posuere tellus. 
                            Proin quam nisl, tincidunt et, mattis 
                            eget, convallis nec, purus.
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. 
                            Donec hendrerit tempor tellus. 
                            Donec pretium posuere tellus. 
                            Proin quam nisl, tincidunt et, mattis 
                            eget, convallis nec, purus. 
                        </p>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default ShowcasePage;