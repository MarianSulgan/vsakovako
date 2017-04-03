/**
 * 
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import strings from '../translations.js';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <footer className="footer">
                <Grid>
                    <Row className="social">
                        <span><FontAwesome name='facebook' size="lg" /></span>
                        <span><FontAwesome name='twitter' size="lg" /></span>
                    </Row>
                    <Row>
                        <Col xs={ 12 } sm={ 6 } className="text-right">
                            <ul>
                                <li><Link to="/legal-conditions">{strings.footer_legal_conditions}</Link></li>
                                <li><Link to="/privacy-protection">{strings.footer_privacy}</Link></li>
                                <li><Link to="/return-conditions">{strings.footer_return}</Link></li>
                            </ul>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } className="text-left">
                            <ul>
                                <li><Link to="/how-to-shop">{strings.footer_how_to_shop}</Link></li>
                                <li><Link to="/shipping">{strings.footer_shipping}</Link></li>
                                <li><Link to="/payment-options">{strings.footer_payment}</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <span>2017 © MŠ. <Link to="/styleguide">Grafický manuál</Link>.</span>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;