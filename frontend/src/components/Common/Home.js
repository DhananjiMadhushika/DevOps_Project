import React from 'react';
import AboutUs from './About_Us';
import ServicesHandle from './Services';


const Home = () => {
  
  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    color: 'black', 
    padding: '20px',
    borderRadius: '10px', 
    width: '300px',
    height: '500px', 
    position: 'absolute', 
    top: '110px', 
    left: '10px', 
  };

  return (
    <div>
      <section className='home'>
        <div className='content' style={boxStyle}>
          <span>Hi</span>
          <h1 style={{animation:'fadeInUp 1s ease-out'}}>We Make You Beautiful......</h1>
          
          <p>We are your premier destination for all things beauty and relaxation. Our salon is designed to be a haven where you can escape from the daily grind and indulge in a variety of pampering treatments. Our skilled and friendly team of professionals is committed to enhancing your natural beauty and helping you unwind in style.</p>
        </div>
      </section>
      <div>
        <AboutUs></AboutUs>
      </div>
      <div>
        <ServicesHandle></ServicesHandle>
      </div>
     
    </div>
  );
}

export default Home;
