import { useState } from "react"
import React from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const ForgetPassword = () => {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passwordStatus,setpasswordStatus]=useState('')

    const navigate=useNavigate();


    const handelSubmit =(e)=>{
        e.preventDefault();
         axios.put('http://localhost:8081/forgetpassword',{
         
         email: email,
          password: password
         })
        
        .then((response)=>{
         
            
            setpasswordStatus("Password Change Successfully");
    
            setTimeout(() => {
              alert(email+ " Your Password is Changed now you can log In")
            }, 100);
    
            
            navigate("/login");
            if(response.affectedRows >0){
            setpasswordStatus("Enter Valid Email")
            }
          
        })
        
      }



  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Change Password</h3>
        <div className="text-center">
         
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email" name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Enter New Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={handelSubmit}>
            Submit
          </button>
        </div>
        <h2 style={{colour: 'red',fontSize: '15px',textAlign: 'center',marginTop:'20px'}}>{passwordStatus}</h2>
        <p>Not Register ?
        <a href="/register">Sign Up</a>
        </p>
        <p className="text-center mt-2">
          Forgot <a href="/login">go to login</a>
        </p>
      </div>
    </form>
  </div>
  )
}

export default ForgetPassword