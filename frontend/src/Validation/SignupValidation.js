import React from 'react'

function SignupValidation(value) {
    
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(value.name === "") {        
        error.name = "Name should not be empty"    
    } else {        
        error.name = ""    
    }
    if(value.email === "") {        
        error.email = "Name should not be empty"    
    } else if(!email_pattern.test(value.email)) {        
        error.email = "Email Didn't match"    
    }else {        
        error.email = ""    
    }
    if(value.password === "") {        
        error.password = "Password should not be empty"    
    }else if(!password_pattern.test(value.password)) {        
        error.password = "Password didn't match"    
    } else {        
        error.password = ""    
    }
    if(value.city === "") {        
        error.city = "City Name should not be empty"    
    } else {        
        error.city = ""    
    }
    if(value.country === "") {        
        error.country = "Country Name should not be empty"    
    } else {        
        error.country = ""    
    } 
      
    return error;
}

export default SignupValidation