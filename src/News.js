import React from 'react';
import nextBlueIcon from "../src/images/next-1.png";
import likeIcon from "../src/images/like.png";
import shareIcon from "../src/images/share.png";
import VideoImgModal from "../src/images/video-img-modal.png";
import eventImg1 from "../src/images/images.jpg";
import eventImg2 from "../src/images/images-1.jpg";
import eventImg3 from "../src/images/feeds1.png";
import newsEvent1 from "../src/images/event1.jpg";
import newsEvent2 from "../src/images/event2.jpg";
import newsEvent3 from "../src/images/event3.jpg";
import calendarIcon from "../src/images/calendar-icon.png";
import pinIcon from "../src/images/pin-icon.png";
import { NavLink } from 'react-router-dom';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';
import TopSearchAndFilter from './TopSearchAndFilter';

class News extends React.Component {
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
                                    <div className="upcoming-events-block">
                                        <div className="row mb-2">
                                            <div className="col-md-9">
                                                <h2 className="heading-style2">Upcoming <span>Events</span></h2>
                                            </div>
                                            <div className="col-md-3">
                                                <NavLink to="#" className="hvr-icon-wobble-horizontal view-all-btn">View all <img src={nextBlueIcon} className="img-fluid hvr-icon" alt="arrow" /></NavLink>
                                            </div>	
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div class="theme-block-style medical-list">
                                                    <img src={newsEvent1} class="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul class="block-style">
                                                        <li>
                                                            <img src={calendarIcon} class="img-fluid" alt="icon" />
                                                            <h6>08-24-2020</h6>
                                                        </li>
                                                        <li>
                                                            <img src={pinIcon} class="img-fluid pin-img" alt="icon" />
                                                            <h6>Florida, USA</h6>
                                                        </li>
                                                    </ul>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem.</p>
                                                    <ul class="event-detail-btn">
                                                        <li><NavLink to="/eventdetail">More Detail</NavLink></li>
                                                        <li><NavLink to="/home">Buy Ticket</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div class="theme-block-style medical-list">
                                                    <img src={newsEvent2} class="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul class="block-style">
                                                        <li>
                                                            <img src={calendarIcon} class="img-fluid" alt="icon" />
                                                            <h6>08-24-2020</h6>
                                                        </li>
                                                        <li>
                                                            <img src={pinIcon} class="img-fluid pin-img" alt="icon" />
                                                            <h6>Florida, USA</h6>
                                                        </li>
                                                    </ul>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem.</p>
                                                    <ul class="event-detail-btn">
                                                        <li><NavLink to="/eventdetail">More Detail</NavLink></li>
                                                        <li><NavLink to="/home">Buy Ticket</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div class="theme-block-style medical-list">
                                                    <img src={newsEvent3} class="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul class="block-style">
                                                        <li>
                                                            <img src={calendarIcon} class="img-fluid" alt="icon" />
                                                            <h6>08-24-2020</h6>
                                                        </li>
                                                        <li>
                                                            <img src={pinIcon} class="img-fluid pin-img" alt="icon" />
                                                            <h6>Florida, USA</h6>
                                                        </li>
                                                    </ul>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem.</p>
                                                    <ul class="event-detail-btn">
                                                        <li><NavLink to="/eventdetail">More Detail</NavLink></li>
                                                        <li><NavLink to="/home">Buy Ticket</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="medical-block">
                                        <div className="row mb-2">
                                            <div className="col-md-9">
                                                <h2 className="heading-style2">Upcoming <span>Publications</span></h2>
                                            </div>
                                            <div className="col-md-3">
                                                <NavLink to="#" className="hvr-icon-wobble-horizontal view-all-btn">View all <img src={nextBlueIcon} className="img-fluid hvr-icon" alt="arrow" /></NavLink>
                                            </div>	
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="theme-block-style medical-list">
                                                    <img src={eventImg1} className="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="theme-block-style medical-list">
                                                    <img src={eventImg2} className="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="theme-block-style medical-list">
                                                    <img src={eventImg3} className="img-fluid" alt="medical" />
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="medical-block">
                                        <div className="row mb-2">
                                            <div className="col-md-9">
                                                <h2 className="heading-style2">Upcoming <span>Videos</span></h2>
                                            </div>
                                            <div className="col-md-3">
                                                <NavLink to="#" className="hvr-icon-wobble-horizontal view-all-btn">View all <img src={nextBlueIcon} className="img-fluid hvr-icon" alt="arrow" /></NavLink>
                                            </div>	
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">		 
                                                <div className="theme-block-style">
                                                    <NavLink to="#" data-toggle="modal" data-target="#videoModal">
                                                        <img src={VideoImgModal} className="img-fluid" alt="medical" />										
                                                    </NavLink>		
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div className="theme-block-style">
                                                    <NavLink to="#" data-toggle="modal" data-target="#videoModal">
                                                        <img src={VideoImgModal} className="img-fluid" alt="medical" />										
                                                    </NavLink>		
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div className="theme-block-style">
                                                    <NavLink to="#" data-toggle="modal" data-target="#videoModal">
                                                        <img src={VideoImgModal} className="img-fluid" alt="medical" />										
                                                    </NavLink>		
                                                    <h4>Neque porro quisquam</h4>
                                                    <ul className="block-style">
                                                        <li>
                                                            <img src={likeIcon} className="img-fluid" alt="icon" />
                                                            <h6>137</h6>
                                                        </li>
                                                        <li>
                                                            <img src={shareIcon} className="img-fluid" alt="icon" />
                                                            <h6>200</h6>
                                                        </li>
                                                    </ul>
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
export default News;