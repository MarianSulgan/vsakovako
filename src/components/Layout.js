/**
 * Layout
 * 
 * Component that wraps each page in application ensuring
 * that the same layout and principles are used all across the app.
 */


import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { browserHistory } from 'react-router';
import { Grid, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import '../css/Layout.css';

/**
 * See typography.js from more info on usage.
 */
// import { TypographyStyle } from 'react-typography';
// import typography from './typography';

class Layout extends Component {

    render() {
        return(
            <div id="outerContainer">
                <Menu right outer pageWrapId={ "pageWrap" } outerContainerId={ "outerContainer" } >
                    <a id="home" className="menu-item" href="#">Domov</a>
                    <a id="about" className="menu-item" href="#">Čo je to?</a>
                    <a id="contact" className="menu-item" href="#">Kontakt</a>
                </Menu>
                <Button bsSize="large" id="backButton" className="pull-left" onClick={ browserHistory.goBack }>
                    <Glyphicon glyph="arrow-left"/>
                </Button>
                <Grid fluid={ this.props.fluid } id="pageWrap">
                    <h1 className="text-center margin-bottom">
                        <Link to="/" className="unstyled">
                        všakovako generátor
                        </Link>
                    </h1>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

export default Layout;