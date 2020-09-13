import React from 'react';
import dummyVideo from "../src/images/dummy-video.mp4";
import videoPoster from "../src/images/video-poster.jpg";
import medicalImg1 from "../src/images/doc.jpg";
import likeIcon from "../src/images/like.png";
import shareIcon from "../src/images/share.png";
import InnerPageHeader from './InnerPageHeader';

const About = () => {
	return (
		<>
			<InnerPageHeader />
			<div className="subheader">
				<h1 className="heading-style1">Medical Publications</h1>
			</div>
			<section className="viewallvideospage">
				<div className="container">
		    		<div className="row">
                        <div className="col-md-4">
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
                            <div className="theme-block-style">
                                <video loop className="trending-video" controls poster="{videoPoster}">
                                    <source src={dummyVideo} type="video/mp4" />
                                </video>
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
			</section>
		</>
	)
}

export default About;