/**
 * SideNavigation
 * 
 * Sidebar navigation for misc pages, for example legal conditions.
 * 
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class SideNavigation extends Component {
    render() {
        return (
            <section className="misc-sidemenu side-navigation text-right">
                <ul>
                    <li><Link to="/legal-conditions">Obchodné podmienky</Link></li>
                    <li><Link to="/privacy-protection">Ochrana osobných údajov</Link></li>
                    <li><Link to="/return-conditions">Reklamačný poriadok</Link></li>
                    <li><Link to="/how-to-shop">Ako nakupovať</Link></li>
                    <li><Link to="/shipping">Doprava</Link></li>
                    <li><Link to="/payment-options">Platba</Link></li>
                </ul>
            </section>
        );
    }
}

export default SideNavigation;