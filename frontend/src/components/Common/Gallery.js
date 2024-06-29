import React from 'react';

const Gallery = () => {
  return (
    <div style={{backgroundColor:'#E7DBF1'}}>
      <div><h1 style={{textAlign:'center', fontFamily:'inherit'}}>Image Gallery</h1></div>
    <div id="carouselExampleControls" className="carousel slide bg-light" data-ride="carousel" style={{ maxWidth: '900px', margin: 'auto' }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src='./images/a.jpg'
            style={{ width: '600px', height: '500px', marginLeft: '150px', transition: 'transform 0.3s' }}
            className="d-block img-fluid rounded gallery-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src='./images/b.jpg'
            style={{ width: '600px', height: '500px', marginLeft: '150px', transition: 'transform 0.3s' }}
            className="d-block img-fluid rounded gallery-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src='./images/c.jpg'
            style={{ width: '600px', height: '500px', marginLeft: '150px', transition: 'transform 0.3s' }}
            className="d-block img-fluid rounded gallery-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src='./images/d.jpg'
            style={{ width: '600px', height: '500px', marginLeft: '150px', transition: 'transform 0.3s' }}
            className="d-block img-fluid rounded gallery-image"
            alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Gallery;
