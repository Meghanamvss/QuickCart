import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function Mens() {


 const[mens,setMens]=useState([{id:0,title:"",price:"",description:"",category:"",image:"",rating:{rate:"",count:0}}])


 useEffect(()=>{

 axios.get("https://fakestoreapi.com/products/category/men's clothing").then(response=>setMens(response.data)).catch((error)=>{

  console.log(error);

 })


 },[])


  return (
    <div className='container mt-2'>

<div className='row'>
 {
  mens.map(product=>
   <div className='col-lg-4 mt-2'>
    <div className='card shadow p-2' style={{height:"400px"}}>
     <img src={product.image} style={{height:"250px"}}></img>

     
    <div className='card-header'>
     <h6>{product.title}</h6>
    </div>

    <div className='card-footer'>
     <Link to={`/details/${product.id}`}className='btn btn-info w-100'>Details</Link>
    </div>

    </div>

   </div>


  )
 }

</div>
 


    </div>
  )
}

export default Mens;