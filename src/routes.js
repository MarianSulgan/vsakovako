
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import EditorPage from './components/EditorPage';
import LayoutPage from './components/LayoutPage';
import PatternPage from './components/PatternPage';

const routes = (
    <Route path="/">
        <IndexRoute component={ IndexPage }/>
        <Route path="editor" component={ EditorPage }/>
        <Route path="pick-layout-option" component={ LayoutPage }/>
        <Route path="pick-pattern-option" component={ PatternPage }/>
        <Route path="*" component={ NotFoundPage }/>
    </Route>
);

export default routes;