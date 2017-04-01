/**
 * Application Page
 * 
 * Page to pick the application of pattern.
 * For example, bag or t-shirt.
 */

import React, { Component } from 'react';
import { Row, Button, Col, Grid, ButtonToolbar, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router';

import Layout from '../components/Layout';
import strings from '../translations.js';

class ApplicationPage extends Component {
    state = {  }
    render() {

        const lastRowStyle = {
            paddingBottom: 3.2 + 'em'
        }

        return (
            <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="applicationPage">
                    <Row className="">
                        <h1>{strings.pick_product_h1}</h1>
                        <p>{strings.pick_product_p}</p>
                    </Row>
                    <Row className="product-images">
                        <Col xs={3}>
                            <Image src="http://placehold.it/200x200" responsive />
                            <h2>Produkt A</h2>
                            <p>Lorem ipsum dolor sit amet. Text.</p>
                            <div className="text-center">
                                <LinkContainer to={{ pathname: '/pick-layout-option'}} className="text-center">
                                    <Button bsStyle="primary" bsSize="large">{strings.btn_choose}</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <Image src="http://placehold.it/200x200" responsive />
                            <h2>Produkt B</h2>
                            <p>Lorem ipsum dolor sit amet. Text.</p>
                            <div className="text-center">
                                <LinkContainer to={{ pathname: '/pick-layout-option'}} className="text-center">
                                    <Button bsStyle="primary" bsSize="large">{strings.btn_choose}</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <Image src="http://placehold.it/200x200" responsive />
                            <h2>Produkt C</h2>
                            <p>Lorem ipsum dolor sit amet. Text.</p>
                            <div className="text-center">
                                <LinkContainer to={{ pathname: '/pick-layout-option'}} className="text-center">
                                    <Button bsStyle="primary" bsSize="large">{strings.btn_choose}</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <Image src="http://placehold.it/200x200" responsive />
                            <h2>Produkt D</h2>
                            <p>Lorem ipsum dolor sit amet. Text.</p>
                            <div className="text-center">
                                <LinkContainer to={{ pathname: '/pick-layout-option'}} className="text-center">
                                    <Button bsStyle="primary" bsSize="large">{strings.btn_choose}</Button>
                                </LinkContainer>
                            </div>
                        </Col>
                    </Row>
                    <Row style={ lastRowStyle }>
                        <ButtonToolbar className="text-center">
                            <LinkContainer to={{ pathname: '/pick-layout-option'}}>
                                <Button bsStyle="default" bsSize="large">{strings.btn_skip}</Button>
                            </LinkContainer>
                            {/*<LinkContainer to={{ pathname: '/pick-layout-option'}}>
                                <Button bsStyle="primary" bsSize="large">{strings.btn_next}</Button>
                            </LinkContainer>*/}
                        </ButtonToolbar>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ApplicationPage;