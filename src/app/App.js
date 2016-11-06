import React, { Component } from 'react';
import Menu from './menu/Menu';
import { Grid, Row, Col } from 'react-bootstrap'
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
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            );
        }
    }

export default App;

