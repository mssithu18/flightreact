import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5 className='mb-3 text-decoration-underline'>Quick Links</h5>
            <ul className="list-unstyled">
              <li className='my-1'><Link to="/Home" className="text-white text-decoration-none">Home</Link></li>
              <li className='my-1'><Link to="/Package" className="text-white text-decoration-none">Package</Link></li>
              <li className='my-1'><Link to="/Offers" className="text-white text-decoration-none">Offers</Link></li>
            </ul>
          </div>

          {/* Packages Section */}
          <div className="col-md-4">
            <h5 className='mb-3 text-decoration-underline'>Packages</h5>
            <ul className="list-unstyled">
              <li className='my-1'><Link to="/malaysia" className="text-white text-decoration-none">Malaysia</Link></li>
              <li className='my-1'><Link to="/kashmir" className="text-white text-decoration-none">Kashmir</Link></li>
              <li className='my-1'><Link to="/dubai" className="text-white text-decoration-none">Dubai</Link></li>
              <li className='my-1'><Link to="/london" className="text-white text-decoration-none">London</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4">
            <h5 className='mb-3 text-decoration-underline'>Contact Info</h5>
            <ul className="list-unstyled">
              <li className='my-1'>Email: support@aerovista.com</li>
              <li className='my-1'>Phone: +91 8300389812</li>
               <li className='mt-4'>
               <h5 className='mb-3 mt-5 text-decoration-underline'>Connect With Us</h5>
                <div className="social-icons">
                <h4>
                  <a href="https://www.instagram.com" className="text-white mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram text-danger"></i>
                  </a>
                  <a href="https://www.facebook.com" className="text-white mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook text-primary"></i>
                  </a>
                  <a href="https://www.linkedin.com" className="text-white mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin text-info"></i>
                  </a>
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
