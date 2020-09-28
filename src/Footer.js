import React from 'react';
import footerLogo from "../src/images/Group1204.png";
import newsletterIcon from "../src/images/send.png";
import facebookIcon from "../src/images/facebook.png";
import instagramIcon from "../src/images/instagram.png";
import youtubeIcon from "../src/images/you.png";
import dummyVideo from "../src/images/dummy-video.mp4";
import twitterIcon from "../src/images/twitter.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
     <>
        <footer>
            <div className="container">
                <div className="footer-newsletter">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3>Subscribe Newsletter</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit temto tam rem aperiam.</p>
                        </div>
                        <div className="col-md-6">
                            <form action="" className="subscribe-email">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email Id" />
                                    <span className="input-group-btn">
                                       <button className="btn" type="submit">
                                           <img src={newsletterIcon} className="img-fluid" alt="email" /> 
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-listing">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={footerLogo} className="img-fluid footer-logo" alt="logo" />
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed  ut labore et dolore.</p>
                            <p>Sed ut  neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                        </div>
                        <div className="col-md-3 pl-5">
                            <h4>Our Links</h4>
                            <ul>
                                <li><NavLink to="/">Feeds</NavLink></li>
                                <li><NavLink to="/">Impressum</NavLink></li>
                                <li><NavLink to="/">Cookies</NavLink></li>
                                <li><NavLink to="/">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Support</h4>
                            <ul>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/">Faq's</NavLink></li>
                                <li><NavLink to="/">Terms &nbps; Condition</NavLink></li>
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><NavLink to="/"><img src={facebookIcon} className="img-fluid" alt="social" /> Facebook</NavLink></li>
                                <li><NavLink to="/"><img src={instagramIcon} className="img-fluid" alt="social" /> Instagram</NavLink></li>
                                <li><NavLink to="/"><img src={youtubeIcon} className="img-fluid" alt="social" /> YouTube</NavLink></li>
                                <li><NavLink to="/"><img src={twitterIcon} className="img-fluid" alt="social" /> Twitter</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p>Copyright ©2020 Logo. All rights reserved</p>
                </div>
            </div>
        </footer>
 
        <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
            <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
                <div class="modal-content-full-width modal-content ">
                    <div class=" modal-header-full-width modal-header text-center">
                        <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <video width="100%" autoPlay controls>
                            <source src={dummyVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}

export default Footer;