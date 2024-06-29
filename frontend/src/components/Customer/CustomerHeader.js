import React from 'react';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom';
const CustomerHeader = () => {
  const navigate = useNavigate(); 
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const navLinkStyle = {
    borderRight: '1px solid #E238EC',
    paddingRight: '20px',
    color: 'white', 
    textDecoration: 'none', 
  };

  const navbarStyle = {
    backgroundColor: 'black', 
   
  };

  const homeLinkStyle = {
    ...navLinkStyle, 
    borderBottom: 'none', 
  };

  const handleLogout = () => {
    removeCookie("token"); // Assuming you have a function to remove the token cookie
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <li className="nav-item">
          <img src='./images/image.png' style={{ width: '110px' }} className="nav-image" alt="Salon Image" />
        </li>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{marginTop:"7px",}}>
              <Link to="/customer_home" className="nav-Link" style={homeLinkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/customer_aboutus" className="nav-link" style={navLinkStyle}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/customer_services" className="nav-link" style={navLinkStyle}>Services</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/customer_appointment" className="nav-link" style={navLinkStyle}>Appointment</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" style={{backgroundColor:'transparent', border:'none',color:"white"}}  onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomerHeader;
