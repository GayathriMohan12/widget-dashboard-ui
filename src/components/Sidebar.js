// src/components/Sidebar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addWidget, deleteCategory } from '../store';
import WidgetPopup from './WidgetPopup';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [categoryName, setCategoryName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const categories = useSelector((state) => state.categories || []);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      dispatch(addCategory({ category: { id: Date.now(), name: categoryName, widgets: [] } }));
      setCategoryName('');
    }
  };

  const handleAddWidget = (widgetData) => {
    if (selectedCategoryId) {
      dispatch(addWidget({
        categoryId: selectedCategoryId,
        widget: {
          id: Date.now(),
          name: widgetData.name,
          categories: widgetData.categories, // Use the categories structure
        },
      }));
      setSelectedCategoryId(null);
      setShowPopup(false);
    }
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="category-form">
        <h3>Add Category</h3>
        <input
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          className="input-field"
        />
        <button className="add-btn" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>

      {categories.length > 0 ? (
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <span>{category.name}</span>
              <div className="category-controls">
                <button
                  className="action-btn delete-btn"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Delete Category
                </button>
                <button
                  className="action-btn add-widget-btn"
                  onClick={() => {
                    setSelectedCategoryId(category.id);
                    setShowPopup(true);
                  }}
                >
                  Add Widget
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No categories available. Please add a category first.</p>
      )}

      {showPopup && (
        <WidgetPopup onClose={() => setShowPopup(false)} onAdd={handleAddWidget} />
      )}
    </div>
  );
};

export default Sidebar;
