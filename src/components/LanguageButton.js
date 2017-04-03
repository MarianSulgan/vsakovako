/**
 * LanguageButton
 * 
 * Button to change language
 */

import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';

class LanguageButton extends Component {

    componentWillMount() {
        this.setState({
            _locale: (this.props.lang === "sk") ? "en" : "sk"
        });
    }

    onLangChange(locale) {
        this.props.onLangChange(locale);
        let newLang = (this.state._locale === "sk") ? "en" : "sk";
        this.setState({
            _locale: newLang
        });
    }

    render() {
        let localeName = this.state._locale.toUpperCase() || "??";
        return (
            <NavItem href="#" onClick={ () => this.onLangChange(this.state._locale) }>{ localeName }</NavItem>
        );
    }
}

export default LanguageButton;