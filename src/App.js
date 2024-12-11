import React from 'react';
import SubmitURL from './components/SubmitUrl/index.js';
import ProductsList from './components/ProductsList/index.js';


const App = () => (
  <div>
    <h1 className="ml-3 mt-3 mb-2">Product Scraper</h1>
      <ProductsList />
  </div>
);
export default App;
