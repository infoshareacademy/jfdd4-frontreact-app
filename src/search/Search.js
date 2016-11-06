
import React from 'react'
import { connect } from 'react-redux'
import {Form, FormGroup, FormControl} from 'react-bootstrap'


const mapStateToProps = (state) => ({
    searchTerm: state.search.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (term) => dispatch({ type: 'search/SEARCH', term: term })
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