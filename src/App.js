import React, { Component } from 'react'
import './App.css'
import { SearchFilter } from './search-filter/search-filter.js'
import { SearchBar } from './search-bar/search-bar.js'
import { SearchResults } from './search-results/search-results.js'

/**
  * Component: App
  *
  * main app which calls child components
  * Properties:
  * - productList: all financial products and info deduped and sorted
  *
  * Parameters passed to SearchFilter:
  * - productTypes: unique product types including all
  * - onChange: handles changes on the filter selection
  * Parameters passed to SearchBar:
  * - productList: list of all products and info
  * - filterOn: filter product list based on filter type
  * - onChange: handles changes on the search bar
  * - searchInput: text the user enterred in the search bar
  * - escapedSearchInput: text the user enterred in the search bar with escapped char
  * - handleSubmit: flag to check if user selected submit
  * Parameter passed to SearchResults:
  * - searchInput: text the user enterred in the search bar
  * - escapedSearchInput: text the user enterred in the search bar with escapped char
  * - filterOn: filter product list based on filter type
  * - productList: list of all products and info
  */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      /** content entered in the search bar */
      searchInput: '',
      /** content entered in the search bar and escaped parenthesis */
      escapedSearchInput: '',
      /** type of institute user would like to filter on */
      filterType: 'All',
      /** track if the user submitted the search */
      submitted: false
    }

    this.updateSearchInput = this.updateSearchInput.bind(this)
    this.updateFilterType = this.updateFilterType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /** When input is modified, update the state searchInput, escapedSerachInput and set submitted to false*/
  updateSearchInput(event) {
    // escape (, ), +, *
    let str = event.target.value.replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\*/g, '\\*').replace(/\+/g, '\\+')

    this.setState({
      searchInput: event.target.value,
      escapedSearchInput: str,
      submitted: false
    })
  }

  /** When a new filter is selected, update the filter value and set submitted to false*/
  updateFilterType(event) {
    this.setState({
      filterType: event.target.value,
      submitted: false
    })
  }

  /** When user selects the search icon or presses enter, set submitted to true and results will display*/
  handleSubmit(event) {
    this.setState({
      submitted: true
    })
    event.preventDefault()
  }

  render () {
    return (
      <div className='auto-search-app'>
        <h1>Financial Instituton Search</h1>
        <div className='search-section'>
          <SearchFilter onChange={this.updateFilterType} productTypes={['All', ...this.props.productList.map(product => product.type).filter( (type, index, self) => self.indexOf(type) === index ).sort()]}/>
          <SearchBar searchInput={this.state.searchInput} escapedSearchInput={this.state.escapedSearchInput} filterOn={this.state.filterType} handleChange={this.updateSearchInput} productList={this.props.productList} handleSubmit={this.handleSubmit}/>
        </div>
        { (this.state.submitted) ? <SearchResults searchInput={this.state.searchInput} escapedSearchInput={this.state.escapedSearchInput} filterOn={this.state.filterType} productList={this.props.productList}/> : '' }
      </div>
    )
  }
}

export default App
