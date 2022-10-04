import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="left-top">
          <a href="tel:+8801711380679">Call: 01711-380-679 </a>
        </div>
        <div className="right-top">
          <p>Right Text</p>
        </div>
      </div>
      <nav className="header">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Header
