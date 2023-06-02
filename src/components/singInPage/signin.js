import {Link, useNavigate} from 'react-router-dom'
import './signin.css'
import { useState } from 'react';
import HomeLayout from '../homePage/HomeLayout';


export default function SignIn(){

  const navigate=useNavigate()
   const [getuser,Setgetuser]=useState("")
 let handleLogin =()=>{  
    const userInput=getuser 
    let users =JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("auth",true)
    let foundUser = []
    
    if (!isNaN(userInput)){
        foundUser = users.filter(u => u.number == userInput)
    }
    else if (userInput.includes("@")){
        foundUser = users.filter(u => u.email == userInput)
    }else{
        foundUser = users.filter(u => u.name == userInput)
    }
    
    if (foundUser.length > 0){
        console.log("Logging user", foundUser)
         navigate("/home")
    }else{
        console.log("user not found")
    }
    
}
      
    
    return(
        <>
            <div className="signIn-wrapper">
                <div className="logo"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="logo"></img></div>
                <h1>Sign in to Twitter</h1>

        <div className="signIn-section">
          <div className="google-btn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj_H7E2tm9xMDrTrGoDVQHFweOsTYu6YXsjKqb5mSRw&s"
              alt="google-img"
            ></img>
            <h3>Sign in with Google</h3>
          </div>

          <div className="apple-btn">
            <img
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/apple-icon.png"
              alt="apple-img"
            ></img>
            <h3>Sign in with Apple</h3>
          </div>

          <div className="ruler">
            <hr /> <span>Or</span> <hr />
          </div>

          <div className="input-box">
            <input
              type="text"
              id="input"
              onChange={(e)=>Setgetuser(e.target.value)}
              placeholder="phone number, email, or user name..."
            ></input>
          </div>

          <button className="next-btn" onClick={handleLogin}>Next</button>

          <button className="forgot-passBtn">Forgot password?</button>
        </div>

        <div className="signup-text">

            <p>
              Dont have an account?<Link to="/signUp">Sign Up</Link>;
              
             

            </p>
          
        </div>
      </div>
    </>
  );
}
