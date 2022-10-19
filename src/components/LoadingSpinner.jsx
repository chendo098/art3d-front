import React from 'react'
import '../styles/LoadingSpinner.css'
import icon from '../images/art3d_icon.jpg'

const LoadingSpinner = () => {
  return (
    <div className="loader">
        <div className="spinner"></div>
        <div className="spinner-logo">
          <img className="spinner-logo" src={icon} alt="" />
        </div>
    </div>
  )
}

export default LoadingSpinner