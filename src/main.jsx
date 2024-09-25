import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import App from './App';
import About from './About';
import Software from './Software';
import Privacy from './Privacy';
import Art from './Art';

// Define routes directly inside the HashRouter component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Software />} />
          <Route path="/art" element={<Art />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

