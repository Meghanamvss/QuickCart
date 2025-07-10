import React, { use } from 'react'
import {useFormik} from "formik"
import axios from 'axios'
import {useCookies} from "react-cookie"
import { useNavigate } from 'react-router-dom'
function Login() {


  const[cookie,setCookie,removeCookie]=useCookies("username");

  let navigate=useNavigate();

 let formik=useFormik({

  initialValues:{
   username:"",
   password:""
  },
  onSubmit:(userdetails)=>{

   console.log(userdetails);

   axios.get("users.json").then(response=>{

    let user=response.data.find(user=>user.username==userdetails.username);

    if(user.password==userdetails.password)
    {
   setCookie("username",userdetails.username);
   navigate("/jewelery");

   
    }

    else{
     navigate("/login")
    }




   })

  }


 })



  return (
    <div className='mt-5'>

      <form className='border border-1 rounded rounded-1 shadow w-25 m-auto p-4 ' onSubmit={formik.handleSubmit}>

       <div className='mt-2'>
        <input type='username'  placeholder='Username' name="username" className='form-control' onChange={formik.handleChange}/>
       </div>

         <div className='mt-2'>
        <input type='password'  placeholder='Password' name="password" className='form-control' onChange={formik.handleChange}/>
       </div>

   <div className='mt-2'>
        <input type='submit'  value="Login" className='btn btn-success w-100'/>
       </div>
      </form>

    </div>
  )
}

export default Login