/**
 * Created by Piotr on 2016-10-29.
 */
import React from 'react'



export default onSearchChange(event) {
    this.props.dispatch({ type: 'SEARCH', term: event.target.value });
}