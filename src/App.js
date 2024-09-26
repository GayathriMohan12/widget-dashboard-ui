// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SearchWidget from './components/SearchWidget';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Header with logo (dashboard name) and search bar */}
      <header className="header">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
        <div className="dashboard-logo">
          Dashboard {/* Dashboard name/logo */}
        </div>
        <div className="search-container">
          <SearchWidget /> {/* Search bar in the center */}
        </div>
      </header>

      <div className="layout">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? 'content-shifted' : ''}`}>
          <ErrorBoundary>
            <Dashboard />
            {/* <UserInputChart /> Add UserInputChart component here */}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
