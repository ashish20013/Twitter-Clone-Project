import React from 'react'
import './SignUp.css';
import {Button} from '@mui/material'
import {FaTwitter,FaGoogle,FaApple } from 'react-icons/fa'


function SignUp() {
  return (
    <div className="Main">
       <h1> <FaTwitter style={{color:"blue"}} /></h1>
            <h1 style={{color:'black'}}>Join Twitter Today</h1>
            <Button sx={{color:"black", border:"2px black solid", width:"400px", height:"50px", borderRadius:"60px"}} variant="outlined">
        <FaGoogle />
        Sign up with Google
      </Button><br></br><br></br>
      <Button sx={{color:"black", border:"2px black solid", width:"400px", height:"50px", borderRadius:"50px"}} variant="outlined"> 
        <FaApple />
        Sign up with Apple
      </Button>
      <h3 style={{color:'black'}}>or</h3>
      <Button sx={{color:"black", border:"2px black solid", width:"400px", height:"50px", borderRadius:"50px"}} variant="outlined">
        
        Create Account
      </Button>
      <h5>By signing up, you agree to the <span style={{color:'blue'}}>Terms of Service</span> and <span style={{color:'blue'}}>Privacy Policy</span>, including <span style={{color:'blue'}}>Cookie Use</span>.</h5>
       <h4 className="log">Have an account already? <span style={{color:'blue'}}><a href=".com">Log in</a></span></h4>     
    </div>
  )
}

export default SignUp