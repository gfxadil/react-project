import React from 'react';
import doctorList1 from "../src/images/Group1238.png";
import doctorList2 from "../src/images/Group1239.png";
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';

const ViewAllDoctors = () => {
	return (
		<>
			<InnerPageHeader />
                <div className="subheader">
                    <h1 className="heading-style1">Top Doctors</h1>
                </div>
                <section className="faqs-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-9">
                                <select name="" id="" className="form-control our-specialist-list mb-5">
                                    <option value="">Our Specialist</option>
                                    <option value="">Lorem ipsum</option>
                                    <option value="">Lorem ipsum</option>
                                    <option value="">Lorem ipsum</option>
                                </select>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4 mb-3">
                                <img src={doctorList1} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList2} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList1} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList2} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList1} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList2} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList1} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={doctorList2} className="img-fluid mb-2" alt="doctor" />
                                <h5>Neque porro quisquam</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
                            </div>
                        </div>
                    </div>
                </section>
			<Footer	/>
		</>
	)
}

export default ViewAllDoctors;