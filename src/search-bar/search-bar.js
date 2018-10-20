import React from 'react'
import searchIcon from '../resources/images/search-icon.svg'
import './search-bar.css'

/**
  * Component: SearchBar
  *
  * A user can find financial companies based on their search
  * Features include:
  * - autocomplete results are populated in the search box dropdown
  * - ability to reset input by selecting the "x" icon
  *
  * Properties from App:
  * - productList: list of all products and info
  * - filterOn: filter product list based on filter type
  * - onChange: handles changes on the search bar
  * - searchInput: text the user enterred in the search bar
  * - escapedSearchInput: text the user enterred in the search bar with escapped char
  * - handleSubmit: flag to check if user selected submit
  */
export const SearchBar = (props) => {
    let productNameMatches = []
    let searchPattern = new RegExp(`^${props.escapedSearchInput}`, `i`)

    if(props.escapedSearchInput && props.filterOn === `All`) {
      productNameMatches = props.productList.filter( (product, index) => searchPattern.test(product.name) === true).filter( (product, index) => index < 10 ).map( (product, index) => {
        return (<option key={index} value={product.name} />)
      })
    } else if(props.escapedSearchInput && props.filterOn !== `ALL`) {
      productNameMatches = props.productList.filter( (product, index) => searchPattern.test(product.name) === true && product.type === props.filterOn).filter( (product, index) => index < 10 ).map( (product, index) => {
        return (<option key={index} value={product.name} />)
      })
    } else {
      productNameMatches = []
    }

    return (
      <div className='search-bar'>
        <form className='search-bar-contents' onSubmit={props.handleSubmit}>
          <input className='search-input' type='search' placeholder='search' value={props.searchInput} onChange={props.handleChange} list='search-product-matches'/>
          <datalist id='search-product-matches'>
            {productNameMatches}
          </datalist>
          <input className='submit-icon' type='image' src={searchIcon} alt='submit' height="25"/>
        </form>
      </div>
    )
}
