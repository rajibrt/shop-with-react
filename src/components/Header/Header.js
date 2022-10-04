import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="left-top">
          <p>Left Text</p>
        </div>
        <div className="right-top">
          <p>Left Text</p>
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
