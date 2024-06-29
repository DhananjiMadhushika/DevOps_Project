import React from 'react';
import { Link } from 'react-router-dom';

const CommonHeader = () => {

  const navLinkStyle = {
    borderRight: '1px solid #E238EC',
    paddingRight: '20px',
    color: 'white', 
  };

  const navbarStyle = {
    backgroundColor: 'black',
   
    
  };

  const homeLinkStyle = {
    ...navLinkStyle, 
    borderBottom: 'none', 
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
              <Link to="/home" className="nav-link active" style={homeLinkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link" aria-current="page" style={navLinkStyle}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={navLinkStyle}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={navLinkStyle}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CommonHeader;
