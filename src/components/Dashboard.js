import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import './Dashboard.css'; // Add styles for Dashboard layout

const Dashboard = ({ searchQuery }) => {
  const categories = useSelector(state => state.categories || []); // Get categories from Redux store

  // Filter categories and widgets based on searchQuery
  const filteredCategories = categories.map(category => {
    const filteredWidgets = category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, widgets: filteredWidgets }; // Return new filtered category
  });

  return (
    <div className="dashboard">
      {filteredCategories.length > 0 ? (
        filteredCategories.map(category => (
          <div key={category.id} className="category">
            <h3>{category.name}</h3>
            <div className="widgets">
              {category.widgets.length > 0 ? (
                category.widgets.map(widget => (
                  <Widget key={widget.id} categoryId={category.id} widget={widget} />
                ))
              ) : (
                <p>No widgets found in this category.</p>
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
