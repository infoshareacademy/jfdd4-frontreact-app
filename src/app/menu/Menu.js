import React, {Component} from 'react';
import './Menu.css'
import Item from './item/Item'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-bootstrap';
import Logo from './header/Logo';
import './header/Logo.css';

// export default (props) =>
//     <ul className="App-Menu">
//         <Item path={`/`} activeWhenMatchingExactly={true}>Strona Glowna</Item>
//         <Item path={`/products`}><Button>Produkty</Button></Item>
//         <Item path={`/shops`}>Sklepy</Item>
//         <Item path={`/maps`}>Mapy</Item>
//     </ul>

export default class Menu extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Nav><Item path={`/`}>Strona Glowna</Item></Nav>
                        <Nav><Item path={`/products`}>Produkty</Item></Nav>
                        <Nav><Item path={`/shops`}>Sklepy</Item></Nav>
                        <Nav><Item path={`/maps`}>Mapy</Item></Nav>
                    </Nav>
                    <Nav pullRight>
                        <Nav><Item path={`#`}>Wyloguj</Item></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
