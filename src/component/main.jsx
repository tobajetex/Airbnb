import React from 'react'
import photogrid from '../assets/images/photo-grid.png'
export default function Main() {
  return (
    <main className="main--container">
      <div className="main--img--container">
        <img src={photogrid} alt="photo gallery of profile pics on airbnb" />
      </div>
      <div>
        <h1>Online Experience</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  )
}
