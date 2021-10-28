import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ListadoPost from './ListadoPost';
import NavBar from './NavBar.js';
import DetallePost from './DetallePost.js';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios" component={ListadoPost} />
        <Route exact path="/usuarios/:id" component={DetallePost} />
      </Router>
    </div>
  );
}
