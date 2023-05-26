import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import 'bootstrap/js/dist/dropdown';

function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
      <i className="navbar-brand bi bi-justify-left fs-5" onClick={Toggle}></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <form className="d-flex ms-auto my-lg-0">
          <div className="input-group">
            <input
              className="form-control rounded-0"
              type="text"
              placeholder=""
              style={{
                backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="%23333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><circle cx="10" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "4px 4px",
                backgroundSize: "16px",
                paddingLeft: "35px"
              }}
            />
          </div>
          <button
            className="btn btn-outline-primary rounded-0 my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          <div className="d-flex align-items-center ms-2">
            <FaUserCircle size={24} />
          </div>
        </form>
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Unis Badri
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Action 1
              </a>
              <a className="dropdown-item" href="#">
                Action 2
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
