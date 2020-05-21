import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Footer.css'


const Footer = () => {
    return (
        <footer id="footer" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <h4>Company Links</h4>
                        <ul>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Help Center</Link></li>
                            <li><Link to="">Out Team</Link></li>
                            <li><Link to="">Priacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="">Compare</Link></li>
                            <li><Link to="">My Account</Link></li>
                            <li><Link to="">My Wishlist</Link></li>
                            <li><Link to="">Orders Tracking</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h4>Help {`&`} Contact</h4>
                        <div className="socials">
                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link to=""><i className="fab fa-twitter"></i></Link>
                            <Link to=""><i className="fab fa-google-plus-g"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer