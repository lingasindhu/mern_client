import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Header() {
  return (
    <div className="header">
      <h3>Client view page</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </div>
  );
}