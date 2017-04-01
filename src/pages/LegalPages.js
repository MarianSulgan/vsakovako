/**
 * Miscellaneous pages component
 * 
 * Mainly for static pages located in footer, not tied to functionality.
 * 
 * Usage:
 * Either write text to variable or insert html inside component tags.
 * If no html is present, default text will be rendered inside paragraph. Otherwise,
 * html code is taken and rendered inside component.
 */

import React, { Component } from 'react';

import FooterPageTemplate from '../components/FooterPageTemplate';

let legalPagesContent = {
    "conditionsPage": { headline: "Obchodné podmienky", text: "Lorem ipsum dolor sit amet."},
    "privacyPage": { headline: "Ochrana osobných údajov", text: "Lorem ipsum dolor sit amet." },
    "returnPage": { headline: "Reklamačný poriadok", text: "Lorem ipsum dolor sit amet." },
    "howToShopPage": { headline: "Ako nakupovať", text: "Lorem ipsum dolor sit amet." },
    "shippingPage": { headline: "Doprava", text: "Lorem ipsum dolor sit amet." },
    "paymentPage": { headline: "Možnosti platby", text: "Lorem ipsum dolor sit amet." }
}

class ConditionsPage extends Component {
    render() {
        return <FooterPageTemplate content={ legalPagesContent["conditionsPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }/>
    }
}

class PrivacyPage extends Component {
    render() {
        return (
            <FooterPageTemplate content={ legalPagesContent["privacyPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <h1>Ochrana veľmi osobných údajov</h1>
                <p>Lorem ipsum salam.</p>
                <p><strong>THIS IS SPARTA!</strong> Príklad, ako vložiť obsah cez <code>this.props.children</code>. Dík.</p>
            </FooterPageTemplate>
        );
    }
}

class ReturnPage extends Component {
    render() {
        return <FooterPageTemplate content={ legalPagesContent["returnPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }/>
    }    
}

class HowToShopPage extends Component {
    render() {
        return <FooterPageTemplate content={ legalPagesContent["howToShopPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }/>
    }    
}

class ShippingPage extends Component {
    render() {
        return <FooterPageTemplate content={ legalPagesContent["shippingPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }/>
    }    
}

class PaymentPage extends Component {
    render() {
        return <FooterPageTemplate content={ legalPagesContent["paymentPage"] } onLangChange={ this.props.onLangChange } lang={ this.props.lang }/>
    }   
}

module.exports = {
    ConditionsPage,
    PrivacyPage,
    ReturnPage,
    HowToShopPage,
    ShippingPage,
    PaymentPage
};