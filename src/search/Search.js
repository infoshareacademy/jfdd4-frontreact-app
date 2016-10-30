/**
 * Created by Piotr on 2016-10-29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { setFilterValue } from './actionCreators'




const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue)),
    onSearchChange:(event) =>
        this.props.dispatch({ type: 'SEARCH', term: event.target.value })

})











export default connect(mapDispatchToProps)