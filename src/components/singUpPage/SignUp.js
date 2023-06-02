import React from 'react'
import './SignUp.css';
import { Button } from '@mui/material'
import { FaTwitter} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

function SignUp() {
  return (
    <div className="Main">
       <h1> <FaTwitter color="blue" /></h1>
            <h1 id="join" style={{color:'black'}}>Join Twitter Today</h1>
            <Button id="google" sx={{color:"black", border:"2px black solid", width:"400px", height:"50px", borderRadius:"60px"}} variant="outlined">
        <FcGoogle className='googlelogo' />
        Sign up with Google
      </Button><br></br><br></br>
      <Button id="apple" sx={{ color: "black", border: "2px black solid", width: "400px", height: "50px", borderRadius: "50px" }} variant="outlined">
        <BsApple className='googlelogo'/>
        Sign up with Apple
      </Button>
      <div className="ruler1">
            <hr /> <span>Or</span> <hr />
          </div>
      <Button id="create" sx={{ color: "black", border: "2px black solid", width: "400px", height: "50px", borderRadius: "50px" }}>

       <Link to="/singup"> Create Account </Link>

      </Button>
      <h5>By signing up, you agree to the <span style={{ color: 'blue' }}>Terms of Service</span> and <span style={{ color: 'blue' }}>Privacy Policy</span>, including <span style={{ color: 'blue' }}>Cookie Use</span>.</h5>
      <h4 className="log">Have an account already? <span style={{ color: 'blue' }}>
        <Link to="/">Log in</Link>
      </span></h4>
    </div>
  )
}

export default SignUp