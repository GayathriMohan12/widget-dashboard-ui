import React from 'react';
import './SearchWidget.css';

const SearchWidget = ({ query, setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update the query state in App.js
  };

  return (
    <div className="search-widget">
      <input
        value={query}
        onChange={handleInputChange}
        placeholder="Search widgets"
        className="search-input" // Add class for input styling
      />
    </div>
  );
};

export default SearchWidget;
