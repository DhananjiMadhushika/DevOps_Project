import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black' }} className="text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src='./images/image.png' alt="Salon Logo" style={{ Width: '250px', height: '180px' }} />
                    </div>
                    <div className="col-md-4" style={{marginTop:'35px',marginLeft:'30px'}}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Salon Street, City, Country
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2" style={{marginTop:'35px',marginLeft:'30px'}}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li style={{ marginRight: '10px' }}>
                                <a href="https://www.facebook.com/profile.php?id=100068238101139&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </li>
                            <li style={{ marginRight: '10px' }}>
                                <a href="https://youtube.com/@nandunsudheera5687" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                                </a>
                            </li>
                            <li style={{ marginRight: '10px' }}>
                                <a href="https://www.instagram.com/invites/contact/?i=ch9w3t89shsd&utm_content=3cqmf0e " target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
