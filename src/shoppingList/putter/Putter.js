/**
 * Created by kbro2 on 27.10.2016.
 */
import React from 'react'
import {Button, Well , PageHeader, Row, Col, Image } from 'react-bootstrap'
import { add, remove} from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log(state);
    return { counterValue: state.counter }
}
const mapDispatchToProps = (dispatch) => ({
    onAddClick: () => dispatch(add()),
    onRevClick: () => dispatch(remove())
})

let Putter = ({ counterValue, onAddClick, onRevClick }) => (
    <Well>
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
            <Col md={3}>
                <Image src="/img/stokrotka.jpg" rounded/>
            </Col>
            <Button onClick={() => onAddClick()}>Increase</Button>
            <Col md={3}>
                <h1>Ilość = {counterValue}</h1>
            </Col>
            <Button onClick={() => onRevClick()}>Decrease</Button>
            <Col md={3}>
                <Button type="submit" class="btn btn-default" onclick="addPost();return false;">Dodaj do listy</Button>
            </Col>
        </Row>
    </Well>

)
export default connect(mapStateToProps, mapDispatchToProps)(Putter)