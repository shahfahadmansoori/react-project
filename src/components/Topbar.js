import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => (
  <div className="topbar ">
    <div className="container">
      <div className="row d-flex justify-content-between">
        <ul className="nav nav-pills currency">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Currency : GBP
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#one">
                one
              </a>
              <a class="dropdown-item" href="#two">
                two
              </a>
              <div role="separator" class="dropdown-divider" />
              <a class="dropdown-item" href="#three">
                three
              </a>
            </div>
          </li>
        </ul>
        <ul className="nav nav-pills items">
          <li className="nav-item">
            <Link className="nav-link" to="/Sign">
              Sign-in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sign">
              Register
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-camera"></i>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#one">
                one
              </a>
              <a class="dropdown-item" href="#two">
                two
              </a>
              <div role="separator" class="dropdown-divider" />
              <a class="dropdown-item" href="#three">
                three
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Topbar;
