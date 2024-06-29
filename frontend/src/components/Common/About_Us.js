import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AboutUs = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await axios.get("http://localhost:8070/employee/");
        setEmployees(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    getEmployees();
  }, []);
    return (
        <div style={styles.container}>
            <div style={styles.topSection}>
                <div style={styles.imageContainer}>
                    <div style={styles.imageWrapper}>
                        <img src="images/1.jpg" alt="About Us" style={styles.image} />
                    </div>
                </div>
                <div style={styles.textBox}>
                    <h1>About Us</h1>
                    <p>
                        At Salon Wave, we are dedicated to helping you discover your most beautiful self. Our team of experienced and talented stylists is passionate about hair, skincare, and beauty. We offer a wide range of services, from cutting-edge haircuts and vibrant hair color to rejuvenating facials and soothing massages. With a focus on customer satisfaction, we take pride in creating a relaxing and welcoming environment for our clients. We believe that everyone deserves to look and feel their best, and we're here to make that a reality. Come visit us and experience the ultimate pampering and beauty treatments. Your journey to a more beautiful you starts here at Salon Wave.
                    </p>
                </div>
            </div>
            <div >
     
            
        <div className="services-container">
          <h1>Our Team</h1>
          <h5>We have more than 20 experts in Hair and beauty </h5>
          <div className="service-list row">
            {employees.map((employee) => (
              <div key={employee._id} className="col-md-5">
                <div className="service-card p-3 mb-3" style={{ background: 'linear-gradient(to bottom right, #E7D7F6, #f3f3f3)', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', borderRadius: '10px' }}>
                  <div className="service-image-container" style={{ flex: '1', textAlign: 'center' }}>
                    <img
                      src={`http://localhost:8070${employee.images[0].path.replace('public', '/public')}`}
                      alt={`Service Image`}
                      style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                  </div>
                  <div style={{ flex: '1', textAlign: 'left' }}>
                    <h5>{employee.Name}</h5>
                    <p>{employee.Position}</p>
                    <p>{employee.Tel_No}</p>
                    <p>{employee.Email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ddc9f5',
    margin:'10px',
    padding: '20px',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '20px 0',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '500px',
    maxHeight: '500px',
    transition: 'transform 0.2s',
  },
  textBox: {
    flex: 1,
    padding: '20px',
    textAlign: 'left',
  },
  boxesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    padding: '20px',
    margin: '20px',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  boxImageWrapper: {
    overflow: 'hidden',
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    margin: '0 auto 10px',
  },
  boxImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
}

export default AboutUs;
