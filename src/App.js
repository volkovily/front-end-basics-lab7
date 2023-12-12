import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import SecondPage from './components/Task2';

function Menu() {
  return (
    <div>
      <h2>Лабораторна робота 7</h2> 
    <ul>
      <li>
        <Link to="/task1">Завдання 1</Link>
      </li>
      <li>
        <Link to="/task2">Завдання 2</Link>
      </li>
    </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/task1" element={<Content />} />
          <Route path="/task2" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;