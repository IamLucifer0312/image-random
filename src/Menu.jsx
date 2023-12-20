import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h1>Choose Topic:</h1>
      <div className="btn-list">
        <Link to="/Movies">
          <button>Movies</button>
        </Link>
        <Link to="/Wibu">
          <button>Wibu</button>
        </Link>
        <Link to="/Celebrities">
          <button>Celebrities</button>
        </Link>
        <Link to="/Characters">
          <button>Characters</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
