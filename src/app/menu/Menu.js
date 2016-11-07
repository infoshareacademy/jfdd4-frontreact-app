import React, {Component} from 'react';
import Item from './item/Item'
import { Nav, Navbar } from 'react-bootstrap'
import { IconButton, Icon  } from 'react-mdl';
import Login from '../../login/Login';
import Search from '../../search/Search'


export default class Menu extends Component {
    render() {
        return (
            <Navbar className="navbar-fixed-top inverse collapseOnSelect">
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Item path={`/`}>
                            <IconButton name="home"/>
                            Sugero
                        </Item>
                    </Nav>
                    <Nav>
                        <Item eventKey={1} path={`/products`} >
                            <Icon name="search" />
                            Produkty
                        </Item>
                       
                        <Item eventKey={3} path={`/shoppingList`} >
                            <Icon name="shopping_basket" />
                            Lista zakupów
                        </Item>
                        {/*<Item eventKey={4} path={`/favorites`} >*/}
                            {/*<IconButton style={{listStyleType: 'none', listStyle: 'none'}} name="favorite" />*/}
                        {/*</Item>*/}
                    </Nav>
                    <Nav pullRight >
                        <Item>
                            <Search eventKey={5}/>
                        </Item>
                        <Item>
                            <Login eventKey={6}/>
                        </Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
