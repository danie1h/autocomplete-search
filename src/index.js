import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './resources/data/products.json'
import * as serviceWorker from './serviceWorker';


/** de-duped and sorts data on product.name from 475 records to 319 */
const productListDeduped = data.products.filter( (product, index, self) => index === self.findIndex( productDupe => product.name === productDupe.name) )

ReactDOM.render(<App productList={productListDeduped}/>, document.getElementById('root'));

serviceWorker.unregister();
