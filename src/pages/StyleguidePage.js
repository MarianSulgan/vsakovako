/**
 * Styleguide Page
 * 
 * Page that serves as a styleguide to the whole project.
 * Kind of visual identity stripped of most of the stuff.
 */

import React, { Component } from 'react';
import { Row, Grid, Image } from 'react-bootstrap';

import Layout from '../components/Layout';

class ApplicationPage extends Component {
    state = {  }
    render() {
        return (
            <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="styleguidePage">
                    <Row>
                        <h1>Styleguide</h1>
                        <p>
                            Toto je grafický manuál k projektu všakovako. Čekuj.
                        </p>
                    </Row>
                    <Row className="image-container">
                        <Image src="http://placehold.it/350x150" responsive />
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ApplicationPage;