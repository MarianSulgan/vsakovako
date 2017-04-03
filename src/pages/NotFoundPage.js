/**
 * Not found Page
 * 
 * Notoriously famous 404 error page.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Grid } from 'react-bootstrap';

import Layout from '../components/Layout';

class NotFoundPage extends Component {

  render() {
    return (
        <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
            <Grid>
                <Row>
                    <h1>Stránka sa nenašla. Bé.</h1>
                    <p>
                        Proste 404. Klasika. Zlý odkaz, ic dakam <Link to="/">naspáteček</Link>.
                    </p>
                </Row>
            </Grid>
        </Layout>
    );
  }
}

export default NotFoundPage;