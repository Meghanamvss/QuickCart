import React, { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { addtocart,removecart } from './createSlice';
import { useDispatch } from 'react-redux';


function Details() {

  const[jewelery,setJewelery]=useState([{id:0,title:"",price:"",description:"",category:"",image:"",rating:{rate:"",count:0}}])
 

 let id=useParams().id;

 let dispatch=useDispatch();


 useEffect(()=>{

  axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>setJewelery(response.data)).catch(error=>console.log(error));


 })

 function clickButton(product){

  dispatch(addtocart(product))
  alert(`${product.title} item is added to cart`);


 }


  return (
    <div className='container mt-5'>

<div className='row'>

<div className='col-lg-4'>
 <img src={jewelery.image} className='img-fluid' style={{height:"300px"}}></img>
</div>

<div className='col-lg-6'>
 <dt>Title</dt>
 <dd>{jewelery.title}</dd>

  <dt>Description</dt>
 <dd>{jewelery.description}</dd>

   <dt>Price</dt>
 <dd>&#8377;{jewelery.price}</dd>


 <Link to={`/${jewelery.category}`} className='btn btn-success'>Back to {jewelery.category}</Link>
 <Link to={`more/${jewelery.id}`} className='btn btn-info m-2' >More</Link>

 <button className='btn btn-danger' onClick={()=>clickButton(jewelery)}>Add to cart</button>

</div>

<div className='col-lg-2'>
 <Outlet></Outlet>
</div>


</div>


</div>
  )
}

export default Details