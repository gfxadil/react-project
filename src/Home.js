import React from 'react';
import ReactDom from 'react-dom';
import scrollImg from "../src/images/Group1269.png";
import nextWhiteIcon from "../src/images/next.png";
import nextBlueIcon from "../src/images/next-1.png";
import dummyVideo from "../src/images/dummy-video.mp4";
import videoPoster from "../src/images/video-poster.jpg";
import likeIcon from "../src/images/like.png";
import shareIcon from "../src/images/share.png";
import topDoctor1 from "../src/images/Group1238.png";
import topDoctor2 from "../src/images/Group1239.png";
import medicalImg1 from "../src/images/doc.jpg";
import liveVideoPoster from "../src/images/live-video.jpg";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import ViewAllVideos from './ViewAllVideos';

const Home = () => {
	return (
		<>
			<Header />
			<section className="main-banner">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 text-center">
							<h1>Sed ut perspiciatis unde omnis iste natus</h1>
							<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
							<NavLink to="#" className="theme-btn">Start a Free Trial</NavLink>
							<SearchBar />	
							<img src={scrollImg} className="img-fluid scrolling-img" alt="slider" />
						</div>
					</div>
				</div>
			</section>
			<section className="about-section">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-md-10">
							<h2 className="heading-style1">About <span>Us</span></h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
							<NavLink to="#" className="theme-btn mt-3">More Detail</NavLink>
						</div>
					</div>
				</div>
			</section>
			<section className="trending-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 trending-block">
							<div className="row mb-2">
								<div className="col-md-9">
									<h2 className="heading-style2">Trending <span>Videos</span></h2>
								</div>
								<div className="col-md-3">
									<NavLink to="/ViewAllVideos" className="hvr-icon-wobble-horizontal view-all-btn">
										View all <img src={nextWhiteIcon} className="img-fluid hvr-icon" alt="arrow" />
									</NavLink>
								</div>	
							</div>
							<div className="trending-slider row">
								<div className="col-md-6">
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
								<div className="col-md-6">
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
						<div className="col-md-6 text-center doctor-block">
							<div className="top-doctor">
								<h2 className="heading-style1">Top <span>Doctors</span></h2>
								<div className="row">
									<div className="col-md-6">
										<img src={topDoctor1} className="img-fluid" alt="doctor" />
										<h5>Neque porro quisquam</h5>
										<p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
									</div>
									<div className="col-md-6">
										<img src={topDoctor2} className="img-fluid" alt="doctor" />
										<h5>Neque porro quisquam</h5>
										<p>Sed ut perspiciatis unde omnis iste natus error sit volu ptatem</p>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</section>
			<section className="medical-publish">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="medical-block">
								<div className="row mb-2">
									<div className="col-md-9">
										<h2 className="heading-style2">Medical <span>Publications</span></h2>
									</div>
									<div className="col-md-3">
										<NavLink to="/ViewAllVideos" className="hvr-icon-wobble-horizontal view-all-btn">View all <img src={nextBlueIcon} className="img-fluid hvr-icon" alt="arrow" />
										</NavLink>
									</div>	
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="theme-block-style medical-list">
											<img src={medicalImg1} className="img-fluid" alt="medical" />
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
									<div className="col-md-6">
										<div className="theme-block-style medical-list">
											<img src={medicalImg1} className="img-fluid" alt="medical" />
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
						<div className="col-md-6">
							<div className="live-operate">
								<div className="row mb-2">
									<div className="col-md-9">
										<h2 className="heading-style2">Live Operations <span>Room</span></h2>
									</div>
									<div className="col-md-3">
										<NavLink to="#" className="hvr-icon-wobble-horizontal float-right view-all-btn">View all <img src={nextBlueIcon} className="img-fluid hvr-icon" alt="arrow" />	
										</NavLink>
									</div>	
								</div>
								<div className="row">
									<div className="col-md-12">
										<video width="100%" className="trending-video" controls poster={liveVideoPoster}>
											<source src={dummyVideo} type="video/mp4" />
										</video>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home;