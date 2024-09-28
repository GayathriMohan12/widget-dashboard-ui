// src/components/Widget.js
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store';
import './Widget.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleDeleteWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h4>{widget.name}</h4>

      <PieChart width={200} height={200}>
        <Pie
          data={widget.data.map((value, index) => ({ name: `Segment ${index}`, value }))}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {widget.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <button onClick={handleDeleteWidget} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Widget;
