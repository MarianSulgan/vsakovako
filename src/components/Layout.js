/**
 * Layout
 * 
 * Component that wraps each page in application ensuring
 * that the same layout and principles are used all across the app.
 * 
 * @todo: uninstall 'react-burger-menu'
 */

import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultLang: "sk",
            langs: ["sk", "en"]
        }
    }

    render() {
        return(
            <div className="main-container footer-binder">

                <Navigation onLangChange={ this.props.onLangChange } lang={ this.props.lang } />

                <div className={ this.props.className ? `content ${this.props.className}` : "content" } id={ this.props.id }>
                    {this.props.children}
                </div>

                 <Footer/>
                 
            </div>
        );
    }
}

export default Layout;