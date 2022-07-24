import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';

import './App.css';

//pages
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
