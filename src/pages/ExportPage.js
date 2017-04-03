/**
 * Export Page
 * 
 * Exports pattern or saves image, last stage of business process
 */

import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import Layout from '../components/Layout';
import strings from '../translations.js';
import SideNavigation from '../components/SideNavigation';

class ExportPage extends Component {
    state = {  }
    render() {

        const lastRowStyle = {
            paddingBottom: 3.2 + 'em'
        }

        return (
            <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="exportPage" className="app-flow-page">
                    <Row className="">
                        <Col xs={3} sm={2}>
                            <SideNavigation indicatorNumber={ 4 }/>
                        </Col>
                        <Col xs={9} sm={10}>
                            <Row>
                            {/*<SVGCanvas options={ options } />*/}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={ lastRowStyle } className="text-center">
                        <Link to="/">
                            {strings.home}
                        </Link>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ExportPage;