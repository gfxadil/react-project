import React from 'react';
import ReactDom from 'react-dom';
import greylogo from "../src/images/grey-logo.png";
import emailIcon from "../src/images/email-btn.png";
import phoneIcon from "../src/images/password-btn.png";
import reCapcha from "../src/images/recapcha.png";
import rightBanner from "../src/images/Group127121.jpg";
import { NavLink } from 'react-router-dom';

const SignIn = () => {
	return (
		<>
			<div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 p-0">
                        <div className="signup-block signin-block">
                            <NavLink to="/home"><img src={greylogo} className="img-fluid signup-logo" alt="logo" /></NavLink>
                            <h1 className="heading-style2">Hello, <strong>Welcome back!</strong></h1>
                            <p className="login-detial">To stay in touch with us, please login to your company name account.</p>
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
                                    <div className="row align-items-center remember-check">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input type="checkbox" checked="checked" className="form-check-input" id="remember" />
                                                <label className="form-check-label" for="remember">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <NavLink to="#" className="forgot-password">Forgot Password?</NavLink>
                                        </div>
                                    </div>
                                    <div className="form-group input-group">
                                        <input name="" className="form-control" type="text" />
                                        <img src={reCapcha} className="recaptcha-img img-fluid" alt="recapcha" />
                                    </div>
                                    <button type="submit" className="form-submit-btn">Login</button>
                                </form>
                                <p>New to Simpletransfert? <NavLink to="/signup">Signup</NavLink></p>
                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="signup-img signin-img">
                            <img src={rightBanner} className="img-fluid" alt="signup" />
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

export default SignIn;