// src/components/Sidebar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addWidget, deleteCategory } from '../store';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [categoryName, setCategoryName] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const categories = useSelector((state) => state.categories || []);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      dispatch(
        addCategory({
          category: { id: Date.now(), name: categoryName, widgets: [] },
        })
      );
      setCategoryName('');
    }
  };

  const handleAddWidget = (categoryId) => {
    if (widgetName.trim()) {
      dispatch(
        addWidget({
          categoryId,
          widget: { id: Date.now(), name: widgetName, data: [10, 20, 30] }, // Example pie chart data
        })
      );
      setWidgetName('');
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

      <div className="widget-form">
        <h3>Add Widget</h3>
        <input
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Widget Name"
          className="input-field"
        />
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
                  onClick={() => handleAddWidget(category.id)}
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
    </div>
  );
};

export default Sidebar;
