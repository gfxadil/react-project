import React from 'react';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Contact = () => {
	return (
		<>
			<InnerPageHeader />
                <div className="subheader">
		            <h1 className="heading-style1">Contact</h1>
	            </div>
				<section className="content-section contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="contact-form">
                                    <h3 className="heading-style2">Send Message</h3>
                                    <form className="row">
                                    <div className="form-group col-md-6">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" name="first_name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>last Name</label>
                                        <input type="text" className="form-control" name="last_name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Phone#</label>
                                        <input type="tel" className="form-control" name="phone" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Description</label>
                                        <textarea className="form-control" name="description"></textarea>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="contact-submit">Submit</button>
                                    </div>	  
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 className="heading-style2">Contact Information</h3>
                                <div className="contact-info">
                                    <h5>Address</h5>
                                    <p>ABC dummy street, 456 apartment, <br />Orlando Florida, USA.</p>
                                    <h5>Phone#</h5>
                                    <p><NavLink to="tel:+12345670890">+1 234 5670 890</NavLink></p>
                                    <h5>Email</h5>
                                    <p><NavLink to="mailto:info@gmail.com">info@gmail.com</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
			<Footer	/>
		</>
	)
}

export default Contact;