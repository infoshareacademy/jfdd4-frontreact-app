/**
 * Created by karol on 04.11.16.
 */
import React from 'react'
import {Well, PageHeader, Row, Button, Col, Grid} from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    list: state.oldListData.list,

})

const ShoppingList = ({list}) => (