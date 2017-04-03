/**
 * Pattern Page
 * 
 * Page where user selects essential patterns to use in editor.
 */

import React, { Component } from 'react';
import { Row, Col, Grid, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

import Layout from '../components/Layout';
import strings from '../translations.js';
import SideNavigation from '../components/SideNavigation';

class PatternPage extends Component {

    render() {

        const lastRowStyle = {
            paddingBottom: 3.2 + 'em',
            paddingTop: 1.6 + 'em'
        }

        const btnStyle = {
            // marginLeft: 5 + 'px'
        }

        const x = [...Array(24).keys()];
        const images = x.map((number) => 
            <ImageWithIcon key={ number.toString() }  />
        );

        return (
            <Layout onLangChange={ this.props.onLangChange } lang={ this.props.lang }>
                <Grid id="patternPage" className="app-flow-page">
                    <Row className="">
                        <Col xs={3} sm={2}>
                            <SideNavigation indicatorNumber={ 2 }/>
                        </Col>
                        <Col xs={9} sm={10}>
                            <Row>
                                <h1>{strings.pick_pattern_h1}</h1>
                                <p>{strings.pick_pattern_p}</p>
                                <p><Button bsStyle="default" style={ btnStyle }>
                                    <FontAwesome name='filter' size="lg" />&nbsp;Filtrovať
                                </Button></p>
                            </Row>
                            <Row>
                                
                            </Row>
                            <Row>
                                {images}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={ lastRowStyle }>
                        <ButtonToolbar className="text-center">
                            <Link to="/editor">
                                {strings.btn_skip}
                            </Link>
                            <LinkContainer to={{ pathname: '/editor'}}>
                                <Button bsStyle="primary">{strings.done}</Button>
                            </LinkContainer>
                        </ButtonToolbar>
                    </Row>
                </Grid>
            </Layout>
        );
    }

}

class ImageWithIcon extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentWillMount() {
        this.setState({ isActive: false });
    }

    handleClick(e) {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    isActive(value) {
        return this.state.isActive;
    }
    
    render() {

        const imgStyle = {
            padding: 10 + 'px',
            float: 'left'
        }

        return(
            <a {...this.props} className={`pattern-item ${this.state.isActive ? 'has-check' : ''}`} href="#" onClick={ (e) => this.handleClick(e) }><Image style={ imgStyle } src="http://placehold.it/100x100" responsive /></a>
        );
    }
}

export default PatternPage;