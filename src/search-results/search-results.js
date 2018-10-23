import React from 'react'
import './search-results.css'

/**
  * Component: SearchResults
  *
  * Displays the product information or a does not exist message
  *
  * Properties from App:
  * - searchInput: text the user enterred in the search bar
  * - escapedSearchInput: text the user enterred in the search bar with escapped char
  * - filterOn: filter product list based on filter type
  * - productList: list of all products and info
  */
export const SearchResults = (props) => {
    let productMatchedResults = []
    let searchResultsPattern = new RegExp(`${props.escapedSearchInput}`, `i`)

    if(props.escapedSearchInput && props.filterOn === 'All') {
      productMatchedResults = props.productList.filter( product => searchResultsPattern.test(product.name) === true)
       .map( (product, index) => {
         return (
           <a href={product.url} key={index} target='_blank' rel='noopener noreferrer'>
             <li>
               <p className="result-name">{product.name}</p>
               <p className="result-type"><strong>Institution Type:</strong> {product.type}</p>
               <p className="result-url">{product.url}</p>
             </li>
           </a>
         )
       })
    } else if (props.escapedSearchInput && props.filterOn !== `ALL`) {
      productMatchedResults = props.productList.filter( product => searchResultsPattern.test(product.name) === true && product.type === props.filterOn)
          .map( (product, index) => {
            return (
              <a href={product.url} key={index} target='_blank' rel='noopener noreferrer'>
                <li>
                    <p className="result-name">{product.name}</p>
                    <p className="result-type"><strong>Institution Type:</strong> {product.type}</p>
                    <p className="result-url">{product.url}</p>
                </li>
              </a>
            )
          })
    }

    return (
      <div className='search-results'>
        <h2>Search Results</h2>
        <hr />
        { (productMatchedResults.length === 0) ?
            <p className='invalid-search'>Product does not exist. Please search for another product.</p>
            :
            <div className='successful-results'>
              <ul>
                {productMatchedResults}
              </ul>
            </div>
        }
      </div>
    )
}
