import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </Router>
  );
};

export default App;
