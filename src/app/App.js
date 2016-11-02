import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import { Grid, Row, Col, Well } from 'react-bootstrap'
import SearchResults from '../search-results/SearchResults'



class App extends Component {

    render() {
            return (
                <Grid>
                    <Row>
                        <Col>
                            <Menu />
                          
                            <SearchResults />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Well>
                                {this.props.children}
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            );
        }
    }

export default App;

