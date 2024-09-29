import React, { useState } from 'react';
import './WidgetPopup.css';

const WidgetPopup = ({ onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState('');
  const [categories, setCategories] = useState([{ name: '', qty: '' }]);

  // Helper function to capitalize the first letter of each word
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Handle category name and quantity changes
  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  // Add a new category input
  const handleAddCategory = () => {
    setCategories([...categories, { name: '', qty: '' }]);
  };

  // Remove an existing category input
  const handleRemoveCategory = (index) => {
    const newCategories = categories.filter((_, idx) => idx !== index);
    setCategories(newCategories);
  };

  // Handle adding the widget
  const handleAddWidget = () => {
    const widgetData = {
      name: capitalizeWords(widgetName),
      categories: categories.map((cat) => ({
        name: capitalizeWords(cat.name),
        qty: Number(cat.qty),
      })),
    };
    onAdd(widgetData);
    setWidgetName('');
    setCategories([{ name: '', qty: '' }]); // Reset the form
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />

        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-input">
              <input
                type="text"
                placeholder="Category Name"
                value={category.name}
                onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={category.qty}
                onChange={(e) => handleCategoryChange(index, 'qty', e.target.value)}
              />
              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveCategory(index)}
                disabled={categories.length === 1}
              >
                -
              </button>
              <button type="button" className="add-btn-2" onClick={handleAddCategory}>
                +
              </button>
            </div>
          ))}
        </div>

        <div className="add-widget-control">
          <button className="add-widget-btn-2" onClick={handleAddWidget}>Add Widget</button>
          <button className="delete-btn-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetPopup;
