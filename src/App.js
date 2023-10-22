// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import CounterPage from './CounterPage';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CounterPage />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;