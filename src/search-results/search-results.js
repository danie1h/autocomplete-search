import React from 'react'
import './search-results.css'

/**
  * Component: SearchResults
  *
  * Displays the product information or a does not exist message
  *
  * Properties from App:
  * - searchInput: text the user enterred in the search bar
  * - productList: list of all products and info
  */
export const SearchResults = (props) => {
    let matchingProduct = props.productList.filter( (product) => product.name === props.searchInput);

    return (
      <div className='search-results'>
        { (matchingProduct.length === 0) ?
            <p>Product does not exist. Please search for another product.</p>
            :
            <div id='successful-results'>
            <p><strong>Institue:</strong> {matchingProduct[0].name}</p>
            <p><strong>Type:</strong> {matchingProduct[0].type}</p>
            <p><strong>URL:</strong> <a href={matchingProduct[0].url} target='_blank' rel='noopener noreferrer'>{matchingProduct[0].url}</a></p>
            </div>
        }
      </div>
    )
}
