import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await axios.get("http://localhost:8070/employee/");
        setEmployees(response.data);
      } catch (error) { 
        console.error("Error fetching employee:", error.message);
      }
    }
    getEmployees();
  }, []);

  const deleteEmployees = async (employeeId, employeeName) => {
    try {
      const response = await axios.delete(`http://localhost:8070/employee/delete_employee/${employeeId}`);
      if (response.data.status === 'ok') {
        alert(`Employee ${employeeName} deleted successfully.`);
        // Update the services state to remove the deleted service
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeId));
      } else {
        alert('Failed to delete the employee.');
      }
    } catch (error) {
      console.error("Error deleting employee:", error.message);
      alert('Error deleting the employee: ' + error.message);
    }
  };

  return (
    <div>
      <div>
        <div className="admin-window">
          <ul className="navbar-nav ml-auto">
            <li>
            <Link to={"/admin_add_employee"}><span>Add Employee</span></Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="service-list-heading">Employee List</h1>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Tel_NO</th>
            <th>Email</th>
            <th>Images</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.Name}</td>
              <td>{employee.Position}</td>
              <td>{employee.Tel_No}</td>
              <td>{employee.Email}</td>
              <td>
              <div>
  {employee.images.map((image, index) => (
    <img 
      key={index} 
      src={`http://localhost:8070${image.path.replace('public', '/public')}`}
      alt={`Service ${employee.Name} Image ${index}`} 
      style={{ maxWidth: '50px', maxHeight: '50px' }} // Adjust dimensions as needed
    />
  ))}
</div>

              </td>
              <td>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteEmployees(employee._id, employee.Name)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
