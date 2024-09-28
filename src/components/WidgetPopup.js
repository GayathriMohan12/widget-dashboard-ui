// src/components/WidgetPopup.js
import React, { useState } from 'react';
import './WidgetPopup.css';

const WidgetPopup = ({ onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState('');
  const [categories, setCategories] = useState([
    { name: '', qty: '' },
    { name: '', qty: '' },
  ]);

  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const handleAddWidget = () => {
    // Prepare the data to be sent to the Sidebar
    const widgetData = {
      name: widgetName,
      categories: categories.map(cat => ({ name: cat.name, qty: Number(cat.qty) })),
    };
    onAdd(widgetData);
    setWidgetName('');
    setCategories([{ name: '', qty: '' }, { name: '', qty: '' }]); // Reset the categories
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 class = "h2-text-header">Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        
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
          </div>
        ))}

        <div class = "add-widget-control">
        <button class = "add-widget-btn-2" onClick={handleAddWidget}>Add Widget</button>
        <button  class = "delete-btn-2" onClick={onClose}>Cancel</button>
        </div>
        
      </div>
    </div>
  );
};

export default WidgetPopup;
