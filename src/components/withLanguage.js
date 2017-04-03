
import React, { Component } from 'react';
import strings from '../translations.js';

export var withLanguage = ComposedComponent => class extends Component {

    constructor(props) {
        super(props)
        this.defaultLang = "sk";
    }

    onLangChange(e) {
        console.log(e);
        strings.setLanguage(e);
        this.setState({ lang: e });
        localStorage.setItem('lang', e);
    }

    componentWillMount() {
        let lang = (localStorage.getItem('lang') || this.defaultLang);
        strings.setLanguage(lang);
        this.setState({ lang: lang });
    }

    render() {
        return <ComposedComponent {...this.props} onLangChange={ (e) => this.onLangChange(e) } lang={ this.state.lang } />;
    }
};