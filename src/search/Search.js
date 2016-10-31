/**
 * Created by Piotr on 2016-10-29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { setFilterValue } from './actionCreators'


const mapStateToProps = (props) => ({
    currentFilterValue:
})

const mapDispatchToProps = (dispatch) => ({
    setFilterValue: (newFilterValue) => dispatch(setFilterValue(newFilterValue)),
    onSearchChange:(event) => dispatch({ type: 'SEARCH', term: event.target.value })

})



const Search = (props) => (
    <div>
        <FormGroup>
            <FormControl type="text" placeholder="Search" defaultValue={currentFilterValue}
                         onChange={(event) => props.setFilterValue(event.target.value)}/>
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(Search)