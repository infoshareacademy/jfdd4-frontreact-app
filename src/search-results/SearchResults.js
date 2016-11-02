/**
 * Created by piotrszablewski on 02.11.16.
 */
import React from 'react'
import { connect } from 'react-redux'
import {filterProducts} from './actionCreators'


const mapStateToProps = (state) => ({
    searchTerm: state.search.searchTerm,
    products: state.productsData.products
})

const mapDispatchToProps = (props)=>({

})



const SearchResults = ({
    searchTerm,
    products
}) =>(
    <div>
        {products.filter(product => {
            if (searchTerm === '') return false
            return product.name.indexOf(searchTerm) !== -1
        }).map( product => <p>{product.name}</p>)}
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)