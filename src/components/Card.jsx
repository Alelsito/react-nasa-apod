const Card = ({ data }) => {

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <h5>{data.title}</h5>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col card'>
          <img className='picture-day' src={data.url} alt='Nasa Astronomy Picture of the Day' />
        </div>
      </div>
      <div className='row mt-3 mb-2 d-flex justify-content-start align-items-center'>
        <div className="col fot">
          <p className='bold'>Fotografo:</p>
        </div>
        <div className="col autor">
          <p>{data.copyright}</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <p className='explanation'>{data.explanation}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
