/**
 * Routing settings
 * 
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import EditorPage from './pages/EditorPage';
import LayoutPage from './pages/LayoutPage';
import PatternPage from './pages/PatternPage';
import ApplicationPage from './pages/ApplicationPage';
import ExportPage from './pages/ExportPage';
import ShowcasePage from './pages/ShowcasePage';
import StyleguidePage from './pages/StyleguidePage';
import LoginPage from './pages/LoginPage';
import { ConditionsPage, PrivacyPage, ReturnPage, HowToShopPage, ShippingPage, PaymentPage } from './pages/LegalPages';

import { withLanguage } from './components/withLanguage';

const routes = (
    <Route path="/">

        {/* Home page (index) */}
        <IndexRoute component={ withLanguage(IndexPage) }/>
        
        {/* Main application flow */}
        <Route path="editor" component={ withLanguage(EditorPage) }/>
        <Route path="pick-layout-option" component={ withLanguage(LayoutPage) }/>
        <Route path="pick-pattern-option" component={ withLanguage(PatternPage) }/>
        <Route path="pick-application-option" component={ withLanguage(ApplicationPage) }/>
        <Route path="export-pattern" component={ withLanguage(ExportPage) }/>
        <Route path="showcase" component={ withLanguage(ShowcasePage) }/>

        {/* Navigation in top menu */}
        <Route path="login" component={ withLanguage(LoginPage) }/>
        
        {/* Misc static pages located in footer */}
        <Route path="styleguide" component={ withLanguage(StyleguidePage) }/>
        <Route path="legal-conditions" component={ withLanguage(ConditionsPage) }/>
        <Route path="privacy-protection" component={ withLanguage(PrivacyPage) }/>
        <Route path="return-conditions" component={ withLanguage(ReturnPage) }/>
        <Route path="how-to-shop" component={ withLanguage(HowToShopPage) }/>
        <Route path="shipping" component={ withLanguage(ShippingPage) }/>
        <Route path="payment-options" component={ withLanguage(PaymentPage) }/>

        {/* Not found page (404) -- block all other URLs */}
        <Route path="*" component={ withLanguage(NotFoundPage) }/>
    </Route>
);

export default routes;