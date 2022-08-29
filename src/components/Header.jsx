import React from 'react'

const Header = () => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <p className='bold'>
          {' '}
          Desarollado por:{' '}
          <a className='link' href='https://github.com/Alelsito'>
            Hugo López
          </a>{' '}
        </p>
      </div>
      <div className='row'>
        <p className='bold'>
          {' '}
          API:{' '}
          <a className='link' href='https://api.nasa.gov/'>
            https://api.nasa.gov/
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Header
