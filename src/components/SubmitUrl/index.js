import React, { useState } from 'react';
import axios from '../../axiosConfig';

const SubmitURL = ({ onProductAdded }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/products', { url });
      alert('Product added successfully!');
      onProductAdded(); // Trigger fetch of updated products
    } catch (error) {
      console.error(error);
      alert('Failed to scrape the product.');
    }
  };

  return (
    <form className="ml-3 flex justify-start mr-10" onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL to scraping"
        required
        className="mr-2 px-2 flex justify-end border-2 border-gray-300 rounded-md"
      />
      <button type="submit" className="px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default SubmitURL;
