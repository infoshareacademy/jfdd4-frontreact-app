/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Button, Well , PageHeader, Row, Col, Image } from 'react-bootstrap'


export default class shoppingList extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfClicks: 0
        };
        this._handlePlusClick = this._handlePlusClick.bind(this);
        this._handleMinusClick = this._handleMinusClick.bind(this);
        }

    _handlePlusClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        });
    }

    _handleMinusClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks - 1
        });
    }



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
                    <h1>{this.state.numberOfClicks}</h1>
                </Col>
                    <Col md={3}>
                        <Button handleClick={this._handlePlusClick}>  {this.props.children}
                           wiecej</Button>
                    </Col>

                    <Col md={3}>
                        <Button
                            disabled={this.props.isDisabled}
                            onClick={this.props.handleClick}
                            handleClick={this._handleMinusClick}>  {this.props.children}
                            Mniej</Button>
                    </Col>
                    <Col md={3}>
                        <Button type="submit" class="btn btn-default" onclick="addPost();return false;">Dodaj do listy</Button>
                    </Col>
                </Row>
            </Well>

        )
    }


}