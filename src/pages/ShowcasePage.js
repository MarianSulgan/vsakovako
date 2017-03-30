/**
 * Showcase Page
 * 
 * Page that shows what others created.
 */

import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';

import Layout from '../components/Layout';

class ShowcasePage extends Component {
    state = {  }
    render() {
        return (
            <Layout>
                <Grid>
                    <Row>
                        <h1>Všakovaké obrázky sa už vygeneruvali!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. 
                            Donec hendrerit tempor tellus. 
                            Donec pretium posuere tellus. 
                            Proin quam nisl, tincidunt et, mattis 
                            eget, convallis nec, purus.
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. 
                            Donec hendrerit tempor tellus. 
                            Donec pretium posuere tellus. 
                            Proin quam nisl, tincidunt et, mattis 
                            eget, convallis nec, purus. 
                        </p>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default ShowcasePage;