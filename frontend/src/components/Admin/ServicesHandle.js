import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesHandle = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getServices() {
      try {
        const response = await axios.get("http://localhost:8070/service/");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    }
    getServices();
  }, []);

  const deleteService = async (serviceId, serviceName) => {
    try {
      const response = await axios.delete(`http://localhost:8070/service/delete/${serviceId}`);
      if (response.data.status === 'ok') {
        alert(`Service ${serviceName} deleted successfully.`);
        // Update the services state to remove the deleted service
        setServices(prevServices => prevServices.filter(service => service._id !== serviceId));
      } else {
        alert('Failed to delete the service.');
      }
    } catch (error) {
      console.error("Error deleting service:", error.message);
      alert('Error deleting the service: ' + error.message);
    }
  };

  return (
    <div>
      <div>
        <div className="admin-window">
          <ul className="navbar-nav ml-auto">
            <li>
            <Link to={"/admin_add_services"}><span>Add Services</span></Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="service-list-heading">Service List</h1>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Service Name</th>
            <th>Service Category</th>
            <th>Service Description</th>
            <th>Service Duration</th>
            <th>Service Price</th>
            <th>Product</th>
            <th>Service Status</th>
            <th>Images</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.Service_Name}</td>
              <td>{service.Service_Category}</td>
              <td>{service.Service_Description}</td>
              <td>{service.Service_Duration}</td>
              <td>{service.Service_Price}</td>
              <td>{service.Product}</td>
              <td>{service.Service_status}</td>
              <td>
              <div>
  {service.images.map((image, index) => (
    <img 
      key={index} 
      src={`http://localhost:8070${image.path.replace('public', '/public')}`}
      alt={`Service ${service.Service_Name} Image ${index}`} 
      style={{ maxWidth: '50px', maxHeight: '50px' }} // Adjust dimensions as needed
    />
  ))}
</div>

              </td>
              <td>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteService(service._id, service.Service_Name)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesHandle;
