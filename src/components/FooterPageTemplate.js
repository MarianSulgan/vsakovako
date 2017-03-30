/**
 * FooterPageTemplate
 * 
 * Page template for misc pages placed in footer.
 * For example legal conditions, privacy protection, shipping info etc.
 * 
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation';
import Footer from './Footer';
import SideNavigation from './SideNavigation';

class FooterPageTemplate extends Component {
    
    render() {

        return (
            <div className="page-wrapper footer-binder">
                
                <Navigation/>
                
                <Grid className="content">
                    <Row>
                        <Col xs={ 12 } sm={ 4 } >
                            <SideNavigation/>
                        </Col>
                        <Col xs={ 12 } sm={ 8 } >
                        { 
                            this.props.children ? 
                            <section className="misc-pages-section">{ this.props.children }</section> : 
                            <section className="misc-pages-section">
                                <h1>{ 
                                    this.props.content.headline ? 
                                    this.props.content.headline : "???" 
                                }</h1>
                                <p>{ this.props.content.text }</p>
                            </section> 
                        }
                        </Col>
                    </Row>
                </Grid>

                <Footer/>

            </div>
        );
    }
}

export default FooterPageTemplate;