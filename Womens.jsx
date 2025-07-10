import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function Womens() {


 const[womens,setWomens]=useState([{id:0,title:"",price:"",description:"",category:"",image:"",rating:{rate:"",count:0}}])


 useEffect(()=>{

 axios.get("https://fakestoreapi.com/products/category/women's clothing").then(response=>setWomens(response.data)).catch((error)=>{

  console.log(error);

 })


 },[])


  return (
    <div className='container mt-2'>

<div className='row'>
 {
  womens.map(product=>
   <div className='col-lg-4 mt-2'>

    <div className='card shadow p-2' style={{height:"400px"}}>
     <img src={product.image} style={{height:"250px"}}></img>


     <div className='card-header'>
      <h6>{product.title}</h6>
     </div>

     <div className='card-footer'>
      <Link className='btn btn-primary w-100' to={`/details/${product.id}`}>More</Link>
      </div>


    </div>



   </div>


  )
 }

</div>
 


    </div>
  )
}

export default Womens;