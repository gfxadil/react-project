import React from 'react';
import InnerPageHeader from './InnerPageHeader';
import masterCard from "../src/images/master.png";
import Footer from './Footer';
import Sidebar from './Sidebar';

class Invoice extends React.Component {
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
                                    <h2 className="heading-style2">Invoices</h2>
                                    <div className="table-responsive">
                                        <table className="table table-striped invoice-table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Description</th>
                                                    <th>Service Period</th>
                                                    <th>Payment Method</th>
                                                    <th>Subtotal</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                                <tr>
                                                    <td>8/9/2020</td>
                                                    <td>Lorem Ipsum is simply...</td>
                                                    <td>8/9/20-9/8/20</td>
                                                    <td><img src={masterCard} className="img-fluid" alt="card" /> **** **** **** 0164</td>
                                                    <td>INR295.76 <br />(+INR53.34 GST)</td>
                                                    <td>INR295.76</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
export default Invoice;