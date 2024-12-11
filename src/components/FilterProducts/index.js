import React from 'react';

const FilterProducts = ({ query, onQueryChange }) => {
  const handleInputChange = (e) => {
    onQueryChange(e.target.value); // Update the query in the parent component
  };

  return (
    <div className="ml-28rem">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products by name"
        className="mr-2 px-2 flex justify-end border-2 border-gray-300 rounded-md"
      />
    </div>
  );
};

export default FilterProducts;
