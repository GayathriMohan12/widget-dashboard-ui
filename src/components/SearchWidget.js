// src/components/SearchWidget.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SearchWidget.css';

const SearchWidget = () => {
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.categories || []); // Ensure categories is an array

  // Filter widgets based on the search query
  const filteredWidgets = categories.flatMap(category =>
    category.widgets
      ? category.widgets.filter(widget => widget.name.toLowerCase().includes(query.toLowerCase()))
      : []
  );

  return (
    <div className="search-widget">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search widgets"
        className="search-input" // Add class for input styling
      />
      
      {/* Conditionally render search results if query exists */}
      {query && (
        <div className="search-results">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map(widget => (
              <div key={widget.id} className="search-result-item">
                {widget.name}
              </div>
            ))
          ) : (
            <div className="no-results">No widgets found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWidget;
