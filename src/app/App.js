import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import { Grid, Row, Col } from 'react-bootstrap'



class App extends Component {

    render() {
            return (
                <Grid>
                    <Row>
                        <Col>
                            <Menu />
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

