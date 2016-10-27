/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Button, Well , PageHeader, Row, Col, Image } from 'react-bootstrap'
import { increment, decrement} from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log(state);
    return { counterValue: state.counter }
}
const mapDispatchToProps = (dispatch) => ({
    onIncClick: () => dispatch(increment()),
    onDecClick: () => dispatch(decrement())
})

let ShoppingList = ({ counterValue, onIncClick, onDecClick, onResetClick }) => (
    <Well>
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
            <Col md={3}>
                <Image src="/img/stokrotka.jpg" rounded/>
            </Col>
            <Col md={3}>
                <h1>1 = {counterValue}</h1>
            </Col>
            <button onClick={() => onIncClick()}>Increase</button>
            <button onClick={() => onDecClick()}>Decrease</button>
            <Col md={3}>
                <Button type="submit" class="btn btn-default" onclick="addPost();return false;">Dodaj do listy</Button>
            </Col>
        </Row>
    </Well>

)
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)



