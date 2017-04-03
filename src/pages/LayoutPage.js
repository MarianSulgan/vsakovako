/**
 * Layout Page
 * 
 * Page where user selects layout options for generator.
 */

import React, { Component } from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';
import strings from '../translations.js';
import SideNavigation from '../components/SideNavigation';

import img_grid from '../static/img/grid.svg';

class LayoutPage extends Component {

    render() {

        const lastRowStyle = {
            paddingBottom: 3.2 + 'em'
        }

        return (
             <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="layoutPage" className="app-flow-page">
                    <Row className="">
                        <Col xs={3} sm={2}>
                            <SideNavigation indicatorNumber={ 1 }/>
                        </Col>
                        <Col xs={9} sm={10}>
                            <Row>
                                <h1>{strings.pick_layout_h1}</h1>
                                <p>{strings.pick_layout_p}</p>
                            </Row>
                            <Row className="layout-options">
                                <Col xs={6} sm={4} className="layout-item">
                                    <Link to="/pick-pattern-option">
                                        <Image src={ img_grid } responsive />
                                        <h2>Mriežka</h2>
                                        <p>Plocha vyplnená vzormi v oboch smeroch. Dole, hore, doprava aj doľava.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="layout-item">
                                    <Link to="/pick-pattern-option">
                                        <Image src="http://placehold.it/200x200" responsive />
                                        <h2>Riadky</h2>
                                        <p>Lorem ipsum dolor sit amet. Text.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="layout-item">
                                    <Link to="/pick-pattern-option">
                                        <Image src="http://placehold.it/200x200" responsive />
                                        <h2>Voľnééé</h2>
                                        <p>Lorem ipsum dolor sit amet. Text.</p>
                                        <div className="text-center">
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={ lastRowStyle } className="text-center">
                        <Link to="/pick-pattern-option">
                            {strings.btn_skip}
                        </Link>
                    </Row>
                </Grid>
            </Layout>
        );
    }

}

export default LayoutPage;