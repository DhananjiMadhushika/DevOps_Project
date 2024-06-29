import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'; // Make sure to import BrowserRouter
import './App.css';
import AddEmployee from './components/Admin/AddEmployee';
import AddGallery from './components/Admin/AddGallery';
import AddService from './components/Admin/AddService';
import AdminHeader from "./components/Admin/AdminHeader";
import AppointmentHandle from './components/Admin/AppoinmentHandle';
import Employee from './components/Admin/Employee';
import ServicesHandle from './components/Admin/ServicesHandle';
import About_Us from './components/Common/About_Us';
import CommonHeader from "./components/Common/CommonHeader";
import Footer from './components/Common/Footer';
import Gallery from './components/Common/Gallery';
import Home from './components/Common/Home';
import Login from './components/Common/Login';
import Services from './components/Common/Services';
import SignUp from './components/Common/SignUp';
import Appointment from './components/Customer/Appointment';
import CustomerHeader from './components/Customer/CustomerHeader';

function App() {
  const location = useLocation();
  const [role, setRole] = useState(true);

  useEffect(() => {
    // Determine the role based on the current URL path
    if (location.pathname.startsWith('/customer')) {
      setRole('customer');
    } else if (location.pathname.startsWith('/admin')) {
      setRole('admin');
    } else {
      setRole('common');
    }
  }, [location]);

  const Header = role === 'customer' ? CustomerHeader : role === 'admin' ? AdminHeader : CommonHeader;

  return (
    <div className='App'>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer_home" element={<Home />} />
        <Route path="/customer_appointment" element={<Appointment />} />
        <Route path="/aboutus" element={<About_Us />} />
        <Route path="/customer_aboutus" element={<About_Us />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customer_services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/addservice' element={<AddService />} />
        <Route path='/customer_gallery' element={<Gallery />} />
        <Route path='/add_gallery' element={<AddGallery/>}/>

        <Route path='/admin_appoinment' element={<AppointmentHandle />} />
        <Route path='/admin_services' element={<ServicesHandle />} />
        <Route path='/admin_add_services' element={<AddService/>}/>
        <Route path='/admin_employee' element={<Employee/>}/>
        <Route path='/admin_add_employee' element={<AddEmployee/>}/>
        
        


      </Routes>
      <Footer/>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
