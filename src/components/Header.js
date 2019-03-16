import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/exercise1">Exercise 1 - react context</Link>
      </li>
      <li>
        <Link to="/exercise2">Exercise 2 - react context with hooks</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
