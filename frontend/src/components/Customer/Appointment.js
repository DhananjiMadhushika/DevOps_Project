
import axios from "axios";
import React, { useState } from "react";

const Appointment = () => {
    const [name, setName] = useState("");
    const [telephone_Number, setTelephone_Number] = useState("");
    const [category, setCategory] = useState("");
    const [service, setService] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [level, setLevel] = useState("");

    function sendData(e){
      e.preventDefault();

      const newAppoinment = {
          Client_Name: name,
          Client_TelNo: telephone_Number,
          Category: category,
          Service_name: service,
          Branch: location,
          Date: date,
          Time: time,
          Service_Level: level
        }


      axios.post("http://localhost:8070/appoinment/addAppoinment", newAppoinment)
        .then(() => {
         alert("Appointment added");
           setName("");
           setTelephone_Number("");
           setCategory("");
           setService("");
           setLocation("");
           setDate("");
           setTime("");
           setLevel("");
        })
        .catch((err) => {
        alert(err.message);
        });

    }


  return (

    <div className="appointment-container"  style={{ border: "1px solid black", padding: "10px",height:"570px" }}>
      
    
  <div >
  
  <form  onSubmit={sendData}
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.8)", 
      padding: "15px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", 
      marginTop:"5px",
      width:'1000px', height:"500px"}}>  
      

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'#1f0840' }}>
    <h2>Appointment</h2>
</div>

      <div className="form-row" style={{ marginBottom: 10 }}>
      <div className="form-group col-md-6 ">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input className="form-control" type="text" placeholder="Enter Your Name" 
           onChange={(e) =>{
            setName(e.target.value);
        }}/>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleInputEmail1">Telephone Number</label>
        <input class="form-control" type="text" placeholder="Enter Your Telephone Number" 
          onChange={(e) =>{
            setTelephone_Number(e.target.value);
      }}/>
      </div>

      </div>
      <div className="form-row" style={{ marginBottom: 10 }}>
      <div class="form-group col-md-6">
        <label for="exampleFormControlSelect1">Category</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Category"
        onChange={(e) =>{
          setCategory(e.target.value);
      }}> 
          <option>Hair</option>
          <option>Beauty</option>
          
        </select>
      </div>

      <div class="form-group col-md-6">
        <label for="exampleFormControlSelect1">Service</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Service"
            onChange={(e) =>{
              setService(e.target.value);
            }}>
          <option>Hair Cuts</option>
          <option>Hair Colors</option>
          <option>Hair Setting</option>
          <option>Hair Extention</option>
          <option>Hair Treatment</option>
          <option>Facial</option>
          <option>Makeup</option>
          <option>Manicure</option>
          <option>Pedicure</option>
          
        </select>
      </div>
      </div>
<div className="form-row" style={{ marginBottom: 10 }}>
<div class="form-group col-md-6">
        <label for="exampleFormControlSelect1">Location</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Category"
          onChange={(e) =>{
            setLocation(e.target.value);
        }}> 
          <option>Angunukolapelassa</option>
          <option>Tangalle</option>
          
        </select>
      </div>
  
      <div class="form-group col-md-6">
        <label for="exampleInputEmail1">Date</label>
        <input class="form-control" type="date" placeholder="Select the Date"
        onChange={(e) =>{
          setDate(e.target.value);
      }} />
      </div>
</div>
      
<div className="form-row" style={{ marginBottom: 10 }}>
<div class="form-group col-md-6">
        <label for="exampleInputEmail1">Time</label>
        <input class="form-control" type="time" placeholder="Select the Date"
        onChange={(e) =>{
          setTime(e.target.value);
      }} />
      </div>

      <div class="form-group col-md-6">
        <label for="exampleFormControlSelect1">Level</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="Select Level"
          onChange={(e) =>{
            setLevel(e.target.value);
          }}> 
          <option>Level 1</option>
          <option>Level 2</option>
          <option>Level 3</option>
          
        </select>
      </div>
</div>
  
      <div style={{marginLeft:"900px"}}>
        <button>Submit</button>
      </div>
    </form>
    
  </div>
 </div>
  );
}

export default Appointment;














