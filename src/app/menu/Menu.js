import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import {  Navbar, Nav, FormGroup, FormControl, Button  } from 'react-bootstrap'

export default class Menu extends Component {
    render() {
        return (
            <Navbar inverse className="App-Menu">
                <Navbar.Header>
                    <Navbar.Brand>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Nav><Item path={`/`}>Strona Główna</Item></Nav>
                        <Nav>
                            <Item path={`/products`}>
                                Produkty
                            </Item>

                        </Nav>
                        <Nav><Item path={`/shops`}>Sklepy</Item></Nav>
                        <Nav>
                            <Item path={`/maps`}>
                                Mapy
                            </Item>
                        </Nav>
                    </Nav>

                    <Navbar.Form pullLeft>
                        
                    </Navbar.Form>
                    <Nav pullRight>
                        <Nav><Item path={`/favorites`}>Ulubione</Item></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
