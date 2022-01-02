import React from 'react';
import '../style.css';

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/about">
          <li> About </li>
        </Link>
        <Link to="/shop">
          <li> Shop </li>
        </Link>
        <Link to="/contact">
          <li> Contact </li>
        </Link>
        <Link to="/calculator">
          <li> Calculator </li>
        </Link>
      </ul>
    </nav>
  );
}
