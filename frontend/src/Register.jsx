import { useState } from "react"
import React  from 'react'
import Axios from 'axios'
import {  useNavigate } from 'react-router-dom'


const Register = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [city,setCity]=useState('')
  const [country,setCountry]=useState('')
  const [registerStatus,setRegisterStatus]=useState('')

  /*const [values,setValues]= useState({

    name:'',
    email:'',
    password:'',
    city:'',
    country:'',
    
  })*/
  const navigate=useNavigate();

  const handelSubmit =(e)=>{
    e.preventDefault();
   
     Axios.post('http://localhost:8081/register',{
      name: name,
      email: email,
      password: password,
      city: city,
      country: country})
    .then((response)=>{
      if(response.data.message)
      {
        setRegisterStatus(response.data.message);
      }else{
        console.log(response)
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY")

        setTimeout(() => {
          alert(name+" YOUR ACCOUNT IS CREATED SUCCESSFULLY NOW YOU CAN LOGIN")
        }, 100);
        
       
        navigate("/login");
      }
      
    })
  
  }

  return (
    <div className="Auth-form-container">
    <form  className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
         
        </div>
       
        <div className="form-group mt-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g Jane Doe"
            name="name"
            onChange={e => setName(e.target.value)}
          />
          
        </div>

        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
         
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
         
        </div>
        <div className="form-group mt-3">
          <label>City</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g Pune"
            name="city"
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Country</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="e.g India"
            name="country"
            onChange={e => setCountry(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={handelSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
        <h2 style={{colour: 'red',fontSize: '15px',textAlign: 'center',marginTop:'20px'}}>{registerStatus}</h2>
        
      </div>
    </form>
  </div>
  )
}

export default Register