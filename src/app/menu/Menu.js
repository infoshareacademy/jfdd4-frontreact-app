import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import { Grid, Row, Col, Well , Navbar, Nav } from 'react-bootstrap'
import GoogleLogin from 'react-google-login';

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
                    <Navbar.Form pullRight>
                        <GoogleLogin
                            clientId="287909334341-a9d7rvs2g737tlm1vibohhn0a4kn5bj0.apps.googleusercontent.com"
                            onSuccess={console.log}
                            onFailure={console.log}
                            className="btn btn-default btn-sm">
                             Log in with Google
                        </GoogleLogin>
                    </Navbar.Form>
                    <Nav pullRight>
                        <Nav><Item path={`/login`}>Login</Item></Nav>
                        </Nav>
                    <Nav pullRight>
                        <Nav><Item path={`/favorites`}>Ulubione</Item></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

