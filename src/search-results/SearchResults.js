import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


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
        <div className="break"></div><div className="break"></div>
        {products.filter(product => {
            if (searchTerm === '') return false
            return product.name.toLowerCase().indexOf(searchTerm) !== -1
        }).map( product =>
            <ul>
                <Link to={"/products/" + product.id}> {product.name} </Link>
            </ul>)}

    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)