/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Button, Well , PageHeader, Row, Col, Image } from 'react-bootstrap'


export default class shoppingList extends React.Component {


    render() {
        return (
            <Well>
                <PageHeader>Lista Zakupów
                    <small> zrób listę</small>
                </PageHeader>
                <Row>
                    <Col md={3}>
                        <Image src="/img/stokrotka.jpg"/>
                    </Col>
                    <Col md={3}>
                        <Button>Hello</Button>
                    </Col>
                    <Col md={3}>
                        <Button>Hello</Button>
                    </Col>
                    <Col md={3}>
                        <Button>Hello</Button>
                    </Col>
                </Row>
            </Well>


        )
    }
}


