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
import { Switch, Route, Redirect } from 'react-router-dom';

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
				<Redirect to="/" />
			</Switch>
		</>
	)
}

export default App;