// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import './Dashboard.css'; // Add styles for Dashboard layout

const Dashboard = () => {
  const categories = useSelector(state => state.categories || []); // Get categories from Redux store

  return (
    <div className="dashboard">
      {categories.length > 0 ? (
        categories.map(category => (
          <div key={category.id} className="category">
            <h3>{category.name}</h3>
            <div className="widgets">
              {category.widgets.length > 0 ? (
                category.widgets.map(widget => (
                  <Widget key={widget.id} categoryId={category.id} widget={widget} />
                ))
              ) : (
                <p>No widgets available in this category</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No categories available. Add a category to get started!</p>
      )}
    </div>
  );
};

export default Dashboard;
