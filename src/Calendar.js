import React from 'react';
import nextBlueIcon from "../src/images/next-1.png";
import likeIcon from "../src/images/like.png";
import shareIcon from "../src/images/share.png";
import eventImg1 from "../src/images/images.jpg";
import eventImg2 from "../src/images/images-1.jpg";
import eventImg3 from "../src/images/feeds1.png";
import { NavLink } from 'react-router-dom';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';
import Sidebar from './Sidebar';
import TopSearchAndFilter from './TopSearchAndFilter';

class Calendar extends React.Component {
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
                                    <div className="medical-block">
                                        <div className="row mb-2">
                                            <div className="col-md-9">
                                                <h2 className="heading-style2">Current <span>Events</span></h2>
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
                                                <h2 className="heading-style2">Future <span>Events</span></h2>
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
export default Calendar;