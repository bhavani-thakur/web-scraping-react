import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import Product from './../Product';
import SubmitURL from './../SubmitUrl';

const ProductList = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/products');
      setProducts(response.data);
    } catch (error) {
      setError('Failed to fetch products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SubmitURL onProductAdded={fetchProducts} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Product 
          products={products} 
          query={query} 
          onQueryChange={handleQueryChange} 
        />
      )}
    </div>
  );
};

export default ProductList;
