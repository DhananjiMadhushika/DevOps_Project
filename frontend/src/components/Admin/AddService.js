import axios from 'axios';
import React, { useState } from 'react';

function AddService() {
  const [newService, setNewService] = useState({
    Service_Name: '',
    Service_Category: '',
    Service_Description: '',
    Service_Duration: '',
    Service_Price: '',
    Product: '',
    Service_status: '',
  });

  const [imageFiles, setImageFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };
  

  const addService = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('Service_Name', newService.Service_Name);
    formData.append('Service_Category', newService.Service_Category);
    formData.append('Service_Description', newService.Service_Description);
    formData.append('Service_Duration', newService.Service_Duration);
    formData.append('Service_Price', newService.Service_Price);
    formData.append('Product', newService.Product);
    formData.append('Service_status', newService.Service_status);

    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('images', imageFiles[i]);
    }

    axios
      .post('http://localhost:8070/service/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Service added');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div   style={{  paddingLeft: "300px",height:"870px",backgroundColor:'#e7dcf5' }}>
      <div style={{marginLeft:'270px'}}><h1>Add Services</h1></div>
      <form encType="multipart/form-data" style={{
      backgroundColor: "rgba(255, 255, 255, 0.8)", 
      padding: "15px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", 
      marginTop:"5px", marginRight:'200px',
      width:'750px', height:"780px"}}>
        <div class="form-group">
          <label for="exampleInputEmail1">Service Name</label>
          <input
            class="form-control"
            type="text"
            value={newService.Service_Name}
            onChange={(e) =>
              setNewService({
                ...newService,
                Service_Name: e.target.value,
              })
            }
          />
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Service Category</label>
        <input class="form-control" type="text" 
           value={newService.Service_Category}
           onChange={(e)=>
            setNewService({
              ...newService,
              Service_Category: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Service Description</label>
        <input class="form-control" type="text" 
           value={newService.Service_Description}
           onChange={(e)=>
            setNewService({
              ...newService,
              Service_Description: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Service Duration</label>
        <input class="form-control" type="text" 
           value={newService.Service_Duration}
           onChange={(e)=>
            setNewService({
              ...newService,
              Service_Duration: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Service Price</label>
        <input class="form-control" type="text" 
           value={newService.Service_Price}
           onChange={(e)=>
            setNewService({
              ...newService,
              Service_Price: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Product</label>
        <input class="form-control" type="text" 
           value={newService.Product}
           onChange={(e)=>
            setNewService({
              ...newService,
              Product: e.target.value,
            })
           }/>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Service Status</label>
        <input class="form-control" type="text" 
           value={newService.Service_status}
           onChange={(e)=>
            setNewService({
              ...newService,
              Service_status: e.target.value,
            })
           }/>
        </div>
        <div className="form-group">
          <label htmlFor="images">Service Image</label>
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

        <button type="submit" onClick={addService}>Add Service</button>
      </form>
    </div>
  );
}

export default AddService;