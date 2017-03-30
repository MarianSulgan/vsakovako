/**
 * Styleguide Page
 * 
 * Page that serves as a styleguide to the whole project.
 * Kind of visual identity stripped of most of the stuff.
 */

import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';

import Layout from '../components/Layout';

class ApplicationPage extends Component {
    state = {  }
    render() {
        return (
            <Layout>
                <Grid>
                    <Row>
                        <h1>Styleguide</h1>
                        <p>
                            Toto je grafický manuál k projektu všakovako. Čekuj.
                        </p>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ApplicationPage;