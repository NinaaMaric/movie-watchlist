import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchlist</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Watch List</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/add" className="btn btn-main">+ ADD</Link>
              </li>
            </ul>
          
        </div>
      </div>
    </header>
  );
};
