/**
 * Application Page
 * 
 * Page to pick the application of pattern.
 * For example, bag or t-shirt.
 */

import React, { Component } from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';
import strings from '../translations.js';
import SideNavigation from '../components/SideNavigation';

import img_bag from '../static/img/bag.svg';

class ApplicationPage extends Component {
    state = {  }
    render() {

        const lastRowStyle = {
            paddingBottom: 3.2 + 'em'
        }

        return (
            <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="applicationPage" className="side-navigation-container app-flow-page">
                    <Row className="">
                        <Col xs={3} sm={2}>
                            <SideNavigation indicatorNumber={ 0 }/>
                        </Col>
                        <Col xs={9} sm={10}>
                            <Row>
                                <h1>{strings.pick_product_h1}</h1>
                                <p>{strings.pick_product_p}</p>
                            </Row>
                            <Row className="product-images">
                                <Col xs={6} sm={4} className="product-item">
                                    <Link to="/pick-layout-option">
                                        <Image src="http://placehold.it/200x200" responsive />
                                        <h2>Tričko</h2>
                                        <p>Lorem ipsum dolor sit amet. Text.</p>
                                        <div className="text-center">
                                            {/*<LinkContainer to={{ pathname: '/pick-layout-option'}} className="text-center">
                                                <Button bsStyle="primary" bsSize="large">{strings.btn_choose}</Button>
                                            </LinkContainer>*/}
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="product-item">
                                    <Link to="/pick-layout-option">
                                        <Image src={ img_bag } responsive />
                                        <h2>Taška</h2>
                                        <p>Fajnová plátená taška na nákupy, nech nenosíš tie patizóny v&nbsp;igelitke.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="product-item">
                                    <Link to="/pick-layout-option">
                                        <Image src="http://placehold.it/200x200" responsive />
                                        <h2>Digitálne</h2>
                                        <p>Lorem ipsum dolor sit amet. Text.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>
                                {/*<Col xs={6} sm={3} className="product-item">
                                    <Link to="/pick-layout-option">
                                        <Image src="http://placehold.it/200x200" responsive />
                                        <h2>Produkt D</h2>
                                        <p>Lorem ipsum dolor sit amet. Text.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>*/}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={ lastRowStyle } className="text-center">
                        <Link to="/pick-layout-option">
                            {strings.btn_skip}
                        </Link>
                        {/*<ButtonToolbar className="text-center">
                            <LinkContainer to={{ pathname: '/pick-layout-option'}}>
                                <Button bsStyle="default" bsSize="large">{strings.btn_skip}</Button>
                            </LinkContainer>
                        </ButtonToolbar>*/}
                    </Row>
                    
                </Grid>
            </Layout>
        );
    }
}

export default ApplicationPage;