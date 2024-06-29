import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServicesHandle = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getServices() {
      try {
        const response = await axios.get("http://localhost:8070/service/");
        setServices(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    getServices();
  }, []);

  return (
    <div className="services-container">
      
      <h1>Service List</h1>

      <div className="service-list row">
        
        {services.map((service) => (
          <div key={service._id} className="col-md-4">
            <div className="service-card border  p-3 mb-3"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:"white" }}>
              <h2>{service.Service_Name}</h2>
              <p> {service.Service_Description}</p>
              <p><strong>Status:</strong> {service.Service_status}</p>
              <div className="service-image-container">
                {service.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={`http://localhost:8070${image.path.replace('public', '/public')}`} 
                    alt={`Service Image ${index}`} 
                    style={{ width: '350px', height: '200px', objectFit: 'cover', transition: 'transform 0.3s', }}
                    className="service-image"
                  />
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHandle;
