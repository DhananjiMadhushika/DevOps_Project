import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [UserName, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        const newUser = {
            UserName: UserName,
            Password: Password
        };

        try {
            const response = await axios.post("http://localhost:8070/user/addUser", newUser);

            if (response.data === "exist") {
                alert("User already exists");
            } else if(response.data === "notexist"){
                alert("You are successfully SignUp the system!!!!")
                navigate("/login");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        
            <div className="signup-container" >
              <div className="signup-wrapper">
                <h1 className="signup-heading">SignUp</h1>
                <form className="signup-form" style={{ width: '500px', padding: '20px', height:'400px' }}> 
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
          
                  <button type="submit" className="btn btn-primary" onClick={sendData}>
                    Sign Up
                  </button>

                  <Link className="nav-link" to="/login">
                        If you have an account, please SignUp Login
                    </Link>
                </form>
              </div>
            </div>
          );
          
    
};

export default SignUp;
