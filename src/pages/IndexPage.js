/**
 * Index Page
 * 
 * Landing page of the application.
 * 
 * @todo: pridat do historie id sekcie, ked idem na novu stranu a dam spat, tak sa to vrati na vrch strany
 * @todo: zmenit footer na 4 stlpce, ako to mam v papieroch (nie nutne, prediskutovat)
 * 
 */


import React, { Component } from 'react';
import { Grid, Row, Button, Glyphicon, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import scrollIntoView from 'scroll-into-view';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../css/IndexPage.css';

class IndexPage extends Component {

    scrollTo(id) {
        var element = document.getElementById(id);
        scrollIntoView(element, {
            time: 500
        });
    }

    render() {
        return (
            <div className="main-container footer-binder">
                
                <Navigation />

                <section id="welcomeSection" className="full-section">
                    <Grid fluid className="content">
                        <Row>
                            <h1>Ľudový generátor vzorov. A obchod.</h1>
                            <p>
                                Folklór a ľudový ornament roky upadal do zabudnutia. Dnes sa však vracia. 
                                Všakovako ho všakovako prináša do digitálneho prostredia a spája prvky 
                                generatívneho dizajnu a ľudovej ornamentiky. Ľudová tvorivosť prišla na internety.
                            </p>
                            <p>
                                Najprv tvoríš, potom kupuješ. Ak chceš, samozrejme. Každopádne, tvorenie je zadarmo.
                            </p>
                            <div className="text-center">
                                <Link to="/pick-application-option">
                                    <Button bsStyle="primary" bsSize="large" className="vv-button">Tvoriť</Button>
                                </Link>
                            </div>
                        </Row>
                        <Row className="folk-illustration">
                            <Image src="http://placehold.it/500x250" responsive />
                        </Row>
                    </Grid>
                    <Button bsSize="large" bsClass="scroll-button semi-transparent" onClick={ () => this.scrollTo("showcaseSection") }><Glyphicon glyph="arrow-down" /></Button>
                </section>

                <section id="showcaseSection" className="full-section">
                    <Grid fluid className="content">
                        <Row>
                            <h1>Všeličo už ostatní vytvorili. Hľa, inšpirácia.</h1>
                            <p>Folkór ide. Pozri sa, čo vytvorili ostatní používatelia pred tebou. Môžeš sa inšpirovať, potešiť, zhroziť a hromžiť, alebo aj nie. Dúfame, že sa tu niečo prekrásne nájde.</p>
                            
                        </Row>
                        <Row className="image-container">
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                            <Col xs={12} sm={6}><Image src="http://placehold.it/350x150" responsive /></Col>
                        </Row>
                        <Row>
                            <div className="text-center">
                                <Link to="/showcase">
                                    <Button bsStyle="default" bsSize="large" className="vv-button">Vidieť viac</Button>
                                </Link>
                            </div>
                        </Row>
                    </Grid>
                </section>

                <Footer/>
                
            </div>
        );
  }
}

export default IndexPage;
