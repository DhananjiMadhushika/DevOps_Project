import axios from 'axios';
import React, { useState } from 'react';

function AddEmployee() {
  const [newEmployee, setNewEmployee] = useState({
    Name: '',
    Position: '',
    Tel_No: '',
    Email: '',
    
  });

  const [imageFiles, setImageFiles] = useState([]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewEmployee({
  //     ...newEmployee,
  //     [name]: value,
  //   });
  // };

  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };
  

  const addEmployee = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('Name', newEmployee.Name);
    formData.append('Position', newEmployee.Position);
    formData.append('Tel_No', newEmployee.Tel_No);
    formData.append('Email', newEmployee.Email);
    

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('images', imageFiles[i]);
    }

    axios
      .post('http://localhost:8070/employee/add_employee', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Employee added');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div  style={{  paddingLeft: "300px",height:"700px",backgroundColor:'#e7dcf5' }}>
      <div style={{marginLeft:'270px'}}><h1>Add Employees</h1></div>
      <form encType="multipart/form-data" style={{
      backgroundColor: "rgba(255, 255, 255, 0.8)", 
      padding: "15px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", 
      marginTop:"5px", marginRight:'200px',
      width:'750px', height:"550px"}}>
        <div class="form-group">
          <label for="exampleInputEmail1">Employee Name</label>
          <input
            class="form-control"
            type="text"
            value={newEmployee.Name}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                Name: e.target.value,
              })
            }
          />
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Position</label>
        <input class="form-control" type="text" 
           value={newEmployee.Position}
           onChange={(e)=>
            setNewEmployee({
              ...newEmployee,
              Position: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Tel_NO</label>
        <input class="form-control" type="text" 
           value={newEmployee.Tel_No}
           onChange={(e)=>
            setNewEmployee({
              ...newEmployee,
              Tel_No: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input class="form-control" type="text" 
           value={newEmployee.Email}
           onChange={(e)=>
            setNewEmployee({
              ...newEmployee,
              Email: e.target.value,
            })
           }/>
        </div>

        <div className="form-group">
          <label htmlFor="images">Employee Image</label>
          <input
            className="form-control"
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
        </div>

        <button type="submit" onClick={addEmployee}>Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;