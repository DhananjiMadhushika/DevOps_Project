
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppointmentHandle = () => {
  
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
     axios.get("http://localhost:8070/appoinment/viewAppoinment").then((res)=>{
        setAppointments(res.data);
     }).catch((err)=>{
        alert(err.message);
     })
    }
    getAppointments();
  }, []);

  return (
    <div>
    <h1 className="service-list-heading">Appointment List</h1>
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>Client Name</th>
          <th>Client TelNo</th>
          <th>Service Name</th>
          <th>Branch</th>
          <th>Date</th>
          <th>Time</th>
          <th>Service Level</th>
          
        </tr>
      </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.Client_Name}</td>
              <td>{appointment.Client_TelNo}</td>
              <td>{appointment.Service_name}</td>
              <td>{appointment.Branch}</td>
              <td>{appointment.Date}</td>
              <td>{appointment.Time}</td>
              <td>{appointment.Service_Level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentHandle;
