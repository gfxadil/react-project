import React from 'react';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Setting extends React.Component {
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
                                    <h2 className="heading-style2">Setting</h2>
                                    <div className="contact-form profile-setting-form">
                                        <form className="row">
                                            <div className="form-group col-md-6">
                                                <label>Name</label>
                                                <input type="text" className="form-control" name="name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Phone#</label>
                                                <input type="tel" className="form-control" name="phone" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Email</label>
                                                <input type="email" className="form-control" name="email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Old Password</label>
                                                <input type="password" className="form-control" name="o_pass" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>New Password</label>
                                                <input type="password" className="form-control" name="n_pass" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Confirm Password</label>
                                                <input type="password" className="form-control" name="c_pass" />
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" className="contact-submit mt-3">Update</button>
                                            </div>	  
                                        </form>
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
export default Setting;