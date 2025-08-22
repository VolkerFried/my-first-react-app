import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/Page2">Page2</Link>
      </nav>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App
