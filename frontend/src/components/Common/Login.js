import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [UserName, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    async function checkData(e) {
        e.preventDefault();

        const newUser = {
            UserName,
            Password
        };

        try {
            await axios.post("http://localhost:8070/user/getUser/login", newUser).then((res) => {
                if (res.data === "exist") {
                    alert("Success");
                    navigate(`/customer_home`);
                } else if (res.data === "notexist") {
                    if (UserName === "admin123" && Password === "1234") {
                        navigate("/admin_appoinment");
                    } else {
                        alert("User has not signed up");
                    }
                }
            });
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return(
        <div className="signup-container">
            <div className="signup-wrapper">
                <h1 className="signup-heading">Login</h1>
                <form className="signup-form" onSubmit={checkData}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="text"
                            className="form-control"
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
                            type="password"
                            
                            placeholder="Enter your password"
                            required 
                            className="form-control"
                           onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>

                    <Link className="nav-link" to="/signup">
                        If you don't have an account, please SignUp first
                    </Link>
                </form>
            </div>
        </div>
    )


}

export default Login;