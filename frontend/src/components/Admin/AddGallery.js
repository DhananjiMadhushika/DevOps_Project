import React, { useState } from 'react';

const AddGallery = () => {
 const {file, setFile} = useState()
 const handleUpload = (e)=>{
    console.log(file);
}
  return (
    <div>
        <input type='file' onChange={e=> setFile(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default AddGallery;
