import React from 'react'
import img1 from '../assets/images/airbnb-logo.png'
export default function Navbar() {
  return (
    <nav className="nav--container">
      <img src={img1} alt="airbnb logo" className="nav--logo" />
    </nav>
  )
}
