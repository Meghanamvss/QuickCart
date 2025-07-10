import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie"


function Jewelery() {


 const[jewelery,setJewelery]=useState([{id:0,title:"",price:"",description:"",category:"",image:"",rating:{rate:"",count:0}}])

 let navigate=useNavigate();

 const[cookie,setCookie,removeCookie]=useCookies("username");


 useEffect(()=>{

  if(cookie["username"])
  {
     axios.get("https://fakestoreapi.com/products/category/jewelery").then(response=>setJewelery(response.data)).catch((error)=>{
  console.log(error);

 })

  }

  else{
    navigate("/login");
  }


 },[])

 function clickSignout(){
  removeCookie("username");
navigate("/login");
 }

  return (
    <div className='container mt-5'>

      <div className='d-flex justify-content-between'>
  <h3>Welcome to :{cookie["username"]}</h3>
  <button className='btn btn-danger' onClick={clickSignout}>Logout</button>
      </div>
  


<div className='row'>
 {
  jewelery.map(product=>
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

export default Jewelery