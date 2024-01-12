import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/css/index.css';
import LoginForm from './components/LoginForm';
import Email from './components/Email'
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();  