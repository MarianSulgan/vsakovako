/**
 * ...
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {

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
                        <LinkContainer to="/editor"><NavItem>Tvoriť</NavItem></LinkContainer>
                        <LinkContainer to="/about-project"><NavItem>O projekte</NavItem></LinkContainer>
                        <LinkContainer to="/contact"><NavItem>Kontakt</NavItem></LinkContainer>
                        <LinkContainer to="/login"><NavItem>Prihlásiť</NavItem></LinkContainer>
                        <NavItem href="#">EN</NavItem>
                        <NavItem href="#">SK</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;