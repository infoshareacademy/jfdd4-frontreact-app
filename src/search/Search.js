/**
 * Created by Piotr on 2016-10-29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { setFilterValue } from './actionCreators'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'


const mapStateToProps = (props) => ({
    currentFilterValue: ''
})

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue)),
    onSearchChange:(event) => dispatch({ type: 'SEARCH', term: event.target.value })

})



const Search = (props) => (
    <Form>
        <FormGroup>
            <FormControl type="text" placeholder="Search" defaultValue={props.currentFilterValue}
                         />
        </FormGroup>
        {' '}
        <Button onClick={(event) => { event.preventDefault(); props.setFilterValue(event.target.value)} }>Search</Button>
    </Form>
)


export default connect(mapStateToProps, mapDispatchToProps)(Search)