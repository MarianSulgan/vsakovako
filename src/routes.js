
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

const routes = (
    <Route path="/">
        <IndexRoute component={ IndexPage }/>
        <Route path="editor" component={ EditorPage }/>
        <Route path="pick-layout-option" component={ LayoutPage }/>
        <Route path="pick-pattern-option" component={ PatternPage }/>
        <Route path="pick-application-option" component={ ApplicationPage }/>
        <Route path="export-pattern" component={ ExportPage }/>
        <Route path="showcase" component={ ShowcasePage }/>
        <Route path="*" component={ NotFoundPage }/>
    </Route>
);

export default routes;