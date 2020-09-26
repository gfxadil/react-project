import React from 'react';
import ReactDom from 'react-dom';
import greylogo from "../src/images/grey-logo.png";
import emailIcon from "../src/images/email-btn.png";
import phoneIcon from "../src/images/password-btn.png";
import reCapcha from "../src/images/recapcha.png";
import rightBanner from "../src/images/Group127121.jpg";
import googlePlus from "../src/images/google-plus.png";
import fbIcon from "../src/images/facebook-btn.png";
import { NavLink } from 'react-router-dom';

const SignUp = () => {
	return (
		<>
			<div className="container-fluid">
                <div className="row">  
                    <div className="col-md-5 p-0">
                        <div className="signup-block">
                            <NavLink to="/home"><img src={greylogo} className="img-fluid signup-logo" alt="logo" /></NavLink>
                            <h1 className="heading-style2">Signup</h1>
                            <ul className="signup-social">
                                <li className="google-btn">
                                    <NavLink to="#">
                                        <img src={googlePlus} className="img-fluid" alt="btn" /> Signup with Google	
                                    </NavLink>
                                </li>
                                <li className="fb-btn">
                                    <NavLink to="#">
                                        <img src={fbIcon} className="img-fluid" alt="btn" /> Signup with Facebook	
                                    </NavLink>
                                </li>
                            </ul>
                            <p className="text-center signup-email"><NavLink to="#">Or signup with email</NavLink></p>
                                <form className="signup-form">
                                    <div className="form-group input-group">
                                        <label>Email Address</label>
                                        <input name="" className="form-control" placeholder="johndoe@gmail.com" type="email" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src={emailIcon} className="img-fluid" alt="btn" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group input-group">
                                        <label>Password</label>
                                        <input name="" className="form-control" placeholder="123456789" type="password" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <img src={phoneIcon} className="img-fluid" alt="btn" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group input-group">
                                        <label>Phone#</label>
                                        <input name="" className="form-control" type="number" />
                                    </div>
                                    <div className="form-group input-group">
                                        <label>Profession</label>
                                        <select className="form-control">
                                            <option value="select">Select</option>
                                            <option value="select">Select1</option>
                                            <option value="select">Select2</option>
                                        </select>
                                    </div>
                                    <div className="form-group input-group">
                                        <input name="" className="form-control" type="text" />
                                        <img src={reCapcha} className="recaptcha-img img-fluid" alt="recapcha" />
                                    </div>
                                    <button type="submit" className="form-submit-btn">Signup</button>
                                </form>
                                <p>Bi signup, I agree to the Privacy Policy and Terms and Conditions</p>
                                <p>Have an account? <NavLink to="/signin">Signin</NavLink></p>
                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="signup-img">
                            <img src={rightBanner} className="img-fluid" alt="signup" />
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

export default SignUp;