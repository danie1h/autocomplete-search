import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './resources/data/products.json'
import * as serviceWorker from './serviceWorker';


/** de-duped and sorts data on product.name from 475 records to 319 */
/** modify the product type to letter case and swith '_' with spaces */
const productListDeduped = data.products
  .filter( (product, index, self) => index === self.findIndex( productDupe => product.name === productDupe.name) )
  .sort( (curr, next) => (curr.name.toLowerCase() > next.name.toLowerCase()) ? 1 : (curr.name.toLowerCase() < next.name.toLowerCase()) ? -1 : 0)
  .map( product => {
    return {
      name: product.name,
      url: product.url,
      type: product.type.replace(/_/, ' ')
        .replace(/([A-Z]+)/g, match =>  `${match.charAt(0)}${match.slice(1).toLowerCase()}` )
      }
  })

const uniqueProductTypes = ['All', ...productListDeduped.map(product => product.type).filter( (type, index, self) => self.indexOf(type) === index ).sort()]

ReactDOM.render(<App productList={productListDeduped} productTypes={uniqueProductTypes}/>, document.getElementById('root'));

serviceWorker.unregister();
