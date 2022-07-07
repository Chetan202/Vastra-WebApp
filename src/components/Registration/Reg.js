import React from "react";
import "./Reg.css";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";

function Reg() {
  return (
    <div className="container">
      <div className="main">
        {/* registerContainers */}
        <div className="loginContainer">
          <h2>I already have an account</h2>
          <p>Sign in with your email and password</p>
          <TextField
            id="demo-helper-text-aligned"
            className="emailLogin"
            label="Email"
          />
          <TextField
            type="password"
            id="demo-helper-text-aligned"
            className="passwordLogin"
            label="Password"
          />
          <div className="Signin-bttn">
            <Button className="Signin-simple-bttn" variant="contained">
              Signin
            </Button>
            {/* <button className="Signin-google-auth-bttn"></button> */}
          </div>
        </div>

        <div className="registerContainers">
          <h2>I do not have a account</h2>
          <p>Sign up with your email and password</p>
          <TextField
            id="demo-helper-text-aligned"
            label="Name"
            className="username"
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Email"
            className="emailReg"
            type="email"
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Password"
            type="password"
            className="passwordReg"
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Confirm Password"
            type="password"
            className="cnfemailReg"
          />
          <Button variant="contained" className="SigninButton">
            Signup
          </Button>
        </div>
        {/* containerLog */}
      </div>
    </div>
  );
}

export default Reg;
