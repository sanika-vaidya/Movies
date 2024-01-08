import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
   
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={props.isChecked ? "dark" : "light"}
      >
        <div className="container-fluid">
          <li className="navbar-brand" >
           Movies
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">

                <Link className="nav-link active" aria-current="page" to={'/'}> 
                Home
                 </Link>
             </li>
             
              <li className="nav-item">
                <li className="nav-link" to="/about">
                  About
                </li>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={props.isChecked}
              onChange={props.setIsChecked}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.isChecked ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}