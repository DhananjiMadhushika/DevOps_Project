import React from 'react';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate(); 
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token"); // Assuming you have a function to remove the token cookie
    navigate("/login"); // Redirect to the login page after logout
  };


  const navLinkStyle = {
    borderRight: '1px solid #E238EC',
    paddingRight: '20px',
    color: 'white', 
    textDecoration: 'none',
  };

  const navbarStyle = {
    backgroundColor: 'black', 
    
  };

  const noBorderRight = {
    paddingRight: '20px',
    color: 'white', 
    textDecoration: 'none',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <li className="nav-item">
          <img src='./images/image1.jpg' style={{ width: '110px' }} className="nav-image" alt="Salon Image" />
        </li>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to = "/admin_appoinment" className="nav-link" style={{ ...navLinkStyle, borderBottom: 'none' }}>Appoinment</Link>
            </li>

            <li className="nav-item">
              <Link to = "/admin_services" className="nav-link" style={{ ...navLinkStyle, borderBottom: 'none' }}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin_employee" className="nav-link" style={navLinkStyle}>Employee</Link>
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

export default AdminHeader;
