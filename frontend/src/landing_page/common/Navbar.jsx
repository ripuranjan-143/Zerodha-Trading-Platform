import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom fixed-top" style={{ backgroundColor: '#FFF' }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item d-none d-md-block">
              <a
                href="#"
                className="nav-link active text-center px-3 py-2"
                style={{ minWidth: '90px', display: 'inline-block' }}
              >
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
