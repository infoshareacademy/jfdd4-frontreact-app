/**
 * Created by Piotr on 2016-10-29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { setFilterValue } from './actionCreators'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'


const mapStateToProps = (state) => ({
    searchTerm: state.search.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (term) => dispatch({ type: 'SEARCH', term: term })
})



const Search = (props) => (
    <Form>
        <FormGroup>
            <FormControl
                type="text"
                placeholder="Search"
                defaultValue={props.searchTerm}
                onChange={(event) => props.onSearchChange(event.target.value) }
            />
        </FormGroup>
    </Form>
)


export default connect(mapStateToProps, mapDispatchToProps)(Search)