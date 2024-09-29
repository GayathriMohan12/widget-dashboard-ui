// src/components/Widget.js
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store';
import './Widget.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Extended colors for more categories

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleDeleteWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const pieData = widget.categories.map((category, index) => ({
    name: category.name,
    value: category.qty,
  }));

  return (
    <div className="widget">

      <div class ="Widget-header">
      <h4>{widget.name}</h4>

      <button onClick={handleDeleteWidget} className="delete-button">
      &#10006;
      </button>
      </div>
      

      <div className="widget-content">
        <div className="pie-chart-container">
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              cx={100}
              cy={100}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Display categories and their counts next to the pie chart */}
        <div className="categories-display">
          {pieData.map((entry, index) => (
            <div key={index} className="category-info">
              <span style={{ color: COLORS[index % COLORS.length] }}>
                {entry.name}: {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Widget;
