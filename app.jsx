import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from './Home'
import Jewelery from './Jewelery'
import Mens from './Mens'
import Womens from './Womens'
import Details from './Details'
import More from './More'
import Login from './Login'

import {useCookies} from "react-cookie"
import { useSelector } from 'react-redux';
import store from './store'
import Showcart from './showcartItems'


function App(){



// const cartCount = useSelector((state) => state.store.cartCount);





const cartCount = useSelector((state) => state.store.cartCount);

return (
  <div>
    <BrowserRouter>
      <header className='bg-danger text-white px-5 py-2 d-flex justify-content-between align-items-center'>
        <div>
          <Link to="/" className='text-decoration-none fs-3 fw-bold text-white'>
            Shopper
          </Link>
        </div>
        <nav>
          <Link className='text-decoration-none text-white fs-5 mx-3' to="/jewelery">
            Jewelery
          </Link>
          <Link className='text-decoration-none text-white fs-5 mx-3' to="/men's clothing">
            Men's
          </Link>
          <Link className='text-decoration-none text-white fs-5 mx-3' to="/women's clothing">
            Women's
          </Link>
        </nav>
        <div>
          <Link className='btn btn-info position-relative' to="/items">
            Count
            <span className='badge bg-warning position-absolute translate-middle start-100 top-0'>
              {cartCount || 0}
            </span>
          </Link>
        </div>
      </header>

      <article className='bg-dark text-white text-center p-1'>
        Summy Offer on All Products 50% offer
      </article>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/details/:id" element={<Details />}>
            <Route path="more/:id" element={<More />} />
          </Route>
          <Route path="/men's clothing" element={<Mens />} />
          <Route path="/women's clothing" element={<Womens />} />
          <Route path="/login" element={<Login />} />
          <Route path='/items' element={<Showcart></Showcart>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </div>
);
}

export default App