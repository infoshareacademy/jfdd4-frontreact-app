/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Button, Well , PageHeader, Row, Col, Image } from 'react-bootstrap'
import ClickButton from './clickButton/ClickButton';

export default class shoppingList extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfClicks: 0            
        };
        
        this._PlusClick = this._PlusClick.bind(this);
        this._MinusClick = this._MinusClick.bind(this);
    }

    _PlusClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        });
    }

    _MinusClick() {
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
                        <Image src="/img/stokrotka.jpg" rounded/>
                    </Col>
                    <Col md={3}>
                    <h1>{this.state.numberOfClicks}</h1>
                </Col>
                    <div>
                        <ClickButton handleClick={this._PlusClick}>  {this.props.children}
                           wiecej</ClickButton>
                    </div>

                    <div>
                        <ClickButton handleClick={this._MinusClick}>  {this.props.children}
                            Mniej</ClickButton>
                    </div>
                    <Col md={3}>
                        <Button type="submit" class="btn btn-default" onclick="addPost();return false;">Dodaj do listy</Button>
                    </Col>
                </Row>
            </Well>

        )
    }


}
