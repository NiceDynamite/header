import React from "react";
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="primary-footer">
                    <div className="aboutUs-container">
                        <h3 className="footer-title">About Us</h3>
                        <a href="/" className="footer-link">About Target</a>
                        <a href="/" className="footer-link">Careers</a>
                        <a href="/" className="footer-link">News & Blog</a>
                        <a href="/" className="footer-link">Target Brands</a>
                        <a href="/" className="footer-link">Bullseye Shop</a>
                        <a href="/" className="footer-link">Target's Coronavirus Response</a>
                        <a href="/" className="footer-link">Sustainability & ESG</a>
                        <a href="/" className="footer-link">Press Center</a>
                        <a href="/" className="footer-link">Advertise with Us</a>
                        <a href="/" className="footer-link">Investors</a>
                        <a href="/" className="footer-link">Affiliates & Partners</a>
                        <a href="/" className="footer-link">Suppliers</a>
                        <a href="/" className="footer-link">TargetPlus</a>
                    </div>
                    <div className="help-container">
                        <h3 className="footer-title">Help</h3>
                        <a href="/" className="footer-link">Target Help</a>
                        <a href="/" className="footer-link">Returns</a>
                        <a href="/" className="footer-link">Track Orders</a>
                        <a href="/" className="footer-link">Recalls</a>
                        <a href="/" className="footer-link">Contact Us</a>
                        <a href="/" className="footer-link">Feedback</a>
                        <a href="/" className="footer-link">Accessibility</a>
                        <a href="/" className="footer-link">Service & Fraud</a>
                        <a href="/" className="footer-link">Team Member Services</a>
                    </div>
                    <div className="stores-container">
                        <h3 className="footer-title">Stores</h3>
                        <a href="/" className="footer-link">Find a Store</a>
                        <a href="/" className="footer-link">Clinic</a>
                        <a href="/" className="footer-link">Pharmacy</a>
                        <a href="/" className="footer-link">Optical</a>
                        <a href="/" className="footer-link">More In-Store Services</a>
                    </div>
                    <div className="services-container">
                        <h3 className="footer-title">Services</h3>
                        <a href="/" className="footer-link">Target Circle</a>
                        <a href="/" className="footer-link">RedCard</a>
                        <a href="/" className="footer-link">Target App</a>
                        <a href="/" className="footer-link">Registry</a>
                        <a href="/" className="footer-link">Same Day Delivery</a>
                        <a href="/" className="footer-link">Order Pickup</a>
                        <a href="/" className="footer-link">Drive Up</a>
                        <a href="/" className="footer-link">Free 2-Day Shipping</a>
                        <a href="/" className="footer-link">Shipping & Delivery</a>
                        <a href="/" className="footer-link">More Services</a>
                    </div>
                </div>
                <div className="targetImg-container">
                    <img src="https://target.scene7.com/is/content/Target/GUEST_ca8f1d56-9000-4407-be78-2c33be983dab" />
                </div>
                <div className="subfooter">
                    <div className="subfooter-container">
                        <div className="media-container">
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaPinterestP /> </a>
                                </div>
                            </div>
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaFacebookF /> </a>
                                </div>
                            </div>
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaInstagram /> </a>
                                </div>
                            </div>
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaTwitter /> </a>
                                </div>
                            </div>
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaYoutube /> </a>
                                </div>
                            </div>
                            <div className="social-media-icon">
                                <div className="background-circle">
                                    <a href="/" className="social-icon"><FaTiktok /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-link-container">
                            <a href="/" className="subfooter-link">Terms</a>
                            <a href="/" className="subfooter-link">CA Supply Chain</a>
                            <a href="/" className="subfooter-link">Privacy</a>
                            <a href="/" className="subfooter-link">CA Privacy Rights</a>
                            <a href="/" className="subfooter-link">Do Not Sell My Personal Information</a>
                            <a href="/" className="subfooter-link">Interest Based Ads</a>
                            <p href="/" className="subfooter-copyright">TM & © 2022 Target Brands, Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}