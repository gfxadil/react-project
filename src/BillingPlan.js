import React from 'react';
import InnerPageHeader from './InnerPageHeader';
import masterCard from "../src/images/master.png";
import Footer from './Footer';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

class BillingPlan extends React.Component {
    render() { 
        return (
          <>
            <InnerPageHeader />
                <section className="inner-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            <div className="col-md-9">
                                <div className="right-content-area">
                                    <h2 className="heading-style2">Billing <span>Plan</span></h2>
                                    <div className="billing-listing">
                                        <div className="payment-block">
                                            <h6>Email</h6>
                                            <h4>info@gmail.com</h4>
                                            <span><NavLink to="#">Change account email</NavLink></span>
                                        </div>
                                        <div className="payment-block">
                                            <h6>Password</h6>
                                            <h4>***********</h4>
                                            <span><a href="#">Change password</a></span>
                                        </div>
                                        <div className="payment-block">
                                            <h6>Phone#</h6>
                                            <h4>09915741593</h4>
                                            <span><NavLink to="#">Change phone number</NavLink></span>
                                        </div>

                                        <h3 className="heading-style2">Card <span>Detail</span></h3>
                                        <div className="payment-block pb-4">
                                            <h5><img src={masterCard} className="img-fluid master-card" alt="card" /> **** **** **** 0164</h5>
                                            <span><NavLink to="#">Update payment info <br />Billing details</NavLink></span>
                                        </div>

                                        <h3 className="heading-style2">Plan <span>Details</span></h3>
                                        <div className="payment-block">
                                            <h6>Premium</h6>
                                            <h4>Ultra HD</h4>
                                            <span><NavLink to="#">Change Plan</NavLink></span>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer	/>
		  </>
	    )
    }
}
export default BillingPlan;