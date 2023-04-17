import { useState } from 'react'
import React  from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'



const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loginStatus,setLoginStatus]=useState('')


const navigate=useNavigate();

  const handelSubmit =(e)=>{
    e.preventDefault();
     axios.post('http://localhost:8081/login',{
     
     email: email,
      password: password
     })
    
    .then((response)=>{
      if(response.data.message)
      {
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus("Login Successful");

        setTimeout(() => {
          alert("Welcome  "+email)
        }, 100);

        
        navigate("/success");
      }
    })
    
  }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
              <label>Password</label>
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
            <h2 style={{colour: 'red',fontSize: '15px',textAlign: 'center',marginTop:'20px'}}>{loginStatus}</h2>
            <p>Not Register ?
            <a href="/register">Sign Up</a>
            </p>
            <p className="text-center mt-2">
              Forgot <a href="/forgetpassword">password?</a>
            </p>
          </div>
        </form>
      </div>
  )
}

export default Login