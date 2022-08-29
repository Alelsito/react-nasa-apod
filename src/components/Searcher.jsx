import React, { useState } from 'react'
import getDate from '../utils/getDate'

const Searcher = ({ onCreate }) => {

  const [ date, setDate ] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(date)
  }

  const max = getDate()

  return (
    <div className='container mt-4 mb-5'>
      <div className='row mb-1'>
        <h5>Buscar</h5>
      </div>
      <form className='row d-flex justify-content-start align-items-center' onSubmit={onSubmit}>
        <div className='col date'>
          <input className='input-date btn btn-outline-info' type='date' max={max} value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="col date">
          <input className='input-date btn btn-outline-primary' type='submit' value="Buscar"/>
        </div>
      </form>
    </div>
  )
}

export default Searcher
