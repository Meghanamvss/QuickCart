import React from 'react'
import { Link } from 'react-router-dom'


function Home() {



  
  return (
    <div className='row'>

     <div className='col-lg-4 jewelery'>
      <h1>JEWELERY</h1>
      <Link to="/jewelery" className='btn btn-light px-5'>Browse</Link>
     </div>

      <div className='col-lg-4 men'>

        <h1>MENS</h1>
      <Link to="/men's clothing" className='btn btn-light px-5'>Browse</Link>
     </div>

      <div className='col-lg-4 women'>
          <h1>WOMENS</h1>
      <Link to="/women's clothing" className='btn btn-light px-5'>Browse</Link>
     </div>



    </div>
  )
}

export default Home