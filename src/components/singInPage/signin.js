// import {Link} from 'react-router-dom'
import './signin.css'


export default function SignIn(){
    
    return(
        <>
            <div className="signIn-wrapper">
                <div className="logo"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"></img></div>
                <h1>Sign in to Twitter</h1>

                <div className="signIn-section">
                    <div className="google-btn">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj_H7E2tm9xMDrTrGoDVQHFweOsTYu6YXsjKqb5mSRw&s" alt="google-img"></img>
                        <h3>Sign in with Google</h3>
                    </div>

                    <div className="apple-btn">
                        <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/apple-icon.png" alt="apple-img"></img>
                        <h3>Sign in with Apple</h3>
                    </div>
                        
                    <div className="ruler">
                        <hr/> <span>Or</span> <hr/>
                    </div>

                    <div className="input-box">
                    <input type="text" id="input" placeholder="phone number, email, or user name..."></input>
                    </div>
                        
                    <button className="next-btn">Next</button>  

                    <button className="forgot-passBtn">Forgot password?</button>  
                </div>

                <div className="signup-text">
                    {/* <Link to="/singUp"><p>Dont have an account?<a href="#" > Sign Up</a></p> </Link> */}
                    <p>Dont have an account?<a href="#" > Sign Up</a></p>
                </div>
            </div>
        </>
    )
}