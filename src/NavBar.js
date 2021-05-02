import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbarcontainer">
      <div className="navbar indent">
        <NavLink to="/vote" activeClassName="active-nav-link">
          Vote
        </NavLink>
        <NavLink to="/rankings" activeClassName="active-nav-link">
          Rankings
        </NavLink>
      </div>
    </div>
  );
}
