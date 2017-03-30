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
import { ConditionsPage, PrivacyPage, ReturnPage, HowToShopPage, ShippingPage, PaymentPage } from './pages/LegalPages';

const routes = (
    <Route path="/">

        {/* Home page (index) */}
        <IndexRoute component={ IndexPage }/>
        
        {/* Main application flow */}
        <Route path="editor" component={ EditorPage }/>
        <Route path="pick-layout-option" component={ LayoutPage }/>
        <Route path="pick-pattern-option" component={ PatternPage }/>
        <Route path="pick-application-option" component={ ApplicationPage }/>
        <Route path="export-pattern" component={ ExportPage }/>
        <Route path="showcase" component={ ShowcasePage }/>
        
        {/* Misc static pages located in footer */}
        <Route path="styleguide" component={ StyleguidePage }/>
        <Route path="legal-conditions" component={ ConditionsPage }/>
        <Route path="privacy-protection" component={ PrivacyPage }/>
        <Route path="return-conditions" component={ ReturnPage }/>
        <Route path="how-to-shop" component={ HowToShopPage }/>
        <Route path="shipping" component={ ShippingPage }/>
        <Route path="payment-options" component={ PaymentPage }/>

        {/* Not found page (404) -- block all other URLs */}
        <Route path="*" component={ NotFoundPage }/>
    </Route>
);

export default routes;