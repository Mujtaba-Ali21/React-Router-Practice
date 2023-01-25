import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-2 sticky-top navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/" style={{fontSize: '3rem', fontWeight: '400'}}>Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" style={{fontSize: '1.5rem', fontWeight: '300'}}>
          <li className="nav-item">
            <Link to='/' className="nav-link active" role={'button'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" role={'button'} to="services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" role={'button'} to="pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" role={'button'} to="contact">Contact</Link>
          </li>
          <li class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </span>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Back To Home</Link></li>
            <li><Link class="dropdown-item" to="services">Our Services</Link></li>
            <li><Link class="dropdown-item" to="pricing">Subscribe Now</Link></li>
            <li><Link class="dropdown-item" to="contact">Contect Us</Link></li>
          </ul>
        </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar