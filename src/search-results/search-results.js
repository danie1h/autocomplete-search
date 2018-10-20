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
    let matchingProduct = []
    if(props.filterOn === 'All') {
      matchingProduct = props.productList.filter( (product) => product.name === props.searchInput)
    } else {
      matchingProduct = props.productList.filter( (product) => product.name === props.searchInput && product.type === props.filterOn)
    }

    return (
      <div className='search-results'>
        <h2>Search Results</h2>
        { (matchingProduct.length === 0) ?
            <p>Product does not exist. Please search for another product.</p>
            :
            <div className='successful-results'>
              <ul>
                <li>
                  <p className="result-name"><a href={matchingProduct[0].url} target='_blank' rel='noopener noreferrer'>{matchingProduct[0].name}</a></p>
                  <p className="result-type"><strong>Institution Type:</strong> {matchingProduct[0].type}</p>
                  <p className="result-url">{matchingProduct[0].url}</p>
                </li>
              </ul>
            </div>
        }
      </div>
    )
}
