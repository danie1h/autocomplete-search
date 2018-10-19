import React from 'react'
import './search-filter.css'

/**
  * Component: SearchFilter
  *
  * A user can filter their results by selecting options in checkboxes
  * Filter data includes:
  * - type: CREDIT_CARD, INVESTMENT, BANK, LOAN, MORTGAGE
  *   - added an All option
  *
  * Properties from App:
  * - productTypes: unique product types including all
  * - onChange: handles changes on the filter selection
  */
export const SearchFilter = (props) => {
    let filterTypes = props.productTypes.map( (type, index) =>  {
      return (<option key={type.charAt(0)} value={type}>{type}</option>)
    })

    return (
      <div className="search-filter" >
        <select className='filter-options' onChange={props.onChange}>
          {filterTypes}
        </select>
      </div>
    )
}
