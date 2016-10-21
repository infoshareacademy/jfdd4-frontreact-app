import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import { Navbar, Nav,Grid } from 'react-bootstrap';

import './header/Logo.css';

export default class Menu extends Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>

                        <Nav><Item path={`/`}>Strona Glowna</Item></Nav>
                        <Nav>
                            <Item path={`/products`}>
                                Produkty
                            </Item>
                        </Nav>
                        <Nav>
                            <Item path={`/products/availability`}>
                                Dostępność towarów
                            </Item>
                        </Nav>
                        <Nav><Item path={`/shops`}>Sklepy</Item></Nav>
                        <Nav>
                            <Item path={`/maps`}>
                                Mapy
                            </Item>
                        </Nav>
                        <Nav pullRight><Item path={`/favorites`}>Ulubione</Item></Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}
