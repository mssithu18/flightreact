import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-0">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/home">
          <div className='d-flex align-items-end gap-1'><h2>AeroVista</h2><i class="bi bi-globe fs-2"></i></div>
        </Link>

        {/* Navbar Toggler for Mobile View */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/home">
                FLIGHT
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/package">
                PACKAGE
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/offers">
                OFFER
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link to="/login" className="btn btn-primary d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i> Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
