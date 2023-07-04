import Spinner from 'react-bootstrap/Spinner';
import React from 'react'

function Loader() {
  return (
    <div className='my-4 d-flex justify-content-center'>
    <Spinner animation="border" role="status">
      <span className=" visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader