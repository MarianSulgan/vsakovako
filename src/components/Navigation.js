/**
 * ...
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import LanguageButton from './LanguageButton';
import strings from '../translations.js';

class Navigation extends Component {

    // onLangChange(e) {
    //     this.props.onLangChange(e);
    // }

    render() {
        return (
            <Navbar collapseOnSelect fixedTop>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">všakovako</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight>
                        <LinkContainer to="/pick-application"><NavItem>{ strings.nav_create }</NavItem></LinkContainer>
                        <LinkContainer to="/about-project"><NavItem>{ strings.nav_about }</NavItem></LinkContainer>
                        <LinkContainer to="/contact"><NavItem>{ strings.nav_contact }</NavItem></LinkContainer>
                        <LinkContainer to="/login"><NavItem>{ strings.nav_login }</NavItem></LinkContainer>
                        {/*<LanguageButton locale="sk" onLangChange={ this.props.onLangChange }/>*/}
                        <LanguageButton lang={ this.props.lang } onLangChange={ this.props.onLangChange }/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;