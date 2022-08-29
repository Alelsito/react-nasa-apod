import React from 'react'

// Logo
import Logo from '../assets/nasa.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container mt-2 mb-2 d-flex justify-content-start'>
        <div className='row'>
          <div className='col d-flex align-items-center'>
            <img className='nasa-logo' src={Logo} alt='Logo' />
            <h3 className='me-3 ms-3'> NASA Astronomy Picture of the Day</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
