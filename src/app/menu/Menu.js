import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import { Grid, Row, Col, Well , Navbar, Nav, NavItem } from 'react-bootstrap'
import { Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';
import { IconButton  } from 'react-mdl';
import Login from '../../login/Login'
import GoogleLogin from 'react-google-login';

export default class Menu extends Component {

    render() {
        return (
            <Navbar navbar navbar-default>
                    <Nav>
                        <Item path={`/`}>
                        <IconButton name="home" />
                    </Item>

                        <Item path={`/products`}>
                            Produkty
                        </Item>
                        <Item path={`/shops`}>
                            Sklepy
                        </Item>
                        <Item path={`/maps`}>
                            Mapy
                        </Item>
                        <Item path={`/list`}>
                            Lista zakupów
                        </Item>
                    </Nav>
                    <Navbar.Form pullRight>
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                        <Item path={`/favorites`}>
                            <IconButton style={{listStyleType: 'none', listStyle: 'none'}} name="favorite" />
                        </Item>
                        <Login />
                    </Navbar.Form>

            </Navbar>

        );
    }
}

