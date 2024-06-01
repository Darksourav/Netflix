import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {


const[signState, setSignstate] =useState(

"Sign In"

)


  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
 {setSignstate==="Sign Up" ?<input type="text" placeholder="Your name" />:null}
          
          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">



        {signState==="Sign In"? <p>
            New to Netflix ? <span> Sign up Now</span>
          </p>:<p>
          Already have account ?
            <span> Sign in Now</span>
          </p>
        }
         
          
        </div>
      </div>
    </div>
  );
};

export default Login;
