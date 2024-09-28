// src/components/WidgetPopup.js
import React, { useState } from 'react';
import './WidgetPopup.css';

const WidgetPopup = ({ onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState('');
  const [bluetoothQty, setBluetoothQty] = useState(0);
  const [wiredQty, setWiredQty] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: widgetName, bluetoothQty, wiredQty };
    onAdd(data);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Widget</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Bluetooth Headphones"
            value={bluetoothQty}
            onChange={(e) => setBluetoothQty(Number(e.target.value))}
            required
          />
          <input
            type="number"
            placeholder="Wired Headphones"
            value={wiredQty}
            onChange={(e) => setWiredQty(Number(e.target.value))}
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default WidgetPopup;
