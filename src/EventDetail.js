import React from 'react';
import EventDetailImg from "../src/images/greys-anatomy.jpg";
import calendarIcon from "../src/images/calendar-icon.png";
import pinIcon from "../src/images/pin-icon.png";
import { NavLink } from 'react-router-dom';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';
import TopSearchAndFilter from './TopSearchAndFilter';

class EventDetail extends React.Component {
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
                                    <TopSearchAndFilter />
                                    <div className="upcoming-events-block event-detail-block">
                                        <div className="row mb-2">
                                            <div className="col-md-12">
                                                <h2 className="heading-style2">Event <span>Detail</span></h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="theme-block-style medical-list">
                                                    <img src={EventDetailImg} className="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={calendarIcon} className="img-fluid" alt="icon" />
                                                            <h6>08-24-2020 -3:00 pm</h6>
                                                        </li>
                                                        <li>
                                                            <img src={pinIcon} className="img-fluid pin-img" alt="icon" />
                                                            <h6>Mandalay Bay Level 3, Palm A, Florida, USA</h6>
                                                        </li>
                                                    </ul>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <br /><br />Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                                    <NavLink to="#" className="ticket-btn">Buy Ticket</NavLink>
                                                </div>
                                            </div>
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
export default EventDetail;