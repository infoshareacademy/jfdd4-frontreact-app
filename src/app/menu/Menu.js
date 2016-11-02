import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import {  Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Textfield } from 'react-mdl';
import { IconButton  } from 'react-mdl';
import Login from '../../login/Login';
import Search from '../../search/Search'



export default class Menu extends Component {
    render() {
        return (
            <Navbar navbar navbar-default navbar-fixed-top>
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

                    <Navbar.Form pullLeft>
                        <Search />
                    </Navbar.Form>
                    <Nav pullRight>
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
                    </Nav>

            </Navbar>
        );
    }
}
