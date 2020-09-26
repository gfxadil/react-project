import React from 'react';
import ReactDom from 'react-dom';
import aboutImg1 from "../src/images/olga-guryanova-rWiso0uMjAs-unsplash.jpg";
import aboutImg2 from "../src/images/national-cancer-institute-KrsoedfRAf4-unsplash.jpg";
import { NavLink } from 'react-router-dom';
import InnerPageHeader from './InnerPageHeader';
import Footer from './Footer';

const Pricing = () => {
	return (
		<>
			<InnerPageHeader />
				<div className="subheader">
					<h1 className="heading-style1">Pricing</h1>
				</div>
				<section className="content-section about-page-content">
				<div className="container">
					<div className="row align-items-center mb-5">
						<div className="col-md-6">
							<img src={aboutImg1} className="img-fluid" alt="about" />
						</div>
						<div className="col-md-6">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-md-6">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
						<div className="col-md-6">
							<img src={aboutImg2} className="img-fluid" alt="about" />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Pricing;