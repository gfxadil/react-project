import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import ViewAllVideos from './ViewAllVideos';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Calendar from './Calendar';
import News from './News';
import Feeds from './Feeds';
import EventDetail from './EventDetail';
import Impressum from './Impressum';
import Cookies from './Cookies';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import TermsCondition from './TermsCondition';
import Notifications from './Notifications';
import Contact from './Contact';
import Faqs from './Faqs';
import Setting from './Setting';
import BillingPlan from './BillingPlan';
import Invoice from './Invoice';
import ContentUpload from './ContentUpload';
import ViewAllDoctors from './ViewAllDoctors';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/pricing" component={Pricing} />
				<Route exact path="/viewallvideos" component={ViewAllVideos} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/calendar" component={Calendar} />
				<Route exact path="/news" component={News} />
				<Route exact path="/feeds" component={Feeds} />
				<Route exact path="/eventdetail" component={EventDetail} />
				<Route exact path="/impressum" component={Impressum} />
				<Route exact path="/cookies" component={Cookies} />
				<Route exact path="/privacy-policy" component={PrivacyPolicy} />
				<Route exact path="/terms-condition" component={TermsCondition} />
				<Route exact path="/notifications" component={Notifications} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/faqs" component={Faqs} />
				<Route exact path="/setting" component={Setting} />
				<Route exact path="/billing-plan" component={BillingPlan} />
				<Route exact path="/invoice" component={Invoice} />
				<Route exact path="/content-upload" component={ContentUpload} />
				<Route exact path="/view-all-doctors" component={ViewAllDoctors} />
				<Redirect to="/" />
			</Switch>
		</>
	)
}

export default App;