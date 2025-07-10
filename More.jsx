import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

function More() {



 
  const[jewelery,setJewelery]=useState({id:0,title:"",price:"",description:"",category:"",image:"",rating:{rate:"",count:0}})
 

 let id=useParams().id;


 useEffect(()=>{

  axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>setJewelery(response.data)).catch(error=>console.log(error));


 })



  return (
    <div>
   


   <dt>Rate</dt>
   <dd>{jewelery.rating.rate}</dd>

      <dt>Count</dt>
   <dd>{jewelery.rating.count}</dd>
 

  
    </div>
  )
}

export default More