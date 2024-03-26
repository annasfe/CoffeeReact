import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/form">
        <button className="btn btn-warning">Add coffee</button>
      </Link>
      <Link to="/">
        <button className="btn btn-warning">Choose your cup </button>
      </Link>
    </nav>
  );
}
