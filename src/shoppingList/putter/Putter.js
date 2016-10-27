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

export default connect(mapStateToProps, mapDispatchToProps)