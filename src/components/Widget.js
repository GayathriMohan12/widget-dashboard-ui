// src/components/Widget.js
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store';
import './Widget.css';

const COLORS = ['#0088FE', '#00C49F'];

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleDeleteWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  // Create pieData based on the widget categories received
  const pieData = widget.categories.map((category, index) => ({
    name: category.name,
    value: category.qty,
  }));

  return (
    <div className="widget">
      <h4>{widget.name}</h4>

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

      {/* Display categories beside the chart */}
      <div className="categories-display">
        {pieData.map((entry, index) => (
          <div key={index} style={{ color: COLORS[index % COLORS.length] }}>
            {entry.name}: {entry.value}
          </div>
        ))}
      </div>

      <button onClick={handleDeleteWidget} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Widget;
