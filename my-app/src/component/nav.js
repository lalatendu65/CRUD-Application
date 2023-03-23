import React from "react";

import { Link } from "react-router-dom";
import "./nav.css"


function Navbar() {
  return (
    <>
      <nav>
        <h1 className="head">USER_MANAGEMNET</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alluser">All user</Link>
          </li>
          <li>
            <Link to="/adduser">Add user</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
