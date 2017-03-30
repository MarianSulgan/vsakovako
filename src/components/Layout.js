/**
 * Layout
 * 
 * Component that wraps each page in application ensuring
 * that the same layout and principles are used all across the app.
 * 
 * @todo: uninstall 'react-burger-menu'
 */


import React, { Component } from 'react';
// import { push as Menu } from 'react-burger-menu';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// import '../css/Layout.css';

/**
 * See typography.js from more info on usage.
 */
// import { TypographyStyle } from 'react-typography';
// import typography from './typography';

class Layout extends Component {

    render() {
        return(
            <div className="main-container footer-binder">
                
                <Navigation />

                <div className="content">
                    {this.props.children}
                </div>

                 <Footer/>
                 
            </div>
        );
    }
}

export default Layout;